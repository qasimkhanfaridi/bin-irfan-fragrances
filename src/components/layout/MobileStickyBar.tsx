import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, MessageCircle, Compass, MapPin } from 'lucide-react';
import { useCart } from '../../context/CartContext';

export const MobileStickyBar: React.FC = () => {
  const { cartCount, openDrawer } = useCart();
  const location = useLocation();

  // Hide on checkout page so it doesn't obstruct form inputs
  if (location.pathname === '/checkout') {
    return null;
  }

  return (
    <aside aria-label="Mobile Navigation Bar" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-lg border-t border-brand-slate-200 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] px-3 py-2 lg:hidden">
      <div className="max-w-md mx-auto flex items-center justify-between gap-2">
        {/* Catalog */}
        <Link
          to="/shop"
          className="flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-brand-slate-600 hover:text-brand-blue-600 transition-colors"
        >
          <Compass className="w-5 h-5 mb-0.5 text-brand-blue-700" />
          <span className="text-[10px] font-bold tracking-tight uppercase">Catalog</span>
        </Link>

        {/* Studio / Rawalpindi */}
        <Link
          to="/perfume-shop-rawalpindi"
          className="flex flex-col items-center justify-center py-1 px-2 rounded-xl text-brand-slate-600 hover:text-brand-blue-600 transition-colors"
        >
          <MapPin className="w-5 h-5 mb-0.5 text-brand-gold" />
          <span className="text-[10px] font-bold tracking-tight uppercase">Rawalpindi</span>
        </Link>

        {/* Primary CTA: Order on WhatsApp */}
        <a
          href="https://wa.me/923215186400?text=Assalam-o-Alaikum%20Bin%20Irfan%20Fragrances%2C%20I%20would%20like%20to%20inquire%20about%20your%20perfumes%20and%20delivery."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-xl bg-emerald-600 active:bg-emerald-700 text-white shadow-md text-xs font-bold uppercase tracking-wider transition-all"
        >
          <MessageCircle className="w-4 h-4 flex-shrink-0 fill-current" />
          <span className="truncate">WhatsApp Order</span>
        </a>

        {/* Bag Trigger */}
        <button
          onClick={openDrawer}
          className="relative flex flex-col items-center justify-center py-1 px-2.5 rounded-xl text-brand-slate-700 hover:text-brand-blue-600 transition-colors"
          aria-label="View Shopping Bag"
        >
          <ShoppingBag className="w-5 h-5 mb-0.5 text-brand-blue-900" />
          {cartCount > 0 && (
            <span className="absolute -top-1 right-1.5 w-4 h-4 bg-brand-gold text-brand-slate-900 rounded-full text-[9px] font-black flex items-center justify-center shadow">
              {cartCount}
            </span>
          )}
          <span className="text-[10px] font-bold tracking-tight uppercase">Bag</span>
        </button>
      </div>
    </aside>
  );
};

export default MobileStickyBar;
