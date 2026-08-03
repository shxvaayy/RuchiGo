import Navbar from "../../components/Navbar.jsx";

import {
  Users,
  Search,
  Filter,
  UserPlus,
  Download,
} from "lucide-react";

export default function UserManagement() {

  const users = [
    {
      id: "USR001",
      name: "Rahul Sharma",
      email: "rahul@gmail.com",
      role: "Customer",
      status: "Active",
      joined: "12 Jul 2026",
    },
    {
      id: "USR002",
      name: "Priya Reddy",
      email: "priya@gmail.com",
      role: "Restaurant",
      status: "Active",
      joined: "10 Jul 2026",
    },
    {
      id: "USR003",
      name: "Arjun Kumar",
      email: "arjun@gmail.com",
      role: "Delivery",
      status: "Blocked",
      joined: "08 Jul 2026",
    },
    {
      id: "USR004",
      name: "Sneha Patel",
      email: "sneha@gmail.com",
      role: "Customer",
      status: "Active",
      joined: "05 Jul 2026",
    },
  ];

  return (

    <>

      <Navbar />

      <main className="min-h-screen bg-[#fffaf7]">

        <section className="mx-auto max-w-7xl px-6 py-10">

          {/* Header */}

          <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <p className="font-semibold text-orange-500">
                Administrator Panel
              </p>

              <h1 className="mt-2 text-4xl font-bold text-gray-900">
                User Management
              </h1>

              <p className="mt-3 text-gray-500">
                Manage customers, restaurants, delivery partners and administrators.
              </p>

            </div>

            <div className="flex gap-4">

              <button className="flex items-center gap-2 rounded-2xl border px-5 py-3 font-semibold hover:bg-gray-100">

                <Download size={18} />

                Export

              </button>

              <button className="flex items-center gap-2 rounded-2xl bg-orange-500 px-5 py-3 font-semibold text-white hover:bg-orange-600">

                <UserPlus size={18} />

                Add User

              </button>

            </div>

          </div>

          {/* Statistics */}

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {[
              {
                title: "Total Users",
                value: "18,450",
                color: "text-orange-600",
              },
              {
                title: "Customers",
                value: "15,820",
                color: "text-blue-600",
              },
              {
                title: "Restaurants",
                value: "540",
                color: "text-green-600",
              },
              {
                title: "Delivery Partners",
                value: "1,240",
                color: "text-purple-600",
              },
            ].map((item) => (

              <div
                key={item.title}
                className="rounded-3xl bg-white p-6 shadow-sm"
              >

                <Users className={item.color} size={30} />

                <h3 className="mt-5 text-gray-500">
                  {item.title}
                </h3>

                <p className={`mt-2 text-3xl font-bold ${item.color}`}>
                  {item.value}
                </p>

              </div>

            ))}

          </div>

          {/* Search & Filters */}

          <div className="mt-10 rounded-3xl bg-white p-6 shadow-sm">

            <div className="flex flex-col gap-5 lg:flex-row">

              <div className="relative flex-1">

                <Search
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                  size={20}
                />

                <input
                  type="text"
                  placeholder="Search by name, email or ID..."
                  className="w-full rounded-2xl border py-3 pl-12 pr-4 outline-none focus:border-orange-500"
                />

              </div>

              <select className="rounded-2xl border px-5 py-3 outline-none focus:border-orange-500">

                <option>All Roles</option>
                <option>Customer</option>
                <option>Restaurant</option>
                <option>Delivery Partner</option>
                <option>Administrator</option>

              </select>

              <button className="flex items-center justify-center gap-2 rounded-2xl border px-6 py-3 hover:bg-gray-100">

                <Filter size={18} />

                Filters

              </button>

            </div>

          </div>

          {/* Users Table */}
                    <div className="mt-10 overflow-hidden rounded-3xl bg-white shadow-sm">

            <div className="overflow-x-auto">

              <table className="min-w-full">

                <thead className="bg-orange-50">

                  <tr>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      User
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      User ID
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Role
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Status
                    </th>

                    <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700">
                      Joined
                    </th>

                    <th className="px-6 py-4 text-center text-sm font-semibold text-gray-700">
                      Actions
                    </th>

                  </tr>

                </thead>

                <tbody>

                  {users.map((user) => (

                    <tr
                      key={user.id}
                      className="border-t transition hover:bg-orange-50/40"
                    >

                      <td className="px-6 py-5">

                        <div className="flex items-center gap-4">

                          <img
                            src={`https://ui-avatars.com/api/?name=${encodeURIComponent(
                              user.name
                            )}&background=f97316&color=fff`}
                            alt={user.name}
                            className="h-12 w-12 rounded-full"
                          />

                          <div>

                            <h3 className="font-semibold text-gray-900">
                              {user.name}
                            </h3>

                            <p className="text-sm text-gray-500">
                              {user.email}
                            </p>

                          </div>

                        </div>

                      </td>

                      <td className="px-6 py-5 font-medium text-gray-700">
                        {user.id}
                      </td>

                      <td className="px-6 py-5">

                        <span
                          className={`rounded-full px-4 py-2 text-sm font-semibold
                          ${
                            user.role === "Customer"
                              ? "bg-blue-100 text-blue-700"
                              : user.role === "Restaurant"
                              ? "bg-orange-100 text-orange-700"
                              : "bg-green-100 text-green-700"
                          }`}
                        >
                          {user.role}
                        </span>

                      </td>

                      <td className="px-6 py-5">

                        <span
                          className={`rounded-full px-4 py-2 text-sm font-semibold
                          ${
                            user.status === "Active"
                              ? "bg-green-100 text-green-700"
                              : "bg-red-100 text-red-700"
                          }`}
                        >
                          {user.status}
                        </span>

                      </td>

                      <td className="px-6 py-5 text-gray-600">
                        {user.joined}
                      </td>

                      <td className="px-6 py-5">

                        <div className="flex justify-center gap-3">

                          <button className="rounded-xl bg-blue-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-blue-600">
                            View
                          </button>

                          <button className="rounded-xl bg-yellow-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-yellow-600">
                            Edit
                          </button>

                          <button
                            className={`rounded-xl px-4 py-2 text-sm font-semibold text-white transition ${
                              user.status === "Active"
                                ? "bg-red-500 hover:bg-red-600"
                                : "bg-green-500 hover:bg-green-600"
                            }`}
                          >
                            {user.status === "Active"
                              ? "Block"
                              : "Unblock"}
                          </button>

                        </div>

                      </td>

                    </tr>

                  ))}

                </tbody>

              </table>

            </div>

          </div>

          {/* User Overview Cards */}
                    <div className="mt-10 grid gap-8 lg:grid-cols-2">

            {/* User Overview */}

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-bold text-gray-900">
                User Overview
              </h2>

              <p className="mt-2 text-gray-500">
                Distribution of users across the platform.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-5">

                <div className="rounded-2xl bg-blue-50 p-5 text-center">

                  <h3 className="text-3xl font-bold text-blue-600">
                    15,820
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Customers
                  </p>

                </div>

                <div className="rounded-2xl bg-orange-50 p-5 text-center">

                  <h3 className="text-3xl font-bold text-orange-600">
                    540
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Restaurants
                  </p>

                </div>

                <div className="rounded-2xl bg-green-50 p-5 text-center">

                  <h3 className="text-3xl font-bold text-green-600">
                    1,240
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Delivery Partners
                  </p>

                </div>

                <div className="rounded-2xl bg-purple-50 p-5 text-center">

                  <h3 className="text-3xl font-bold text-purple-600">
                    850
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Premium Users
                  </p>

                </div>

              </div>

            </div>

            {/* User Growth */}

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-bold text-gray-900">
                User Growth
              </h2>

              <p className="mt-2 text-gray-500">
                New registrations in the past week.
              </p>

              <div className="mt-8 flex h-64 items-end justify-between gap-4">

                {[
                  { day: "Mon", value: 35 },
                  { day: "Tue", value: 52 },
                  { day: "Wed", value: 60 },
                  { day: "Thu", value: 75 },
                  { day: "Fri", value: 88 },
                  { day: "Sat", value: 96 },
                  { day: "Sun", value: 70 },
                ].map((item) => (

                  <div
                    key={item.day}
                    className="flex flex-1 flex-col items-center"
                  >

                    <div
                      className="w-full rounded-t-xl bg-blue-500 transition hover:bg-blue-600"
                      style={{ height: `${item.value * 2}px` }}
                    />

                    <span className="mt-3 text-sm font-medium text-gray-600">
                      {item.day}
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Active vs Blocked Users */}

          <div className="mt-10 grid gap-8 lg:grid-cols-2">

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-bold text-gray-900">
                User Status
              </h2>

              <div className="mt-8 space-y-6">

                <div>

                  <div className="mb-2 flex justify-between">

                    <span>Active Users</span>

                    <span className="font-bold text-green-600">
                      17,920
                    </span>

                  </div>

                  <div className="h-3 rounded-full bg-gray-200">

                    <div
                      className="h-full rounded-full bg-green-500"
                      style={{ width: "97%" }}
                    />

                  </div>

                </div>

                <div>

                  <div className="mb-2 flex justify-between">

                    <span>Blocked Users</span>

                    <span className="font-bold text-red-600">
                      530
                    </span>

                  </div>

                  <div className="h-3 rounded-full bg-gray-200">

                    <div
                      className="h-full rounded-full bg-red-500"
                      style={{ width: "3%" }}
                    />

                  </div>

                </div>

              </div>

            </div>

            {/* Recently Registered */}

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-bold text-gray-900">
                Recently Registered
              </h2>

              <div className="mt-8 space-y-5">

                {[
                  "Rohit Kumar",
                  "Anjali Sharma",
                  "Vikram Reddy",
                  "Sanjana Rao",
                  "Kiran Patel",
                ].map((name, index) => (

                  <div
                    key={name}
                    className="flex items-center justify-between rounded-2xl border p-4"
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">

                        {index + 1}

                      </div>

                      <span className="font-medium text-gray-800">
                        {name}
                      </span>

                    </div>

                    <span className="text-sm text-gray-500">
                      Today
                    </span>

                  </div>

                ))}

              </div>

            </div>

          </div>

          {/* Top Active Users */}
                    <div className="mt-10 grid gap-8 lg:grid-cols-2">

            {/* Top Active Users */}

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-bold text-gray-900">
                Top Active Users
              </h2>

              <p className="mt-2 text-gray-500">
                Users with the highest activity on the platform.
              </p>

              <div className="mt-8 space-y-5">

                {[
                  {
                    name: "Rahul Sharma",
                    orders: 152,
                    badge: "Gold",
                  },
                  {
                    name: "Sneha Patel",
                    orders: 134,
                    badge: "Gold",
                  },
                  {
                    name: "Arjun Kumar",
                    orders: 121,
                    badge: "Silver",
                  },
                  {
                    name: "Priya Reddy",
                    orders: 118,
                    badge: "Silver",
                  },
                  {
                    name: "Vikram Rao",
                    orders: 105,
                    badge: "Bronze",
                  },
                ].map((user, index) => (

                  <div
                    key={user.name}
                    className="flex items-center justify-between rounded-2xl border p-4 transition hover:bg-orange-50"
                  >

                    <div className="flex items-center gap-4">

                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-600">

                        #{index + 1}

                      </div>

                      <div>

                        <h3 className="font-semibold text-gray-900">
                          {user.name}
                        </h3>

                        <p className="text-sm text-gray-500">
                          {user.orders} Orders
                        </p>

                      </div>

                    </div>

                    <span
                      className={`rounded-full px-4 py-2 text-sm font-semibold ${
                        user.badge === "Gold"
                          ? "bg-yellow-100 text-yellow-700"
                          : user.badge === "Silver"
                          ? "bg-gray-200 text-gray-700"
                          : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {user.badge}
                    </span>

                  </div>

                ))}

              </div>

            </div>

            {/* Admin Insights */}

            <div className="rounded-3xl bg-white p-8 shadow-sm">

              <h2 className="text-2xl font-bold text-gray-900">
                Admin Insights
              </h2>

              <p className="mt-2 text-gray-500">
                Quick observations from platform activity.
              </p>

              <div className="mt-8 space-y-5">

                <div className="rounded-2xl bg-green-50 p-5">

                  <h3 className="font-semibold text-green-700">
                    📈 User Growth
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Registrations increased by <strong>18%</strong> compared to last week.
                  </p>

                </div>

                <div className="rounded-2xl bg-blue-50 p-5">

                  <h3 className="font-semibold text-blue-700">
                    ⭐ Customer Engagement
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Average customer activity increased by <strong>12%</strong>.
                  </p>

                </div>

                <div className="rounded-2xl bg-orange-50 p-5">

                  <h3 className="font-semibold text-orange-700">
                    ⚠ Moderation
                  </h3>

                  <p className="mt-2 text-gray-600">
                    Review blocked accounts regularly to maintain platform quality.
                  </p>

                </div>

              </div>

            </div>

          </div>

          {/* Footer Summary */}

          <div className="mt-10 rounded-3xl bg-gradient-to-r from-orange-500 to-red-500 p-8 text-white">

            <div className="flex flex-col items-center justify-between gap-6 lg:flex-row">

              <div>

                <h2 className="text-3xl font-bold">
                  User Management Center
                </h2>

                <p className="mt-2 text-orange-100">
                  Manage platform users, permissions, and account activity efficiently.
                </p>

              </div>

              <div className="flex flex-wrap gap-4">

                <button className="rounded-2xl bg-white px-6 py-3 font-semibold text-orange-600 transition hover:bg-orange-100">
                  Refresh Data
                </button>

                <button className="rounded-2xl border border-white px-6 py-3 font-semibold text-white transition hover:bg-white hover:text-orange-600">
                  Export Report
                </button>

              </div>

            </div>

          </div>

        </section>

      </main>

    </>

  );

}