import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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

export const App: React.FC = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <div className="flex flex-col min-h-screen bg-brand-light-bg text-brand-slate-900 selection:bg-brand-blue-600 selection:text-white">
            <AnnouncementBar />
            <Navbar />
            <CartDrawer />
            
            <main className="flex-grow">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/shop/:slug" element={<ProductDetailPage />} />
                <Route path="/product/:slug" element={<ProductDetailPage />} />
                <Route path="/collections" element={<CollectionsPage />} />
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
                
                {/* Friendly URL Aliases */}
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
          </div>
        </Router>
      </WishlistProvider>
    </CartProvider>
  );
};

export default App;
