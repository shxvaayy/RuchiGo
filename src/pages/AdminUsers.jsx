import { useState } from "react";
import AdminSidebar from "../components/AdminSidebar.jsx";
import {
  Users,
  UserCheck,
  UserX,
  UserPlus,
  Search,
  Filter,
  Eye,
  Ban,
  MoreVertical,
  Mail,
  Phone,
  ShoppingBag,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const users = [
  {
    id: "USR001",
    name: "Pavan K",
    initials: "PK",
    email: "pavan@gmail.com",
    phone: "+91 98765 43210",
    orders: 48,
    spent: "₹18,420",
    joined: "12 Jan 2026",
    status: "Active",
  },
  {
    id: "USR002",
    name: "Sai Nadh",
    initials: "SN",
    email: "sainadh@gmail.com",
    phone: "+91 98482 12345",
    orders: 32,
    spent: "₹12,840",
    joined: "24 Feb 2026",
    status: "Active",
  },
  {
    id: "USR003",
    name: "Suhitha",
    initials: "SU",
    email: "suhitha@gmail.com",
    phone: "+91 99887 65432",
    orders: 26,
    spent: "₹9,680",
    joined: "08 Mar 2026",
    status: "Active",
  },
  {
    id: "USR004",
    name: "Kiran Kumar",
    initials: "KK",
    email: "kiran@gmail.com",
    phone: "+91 91234 56789",
    orders: 18,
    spent: "₹7,240",
    joined: "17 Apr 2026",
    status: "Blocked",
  },
  {
    id: "USR005",
    name: "Harsha",
    initials: "HA",
    email: "harsha@gmail.com",
    phone: "+91 97654 32109",
    orders: 41,
    spent: "₹15,960",
    joined: "02 May 2026",
    status: "Active",
  },
  {
    id: "USR006",
    name: "Meghana",
    initials: "ME",
    email: "meghana@gmail.com",
    phone: "+91 96543 21098",
    orders: 12,
    spent: "₹4,850",
    joined: "19 Jun 2026",
    status: "Inactive",
  },
];

const stats = [
  {
    title: "Total Users",
    value: "24,580",
    description: "All registered customers",
    icon: Users,
    style: "bg-blue-50 text-blue-600",
  },
  {
    title: "Active Users",
    value: "21,842",
    description: "88.8% of total users",
    icon: UserCheck,
    style: "bg-green-50 text-green-600",
  },
  {
    title: "Blocked Users",
    value: "184",
    description: "0.7% of total users",
    icon: UserX,
    style: "bg-red-50 text-red-500",
  },
  {
    title: "New This Month",
    value: "1,248",
    description: "+18.4% from last month",
    icon: UserPlus,
    style: "bg-orange-50 text-orange-500",
  },
];

function getStatusStyle(status) {
  if (status === "Active") {
    return "bg-green-50 text-green-600";
  }

  if (status === "Blocked") {
    return "bg-red-50 text-red-500";
  }

  return "bg-gray-100 text-gray-500";
}

export default function AdminUsers() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase()) ||
      user.id.toLowerCase().includes(search.toLowerCase());

    const matchesStatus =
      statusFilter === "All" || user.status === statusFilter;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="min-h-screen bg-[#fffaf7]">
      <AdminSidebar />

      <main className="ml-72 min-h-screen">
        {/* Header */}
        <header className="flex items-center justify-between border-b border-orange-100 bg-white px-8 py-5">
          <div>
            <p className="text-sm text-gray-500">
              Customer Administration
            </p>

            <h1 className="text-2xl font-bold text-gray-900">
              Users Management
            </h1>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600">
            <UserPlus size={19} />
            Add User
          </button>
        </header>

        <section className="p-8">
          {/* Stats */}
          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {stats.map((stat) => {
              const Icon = stat.icon;

              return (
                <div
                  key={stat.title}
                  className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm"
                >
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl ${stat.style}`}
                  >
                    <Icon size={23} />
                  </div>

                  <p className="mt-6 text-sm text-gray-500">
                    {stat.title}
                  </p>

                  <h2 className="mt-2 text-3xl font-bold text-gray-900">
                    {stat.value}
                  </h2>

                  <p className="mt-3 text-xs text-gray-400">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* User Table */}
          <section className="mt-8 rounded-3xl border border-orange-100 bg-white p-7 shadow-sm">
            <div className="flex flex-col justify-between gap-5 xl:flex-row xl:items-center">
              <div>
                <h2 className="text-2xl font-bold text-gray-900">
                  All Users
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  View and manage registered RuchiGo customers.
                </p>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                {/* Search */}
                <div className="flex items-center rounded-xl border border-gray-200 bg-gray-50 px-4">
                  <Search size={18} className="text-gray-400" />

                  <input
                    type="text"
                    value={search}
                    onChange={(event) =>
                      setSearch(event.target.value)
                    }
                    placeholder="Search users..."
                    className="w-64 bg-transparent px-3 py-3 text-sm outline-none"
                  />
                </div>

                {/* Filter */}
                <div className="flex items-center rounded-xl border border-gray-200 bg-white px-4">
                  <Filter size={18} className="text-orange-500" />

                  <select
                    value={statusFilter}
                    onChange={(event) =>
                      setStatusFilter(event.target.value)
                    }
                    className="bg-transparent px-3 py-3 text-sm font-semibold text-gray-600 outline-none"
                  >
                    <option value="All">All Status</option>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Blocked">Blocked</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="mt-7 overflow-x-auto">
              <table className="w-full min-w-[1100px] text-left">
                <thead>
                  <tr className="border-b border-gray-100 text-sm text-gray-400">
                    <th className="pb-4 font-medium">User</th>
                    <th className="pb-4 font-medium">Contact</th>
                    <th className="pb-4 font-medium">Orders</th>
                    <th className="pb-4 font-medium">Total Spent</th>
                    <th className="pb-4 font-medium">Joined</th>
                    <th className="pb-4 font-medium">Status</th>
                    <th className="pb-4 font-medium">Actions</th>
                  </tr>
                </thead>

                <tbody>
                  {filteredUsers.map((user) => (
                    <tr
                      key={user.id}
                      className="border-b border-gray-50 transition hover:bg-orange-50/40"
                    >
                      <td className="py-5">
                        <div className="flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 font-bold text-orange-500">
                            {user.initials}
                          </div>

                          <div>
                            <p className="font-bold text-gray-900">
                              {user.name}
                            </p>

                            <p className="mt-1 text-xs text-gray-400">
                              {user.id}
                            </p>
                          </div>
                        </div>
                      </td>

                      <td className="py-5">
                        <div className="space-y-2">
                          <p className="flex items-center gap-2 text-sm text-gray-600">
                            <Mail
                              size={15}
                              className="text-orange-500"
                            />
                            {user.email}
                          </p>

                          <p className="flex items-center gap-2 text-sm text-gray-500">
                            <Phone
                              size={15}
                              className="text-orange-500"
                            />
                            {user.phone}
                          </p>
                        </div>
                      </td>

                      <td className="py-5">
                        <div className="flex items-center gap-2 font-semibold text-gray-700">
                          <ShoppingBag
                            size={17}
                            className="text-orange-500"
                          />
                          {user.orders}
                        </div>
                      </td>

                      <td className="py-5 font-bold text-gray-900">
                        {user.spent}
                      </td>

                      <td className="py-5 text-sm text-gray-500">
                        {user.joined}
                      </td>

                      <td className="py-5">
                        <span
                          className={`rounded-full px-4 py-2 text-xs font-semibold ${getStatusStyle(
                            user.status
                          )}`}
                        >
                          {user.status}
                        </span>
                      </td>

                      <td className="py-5">
                        <div className="flex items-center gap-2">
                          <button
                            title="View User"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-50 text-orange-500 transition hover:bg-orange-500 hover:text-white"
                          >
                            <Eye size={17} />
                          </button>

                          <button
                            title="Block User"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-red-50 text-red-500 transition hover:bg-red-500 hover:text-white"
                          >
                            <Ban size={17} />
                          </button>

                          <button
                            title="More Actions"
                            className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-50 text-gray-500 transition hover:bg-gray-200"
                          >
                            <MoreVertical size={17} />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* No Results */}
            {filteredUsers.length === 0 && (
              <div className="py-16 text-center">
                <Users
                  size={44}
                  className="mx-auto text-gray-300"
                />

                <h3 className="mt-4 text-lg font-bold text-gray-700">
                  No users found
                </h3>

                <p className="mt-2 text-sm text-gray-400">
                  Try another search or status filter.
                </p>
              </div>
            )}

            {/* Pagination */}
            <div className="mt-7 flex flex-col justify-between gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center">
              <p className="text-sm text-gray-500">
                Showing 1 to {filteredUsers.length} of 24,580 users
              </p>

              <div className="flex items-center gap-2">
                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-400">
                  <ChevronLeft size={18} />
                </button>

                <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-orange-500 font-semibold text-white">
                  1
                </button>

                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 font-semibold text-gray-600 transition hover:border-orange-300 hover:text-orange-500">
                  2
                </button>

                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 font-semibold text-gray-600 transition hover:border-orange-300 hover:text-orange-500">
                  3
                </button>

                <span className="px-2 text-gray-400">...</span>

                <button className="flex h-10 w-10 items-center justify-center rounded-xl border border-gray-200 text-gray-600">
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </section>
        </section>
      </main>
    </div>
  );
}