import React from 'react';
import { useCart } from '../../context/CartContext';
import { CurrencyCode } from '../../types/product';
import { Sparkles, Phone, ShieldCheck } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  const { currency, setCurrency } = useCart();

  return (
    <div className="bg-brand-ruby-dark text-brand-gold-light border-b border-brand-ruby/40 text-xs py-2 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-4 text-[11px] md:text-xs">
          <span className="flex items-center gap-1.5 font-medium tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Complimentary Delivery across Pakistan on orders over ₨ 5,000</span>
          </span>
          <span className="hidden lg:inline-block text-brand-gold/40">•</span>
          <span className="hidden lg:flex items-center gap-1 text-brand-cream/80">
            <ShieldCheck className="w-3.5 h-3.5 text-brand-gold" />
            <span>100% Artisanal Extrait De Parfum (35% Oil Concentration)</span>
          </span>
        </div>

        <div className="flex items-center gap-4 text-[11px] md:text-xs">
          <a
            href="https://wa.me/923169699892?text=Hello%20Bin%20Irfan%20Fragrance,%20I%20have%20an%20inquiry!"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-brand-gold-light hover:text-white transition-colors"
          >
            <Phone className="w-3 h-3 text-emerald-400" />
            <span className="hidden sm:inline">WhatsApp Concierge:</span>
            <span className="font-semibold">+92 316 9699892</span>
          </a>

          <div className="flex items-center border-l border-brand-ruby/60 pl-3 gap-1">
            <label htmlFor="currency-select" className="sr-only">Currency</label>
            <select
              id="currency-select"
              value={currency}
              onChange={(e) => setCurrency(e.target.value as CurrencyCode)}
              className="bg-brand-ruby/80 border border-brand-gold/30 text-brand-gold-light text-[11px] rounded px-1.5 py-0.5 outline-none cursor-pointer focus:border-brand-gold"
            >
              <option value="PKR">PKR (₨)</option>
              <option value="USD">USD ($)</option>
              <option value="AED">AED (د.إ)</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
