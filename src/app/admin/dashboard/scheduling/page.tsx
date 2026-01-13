"use client"
import { useState } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';

export default function SchedulingPage() {
  const [stats] = useState({
    today: 8,
    thisWeek: 24,
    thisMonth: 96,
    upcoming: 12,
  });

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Scheduling</h1>
            <p className="text-gray-600 mt-1">Manage schedules and appointments</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Today</p>
              <p className="text-2xl font-bold text-gray-900">{stats.today}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">This Week</p>
              <p className="text-2xl font-bold text-gray-900">{stats.thisWeek}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">This Month</p>
              <p className="text-2xl font-bold text-gray-900">{stats.thisMonth}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Upcoming</p>
              <p className="text-2xl font-bold text-gray-900">{stats.upcoming}</p>
            </div>
          </div>

          {/* Calendar/Schedule */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Schedule</h2>
            </div>
            <div className="p-6">
              <div className="text-center py-12 text-gray-500">
                <p>No scheduled events</p>
                <p className="text-sm mt-2">Schedule events and appointments to manage your timeline</p>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
