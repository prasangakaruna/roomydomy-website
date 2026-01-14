"use client"
import ProtectedRoute from '../../components/ProtectedRoute';
import PartnerLayout from '../../components/PartnerLayout';

export default function PartnerSchedulingPage() {
  return (
    <ProtectedRoute>
      <PartnerLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Scheduling</h1>
            <p className="text-gray-600 mt-1">Manage schedules and appointments</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-gray-500">Scheduling dashboard coming soon</p>
          </div>
        </div>
      </PartnerLayout>
    </ProtectedRoute>
  );
}
