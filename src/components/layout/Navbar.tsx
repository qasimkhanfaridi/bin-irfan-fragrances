import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Search, ShoppingBag, Heart, Menu, X, MessageCircle } from 'lucide-react';
import { SearchModal } from './SearchModal';
import { MobileMenu } from './MobileMenu';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { cartCount, openDrawer } = useCart();
  const { wishlist } = useWishlist();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { label: 'Shop All', path: '/shop' },
    { label: 'Collections', path: '/collections' },
    { label: 'Best Sellers', path: '/shop?filter=bestsellers' },
    { label: 'Packaging & Craft', path: '/packaging' },
    { label: 'Our Story', path: '/about' },
    { label: 'Boutique & Contact', path: '/contact' }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-dark/95 backdrop-blur-md shadow-luxury border-b border-brand-gold/15 py-3'
            : 'bg-brand-dark/80 backdrop-blur-sm border-b border-brand-gold/10 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-brand-gold hover:text-white transition-colors"
              aria-label="Open mobile navigation"
            >
              <Menu className="w-6 h-6" />
            </button>

            {/* Brand Logo & Name */}
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-brand-gold/60 shadow-gold-glow flex-shrink-0 bg-brand-ruby-dark">
                {/* Official Supplied Bin Irfan Logo */}
                <img
                  src="/brand/logo.jpg"
                  alt="Bin Irfan Fragrance Logo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-lg sm:text-xl font-bold tracking-widest text-gold-gradient leading-tight">
                  BIN IRFAN
                </span>
                <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.28em] text-brand-gold-light/80 font-medium">
                  FRAGRANCE
                </span>
              </div>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-7">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-sm tracking-wider uppercase font-medium transition-colors relative py-1 ${
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

            {/* Right Action Icons */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-brand-cream/80 hover:text-brand-gold-light transition-colors"
                aria-label="Search fragrances"
              >
                <Search className="w-5 h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                to="/shop?filter=wishlist"
                className="relative p-2 text-brand-cream/80 hover:text-brand-gold-light transition-colors hidden sm:inline-flex"
                aria-label="Wishlist"
              >
                <Heart className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-brand-ruby text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-brand-gold/40">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* WhatsApp Quick Chat */}
              <a
                href="https://wa.me/923169699892?text=Hello%20Bin%20Irfan%20Fragrance,%20I%20would%20like%20to%20place%20an%20order!"
                target="_blank"
                rel="noopener noreferrer"
                className="hidden xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-500/40 bg-emerald-950/30 text-emerald-300 text-xs hover:bg-emerald-900/50 transition-colors"
                title="Direct WhatsApp Order"
              >
                <MessageCircle className="w-3.5 h-3.5 text-emerald-400" />
                <span className="font-semibold">WhatsApp Order</span>
              </a>

              {/* Cart Drawer Trigger */}
              <button
                onClick={openDrawer}
                className="relative p-2.5 rounded-full bg-brand-dark-surface border border-brand-gold/30 hover:border-brand-gold text-brand-gold-light transition-all duration-300 hover:shadow-gold-glow flex items-center gap-2"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-5 h-5" />
                <span className="text-xs font-semibold hidden md:inline">Cart</span>
                {cartCount > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-gradient-to-r from-brand-ruby to-brand-ruby-light text-white text-[11px] font-bold rounded-full flex items-center justify-center border border-brand-gold/60 shadow-ruby-glow">
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
