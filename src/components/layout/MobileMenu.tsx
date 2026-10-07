import React from 'react';
import { Link } from 'react-router-dom';
import { X, Phone, MapPin, MessageCircle, Heart, ChevronRight, Sparkles, Truck } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; path: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, links }) => {
  const { wishlist } = useWishlist();
  const { whatsappNumber } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 xl:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-white border-r border-brand-blue-soft p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-brand-blue-soft">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border-2 border-brand-gold overflow-hidden shadow-sm bg-white flex-shrink-0">
                <img
                  src="/brand/logo.jpg"
                  alt="Official Bin Irfan Fragrance Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-base font-bold text-brand-blue-deep tracking-wider">
                  BIN IRFAN
                </h2>
                <span className="text-[9px] uppercase tracking-[0.25em] text-brand-blue font-semibold">
                  FRAGRANCE
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-brand-blue-soft border border-brand-blue-light text-brand-blue-dark hover:bg-brand-blue-light transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Notice */}
          <div className="my-4 px-3 py-2 rounded-xl bg-brand-blue-soft border border-brand-blue-light text-[11px] text-brand-blue-dark font-medium flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
            <span>35% Pure Extrait De Parfum • 12+ Hour Sillage</span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className="flex items-center justify-between py-3 px-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-brand-slate hover:bg-brand-blue-soft hover:text-brand-blue-dark transition-all"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-brand-blue/60" />
              </Link>
            ))}

            <Link
              to="/track-order"
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3.5 rounded-xl text-xs font-semibold tracking-wider uppercase text-brand-blue-700 bg-brand-blue-50/70 hover:bg-brand-blue-100 hover:text-brand-blue-900 transition-all border border-brand-blue-200/50"
            >
              <span className="flex items-center gap-2">
                <Truck className="w-4 h-4 text-brand-blue-600" />
                Track Your Order
              </span>
              <ChevronRight className="w-4 h-4 text-brand-blue-600" />
            </Link>
          </nav>
        </div>

        {/* Bottom Contact / Direct WhatsApp */}
        <div className="pt-6 border-t border-brand-blue-soft space-y-3.5">
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent("Assalam-o-Alaikum Bin Irfan Fragrances, I would like to inquire about your perfumes and delivery.")}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 font-semibold text-xs tracking-wider uppercase hover:bg-emerald-100 transition-colors shadow-xs"
          >
            <MessageCircle className="w-4 h-4 text-emerald-600" />
            <span>WhatsApp (+92 321 5186400)</span>
          </a>

          <div className="text-xs text-brand-slate/75 space-y-1.5 px-1">
            <div className="flex items-start gap-2 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-brand-blue mt-0.5 flex-shrink-0" />
              <span>H3X9+8X4, Dhoke Chiragh Deen, Rawalpindi</span>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <Phone className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
              <a href="tel:+923215186400" className="hover:text-brand-blue-dark font-semibold">
                +92 321 5186400
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
