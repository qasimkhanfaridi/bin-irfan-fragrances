import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, Instagram, ArrowRight, CheckCircle2, MessageCircle } from 'lucide-react';

export const Footer: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-brand-blue-deep border-t border-brand-blue-medium/20 pt-16 pb-12 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-white/10">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold shadow-md flex-shrink-0 bg-white p-0.5">
                <img
                  src="/brand/logo.jpg"
                  alt="Official Bin Irfan Fragrance Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-widest text-white block">
                  BIN IRFAN
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-brand-blue-light block">
                  FRAGRANCE • PESHAWAR
                </span>
              </div>
            </div>

            <p className="text-sm text-slate-300/85 leading-relaxed max-w-sm">
              Artisanal perfumery rooted in timeless heritage. Handcrafted impressions, French-Arabic luxury blends, and pure 35% Extrait de Parfum formulations crafted to leave an unforgettable aura.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/binirfanfragrances/reels/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-brand-blue-dark hover:bg-white transition-all shadow-xs"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923215186400"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-emerald-400/40 bg-emerald-950/40 flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-600 transition-all shadow-xs"
                title="WhatsApp Direct (+92 321 5186400)"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com/@binirfanfragrances"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:text-brand-blue-dark hover:bg-white transition-all font-bold text-xs shadow-xs"
                title="TikTok"
              >
                TK
              </a>
            </div>
          </div>

          {/* Col 2: Explore Collections */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-widest text-white font-bold">
              Collections
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/shop" className="hover:text-white transition-colors">
                  Shop All Fragrances
                </Link>
              </li>
              <li>
                <Link to="/shop?gender=men" className="hover:text-white transition-colors">
                  Men's Collection
                </Link>
              </li>
              <li>
                <Link to="/shop?gender=women" className="hover:text-white transition-colors">
                  Women's Fragrances
                </Link>
              </li>
              <li>
                <Link to="/shop?category=bundle" className="hover:text-white transition-colors flex items-center gap-1.5 text-brand-blue-light font-semibold">
                  <span>Bundles & Gift Sets</span>
                  <span className="text-[10px] bg-brand-blue-dark px-1.5 py-0.5 rounded text-white">Save 25%</span>
                </Link>
              </li>
              <li>
                <Link to="/shop/explorer-discovery-kit" className="hover:text-white transition-colors">
                  Explorer Discovery Kit (5x10ml)
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=bestsellers" className="hover:text-white transition-colors">
                  The Signature Picks
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Policies */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-widest text-white font-bold">
              Client Care
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact Boutique
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-white transition-colors">
                  Fragrance FAQ
                </Link>
              </li>
              <li>
                <Link to="/policies/shipping" className="hover:text-white transition-colors">
                  Shipping & Delivery (2–4 Days)
                </Link>
              </li>
              <li>
                <Link to="/policies/returns" className="hover:text-white transition-colors">
                  Returns & 7-Day Exchange
                </Link>
              </li>
              <li>
                <Link to="/policies/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li className="pt-2 border-t border-white/10">
                <Link to="/admin" className="text-brand-blue-light hover:text-white transition-colors font-semibold flex items-center gap-1.5">
                  <span>Boutique Orders Portal</span>
                  <span className="text-[10px] bg-white/20 px-1.5 py-0.5 rounded text-white">Admin</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Boutique */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-widest text-white font-bold">
              VIP Scent Club
            </h3>
            <p className="text-xs text-slate-300/80">
              Subscribe to receive exclusive access to private reserve batches, new arrivals, and special promotions.
            </p>

            <form onSubmit={handleSubscribe} className="space-y-2">
              <div className="relative">
                <input
                  type="email"
                  required
                  placeholder="Your email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-slate-900 border border-white/20 rounded-xl py-2.5 pl-3 pr-10 text-xs text-white placeholder-slate-400 focus:border-brand-blue-light outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-2.5 rounded-lg bg-brand-blue-dark hover:bg-brand-blue-medium text-white transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Welcome to the VIP Circle.
                </p>
              )}
            </form>

            <div className="pt-2 text-xs space-y-1.5 text-slate-300/80">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>Shop #6, Malik Dilawar Plaza, Chowk Shadi Peer, Hashtnagri, Peshawar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <a href="tel:+923215186400" className="hover:text-white font-semibold">
                  +92 321 5186400
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
          <p>
            &copy; {new Date().getFullYear()} Bin Irfan Fragrance. All rights reserved. Peshawar, Pakistan.
          </p>
          <p className="text-center md:text-right text-[11px] text-slate-400/80 max-w-xl">
            Disclaimer: Product names and olfactory impression references are intended strictly to provide consumers with an understanding of fragrance character and style. Bin Irfan Fragrance has no affiliation with third-party trademark owners.
          </p>
        </div>
      </div>
    </footer>
  );
};
