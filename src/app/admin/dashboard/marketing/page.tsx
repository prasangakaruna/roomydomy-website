"use client"
import { useState } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';

export default function MarketingInsightsPage() {
  const [stats] = useState({
    totalLeads: 124,
    conversionRate: 12.5,
    marketingSpend: 15000,
    revenueGenerated: 45000,
  });

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Marketing Insights</h1>
            <p className="text-gray-600 mt-1">Track marketing performance and campaigns</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Total Leads</p>
              <p className="text-2xl font-bold text-gray-900">{stats.totalLeads}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Conversion Rate</p>
              <p className="text-2xl font-bold text-gray-900">{stats.conversionRate}%</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Marketing Spend</p>
              <p className="text-2xl font-bold text-gray-900">${stats.marketingSpend.toLocaleString()}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Revenue Generated</p>
              <p className="text-2xl font-bold text-gray-900">${stats.revenueGenerated.toLocaleString()}</p>
            </div>
          </div>

          {/* Campaigns */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Active Campaigns</h2>
            </div>
            <div className="p-6">
              <div className="text-center py-12 text-gray-500">
                <p>No active campaigns</p>
                <p className="text-sm mt-2">Create your first marketing campaign to get started</p>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
