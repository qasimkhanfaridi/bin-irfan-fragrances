import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Instagram, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

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
    <footer className="bg-brand-dark-surface border-t border-brand-gold/20 pt-16 pb-12 text-brand-cream/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-16 border-b border-brand-gold/15">
          
          {/* Col 1: Brand & Logo */}
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-brand-gold/60 shadow-gold-glow flex-shrink-0 bg-brand-ruby-dark">
                <img
                  src="/brand/logo.jpg"
                  alt="Bin Irfan Fragrance Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-serif text-xl font-bold tracking-widest text-gold-gradient block">
                  BIN IRFAN
                </span>
                <span className="text-xs uppercase tracking-[0.25em] text-brand-gold-light/80 block">
                  FRAGRANCES • PESHAWAR
                </span>
              </div>
            </div>

            <p className="text-sm text-brand-cream/70 leading-relaxed max-w-sm">
              Artisanal perfumery rooted in timeless heritage. Handcrafted impressions, French-Arabic luxury blends, and pure Extrait de Parfum formulations crafted to leave an unforgettable aura.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/binirfanfragrances/reels/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:text-white hover:bg-brand-ruby hover:border-brand-ruby transition-all"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://wa.me/923169699892"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-emerald-400 hover:text-white hover:bg-emerald-700 hover:border-emerald-700 transition-all"
                title="WhatsApp Direct"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href="https://tiktok.com/@binirfanfragrances"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-brand-gold/30 flex items-center justify-center text-brand-gold hover:text-white hover:bg-brand-ruby hover:border-brand-ruby transition-all font-semibold text-xs"
                title="TikTok"
              >
                TK
              </a>
            </div>
          </div>

          {/* Col 2: Explore */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-widest text-brand-gold font-semibold">
              Explore
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/shop" className="hover:text-brand-gold-light transition-colors">
                  Shop All Fragrances
                </Link>
              </li>
              <li>
                <Link to="/collections" className="hover:text-brand-gold-light transition-colors">
                  Collections
                </Link>
              </li>
              <li>
                <Link to="/shop?filter=bestsellers" className="hover:text-brand-gold-light transition-colors">
                  The Signature Picks
                </Link>
              </li>
              <li>
                <Link to="/packaging" className="hover:text-brand-gold-light transition-colors">
                  Packaging & Craft
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-brand-gold-light transition-colors">
                  Our Story
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Customer Care & Policies */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-widest text-brand-gold font-semibold">
              Client Care
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/contact" className="hover:text-brand-gold-light transition-colors">
                  Contact Boutique
                </Link>
              </li>
              <li>
                <Link to="/faq" className="hover:text-brand-gold-light transition-colors">
                  Fragrance FAQ
                </Link>
              </li>
              <li>
                <Link to="/policies/shipping" className="hover:text-brand-gold-light transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="/policies/returns" className="hover:text-brand-gold-light transition-colors">
                  Returns & Exchange
                </Link>
              </li>
              <li>
                <Link to="/policies/privacy" className="hover:text-brand-gold-light transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/policies/terms" className="hover:text-brand-gold-light transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li className="pt-2 border-t border-brand-gold/15">
                <Link to="/admin" className="text-brand-gold hover:text-brand-gold-light transition-colors font-semibold flex items-center gap-1.5">
                  <span>Boutique Orders Portal</span>
                  <span className="text-[10px] bg-brand-ruby/60 px-1.5 py-0.5 rounded text-brand-gold-light">Admin</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Boutique */}
          <div className="space-y-4">
            <h3 className="font-serif text-sm uppercase tracking-widest text-brand-gold font-semibold">
              VIP Scent Club
            </h3>
            <p className="text-xs text-brand-cream/70">
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
                  className="w-full bg-brand-dark border border-brand-gold/30 rounded-lg py-2.5 pl-3 pr-10 text-xs text-brand-cream placeholder-brand-cream/40 focus:border-brand-gold outline-none"
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-2.5 rounded bg-brand-ruby hover:bg-brand-ruby-light text-white transition-colors"
                  aria-label="Subscribe"
                >
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
              {subscribed && (
                <p className="text-xs text-emerald-400 flex items-center gap-1 mt-1">
                  <CheckCircle2 className="w-3.5 h-3.5" /> Welcome to the VIP Circle.
                </p>
              )}
            </form>

            <div className="pt-2 text-xs space-y-1 text-brand-cream/60">
              <div className="flex items-start gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-brand-gold flex-shrink-0 mt-0.5" />
                <span>Shop #6, Malik Dilawar Plaza, Chowk Shadi Peer, Hashtnagri, Peshawar</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-brand-gold flex-shrink-0" />
                <span>+92 316 9699892</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright & Legal Disclaimer */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-brand-cream/50">
          <p>
            &copy; {new Date().getFullYear()} Bin Irfan Fragrance. All rights reserved. Peshawar, Pakistan.
          </p>
          <p className="text-center md:text-right text-[11px] text-brand-cream/40 max-w-xl">
            Disclaimer: Product names and olfactory impression references are intended strictly to provide consumers with an understanding of fragrance character and style. Bin Irfan Fragrance has no affiliation with third-party trademark owners.
          </p>
        </div>
      </div>
    </footer>
  );
};
