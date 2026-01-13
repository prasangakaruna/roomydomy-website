"use client"
import { useState, useEffect } from 'react';
import ProtectedRoute from '../../components/ProtectedRoute';
import AdminLayout from '../../components/AdminLayout';
import {
  getPayments,
  addPayment,
  updatePayment,
  getExpenses,
  addExpense,
  deleteExpense,
  calculateRevenue,
  calculateExpenses,
  type Payment,
  type Expense,
} from '../../utils/finance';
import { getOrders } from '../../utils/storage';

export default function FinanceManagementPage() {
  const [payments, setPayments] = useState<Payment[]>([]);
  const [expenses, setExpenses] = useState<Expense[]>([]);
  const [revenue, setRevenue] = useState({ total: 0, thisMonth: 0, thisYear: 0, pending: 0 });
  const [expenseStats, setExpenseStats] = useState({ total: 0, thisMonth: 0, thisYear: 0 });
  const [activeTab, setActiveTab] = useState<'payments' | 'expenses'>('payments');
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [isExpenseModalOpen, setIsExpenseModalOpen] = useState(false);
  const [editingPayment, setEditingPayment] = useState<Payment | null>(null);
  const [paymentFormData, setPaymentFormData] = useState({
    orderId: '',
    amount: '',
    type: 'deposit' as Payment['type'],
    status: 'pending' as Payment['status'],
    paymentMethod: '',
    transactionId: '',
    notes: '',
  });
  const [expenseFormData, setExpenseFormData] = useState({
    category: '',
    description: '',
    amount: '',
    date: new Date().toISOString().split('T')[0],
    notes: '',
  });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    setPayments(getPayments());
    setExpenses(getExpenses());
    setRevenue(calculateRevenue());
    setExpenseStats(calculateExpenses());
  };

  const handlePaymentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const orders = getOrders();
    const order = orders.find(o => o.id === paymentFormData.orderId);
    
    if (editingPayment) {
      updatePayment(editingPayment.id, {
        ...paymentFormData,
        orderNumber: order?.orderNumber || '',
        completedAt: paymentFormData.status === 'completed' ? new Date().toISOString() : undefined,
      });
    } else {
      addPayment({
        ...paymentFormData,
        orderNumber: order?.orderNumber || '',
        completedAt: paymentFormData.status === 'completed' ? new Date().toISOString() : undefined,
      });
    }
    
    loadData();
    setIsPaymentModalOpen(false);
    setEditingPayment(null);
    setPaymentFormData({
      orderId: '',
      amount: '',
      type: 'deposit',
      status: 'pending',
      paymentMethod: '',
      transactionId: '',
      notes: '',
    });
  };

  const handleExpenseSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addExpense(expenseFormData);
    loadData();
    setIsExpenseModalOpen(false);
    setExpenseFormData({
      category: '',
      description: '',
      amount: '',
      date: new Date().toISOString().split('T')[0],
      notes: '',
    });
  };

  const orders = getOrders();
  const profit = revenue.total - expenseStats.total;

  return (
    <ProtectedRoute>
      <AdminLayout>
        <div className="space-y-6">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-extrabold text-gray-900">Finance Management</h1>
              <p className="text-gray-600 mt-2">Track revenue, payments, and expenses</p>
            </div>
            <div className="flex gap-3">
              <button
                onClick={() => {
                  setActiveTab('payments');
                  setIsPaymentModalOpen(true);
                }}
                className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all"
              >
                + Add Payment
              </button>
              <button
                onClick={() => {
                  setActiveTab('expenses');
                  setIsExpenseModalOpen(true);
                }}
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold px-6 py-3 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all"
              >
                + Add Expense
              </button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Revenue</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">${revenue.total.toLocaleString()}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center text-3xl">
                  💰
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">${revenue.thisMonth.toLocaleString()}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-3xl">
                  📅
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Expenses</p>
                  <p className="text-3xl font-bold text-gray-900 mt-2">${expenseStats.total.toLocaleString()}</p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center text-3xl">
                  💸
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md border border-gray-200 p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Net Profit</p>
                  <p className={`text-3xl font-bold mt-2 ${profit >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    ${profit.toLocaleString()}
                  </p>
                </div>
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center text-3xl">
                  📊
                </div>
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-md border border-gray-200">
            <div className="border-b border-gray-200">
              <div className="flex">
                <button
                  onClick={() => setActiveTab('payments')}
                  className={`px-6 py-4 font-semibold transition-colors ${
                    activeTab === 'payments'
                      ? 'border-b-2 border-green-500 text-green-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Payments
                </button>
                <button
                  onClick={() => setActiveTab('expenses')}
                  className={`px-6 py-4 font-semibold transition-colors ${
                    activeTab === 'expenses'
                      ? 'border-b-2 border-red-500 text-red-600'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  Expenses
                </button>
              </div>
            </div>

            {/* Payments Tab */}
            {activeTab === 'payments' && (
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Order #</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Type</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Status</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Method</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {payments.map((payment) => (
                        <tr key={payment.id} className="hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm font-medium text-gray-900">{payment.orderNumber}</td>
                          <td className="py-3 px-4 text-sm font-semibold text-gray-900">${parseFloat(payment.amount.replace(/[^\d.]/g, '') || '0').toLocaleString()}</td>
                          <td className="py-3 px-4 text-sm text-gray-700">{payment.type}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                              payment.status === 'completed' ? 'bg-green-100 text-green-800' :
                              payment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                              payment.status === 'failed' ? 'bg-red-100 text-red-800' :
                              'bg-gray-100 text-gray-800'
                            }`}>
                              {payment.status}
                            </span>
                          </td>
                          <td className="py-3 px-4 text-sm text-gray-700">{payment.paymentMethod}</td>
                          <td className="py-3 px-4 text-sm text-gray-500">
                            {new Date(payment.createdAt).toLocaleDateString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Expenses Tab */}
            {activeTab === 'expenses' && (
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-gray-200">
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Category</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Description</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Amount</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Date</th>
                        <th className="text-left py-3 px-4 text-sm font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {expenses.map((expense) => (
                        <tr key={expense.id} className="hover:bg-gray-50">
                          <td className="py-3 px-4 text-sm font-medium text-gray-900">{expense.category}</td>
                          <td className="py-3 px-4 text-sm text-gray-700">{expense.description}</td>
                          <td className="py-3 px-4 text-sm font-semibold text-red-600">${parseFloat(expense.amount.replace(/[^\d.]/g, '') || '0').toLocaleString()}</td>
                          <td className="py-3 px-4 text-sm text-gray-500">
                            {new Date(expense.date).toLocaleDateString()}
                          </td>
                          <td className="py-3 px-4">
                            <button
                              onClick={() => {
                                if (confirm('Delete this expense?')) {
                                  deleteExpense(expense.id);
                                  loadData();
                                }
                              }}
                              className="text-red-600 hover:text-red-700 text-sm font-medium"
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>

          {/* Payment Modal */}
          {isPaymentModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setIsPaymentModalOpen(false)}>
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Add Payment</h2>
                  <button onClick={() => setIsPaymentModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <form onSubmit={handlePaymentSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Order</label>
                    <select
                      value={paymentFormData.orderId}
                      onChange={(e) => setPaymentFormData({ ...paymentFormData, orderId: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      required
                    >
                      <option value="">Select an order</option>
                      {orders.map((order) => (
                        <option key={order.id} value={order.id}>
                          {order.orderNumber} - {order.customerName} - {order.totalAmount}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                    <input
                      type="text"
                      value={paymentFormData.amount}
                      onChange={(e) => setPaymentFormData({ ...paymentFormData, amount: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="$50,000"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Type</label>
                      <select
                        value={paymentFormData.type}
                        onChange={(e) => setPaymentFormData({ ...paymentFormData, type: e.target.value as Payment['type'] })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      >
                        <option value="deposit">Deposit</option>
                        <option value="full-payment">Full Payment</option>
                        <option value="installment">Installment</option>
                        <option value="refund">Refund</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                      <select
                        value={paymentFormData.status}
                        onChange={(e) => setPaymentFormData({ ...paymentFormData, status: e.target.value as Payment['status'] })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      >
                        <option value="pending">Pending</option>
                        <option value="completed">Completed</option>
                        <option value="failed">Failed</option>
                        <option value="cancelled">Cancelled</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Payment Method</label>
                    <input
                      type="text"
                      value={paymentFormData.paymentMethod}
                      onChange={(e) => setPaymentFormData({ ...paymentFormData, paymentMethod: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="Bank Transfer, Credit Card, etc."
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Transaction ID</label>
                    <input
                      type="text"
                      value={paymentFormData.transactionId}
                      onChange={(e) => setPaymentFormData({ ...paymentFormData, transactionId: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                    <textarea
                      value={paymentFormData.notes}
                      onChange={(e) => setPaymentFormData({ ...paymentFormData, notes: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button type="submit" className="flex-1 bg-gradient-to-r from-green-600 to-emerald-600 text-white font-semibold py-3 rounded-lg hover:from-green-700 hover:to-emerald-700 transition-all">
                      {editingPayment ? 'Update' : 'Add'} Payment
                    </button>
                    <button type="button" onClick={() => setIsPaymentModalOpen(false)} className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}

          {/* Expense Modal */}
          {isExpenseModalOpen && (
            <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4" onClick={() => setIsExpenseModalOpen(false)}>
              <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full" onClick={(e) => e.stopPropagation()}>
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-gray-900">Add Expense</h2>
                  <button onClick={() => setIsExpenseModalOpen(false)} className="text-gray-400 hover:text-gray-600">
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
                <form onSubmit={handleExpenseSubmit} className="p-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                    <input
                      type="text"
                      value={expenseFormData.category}
                      onChange={(e) => setExpenseFormData({ ...expenseFormData, category: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                      placeholder="Materials, Labor, Marketing, etc."
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                    <input
                      type="text"
                      value={expenseFormData.description}
                      onChange={(e) => setExpenseFormData({ ...expenseFormData, description: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                      required
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Amount</label>
                      <input
                        type="text"
                        value={expenseFormData.amount}
                        onChange={(e) => setExpenseFormData({ ...expenseFormData, amount: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                        placeholder="$1,000"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
                      <input
                        type="date"
                        value={expenseFormData.date}
                        onChange={(e) => setExpenseFormData({ ...expenseFormData, date: e.target.value })}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Notes</label>
                    <textarea
                      value={expenseFormData.notes}
                      onChange={(e) => setExpenseFormData({ ...expenseFormData, notes: e.target.value })}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
                      rows={3}
                    />
                  </div>
                  <div className="flex gap-4 pt-4">
                    <button type="submit" className="flex-1 bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold py-3 rounded-lg hover:from-red-700 hover:to-orange-700 transition-all">
                      Add Expense
                    </button>
                    <button type="button" onClick={() => setIsExpenseModalOpen(false)} className="flex-1 bg-gray-200 text-gray-700 font-semibold py-3 rounded-lg hover:bg-gray-300 transition-colors">
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      </AdminLayout>
    </ProtectedRoute>
  );
}
