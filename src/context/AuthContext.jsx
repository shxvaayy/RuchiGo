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

const defaultAuthState = {
  token: null,
  user: null,
  role: "guest",
  expiresAt: null,
};

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
    if (!parsed?.token || !parsed?.user) {
      window.localStorage.removeItem(STORAGE_KEY);
      return defaultAuthState;
    }

    if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
      window.localStorage.removeItem(STORAGE_KEY);
      return defaultAuthState;
    }

    return parsed;
  } catch {
    window.localStorage.removeItem(STORAGE_KEY);
    return defaultAuthState;
  }
}

function persistAuth(nextAuth) {
  if (typeof window === "undefined") return;

  const payload = {
    ...nextAuth,
    expiresAt: Date.now() + SESSION_DURATION_MS,
  };

  window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
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
    if (!auth.token || !auth.user) {
      clearAuthStorage();
      return;
    }

    persistAuth(auth);
  }, [auth]);

  const logout = useCallback((message = "Logged out successfully.") => {
    setAuth(defaultAuthState);
    clearAuthStorage();
    setLoading(false);
    navigate("/login", { replace: true });
    toast.success(message);
  }, [navigate]);

  useEffect(() => {
    if (!auth.token || !auth.user || !auth.expiresAt) return undefined;

    const timeoutId = window.setTimeout(() => {
      if (Date.now() > auth.expiresAt) {
        logout("Session expired. Please log in again.");
      }
    }, 1000);

    return () => window.clearTimeout(timeoutId);
  }, [auth, logout]);

  const login = useCallback(async ({ email, password, role = "customer" }) => {
    setLoading(true);

    const normalizedEmail = (email || "").trim().toLowerCase();
    const normalizedPassword = (password || "").trim();
    const safeRole = role || "customer";

    if (!normalizedEmail || !normalizedPassword || normalizedPassword.length < 6) {
      setLoading(false);
      toast.error("Please enter a valid email and password.");
      return false;
    }

    try {
      const data = await apiRequest("/auth/login/", { method: "POST", body: { email: normalizedEmail, password: normalizedPassword, role: safeRole } });
      const user = { ...data.user, name: `${data.user.first_name || ""} ${data.user.last_name || ""}`.trim() || data.user.email };
      const nextAuth = { token: data.tokens.access, refreshToken: data.tokens.refresh, user, role: user.role, expiresAt: Date.now() + SESSION_DURATION_MS };

      setAuth(nextAuth); toast.success("Login successful.");

      const fromPath = location.state?.from?.pathname;
      navigate(fromPath || buildRedirectPath(user.role), { replace: true });
      return true;
    } catch (error) { toast.error(error.message); return false; } finally { setLoading(false); }
  }, [location.state, navigate]);

  const register = useCallback(async ({ fullName, email, phone, password, role = "customer" }) => {
    setLoading(true);

    const normalizedName = (fullName || "").trim();
    const normalizedEmail = (email || "").trim().toLowerCase();
    const normalizedPhone = (phone || "").trim();
    const normalizedPassword = (password || "").trim();

    if (!normalizedName || !normalizedEmail || !normalizedPhone || normalizedPassword.length < 6) {
      setLoading(false);
      toast.error("Please complete all registration details.");
      return false;
    }

    try {
      const [first_name, ...rest] = normalizedName.split(/\s+/);
      const data = await apiRequest("/auth/register/", { method: "POST", body: { email: normalizedEmail, password: normalizedPassword, phone: normalizedPhone, first_name, last_name: rest.join(" "), role: role || "customer" } });
      const user = { ...data.user, name: normalizedName };
      setAuth({ token: data.tokens.access, refreshToken: data.tokens.refresh, user, role: user.role, expiresAt: Date.now() + SESSION_DURATION_MS });
      toast.success("Account created successfully."); navigate(buildRedirectPath(user.role), { replace: true }); return true;
    } catch (error) { toast.error(error.message); return false; } finally { setLoading(false); }
  }, [navigate]);

  const value = useMemo(
    () => ({
      ...auth,
      isAuthenticated: Boolean(auth.token && auth.user),
      loading,
      login,
      register,
      logout,
    }),
    [auth, loading, login, logout, register]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
