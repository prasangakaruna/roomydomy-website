"use client"
import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';
import { getDomes, getOrders } from '../../utils/storage';
import { getPayments, calculateRevenue, calculateExpenses } from '../../utils/finance';

export default function AnalyticsPage() {
  const [stats, setStats] = useState({
    totalDomes: 0,
    totalOrders: 0,
    completedOrders: 0,
    pendingOrders: 0,
    totalRevenue: 0,
    totalExpenses: 0,
    netProfit: 0,
  });

  const [orderStatusData, setOrderStatusData] = useState<Record<string, number>>({});
  const [domeStatusData, setDomeStatusData] = useState<Record<string, number>>({});
  const [revenueByMonth, setRevenueByMonth] = useState<{ month: string; revenue: number }[]>([]);

  useEffect(() => {
    loadAnalytics();
  }, []);

  const loadAnalytics = () => {
    const domes = getDomes();
    const orders = getOrders();
    const payments = getPayments();
    const revenue = calculateRevenue();
    const expenses = calculateExpenses();

    // Order status breakdown
    const statusCount: Record<string, number> = {};
    orders.forEach(order => {
      statusCount[order.status] = (statusCount[order.status] || 0) + 1;
    });
    setOrderStatusData(statusCount);

    // Dome status breakdown
    const domeStatusCount: Record<string, number> = {};
    domes.forEach(dome => {
      const status = dome.status || 'available';
      domeStatusCount[status] = (domeStatusCount[status] || 0) + 1;
    });
    setDomeStatusData(domeStatusCount);

    // Revenue by month (last 6 months)
    const monthlyRevenue: Record<string, number> = {};
    const now = new Date();
    for (let i = 5; i >= 0; i--) {
      const date = new Date(now.getFullYear(), now.getMonth() - i, 1);
      const monthKey = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
      monthlyRevenue[monthKey] = 0;
    }

    payments
      .filter(p => p.status === 'completed')
      .forEach(payment => {
        const date = new Date(payment.completedAt || payment.createdAt);
        const monthKey = date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
        if (monthlyRevenue[monthKey] !== undefined) {
          const amount = parseFloat(payment.amount.replace(/[^\d.]/g, '') || '0');
          monthlyRevenue[monthKey] += amount;
        }
      });

    setRevenueByMonth(Object.entries(monthlyRevenue).map(([month, revenue]) => ({ month, revenue })));

    setStats({
      totalDomes: domes.length,
      totalOrders: orders.length,
      completedOrders: orders.filter(o => o.status === 'completed').length,
      pendingOrders: orders.filter(o => o.status === 'pending').length,
      totalRevenue: revenue.total,
      totalExpenses: expenses.total,
      netProfit: revenue.total - expenses.total,
    });
  };

  const maxRevenue = Math.max(...revenueByMonth.map(r => r.revenue), 1);

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Analytics Dashboard</h1>
            <p className="text-gray-600 mt-2">Comprehensive insights and statistics</p>
          </div>

          {/* Key Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Domes</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalDomes}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-3xl">
                  🏠
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Orders</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">{stats.totalOrders}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {stats.completedOrders} completed, {stats.pendingOrders} pending
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-3xl">
                  📦
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">${stats.totalRevenue.toLocaleString()}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-3xl">
                  💰
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Net Profit</p>
                  <p className={`text-3xl font-bold mt-2 ${stats.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ${stats.netProfit.toLocaleString()}
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-3xl">
                  📊
                </div>
              </div>
            </div>
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Revenue Chart */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Revenue Trend (Last 6 Months)</h2>
              <div className="space-y-4">
                {revenueByMonth.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-700 font-medium">{item.month}</span>
                      <span className="text-gray-900 font-semibold">${item.revenue.toLocaleString()}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-4">
                      <div
                        className="bg-gradient-to-r from-green-500 to-emerald-500 h-4 rounded-full transition-all"
                        style={{ width: `${(item.revenue / maxRevenue) * 100}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Status Chart */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Orders by Status</h2>
              <div className="space-y-4">
                {Object.entries(orderStatusData).map(([status, count]) => {
                  const total = stats.totalOrders;
                  const percentage = total > 0 ? (count / total) * 100 : 0;
                  const colors: Record<string, string> = {
                    'completed': 'from-green-500 to-emerald-500',
                    'pending': 'from-yellow-500 to-orange-500',
                    'confirmed': 'from-blue-500 to-cyan-500',
                    'in-production': 'from-purple-500 to-indigo-500',
                    'cancelled': 'from-red-500 to-pink-500',
                  };
                  return (
                    <div key={status} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-700 font-medium capitalize">{status.replace('-', ' ')}</span>
                        <span className="text-gray-900 font-semibold">{count} ({percentage.toFixed(1)}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className={`bg-gradient-to-r ${colors[status] || 'from-gray-500 to-gray-600'} h-4 rounded-full transition-all`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Dome Status */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Domes by Status</h2>
              <div className="space-y-4">
                {Object.entries(domeStatusData).map(([status, count]) => {
                  const total = stats.totalDomes;
                  const percentage = total > 0 ? (count / total) * 100 : 0;
                  const colors: Record<string, string> = {
                    'available': 'from-green-500 to-emerald-500',
                    'under-development': 'from-yellow-500 to-orange-500',
                    'coming-soon': 'from-blue-500 to-cyan-500',
                  };
                  return (
                    <div key={status} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-700 font-medium capitalize">{status.replace('-', ' ')}</span>
                        <span className="text-gray-900 font-semibold">{count} ({percentage.toFixed(1)}%)</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-4">
                        <div
                          className={`bg-gradient-to-r ${colors[status] || 'from-gray-500 to-gray-600'} h-4 rounded-full transition-all`}
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Financial Summary */}
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Financial Summary</h2>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                    <p className="text-2xl font-bold text-green-600 mt-1">${stats.totalRevenue.toLocaleString()}</p>
                  </div>
                  <div className="text-3xl">💰</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Expenses</p>
                    <p className="text-2xl font-bold text-red-600 mt-1">${stats.totalExpenses.toLocaleString()}</p>
                  </div>
                  <div className="text-3xl">💸</div>
                </div>
                <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Net Profit</p>
                    <p className={`text-2xl font-bold mt-1 ${stats.netProfit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      ${stats.netProfit.toLocaleString()}
                    </p>
                  </div>
                  <div className="text-3xl">📊</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
