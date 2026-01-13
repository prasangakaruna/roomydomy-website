"use client"
import { useState } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';

export default function ReportingPage() {
  const [reports] = useState([
    { id: 1, name: 'Sales Report', type: 'Sales', date: '2024-01-15', status: 'Generated' },
    { id: 2, name: 'Customer Report', type: 'Customers', date: '2024-01-14', status: 'Generated' },
    { id: 3, name: 'Financial Report', type: 'Finance', date: '2024-01-13', status: 'Pending' },
  ]);

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Reporting</h1>
              <p className="text-gray-600 mt-1">Generate and view business reports</p>
            </div>
            <button className="px-5 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Generate Report
            </button>
          </div>

          {/* Reports List */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Recent Reports</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Report Name</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Type</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {reports.map((report) => (
                    <tr key={report.id} className="hover:bg-gray-50">
                      <td className="py-3 px-6 text-sm font-medium text-gray-900">{report.name}</td>
                      <td className="py-3 px-6 text-sm text-gray-700">{report.type}</td>
                      <td className="py-3 px-6 text-sm text-gray-700">{report.date}</td>
                      <td className="py-3 px-6">
                        <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                          report.status === 'Generated' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {report.status}
                        </span>
                      </td>
                      <td className="py-3 px-6">
                        <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
