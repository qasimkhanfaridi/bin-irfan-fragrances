import { OrderRecord } from '../types/product';

const STORAGE_KEY = 'bin_irfan_orders';

export const getOrders = (): OrderRecord[] => {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
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
