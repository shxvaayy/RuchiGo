/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useMemo, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { apiRequest } from "../lib/api.js";

const AuthContext = createContext(null);
const STORAGE_KEY = "ruchigo-auth";
const CART_KEY = "ruchigo-cart";
const WISHLIST_KEY = "ruchigo-wishlist";
const CACHE_KEY = "ruchigo-cache";
const SESSION_DURATION_MS = 8 * 60 * 60 * 1000;
const defaultAuthState = { token: null, refreshToken: null, user: null, role: "guest", expiresAt: null };

function buildRedirectPath(role) {
  if (role === "restaurant") return "/restaurant-dashboard";
  if (role === "delivery") return "/delivery-dashboard";
  if (role === "admin") return "/admin-dashboard";
  return "/";
}

function readStoredAuth() {
  if (typeof window === "undefined") return defaultAuthState;
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return defaultAuthState;
    const parsed = JSON.parse(raw);
    if (!parsed?.token || !parsed?.user || !parsed?.expiresAt || Date.now() >= parsed.expiresAt) {
      window.localStorage.removeItem(STORAGE_KEY);
      return defaultAuthState;
    }
    return parsed;
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return defaultAuthState;
  }
}

function persistAuth(auth) {
  if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, JSON.stringify(auth));
}
function clearAuthStorage() {
  if (typeof window === "undefined") return;
  window.localStorage.removeItem(STORAGE_KEY);
  window.localStorage.removeItem(CART_KEY);
  window.localStorage.removeItem(WISHLIST_KEY);
  window.localStorage.removeItem(CACHE_KEY);
}

export function AuthProvider({ children }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [auth, setAuth] = useState(() => readStoredAuth());
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!auth.token || !auth.user) clearAuthStorage();
    else persistAuth(auth);
  }, [auth]);

  const logout = useCallback((message = "Logged out successfully.") => {
    setAuth(defaultAuthState);
    clearAuthStorage();
    setLoading(false);
    navigate("/login", { replace: true });
    if (message) toast.success(message);
  }, [navigate]);

  useEffect(() => {
    if (!auth.token || !auth.expiresAt) return undefined;
    const remaining = Math.max(0, auth.expiresAt - Date.now());
    const timeoutId = window.setTimeout(() => logout("Session expired. Please log in again."), remaining);
    return () => window.clearTimeout(timeoutId);
  }, [auth.token, auth.expiresAt, logout]);

  const login = useCallback(async ({ email, password, role = "customer" }) => {
    setLoading(true);
    const normalizedEmail = (email || "").trim().toLowerCase();
    const rawPassword = password || "";
    if (!normalizedEmail || rawPassword.length < 8) {
      setLoading(false);
      toast.error("Password must be at least 8 characters.");
      return false;
    }
    try {
      const data = await apiRequest("/auth/login/", { method: "POST", body: { email: normalizedEmail, password: rawPassword, role: role || "customer" } });
      const user = { ...data.user, name: `${data.user.first_name || ""} ${data.user.last_name || ""}`.trim() || data.user.email };
      setAuth({ token: data.tokens.access, refreshToken: data.tokens.refresh, user, role: user.role, expiresAt: Date.now() + SESSION_DURATION_MS });
      toast.success("Login successful.");
      navigate(location.state?.from?.pathname || buildRedirectPath(user.role), { replace: true });
      return true;
    } catch (error) { toast.error(error.message); return false; } finally { setLoading(false); }
  }, [location.state, navigate]);

  const register = useCallback(async ({ fullName, email, phone, password, role = "customer" }) => {
    setLoading(true);
    const normalizedName = (fullName || "").trim();
    const normalizedEmail = (email || "").trim().toLowerCase();
    const normalizedPhone = (phone || "").trim();
    const rawPassword = password || "";
    if (!normalizedName || !normalizedEmail || !normalizedPhone || rawPassword.length < 8) {
      setLoading(false);
      toast.error("Please complete all details. Password must be at least 8 characters.");
      return false;
    }
    try {
      const [first_name, ...rest] = normalizedName.split(/\s+/);
      const data = await apiRequest("/auth/register/", { method: "POST", body: { email: normalizedEmail, password: rawPassword, phone: normalizedPhone, first_name, last_name: rest.join(" "), role: role || "customer" } });
      const user = { ...data.user, name: normalizedName };
      setAuth({ token: data.tokens.access, refreshToken: data.tokens.refresh, user, role: user.role, expiresAt: Date.now() + SESSION_DURATION_MS });
      toast.success("Account created successfully.");
      navigate(buildRedirectPath(user.role), { replace: true });
      return true;
    } catch (error) { toast.error(error.message); return false; } finally { setLoading(false); }
  }, [navigate]);

  const value = useMemo(() => ({ ...auth, isAuthenticated: Boolean(auth.token && auth.user), loading, login, register, logout }), [auth, loading, login, logout, register]);
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}