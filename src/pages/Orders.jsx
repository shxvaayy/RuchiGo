import Navbar from "../components/Navbar.jsx";
import { PackageCheck, Clock, CheckCircle2, XCircle, Wallet, Bike } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { apiRequest } from "../lib/api.js";
import toast from "react-hot-toast";

const tabs = ["Active", "Completed", "Cancelled"];
const activeStatuses = ["pending", "confirmed", "preparing", "ready", "out_for_delivery"];

function statusLabel(status) {
  return ({ pending: "Pending", confirmed: "Confirmed", preparing: "Preparing", ready: "Ready", out_for_delivery: "On the Way", delivered: "Delivered", cancelled: "Cancelled" }[status] || status);
}

export default function Orders() {
  const { token, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Active");
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isAuthenticated) { navigate("/login", { replace: true }); return; }
    apiRequest("/orders/", { token })
      .then((data) => setOrders(data.results || data || []))
      .catch((error) => toast.error(error.message))
      .finally(() => setLoading(false));
  }, [isAuthenticated, navigate, token]);

  const filteredOrders = orders.filter((order) => activeTab === "Active" ? activeStatuses.includes(order.status) : activeTab === "Completed" ? order.status === "delivered" : order.status === "cancelled");
  const delivered = orders.filter((order) => order.status === "delivered").length;
  const cancelled = orders.filter((order) => order.status === "cancelled").length;
  const spent = orders.reduce((sum, order) => sum + Number(order.total || 0), 0);

  if (!isAuthenticated) return null;

  return <><Navbar /><main className="min-h-screen bg-[#fffaf7]"><section className="mx-auto max-w-7xl px-6 py-10">
    <div className="mb-8"><p className="font-semibold text-orange-500">My Orders</p><h1 className="mt-2 text-4xl font-bold text-gray-900">Orders</h1><p className="mt-3 text-gray-500">Your live order history from RuchiGo.</p></div>
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
      <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm"><PackageCheck className="text-orange-500" size={30} /><h2 className="mt-4 text-3xl font-bold">{orders.length}</h2><p className="mt-2 text-gray-500">Total Orders</p></div>
      <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm"><CheckCircle2 className="text-green-500" size={30} /><h2 className="mt-4 text-3xl font-bold">{delivered}</h2><p className="mt-2 text-gray-500">Delivered</p></div>
      <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm"><XCircle className="text-red-500" size={30} /><h2 className="mt-4 text-3xl font-bold">{cancelled}</h2><p className="mt-2 text-gray-500">Cancelled</p></div>
      <div className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm"><Wallet className="text-blue-500" size={30} /><h2 className="mt-4 text-3xl font-bold">₹{spent.toFixed(2)}</h2><p className="mt-2 text-gray-500">Money Spent</p></div>
    </div>
    <div className="mt-10 flex flex-wrap gap-4">{tabs.map((tab) => <button type="button" key={tab} onClick={() => setActiveTab(tab)} className={`rounded-xl px-6 py-3 font-semibold ${activeTab === tab ? "bg-orange-500 text-white" : "border border-orange-200 bg-white text-orange-500"}`}>{tab}</button>)}</div>
    <div className="mt-8 space-y-6">{loading ? <div className="rounded-3xl bg-white p-16 text-center text-gray-500">Loading orders...</div> : filteredOrders.length === 0 ? <div className="rounded-3xl border border-dashed border-orange-200 bg-white py-20 text-center"><PackageCheck size={60} className="mx-auto text-orange-300" /><h2 className="mt-6 text-2xl font-bold">No Orders Found</h2><Link to="/" className="mt-8 inline-block rounded-xl bg-orange-500 px-8 py-3 font-semibold text-white">Order Food</Link></div> : filteredOrders.map((order) => <div key={order.id} className="rounded-3xl border border-orange-100 bg-white p-6 shadow-sm"><div className="flex flex-col gap-5 lg:flex-row lg:items-center"><div className="flex-1"><h2 className="text-2xl font-bold">{order.restaurant?.name || `Order ${String(order.number).slice(0, 8)}`}</h2><p className="mt-2 text-gray-500">{(order.items || []).map((item) => `${item.name} × ${item.quantity}`).join(", ") || "Order items"}</p><div className="mt-3 flex flex-wrap gap-5 text-sm text-gray-500"><span className="flex items-center gap-2"><PackageCheck size={16} /> #{String(order.number).slice(0, 8)}</span><span className="flex items-center gap-2"><Clock size={16} /> {new Date(order.created_at).toLocaleString()}</span></div></div><div className="text-center"><span className={`rounded-full px-4 py-2 text-sm font-semibold ${order.status === "delivered" ? "bg-green-100 text-green-600" : order.status === "cancelled" ? "bg-red-100 text-red-600" : "bg-orange-100 text-orange-500"}`}>{statusLabel(order.status)}</span><p className="mt-4 text-gray-500">{order.payment?.method?.toUpperCase() || "Payment"} · {order.payment?.status || "pending"}</p></div><p className="text-3xl font-bold">₹{Number(order.total || 0).toFixed(2)}</p></div><div className="mt-6 rounded-2xl bg-orange-50 p-5"><div className="flex flex-wrap items-center justify-between gap-4"><span className="font-semibold">Order Placed</span><span className="font-semibold">{statusLabel(order.status)}</span></div></div><div className="mt-6 flex flex-wrap gap-4">{activeStatuses.includes(order.status) && <Link to="/tracking" state={{ orderId: order.id, orderNumber: order.number }} className="rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white">Track Order</Link>}<Link to={`/food-details/${order.items?.[0]?.menu_item || ""}`} className="rounded-xl border border-orange-300 px-6 py-3 font-semibold text-orange-500">View Details</Link></div></div>)}</div>
  </section></main></>;
}