/* eslint-disable react-refresh/only-export-components */
import { createContext, useCallback, useContext, useEffect, useMemo, useState } from "react";
import { useAuth } from "./AuthContext.jsx";
import { apiRequest } from "../lib/api.js";
import toast from "react-hot-toast";

const CartContext = createContext(null);

function normalizeItem(item) {
  const detail = item.menu_item_detail || {};
  return {
    id: item.menu_item,
    cartItemId: item.id,
    name: detail.name || "Item",
    price: Number(detail.price || 0),
    image: detail.image || "",
    restaurant: detail.restaurant_name || "",
    restaurantId: detail.restaurant,
    quantity: Number(item.quantity || 1),
    raw: item,
  };
}

export function CartProvider({ children }) {
  const { token, isAuthenticated } = useAuth();
  const [cartItems, setCartItems] = useState([]);
  const [cartLoading, setCartLoading] = useState(false);

  const loadCart = useCallback(async () => {
    if (!token) {
      setCartItems([]);
      return;
    }
    setCartLoading(true);
    try {
      const data = await apiRequest("/cart/", { token });
      setCartItems((data.items || []).map(normalizeItem));
    } catch (error) {
      toast.error(error.message);
    } finally {
      setCartLoading(false);
    }
  }, [token]);

  useEffect(() => {
    if (isAuthenticated) loadCart();
    else setCartItems([]);
  }, [isAuthenticated, loadCart]);

  const refreshFromResponse = (data) => setCartItems((data.items || []).map(normalizeItem));

  const addToCart = useCallback(async (food) => {
    if (!token) {
      toast.error("Please login to add items to your cart.");
      return false;
    }
    try {
      const data = await apiRequest("/cart/items/", {
        token,
        method: "POST",
        body: { menu_item: food.id, quantity: 1 },
      });
      refreshFromResponse(data);
      toast.success("Added to cart.");
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  }, [token]);

  const updateQuantity = useCallback(async (cartItemId, quantity) => {
    if (!token) return false;
    try {
      const data = await apiRequest(`/cart/items/${cartItemId}/`, {
        token,
        method: "PATCH",
        body: { quantity },
      });
      refreshFromResponse(data);
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  }, [token]);

  const increaseQuantity = useCallback((menuItemId) => {
    const item = cartItems.find((entry) => entry.id === menuItemId);
    if (item) updateQuantity(item.cartItemId, Math.min(item.quantity + 1, 99));
  }, [cartItems, updateQuantity]);

  const decreaseQuantity = useCallback((menuItemId) => {
    const item = cartItems.find((entry) => entry.id === menuItemId);
    if (!item) return;
    if (item.quantity <= 1) removeFromCart(menuItemId);
    else updateQuantity(item.cartItemId, item.quantity - 1);
  }, [cartItems, updateQuantity]);

  const removeFromCart = useCallback(async (menuItemId) => {
    const item = cartItems.find((entry) => entry.id === menuItemId);
    if (!item || !token) return false;
    try {
      const data = await apiRequest(`/cart/items/${item.cartItemId}/`, {
        token,
        method: "DELETE",
      });
      refreshFromResponse(data);
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    }
  }, [cartItems, token]);

  const clearCart = useCallback(() => setCartItems([]), []);

  const itemTotal = useMemo(() => cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0), [cartItems]);
  const deliveryFee = itemTotal > 0 && itemTotal < 500 ? 40 : 0;
  const discount = 0;
  const total = itemTotal + deliveryFee - discount;

  const value = useMemo(() => ({
    cartItems,
    cartLoading,
    reloadCart: loadCart,
    addToCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    clearCart,
    itemTotal,
    deliveryFee,
    platformFee: 0,
    discount,
    total,
  }), [cartItems, cartLoading, loadCart, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart, itemTotal, deliveryFee, total]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}