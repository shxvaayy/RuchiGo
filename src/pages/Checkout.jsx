import Navbar from "../components/Navbar.jsx";
import { MapPin, Plus, Home, BriefcaseBusiness, Check, ShoppingBag, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import { apiRequest } from "../lib/api.js";
import toast from "react-hot-toast";

export default function Checkout() {
  const { cartItems, itemTotal, deliveryFee, total, cartLoading } = useCart();
  const { token, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [addresses, setAddresses] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [instructions, setInstructions] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: { pathname: "/checkout" } }, replace: true });
      return;
    }
    let active = true;
    apiRequest("/addresses/", { token })
      .then((data) => {
        if (!active) return;
        const list = data.results || data;
        setAddresses(list);
        const defaultAddress = list.find((address) => address.is_default) || list[0];
        setSelectedAddress(defaultAddress?.id || null);
      })
      .catch((error) => toast.error(error.message))
      .finally(() => active && setLoading(false));
    return () => { active = false; };
  }, [isAuthenticated, navigate, token]);

  const selected = addresses.find((address) => address.id === selectedAddress);

  const continueToPayment = () => {
    if (!selectedAddress) {
      toast.error("Please select a delivery address.");
      return;
    }
    if (!cartItems.length) {
      toast.error("Your cart is empty.");
      navigate("/cart");
      return;
    }
    navigate("/payment", { state: { addressId: selectedAddress, notes: instructions, couponCode: location.state?.couponCode || "" } });
  };

  if (!isAuthenticated) return null;

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#fffaf7]">
        <section className="mx-auto max-w-7xl px-6 py-10">
          <div className="mb-8">
            <p className="font-semibold text-orange-500">Almost there</p>
            <h1 className="mt-2 text-4xl font-bold text-gray-900">Checkout</h1>
            <p className="mt-3 text-gray-500">Confirm your delivery details and review your order.</p>
          </div>

          <div className="mb-10 flex items-center rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
            <div className="flex flex-1 items-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white"><Check size={19} /></div><div><p className="text-xs text-gray-400">STEP 1</p><p className="font-semibold">Cart</p></div></div>
            <div className="h-[2px] flex-1 bg-orange-200" />
            <div className="flex flex-1 items-center justify-center gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 font-bold text-white">2</div><div><p className="text-xs text-orange-500">STEP 2</p><p className="font-semibold">Checkout</p></div></div>
            <div className="h-[2px] flex-1 bg-gray-200" />
            <div className="flex flex-1 items-center justify-end gap-3"><div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 font-bold text-gray-400">3</div><div><p className="text-xs text-gray-400">STEP 3</p><p className="font-semibold text-gray-500">Payment</p></div></div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[1.7fr_1fr]">
            <section className="space-y-7">
              <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">
                <div className="flex items-center justify-between">
                  <div><h2 className="text-2xl font-bold text-gray-900">Delivery Address</h2><p className="mt-2 text-sm text-gray-500">Select where you want your food delivered.</p></div>
                  <button type="button" onClick={() => navigate("/addresses")} className="flex items-center gap-2 rounded-xl bg-orange-50 px-4 py-3 font-semibold text-orange-500 hover:bg-orange-100"><Plus size={18} /> Manage Addresses</button>
                </div>
                {loading ? <p className="mt-7 text-gray-500">Loading addresses...</p> : addresses.length === 0 ? (
                  <div className="mt-7 rounded-2xl border border-dashed border-orange-200 p-8 text-center"><p className="font-semibold text-gray-800">No saved addresses</p><p className="mt-2 text-sm text-gray-500">Add an address before placing your order.</p><button type="button" onClick={() => navigate("/addresses")} className="mt-5 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white">Add Address</button></div>
                ) : (
                  <div className="mt-7 grid gap-5 md:grid-cols-2">
                    {addresses.map((address) => (
                      <button type="button" key={address.id} onClick={() => setSelectedAddress(address.id)} className={`relative text-left rounded-2xl border p-5 transition ${selectedAddress === address.id ? "border-orange-500 bg-orange-50" : "border-gray-200 hover:border-orange-300"}`}>
                        {selectedAddress === address.id && <div className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full bg-orange-500 text-white"><Check size={14} /></div>}
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-orange-500 shadow-sm">{address.label?.toLowerCase() === "work" ? <BriefcaseBusiness size={20} /> : <Home size={20} />}</div>
                        <h3 className="mt-4 font-bold text-gray-900">{address.label || "Address"}</h3>
                        <p className="mt-2 text-sm leading-6 text-gray-600">{address.line1}{address.line2 ? `, ${address.line2}` : ""}<br />{address.city}, {address.state} - {address.postal_code}</p>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">
                <div className="flex items-center gap-3"><MapPin className="text-orange-500" /><h2 className="text-2xl font-bold text-gray-900">Delivery Instructions</h2></div>
                <textarea rows={4} value={instructions} onChange={(e) => setInstructions(e.target.value)} placeholder="Example: Call me when you arrive, leave the order at the door..." className="mt-6 w-full resize-none rounded-2xl border border-gray-200 p-5 text-gray-700 outline-none focus:border-orange-500" />
              </div>
            </section>

            <aside><div className="sticky top-28 rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">
              <div className="flex items-center gap-3"><ShoppingBag className="text-orange-500" /><h2 className="text-2xl font-bold text-gray-900">Order Summary</h2></div>
              <p className="mt-2 text-sm text-gray-500">{cartItems.length} item(s) in your order</p>
              <div className="mt-6 space-y-4">{cartItems.map((item) => <div key={item.cartItemId} className="flex items-center gap-4"><div className="h-14 w-14 overflow-hidden rounded-xl bg-orange-100">{item.image ? <img src={item.image} alt="" className="h-full w-full object-cover" /> : null}</div><div className="flex-1"><p className="font-semibold text-gray-900">{item.name}</p><p className="text-sm text-gray-500">Qty: {item.quantity}</p></div><p className="font-bold">₹{(item.price * item.quantity).toFixed(2)}</p></div>)}</div>
              <div className="my-6 border-t border-dashed border-gray-200" />
              <div className="space-y-4 text-sm text-gray-600"><div className="flex justify-between"><span>Item Total</span><span>₹{itemTotal.toFixed(2)}</span></div><div className="flex justify-between"><span>Delivery Fee</span><span>₹{deliveryFee.toFixed(2)}</span></div><div className="flex justify-between"><span>Discount</span><span>₹0.00</span></div></div>
              <div className="my-6 border-t border-gray-200" /><div className="flex items-center justify-between"><span className="text-lg font-bold">Total</span><span className="text-3xl font-bold">₹{total.toFixed(2)}</span></div>
              <button type="button" disabled={loading || cartLoading || !selectedAddress || !cartItems.length} onClick={continueToPayment} className="mt-7 flex w-full items-center justify-center gap-3 rounded-2xl bg-orange-500 px-6 py-4 text-lg font-semibold text-white shadow-lg hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50">Continue to Payment <ArrowRight size={20} /></button>
              {selected && <p className="mt-4 text-sm text-gray-500">Delivering to: {selected.city}, {selected.state}</p>}
            </div></aside>
          </div>
        </section>
      </main>
    </>
  );
}