import DeliverySidebar from "../components/DeliverySidebar.jsx";
import {
  ShoppingBag,
  MapPin,
  Navigation,
  Clock,
  IndianRupee,
  Check,
  X,
  Bike,
  PackageCheck,
  Eye,
  Bell,
} from "lucide-react";

const orders = [
  {
    id: "#RG1302",
    restaurant: "Paradise Biryani",
    restaurantAddress: "Brodipet, Guntur",
    customer: "Pavan K",
    customerAddress: "Lakshmipuram, Guntur",
    distance: "3.8 km",
    time: "18 min",
    earning: "₹68",
    status: "Available",
    items: "2 Items",
  },
  {
    id: "#RG1301",
    restaurant: "Pizza Hub",
    restaurantAddress: "Arundelpet, Guntur",
    customer: "Sai Nadh",
    customerAddress: "Pattabhipuram, Guntur",
    distance: "4.2 km",
    time: "22 min",
    earning: "₹74",
    status: "Available",
    items: "3 Items",
  },
  {
    id: "#RG1298",
    restaurant: "Burger House",
    restaurantAddress: "Lakshmipuram, Guntur",
    customer: "Suhitha",
    customerAddress: "Gorantla, Guntur",
    distance: "5.1 km",
    time: "28 min",
    earning: "₹82",
    status: "Active",
    items: "2 Items",
  },
  {
    id: "#RG1287",
    restaurant: "Paradise Biryani",
    restaurantAddress: "Brodipet, Guntur",
    customer: "Kiran Kumar",
    customerAddress: "Nallapadu, Guntur",
    distance: "6.4 km",
    time: "Completed",
    earning: "₹96",
    status: "Completed",
    items: "4 Items",
  },
];

const tabs = [
  "All Orders",
  "Available",
  "Active",
  "Completed",
];

function getStatusStyle(status) {
  if (status === "Available") {
    return "bg-blue-50 text-blue-600";
  }

  if (status === "Active") {
    return "bg-orange-50 text-orange-500";
  }

  return "bg-green-50 text-green-600";
}

export default function DeliveryOrders() {
  return (
    <div className="min-h-screen bg-[#fffaf7]">
      <DeliverySidebar />

      <main className="ml-72 min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-orange-100 bg-white px-8 py-5">
          <div>
            <p className="text-sm text-gray-500">
              Delivery Management
            </p>

            <h1 className="text-2xl font-bold text-gray-900">
              Delivery Orders
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-3 rounded-xl bg-green-50 px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-green-500" />

              <span className="font-semibold text-green-600">
                Online
              </span>
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
          {/* Stats */}
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <ShoppingBag size={23} />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                Available Orders
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                12
              </h2>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <Bike size={23} />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                Active Delivery
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                1
              </h2>
            </div>

            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <PackageCheck size={23} />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                Completed Today
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                18
              </h2>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8 flex flex-wrap gap-3">
            {tabs.map((tab, index) => (
              <button
                key={tab}
                className={`rounded-full px-6 py-3 font-semibold transition ${
                  index === 0
                    ? "bg-orange-500 text-white"
                    : "border border-orange-100 bg-white text-gray-600 hover:text-orange-500"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Orders */}
          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {orders.map((order) => (
              <div
                key={order.id}
                className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                {/* Order Header */}
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <div className="flex flex-wrap items-center gap-3">
                      <h2 className="text-xl font-bold text-gray-900">
                        {order.id}
                      </h2>

                      <span
                        className={`rounded-full px-3 py-2 text-xs font-semibold ${getStatusStyle(
                          order.status
                        )}`}
                      >
                        {order.status}
                      </span>
                    </div>

                    <p className="mt-2 text-sm text-gray-500">
                      {order.items}
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs text-gray-500">
                      Delivery Earnings
                    </p>

                    <p className="mt-1 text-2xl font-bold text-green-600">
                      {order.earning}
                    </p>
                  </div>
                </div>

                {/* Route */}
                <div className="mt-6 rounded-2xl bg-[#fffaf7] p-5">
                  <div className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-white">
                        <ShoppingBag size={18} />
                      </div>

                      <div className="h-16 w-[2px] bg-orange-200" />

                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-500 text-white">
                        <MapPin size={18} />
                      </div>
                    </div>

                    <div className="flex-1">
                      <div>
                        <p className="text-xs text-gray-400">
                          PICKUP FROM
                        </p>

                        <h3 className="mt-1 font-bold text-gray-900">
                          {order.restaurant}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {order.restaurantAddress}
                        </p>
                      </div>

                      <div className="mt-10">
                        <p className="text-xs text-gray-400">
                          DELIVER TO
                        </p>

                        <h3 className="mt-1 font-bold text-gray-900">
                          {order.customer}
                        </h3>

                        <p className="mt-1 text-sm text-gray-500">
                          {order.customerAddress}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Delivery Info */}
                <div className="mt-5 grid grid-cols-3 gap-3">
                  <div className="rounded-xl bg-orange-50 p-4 text-center">
                    <Navigation
                      size={18}
                      className="mx-auto text-orange-500"
                    />

                    <p className="mt-2 text-xs text-gray-500">
                      Distance
                    </p>

                    <p className="mt-1 font-bold text-gray-900">
                      {order.distance}
                    </p>
                  </div>

                  <div className="rounded-xl bg-orange-50 p-4 text-center">
                    <Clock
                      size={18}
                      className="mx-auto text-orange-500"
                    />

                    <p className="mt-2 text-xs text-gray-500">
                      Time
                    </p>

                    <p className="mt-1 font-bold text-gray-900">
                      {order.time}
                    </p>
                  </div>

                  <div className="rounded-xl bg-orange-50 p-4 text-center">
                    <IndianRupee
                      size={18}
                      className="mx-auto text-green-600"
                    />

                    <p className="mt-2 text-xs text-gray-500">
                      Earnings
                    </p>

                    <p className="mt-1 font-bold text-green-600">
                      {order.earning}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="mt-6 flex gap-3 border-t border-gray-100 pt-5">
                  {order.status === "Available" && (
                    <>
                      <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">
                        <Check size={18} />
                        Accept Delivery
                      </button>

                      <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white">
                        <X size={19} />
                      </button>
                    </>
                  )}

                  {order.status === "Active" && (
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">
                      <Navigation size={18} />
                      Continue Navigation
                    </button>
                  )}

                  {order.status === "Completed" && (
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-50 px-5 py-3 font-semibold text-green-600">
                      <PackageCheck size={18} />
                      Delivery Completed
                    </button>
                  )}

                  <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-100 bg-white text-orange-500 transition hover:bg-orange-50">
                    <Eye size={19} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}