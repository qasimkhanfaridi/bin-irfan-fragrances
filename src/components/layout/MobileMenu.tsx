import React from 'react';
import { Link } from 'react-router-dom';
import { X, Phone, MapPin, MessageCircle, Heart, ChevronRight } from 'lucide-react';
import { useWishlist } from '../../context/WishlistContext';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  links: { label: string; path: string }[];
}

export const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose, links }) => {
  const { wishlist } = useWishlist();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose} 
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 left-0 w-4/5 max-w-sm bg-brand-dark-surface border-r border-brand-gold/25 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-5 border-b border-brand-gold/20">
            <div className="flex items-center gap-3">
              <img
                src="/brand/logo.jpg"
                alt="Bin Irfan Logo"
                className="w-10 h-10 rounded-full border border-brand-gold/50 object-cover"
              />
              <div>
                <h2 className="font-serif text-base font-bold text-gold-gradient tracking-wider">
                  BIN IRFAN
                </h2>
                <span className="text-[9px] uppercase tracking-widest text-brand-gold-light/70">
                  FRAGRANCE
                </span>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-brand-dark border border-brand-gold/30 text-brand-gold hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="mt-6 flex flex-col space-y-2">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={onClose}
                className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-medium tracking-wider uppercase text-brand-cream hover:bg-brand-ruby/20 hover:text-brand-gold-light transition-all"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-brand-gold/60" />
              </Link>
            ))}

            <Link
              to="/shop?filter=wishlist"
              onClick={onClose}
              className="flex items-center justify-between py-3 px-3 rounded-lg text-sm font-medium tracking-wider uppercase text-brand-cream hover:bg-brand-ruby/20 hover:text-brand-gold-light transition-all"
            >
              <span className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-brand-ruby-light" />
                Wishlist
              </span>
              <span className="text-xs bg-brand-ruby px-2 py-0.5 rounded-full text-white">
                {wishlist.length}
              </span>
            </Link>
          </nav>
        </div>

        {/* Bottom Contact / Boutique Info */}
        <div className="pt-6 border-t border-brand-gold/20 space-y-4">
          <a
            href="https://wa.me/923169699892?text=Hello%20Bin%20Irfan%20Fragrance,%20I%20have%20an%20order%20inquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-emerald-900/40 border border-emerald-500/50 text-emerald-300 font-semibold text-sm hover:bg-emerald-800/50 transition-colors shadow-lg"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            WhatsApp Concierge
          </a>

          <div className="text-xs text-brand-cream/70 space-y-1.5 px-1">
            <div className="flex items-start gap-2">
              <MapPin className="w-3.5 h-3.5 text-brand-gold mt-0.5 flex-shrink-0" />
              <span>Shop #6, Malik Dilawar Plaza, Hashtnagri, Peshawar</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
              <span>+92 316 9699892</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
