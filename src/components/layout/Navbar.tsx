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
  }, [location.pathname, location.search]);

  const navLinks = [
    { label: 'Shop All', shortLabel: 'Shop', path: '/shop' },
    { label: "Men's", shortLabel: "Men", path: '/mens-perfumes' },
    { label: "Women's", shortLabel: "Women", path: '/womens-perfumes' },
    { label: 'Oud & Extrait', shortLabel: 'Oud', path: '/oud-perfumes' },
    { label: 'Gift Sets', shortLabel: 'Gifts', path: '/perfume-gift-sets' },
    { label: 'Rawalpindi Studio', shortLabel: 'Studio', path: '/perfume-shop-rawalpindi' },
    { label: 'Islamabad Delivery', shortLabel: 'Islamabad', path: '/perfume-delivery-islamabad' },
    { label: 'Guides', shortLabel: 'Guides', path: '/guides' }
  ];

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full max-w-full overflow-x-clip transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-brand-blue-soft py-2.5 sm:py-3'
            : 'bg-white/90 backdrop-blur-sm border-b border-brand-blue-soft/80 py-3 sm:py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 w-full">
          <div className="flex items-center justify-between gap-2 xl:gap-3 flex-nowrap w-full min-w-0">
            
            {/* Left: Mobile Hamburger & Brand Logo with Official Medallion */}
            <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
              {/* Mobile Menu Button (< xl) */}
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="xl:hidden p-2 -ml-1 text-brand-blue-dark hover:text-brand-blue transition-colors focus:outline-none"
                aria-label="Open navigation menu"
              >
                <Menu className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Official Brand Logo Medallion & Name */}
              <Link to="/" className="flex items-center gap-2.5 sm:gap-3 group flex-shrink-0">
                <div className="relative w-10 h-10 sm:w-11 sm:h-11 rounded-full overflow-hidden border-2 border-brand-gold shadow-sm flex-shrink-0 bg-white">
                  <img
                    src="/brand/logo.jpg"
                    alt="Official Bin Irfan Fragrances Logo"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="font-serif text-base sm:text-lg font-bold tracking-widest text-brand-blue-deep leading-tight whitespace-nowrap">
                    BIN IRFAN
                  </span>
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.26em] text-brand-blue font-semibold whitespace-nowrap">
                    FRAGRANCE
                  </span>
                </div>
              </Link>
            </div>

            {/* Center: Desktop Navigation Links (xl+) */}
            <nav className="hidden xl:flex items-center gap-2.5 xl:gap-3.5 2xl:gap-6 flex-shrink min-w-0">
              {navLinks.map((link) => {
                const isActive = (location.pathname + location.search) === link.path;
                return (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`text-[11px] xl:text-xs 2xl:text-sm tracking-[0.08em] xl:tracking-[0.1em] 2xl:tracking-[0.14em] uppercase font-semibold transition-colors relative py-1 whitespace-nowrap ${
                      isActive
                        ? 'text-brand-blue-dark font-bold'
                        : 'text-brand-slate/85 hover:text-brand-blue-dark'
                    }`}
                  >
                    <span className="hidden 2xl:inline">{link.label}</span>
                    <span className="2xl:hidden">{link.shortLabel}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-brand-blue-medium via-brand-blue-dark to-brand-blue-medium rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right: Action Icons & WhatsApp */}
            <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
              
              {/* Search Icon */}
              <button
                onClick={() => setIsSearchOpen(true)}
                className="p-2 text-brand-slate hover:text-brand-blue-dark transition-colors rounded-full hover:bg-brand-blue-soft"
                aria-label="Search fragrances"
              >
                <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              </button>

              {/* Wishlist Link */}
              <Link
                to="/shop?filter=wishlist"
                className="relative p-2 text-brand-slate hover:text-brand-blue-dark transition-colors hidden sm:inline-flex rounded-full hover:bg-brand-blue-soft"
                aria-label="Wishlist"
              >
                <Heart className="w-4 h-4 sm:w-5 sm:h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute top-1 right-1 w-4 h-4 bg-brand-blue-dark text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white">
                    {wishlist.length}
                  </span>
                )}
              </Link>

              {/* WhatsApp Quick Order Link */}
              <a
                href={`https://wa.me/${whatsappNumber}?text=Hello%20Bin%20Irfan%20Fragrance,%20I%20would%20like%20to%20place%20an%20order!`}
                target="_blank"
                rel="noopener noreferrer"
                className="hidden 2xl:flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-emerald-300 bg-emerald-50 text-emerald-800 text-xs font-semibold hover:bg-emerald-100 transition-all whitespace-nowrap shadow-xs"
                title="Direct WhatsApp Order (+92 321 5186400)"
              >
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                <MessageCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                <span>WhatsApp Order</span>
              </a>

              {/* Cart Drawer Trigger */}
              <button
                onClick={openDrawer}
                className="relative py-1.5 px-2.5 sm:px-3 rounded-full bg-brand-blue-soft hover:bg-brand-blue-light/50 border border-brand-blue-medium/30 hover:border-brand-blue text-brand-blue-dark transition-all duration-300 flex items-center gap-1.5 sm:gap-2 flex-shrink-0"
                aria-label="Shopping Cart"
              >
                <ShoppingBag className="w-4 h-4 sm:w-5 sm:h-5 text-brand-blue-dark" />
                <span className="text-xs font-semibold hidden md:inline">Bag</span>
                {cartCount > 0 && (
                  <span className="w-4 h-4 sm:w-5 sm:h-5 bg-brand-blue-dark text-white text-[10px] sm:text-[11px] font-bold rounded-full flex items-center justify-center border border-white shadow-xs">
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
