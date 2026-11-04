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
import { IslamabadDeliveryPage } from './pages/IslamabadDeliveryPage';
import { NationalStorePakistanPage } from './pages/NationalStorePakistanPage';
import { CategoryLandingPage } from './pages/CategoryLandingPage';
import { GuidesIndexPage } from './pages/GuidesIndexPage';
import { GuideArticlePage } from './pages/GuideArticlePage';
import { MobileStickyBar } from './components/layout/MobileStickyBar';
import { AnalyticsRouteTracker } from './components/common/AnalyticsRouteTracker';

const ShopSlugRedirect: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  return <Navigate to={`/product/${slug ?? ''}`} replace />;
};

export const App: React.FC = () => {
  return (
    <CartProvider>
      <WishlistProvider>
        <Router>
          <AnalyticsRouteTracker />
          <div className="flex flex-col min-h-screen w-full max-w-full overflow-x-hidden bg-brand-light-bg text-brand-slate-900 selection:bg-brand-blue-600 selection:text-white pb-20 lg:pb-0">
            <AnnouncementBar />
            <Navbar />
            <CartDrawer />
            
            <main className="flex-grow w-full max-w-full overflow-x-hidden">
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/shop/:slug" element={<ShopSlugRedirect />} />
                <Route path="/product/:slug" element={<ProductDetailPage />} />
                <Route path="/collections" element={<CollectionsPage />} />
                <Route path="/perfume-shop-rawalpindi" element={<LocalStoreRawalpindiPage />} />
                <Route path="/perfume-delivery-islamabad" element={<IslamabadDeliveryPage />} />
                <Route path="/online-perfume-store-pakistan" element={<NationalStorePakistanPage />} />
                <Route path="/packaging" element={<PackagingPage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/faq" element={<FAQPage />} />
                <Route path="/guides" element={<GuidesIndexPage />} />
                <Route path="/guides/:slug" element={<GuideArticlePage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="/checkout" element={<CheckoutPage />} />
                <Route path="/track-order" element={<TrackOrderPage />} />
                <Route path="/admin" element={<AdminOrdersPage />} />
                <Route path="/admin/orders" element={<AdminOrdersPage />} />
                <Route path="/policies/:type" element={<PolicyPages />} />

                {/* 10 Dedicated Search-Optimized Category Pages */}
                <Route path="/mens-perfumes" element={<CategoryLandingPage slugOverride="mens-perfumes" />} />
                <Route path="/womens-perfumes" element={<CategoryLandingPage slugOverride="womens-perfumes" />} />
                <Route path="/unisex-perfumes" element={<CategoryLandingPage slugOverride="unisex-perfumes" />} />
                <Route path="/oud-perfumes" element={<CategoryLandingPage slugOverride="oud-perfumes" />} />
                <Route path="/extrait-de-parfum" element={<CategoryLandingPage slugOverride="extrait-de-parfum" />} />
                <Route path="/luxury-perfumes" element={<CategoryLandingPage slugOverride="luxury-perfumes" />} />
                <Route path="/long-lasting-perfumes" element={<CategoryLandingPage slugOverride="long-lasting-perfumes" />} />
                <Route path="/perfume-gift-sets" element={<CategoryLandingPage slugOverride="perfume-gift-sets" />} />
                <Route path="/fresh-fragrances" element={<CategoryLandingPage slugOverride="fresh-fragrances" />} />
                <Route path="/woody-fragrances" element={<CategoryLandingPage slugOverride="woody-fragrances" />} />
                
                {/* Local Rawalpindi & Twin-Cities SEO Aliases */}
                <Route path="/perfumes-in-rawalpindi" element={<Navigate to="/perfume-shop-rawalpindi" replace />} />
                <Route path="/perfume-rawalpindi" element={<Navigate to="/perfume-shop-rawalpindi" replace />} />
                <Route path="/rawalpindi" element={<Navigate to="/perfume-shop-rawalpindi" replace />} />
                <Route path="/perfumes-in-islamabad" element={<Navigate to="/perfume-delivery-islamabad" replace />} />
                <Route path="/perfume-islamabad" element={<Navigate to="/perfume-delivery-islamabad" replace />} />
                <Route path="/islamabad" element={<Navigate to="/perfume-delivery-islamabad" replace />} />

                {/* National Store Aliases */}
                <Route path="/buy-perfumes-online-pakistan" element={<Navigate to="/online-perfume-store-pakistan" replace />} />
                <Route path="/perfumes-pakistan" element={<Navigate to="/online-perfume-store-pakistan" replace />} />
                <Route path="/perfume-prices-pakistan" element={<Navigate to="/online-perfume-store-pakistan" replace />} />

                {/* Scent Family & Category Fast Redirects to Canonical SEO Categories */}
                <Route path="/men" element={<Navigate to="/mens-perfumes" replace />} />
                <Route path="/women" element={<Navigate to="/womens-perfumes" replace />} />
                <Route path="/unisex" element={<Navigate to="/unisex-perfumes" replace />} />
                <Route path="/oud" element={<Navigate to="/oud-perfumes" replace />} />
                <Route path="/gift-sets" element={<Navigate to="/perfume-gift-sets" replace />} />
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
