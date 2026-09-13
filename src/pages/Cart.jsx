import { useState } from "react";
import Navbar from "../components/Navbar.jsx";
import { Minus, Plus, Trash2, ShoppingBag, ArrowRight, Truck, Gift } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";

export default function Cart() {
  const { cartItems, increaseQuantity, decreaseQuantity, removeFromCart, itemTotal, deliveryFee, total } = useCart();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [coupon, setCoupon] = useState("");
  const [couponApplied, setCouponApplied] = useState(false);

  const handleCheckout = () => {
    if (!isAuthenticated) {
      toast.error("Please login to continue.");
      navigate("/login", { state: { from: { pathname: location.pathname } } });
      return;
    }
    if (!cartItems.length) {
      toast.error("Your cart is empty.");
      return;
    }
    navigate("/checkout", { state: { couponCode: couponApplied ? coupon.trim() : "" } });
  };

  const applyCoupon = () => {
    if (!coupon.trim()) {
      toast.error("Enter a coupon code.");
      return;
    }
    setCouponApplied(true);
    toast.success("Coupon saved. It will be validated at checkout.");
  };

  return (
    <><Navbar /><main className="min-h-screen bg-[#fff8f5]"><section className="mx-auto max-w-7xl px-6 py-10">
      <div className="mb-10"><p className="font-semibold text-orange-500">🍽 Your Delicious Order</p><h1 className="mt-3 text-5xl font-bold text-gray-900">Shopping Cart</h1><p className="mt-4 text-lg text-gray-500">Review your selected food before checkout.</p></div>
      <div className="grid gap-8 lg:grid-cols-[1.8fr_1fr]">
        <section><div className="rounded-[32px] bg-white p-8 shadow-lg"><div className="flex items-center justify-between border-b pb-5"><div className="flex items-center gap-3"><ShoppingBag className="text-orange-500" /><h2 className="text-2xl font-bold">Your Cart</h2></div><span className="rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600">{cartItems.length} Items</span></div>
          {cartItems.length === 0 ? <div className="py-20 text-center"><ShoppingBag size={72} className="mx-auto text-orange-300" /><h2 className="mt-6 text-3xl font-bold">Your Cart is Empty</h2><p className="mt-4 text-gray-500">Add delicious food to your cart.</p><Link to="/" className="mt-8 inline-flex rounded-xl bg-orange-500 px-8 py-3 font-semibold text-white">Browse Restaurants</Link></div> : <div className="divide-y">{cartItems.map((item) => <div key={item.cartItemId} className="flex gap-5 py-7"><div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-orange-100">{item.image ? <img src={item.image} alt={item.name} className="h-full w-full object-cover" /> : null}</div><div className="flex flex-1 flex-col justify-between"><div className="flex items-start justify-between gap-4"><div><h3 className="text-xl font-bold">{item.name}</h3><p className="mt-1 text-gray-500">₹{item.price.toFixed(2)} each</p></div><button type="button" onClick={() => removeFromCart(item.id)} className="rounded-xl bg-red-50 p-2 text-red-500"><Trash2 size={18} /></button></div><div className="flex items-center justify-between"><p className="text-xl font-bold text-orange-600">₹{(item.price * item.quantity).toFixed(2)}</p><div className="flex items-center gap-4"><button type="button" onClick={() => decreaseQuantity(item.id)} className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-100"><Minus size={18} /></button><b>{item.quantity}</b><button type="button" onClick={() => increaseQuantity(item.id)} className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 text-white"><Plus size={18} /></button></div></div></div></div>)}</div>}
        </div></section>
        <aside><div className="sticky top-28 rounded-[32px] bg-white p-8 shadow-lg"><h2 className="text-3xl font-bold">Order Summary</h2><div className="mt-7 flex overflow-hidden rounded-2xl border border-orange-200"><div className="flex items-center px-4"><Gift className="text-orange-500" /></div><input value={coupon} onChange={(e) => { setCoupon(e.target.value.toUpperCase()); setCouponApplied(false); }} placeholder="Enter coupon code" className="flex-1 px-4 py-4 outline-none" /><button type="button" onClick={applyCoupon} className="bg-orange-500 px-5 font-semibold text-white">Apply</button></div>{couponApplied && <p className="mt-2 text-sm text-green-600">Coupon will be validated against the current order at checkout.</p>}
          <div className="mt-7 rounded-2xl bg-orange-50 p-5"><div className="flex items-center gap-3"><Truck className="text-orange-500" /><div><h3 className="font-bold">Delivery Fee</h3><p className="text-sm text-gray-500">₹40 below ₹500, free at ₹500+</p></div></div></div>
          <div className="mt-8 space-y-4"><div className="flex justify-between"><span>Item Total</span><span>₹{itemTotal.toFixed(2)}</span></div><div className="flex justify-between"><span>Delivery Fee</span><span>₹{deliveryFee.toFixed(2)}</span></div><div className="flex justify-between text-gray-500"><span>Discount</span><span>Applied at checkout</span></div></div><div className="my-7 border-t border-dashed" /><div className="flex items-center justify-between"><span className="text-2xl font-bold">Total</span><span className="text-4xl font-bold text-orange-600">₹{total.toFixed(2)}</span></div><button type="button" disabled={!cartItems.length} onClick={handleCheckout} className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-orange-500 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-600 disabled:opacity-50">Proceed To Checkout <ArrowRight size={20} /></button><Link to="/" className="mt-5 flex w-full items-center justify-center rounded-2xl border-2 border-orange-500 py-4 font-semibold text-orange-500">Continue Shopping</Link></div></aside>
      </div></section></main></>
  );
}