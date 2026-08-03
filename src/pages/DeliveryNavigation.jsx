import DeliverySidebar from "../components/DeliverySidebar.jsx";
import {
  Navigation,
  MapPin,
  Clock,
  Phone,
  MessageCircle,
  ShoppingBag,
  Bike,
  LocateFixed,
  ArrowUp,
  CornerUpRight,
  CheckCircle2,
  Bell,
} from "lucide-react";

const routeSteps = [
  {
    id: 1,
    instruction: "Continue straight on Main Road",
    distance: "1.2 km",
    icon: ArrowUp,
  },
  {
    id: 2,
    instruction: "Turn right at Lakshmipuram Junction",
    distance: "650 m",
    icon: CornerUpRight,
  },
  {
    id: 3,
    instruction: "Continue towards Customer Location",
    distance: "1.4 km",
    icon: ArrowUp,
  },
  {
    id: 4,
    instruction: "Destination will be on your left",
    distance: "550 m",
    icon: MapPin,
  },
];

export default function DeliveryNavigation() {
  return (
    <div className="min-h-screen bg-[#fffaf7]">
      <DeliverySidebar />

      <main className="ml-72 min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-orange-100 bg-white px-8 py-5">
          <div>
            <p className="text-sm text-gray-500">
              Active Delivery
            </p>

            <h1 className="text-2xl font-bold text-gray-900">
              Delivery Navigation
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="rounded-xl bg-orange-50 px-5 py-3">
              <p className="text-xs text-gray-500">
                Order ID
              </p>

              <p className="font-bold text-orange-500">
                #RG1290
              </p>
            </div>

            <button className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              <Bell size={20} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
              RK
            </div>
          </div>
        </header>

        <section className="p-8">
          <div className="grid gap-7 xl:grid-cols-[1.7fr_1fr]">
            {/* Map Section */}
            <section className="overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm">
              <div className="relative min-h-[650px] overflow-hidden bg-[#f2eee8]">
                {/* Fake Map Roads */}
                <div className="absolute left-[10%] top-0 h-full w-24 rotate-12 bg-white/70" />

                <div className="absolute left-0 top-[25%] h-20 w-full -rotate-6 bg-white/70" />

                <div className="absolute right-[20%] top-0 h-full w-20 -rotate-12 bg-white/70" />

                <div className="absolute left-0 top-[65%] h-16 w-full rotate-3 bg-white/70" />

                {/* Map Blocks */}
                <div className="absolute left-[8%] top-[8%] h-24 w-36 rounded-2xl bg-green-100" />

                <div className="absolute right-[8%] top-[10%] h-32 w-40 rounded-2xl bg-orange-100" />

                <div className="absolute bottom-[10%] left-[12%] h-32 w-44 rounded-2xl bg-blue-100" />

                <div className="absolute bottom-[12%] right-[10%] h-28 w-36 rounded-2xl bg-green-100" />

                {/* Route Line */}
                <div className="absolute left-[28%] top-[18%] h-[420px] w-2 rotate-[-22deg] rounded-full bg-orange-500" />

                {/* Delivery Partner */}
                <div className="absolute left-[35%] top-[42%] z-10">
                  <div className="relative">
                    <div className="absolute -inset-4 animate-ping rounded-full bg-orange-400/30" />

                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-orange-500 text-white shadow-xl">
                      <Bike size={27} />
                    </div>
                  </div>
                </div>

                {/* Restaurant Marker */}
                <div className="absolute left-[18%] top-[12%]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-orange-500 text-white shadow-lg">
                    <ShoppingBag size={23} />
                  </div>

                  <div className="mt-2 rounded-xl bg-white px-3 py-2 text-center shadow">
                    <p className="text-xs font-bold text-gray-900">
                      Paradise Biryani
                    </p>
                  </div>
                </div>

                {/* Customer Marker */}
                <div className="absolute bottom-[10%] right-[18%]">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full border-4 border-white bg-green-500 text-white shadow-lg">
                    <MapPin size={23} />
                  </div>

                  <div className="mt-2 rounded-xl bg-white px-3 py-2 text-center shadow">
                    <p className="text-xs font-bold text-gray-900">
                      Pavan K
                    </p>
                  </div>
                </div>

                {/* Current Navigation Card */}
                <div className="absolute left-6 top-6 flex items-center gap-4 rounded-2xl bg-gray-900 px-6 py-5 text-white shadow-xl">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500">
                    <CornerUpRight size={25} />
                  </div>

                  <div>
                    <p className="text-xs text-gray-400">
                      IN 650 METERS
                    </p>

                    <p className="mt-1 font-bold">
                      Turn right at Lakshmipuram Junction
                    </p>
                  </div>
                </div>

                {/* Location Button */}
                <button className="absolute bottom-6 right-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-orange-500 shadow-lg transition hover:bg-orange-50">
                  <LocateFixed size={24} />
                </button>

                {/* ETA Card */}
                <div className="absolute bottom-6 left-6 flex gap-8 rounded-2xl bg-white px-7 py-5 shadow-xl">
                  <div>
                    <p className="text-xs text-gray-400">
                      ETA
                    </p>

                    <p className="mt-1 text-xl font-bold text-gray-900">
                      12 min
                    </p>
                  </div>

                  <div className="border-l border-gray-200 pl-8">
                    <p className="text-xs text-gray-400">
                      DISTANCE
                    </p>

                    <p className="mt-1 text-xl font-bold text-gray-900">
                      3.8 km
                    </p>
                  </div>

                  <div className="border-l border-gray-200 pl-8">
                    <p className="text-xs text-gray-400">
                      ARRIVAL
                    </p>

                    <p className="mt-1 text-xl font-bold text-gray-900">
                      7:42 PM
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Right Panel */}
            <div className="space-y-6">
              {/* Customer */}
              <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                  Deliver To
                </p>

                <div className="mt-5 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-orange-500 text-lg font-bold text-white">
                    PK
                  </div>

                  <div>
                    <h2 className="text-xl font-bold text-gray-900">
                      Pavan K
                    </h2>

                    <p className="mt-1 text-sm text-gray-500">
                      Customer
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex items-start gap-3 rounded-2xl bg-[#fffaf7] p-4">
                  <MapPin
                    size={20}
                    className="mt-0.5 shrink-0 text-orange-500"
                  />

                  <div>
                    <p className="font-semibold text-gray-900">
                      24-5, Lakshmipuram
                    </p>

                    <p className="mt-1 text-sm text-gray-500">
                      Near Main Road, Guntur
                    </p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <button className="flex items-center justify-center gap-2 rounded-xl bg-green-50 px-4 py-3 font-semibold text-green-600 transition hover:bg-green-500 hover:text-white">
                    <Phone size={18} />
                    Call
                  </button>

                  <button className="flex items-center justify-center gap-2 rounded-xl bg-blue-50 px-4 py-3 font-semibold text-blue-600 transition hover:bg-blue-500 hover:text-white">
                    <MessageCircle size={18} />
                    Message
                  </button>
                </div>
              </section>

              {/* Delivery Info */}
              <section className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900">
                  Delivery Details
                </h2>

                <div className="mt-5 space-y-4">
                  <div className="flex items-center justify-between rounded-xl bg-orange-50 p-4">
                    <div className="flex items-center gap-3">
                      <ShoppingBag
                        size={19}
                        className="text-orange-500"
                      />

                      <span className="text-sm text-gray-600">
                        Order
                      </span>
                    </div>

                    <span className="font-bold text-gray-900">
                      #RG1290
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-orange-50 p-4">
                    <div className="flex items-center gap-3">
                      <Clock
                        size={19}
                        className="text-orange-500"
                      />

                      <span className="text-sm text-gray-600">
                        Estimated Time
                      </span>
                    </div>

                    <span className="font-bold text-gray-900">
                      12 min
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-orange-50 p-4">
                    <div className="flex items-center gap-3">
                      <Navigation
                        size={19}
                        className="text-orange-500"
                      />

                      <span className="text-sm text-gray-600">
                        Distance
                      </span>
                    </div>

                    <span className="font-bold text-gray-900">
                      3.8 km
                    </span>
                  </div>
                </div>
              </section>

              {/* Delivery Action */}
              <section className="rounded-3xl bg-gradient-to-br from-orange-600 to-orange-400 p-6 text-white shadow-lg">
                <CheckCircle2 size={34} />

                <h2 className="mt-4 text-2xl font-bold">
                  Reached the customer?
                </h2>

                <p className="mt-3 text-sm leading-6 text-orange-100">
                  Confirm the order has been successfully delivered to
                  the customer.
                </p>

                <button className="mt-6 flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-5 py-4 font-bold text-orange-500 transition hover:bg-orange-50">
                  <CheckCircle2 size={21} />
                  Mark as Delivered
                </button>
              </section>
            </div>
          </div>

          {/* Route Steps */}
          <section className="mt-8 rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900">
              Route Directions
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Step-by-step directions to the customer location.
            </p>

            <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {routeSteps.map((step) => {
                const Icon = step.icon;

                return (
                  <div
                    key={step.id}
                    className="rounded-2xl border border-orange-100 p-5 transition hover:border-orange-300 hover:bg-orange-50"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-500 text-white">
                      <Icon size={20} />
                    </div>

                    <p className="mt-5 font-bold leading-6 text-gray-900">
                      {step.instruction}
                    </p>

                    <p className="mt-3 text-sm font-semibold text-orange-500">
                      {step.distance}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}