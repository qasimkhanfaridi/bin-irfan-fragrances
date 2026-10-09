import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { CurrencyCode } from '../../types/product';
import { Sparkles, Phone, ShieldCheck, Truck } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const { currency, setCurrency, whatsappNumber } = useCart();

  return (
    <div className="bg-brand-blue-dark text-white border-b border-brand-blue-medium/30 text-xs py-1.5 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 flex-nowrap">
        
        {/* Left message (clean on mobile, expanded on desktop) */}
        <div className="flex items-center gap-2 overflow-hidden text-[10px] sm:text-xs truncate">
          <span className="flex items-center gap-1.5 font-medium tracking-wide truncate">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
            <span className="hidden sm:inline truncate">⚡ Same-Day Express Delivery in Rawalpindi &amp; Islamabad • Advance Payment Only • Free Shipping over ₨ 5,000</span>
            <span className="sm:hidden truncate">⚡ Same-Day Delivery (Rwp / Isb) • Advance Payment</span>
          </span>
          <span className="hidden lg:inline-block text-white/40">•</span>
          <span className="hidden lg:flex items-center gap-1 text-brand-blue-light text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
            <span>35% Pure Extrait De Parfum</span>
          </span>
        </div>

        {/* Right actions: Phone & Track Order & Currency */}
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs flex-shrink-0">
          <Link
            to="/track-order"
            className="hidden sm:flex items-center gap-1 text-brand-blue-light hover:text-white transition-colors"
          >
            <Truck className="w-3 h-3 text-brand-gold flex-shrink-0" />
            <span>Track Order</span>
          </Link>

          <span className="hidden sm:inline-block text-white/30">•</span>

          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello%20Bin%20Irfan%20Fragrance,%20I%20have%20an%20inquiry!`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-brand-blue-light hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-emerald-400 flex-shrink-0" />
            <span className="hidden md:inline">WhatsApp:</span>
            <span className="font-semibold tracking-wide whitespace-nowrap">+92 321 5186400</span>
          </a>

          <div className="flex items-center border-l border-white/20 pl-2.5">
            <label htmlFor="currency-select" className="sr-only">Currency</label>
            <select
              id="currency-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              className="bg-brand-blue-deep/70 border border-brand-blue-medium/50 text-white text-[10px] sm:text-[11px] font-medium rounded-md px-1.5 py-0.5 outline-none cursor-pointer hover:border-brand-gold"
            >
              <option value="PKR">PKR ₨</option>
              <option value="USD">USD $</option>
              <option value="AED">AED د.إ</option>
            </select>
          </div>
        </div>

      </div>
    </div>
  );
};
