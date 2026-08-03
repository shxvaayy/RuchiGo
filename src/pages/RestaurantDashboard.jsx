import RestaurantSidebar from "../components/RestaurantSidebar.jsx";
import {
  ShoppingBag,
  IndianRupee,
  Clock,
  Star,
  TrendingUp,
  Bell,
  Search,
  ChevronRight,
} from "lucide-react";

const stats = [
  {
    title: "Today's Orders",
    value: "128",
    change: "+12.5%",
    icon: ShoppingBag,
  },
  {
    title: "Today's Revenue",
    value: "₹32,450",
    change: "+18.2%",
    icon: IndianRupee,
  },
  {
    title: "Pending Orders",
    value: "14",
    change: "Needs attention",
    icon: Clock,
  },
  {
    title: "Restaurant Rating",
    value: "4.6",
    change: "1.8K reviews",
    icon: Star,
  },
];

const orders = [
  {
    id: "#RG1284",
    customer: "Rahul Kumar",
    items: "2 Items",
    total: "₹433",
    status: "Preparing",
  },
  {
    id: "#RG1283",
    customer: "Sai Nadh",
    items: "3 Items",
    total: "₹689",
    status: "New Order",
  },
  {
    id: "#RG1282",
    customer: "Suhitha",
    items: "1 Item",
    total: "₹249",
    status: "Ready",
  },
  {
    id: "#RG1281",
    customer: "Kiran",
    items: "4 Items",
    total: "₹899",
    status: "Completed",
  },
];

export default function RestaurantDashboard() {
  return (
    <div className="min-h-screen bg-[#fffaf7]">
      <RestaurantSidebar />

      <main className="ml-72 min-h-screen">
        <header className="flex items-center justify-between border-b border-orange-100 bg-white px-8 py-5">
          <div>
            <p className="text-sm text-gray-500">
              Welcome back
            </p>

            <h1 className="text-2xl font-bold text-gray-900">
              Restaurant Dashboard
            </h1>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden items-center rounded-xl bg-gray-50 px-4 lg:flex">
              <Search size={18} className="text-gray-400" />

              <input
                type="text"
                placeholder="Search orders..."
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
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                      <Icon size={23} />
                    </div>

                    <TrendingUp
                      size={19}
                      className="text-green-500"
                    />
                  </div>

                  <p className="mt-6 text-sm text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    {stat.value}
                  </h2>

                  <p className="mt-3 text-xs text-green-600">
                    {stat.change}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 grid gap-7 xl:grid-cols-[1.7fr_1fr]">
            <section className="rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    Recent Orders
                  </h2>

                  <p className="mt-2 text-sm text-gray-500">
                    Manage your latest customer orders.
                  </p>
                </div>

                <button className="flex items-center gap-2 font-semibold text-orange-500">
                  View All
                  <ChevronRight size={18} />
                </button>
              </div>

              <div className="mt-7 overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="border-b border-gray-100 text-sm text-gray-400">
                      <th className="pb-4 font-medium">
                        Order ID
                      </th>

                      <th className="pb-4 font-medium">
                        Customer
                      </th>

                      <th className="pb-4 font-medium">
                        Items
                      </th>

                      <th className="pb-4 font-medium">
                        Total
                      </th>

                      <th className="pb-4 font-medium">
                        Status
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {orders.map((order) => (
                      <tr
                        key={order.id}
                        className="border-b border-gray-50"
                      >
                        <td className="py-5 font-semibold text-gray-900">
                          {order.id}
                        </td>

                        <td className="py-5 text-gray-600">
                          {order.customer}
                        </td>

                        <td className="py-5 text-gray-600">
                          {order.items}
                        </td>

                        <td className="py-5 font-semibold text-gray-900">
                          {order.total}
                        </td>

                        <td className="py-5">
                          <span
                            className={`rounded-full px-3 py-2 text-xs font-semibold ${
                              order.status === "Completed"
                                ? "bg-green-50 text-green-600"
                                : order.status === "New Order"
                                ? "bg-blue-50 text-blue-600"
                                : "bg-orange-50 text-orange-500"
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            <aside className="rounded-3xl bg-gradient-to-br from-orange-600 to-orange-400 p-7 text-white shadow-lg">
              <p className="text-sm text-orange-100">
                Restaurant Performance
              </p>

              <h2 className="mt-3 text-3xl font-bold">
                Great work today! 🎉
              </h2>

              <p className="mt-4 leading-7 text-orange-50">
                Your restaurant received 128 orders and revenue is up by
                18.2% compared to yesterday.
              </p>

              <div className="mt-8 rounded-2xl bg-white/15 p-5 backdrop-blur-lg">
                <p className="text-sm text-orange-100">
                  Best Selling Item
                </p>

                <div className="mt-4 flex items-center gap-4">
                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/20 text-4xl">
                    🍛
                  </div>

                  <div>
                    <p className="font-bold">
                      Chicken Dum Biryani
                    </p>

                    <p className="mt-1 text-sm text-orange-100">
                      48 orders today
                    </p>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </section>
      </main>
    </div>
  );
}