"use client"
import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import PartnerLayout from '../../components/PartnerLayout';
import { getDomes, getOrders } from '../../utils/storage';

export default function PartnerAnalyticsPage() {
  const [stats, setStats] = useState({
    totalDomes: 0,
    totalOrders: 0,
    completedOrders: 0,
    pendingOrders: 0,
  });

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = () => {
    const domes = getDomes();
    const orders = getOrders();

    setStats({
      totalDomes: domes.length,
      totalOrders: orders.length,
      completedOrders: orders.filter(o => o.status === 'completed').length,
      pendingOrders: orders.filter(o => o.status === 'pending').length,
    });
  };

  return (
    <ProtectedRoute>
      <PartnerLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Business Analytics</h1>
            <p className="text-gray-600 mt-1">View your business performance metrics</p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Total Domes</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalDomes}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Total Orders</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalOrders}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Completed Orders</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completedOrders}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Pending Orders</p>
              <p className="text-2xl font-bold text-gray-900">{stats.pendingOrders}</p>
            </div>
          </div>

          {/* Charts Placeholder */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Status Distribution</h3>
              <div className="h-48 bg-gray-50 border border-dashed border-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm">
                Chart placeholder
              </div>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Monthly Performance</h3>
              <div className="h-48 bg-gray-50 border border-dashed border-gray-200 rounded-md flex items-center justify-center text-gray-400 text-sm">
                Chart placeholder
              </div>
            </div>
          </div>
        </div>
      </PartnerLayout>
    </ProtectedRoute>
  );
}
