// Demo data utility for populating the admin dashboard
import { addDome, saveDomes, saveOrders, type Dome, type Order } from './storage';
import { addPayment, type Payment } from './finance';
import { addExpense, type Expense } from './finance';

export function loadDemoData() {
  // Clear existing data first
  if (typeof window === 'undefined') return;
  
  // Clear existing data
  localStorage.removeItem('admin_domes');
  localStorage.removeItem('admin_orders');
  localStorage.removeItem('admin_payments');
  localStorage.removeItem('admin_expenses');

  // Sample Domes
  const demoDomes: Omit<Dome, 'id' | 'createdAt' | 'updatedAt'>[] = [
    {
      img: '/main/domy/d6/img.jpg',
      title: 'Monteverde Retreat',
      size: '2000 sq ft',
      people: '6-8 people',
      price: '$299,000',
      description: 'Immerse yourself in biodiversity. Our eco-domes are inspired by the rich flora, offering an unparalleled sustainable living experience in the heart of Costa Rica\'s cloud forest.',
      features: 'Cloud forest integration, Biodiversity preservation, Sustainable tourism focus',
      slug: 'monteverde-retreat',
      status: 'available',
      location: 'Monteverde, Costa Rica',
      climate: 'Tropical Climate',
    },
    {
      img: '/main/domy/d7/img-1.jpg',
      title: 'Adriatic Haven',
      size: '1800 sq ft',
      people: '4-6 people',
      price: '$349,000',
      description: 'Perched on the stunning Adriatic coastline, these domes are designed for sea breezes and historic cultural sites. Experience the perfect blend of luxury and Mediterranean charm.',
      features: 'Adriatic sea views, Historic site proximity, Mediterranean architecture',
      slug: 'adriatic-haven',
      status: 'available',
      location: 'Dubrovnik, Croatia',
      climate: 'Mediterranean Climate',
    },
    {
      img: '/main/domy/d8/img-1.jpg',
      title: 'Algarve Coastal Village',
      size: '2200 sq ft',
      people: '6-8 people',
      price: '$329,000',
      description: 'Beachfront eco-village with sustainable living and direct access to golden sand beaches and the crystal blue waters of Portugal\'s famous Algarve region.',
      features: 'Beachfront access, Algarve region charm, Coastal village lifestyle',
      slug: 'algarve-coastal-village',
      status: 'available',
      location: 'Lagos, Portugal',
      climate: 'Mediterranean Climate',
    },
    {
      img: '/main/domy/d9/img-1.jpg',
      title: 'Pocono Mountain Retreat',
      size: '1900 sq ft',
      people: '4-6 people',
      price: '$279,000',
      description: 'Nestled in Pennsylvania\'s beautiful Pocono Mountains, these domes offer four-season living with easy access to hiking, skiing, and pristine lakes.',
      features: 'Four-season mountain living, Outdoor recreation access, Mountain views and privacy',
      slug: 'pocono-mountain-retreat',
      status: 'under-development',
      location: 'Pocono Mountains, PA, United States',
      climate: 'Continental Climate',
    },
    {
      img: '/main/domy/d10/img-1.jpg',
      title: 'Thousand Lakes Sanctuary',
      size: '2100 sq ft',
      people: '6-8 people',
      price: '$319,000',
      description: 'Located in Canada\'s stunning Thousand Lakes region, these domes provide lakeside living with incredible natural beauty and abundant wildlife.',
      features: 'Lakeside living experience, Wildlife observation, Canadian wilderness access',
      slug: 'thousand-lakes-sanctuary',
      status: 'coming-soon',
      location: 'Muskoka, Ontario, Canada',
      climate: 'Continental Climate',
    },
  ];

  // Add domes
  const createdDomes: Dome[] = [];
  demoDomes.forEach((dome, index) => {
    const created = addDome(dome);
    createdDomes.push(created);
  });

  // Sample Orders
  const now = new Date();
  const demoOrders: Omit<Order, 'id' | 'orderNumber' | 'createdAt' | 'updatedAt'>[] = [
    {
      customerName: 'John Smith',
      customerEmail: 'john.smith@email.com',
      customerPhone: '+1 (555) 123-4567',
      domeId: createdDomes[0].id,
      domeTitle: createdDomes[0].title,
      status: 'completed',
      totalAmount: '$299,000',
      deposit: '$50,000',
      location: 'Monteverde, Costa Rica',
      notes: 'Customer requested early delivery. All payments completed.',
    },
    {
      customerName: 'Maria Garcia',
      customerEmail: 'maria.garcia@email.com',
      customerPhone: '+1 (555) 234-5678',
      domeId: createdDomes[1].id,
      domeTitle: createdDomes[1].title,
      status: 'in-production',
      totalAmount: '$349,000',
      deposit: '$70,000',
      location: 'Dubrovnik, Croatia',
      notes: 'Construction in progress. Expected completion in 3 months.',
    },
    {
      customerName: 'David Johnson',
      customerEmail: 'david.johnson@email.com',
      customerPhone: '+1 (555) 345-6789',
      domeId: createdDomes[2].id,
      domeTitle: createdDomes[2].title,
      status: 'confirmed',
      totalAmount: '$329,000',
      deposit: '$65,000',
      location: 'Lagos, Portugal',
      notes: 'Order confirmed. Awaiting construction start date.',
    },
    {
      customerName: 'Sarah Williams',
      customerEmail: 'sarah.williams@email.com',
      customerPhone: '+1 (555) 456-7890',
      domeId: createdDomes[0].id,
      domeTitle: createdDomes[0].title,
      status: 'pending',
      totalAmount: '$299,000',
      deposit: '$0',
      location: 'Monteverde, Costa Rica',
      notes: 'Customer inquiry. Awaiting deposit payment.',
    },
    {
      customerName: 'Michael Brown',
      customerEmail: 'michael.brown@email.com',
      customerPhone: '+1 (555) 567-8901',
      domeId: createdDomes[1].id,
      domeTitle: createdDomes[1].title,
      status: 'pending',
      totalAmount: '$349,000',
      deposit: '$0',
      location: 'Dubrovnik, Croatia',
      notes: 'Initial inquiry. Follow-up scheduled.',
    },
    {
      customerName: 'Emily Davis',
      customerEmail: 'emily.davis@email.com',
      customerPhone: '+1 (555) 678-9012',
      domeId: createdDomes[2].id,
      domeTitle: createdDomes[2].title,
      status: 'completed',
      totalAmount: '$329,000',
      deposit: '$65,000',
      location: 'Lagos, Portugal',
      notes: 'Project completed successfully. Customer satisfied.',
    },
  ];

  // Add orders with different dates
  const createdOrders: Order[] = [];
  demoOrders.forEach((order, index) => {
    const daysAgo = index * 7; // Spread orders over weeks
    const orderDate = new Date(now);
    orderDate.setDate(orderDate.getDate() - daysAgo);
    
    const orderNumber = `ORD-${Date.now() + index}`;
    const newOrder: Order = {
      ...order,
      id: (Date.now() + index).toString(),
      orderNumber,
      createdAt: orderDate.toISOString(),
      updatedAt: orderDate.toISOString(),
    };
    createdOrders.push(newOrder);
  });
  saveOrders(createdOrders);

  // Sample Payments
  const demoPayments: Omit<Payment, 'id' | 'createdAt'>[] = [
    {
      orderId: createdOrders[0].id,
      orderNumber: createdOrders[0].orderNumber,
      amount: '$50,000',
      type: 'deposit',
      status: 'completed',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN-001234',
      notes: 'Initial deposit received',
      completedAt: new Date(now.getTime() - 60 * 24 * 60 * 60 * 1000).toISOString(), // 60 days ago
    },
    {
      orderId: createdOrders[0].id,
      orderNumber: createdOrders[0].orderNumber,
      amount: '$249,000',
      type: 'full-payment',
      status: 'completed',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN-001235',
      notes: 'Final payment received',
      completedAt: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString(), // 30 days ago
    },
    {
      orderId: createdOrders[1].id,
      orderNumber: createdOrders[1].orderNumber,
      amount: '$70,000',
      type: 'deposit',
      status: 'completed',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001236',
      notes: 'Deposit payment',
      completedAt: new Date(now.getTime() - 45 * 24 * 60 * 60 * 1000).toISOString(), // 45 days ago
    },
    {
      orderId: createdOrders[1].id,
      orderNumber: createdOrders[1].orderNumber,
      amount: '$100,000',
      type: 'installment',
      status: 'completed',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN-001237',
      notes: 'First installment',
      completedAt: new Date(now.getTime() - 20 * 24 * 60 * 60 * 1000).toISOString(), // 20 days ago
    },
    {
      orderId: createdOrders[2].id,
      orderNumber: createdOrders[2].orderNumber,
      amount: '$65,000',
      type: 'deposit',
      status: 'completed',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN-001238',
      notes: 'Deposit received',
      completedAt: new Date(now.getTime() - 15 * 24 * 60 * 60 * 1000).toISOString(), // 15 days ago
    },
    {
      orderId: createdOrders[3].id,
      orderNumber: createdOrders[3].orderNumber,
      amount: '$50,000',
      type: 'deposit',
      status: 'pending',
      paymentMethod: 'Bank Transfer',
      transactionId: '',
      notes: 'Awaiting payment confirmation',
    },
    {
      orderId: createdOrders[5].id,
      orderNumber: createdOrders[5].orderNumber,
      amount: '$65,000',
      type: 'deposit',
      status: 'completed',
      paymentMethod: 'Credit Card',
      transactionId: 'TXN-001239',
      notes: 'Deposit payment',
      completedAt: new Date(now.getTime() - 90 * 24 * 60 * 60 * 1000).toISOString(), // 90 days ago
    },
    {
      orderId: createdOrders[5].id,
      orderNumber: createdOrders[5].orderNumber,
      amount: '$264,000',
      type: 'full-payment',
      status: 'completed',
      paymentMethod: 'Bank Transfer',
      transactionId: 'TXN-001240',
      notes: 'Final payment',
      completedAt: new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000).toISOString(), // 10 days ago
    },
  ];

  // Add payments
  demoPayments.forEach((payment) => {
    addPayment(payment);
  });

  // Sample Expenses
  const demoExpenses: Omit<Expense, 'id' | 'createdAt'>[] = [
    {
      category: 'Materials',
      description: 'Steel frame and dome shell materials',
      amount: '$45,000',
      date: new Date(now.getTime() - 50 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 50 days ago
      notes: 'Bulk order for Monteverde project',
    },
    {
      category: 'Labor',
      description: 'Construction team wages - Month 1',
      amount: '$25,000',
      date: new Date(now.getTime() - 40 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 40 days ago
      notes: 'Team of 8 workers',
    },
    {
      category: 'Materials',
      description: 'Insulation and roofing materials',
      amount: '$18,000',
      date: new Date(now.getTime() - 35 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 35 days ago
      notes: 'High-quality insulation for energy efficiency',
    },
    {
      category: 'Marketing',
      description: 'Digital marketing campaign - Q1',
      amount: '$12,000',
      date: new Date(now.getTime() - 30 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 30 days ago
      notes: 'Social media and Google Ads',
    },
    {
      category: 'Labor',
      description: 'Construction team wages - Month 2',
      amount: '$25,000',
      date: new Date(now.getTime() - 20 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 20 days ago
      notes: 'Ongoing construction work',
    },
    {
      category: 'Materials',
      description: 'Windows and doors installation',
      amount: '$22,000',
      date: new Date(now.getTime() - 15 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 15 days ago
      notes: 'Triple-pane low-E glass windows',
    },
    {
      category: 'Utilities',
      description: 'Site utilities and permits',
      amount: '$8,500',
      date: new Date(now.getTime() - 10 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 10 days ago
      notes: 'Building permits and utility connections',
    },
    {
      category: 'Marketing',
      description: 'Photography and videography',
      amount: '$5,000',
      date: new Date(now.getTime() - 5 * 24 * 60 * 60 * 1000).toISOString().split('T')[0], // 5 days ago
      notes: 'Professional photoshoot for marketing materials',
    },
  ];

  // Add expenses
  demoExpenses.forEach((expense) => {
    addExpense(expense);
  });

  return {
    domes: createdDomes.length,
    orders: createdOrders.length,
    payments: demoPayments.length,
    expenses: demoExpenses.length,
  };
}
