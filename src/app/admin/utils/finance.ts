// Finance utilities
import { getOrders, Order } from './storage';

export interface Payment {
  id: string;
  orderId: string;
  orderNumber: string;
  amount: string;
  type: 'deposit' | 'full-payment' | 'installment' | 'refund';
  status: 'pending' | 'completed' | 'failed' | 'cancelled';
  paymentMethod: string;
  transactionId?: string;
  notes?: string;
  createdAt: string;
  completedAt?: string;
}

export interface Expense {
  id: string;
  category: string;
  description: string;
  amount: string;
  date: string;
  notes?: string;
  createdAt: string;
}

// Payment storage functions
export function getPayments(): Payment[] {
  if (typeof window === 'undefined') return [];
  const paymentsStr = localStorage.getItem('admin_payments');
  if (!paymentsStr) return [];
  try {
    return JSON.parse(paymentsStr);
  } catch {
    return [];
  }
}

export function savePayments(payments: Payment[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('admin_payments', JSON.stringify(payments));
}

export function addPayment(payment: Omit<Payment, 'id' | 'createdAt'>): Payment {
  const payments = getPayments();
  const newPayment: Payment = {
    ...payment,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  payments.push(newPayment);
  savePayments(payments);
  return newPayment;
}

export function updatePayment(id: string, updates: Partial<Payment>): Payment | null {
  const payments = getPayments();
  const index = payments.findIndex(p => p.id === id);
  if (index === -1) return null;
  
  payments[index] = {
    ...payments[index],
    ...updates,
  };
  savePayments(payments);
  return payments[index];
}

// Expense storage functions
export function getExpenses(): Expense[] {
  if (typeof window === 'undefined') return [];
  const expensesStr = localStorage.getItem('admin_expenses');
  if (!expensesStr) return [];
  try {
    return JSON.parse(expensesStr);
  } catch {
    return [];
  }
}

export function saveExpenses(expenses: Expense[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('admin_expenses', JSON.stringify(expenses));
}

export function addExpense(expense: Omit<Expense, 'id' | 'createdAt'>): Expense {
  const expenses = getExpenses();
  const newExpense: Expense = {
    ...expense,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
  };
  expenses.push(newExpense);
  saveExpenses(expenses);
  return newExpense;
}

export function deleteExpense(id: string): boolean {
  const expenses = getExpenses();
  const filtered = expenses.filter(e => e.id !== id);
  if (filtered.length === expenses.length) return false;
  saveExpenses(filtered);
  return true;
}

// Finance calculations
export function calculateRevenue(): {
  total: number;
  thisMonth: number;
  thisYear: number;
  pending: number;
} {
  const orders = getOrders();
  const payments = getPayments();
  
  const completedPayments = payments.filter(p => p.status === 'completed');
  const pendingPayments = payments.filter(p => p.status === 'pending');
  
  const now = new Date();
  const thisMonth = now.getMonth();
  const thisYear = now.getFullYear();
  
  const total = completedPayments.reduce((sum, p) => {
    const amount = parseFloat(p.amount.replace(/[^\d.]/g, '')) || 0;
    return sum + amount;
  }, 0);
  
  const thisMonthRevenue = completedPayments
    .filter(p => {
      const date = new Date(p.completedAt || p.createdAt);
      return date.getMonth() === thisMonth && date.getFullYear() === thisYear;
    })
    .reduce((sum, p) => {
      const amount = parseFloat(p.amount.replace(/[^\d.]/g, '')) || 0;
      return sum + amount;
    }, 0);
  
  const thisYearRevenue = completedPayments
    .filter(p => {
      const date = new Date(p.completedAt || p.createdAt);
      return date.getFullYear() === thisYear;
    })
    .reduce((sum, p) => {
      const amount = parseFloat(p.amount.replace(/[^\d.]/g, '')) || 0;
      return sum + amount;
    }, 0);
  
  const pending = pendingPayments.reduce((sum, p) => {
    const amount = parseFloat(p.amount.replace(/[^\d.]/g, '')) || 0;
    return sum + amount;
  }, 0);
  
  return { total, thisMonth: thisMonthRevenue, thisYear: thisYearRevenue, pending };
}

export function calculateExpenses(): {
  total: number;
  thisMonth: number;
  thisYear: number;
} {
  const expenses = getExpenses();
  
  const now = new Date();
  const thisMonth = now.getMonth();
  const thisYear = now.getFullYear();
  
  const total = expenses.reduce((sum, e) => {
    const amount = parseFloat(e.amount.replace(/[^\d.]/g, '')) || 0;
    return sum + amount;
  }, 0);
  
  const thisMonthExpenses = expenses
    .filter(e => {
      const date = new Date(e.date);
      return date.getMonth() === thisMonth && date.getFullYear() === thisYear;
    })
    .reduce((sum, e) => {
      const amount = parseFloat(e.amount.replace(/[^\d.]/g, '')) || 0;
      return sum + amount;
    }, 0);
  
  const thisYearExpenses = expenses
    .filter(e => {
      const date = new Date(e.date);
      return date.getFullYear() === thisYear;
    })
    .reduce((sum, e) => {
      const amount = parseFloat(e.amount.replace(/[^\d.]/g, '')) || 0;
      return sum + amount;
    }, 0);
  
  return { total, thisMonth: thisMonthExpenses, thisYear: thisYearExpenses };
}
