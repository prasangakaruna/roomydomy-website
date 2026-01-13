"use client"
import { useState, useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';
import {
  getOrders,
  addOrder,
  updateOrder,
  deleteOrder,
  getDomes,
  type Order,
} from '../../utils/storage';

export default function OrdersManagementPage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [orders, setOrders] = useState<Order[]>([]);
  const [filteredOrders, setFilteredOrders] = useState<Order[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingOrder, setEditingOrder] = useState<Order | null>(null);
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    domeId: '',
    status: 'pending' as Order['status'],
    totalAmount: '',
    deposit: '',
    location: '',
    notes: '',
  });

  useEffect(() => {
    loadOrders();
    if (searchParams.get('action') === 'add') {
      setIsModalOpen(true);
    }
    const status = searchParams.get('status');
    if (status) {
      setStatusFilter(status);
    }
  }, [searchParams]);

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

  const handleOpenModal = (order?: Order) => {
    if (order) {
      setEditingOrder(order);
      setFormData({
        customerName: order.customerName,
        customerEmail: order.customerEmail,
        customerPhone: order.customerPhone,
        domeId: order.domeId,
        status: order.status,
        totalAmount: order.totalAmount,
        deposit: order.deposit,
        location: order.location,
        notes: order.notes || '',
      });
    } else {
      setEditingOrder(null);
      setFormData({
        customerName: '',
        customerEmail: '',
        customerPhone: '',
        domeId: '',
        status: 'pending',
        totalAmount: '',
        deposit: '',
        location: '',
        notes: '',
      });
    }
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setEditingOrder(null);
    setFormData({
      customerName: '',
      customerEmail: '',
      customerPhone: '',
      domeId: '',
      status: 'pending',
      totalAmount: '',
      deposit: '',
      location: '',
      notes: '',
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const domes = getDomes();
    const selectedDome = domes.find(d => d.id === formData.domeId);
    
    if (!selectedDome) {
      alert('Please select a valid dome');
      return;
    }

    if (editingOrder) {
      updateOrder(editingOrder.id, {
        ...formData,
        domeTitle: selectedDome.title,
      });
    } else {
      addOrder({
        ...formData,
        domeTitle: selectedDome.title,
      });
    }
    
    loadOrders();
    handleCloseModal();
  };

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this order?')) {
      deleteOrder(id);
      loadOrders();
    }
  };

  const getStatusColor = (status: Order['status']) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'cancelled':
        return 'bg-red-100 text-red-800';
      case 'in-production':
        return 'bg-blue-100 text-blue-800';
      case 'confirmed':
        return 'bg-purple-100 text-purple-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const domes = getDomes();

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">Order Management</h1>
              <p className="text-gray-600 mt-2">Manage all customer orders</p>
            </div>
            <button
              onClick={() => handleOpenModal()}
              className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all shadow-lg shadow-blue-500/30"
            >
              + Create New Order
            </button>
          </div>

          {/* Filters */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200 p-4">
            <div className="flex items-center gap-4 flex-wrap">
              <span className="text-sm font-medium text-gray-700">Filter by Status:</span>
              {['all', 'pending', 'confirmed', 'in-production', 'completed', 'cancelled'].map((status) => (
                <button
                  key={status}
                  onClick={() => setStatusFilter(status)}
                  className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
                    statusFilter === status
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {status.charAt(0).toUpperCase() + status.slice(1).replace('-', ' ')}
                </button>
              ))}
            </div>
          </div>

          {/* Orders Table */}
          {filteredOrders.length === 0 ? (
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-12 text-center">
              <div className="text-6xl mb-4">📦</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No orders found</h3>
              <p className="text-gray-600 mb-6">
                {statusFilter === 'all' 
                  ? 'Get started by creating your first order'
                  : `No orders with status "${statusFilter}"`
                }
              </p>
              {statusFilter === 'all' && (
                <button
                  onClick={() => handleOpenModal()}
                  className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all"
                >
                  Create First Order
                </button>
              )}
            </div>
          ) : (
            <div className="bg-white rounded-xl shadow-md border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Order #</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Customer</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Dome</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Location</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Amount</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Status</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Date</th>
                      <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    {filteredOrders.map((order) => (
                      <tr key={order.id} className="hover:bg-gray-50">
                        <td className="py-4 px-6 text-sm font-medium text-gray-900">{order.orderNumber}</td>
                        <td className="py-4 px-6">
                          <div className="text-sm text-gray-900 font-medium">{order.customerName}</div>
                          <div className="text-xs text-gray-500">{order.customerEmail}</div>
                          <div className="text-xs text-gray-500">{order.customerPhone}</div>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-700">{order.domeTitle}</td>
                        <td className="py-4 px-6 text-sm text-gray-700">{order.location}</td>
                        <td className="py-4 px-6">
                          <div className="text-sm font-semibold text-gray-900">{order.totalAmount}</div>
                          <div className="text-xs text-gray-500">Deposit: {order.deposit}</div>
                        </td>
                        <td className="py-4 px-6">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusColor(order.status)}`}>
                            {order.status.replace('-', ' ')}
                          </span>
                        </td>
                        <td className="py-4 px-6 text-sm text-gray-500">
                          {new Date(order.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-4 px-6">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => handleOpenModal(order)}
                              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
                            >
                              Edit
                            </button>
                            <span className="text-gray-300">|</span>
                            <button
                              onClick={() => handleDelete(order.id)}
                              className="text-red-600 hover:text-red-700 text-sm font-medium"
                            >
                              Delete
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Modal */}
          {isModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={handleCloseModal}>
              <div
                className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">
                    {editingOrder ? 'Edit Order' : 'Create New Order'}
                  </h2>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Customer Name *
                      </label>
                      <input
                        type="text"
                        value={formData.customerName}
                        onChange={(e) => setFormData({ ...formData, customerName: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Customer Email *
                      </label>
                      <input
                        type="email"
                        value={formData.customerEmail}
                        onChange={(e) => setFormData({ ...formData, customerEmail: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Customer Phone *
                      </label>
                      <input
                        type="tel"
                        value={formData.customerPhone}
                        onChange={(e) => setFormData({ ...formData, customerPhone: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dome *
                      </label>
                      <select
                        value={formData.domeId}
                        onChange={(e) => setFormData({ ...formData, domeId: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        required
                      >
                        <option value="">Select a dome</option>
                        {domes.map((dome) => (
                          <option key={dome.id} value={dome.id}>
                            {dome.title} - {dome.price}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Status *
                      </label>
                      <select
                        value={formData.status}
                        onChange={(e) => setFormData({ ...formData, status: e.target.value as Order['status'] })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        required
                      >
                        <option value="pending">Pending</option>
                        <option value="confirmed">Confirmed</option>
                        <option value="in-production">In Production</option>
                        <option value="completed">Completed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Location *
                      </label>
                      <input
                        type="text"
                        value={formData.location}
                        onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="City, Country"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Total Amount *
                      </label>
                      <input
                        type="text"
                        value={formData.totalAmount}
                        onChange={(e) => setFormData({ ...formData, totalAmount: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="$299,000"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Deposit *
                      </label>
                      <input
                        type="text"
                        value={formData.deposit}
                        onChange={(e) => setFormData({ ...formData, deposit: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                        placeholder="$50,000"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Notes
                    </label>
                    <textarea
                      value={formData.notes}
                      onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                      rows={4}
                      placeholder="Additional notes about this order..."
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <button
                      type="submit"
                      className="flex-1 bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold py-3 rounded-lg hover:from-blue-700 hover:to-cyan-700 transition-all"
                    >
                      {editingOrder ? 'Update Order' : 'Create Order'}
                    </button>
                    <button
                      type="button"
                      onClick={handleCloseModal}
                      className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
