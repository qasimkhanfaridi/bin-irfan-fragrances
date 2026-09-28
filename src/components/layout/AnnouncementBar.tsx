import React from 'react';
import { useCart } from '../../context/CartContext';
import { CurrencyCode } from '../../types/product';
import { Sparkles, Phone, ShieldCheck } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const { currency, setCurrency, whatsappNumber } = useCart();

  return (
    <div className="bg-brand-ruby-deep text-brand-gold-light border-b border-brand-ruby/50 text-xs py-1.5 px-3 sm:px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-2 flex-nowrap">
        
        {/* Left message (clean on mobile, expanded on desktop) */}
        <div className="flex items-center gap-2 overflow-hidden text-[10px] sm:text-xs truncate">
          <span className="flex items-center gap-1.5 font-medium tracking-wide truncate">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
            <span className="hidden sm:inline truncate">Free Delivery over ₨ 5,000 across Pakistan</span>
            <span className="sm:hidden truncate">Free Delivery over ₨ 5,000</span>
          </span>
          <span className="hidden md:inline-block text-brand-gold/40">•</span>
          <span className="hidden md:flex items-center gap-1 text-brand-cream/80 text-[11px]">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
            <span>35% Pure Extrait De Parfum</span>
          </span>
        </div>

        {/* Right actions: Phone & Currency */}
        <div className="flex items-center gap-2 sm:gap-3 text-[10px] sm:text-xs flex-shrink-0">
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello%20Bin%20Irfan%20Fragrance,%20I%20have%20an%20inquiry!`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-brand-gold-light hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-emerald-400 flex-shrink-0" />
            <span className="hidden sm:inline">WhatsApp:</span>
            <span className="font-semibold tracking-wide whitespace-nowrap">+92 321 5186400</span>
          </a>

          <div className="flex items-center border-l border-brand-gold/20 pl-2.5">
            <label htmlFor="currency-select" className="sr-only">Currency</label>
            <select
              id="currency-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              className="bg-brand-ruby-dark/90 border border-brand-gold/30 text-brand-gold-light text-[10px] sm:text-[11px] font-medium rounded-md px-1.5 py-0.5 outline-none cursor-pointer hover:border-brand-gold"
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
