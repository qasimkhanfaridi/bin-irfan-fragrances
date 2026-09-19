import { OrderRecord } from '../types/product';

const STORAGE_KEY = 'bin_irfan_orders';

const INITIAL_ORDERS: OrderRecord[] = [
  {
    id: 'BIF-970531',
    date: '2026-09-20 01:22 AM',
    customerName: 'qasim',
    phone: '+92 300 0000000',
    email: 'qasim@example.com',
    city: 'Rawalpindi',
    address: 'test, rawalpindi',
    notes: 'Urgent courier delivery requested',
    items: [
      {
        productId: 'black-oud',
        productName: 'Black Oud',
        size: '50ml',
        price: 3850,
        quantity: 1,
        image: '/products/black_oud.jpg'
      },
      {
        productId: 'royal-oud',
        productName: 'Royal Oud',
        size: '50ml',
        price: 4150,
        quantity: 1,
        image: '/products/royal_amber.jpg'
      }
    ],
    subtotal: 8000,
    shipping: 0, // free above 5000
    total: 8000,
    paymentMethod: 'cod',
    status: 'Pending'
  },
  {
    id: 'BIF-849210',
    date: '2026-09-19 08:45 PM',
    customerName: 'Muhammad Hamza',
    phone: '+92 321 4455667',
    email: 'hamza.lhr@gmail.com',
    city: 'Lahore',
    address: 'House 42-B, DHA Phase 5, Lahore',
    notes: 'Call before delivery',
    items: [
      {
        productId: 'creed-aventus-intense',
        productName: 'Creed Aventus Intense',
        size: '100ml',
        price: 6750,
        quantity: 1,
        image: '/products/black_oud.jpg'
      }
    ],
    subtotal: 6750,
    shipping: 0,
    total: 6750,
    paymentMethod: 'cod',
    status: 'Confirmed'
  }
];

export const getOrders = (): OrderRecord[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_ORDERS));
      return INITIAL_ORDERS;
    }
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) && parsed.length > 0 ? parsed : INITIAL_ORDERS;
  } catch {
    return INITIAL_ORDERS;
  }
};

export const saveOrder = (newOrder: OrderRecord): void => {
  try {
    const orders = getOrders();
    const updated = [newOrder, ...orders.filter(o => o.id !== newOrder.id)];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Error saving order', e);
  }
};

export const updateOrderStatus = (orderId: string, status: OrderRecord['status']): OrderRecord[] => {
  try {
    const orders = getOrders();
    const updated = orders.map(o => (o.id === orderId ? { ...o, status } : o));
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Error updating order status', e);
    return getOrders();
  }
};

export const deleteOrder = (orderId: string): OrderRecord[] => {
  try {
    const orders = getOrders();
    const updated = orders.filter(o => o.id !== orderId);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return updated;
  } catch (e) {
    console.error('Error deleting order', e);
    return getOrders();
  }
};
