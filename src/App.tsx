import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useParams } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import { WishlistProvider } from './context/WishlistContext';
import { AnnouncementBar } from './components/layout/AnnouncementBar';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { CartDrawer } from './components/cart/CartDrawer';

import { HomePage } from './pages/HomePage';
import { ShopPage } from './pages/ShopPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { CollectionsPage } from './pages/CollectionsPage';
import { PackagingPage } from './pages/PackagingPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FAQPage } from './pages/FAQPage';
import { CartPage } from './pages/CartPage';
import { CheckoutPage } from './pages/CheckoutPage';
import { PolicyPages } from './pages/PolicyPages';
import { AdminOrdersPage } from './pages/AdminOrdersPage';
import { TrackOrderPage } from './pages/TrackOrderPage';
import { LocalStoreRawalpindiPage } from './pages/LocalStoreRawalpindiPage';
import { MobileStickyBar } from './components/layout/MobileStickyBar';

const ShopSlugRedirect: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/product/${slug ?? ''}`} replace />;
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-brand-light-bg text-brand-slate-900 selection:bg-brand-blue-600 selection:text-white pb-14 lg:pb-0">
            <AnnouncementBar />
            <Navbar />
            <CartDrawer />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/shop/:slug" element={<ShopSlugRedirect />} />
                <Route path="/product/:slug" element={<ProductDetailPage />} />
                <Route path="/collections" element={<CollectionsPage />} />
                <Route path="/perfume-shop-rawalpindi" element={<LocalStoreRawalpindiPage />} />
                <Route path="/packaging" element={<PackagingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/track-order" element={<TrackOrderPage />} />
                <Route path="/admin" element={<AdminOrdersPage />} />
                <Route path="/admin/orders" element={<AdminOrdersPage />} />
                <Route path="/policies/:type" element={<PolicyPages />} />
                
                {/* Local Rawalpindi & Twin-Cities SEO Shortcuts */}
                <Route path="/perfumes-in-rawalpindi" element={<Navigate to="/perfume-shop-rawalpindi" replace />} />
                <Route path="/perfume-rawalpindi" element={<Navigate to="/perfume-shop-rawalpindi" replace />} />
                <Route path="/rawalpindi" element={<Navigate to="/perfume-shop-rawalpindi" replace />} />

                {/* Scent Family & Category Fast Redirects */}
                <Route path="/men" element={<Navigate to="/shop?gender=men" replace />} />
                <Route path="/women" element={<Navigate to="/shop?gender=women" replace />} />
                <Route path="/unisex" element={<Navigate to="/shop?gender=unisex" replace />} />
                <Route path="/oud" element={<Navigate to="/shop?family=Woody%20%26%20Oud" replace />} />
                <Route path="/gift-sets" element={<Navigate to="/shop?category=bundle" replace />} />
                <Route path="/best-sellers" element={<Navigate to="/shop?filter=bestsellers" replace />} />
                <Route path="/delivery-information" element={<Navigate to="/policies/shipping" replace />} />

                {/* Friendly Policy & Utility Aliases */}
                <Route path="/our-story" element={<Navigate to="/about" replace />} />
                <Route path="/privacy-policy" element={<Navigate to="/policies/privacy" replace />} />
                <Route path="/shipping-policy" element={<Navigate to="/policies/shipping" replace />} />
                <Route path="/refund-policy" element={<Navigate to="/policies/returns" replace />} />
                <Route path="/terms" element={<Navigate to="/policies/terms" replace />} />
                <Route path="/returns" element={<Navigate to="/policies/returns" replace />} />
                <Route path="/track" element={<Navigate to="/track-order" replace />} />
                <Route path="/tracking" element={<Navigate to="/track-order" replace />} />

                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>

            <Footer />
            <MobileStickyBar />
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
