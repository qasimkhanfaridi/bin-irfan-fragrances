import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { OrderRecord } from '../types/product';
import { getOrders, updateOrderStatus, deleteOrder } from '../utils/orders';
import {
  Package,
  Search,
  Eye,
  MessageCircle,
  Printer,
  Trash2,
  CheckCircle2,
  Clock,
  X,
  Download,
  Lock,
  KeyRound
} from 'lucide-react';

export const AdminOrdersPage: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => {
    return sessionStorage.getItem('bin_irfan_admin_auth') === 'true';
  });
  const [pinInput, setPinInput] = useState('');
  const [authError, setAuthError] = useState('');

  const [orders, setOrders] = useState<OrderRecord[]>([]);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('All');
  const [selectedOrder, setSelectedOrder] = useState<OrderRecord | null>(null);

  useEffect(() => {
    document.title = "Atelier Management | Bin Irfan Fragrance";
    window.scrollTo(0, 0);
    if (isAuthenticated) {
      setOrders(getOrders());
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput === '7860' || pinInput === 'admin123') {
      sessionStorage.setItem('bin_irfan_admin_auth', 'true');
      setIsAuthenticated(true);
      setAuthError('');
      setOrders(getOrders());
    } else {
      setAuthError('Incorrect Atelier Passcode.');
    }
  };

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

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-brand-light-bg py-24 px-4 flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-3xl border border-brand-slate-200/80 p-8 shadow-soft text-center space-y-6">
          <div className="w-14 h-14 mx-auto rounded-full bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-900">
            <Lock className="w-6 h-6" />
          </div>
          <div>
            <h2 className="font-serif text-2xl font-bold text-brand-slate-900">Atelier Operations</h2>
            <p className="text-xs text-brand-slate-500 mt-1">Enter your management passcode to access orders.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="relative">
              <input
                type="password"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Passcode (e.g. 7860)"
                className="w-full text-center tracking-widest text-lg font-mono py-3 rounded-xl border border-brand-slate-200 focus:border-brand-blue-600 outline-none"
                required
              />
              <KeyRound className="w-4 h-4 text-brand-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
            </div>
            {authError && <p className="text-xs text-rose-600 font-medium">{authError}</p>}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-brand-blue-deep hover:bg-brand-blue-dark text-white font-serif text-xs font-semibold uppercase tracking-wider transition-all shadow-md"
            >
              Unlock Dashboard
            </button>
          </form>
          <div className="pt-2 border-t border-brand-slate-100">
            <Link to="/" className="text-xs text-brand-blue-700 hover:underline">
              &larr; Return to Storefront
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-light-bg py-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-8">
      
      {/* Dashboard Top Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-brand-slate-200">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-blue-700 font-bold mb-1">
            <Package className="w-4 h-4 text-brand-blue-600" />
            <span>Store Operations Portal</span>
          </div>
          <h1 className="font-serif text-2xl sm:text-4xl font-bold text-brand-slate-900">
            Boutique Orders Dashboard
          </h1>
          <p className="text-xs text-brand-slate-500">
            Real-time orders received from your online boutique and WhatsApp storefront.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={exportCSV}
            className="px-4 py-2 rounded-xl bg-white border border-brand-slate-200 hover:border-brand-slate-300 text-brand-slate-700 text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export CSV</span>
          </button>
          <Link
            to="/shop"
            className="px-4 py-2 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-xs font-semibold flex items-center gap-2 transition-all shadow-sm"
          >
            <span>View Storefront</span>
          </Link>
        </div>
      </div>

      {/* Metrics Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft flex flex-col justify-between">
          <span className="text-xs text-brand-slate-500 uppercase tracking-wider font-semibold">Total Orders</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="font-serif text-3xl font-bold text-brand-slate-900">{orders.length}</span>
            <Package className="w-5 h-5 text-brand-blue-600" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft flex flex-col justify-between">
          <span className="text-xs text-brand-slate-500 uppercase tracking-wider font-semibold">Total Revenue (PKR)</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="font-serif text-2xl font-bold text-brand-blue-900">
              ₨ {totalRevenue.toLocaleString()}
            </span>
            <span className="text-xs text-emerald-600 font-bold">100% COD / Web</span>
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft flex flex-col justify-between">
          <span className="text-xs text-brand-slate-500 uppercase tracking-wider font-semibold">Pending Dispatches</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="font-serif text-3xl font-bold text-amber-600">{pendingCount}</span>
            <Clock className="w-5 h-5 text-amber-500" />
          </div>
        </div>

        <div className="p-5 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft flex flex-col justify-between">
          <span className="text-xs text-brand-slate-500 uppercase tracking-wider font-semibold">Delivered Orders</span>
          <div className="flex items-baseline justify-between mt-2">
            <span className="font-serif text-3xl font-bold text-emerald-600">{deliveredCount}</span>
            <CheckCircle2 className="w-5 h-5 text-emerald-500" />
          </div>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="relative w-full md:w-80">
          <Search className="w-4 h-4 absolute left-3 top-3 text-brand-slate-400" />
          <input
            type="text"
            placeholder="Search by Order ID, Customer, Phone, City..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-brand-light-bg border border-brand-slate-200 rounded-xl py-2 pl-9 pr-3 text-xs text-brand-slate-900 placeholder-brand-slate-400 focus:border-brand-blue-500 outline-none"
          />
        </div>

        <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-1">
          {['All', 'Pending', 'Confirmed', 'Dispatched', 'Delivered', 'Cancelled'].map(st => (
            <button
              key={st}
              onClick={() => setStatusFilter(st)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                statusFilter === st
                  ? 'bg-brand-blue-600 text-white shadow-sm'
                  : 'bg-brand-light-bg text-brand-slate-600 border border-brand-slate-200 hover:text-brand-slate-900'
              }`}
            >
              {st}
            </button>
          ))}
        </div>
      </div>

      {/* Orders Table */}
      <div className="bg-white rounded-3xl border border-brand-slate-200/80 shadow-soft overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-brand-slate-700">
            <thead className="bg-brand-light-bg/80 border-b border-brand-slate-200 text-[11px] uppercase tracking-wider text-brand-slate-600 font-bold">
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
            <tbody className="divide-y divide-brand-slate-100">
              {filteredOrders.length === 0 ? (
                <tr>
                  <td colSpan={8} className="py-12 text-center text-brand-slate-400">
                    No orders match your search criteria.
                  </td>
                </tr>
              ) : (
                filteredOrders.map(order => (
                  <tr key={order.id} className="hover:bg-slate-50/80 transition-colors">
                    <td className="py-3.5 px-4 font-mono font-bold text-brand-blue-900">
                      {order.id}
                    </td>
                    <td className="py-3.5 px-4 text-brand-slate-500 text-[11px]">
                      {order.date}
                    </td>
                    <td className="py-3.5 px-4">
                      <div className="font-bold text-brand-slate-900 capitalize">{order.customerName}</div>
                      <div className="text-[11px] text-brand-slate-500">{order.city} • {order.phone}</div>
                    </td>
                    <td className="py-3.5 px-4">
                      {order.items.length === 0 ? (
                        <span className="text-brand-slate-400">Custom inquiry</span>
                      ) : (
                        <div className="space-y-0.5">
                          {order.items.map((it, idx) => (
                            <span key={idx} className="block text-[11px] text-brand-slate-700">
                              {it.productName} ({it.size}) × {it.quantity}
                            </span>
                          ))}
                        </div>
                      )}
                    </td>
                    <td className="py-3.5 px-4 font-serif font-bold text-brand-slate-900">
                      ₨ {order.total.toLocaleString()}
                    </td>
                    <td className="py-3.5 px-4 uppercase text-[10px] font-semibold text-brand-slate-500">
                      {order.paymentMethod}
                    </td>
                    <td className="py-3.5 px-4">
                      <select
                        value={order.status}
                        onChange={(e) => handleStatusChange(order.id, e.target.value as any)}
                        className={`text-[11px] font-bold rounded-lg px-2.5 py-1 border outline-none cursor-pointer ${
                          order.status === 'Pending'
                            ? 'bg-amber-50 text-amber-800 border-amber-300'
                            : order.status === 'Confirmed'
                            ? 'bg-blue-50 text-blue-800 border-blue-300'
                            : order.status === 'Dispatched'
                            ? 'bg-purple-50 text-purple-800 border-purple-300'
                            : order.status === 'Delivered'
                            ? 'bg-emerald-50 text-emerald-800 border-emerald-300'
                            : 'bg-rose-50 text-rose-800 border-rose-300'
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
                        className="p-1.5 rounded-lg bg-brand-light-bg border border-brand-slate-200 hover:border-brand-blue-400 text-brand-blue-700 transition-colors inline-flex"
                        title="View Full Order & Dispatch Slip"
                      >
                        <Eye className="w-3.5 h-3.5" />
                      </button>
                      <a
                        href={`https://wa.me/${order.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(order.customerName)},%20this%20is%20Bin%20Irfan%20Fragrance%20regarding%20your%20order%20${order.id}.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600 hover:bg-emerald-100 transition-colors inline-flex"
                        title="Chat with Customer on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                      </a>
                      <button
                        onClick={() => handleDelete(order.id)}
                        className="p-1.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-600 hover:bg-rose-100 transition-colors inline-flex"
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
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <div className="relative w-full max-w-2xl bg-white border border-brand-slate-200 rounded-3xl p-6 sm:p-8 shadow-2xl max-h-[90vh] overflow-y-auto space-y-6">
            
            <div className="flex items-center justify-between pb-4 border-b border-brand-slate-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-brand-gold overflow-hidden">
                  <img src="/brand/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-bold text-brand-slate-900">
                    Dispatch Slip • {selectedOrder.id}
                  </h3>
                  <p className="text-[11px] text-brand-blue-700 font-semibold">Bin Irfan Fragrance • Peshawar Atelier</p>
                </div>
              </div>
              <button
                onClick={() => setSelectedOrder(null)}
                className="p-1.5 rounded-full text-brand-slate-400 hover:text-brand-slate-700 hover:bg-brand-slate-100 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Courier Dispatch Invoice Layout */}
            <div className="p-6 rounded-2xl bg-brand-light-bg border border-brand-slate-200 space-y-4 text-xs font-mono text-brand-slate-800">
              <div className="flex justify-between border-b border-brand-slate-200 pb-3">
                <div>
                  <strong className="text-brand-blue-900 block uppercase font-sans">SHIP TO (RECEIVER):</strong>
                  <p className="text-sm font-bold capitalize">{selectedOrder.customerName}</p>
                  <p>{selectedOrder.address}</p>
                  <p>{selectedOrder.city}, Pakistan</p>
                  <p className="text-brand-blue-700 font-semibold mt-1">Phone: {selectedOrder.phone}</p>
                </div>
                <div className="text-right">
                  <strong className="text-brand-blue-900 block uppercase font-sans">SENDER:</strong>
                  <p className="font-bold">Bin Irfan Fragrance</p>
                  <p>Shop #6, Malik Dilawar Plaza</p>
                  <p>Hashtnagri, Peshawar</p>
                  <p>Phone: +92 321 5186400</p>
                </div>
              </div>

              {/* Items List */}
              <div className="space-y-2 py-2 border-b border-brand-slate-200">
                <strong className="text-brand-blue-900 uppercase font-sans block text-[11px]">PARCEL CONTENTS:</strong>
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
                <span className="font-serif text-lg text-emerald-700">₨ {selectedOrder.total.toLocaleString()}</span>
              </div>

              {selectedOrder.notes && (
                <div className="pt-2 border-t border-brand-slate-200 text-[11px] text-brand-slate-500">
                  <strong>Delivery Instructions:</strong> {selectedOrder.notes}
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-brand-light-bg border border-brand-slate-200 hover:bg-brand-slate-100 text-brand-slate-800 text-xs font-semibold flex items-center justify-center gap-2 shadow-sm"
              >
                <Printer className="w-4 h-4" />
                <span>Print Courier Slip</span>
              </button>

              <div className="flex gap-2 w-full sm:w-auto">
                <a
                  href={`https://wa.me/${selectedOrder.phone.replace(/[^0-9]/g, '')}?text=Hello%20${encodeURIComponent(selectedOrder.customerName)},%20your%20order%20${selectedOrder.id}%20from%20Bin%20Irfan%20Fragrance%20is%20${encodeURIComponent(selectedOrder.status)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Message Customer</span>
                </a>

                <button
                  onClick={() => setSelectedOrder(null)}
                  className="px-5 py-2.5 rounded-xl bg-brand-slate-900 text-white text-xs font-semibold hover:bg-brand-slate-800"
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
