// Data storage utilities for partners - uses same data structure as admin
export interface Dome {
  id: string;
  img: string;
  title: string;
  size: string;
  people: string;
  price: string;
  description: string;
  features: string;
  slug?: string;
  status?: 'available' | 'under-development' | 'coming-soon';
  location?: string;
  climate?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Order {
  id: string;
  orderNumber: string;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  domeId: string;
  domeTitle: string;
  status: 'pending' | 'confirmed' | 'in-production' | 'completed' | 'cancelled';
  totalAmount: string;
  deposit: string;
  location: string;
  notes?: string;
  createdAt: string;
  updatedAt: string;
}

// Partner can access the same data as admin (shared storage)
export function getDomes(): Dome[] {
  if (typeof window === 'undefined') return [];
  const domesStr = localStorage.getItem('admin_domes');
  if (!domesStr) return [];
  try {
    return JSON.parse(domesStr);
  } catch {
    return [];
  }
}

export function getOrders(): Order[] {
  if (typeof window === 'undefined') return [];
  const ordersStr = localStorage.getItem('admin_orders');
  if (!ordersStr) return [];
  try {
    return JSON.parse(ordersStr);
  } catch {
    return [];
  }
}

export function getOrderById(id: string): Order | null {
  const orders = getOrders();
  return orders.find(o => o.id === id) || null;
}

export function updateOrder(id: string, updates: Partial<Order>): Order | null {
  const orders = getOrders();
  const index = orders.findIndex(o => o.id === id);
  if (index === -1) return null;
  
  orders[index] = {
    ...orders[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  if (typeof window !== 'undefined') {
    localStorage.setItem('admin_orders', JSON.stringify(orders));
  }
  return orders[index];
}
