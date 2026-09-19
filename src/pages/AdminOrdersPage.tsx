import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OrderRecord } from '../types/product';
import { getOrders, updateOrderStatus, deleteOrder } from '../utils/orders';
import {
  Package,
  Search,
  Filter,
  Eye,
  MessageCircle,
  Printer,
  Trash2,
  CheckCircle2,
  Clock,
  Truck,
  X,
  ArrowUpDown,
  Download,
  ShieldCheck,
  MapPin,
  Phone,
  Mail
} from 'lucide-react';

export const AdminOrdersPage: React.FC = () => {
  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedOrder, setSelectedOrder] = useState<OrderRecord | null>(null);

  useEffect(() => {
    document.title = "Boutique Orders Dashboard | Bin Irfan Fragrance";
    window.scrollTo(0, 0);
    setOrders(getOrders());
  }, []);

  const handleStatusChange = (orderId: string, newStatus: OrderRecord['status']) => {
    const updated = updateOrderStatus(orderId, newStatus);
    setOrders(updated);
    if (selectedOrder && selectedOrder.id === orderId) {
      setSelectedOrder({ ...selectedOrder, status: newStatus });
    }
  };

  const handleDelete = (orderId: string) => {
    if (confirm(`Are you sure you want to delete order ${orderId}?`)) {
      const updated = deleteOrder(orderId);
      setOrders(updated);
      if (selectedOrder && selectedOrder.id === orderId) {
        setSelectedOrder(null);
      }
    }
  };

  const filteredOrders = orders.filter(o => {
    if (statusFilter !== 'All' && o.status !== statusFilter) return false;
    if (search.trim() !== '') {
      const q = search.toLowerCase();
      return (
        o.id.toLowerCase().includes(q) ||
        o.customerName.toLowerCase().includes(q) ||
        o.phone.toLowerCase().includes(q) ||
        o.city.toLowerCase().includes(q) ||
        o.items.some(it => it.productName.toLowerCase().includes(q))
      );
    }
    return true;
  });

  const totalRevenue = orders.reduce((sum, o) => sum + o.total, 0);
  const pendingCount = orders.filter(o => o.status === 'Pending').length;
  const deliveredCount = orders.filter(o => o.status === 'Delivered').length;

  const exportCSV = () => {
    const headers = "Order ID,Date,Customer,Phone,City,Address,Total,Payment,Status\n";
    const rows = orders.map(o => 
      `"${o.id}","${o.date}","${o.customerName}","${o.phone}","${o.city}","${o.address.replace(/"/g, '""')}","${o.total}","${o.paymentMethod}","${o.status}"`
    ).join("\n");
    const blob = new Blob([headers + rows], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `bin_irfan_orders_${new Date().toISOString().slice(0, 10)}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Dashboard Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-gold/20">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-bold mb-1">
            <Package className="w-4 h-4" />
            <span>Store Operations Portal</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-brand-cream">
            Boutique Orders Dashboard
          </h1>
          <p className="text-xs text-brand-cream/60">
            Real-time orders received from your online boutique and WhatsApp store.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={exportCSV}
            className="px-4 py-2 rounded-xl bg-brand-dark-surface border border-brand-gold/30 hover:border-brand-gold text-brand-gold-light text-xs font-semibold flex items-center gap-2 transition-all"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
          <Link
            to="/shop"
            className="px-4 py-2 rounded-xl bg-brand-ruby hover:bg-brand-ruby-light text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-ruby-glow"
          >
            <span>View Storefront</span>
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-brand-dark-card border border-brand-gold/20 flex flex-col justify-between">
          <span className="text-xs text-brand-cream/60 uppercase tracking-wider font-semibold">Total Orders</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="font-serif text-3xl font-bold text-brand-cream">{orders.length}</span>
            <Package className="w-5 h-5 text-brand-gold" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-brand-dark-card border border-brand-gold/20 flex flex-col justify-between">
          <span className="text-xs text-brand-cream/60 uppercase tracking-wider font-semibold">Total Revenue (PKR)</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="font-serif text-2xl font-bold text-brand-gold-light">
              ₨ {totalRevenue.toLocaleString()}
            </span>
            <span className="text-xs text-emerald-400 font-bold">100% COD / Web</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-brand-dark-card border border-brand-gold/20 flex flex-col justify-between">
          <span className="text-xs text-brand-cream/60 uppercase tracking-wider font-semibold">Pending Dispatches</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="font-serif text-3xl font-bold text-amber-400">{pendingCount}</span>
            <Clock className="w-5 h-5 text-amber-400" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-brand-dark-card border border-brand-gold/20 flex flex-col justify-between">
          <span className="text-xs text-brand-cream/60 uppercase tracking-wider font-semibold">Delivered Orders</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="font-serif text-3xl font-bold text-emerald-400">{deliveredCount}</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-brand-dark-card border border-brand-gold/20 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-brand-gold/60" />
          <input
            type="text"
            placeholder="Search by Order ID, Customer, Phone, City..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-brand-dark border border-brand-gold/20 rounded-xl py-2 pl-9 pr-3 text-xs text-brand-cream placeholder-brand-cream/40 focus:border-brand-gold outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1">
          {['All', 'Pending', 'Confirmed', 'Dispatched', 'Delivered', 'Cancelled'].map(st => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                statusFilter === st
                  ? 'bg-brand-ruby text-white border border-brand-gold/50 shadow-sm'
                  : 'bg-brand-dark text-brand-cream/60 border border-brand-gold/15 hover:border-brand-gold/40'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-brand-dark-card rounded-3xl border border-brand-gold/20 overflow-hidden shadow-luxury">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-brand-cream/80">
            <thead className="bg-brand-dark-surface border-b border-brand-gold/15 text-[11px] uppercase tracking-wider text-brand-gold font-bold">
              <tr>
                <th className="py-3.5 px-4">Order ID</th>
                <th className="py-3.5 px-4">Date</th>
                <th className="py-3.5 px-4">Customer & City</th>
                <th className="py-3.5 px-4">Items</th>
                <th className="py-3.5 px-4">Total</th>
                <th className="py-3.5 px-4">Payment</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-brand-gold/10">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-brand-cream/50">
                    No orders match your search criteria.
                  </td>
                </tr>
              ) : (
                filteredOrders.map(order => (
                  <tr key={order.id} className="hover:bg-brand-dark/50 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-brand-gold-light">
                      {order.id}
                    </td>
                    <td className="py-3.5 px-4 text-brand-cream/60 text-[11px]">
                      {order.date}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-brand-cream capitalize">{order.customerName}</div>
                      <div className="text-[11px] text-brand-cream/60">{order.city} • {order.phone}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      {order.items.length === 0 ? (
                        <span className="text-brand-cream/40">Custom inquiry</span>
                      ) : (
                        <div className="space-y-0.5">
                          {order.items.map((it, idx) => (
                            <span key={idx} className="block text-[11px] text-brand-cream/80">
                              {it.productName} ({it.size}) × {it.quantity}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="py-3.5 px-4 font-serif font-bold text-brand-gold-light">
                      ₨ {order.total.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 uppercase text-[10px] font-semibold text-brand-cream/70">
                      {order.paymentMethod}
                    </td>
                    <td className="py-3.5 px-4">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value as any)}
                        className={`text-[11px] font-bold rounded-lg px-2 py-1 border outline-none cursor-pointer ${
                          order.status === 'Pending'
                            ? 'bg-amber-950/40 text-amber-300 border-amber-500/40'
                            : order.status === 'Confirmed'
                            ? 'bg-blue-950/40 text-blue-300 border-blue-500/40'
                            : order.status === 'Dispatched'
                            ? 'bg-purple-950/40 text-purple-300 border-purple-500/40'
                            : order.status === 'Delivered'
                            ? 'bg-emerald-950/40 text-emerald-300 border-emerald-500/40'
                            : 'bg-red-950/40 text-red-300 border-red-500/40'
                        }`}
                      >
                        <option value="Pending">Pending</option>
                        <option value="Confirmed">Confirmed</option>
                        <option value="Dispatched">Dispatched</option>
                        <option value="Delivered">Delivered</option>
                        <option value="Cancelled">Cancelled</option>
                      </select>
                    </td>
                    <td className="py-3.5 px-4 text-right space-x-2">
                      <button
                        onClick={() => setSelectedOrder(order)}
                        className="p-1.5 rounded-lg bg-brand-dark border border-brand-gold/25 hover:border-brand-gold text-brand-gold transition-colors inline-flex"
                        title="View Full Order & Dispatch Slip"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={`https://wa.me/${order.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(order.customerName)},%20this%20is%20Bin%20Irfan%20Fragrance%20regarding%20your%20order%20${order.id}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-emerald-950/50 border border-emerald-500/40 text-emerald-400 hover:text-white hover:bg-emerald-800 transition-colors inline-flex"
                        title="Chat with Customer on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="p-1.5 rounded-lg bg-brand-dark border border-red-500/30 text-red-400 hover:bg-red-950/50 transition-colors inline-flex"
                        title="Delete Order"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Selected Order Detail & Courier Invoice Modal */}
      {selectedOrder && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-brand-dark-card border border-brand-gold/40 rounded-3xl p-6 sm:p-8 shadow-luxury max-h-[90vh] overflow-y-auto space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-brand-gold/20">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-brand-gold overflow-hidden">
                  <img src="/brand/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-cream">
                    Dispatch Slip • {selectedOrder.id}
                  </h3>
                  <p className="text-[11px] text-brand-gold">Bin Irfan Fragrance • Peshawar</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-1.5 rounded-full text-brand-cream/60 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Courier Dispatch Invoice Layout */}
            <div className="p-6 rounded-2xl bg-brand-dark border border-brand-gold/20 space-y-4 text-xs font-mono text-brand-cream">
              <div className="flex justify-between border-b border-brand-gold/15 pb-3">
                <div>
                  <strong className="text-brand-gold block uppercase font-sans">SHIP TO (RECEIVER):</strong>
                  <p className="text-sm font-bold capitalize">{selectedOrder.customerName}</p>
                  <p>{selectedOrder.address}</p>
                  <p>{selectedOrder.city}, Pakistan</p>
                  <p className="text-brand-gold-light mt-1">Phone: {selectedOrder.phone}</p>
                </div>
                <div className="text-right">
                  <strong className="text-brand-gold block uppercase font-sans">SENDER:</strong>
                  <p className="font-bold">Bin Irfan Fragrance</p>
                  <p>Shop #6, Malik Dilawar Plaza</p>
                  <p>Hashtnagri, Peshawar</p>
                  <p>Phone: +92 316 9699892</p>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-2 py-2 border-b border-brand-gold/15">
                <strong className="text-brand-gold uppercase font-sans block text-[11px]">PARCEL CONTENTS:</strong>
                {selectedOrder.items.map((it, idx) => (
                  <div key={idx} className="flex justify-between">
                    <span>• {it.productName} ({it.size}) × {it.quantity}</span>
                    <span className="font-bold">₨ {(it.price * it.quantity).toLocaleString()}</span>
                  </div>
                ))}
              </div>

              {/* Total & Payment */}
              <div className="flex justify-between items-center pt-1 font-bold text-sm">
                <span>TOTAL COD CASH TO COLLECT:</span>
                <span className="font-serif text-lg text-emerald-400">₨ {selectedOrder.total.toLocaleString()}</span>
              </div>

              {selectedOrder.notes && (
                <div className="pt-2 border-t border-brand-gold/10 text-[11px] text-brand-cream/60">
                  <strong>Delivery Instructions:</strong> {selectedOrder.notes}
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-dark-surface border border-brand-gold/30 hover:border-brand-gold text-brand-gold-light text-xs font-semibold flex items-center justify-center gap-2"
              >
                <Printer className="w-4 h-4" />
                <span>Print Courier Slip</span>
              </button>

              <div className="flex gap-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${selectedOrder.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedOrder.customerName)},%20your%20order%20${selectedOrder.id}%20from%20Bin%20Irfan%20Fragrance%20is%20${encodeURIComponent(selectedOrder.status)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-emerald-950/50 border border-emerald-500/50 hover:bg-emerald-900 text-emerald-300 text-xs font-semibold flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Message Customer</span>
                </a>

                <button
                  onClick={() => setSelectedOrder(null)}
                  className="px-5 py-2.5 rounded-xl bg-brand-ruby text-white text-xs font-semibold"
                >
                  Close
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </div>
  );
};
