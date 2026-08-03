import RestaurantSidebar from "../components/RestaurantSidebar.jsx";
import {
  Plus,
  Search,
  Pencil,
  Trash2,
  MoreVertical,
  UtensilsCrossed,
  PackageCheck,
  PackageX,
} from "lucide-react";

const menuItems = [
  {
    id: 1,
    name: "Chicken Dum Biryani",
    category: "Biryani",
    price: 249,
    rating: "4.8",
    orders: 248,
    available: true,
    icon: "🍛",
  },
  {
    id: 2,
    name: "Special Chicken Biryani",
    category: "Biryani",
    price: 299,
    rating: "4.7",
    orders: 186,
    available: true,
    icon: "🥘",
  },
  {
    id: 3,
    name: "Chicken 65",
    category: "Starters",
    price: 199,
    rating: "4.6",
    orders: 156,
    available: true,
    icon: "🍗",
  },
  {
    id: 4,
    name: "Paneer Biryani",
    category: "Biryani",
    price: 219,
    rating: "4.5",
    orders: 98,
    available: false,
    icon: "🍲",
  },
  {
    id: 5,
    name: "Double Ka Meetha",
    category: "Desserts",
    price: 129,
    rating: "4.7",
    orders: 87,
    available: true,
    icon: "🍰",
  },
  {
    id: 6,
    name: "Butter Chicken",
    category: "Main Course",
    price: 279,
    rating: "4.6",
    orders: 112,
    available: true,
    icon: "🍗",
  },
];

const categories = [
  "All Items",
  "Biryani",
  "Starters",
  "Main Course",
  "Desserts",
];

export default function RestaurantMenu() {
  return (
    <div className="min-h-screen bg-[#fffaf7]">
      <RestaurantSidebar />

      <main className="ml-72 min-h-screen">
        <header className="flex items-center justify-between border-b border-orange-100 bg-white px-8 py-5">
          <div>
            <p className="text-sm text-gray-500">Restaurant Management</p>

            <h1 className="text-2xl font-bold text-gray-900">
              Menu Management
            </h1>
          </div>

          <button className="flex items-center gap-2 rounded-2xl bg-orange-500 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-orange-600">
            <Plus size={20} />
            Add Food Item
          </button>
        </header>

        <section className="p-8">
          <div className="grid gap-5 md:grid-cols-3">
            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <UtensilsCrossed size={23} />
              </div>

              <p className="mt-5 text-sm text-gray-500">Total Menu Items</p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">48</h2>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-green-50 text-green-600">
                <PackageCheck size={23} />
              </div>

              <p className="mt-5 text-sm text-gray-500">Available Items</p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">42</h2>
            </div>

            <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-50 text-red-500">
                <PackageX size={23} />
              </div>

              <p className="mt-5 text-sm text-gray-500">Unavailable Items</p>

              <h2 className="mt-2 text-3xl font-bold text-gray-900">6</h2>
            </div>
          </div>

          <div className="mt-8 flex flex-col justify-between gap-5 xl:flex-row xl:items-center">
            <div className="flex flex-wrap gap-3">
              {categories.map((category, index) => (
                <button
                  key={category}
                  className={`rounded-full px-6 py-3 font-semibold transition ${
                    index === 0
                      ? "bg-orange-500 text-white"
                      : "border border-orange-100 bg-white text-gray-600 hover:border-orange-300 hover:text-orange-500"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            <div className="flex items-center rounded-2xl border border-orange-100 bg-white px-5 shadow-sm">
              <Search size={20} className="text-gray-400" />

              <input
                type="text"
                placeholder="Search menu items..."
                className="w-72 px-4 py-4 text-sm outline-none"
              />
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {menuItems.map((item) => (
              <div
                key={item.id}
                className="group overflow-hidden rounded-3xl border border-orange-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative flex h-52 items-center justify-center bg-gradient-to-br from-orange-100 to-orange-200">
                  <span className="text-8xl transition duration-300 group-hover:scale-110">
                    {item.icon}
                  </span>

                  <span
                    className={`absolute left-4 top-4 rounded-full px-3 py-2 text-xs font-semibold ${
                      item.available
                        ? "bg-green-500 text-white"
                        : "bg-red-500 text-white"
                    }`}
                  >
                    {item.available ? "Available" : "Unavailable"}
                  </span>

                  <button className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white text-gray-600 shadow">
                    <MoreVertical size={19} />
                  </button>
                </div>

                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                    {item.category}
                  </p>

                  <h3 className="mt-2 text-xl font-bold text-gray-900">
                    {item.name}
                  </h3>

                  <div className="mt-4 flex items-center justify-between">
                    <p className="text-2xl font-bold text-gray-900">
                      ₹{item.price}
                    </p>

                    <p className="text-sm text-gray-500">
                      ⭐ {item.rating}
                    </p>
                  </div>

                  <p className="mt-3 text-sm text-gray-500">
                    {item.orders} orders
                  </p>

                  <div className="mt-6 flex gap-3 border-t border-gray-100 pt-5">
                    <button className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-orange-50 px-4 py-3 font-semibold text-orange-500 transition hover:bg-orange-500 hover:text-white">
                      <Pencil size={17} />
                      Edit
                    </button>

                    <button className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white">
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}