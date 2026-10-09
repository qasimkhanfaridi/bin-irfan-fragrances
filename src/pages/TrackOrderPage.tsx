import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { SEOHead } from '../components/common/SEOHead';
import { getOrderTrackingSchema } from '../config/seo';
import { useCart } from '../context/CartContext';
import { getOrders } from '../utils/orders';
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
  ExternalLink,
  ArrowRight
} from 'lucide-react';

export const TrackOrderPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const initialRef = searchParams.get('ref') || '';
  const { whatsappNumber } = useCart();

  const [orderQuery, setOrderQuery] = useState(initialRef);
  const [hasSearched, setHasSearched] = useState(false);
  const [recentOrder, setRecentOrder] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const existing = getOrders();
    if (initialRef && existing.length > 0) {
      const match = existing.find(o => o.id.toUpperCase() === initialRef.toUpperCase());
      if (match) {
        setRecentOrder(match);
        setHasSearched(true);
      }
    }
  }, [initialRef]);

  const handleLookup = (e: React.FormEvent) => {
    e.preventDefault();
    const clean = orderQuery.trim().toUpperCase();
    if (!clean) return;

    setHasSearched(true);
    const existing = getOrders();
    const match = existing.find(
      o => o.id.toUpperCase() === clean || o.phone.replace(/\D/g, '').includes(clean.replace(/\D/g, ''))
    );
    setRecentOrder(match || null);
  };

  const waTrackUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    `Assalam o Alaikum Bin Irfan Fragrances! I would like to check the dispatch and courier tracking for my order${
      orderQuery ? ` (Reference: ${orderQuery})` : ''
    }.`
  )}`;

  return (
    <div className="min-h-screen bg-brand-light-bg py-12 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto space-y-12">
      <SEOHead
        title="Track Your Order & Courier Status"
        description="Check real-time delivery status for your Bin Irfan Fragrances order. Same-day express delivery in Rawalpindi & Islamabad and nationwide courier dispatch via Trax & TCS."
        keywords="track perfume order, Bin Irfan order status, perfume courier tracking Pakistan, same day delivery Rawalpindi, TCS perfume delivery, Trax express Pakistan"
        canonicalPath="/track-order"
        robots="noindex, follow"
        schema={getOrderTrackingSchema()}
      />

      {/* Header */}
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="text-xs uppercase tracking-[0.28em] text-brand-blue-700 font-bold bg-brand-blue-50 border border-brand-blue-200/60 px-3.5 py-1 rounded-full inline-flex items-center gap-1.5">
          <Truck className="w-3.5 h-3.5 text-brand-blue-600" />
          <span>Courier Dispatch & Tracking</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-slate-900 tracking-tight">
          Track Your Fragrance Order
        </h1>
        <p className="text-sm text-brand-slate-600 font-light leading-relaxed">
          Enter your Order Reference Number (e.g., <code className="bg-brand-blue-50 text-brand-blue-900 px-1.5 py-0.5 rounded font-mono font-semibold">BIF-123456</code>) or connect directly with our dispatch desk on WhatsApp.
        </p>
      </div>

      {/* Tracking Form Box */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-brand-slate-200/80 p-6 sm:p-8 shadow-soft space-y-6">
        <form onSubmit={handleLookup} className="space-y-4">
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
              <span>Look Up Order</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </form>

        {/* WhatsApp Direct Concierge Link */}
        <div className="pt-2 border-t border-brand-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-brand-slate-600">
          <span className="flex items-center gap-1.5">
            <Phone className="w-3.5 h-3.5 text-brand-slate-400" />
            Prefer instant confirmation via WhatsApp?
          </span>
          <a
            href={waTrackUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Chat with Dispatch (+92 321 5186400)</span>
          </a>
        </div>
      </div>

      {/* Search Result or Dispatch Guide */}
      {hasSearched && (
        <div className="max-w-2xl mx-auto bg-white rounded-3xl border border-brand-blue-200/70 p-6 sm:p-8 shadow-soft space-y-6">
          {recentOrder ? (
            <div className="space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-brand-slate-100 pb-3">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-slate-400 font-semibold block">Order Reference</span>
                  <span className="font-mono text-lg font-bold text-brand-blue-900">{recentOrder.id}</span>
                </div>
                <span className="px-3.5 py-1 rounded-full bg-blue-50 text-brand-blue-700 text-xs font-bold uppercase tracking-wide border border-brand-blue-200">
                  Status: {recentOrder.status}
                </span>
              </div>
              <div className="text-xs text-brand-slate-600 space-y-1">
                <p><strong>Customer:</strong> {recentOrder.customerName}</p>
                <p><strong>Destination:</strong> {recentOrder.city}</p>
                <p><strong>Total (Advance Paid):</strong> ₨ {recentOrder.total.toLocaleString()}</p>
              </div>
            </div>
          ) : (
            <div className="space-y-4 text-left text-xs sm:text-sm text-brand-slate-600">
              <div className="flex items-start gap-3 bg-brand-blue-50/60 p-4 rounded-2xl border border-brand-blue-100">
                <Package className="w-5 h-5 text-brand-blue-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-brand-slate-900 block text-sm">Order Reference: {orderQuery.toUpperCase()}</strong>
                  <p className="text-xs text-brand-slate-600 leading-relaxed">
                    Parcels are prepared and dispatched within 24 hours of your WhatsApp confirmation. Your live courier tracking number (Trax / TCS) is sent directly via SMS and WhatsApp.
                  </p>
                </div>
              </div>
            </div>
          )}

          <div className="pt-2 text-center">
            <a
              href={waTrackUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Get Live Courier Tracking via WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      )}

      {/* Courier Partner Portals */}
      <div className="max-w-2xl mx-auto space-y-4 pt-2">
        <h3 className="font-serif text-sm font-bold uppercase tracking-wider text-brand-slate-800 text-center">
          Official Courier Tracking Portals
        </h3>
        <p className="text-xs text-center text-brand-slate-500 max-w-md mx-auto">
          If you have already received your Consignment Number (CN) via SMS, track it directly through the courier portal:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <a
            href="https://trax.pk/tracking/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white border border-brand-slate-200 hover:border-brand-blue-400 transition-all text-center space-y-1 group shadow-xs"
          >
            <span className="font-bold text-xs text-brand-slate-900 block group-hover:text-brand-blue-700">Trax Logistics</span>
            <span className="text-[10px] text-brand-slate-500 flex items-center justify-center gap-1">
              <span>Track CN</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          <a
            href="https://www.tcsexpress.com/tracking"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white border border-brand-slate-200 hover:border-brand-blue-400 transition-all text-center space-y-1 group shadow-xs"
          >
            <span className="font-bold text-xs text-brand-slate-900 block group-hover:text-brand-blue-700">TCS Express</span>
            <span className="text-[10px] text-brand-slate-500 flex items-center justify-center gap-1">
              <span>Track CN</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>

          <a
            href="https://www.leopardscourier.com/leopard-tracking/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-2xl bg-white border border-brand-slate-200 hover:border-brand-blue-400 transition-all text-center space-y-1 group shadow-xs"
          >
            <span className="font-bold text-xs text-brand-slate-900 block group-hover:text-brand-blue-700">Leopards Courier</span>
            <span className="text-[10px] text-brand-slate-500 flex items-center justify-center gap-1">
              <span>Track CN</span>
              <ExternalLink className="w-3 h-3" />
            </span>
          </a>
        </div>
      </div>

      {/* Delivery Commitments & Trust */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="p-6 rounded-2xl bg-white border border-brand-slate-200/70 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
            <Truck className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-brand-slate-900 text-sm">2 – 4 Days Nationwide</h3>
          <p className="text-xs text-brand-slate-500 leading-relaxed">
            Fast dispatch from Rawalpindi to Islamabad, Lahore, Karachi, Peshawar, Multan, Faisalabad, and all across Pakistan.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-brand-slate-200/70 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-brand-slate-900 text-sm">Verified Advance Dispatch</h3>
          <p className="text-xs text-brand-slate-500 leading-relaxed">
            All orders are processed and dispatched via same-day express rider (Rawalpindi &amp; Islamabad) or trusted courier upon advance payment verification.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-white border border-brand-slate-200/70 space-y-2.5 shadow-xs">
          <div className="w-10 h-10 rounded-xl bg-brand-blue-50 text-brand-blue-600 flex items-center justify-center">
            <HelpCircle className="w-5 h-5" />
          </div>
          <h3 className="font-serif font-bold text-brand-slate-900 text-sm">Direct Phone & WhatsApp</h3>
          <p className="text-xs text-brand-slate-500 leading-relaxed">
            Have questions about your scent or delivery? Call or message our concierge at <strong>+92 321 5186400</strong> anytime.
          </p>
        </div>
      </div>

      {/* Return to shop */}
      <div className="text-center pt-4">
        <Link
          to="/shop"
          className="inline-flex items-center gap-2 text-xs uppercase font-bold tracking-wider text-brand-blue-700 hover:text-brand-blue-900 transition-colors"
        >
          <span>Explore Extrait De Parfum Fragrances</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
};
