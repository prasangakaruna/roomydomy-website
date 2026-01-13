"use client"
import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';
import { getOrders } from '../../utils/storage';

export default function CustomerInsightsPage() {
  const [customers, setCustomers] = useState<any[]>([]);
  const [stats, setStats] = useState({
    totalCustomers: 0,
    newCustomers: 0,
    activeCustomers: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    loadCustomers();
  }, []);

  const loadCustomers = () => {
    const orders = getOrders();
    
    // Extract unique customers from orders
    const customerMap = new Map();
    orders.forEach(order => {
      if (!customerMap.has(order.customerEmail)) {
        customerMap.set(order.customerEmail, {
          name: order.customerName,
          email: order.customerEmail,
          phone: order.customerPhone,
          orders: [],
          totalSpent: 0,
          lastOrder: null,
        });
      }
      const customer = customerMap.get(order.customerEmail);
      customer.orders.push(order);
      const amount = parseFloat(order.totalAmount.replace(/[^\d.]/g, '') || '0');
      customer.totalSpent += amount;
      if (!customer.lastOrder || new Date(order.createdAt) > new Date(customer.lastOrder)) {
        customer.lastOrder = order.createdAt;
      }
    });

    const customerList = Array.from(customerMap.values());
    setCustomers(customerList);

    // Calculate stats
    const now = new Date();
    const lastMonth = new Date(now.getFullYear(), now.getMonth() - 1, now.getDate());
    const newCustomers = customerList.filter(c => new Date(c.lastOrder) >= lastMonth).length;
    const activeCustomers = customerList.filter(c => c.orders.length > 0).length;
    const totalRevenue = customerList.reduce((sum, c) => sum + c.totalSpent, 0);

    setStats({
      totalCustomers: customerList.length,
      newCustomers,
      activeCustomers,
      totalRevenue,
    });
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Customer Insights</h1>
            <p className="text-gray-600 mt-1">Manage and analyze customer data</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Total Customers</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalCustomers}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">New Customers</p>
              <p className="text-2xl font-bold text-gray-900">+{stats.newCustomers}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Active Customers</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeCustomers}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${stats.totalRevenue.toLocaleString()}</p>
            </div>
          </div>

          {/* Customers Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">All Customers</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Name</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Email</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Phone</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Orders</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Total Spent</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Last Order</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {customers.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-gray-500">
                        No customers found
                      </td>
                    </tr>
                  ) : (
                    customers.map((customer, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="py-3 px-6 text-sm font-medium text-gray-900">{customer.name}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{customer.email}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{customer.phone}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{customer.orders.length}</td>
                        <td className="py-3 px-6 text-sm font-semibold text-gray-900">${customer.totalSpent.toLocaleString()}</td>
                        <td className="py-3 px-6 text-sm text-gray-500">
                          {customer.lastOrder ? new Date(customer.lastOrder).toLocaleDateString() : 'N/A'}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
