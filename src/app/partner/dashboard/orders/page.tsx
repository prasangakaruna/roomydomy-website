"use client"
import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import PartnerLayout from '../../components/PartnerLayout';
import {
  getOrders,
  updateOrder,
  getDomes,
  type Order,
} from '../../utils/storage';

export default function PartnerOrdersPage() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [statusFilter, setStatusFilter] = useState<string>('all');

  useEffect(() => {
    loadOrders();
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      const status = params.get('status');
      if (status) {
        setStatusFilter(status);
      }
    }
  }, []);

  useEffect(() => {
    filterOrders();
  }, [orders, statusFilter]);

  const loadOrders = () => {
    const allOrders = getOrders();
    setOrders(allOrders);
  };

  const filterOrders = () => {
    if (statusFilter === 'all') {
      setFilteredOrders(orders);
    } else {
      setFilteredOrders(orders.filter(o => o.status === statusFilter));
    }
  };

  const handleStatusChange = (orderId: string, newStatus: Order['status']) => {
    updateOrder(orderId, { status: newStatus });
    loadOrders();
  };

  return (
    <ProtectedRoute>
      <PartnerLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Orders Management</h1>
            <p className="text-gray-600 mt-1">View and manage all orders</p>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
            <div className="flex flex-wrap gap-2">
              {['all', 'pending', 'confirmed', 'in-production', 'completed', 'cancelled'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    statusFilter === status
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Orders Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
            {filteredOrders.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500">No orders found</p>
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
                      <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="py-3 px-6 text-sm font-medium text-gray-900">{order.orderNumber}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">
                          <div>{order.customerName}</div>
                          <div className="text-xs text-gray-500">{order.customerEmail}</div>
                        </td>
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
                        <td className="py-3 px-6">
                          <select
                            value={order.status}
                            onChange={(e) => handleStatusChange(order.id, e.target.value as Order['status'])}
                            className="text-xs border border-gray-300 rounded px-2 py-1"
                          >
                            <option value="pending">Pending</option>
                            <option value="confirmed">Confirmed</option>
                            <option value="in-production">In Production</option>
                            <option value="completed">Completed</option>
                            <option value="cancelled">Cancelled</option>
                          </select>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </PartnerLayout>
    </ProtectedRoute>
  );
}
