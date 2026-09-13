import Navbar from "../components/Navbar.jsx";
import { CreditCard, Smartphone, Truck, Check, ShoppingBag } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { apiRequest } from "../lib/api.js";
import toast from "react-hot-toast";

const paymentMethods = [
  { id: "card", name: "Credit / Debit Card", icon: CreditCard },
  { id: "upi", name: "UPI", icon: Smartphone },
  { id: "cod", name: "Cash on Delivery", icon: Truck },
];

export default function Payment() {
  const { cartItems, itemTotal, deliveryFee, total, clearCart } = useCart();
  const { token, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  const [selectedMethod, setSelectedMethod] = useState("cod");
  const [cardNumber, setCardNumber] = useState("");
  const [cardName, setCardName] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [upi, setUpi] = useState("");
  const [placing, setPlacing] = useState(false);

  if (!isAuthenticated) {
    navigate("/login", { state: { from: { pathname: "/payment" } }, replace: true });
    return null;
  }

  const placeOrder = async () => {
    if (!state?.addressId) {
      toast.error("Delivery address is missing. Please go back to checkout.");
      navigate("/checkout");
      return;
    }
    if (!cartItems.length) {
      toast.error("Your cart is empty.");
      navigate("/cart");
      return;
    }
    if (selectedMethod === "card" && (!cardNumber || !cardName || !expiry || !cvv)) {
      toast.error("Please complete your card details.");
      return;
    }
    if (selectedMethod === "upi" && !upi.trim()) {
      toast.error("Please enter your UPI ID.");
      return;
    }

    setPlacing(true);
    try {
      const order = await apiRequest("/cart/checkout/", {
        token,
        method: "POST",
        body: {
          address_id: state.addressId,
          coupon_code: state.couponCode || "",
          payment_method: selectedMethod,
          notes: state.notes || "",
        },
      });
      clearCart();
      toast.success(`Order ${String(order.number).slice(0, 8)} placed successfully.`);
      navigate("/tracking", { replace: true, state: { orderId: order.id, orderNumber: order.number } });
    } catch (error) {
      toast.error(error.message);
    } finally {
      setPlacing(false);
    }
  };

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fffaf7]"><section className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-8"><p className="font-semibold text-orange-500">Secure Payment</p><h1 className="mt-2 text-4xl font-bold text-gray-900">Payment</h1><p className="mt-3 text-gray-500">Choose your preferred payment method.</p></div>
        <div className="mb-10 flex items-center rounded-3xl border border-orange-100 bg-white p-6 shadow-sm"><div className="flex flex-1 items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white"><Check size={18} /></div><b>Cart</b></div><div className="h-[2px] flex-1 bg-green-500" /><div className="flex flex-1 items-center justify-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white"><Check size={18} /></div><b>Checkout</b></div><div className="h-[2px] flex-1 bg-orange-200" /><div className="flex flex-1 items-center justify-end gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">3</div><b>Payment</b></div></div>

        <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">
          <section className="space-y-6"><div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold">Choose Payment Method</h2><div className="mt-6 space-y-4">{paymentMethods.map(({ id, name, icon: Icon }) => <button type="button" key={id} onClick={() => setSelectedMethod(id)} className={`flex w-full items-center justify-between rounded-2xl border p-5 text-left ${selectedMethod === id ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-orange-300"}`}><span className="flex items-center gap-4"><span className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500"><Icon size={22} /></span><b>{name}</b></span>{selectedMethod === id && <span className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-white"><Check size={16} /></span>}</button>)}</div></div>
            {selectedMethod === "card" && <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold">Card Details</h2><div className="mt-6 space-y-5"><input inputMode="numeric" maxLength={19} placeholder="Card Number" value={cardNumber} onChange={(e) => setCardNumber(e.target.value.replace(/\D/g, "").slice(0, 19))} className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-orange-500" /><input placeholder="Card Holder Name" value={cardName} onChange={(e) => setCardName(e.target.value)} className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-orange-500" /><div className="grid grid-cols-2 gap-4"><input placeholder="MM/YY" maxLength={5} value={expiry} onChange={(e) => setExpiry(e.target.value)} className="rounded-2xl border border-gray-200 p-4 outline-none focus:border-orange-500" /><input type="password" inputMode="numeric" maxLength={4} placeholder="CVV" value={cvv} onChange={(e) => setCvv(e.target.value.replace(/\D/g, ""))} className="rounded-2xl border border-gray-200 p-4 outline-none focus:border-orange-500" /></div><p className="text-sm text-gray-500">Payment gateway integration is not configured; this records the selected method as a pending payment.</p></div></div>}
            {selectedMethod === "upi" && <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold">UPI Payment</h2><input placeholder="example@upi" value={upi} onChange={(e) => setUpi(e.target.value)} className="mt-6 w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-orange-500" /><p className="mt-3 text-sm text-gray-500">Payment gateway integration is not configured; this records the selected method as a pending payment.</p></div>}
            {selectedMethod === "cod" && <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm"><h2 className="text-2xl font-bold">Cash on Delivery</h2><p className="mt-4 text-gray-500">Pay with cash when your order is delivered.</p></div>}
          </section>

          <aside><div className="sticky top-28 rounded-3xl border border-orange-100 bg-white p-7 shadow-sm"><div className="flex items-center gap-3"><ShoppingBag className="text-orange-500" /><h2 className="text-2xl font-bold">Order Summary</h2></div><p className="mt-2 text-sm text-gray-500">{cartItems.length} item(s)</p><div className="mt-6 space-y-4">{cartItems.map((item) => <div key={item.cartItemId} className="flex items-center gap-3"><div className="flex-1"><p className="font-semibold">{item.name}</p><p className="text-sm text-gray-500">Qty: {item.quantity}</p></div><b>₹{(item.price * item.quantity).toFixed(2)}</b></div>)}</div><div className="my-6 border-t border-dashed" /><div className="space-y-4 text-gray-600"><div className="flex justify-between"><span>Item Total</span><span>₹{itemTotal.toFixed(2)}</span></div><div className="flex justify-between"><span>Delivery Fee</span><span>₹{deliveryFee.toFixed(2)}</span></div><div className="flex justify-between"><span>Discount</span><span>₹0.00</span></div></div><div className="my-6 border-t" /><div className="flex justify-between"><span className="text-lg font-bold">Total Payable</span><span className="text-3xl font-bold text-orange-500">₹{total.toFixed(2)}</span></div><button type="button" disabled={placing || !cartItems.length} onClick={placeOrder} className="mt-8 w-full rounded-2xl bg-orange-500 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-600 disabled:opacity-50">{placing ? "Placing Order..." : `Pay ₹${total.toFixed(2)}`}</button><p className="mt-4 text-center text-sm text-gray-500">🔒 Your order is created only after the server confirms checkout.</p></div></aside>
        </div>
      </section></main>
    </>
  );
}