"use client"
import { useState } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';

export default function OperationsPage() {
  const [stats] = useState({
    activeProjects: 12,
    inProgress: 8,
    completed: 24,
    pending: 4,
  });

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Operations</h1>
            <p className="text-gray-600 mt-1">Manage operational activities and projects</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Active Projects</p>
              <p className="text-2xl font-bold text-gray-900">{stats.activeProjects}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">In Progress</p>
              <p className="text-2xl font-bold text-gray-900">{stats.inProgress}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Completed</p>
              <p className="text-2xl font-bold text-gray-900">{stats.completed}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Pending</p>
              <p className="text-2xl font-bold text-gray-900">{stats.pending}</p>
            </div>
          </div>

          {/* Operations List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Active Operations</h2>
            </div>
            <div className="p-6">
              <div className="text-center py-12 text-gray-500">
                <p>No active operations</p>
                <p className="text-sm mt-2">Operations will appear here once they are created</p>
              </div>
            </div>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
