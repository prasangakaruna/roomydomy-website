"use client"
import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';
import { getOrders } from '../../utils/storage';

export default function CRMPage() {
  const [leads, setLeads] = useState<any[]>([]);
  const [contacts, setContacts] = useState<any[]>([]);

  useEffect(() => {
    loadCRMData();
  }, []);

  const loadCRMData = () => {
    const orders = getOrders();
    
    // Convert orders to leads/contacts
    const leadsList = orders.map(order => ({
      id: order.id,
      name: order.customerName,
      email: order.customerEmail,
      phone: order.customerPhone,
      source: 'Website',
      status: order.status === 'pending' ? 'New Lead' : 'Converted',
      value: order.totalAmount,
      createdAt: order.createdAt,
    }));

    setLeads(leadsList);
    setContacts(leadsList.filter(l => l.status === 'Converted'));
  };

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">CRM</h1>
            <p className="text-gray-600 mt-1">Manage customer relationships and leads</p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Total Leads</p>
              <p className="text-2xl font-bold text-gray-900">{leads.length}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">New Leads</p>
              <p className="text-2xl font-bold text-gray-900">{leads.filter(l => l.status === 'New Lead').length}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Converted</p>
              <p className="text-2xl font-bold text-gray-900">{contacts.length}</p>
            </div>
          </div>

          {/* Leads Table */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Leads</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Name</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Email</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Phone</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Source</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Status</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {leads.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="py-12 text-center text-gray-500">
                        No leads found
                      </td>
                    </tr>
                  ) : (
                    leads.map((lead) => (
                      <tr key={lead.id} className="hover:bg-gray-50">
                        <td className="py-3 px-6 text-sm font-medium text-gray-900">{lead.name}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{lead.email}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{lead.phone}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{lead.source}</td>
                        <td className="py-3 px-6">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            lead.status === 'New Lead' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'
                          }`}>
                            {lead.status}
                          </span>
                        </td>
                        <td className="py-3 px-6 text-sm font-semibold text-gray-900">{lead.value}</td>
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
