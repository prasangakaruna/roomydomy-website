// Data storage utilities for domes and orders
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

// Dome storage functions
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

export function saveDomes(domes: Dome[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('admin_domes', JSON.stringify(domes));
}

export function addDome(dome: Omit<Dome, 'id' | 'createdAt' | 'updatedAt'>): Dome {
  const domes = getDomes();
  const newDome: Dome = {
    ...dome,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  domes.push(newDome);
  saveDomes(domes);
  return newDome;
}

export function updateDome(id: string, updates: Partial<Dome>): Dome | null {
  const domes = getDomes();
  const index = domes.findIndex(d => d.id === id);
  if (index === -1) return null;
  
  domes[index] = {
    ...domes[index],
    ...updates,
    updatedAt: new Date().toISOString(),
  };
  saveDomes(domes);
  return domes[index];
}

export function deleteDome(id: string): boolean {
  const domes = getDomes();
  const filtered = domes.filter(d => d.id !== id);
  if (filtered.length === domes.length) return false;
  saveDomes(filtered);
  return true;
}

export function getDomeById(id: string): Dome | null {
  const domes = getDomes();
  return domes.find(d => d.id === id) || null;
}

// Order storage functions
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

export function saveOrders(orders: Order[]): void {
  if (typeof window === 'undefined') return;
  localStorage.setItem('admin_orders', JSON.stringify(orders));
}

export function addOrder(order: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt'>): Order {
  const orders = getOrders();
  const orderNumber = `ORD-${Date.now()}`;
  const newOrder: Order = {
    ...order,
    id: Date.now().toString(),
    orderNumber,
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  };
  orders.push(newOrder);
  saveOrders(orders);
  return newOrder;
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
  saveOrders(orders);
  return orders[index];
}

export function deleteOrder(id: string): boolean {
  const orders = getOrders();
  const filtered = orders.filter(o => o.id !== id);
  if (filtered.length === orders.length) return false;
  saveOrders(filtered);
  return true;
}

export function getOrderById(id: string): Order | null {
  const orders = getOrders();
  return orders.find(o => o.id === id) || null;
}
