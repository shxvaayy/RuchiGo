import Navbar from "../components/Navbar.jsx";
import {
  Check,
  ChefHat,
  Bike,
  Home,
  MapPin,
  Phone,
  MessageCircle,
  Clock,
  Navigation,
  PackageCheck,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext.jsx";

const orderSteps = [
  {
    title: "Order Confirmed",
    description: "Your order has been confirmed",
    icon: Check,
    completed: true,
  },
  {
    title: "Preparing Food",
    description: "Restaurant is preparing your order",
    icon: ChefHat,
    completed: true,
  },
  {
    title: "Out for Delivery",
    description: "Your delivery partner is on the way",
    icon: Bike,
    completed: true,
    active: true,
  },
  {
    title: "Delivered",
    description: "Order will be delivered soon",
    icon: Home,
    completed: false,
  },
];

export default function Tracking() {

  const {
    cartItems,
    total,
  } = useCart();

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[#fffaf7]">

        <section className="mx-auto max-w-7xl px-6 py-10">

          {/* Header */}

          <div className="mb-8 flex flex-col justify-between gap-5 md:flex-row md:items-end">

            <div>

              <p className="font-semibold text-orange-500">
                Live Order
              </p>

              <h1 className="mt-2 text-4xl font-bold text-gray-900">
                Track Your Order
              </h1>

              <p className="mt-3 text-gray-500">
                Order #RG202600128
              </p>

            </div>

            <div className="rounded-2xl bg-green-50 px-5 py-3 text-green-600">

              <div className="flex items-center gap-2 font-semibold">

                <Clock size={18} />

                Arriving in 12 mins

              </div>

            </div>

          </div>

          <div className="grid gap-8 lg:grid-cols-[1.6fr_1fr]">

            {/* Left Side */}

            <section className="space-y-7">

              {/* Live Map */}
                            <div className="relative min-h-[480px] overflow-hidden rounded-[32px] border border-orange-100 bg-[#f4efe8] shadow-sm">

                {/* Fake Roads */}

                <div className="absolute left-[-10%] top-[35%] h-6 w-[120%] rotate-6 bg-white shadow-sm" />

                <div className="absolute left-[30%] top-[-10%] h-[120%] w-6 -rotate-12 bg-white shadow-sm" />

                <div className="absolute right-[18%] top-[-10%] h-[120%] w-5 rotate-[20deg] bg-white shadow-sm" />

                <div className="absolute left-[-10%] top-[70%] h-5 w-[120%] -rotate-3 bg-white shadow-sm" />

                {/* Restaurant */}

                <div className="absolute left-[20%] top-[25%] text-center">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white text-2xl shadow-lg">
                    🍛
                  </div>

                  <p className="mt-2 rounded-lg bg-white px-3 py-1 text-xs font-semibold shadow">
                    Paradise Biryani
                  </p>

                </div>

                {/* Delivery Partner */}

                <div className="absolute left-[52%] top-[52%] text-center">

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-full bg-orange-500 text-white shadow-xl">

                    <Bike size={30} />

                    <span className="absolute h-20 w-20 animate-ping rounded-full bg-orange-400/30"></span>

                  </div>

                  <p className="mt-2 rounded-lg bg-white px-3 py-1 text-xs font-semibold shadow">
                    Delivery Partner
                  </p>

                </div>

                {/* Home */}

                <div className="absolute bottom-[16%] right-[14%] text-center">

                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg">

                    <Home size={24} />

                  </div>

                  <p className="mt-2 rounded-lg bg-white px-3 py-1 text-xs font-semibold shadow">
                    Your Location
                  </p>

                </div>

                {/* Badge */}

                <div className="absolute left-5 top-5 flex items-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-gray-700 shadow">

                  <Navigation
                    size={18}
                    className="text-orange-500"
                  />

                  Live Tracking

                </div>

              </div>

              {/* Delivery Partner */}

              <div className="flex flex-col gap-5 rounded-3xl border border-orange-100 bg-white p-6 shadow-sm sm:flex-row sm:items-center">

                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-orange-100 text-3xl">
                  🧑‍🦱
                </div>

                <div className="flex-1">

                  <p className="text-sm text-gray-500">
                    Your delivery partner
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-gray-900">
                    Rahul Kumar
                  </h3>

                  <p className="mt-1 text-sm text-gray-500">
                    ⭐ 4.9 • 1,240 Deliveries
                  </p>

                </div>

                <div className="flex gap-3">

                  <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-green-50 text-green-600 transition hover:bg-green-500 hover:text-white">

                    <Phone size={21} />

                  </button>

                  <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition hover:bg-orange-500 hover:text-white">

                    <MessageCircle size={21} />

                  </button>

                </div>

              </div>

            </section>

            {/* Right Side */}

            <aside className="space-y-7">

              {/* Order Status */}

              <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">

                <h2 className="text-2xl font-bold text-gray-900">
                  Order Status
                </h2>

                <div className="mt-7">

                  {orderSteps.map((step, index) => {

                    const Icon = step.icon;

                    return (

                      <div
                        key={step.title}
                        className="relative flex gap-4 pb-8 last:pb-0"
                      >

                        {index !== orderSteps.length - 1 && (

                          <div
                            className={`absolute left-5 top-10 h-full w-[2px] ${
                              step.completed
                                ? "bg-orange-400"
                                : "bg-gray-200"
                            }`}
                          />

                        )}

                        <div
                          className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
                            step.active
                              ? "bg-orange-500 text-white ring-4 ring-orange-100"
                              : step.completed
                              ? "bg-green-500 text-white"
                              : "bg-gray-100 text-gray-400"
                          }`}
                        >

                          <Icon size={18} />

                        </div>

                        <div>

                          <h3
                            className={`font-bold ${
                              step.active
                                ? "text-orange-500"
                                : "text-gray-900"
                            }`}
                          >
                            {step.title}
                          </h3>

                          <p className="mt-1 text-sm text-gray-500">
                            {step.description}
                          </p>

                        </div>

                      </div>

                    );

                  })}

                </div>

              </div>

              {/* Order Details */}
                            <div className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">

                <div className="flex items-center gap-3">

                  <PackageCheck className="text-orange-500" />

                  <h2 className="text-xl font-bold text-gray-900">
                    Order Details
                  </h2>

                </div>

                <div className="mt-6 space-y-4">

                  {cartItems.length === 0 ? (

                    <p className="text-center text-gray-500">
                      No order details available.
                    </p>

                  ) : (

                    cartItems.map((item) => (

                      <div
                        key={item.id}
                        className="flex items-center gap-4 border-b border-gray-100 pb-4 last:border-none last:pb-0"
                      >

                        <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-orange-100 text-2xl">
                          {item.image}
                        </div>

                        <div className="flex-1">

                          <h3 className="font-semibold text-gray-900">
                            {item.name}
                          </h3>

                          <p className="text-sm text-gray-500">
                            {item.restaurant}
                          </p>

                          <p className="text-sm text-gray-500">
                            Qty : {item.quantity}
                          </p>

                        </div>

                        <p className="font-bold text-gray-900">
                          ₹{item.price * item.quantity}
                        </p>

                      </div>

                    ))

                  )}

                </div>

                <div className="my-6 border-t border-gray-200"></div>

                <div className="space-y-4 text-sm">

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Total Items
                    </span>

                    <span className="font-semibold text-gray-900">
                      {cartItems.length}
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Payment Status
                    </span>

                    <span className="font-semibold text-green-600">
                      Paid
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-gray-500">
                      Total Paid
                    </span>

                    <span className="font-bold text-gray-900">
                      ₹{total}
                    </span>

                  </div>

                </div>

                <div className="mt-6 border-t border-gray-200 pt-5">

                  <div className="flex gap-3">

                    <MapPin
                      size={20}
                      className="mt-1 shrink-0 text-orange-500"
                    />

                    <div>

                      <p className="font-semibold text-gray-900">
                        Delivery Address
                      </p>

                      <p className="mt-1 text-sm leading-6 text-gray-500">
                        Brodipet, Guntur, Andhra Pradesh - 522002
                      </p>

                    </div>

                  </div>

                </div>

              </div>

              <Link
                to="/profile"
                className="flex w-full items-center justify-center rounded-2xl border border-orange-200 bg-white px-6 py-4 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white"
              >
                View My Orders
              </Link>

              <Link
                to="/"
                className="flex w-full items-center justify-center rounded-2xl bg-orange-500 px-6 py-4 font-semibold text-white transition hover:bg-orange-600"
              >
                Back to Home
              </Link>

            </aside>

          </div>

        </section>

      </main>

    </>

  );

}