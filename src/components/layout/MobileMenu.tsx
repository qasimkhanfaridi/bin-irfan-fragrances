import React from 'react';
import { Link } from 'react-router-dom';
import { X, Phone, MapPin, MessageCircle, Heart, ChevronRight, Sparkles } from 'lucide-react';
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
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity" 
        onClick={onClose} 
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-brand-dark-card border-r border-brand-gold/30 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-brand-gold/20">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full border border-brand-gold/70 overflow-hidden shadow-gold-glow bg-brand-ruby-dark">
                <img
                  src="/brand/logo.jpg"
                  alt="Bin Irfan Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h2 className="font-serif text-base font-bold text-gold-gradient tracking-wider">
                  BIN IRFAN
                </h2>
                <span className="text-[9px] uppercase tracking-[0.25em] text-brand-gold-light/70 font-medium">
                  FRAGRANCE
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-brand-dark border border-brand-gold/30 text-brand-gold hover:text-white transition-colors"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Notice */}
          <div className="my-4 px-3 py-2 rounded-xl bg-brand-ruby/20 border border-brand-gold/20 text-[11px] text-brand-gold-light flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
            <span>35% Pure Extrait De Parfum</span>
          </div>

          {/* Nav Links */}
          <nav className="flex flex-col space-y-1">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className="flex items-center justify-between py-3 px-3.5 rounded-xl text-xs font-semibold tracking-widest uppercase text-brand-cream hover:bg-brand-ruby/25 hover:text-brand-gold-light transition-all"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-brand-gold/50" />
              </Link>
            ))}

            <Link
              to="/shop?filter=wishlist"
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3.5 rounded-xl text-xs font-semibold tracking-widest uppercase text-brand-cream hover:bg-brand-ruby/25 hover:text-brand-gold-light transition-all"
            >
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-brand-ruby-light" />
                Wishlist
              </span>
              <span className="text-xs bg-brand-ruby px-2 py-0.5 rounded-full text-white font-bold">
                {wishlist.length}
              </span>
            </Link>
          </nav>
        </div>

        {/* Bottom Contact / Direct WhatsApp */}
        <div className="pt-6 border-t border-brand-gold/20 space-y-3.5">
          <a
            href={`https://wa.me/${whatsappNumber}?text=Hello%20Bin%20Irfan%20Fragrance,%20I%20have%20an%20order%20inquiry!`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-950/60 border border-emerald-500/60 text-emerald-300 font-semibold text-xs tracking-wider uppercase hover:bg-emerald-900/80 transition-colors shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>WhatsApp (+92 321 5186400)</span>
          </a>

          <div className="text-xs text-brand-cream/70 space-y-1.5 px-1">
            <div className="flex items-start gap-2 text-[11px]">
              <MapPin className="w-3.5 h-3.5 text-brand-gold mt-0.5 flex-shrink-0" />
              <span>Shop #6, Malik Dilawar Plaza, Hashtnagri, Peshawar</span>
            </div>
            <div className="flex items-center gap-2 text-[11px]">
              <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
              <a href="tel:+923215186400" className="hover:text-brand-gold-light font-semibold">
                +92 321 5186400
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
