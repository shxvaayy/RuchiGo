import RestaurantSidebar from "../components/RestaurantSidebar.jsx";
import {
  Search,
  Bell,
  Clock,
  Check,
  X,
  ChefHat,
  PackageCheck,
  Eye,
  MapPin,
} from "lucide-react";

const orders = [
  {
    id: "#RG1290",
    customer: "Rahul Kumar",
    items: ["Chicken Dum Biryani x1", "Chicken 65 x1"],
    total: "₹433",
    time: "2 mins ago",
    status: "New Order",
    address: "Brodipet, Guntur",
  },
  {
    id: "#RG1289",
    customer: "Pavan K",
    items: ["Special Chicken Biryani x2", "Coke x1"],
    total: "₹648",
    time: "8 mins ago",
    status: "Preparing",
    address: "Lakshmipuram, Guntur",
  },
  {
    id: "#RG1288",
    customer: "Sai Nadh",
    items: ["Paneer Biryani x1", "Double Ka Meetha x1"],
    total: "₹348",
    time: "15 mins ago",
    status: "Ready",
    address: "Arundelpet, Guntur",
  },
  {
    id: "#RG1287",
    customer: "Suhitha",
    items: ["Butter Chicken x1", "Biryani Rice x2"],
    total: "₹599",
    time: "32 mins ago",
    status: "Completed",
    address: "Pattabhipuram, Guntur",
  },
  {
    id: "#RG1286",
    customer: "Kiran Kumar",
    items: ["Chicken 65 x2", "Chicken Dum Biryani x2"],
    total: "₹896",
    time: "40 mins ago",
    status: "Preparing",
    address: "Gorantla, Guntur",
  },
  {
    id: "#RG1285",
    customer: "Harsha",
    items: ["Chicken Dum Biryani x1"],
    total: "₹249",
    time: "45 mins ago",
    status: "New Order",
    address: "Nallapadu, Guntur",
  },
];

const statusTabs = [
  "All Orders",
  "New Orders",
  "Preparing",
  "Ready",
  "Completed",
];

function getStatusStyle(status) {
  if (status === "New Order") {
    return "bg-blue-50 text-blue-600";
  }

  if (status === "Preparing") {
    return "bg-orange-50 text-orange-500";
  }

  if (status === "Ready") {
    return "bg-purple-50 text-purple-600";
  }

  return "bg-green-50 text-green-600";
}

function getStatusIcon(status) {
  if (status === "New Order") {
    return Clock;
  }

  if (status === "Preparing") {
    return ChefHat;
  }

  if (status === "Ready") {
    return PackageCheck;
  }

  return Check;
}

export default function RestaurantOrders() {
  return (
    <div className="min-h-screen bg-[#fffaf7]">
      <RestaurantSidebar />

      <main className="ml-72 min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-orange-100 bg-white px-8 py-5">
          <div>
            <p className="text-sm text-gray-500">
              Order Management
            </p>

            <h1 className="text-2xl font-bold text-gray-900">
              Restaurant Orders
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center rounded-xl bg-gray-50 px-4 lg:flex">
              <Search
                size={18}
                className="text-gray-400"
              />

              <input
                type="text"
                placeholder="Search order ID..."
                className="w-56 bg-transparent px-3 py-3 text-sm outline-none"
              />
            </div>

            <button className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-orange-50 text-orange-500">
              <Bell size={20} />

              <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500" />
            </button>

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-500 font-bold text-white">
              PB
            </div>
          </div>
        </header>

        <section className="p-8">
          {/* Stats */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            <div className="rounded-3xl border border-blue-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                <Clock size={23} />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                New Orders
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                8
              </h2>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <ChefHat size={23} />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                Preparing
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                14
              </h2>
            </div>

            <div className="rounded-3xl border border-purple-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-50 text-purple-600">
                <PackageCheck size={23} />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                Ready for Pickup
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                6
              </h2>
            </div>

            <div className="rounded-3xl border border-green-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <Check size={23} />
              </div>

              <p className="mt-5 text-sm text-gray-500">
                Completed Today
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">
                100
              </h2>
            </div>
          </div>

          {/* Tabs */}
          <div className="mt-8 flex flex-col justify-between gap-5 xl:flex-row xl:items-center">
            <div className="flex flex-wrap gap-3">
              {statusTabs.map((tab, index) => (
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

            <p className="text-sm text-gray-500">
              Showing {orders.length} recent orders
            </p>
          </div>

          {/* Orders */}
          <div className="mt-8 grid gap-6 xl:grid-cols-2">
            {orders.map((order) => {
              const StatusIcon = getStatusIcon(order.status);

              return (
                <div
                  key={order.id}
                  className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="flex items-start justify-between gap-5">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h2 className="text-xl font-bold text-gray-900">
                          {order.id}
                        </h2>

                        <span
                          className={`flex items-center gap-2 rounded-full px-3 py-2 text-xs font-semibold ${getStatusStyle(
                            order.status
                          )}`}
                        >
                          <StatusIcon size={14} />
                          {order.status}
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-gray-500">
                        {order.time}
                      </p>
                    </div>

                    <p className="text-2xl font-bold text-gray-900">
                      {order.total}
                    </p>
                  </div>

                  <div className="mt-6 rounded-2xl bg-[#fffaf7] p-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Customer
                    </p>

                    <p className="mt-2 font-bold text-gray-900">
                      {order.customer}
                    </p>

                    <div className="mt-3 flex items-start gap-2 text-sm text-gray-500">
                      <MapPin
                        size={16}
                        className="mt-0.5 shrink-0 text-orange-500"
                      />

                      {order.address}
                    </div>
                  </div>

                  <div className="mt-5">
                    <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                      Order Items
                    </p>

                    <div className="mt-3 space-y-3">
                      {order.items.map((item) => (
                        <div
                          key={item}
                          className="flex items-center gap-3"
                        >
                          <div className="h-2 w-2 rounded-full bg-orange-500" />

                          <p className="text-sm font-medium text-gray-700">
                            {item}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 flex flex-wrap gap-3 border-t border-gray-100 pt-5">
                    {order.status === "New Order" && (
                      <>
                        <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">
                          <Check size={18} />
                          Accept Order
                        </button>

                        <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white">
                          <X size={19} />
                        </button>
                      </>
                    )}

                    {order.status === "Preparing" && (
                      <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-purple-500 px-5 py-3 font-semibold text-white transition hover:bg-purple-600">
                        <PackageCheck size={18} />
                        Mark as Ready
                      </button>
                    )}

                    {order.status === "Ready" && (
                      <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600">
                        <Check size={18} />
                        Handed to Partner
                      </button>
                    )}

                    {order.status === "Completed" && (
                      <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gray-100 px-5 py-3 font-semibold text-gray-600">
                        <Check size={18} />
                        Order Completed
                      </button>
                    )}

                    <button className="flex h-12 w-12 items-center justify-center rounded-xl border border-orange-100 bg-white text-orange-500 transition hover:bg-orange-50">
                      <Eye size={19} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}