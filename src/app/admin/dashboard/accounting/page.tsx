"use client"
import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';
import { getPayments, calculateRevenue, calculateExpenses } from '../../utils/finance';

export default function AccountingPage() {
  const [revenue, setRevenue] = useState({ total: 0, thisMonth: 0, thisYear: 0, pending: 0 });
  const [expenses, setExpenses] = useState({ total: 0, thisMonth: 0, thisYear: 0 });
  const [payments, setPayments] = useState<any[]>([]);

  useEffect(() => {
    loadAccountingData();
  }, []);

  const loadAccountingData = () => {
    const revenueData = calculateRevenue();
    const expenseData = calculateExpenses();
    const paymentsList = getPayments().slice(0, 10);

    setRevenue(revenueData);
    setExpenses(expenseData);
    setPayments(paymentsList);
  };

  const profit = revenue.total - expenses.total;

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Accounting</h1>
            <p className="text-gray-600 mt-1">Financial overview and accounting records</p>
          </div>

          {/* Financial Summary */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Total Revenue</p>
              <p className="text-2xl font-bold text-gray-900">${revenue.total.toLocaleString()}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Total Expenses</p>
              <p className="text-2xl font-bold text-gray-900">${expenses.total.toLocaleString()}</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Net Profit</p>
              <p className={`text-2xl font-bold ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                ${profit.toLocaleString()}
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-5">
              <p className="text-sm font-medium text-gray-600 mb-1">Pending Payments</p>
              <p className="text-2xl font-bold text-gray-900">${revenue.pending.toLocaleString()}</p>
            </div>
          </div>

          {/* Recent Transactions */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-200">
            <div className="px-6 py-4 border-b border-gray-200">
              <h2 className="text-xl font-bold text-gray-900">Recent Transactions</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Date</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Type</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Description</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Amount</th>
                    <th className="text-left py-3 px-6 text-sm font-semibold text-gray-700">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {payments.length === 0 ? (
                    <tr>
                      <td colSpan={5} className="py-12 text-center text-gray-500">
                        No transactions found
                      </td>
                    </tr>
                  ) : (
                    payments.map((payment) => (
                      <tr key={payment.id} className="hover:bg-gray-50">
                        <td className="py-3 px-6 text-sm text-gray-700">
                          {new Date(payment.createdAt).toLocaleDateString()}
                        </td>
                        <td className="py-3 px-6 text-sm text-gray-700">{payment.type}</td>
                        <td className="py-3 px-6 text-sm text-gray-700">{payment.orderNumber}</td>
                        <td className="py-3 px-6 text-sm font-semibold text-gray-900">{payment.amount}</td>
                        <td className="py-3 px-6">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            payment.status === 'completed' ? 'bg-green-100 text-green-800' :
                            payment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {payment.status}
                          </span>
                        </td>
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
