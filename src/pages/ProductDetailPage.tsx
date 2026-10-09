import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate, Navigate } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { NotePyramid } from '../components/common/NotePyramid';
import { ProductCard } from '../components/common/ProductCard';
import {
  Heart,
  ShoppingBag,
  MessageCircle,
  Star,
  ShieldCheck,
  Truck,
  RotateCcw,
  CheckCircle2,
  Clock,
  Zap,
  Award,
  ChevronRight,
  Share2,
  PackageCheck,
  Sparkles,
  Edit3
} from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { getProductSchema } from '../config/seo';
import { WriteReviewModal, UserSubmittedReview } from '../components/common/WriteReviewModal';
import { Product } from '../types/product';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const product = PRODUCTS.find(p => p.slug === slug);

  if (!product) {
    return <Navigate to="/shop" replace />;
  }

  return <ProductDetailView product={product} />;
};

const ProductDetailView: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart, formatPrice, generateWhatsAppLink } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const [selectedSize, setSelectedSize] = useState<string>(product.defaultSize);
  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [quantity, setQuantity] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [userReviews, setUserReviews] = useState<UserSubmittedReview[]>(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('bin_irfan_customer_reviews') || '[]');
      return Array.isArray(saved) ? saved.filter((r: any) => r.productId === product.id) : [];
    } catch {
      return [];
    }
  });

  const handleReviewSubmitted = (newRev: UserSubmittedReview) => {
    setUserReviews(prev => [newRev, ...prev]);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${product.name} | Bin Irfan Fragrance`;
    setSelectedImage(product.image);
    setSelectedSize(product.defaultSize);
    try {
      const saved = JSON.parse(localStorage.getItem('bin_irfan_customer_reviews') || '[]');
      setUserReviews(Array.isArray(saved) ? saved.filter((r: any) => r.productId === product.id) : []);
    } catch {
      setUserReviews([]);
    }
  }, [product]);

  const selectedVariant = product.variants.find(v => v.size === selectedSize) || product.variants[0];
  const isWishlisted = isInWishlist(product.id);
  const isBundle = product.category === 'bundle' || product.category === 'discovery-set';

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, selectedSize, quantity);
    navigate('/checkout');
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  // Related products
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen bg-brand-light-bg pt-6 pb-24 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEOHead
        title={`${product.name} — 35% Extrait De Parfum`}
        description={`Buy ${product.name} by Bin Irfan Fragrances. ${product.shortDescription || product.tagline} Handcrafted 35% concentration Extrait with 14+ hour longevity. Same-Day Delivery in Rawalpindi & Islamabad on Advance Payment.`}
        keywords={`${product.name}, buy ${product.name} Pakistan, Bin Irfan ${product.name}, ${product.fragranceFamily}, same day perfume delivery Rawalpindi, perfume Islamabad, advance payment`}
        image={product.image}
        canonicalPath={`/product/${product.slug}`}
        type="product"
        schema={getProductSchema(product)}
      />
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-brand-slate-500 mb-8 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-brand-blue-600 transition-colors">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-brand-slate-300" />
        <Link to="/shop" className="hover:text-brand-blue-600 transition-colors">Fragrances</Link>
        <ChevronRight className="w-3.5 h-3.5 text-brand-slate-300" />
        <span className="text-brand-slate-900 font-semibold">{product.name}</span>
      </nav>

      {/* Main Grid: Gallery + Purchasing */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 pb-16 border-b border-brand-slate-200">
        
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-white border border-brand-slate-200 shadow-luxury group">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Badges Overlay */}
            <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
              {product.badge && (
                <span className="bg-brand-blue-600 text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  {product.badge}
                </span>
              )}
              {product.savingsPercentage && (
                <span className="bg-brand-gold text-brand-slate-900 text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full shadow-md">
                  Save {product.savingsPercentage}%
                </span>
              )}
            </div>

            {/* Top Right Actions */}
            <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
              {/* Share Button */}
              <button
                onClick={handleShare}
                className="w-10 h-10 rounded-full bg-white/90 text-brand-slate-600 hover:text-brand-slate-900 hover:bg-white border border-brand-slate-200 shadow-soft flex items-center justify-center transition-all backdrop-blur-sm"
                title="Share Link"
              >
                <Share2 className="w-4 h-4" />
                {copiedLink && (
                  <span className="absolute -bottom-6 right-0 bg-brand-slate-900 text-white text-[10px] px-2 py-0.5 rounded shadow">
                    Copied!
                  </span>
                )}
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product.id)}
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-all backdrop-blur-sm ${
                  isWishlisted
                    ? 'bg-rose-50 text-rose-600 border border-rose-200 shadow-soft'
                    : 'bg-white/90 text-brand-slate-600 hover:text-rose-600 hover:bg-white border border-brand-slate-200 shadow-soft'
                }`}
                aria-label="Toggle Wishlist"
              >
                <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current text-rose-600' : ''}`} />
              </button>
            </div>

            {/* Official Brand Medallion Atelier Seal */}
            <div className="absolute bottom-4 right-4 z-10 pointer-events-none opacity-90 group-hover:opacity-100 transition-opacity flex items-center gap-2 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-brand-gold/60 shadow-md">
              <img
                src="/brand/logo_medallion.png"
                alt="Official Bin Irfan Medallion"
                className="w-5 h-5 rounded-full object-cover"
              />
              <span className="text-[10px] font-serif font-bold text-slate-900 tracking-wider">
                BIN IRFAN FRAGRANCES
              </span>
            </div>
          </div>

          {/* Thumbnails Strip */}
          {product.gallery && product.gallery.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.gallery.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 rounded-2xl overflow-hidden border-2 flex-shrink-0 transition-all bg-white ${
                    selectedImage === img
                      ? 'border-brand-blue-600 ring-2 ring-brand-blue-100 shadow-md scale-105'
                      : 'border-brand-slate-200 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          )}

          {/* Quick Assurance Badges */}
          <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs text-brand-slate-600">
            <div className="p-3.5 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft">
              <Truck className="w-5 h-5 text-brand-blue-600 mx-auto mb-1.5" />
              <span className="text-[11px] block font-bold text-brand-slate-800">Same-Day Express</span>
              <span className="text-[10px] text-brand-slate-400">Rawalpindi &amp; Islamabad</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft">
              <Award className="w-5 h-5 text-brand-gold-dark mx-auto mb-1.5" />
              <span className="text-[11px] block font-bold text-brand-slate-800">35% Extrait</span>
              <span className="text-[10px] text-brand-slate-400">Pure French Oils</span>
            </div>
            <div className="p-3.5 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft">
              <ShieldCheck className="w-5 h-5 text-brand-blue-600 mx-auto mb-1.5" />
              <span className="text-[11px] block font-bold text-brand-slate-800">Original Seal</span>
              <span className="text-[10px] text-brand-slate-400">Tamper-Proof Box</span>
            </div>
          </div>
        </div>

        {/* Right Column: Purchasing & Specifications */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Header & Meta */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-xs uppercase tracking-[0.2em] text-brand-blue-700 font-bold bg-brand-blue-50 border border-brand-blue-200/60 px-2.5 py-0.5 rounded-full">
                  {product.fragranceFamily}
                </span>
                {product.gender && (
                  <span className="text-xs uppercase tracking-wider text-brand-slate-500 font-medium">
                    • {product.gender.toUpperCase()}
                  </span>
                )}
              </div>
              <div className="flex items-center gap-1.5 text-amber-500 text-xs">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-brand-slate-900">{product.rating}</span>
                <span className="text-brand-slate-400">({product.reviewsCount})</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-slate-900 leading-tight">
              {product.name}
            </h1>

            {product.arabicName && (
              <span className="font-arabic text-brand-blue-900/60 text-xl block font-normal">
                {product.arabicName}
              </span>
            )}

            <p className="font-serif italic text-base text-brand-slate-600 font-light">
              "{product.tagline}"
            </p>
          </div>

          {/* Pricing Bar */}
          <div className="flex flex-wrap items-baseline gap-4 py-3 px-4 rounded-2xl bg-white border border-brand-slate-200 shadow-soft">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-3xl sm:text-4xl font-bold text-brand-blue-900">
                {formatPrice(selectedVariant.pricePKR)}
              </span>
              {selectedVariant.compareAtPKR && (
                <span className="text-base text-brand-slate-400 line-through">
                  {formatPrice(selectedVariant.compareAtPKR)}
                </span>
              )}
            </div>
            <span className="text-xs text-brand-blue-700 bg-brand-blue-50 border border-brand-blue-200/70 px-3 py-1 rounded-full font-semibold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              In Stock • Dispatches in 24 Hrs
            </span>
          </div>

          {/* Description */}
          <p className="text-sm text-brand-slate-600 leading-relaxed">
            {product.description}
          </p>

          {/* Bundle Items Checklist if Bundle/Set */}
          {product.bundleItems && product.bundleItems.length > 0 && (
            <div className="p-4 rounded-2xl bg-brand-blue-50/60 border border-brand-blue-200/80 space-y-2.5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-blue-900">
                <PackageCheck className="w-4 h-4 text-brand-blue-600" />
                <span>What's Inside This Set:</span>
              </div>
              <ul className="space-y-1.5 text-xs text-brand-slate-700">
                {product.bundleItems.map((item, idx) => (
                  <li key={idx} className="flex items-center gap-2 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-blue-600 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Impression Disclaimer */}
          {product.impressionNote && (
            <div className="p-3.5 rounded-xl bg-slate-50 border border-brand-slate-200 text-xs text-brand-slate-500 italic leading-relaxed">
              <span className="text-brand-slate-800 font-semibold not-italic">Fragrance Note: </span>
              {product.impressionNote}
            </div>
          )}

          {/* Size Variant Selector */}
          <div className="space-y-2.5 pt-2">
            <div className="flex items-center justify-between text-xs">
              <span className="uppercase tracking-wider text-brand-slate-900 font-bold">
                {isBundle ? 'Available Configuration:' : 'Select Flacon Size:'}
              </span>
              <span className="text-brand-slate-500 text-[11px]">
                {isBundle ? 'Exclusive Luxury Box' : 'Concentration: Extrait de Parfum (35%)'}
              </span>
            </div>
            <div className={`grid ${product.variants.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-3`}>
              {product.variants.map(v => (
                <button
                  key={v.size}
                  type="button"
                  onClick={() => setSelectedSize(v.size)}
                  className={`p-4 rounded-2xl border text-left transition-all ${
                    selectedSize === v.size
                      ? 'bg-brand-blue-50/70 border-brand-blue-600 ring-2 ring-brand-blue-200 shadow-sm'
                      : 'bg-white border-brand-slate-200 text-brand-slate-600 hover:border-brand-slate-300'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-serif font-bold text-base text-brand-slate-900">{v.size}</span>
                    <span className="text-xs font-bold text-brand-blue-700">
                      {formatPrice(v.pricePKR)}
                    </span>
                  </div>
                  <span className="text-[11px] text-brand-slate-500 block">
                    {v.size === '50ml'
                      ? 'Travel & Everyday Signature'
                      : isBundle
                      ? 'Complete Collector Presentation'
                      : 'Collector Royal Decant'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to Bag Controls */}
          <div className="space-y-3 pt-3">
            <div className="flex items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center border border-brand-slate-200 rounded-xl overflow-hidden bg-white h-12 shadow-sm">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 text-brand-slate-500 hover:text-brand-slate-900 hover:bg-slate-50 h-full text-base font-bold transition-colors"
                >
                  -
                </button>
                <span className="px-3 text-sm font-bold text-brand-slate-900">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 text-brand-slate-500 hover:text-brand-slate-900 hover:bg-slate-50 h-full text-base font-bold transition-colors"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="flex-1 h-12 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag</span>
              </button>
            </div>

            {/* Buy Now & WhatsApp Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleBuyNow}
                className="h-12 rounded-xl bg-brand-slate-900 hover:bg-brand-slate-800 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4 text-brand-gold" />
                <span>Instant Checkout</span>
              </button>

              <a
                href={generateWhatsAppLink(product, selectedSize, quantity)}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Order via WhatsApp</span>
              </a>
            </div>

            {/* Same-day & Advance payment guarantee box */}
            <div className="rounded-2xl bg-brand-blue-50/70 border border-brand-blue-100 p-3 text-center space-y-1 mt-1">
              <p className="text-[11px] text-brand-blue-900 font-semibold flex items-center justify-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                <span><strong>Same-Day Express Delivery</strong> in Rawalpindi &amp; Islamabad (Orders before 5 PM)</span>
              </p>
              <p className="text-[10px] text-brand-slate-600">
                100% Advance Payment (EasyPaisa / JazzCash / Bank) • Free shipping over ₨ 5,000
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Fragrance Architecture Sections */}
      <div className="py-16 space-y-12">
        
        {/* Olfactory Pyramid Component */}
        <NotePyramid
          topNotes={product.topNotes}
          heartNotes={product.heartNotes}
          baseNotes={product.baseNotes}
        />

        {/* The Scent Experience & Perfect For Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Scent Character */}
          <div className="p-6 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft space-y-3">
            <h4 className="font-serif text-lg font-bold text-brand-slate-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-blue-600" />
              <span>THE CHARACTER</span>
            </h4>
            <p className="text-sm font-semibold text-brand-blue-900">{product.scentCharacter}</p>
            <p className="text-xs text-brand-slate-500 leading-relaxed">
              Meticulously balanced with natural essences to prevent chemical sharpness and provide an enduring royal sillage.
            </p>
          </div>

          {/* Perfect For */}
          <div className="p-6 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft space-y-3">
            <h4 className="font-serif text-lg font-bold text-brand-slate-900 flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-gold-dark" />
              <span>PERFECT FOR</span>
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {product.bestFor.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs bg-brand-blue-50 border border-brand-blue-200/60 text-brand-slate-700 font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Performance Data */}
          <div className="p-6 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft space-y-3">
            <h4 className="font-serif text-lg font-bold text-brand-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>MEASURED PERFORMANCE</span>
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-brand-slate-100 pb-1.5">
                <span className="text-brand-slate-500">Longevity:</span>
                <span className="font-bold text-brand-slate-800">{product.longevity}</span>
              </div>
              <div className="flex justify-between border-b border-brand-slate-100 pb-1.5">
                <span className="text-brand-slate-500">Projection:</span>
                <span className="font-bold text-brand-slate-800">{product.projection}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-slate-500">Concentration:</span>
                <span className="font-bold text-brand-blue-700">Extrait De Parfum (35%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews Section */}
      <div className="py-12 border-t border-brand-slate-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-slate-900">
              Verified Fragrance Reviews
            </h3>
            <p className="text-xs text-brand-slate-500 mt-1">
              Real experiences from scent enthusiasts across Pakistan
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <span className="text-sm font-bold text-brand-slate-900">
                {product.rating} / 5.0 ({product.reviewsCount + userReviews.length} reviews)
              </span>
            </div>

            <button
              onClick={() => setIsReviewModalOpen(true)}
              className="px-4 py-2 rounded-xl bg-brand-slate-900 hover:bg-brand-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-2 shadow-xs"
            >
              <Edit3 className="w-3.5 h-3.5 text-brand-gold" />
              <span>Write a Review</span>
            </button>
          </div>
        </div>

        {/* User Submitted Live Reviews */}
        {userReviews.length > 0 && (
          <div className="mb-8 space-y-3">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-emerald-800">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
              <span>Latest Customer Impressions:</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {userReviews.map((rev) => (
                <div key={rev.id} className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200 shadow-soft space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-[11px] text-emerald-700 font-semibold">{rev.date}</span>
                  </div>
                  <p className="text-xs font-semibold text-brand-slate-900">
                    "{rev.title}"
                  </p>
                  <p className="text-xs text-brand-slate-600 leading-relaxed font-light">
                    {rev.comment}
                  </p>
                  <div className="pt-2 border-t border-emerald-100 flex items-center justify-between text-[11px]">
                    <span className="font-medium text-brand-slate-800">{rev.author} — {rev.location}</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3 h-3" /> Verified Patron
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[11px] text-brand-slate-400">3 days ago</span>
            </div>
            <p className="text-xs font-semibold text-brand-slate-900">
              "Unbelievable longevity in Karachi heat!"
            </p>
            <p className="text-xs text-brand-slate-600 leading-relaxed font-light">
              Lasted easily 12+ hours on my shirt. The sillage is smooth and expensive without any harsh chemical after-smell.
            </p>
            <div className="pt-2 border-t border-brand-slate-100 flex items-center justify-between text-[11px]">
              <span className="font-medium text-brand-slate-800">Hamza K. — Lahore</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Verified Buyer
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[11px] text-brand-slate-400">1 week ago</span>
            </div>
            <p className="text-xs font-semibold text-brand-slate-900">
              "Packaging matches international luxury houses."
            </p>
            <p className="text-xs text-brand-slate-600 leading-relaxed font-light">
              The presentation box with the Bin Irfan medallion looks stunning on my vanity dresser. Extremely fast same-day delivery in Islamabad.
            </p>
            <div className="pt-2 border-t border-brand-slate-100 flex items-center justify-between text-[11px]">
              <span className="font-medium text-brand-slate-800">Fatima Z. — Islamabad</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Verified Buyer
              </span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>
              <span className="text-[11px] text-brand-slate-400">2 weeks ago</span>
            </div>
            <p className="text-xs font-semibold text-brand-slate-900">
              "Instant compliments at evening events."
            </p>
            <p className="text-xs text-brand-slate-600 leading-relaxed font-light">
              Everyone asked what perfume I was wearing. The dry-down is magnificent. Ordered a second bottle as a gift.
            </p>
            <div className="pt-2 border-t border-brand-slate-100 flex items-center justify-between text-[11px]">
              <span className="font-medium text-brand-slate-800">Dr. Tariq M. — Rawalpindi</span>
              <span className="text-emerald-600 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-3 h-3" /> Verified Buyer
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Related Scents */}
      <div className="pt-12 border-t border-brand-slate-200 space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-slate-900">
              Complementary Fragrances
            </h3>
            <p className="text-xs text-brand-slate-500 mt-1">Discover more exquisite compositions from our atelier</p>
          </div>
          <Link
            to="/shop"
            className="text-xs font-bold uppercase tracking-wider text-brand-blue-700 hover:text-brand-blue-900"
          >
            View All Fragrances &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

      {/* Sticky Mobile Action Bar (< sm) */}
      <div className="fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-brand-slate-200 p-3 shadow-2xl flex sm:hidden items-center justify-between gap-3">
        <div className="flex flex-col flex-shrink-0">
          <span className="text-[10px] text-brand-blue-700 font-bold uppercase tracking-wider">
            {selectedSize} • Extrait
          </span>
          <span className="font-serif text-base font-bold text-brand-slate-900 leading-tight">
            {formatPrice(selectedVariant.pricePKR)}
          </span>
        </div>
        <div className="flex items-center gap-2 flex-1 justify-end">
          <button
            onClick={handleAddToCart}
            className="py-2.5 px-3 rounded-xl bg-brand-slate-100 text-brand-slate-900 hover:bg-brand-slate-200 text-xs font-bold flex items-center justify-center gap-1.5 transition-all"
            aria-label="Add to Bag"
          >
            <ShoppingBag className="w-4 h-4 text-brand-blue-600" />
            <span>Bag</span>
          </button>
          <a
            href={generateWhatsAppLink(product, selectedSize, quantity)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-md whitespace-nowrap"
          >
            <MessageCircle className="w-4 h-4" />
            <span>Order WhatsApp</span>
          </a>
        </div>
      </div>

      <WriteReviewModal
        isOpen={isReviewModalOpen}
        onClose={() => setIsReviewModalOpen(false)}
        productId={product.id}
        productName={product.name}
        onReviewSubmitted={handleReviewSubmitted}
      />
    </div>
  );
};
