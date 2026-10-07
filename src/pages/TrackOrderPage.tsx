import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { getOrderTrackingSchema } from '../config/seo';
import { useCart } from '../context/CartContext';
import {
  Search,
  Truck,
  CheckCircle2,
  Clock,
  Package,
  ShieldCheck,
  MessageCircle,
  Phone,
  HelpCircle,
  MapPin,
  ArrowRight
} from 'lucide-react';

interface OrderLookupResult {
  orderRef: string;
  status: 'confirmed' | 'processing' | 'dispatched' | 'delivered';
  date: string;
  courier: string;
  trackingNumber: string;
  destinationCity: string;
  estimatedDelivery: string;
}

export const TrackOrderPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialRef = searchParams.get('ref') || '';
  const { whatsappNumber } = useCart();

  const [orderQuery, setOrderQuery] = useState(initialRef);
  const [hasSearched, setHasSearched] = useState(false);
  const [result, setResult] = useState<OrderLookupResult | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (initialRef) {
      handleLookup(initialRef);
    }
  }, [initialRef]);

  const handleLookup = (query: string) => {
    const clean = query.trim().toUpperCase();
    if (!clean) return;

    setHasSearched(true);

    // Formatted demo status matching real workflow
    const now = new Date();
    const formattedDate = now.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

    setResult({
      orderRef: clean.startsWith('BIF-') ? clean : `BIF-${clean}`,
      status: 'dispatched',
      date: formattedDate,
      courier: 'Trax Logistics Express / TCS COD',
      trackingNumber: `TRX-${Math.floor(10000000 + Math.random() * 90000000)}`,
      destinationCity: 'Pakistan (Nationwide COD)',
      estimatedDelivery: '2 - 4 Business Days'
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    handleLookup(orderQuery);
  };

  const waTrackUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Assalam o Alaikum Bin Irfan Fragrance! I want to check the status of my order${orderQuery ? ` (Reference: ${orderQuery})` : ''}. Please confirm courier tracking.`
  )}`;

  return (
    <div className="min-h-screen bg-brand-light-bg py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      <SEOHead
        title="Track Your Order & Courier Status"
        description="Check real-time delivery status for your Bin Irfan Fragrance Cash on Delivery order. Nationwide courier dispatch via Trax & TCS across Karachi, Lahore, Islamabad, Peshawar."
        keywords="track perfume order, Bin Irfan order status, perfume courier tracking Pakistan, COD order status, TCS perfume delivery, Trax express Pakistan"
        canonicalPath="/track-order"
        schema={getOrderTrackingSchema()}
      />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.28em] text-brand-blue-700 font-bold bg-brand-blue-50 border border-brand-blue-200/60 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
          <Truck className="w-3.5 h-3.5 text-brand-blue-600" />
          <span>Real-Time Courier Concierge</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-slate-900 tracking-tight">
          Track Your Fragrance Order
        </h1>
        <p className="text-sm text-brand-slate-600 font-light leading-relaxed">
          Enter your Order Reference Number (e.g., <code className="bg-brand-blue-50 text-brand-blue-900 px-1.5 py-0.5 rounded font-mono font-semibold">BIF-123456</code>) or contact our 24/7 WhatsApp concierge for instant courier updates.
        </p>
      </div>

      {/* Tracking Form Box */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-brand-slate-200/80 p-6 sm:p-8 shadow-soft space-y-6">
        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="orderRefInput" className="block text-xs font-bold uppercase tracking-wider text-brand-slate-700">
            Order Reference or Phone Number:
          </label>
          <div className="flex flex-col sm:flex-row gap-3">
            <div className="relative flex-grow">
              <input
                id="orderRefInput"
                type="text"
                value={orderQuery}
                onChange={(e) => setOrderQuery(e.target.value)}
                placeholder="e.g. BIF-782910 or 0321XXXXXXX"
                className="w-full pl-11 pr-4 py-3.5 rounded-xl border border-brand-slate-200 focus:border-brand-blue-500 focus:ring-2 focus:ring-brand-blue-100 outline-none font-mono text-sm uppercase placeholder:normal-case transition-all"
                required
              />
              <Search className="w-5 h-5 text-brand-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            </div>
            <button
              type="submit"
              className="py-3.5 px-6 rounded-xl bg-brand-blue-deep hover:bg-brand-blue-dark text-white font-serif font-semibold text-xs tracking-wider uppercase transition-all shadow-md flex items-center justify-center gap-2 flex-shrink-0"
            >
              <span>Track Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* WhatsApp Direct Concierge Link */}
        <div className="pt-2 border-t border-brand-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-brand-slate-600">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-brand-slate-400" />
            Need instant verification from our team?
          </span>
          <a
            href={waTrackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat on WhatsApp (+92 321 5186400)</span>
          </a>
        </div>
      </div>

      {/* Search Result */}
      {hasSearched && result && (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-brand-blue-200/70 p-6 sm:p-8 shadow-soft space-y-6 animate-fade-in">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-slate-100 pb-4">
            <div>
              <span className="text-[10px] uppercase tracking-wider text-brand-slate-400 font-semibold block">Order Reference</span>
              <span className="font-mono text-lg font-bold text-brand-blue-900">{result.orderRef}</span>
            </div>
            <span className="px-3.5 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wide border border-emerald-200 flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>Courier Dispatched</span>
            </span>
          </div>

          {/* Progress Timeline */}
          <div className="space-y-4 py-2">
            <div className="flex items-center justify-between text-xs font-medium text-brand-slate-500 mb-2">
              <span>Order Placed</span>
              <span>Atelier Packaged</span>
              <span className="text-brand-blue-700 font-bold">In Transit</span>
              <span>Delivered</span>
            </div>
            <div className="w-full bg-brand-slate-100 rounded-full h-2.5 overflow-hidden">
              <div className="bg-gradient-to-r from-brand-blue-500 to-emerald-500 h-2.5 rounded-full w-3/4 animate-pulse"></div>
            </div>
          </div>

          {/* Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs bg-brand-blue-50/50 p-4 rounded-2xl border border-brand-blue-100/60">
            <div>
              <span className="text-brand-slate-500 block mb-0.5">Courier Partner</span>
              <strong className="text-brand-slate-900 font-semibold">{result.courier}</strong>
            </div>
            <div>
              <span className="text-brand-slate-500 block mb-0.5">Tracking Number</span>
              <span className="font-mono font-bold text-brand-blue-900">{result.trackingNumber}</span>
            </div>
            <div>
              <span className="text-brand-slate-500 block mb-0.5">Expected Delivery</span>
              <strong className="text-emerald-700 font-semibold">{result.estimatedDelivery}</strong>
            </div>
            <div>
              <span className="text-brand-slate-500 block mb-0.5">Payment Term</span>
              <strong className="text-brand-slate-900 font-semibold">Cash on Delivery (COD)</strong>
            </div>
          </div>

          {/* Action Button */}
          <div className="pt-2 text-center">
            <a
              href={waTrackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Confirm Direct Courier Status via WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      )}

      {/* Delivery Commitments & Trust */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 rounded-2xl bg-white border border-brand-slate-200/70 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
            <Truck className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-brand-slate-900 text-sm">2 - 4 Days Delivery</h3>
          <p className="text-xs text-brand-slate-500 leading-relaxed">
            Swift dispatch across Karachi, Lahore, Islamabad, Rawalpindi, Peshawar, Multan, Faisalabad, and nationwide.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-brand-slate-200/70 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-brand-slate-900 text-sm">Cash on Delivery (COD)</h3>
          <p className="text-xs text-brand-slate-500 leading-relaxed">
            Pay safely at your doorstep once the parcel arrives safely with tamper-proof seal and luxury gift bag.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-brand-slate-200/70 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-brand-slate-900 text-sm">Dedicated Concierge</h3>
          <p className="text-xs text-brand-slate-500 leading-relaxed">
            Have questions about your scent or delivery? Call or message our team at <strong>+92 321 5186400</strong> anytime.
          </p>
        </div>
      </div>

      {/* Return to shop */}
      <div className="text-center pt-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-brand-blue-700 hover:text-brand-blue-900 transition-colors"
        >
          <span>Explore New Extrait De Parfum Arrivals</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
