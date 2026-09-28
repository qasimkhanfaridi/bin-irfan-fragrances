import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Search, ShoppingBag, Heart, Menu, MessageCircle } from 'lucide-react';
import { SearchModal } from './SearchModal';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, openDrawer, whatsappNumber } = useCart();
  const { wishlist } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 15);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Shop', path: '/shop' },
    { label: 'Collections', path: '/collections' },
    { label: 'Best Sellers', path: '/shop?filter=bestsellers' },
    { label: 'Packaging', path: '/packaging' },
    { label: 'Our Story', path: '/about' },
    { label: 'Boutique', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-dark/95 backdrop-blur-md shadow-luxury border-b border-brand-gold/20 py-2.5 sm:py-3'
            : 'bg-brand-dark/90 backdrop-blur-sm border-b border-brand-gold/15 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-2 sm:gap-4 flex-nowrap w-full">
            
            {/* Left: Mobile Hamburger & Brand Logo */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Mobile Menu Button (< xl) */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="xl:hidden p-2 -ml-1 text-brand-gold hover:text-white transition-colors focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Brand Logo & Name */}
              <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
                <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-brand-gold/70 shadow-gold-glow flex-shrink-0 bg-brand-ruby-dark">
                  <img
                    src="/brand/logo.jpg"
                    alt="Bin Irfan Fragrance Logo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-base sm:text-lg font-bold tracking-widest text-gold-gradient leading-tight whitespace-nowrap">
                    BIN IRFAN
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.26em] text-brand-gold-light/80 font-medium whitespace-nowrap">
                    FRAGRANCE
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation Links (xl+) */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-8 flex-shrink-0">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-xs 2xl:text-sm tracking-[0.16em] uppercase font-semibold transition-colors relative py-1 whitespace-nowrap ${
                      isActive
                        ? 'text-brand-gold-light'
                        : 'text-brand-cream/80 hover:text-brand-gold-light'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-brand-gold to-transparent" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Action Icons & WhatsApp */}
            <div className="flex items-center gap-1.5 sm:gap-3 flex-shrink-0">
              
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-brand-cream/80 hover:text-brand-gold-light transition-colors rounded-full hover:bg-brand-dark-surface"
                aria-label="Search fragrances"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                to="/shop?filter=wishlist"
                className="relative p-2 text-brand-cream/80 hover:text-brand-gold-light transition-colors hidden sm:inline-flex rounded-full hover:bg-brand-dark-surface"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-brand-ruby text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-brand-gold/40">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* WhatsApp Quick Order Link */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Bin%20Irfan%20Fragrance,%20I%20would%20like%20to%20place%20an%20order!`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden lg:flex items-center gap-1.5 px-2.5 2xl:px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/40 text-emerald-300 text-xs font-semibold hover:bg-emerald-900/60 hover:text-white transition-all whitespace-nowrap shadow-sm"
                title="Direct WhatsApp Order (+92 321 5186400)"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse flex-shrink-0" />
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="hidden 2xl:inline">WhatsApp Order</span>
              </a>

              {/* Cart Drawer Trigger */}
              <button
                onClick={openDrawer}
                className="relative py-1.5 px-2.5 sm:px-3 rounded-full bg-brand-dark-surface border border-brand-gold/30 hover:border-brand-gold text-brand-gold-light transition-all duration-300 hover:shadow-gold-glow flex items-center gap-1.5 sm:gap-2 flex-shrink-0"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-brand-gold" />
                <span className="text-xs font-semibold hidden md:inline">Bag</span>
                {cartCount > 0 && (
                  <span className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-brand-ruby to-brand-ruby-light text-white text-[10px] sm:text-[11px] font-bold rounded-full flex items-center justify-center border border-brand-gold/60 shadow-ruby-glow">
                    {cartCount}
                  </span>
                )}
              </button>

            </div>

          </div>
        </div>
      </header>

      {/* Instant Search Modal */}
      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />

      {/* Mobile Drawer Menu */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        links={navLinks}
      />
    </>
  );
};
