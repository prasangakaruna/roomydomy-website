"use client"
import ProtectedRoute from '../../components/ProtectedRoute';
import PartnerLayout from '../../components/PartnerLayout';

export default function PartnerReportingPage() {
  return (
    <ProtectedRoute>
      <PartnerLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Reporting</h1>
            <p className="text-gray-600 mt-1">Generate and view reports</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-gray-500">Reporting dashboard coming soon</p>
          </div>
        </div>
      </PartnerLayout>
    </ProtectedRoute>
  );
}
