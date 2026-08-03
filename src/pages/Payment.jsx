import Navbar from "../components/Navbar.jsx";
import {
  CreditCard,
  Smartphone,
  Wallet,
  Building2,
  Truck,
  Check,
  ShoppingBag,
} from "lucide-react";

import { Link, useNavigate, useLocation } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../context/CartContext.jsx";
import { useAuth } from "../context/AuthContext.jsx";
import toast from "react-hot-toast";

const paymentMethods = [
  {
    id: 1,
    name: "Credit / Debit Card",
    icon: CreditCard,
  },
  {
    id: 2,
    name: "UPI",
    icon: Smartphone,
  },
  {
    id: 3,
    name: "Wallet",
    icon: Wallet,
  },
  {
    id: 4,
    name: "Net Banking",
    icon: Building2,
  },
  {
    id: 5,
    name: "Cash on Delivery",
    icon: Truck,
  },
];

export default function Payment() {

  const {
    cartItems,
    itemTotal,
    deliveryFee,
    platformFee,
    discount,
    total,
    clearCart,
  } = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth();

  const [selectedMethod, setSelectedMethod] =
    useState(1);

  const [cardNumber, setCardNumber] =
    useState("");

  const [cardName, setCardName] =
    useState("");

  const [expiry, setExpiry] =
    useState("");

  const [cvv, setCvv] =
    useState("");

  const [upi, setUpi] =
    useState("");

  if (!isAuthenticated) {
    toast.error("Please login to continue.");
    navigate("/login", { state: { from: { pathname: location.pathname } }, replace: true });
    return null;
  }

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fffaf7]">

        <section className="mx-auto max-w-7xl px-6 py-10">

          {/* Header */}

          <div className="mb-8">

            <p className="font-semibold text-orange-500">
              Secure Payment
            </p>

            <h1 className="mt-2 text-4xl font-bold text-gray-900">
              Payment
            </h1>

            <p className="mt-3 text-gray-500">
              Choose your preferred payment method.
            </p>

          </div>

          {/* Progress */}

          <div className="mb-10 flex items-center rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">

            <div className="flex flex-1 items-center">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                <Check size={18} />
              </div>

              <div className="ml-3">
                <p className="text-xs text-gray-400">STEP 1</p>
                <p className="font-semibold">Cart</p>
              </div>

            </div>

            <div className="h-[2px] flex-1 bg-green-500" />

            <div className="flex flex-1 items-center justify-center">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                <Check size={18} />
              </div>

              <div className="ml-3">
                <p className="text-xs text-gray-400">STEP 2</p>
                <p className="font-semibold">Checkout</p>
              </div>

            </div>

            <div className="h-[2px] flex-1 bg-orange-200" />

            <div className="flex flex-1 items-center justify-end">

              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
                3
              </div>

              <div className="ml-3">
                <p className="text-xs text-orange-500">
                  STEP 3
                </p>

                <p className="font-semibold">
                  Payment
                </p>

              </div>

            </div>

          </div>

          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">

            {/* Left */}

            <section className="space-y-6">
                            {/* Payment Methods */}

              <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">

                <h2 className="text-2xl font-bold text-gray-900">
                  Choose Payment Method
                </h2>

                <div className="mt-6 space-y-4">

                  {paymentMethods.map((method) => {

                    const Icon = method.icon;

                    return (

                      <div
                        key={method.id}
                        onClick={() => setSelectedMethod(method.id)}
                        className={`cursor-pointer rounded-2xl border p-5 transition ${
                          selectedMethod === method.id
                            ? "border-orange-500 bg-orange-50"
                            : "border-gray-200 hover:border-orange-300"
                        }`}
                      >

                        <div className="flex items-center justify-between">

                          <div className="flex items-center gap-4">

                            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-500">

                              <Icon size={22} />

                            </div>

                            <h3 className="font-semibold text-gray-900">
                              {method.name}
                            </h3>

                          </div>

                          {selectedMethod === method.id && (

                            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-orange-500 text-white">

                              <Check size={16} />

                            </div>

                          )}

                        </div>

                      </div>

                    );

                  })}

                </div>

              </div>

              {/* Credit / Debit Card */}

              {selectedMethod === 1 && (

                <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">

                  <h2 className="text-2xl font-bold">
                    Card Details
                  </h2>

                  <div className="mt-6 space-y-5">

                    <input
                      type="text"
                      placeholder="Card Number"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(e.target.value)}
                      className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-orange-500"
                    />

                    <input
                      type="text"
                      placeholder="Card Holder Name"
                      value={cardName}
                      onChange={(e) => setCardName(e.target.value)}
                      className="w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-orange-500"
                    />

                    <div className="grid grid-cols-2 gap-4">

                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        className="rounded-2xl border border-gray-200 p-4 outline-none focus:border-orange-500"
                      />

                      <input
                        type="password"
                        placeholder="CVV"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value)}
                        className="rounded-2xl border border-gray-200 p-4 outline-none focus:border-orange-500"
                      />

                    </div>

                  </div>

                </div>

              )}

              {/* UPI */}

              {selectedMethod === 2 && (

                <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">

                  <h2 className="text-2xl font-bold">
                    UPI Payment
                  </h2>

                  <input
                    type="text"
                    placeholder="example@upi"
                    value={upi}
                    onChange={(e) => setUpi(e.target.value)}
                    className="mt-6 w-full rounded-2xl border border-gray-200 p-4 outline-none focus:border-orange-500"
                  />

                </div>

              )}

              {/* Wallet */}

              {selectedMethod === 3 && (

                <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">

                  <h2 className="text-2xl font-bold">
                    Wallet Payment
                  </h2>

                  <p className="mt-4 text-gray-500">
                    Pay securely using your wallet balance.
                  </p>

                </div>

              )}

              {/* Net Banking */}

              {selectedMethod === 4 && (

                <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">

                  <h2 className="text-2xl font-bold">
                    Net Banking
                  </h2>

                  <p className="mt-4 text-gray-500">
                    Select your bank during payment.
                  </p>

                </div>

              )}

              {/* Cash on Delivery */}

              {selectedMethod === 5 && (

                <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">

                  <h2 className="text-2xl font-bold">
                    Cash on Delivery
                  </h2>

                  <p className="mt-4 text-gray-500">
                    Pay with cash when your order is delivered.
                  </p>

                </div>

              )}

            </section>

            {/* Order Summary */}

            <aside>
                            <div className="sticky top-28 rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">

                <div className="flex items-center gap-3">

                  <ShoppingBag className="text-orange-500" />

                  <h2 className="text-2xl font-bold text-gray-900">
                    Order Summary
                  </h2>

                </div>

                <p className="mt-2 text-sm text-gray-500">
                  {cartItems.length} Item(s) in your order
                </p>

                <div className="mt-6 space-y-5">

                  {cartItems.length === 0 ? (

                    <div className="py-8 text-center text-gray-500">
                      Your cart is empty.
                    </div>

                  ) : (

                    cartItems.map((item) => (

                      <div
                        key={item.id}
                        className="flex items-center gap-4"
                      >

                        <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-orange-100 text-3xl">
                          {item.image}
                        </div>

                        <div className="flex-1">

                          <p className="font-semibold text-gray-900">
                            {item.name}
                          </p>

                          <p className="mt-1 text-sm text-gray-500">
                            {item.restaurant}
                          </p>

                          <p className="mt-1 text-sm text-gray-500">
                            Qty : {item.quantity}
                          </p>

                        </div>

                        <p className="font-bold">
                          ₹{item.price * item.quantity}
                        </p>

                      </div>

                    ))

                  )}

                </div>

                <div className="my-6 border-t border-dashed border-gray-200" />

                <div className="space-y-4 text-gray-600">

                  <div className="flex justify-between">
                    <span>Item Total</span>
                    <span>₹{itemTotal}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Delivery Fee</span>
                    <span>₹{deliveryFee}</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Platform Fee</span>
                    <span>₹{platformFee}</span>
                  </div>

                  <div className="flex justify-between text-green-600">
                    <span>Discount</span>
                    <span>- ₹{discount}</span>
                  </div>

                </div>

                <div className="my-6 border-t border-gray-200" />

                <div className="flex items-center justify-between">

                  <span className="text-lg font-bold text-gray-900">
                    Total Payable
                  </span>

                  <span className="text-3xl font-bold text-orange-500">
                    ₹{total}
                  </span>

                </div>

                {discount > 0 && (
                  <p className="mt-2 text-sm text-green-600">
                    🎉 You saved ₹{discount} on this order
                  </p>
                )}

                {cartItems.length > 0 ? (

                  <Link
                    to="/tracking"
                    onClick={() => clearCart()}
                    className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-orange-500 px-6 py-4 text-lg font-semibold text-white shadow-lg transition hover:bg-orange-600"
                  >
                    Pay ₹{total}
                  </Link>

                ) : (

                  <Link
                    to="/"
                    className="mt-8 flex w-full items-center justify-center rounded-2xl border-2 border-orange-500 px-6 py-4 font-semibold text-orange-500 transition hover:bg-orange-50"
                  >
                    Continue Shopping
                  </Link>

                )}

                <p className="mt-4 text-center text-sm text-gray-500">
                  🔒 100% Secure Payment
                </p>

              </div>

            </aside>

          </div>

        </section>

      </main>

    </>

  );

}