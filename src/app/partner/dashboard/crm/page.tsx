"use client"
import ProtectedRoute from '../../components/ProtectedRoute';
import PartnerLayout from '../../components/PartnerLayout';

export default function PartnerCRMPage() {
  return (
    <ProtectedRoute>
      <PartnerLayout>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">CRM</h1>
            <p className="text-gray-600 mt-1">Manage customer relationships</p>
          </div>

          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <p className="text-gray-500">CRM dashboard coming soon</p>
          </div>
        </div>
      </PartnerLayout>
    </ProtectedRoute>
  );
}
