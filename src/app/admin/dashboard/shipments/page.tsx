"use client"
import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';
import { getOrders } from '../../utils/storage';

export default function ShipmentsPage() {
  const [shipments, setShipments] = useState<any[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    inTransit: 0,
    delivered: 0,
    pending: 0,
  });

  useEffect(() => {
    loadShipments();
  }, []);

  const loadShipments = () => {
    const orders = getOrders();
    
    // Convert orders to shipments
    const shipmentsList = orders
      .filter(order => order.status !== 'pending' && order.status !== 'cancelled')
      .map(order => ({
        id: order.id,
        orderNumber: order.orderNumber,
        customerName: order.customerName,
        location: order.location,
        status: order.status === 'completed' ? 'Delivered' : 
                order.status === 'in-production' ? 'In Transit' : 'Pending',
        estimatedDelivery: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
        createdAt: order.createdAt,
      }));

    setShipments(shipmentsList);
    setStats({
      total: shipmentsList.length,
      inTransit: shipmentsList.filter(s => s.status === 'In Transit').length,
      delivered: shipmentsList.filter(s => s.status === 'Delivered').length,
      pending: shipmentsList.filter(s => s.status === 'Pending').length,
    });
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Shipments</h1>
            <p className="text-gray-600 mt-1">Track and manage shipments</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Total Shipments</p>
              <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">In Transit</p>
              <p className="text-2xl font-bold text-gray-900">{stats.inTransit}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Delivered</p>
              <p className="text-2xl font-bold text-gray-900">{stats.delivered}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{stats.pending}</p>
            </div>
          </div>

          {/* Shipments Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">All Shipments</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Order #</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Customer</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Location</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Est. Delivery</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {shipments.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-gray-500">
                        No shipments found
                      </td>
                    </tr>
                  ) : (
                    shipments.map((shipment) => (
                      <tr key={shipment.id} className="hover:bg-gray-50">
                        <td className="py-3 px-6 text-sm font-medium text-gray-900">{shipment.orderNumber}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{shipment.customerName}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{shipment.location}</td>
                        <td className="py-3 px-6">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            shipment.status === 'Delivered' ? 'bg-green-100 text-green-800' :
                            shipment.status === 'In Transit' ? 'bg-blue-100 text-blue-800' :
                            'bg-yellow-100 text-yellow-800'
                          }`}>
                            {shipment.status}
                          </span>
                        </td>
                        <td className="py-3 px-6 text-sm text-gray-500">
                          {new Date(shipment.estimatedDelivery).toLocaleDateString()}
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
