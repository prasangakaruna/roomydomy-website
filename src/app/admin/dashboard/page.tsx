"use client"
import { useEffect, useState } from 'react';
import ProtectedRoute from '../components/ProtectedRoute';
import AdminLayout from '../components/AdminLayout';
import Link from 'next/link';
import { getDomes, getOrders } from '../utils/storage';
import { loadDemoData } from '../utils/demoData';

export default function AdminDashboardPage() {
  const [domesCount, setDomesCount] = useState(0);
  const [ordersCount, setOrdersCount] = useState(0);
  const [pendingOrders, setPendingOrders] = useState(0);
  const [recentOrders, setRecentOrders] = useState<any[]>([]);

  const loadData = () => {
    const domes = getDomes();
    const orders = getOrders();
    
    setDomesCount(domes.length);
    setOrdersCount(orders.length);
    setPendingOrders(orders.filter(o => o.status === 'pending').length);
    
    // Get 5 most recent orders
    const recent = orders
      .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
      .slice(0, 5);
    setRecentOrders(recent);
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleLoadDemoData = () => {
    if (confirm('This will replace all existing data with demo data. Are you sure?')) {
      loadDemoData();
      loadData();
      alert('Demo data loaded successfully!');
    }
  };

  const stats = [
    {
      title: 'Total Domes',
      value: domesCount,
      icon: '🏠',
      color: 'from-emerald-500 to-teal-500',
      href: '/admin/dashboard/domes',
    },
    {
      title: 'Total Orders',
      value: ordersCount,
      icon: '📦',
      color: 'from-blue-500 to-cyan-500',
      href: '/admin/dashboard/orders',
    },
    {
      title: 'Pending Orders',
      value: pendingOrders,
      icon: '⏳',
      color: 'from-yellow-500 to-orange-500',
      href: '/admin/dashboard/orders?status=pending',
    },
    {
      title: 'Completed Orders',
      value: ordersCount - pendingOrders,
      icon: '✅',
      color: 'from-green-500 to-emerald-500',
      href: '/admin/dashboard/orders?status=completed',
    },
  ];

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Top bar with tabs */}
          <div className="flex flex-col gap-4 border-b border-gray-200 pb-4">
            <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
              <div>
                <h1 className="text-3xl font-semibold text-gray-900">Dashboard Overview</h1>
                <p className="text-sm text-gray-500">System updates and important alerts</p>
              </div>
              <button
                onClick={handleLoadDemoData}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                </svg>
                <span>Load Demo Data</span>
              </button>
            </div>
            <div className="flex flex-wrap gap-2 text-sm">
              {['Overview', 'Sales', 'Customers', 'Operations'].map((tab) => (
                <button
                  key={tab}
                  className={`px-3 py-2 rounded-lg border ${
                    tab === 'Overview'
                      ? 'border-gray-300 bg-gray-100 text-gray-900'
                      : 'border-transparent text-gray-600 hover:bg-gray-50'
                  }`}
                  type="button"
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
            <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <div>
                <h2 className="text-lg font-semibold text-gray-900">Recent Notifications</h2>
                <p className="text-sm text-gray-500">System updates and important alerts</p>
              </div>
            </div>
            <div className="divide-y divide-gray-100">
              {[
                { title: 'New order #ORD-7653 received', time: '5 minutes ago', badge: 'New' },
                { title: 'New lead from contact form', time: '30 minutes ago', badge: 'New' },
                { title: 'System maintenance scheduled for tomorrow', time: '2 hours ago' },
                { title: 'New partner application submitted', time: '4 hours ago' },
              ].map((item, idx) => (
                <div key={idx} className="px-6 py-3 flex items-center justify-between bg-blue-50/30">
                  <div>
                    <p className="text-sm text-gray-900">{item.title}</p>
                    <p className="text-xs text-gray-500">{item.time}</p>
                  </div>
                  {item.badge && (
                    <span className="text-xs font-medium text-blue-700 bg-blue-100 px-2 py-1 rounded-full">{item.badge}</span>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat, index) => (
              <Link
                key={index}
                href={stat.href}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-5 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
                  </div>
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center text-2xl`}>
                    {stat.icon}
                  </div>
                </div>
                <p className="mt-2 text-xs text-emerald-600">+5.1% vs last month</p>
              </Link>
            ))}
          </div>

          {/* Two-column content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            {/* Monthly Performance placeholder */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Monthly Performance</h3>
              <p className="text-sm text-gray-500 mb-6">Sales, bookings, and inquiries over time</p>
              <div className="h-48 bg-gray-50 border border-dashed border-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm">
                Chart placeholder
              </div>
            </div>
            {/* Business Breakdown placeholder */}
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Business Breakdown</h3>
              <p className="text-sm text-gray-500 mb-6">Revenue distribution and customer mix</p>
              <div className="h-48 bg-gray-50 border border-dashed border-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm">
                Charts placeholder
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
              <h2 className="text-lg font-semibold text-gray-900">Recent Orders</h2>
              <Link
                href="/admin/dashboard/orders"
                className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
              >
                View All →
              </Link>
            </div>

            {recentOrders.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No orders yet</p>
                <p className="text-sm text-gray-400 mt-1">Orders will appear here once they are created</p>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Order #</th>
                      <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Customer</th>
                      <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Dome</th>
                      <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Amount</th>
                      <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Status</th>
                      <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {recentOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="py-3 px-6 text-sm font-medium text-gray-900">{order.orderNumber}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{order.customerName}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{order.domeTitle}</td>
                        <td className="py-3 px-6 text-sm font-semibold text-gray-900">{order.totalAmount}</td>
                        <td className="py-3 px-6">
                          <span
                            className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              order.status === 'completed'
                                ? 'bg-green-100 text-green-800'
                                : order.status === 'pending'
                                ? 'bg-yellow-100 text-yellow-800'
                                : order.status === 'cancelled'
                                ? 'bg-red-100 text-red-800'
                                : 'bg-blue-100 text-blue-800'
                            }`}
                          >
                            {order.status}
                          </span>
                        </td>
                        <td className="py-3 px-6 text-sm text-gray-500">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
