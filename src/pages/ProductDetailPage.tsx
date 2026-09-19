import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
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
  Share2
} from 'lucide-react';

export const ProductDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const { addToCart, formatPrice, generateWhatsAppLink } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const product = PRODUCTS.find(p => p.slug === slug) || PRODUCTS[0];

  const [selectedSize, setSelectedSize] = useState<'50ml' | '100ml'>(product.defaultSize);
  const [selectedImage, setSelectedImage] = useState<string>(product.image);
  const [quantity, setQuantity] = useState(1);
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = `${product.name} Extrait De Parfum | Bin Irfan Fragrance`;
    setSelectedImage(product.image);
    setSelectedSize(product.defaultSize);
  }, [product]);

  const selectedVariant = product.variants.find(v => v.size === selectedSize) || product.variants[0];
  const isWishlisted = isInWishlist(product.id);

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

  // Related products from same collection or random
  const relatedProducts = PRODUCTS.filter(p => p.id !== product.id).slice(0, 4);

  return (
    <div className="min-h-screen py-8 sm:py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-xs text-brand-cream/60 mb-8 overflow-x-auto whitespace-nowrap">
        <Link to="/" className="hover:text-brand-gold-light">Home</Link>
        <ChevronRight className="w-3.5 h-3.5 text-brand-gold/40" />
        <Link to="/shop" className="hover:text-brand-gold-light">Shop</Link>
        <ChevronRight className="w-3.5 h-3.5 text-brand-gold/40" />
        <span className="text-brand-gold-light font-medium">{product.name}</span>
      </nav>

      {/* Main Grid: Gallery + Purchasing */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 pb-16 border-b border-brand-gold/15">
        
        {/* Left Column: Image Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square w-full rounded-3xl overflow-hidden bg-brand-dark-card border border-brand-gold/30 shadow-luxury group">
            <img
              src={selectedImage}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            {/* Wishlist Button */}
            <button
              onClick={() => toggleWishlist(product.id)}
              className={`absolute top-4 right-4 z-10 w-11 h-11 rounded-full flex items-center justify-center transition-all ${
                isWishlisted
                  ? 'bg-brand-ruby text-white shadow-ruby-glow border border-brand-gold/60'
                  : 'bg-brand-dark/70 text-brand-cream hover:bg-brand-ruby border border-brand-gold/30'
              }`}
              aria-label="Toggle Wishlist"
            >
              <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current text-white' : ''}`} />
            </button>

            {/* Share Button */}
            <button
              onClick={handleShare}
              className="absolute top-4 left-4 z-10 p-2.5 rounded-full bg-brand-dark/70 text-brand-cream/80 hover:text-white hover:bg-brand-ruby border border-brand-gold/30 text-xs flex items-center gap-1.5 backdrop-blur-sm"
              title="Share Link"
            >
              <Share2 className="w-4 h-4" />
              {copiedLink && <span className="text-[10px] text-emerald-400">Copied!</span>}
            </button>
          </div>

          {/* Thumbnails Strip */}
          <div className="flex gap-3 overflow-x-auto pb-2">
            {product.gallery.map((img, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedImage(img)}
                className={`w-20 h-20 rounded-xl overflow-hidden border-2 flex-shrink-0 transition-all ${
                  selectedImage === img
                    ? 'border-brand-gold shadow-gold-glow scale-105'
                    : 'border-brand-gold/20 opacity-70 hover:opacity-100'
                }`}
              >
                <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>

          {/* Quick Assurance Badges */}
          <div className="grid grid-cols-3 gap-3 pt-2 text-center text-xs text-brand-cream/70">
            <div className="p-3 rounded-xl bg-brand-dark-surface border border-brand-gold/15">
              <Truck className="w-4 h-4 text-brand-gold mx-auto mb-1" />
              <span className="text-[11px] block font-medium">Nationwide COD</span>
            </div>
            <div className="p-3 rounded-xl bg-brand-dark-surface border border-brand-gold/15">
              <Award className="w-4 h-4 text-brand-gold mx-auto mb-1" />
              <span className="text-[11px] block font-medium">35% Extrait Strength</span>
            </div>
            <div className="p-3 rounded-xl bg-brand-dark-surface border border-brand-gold/15">
              <RotateCcw className="w-4 h-4 text-brand-gold mx-auto mb-1" />
              <span className="text-[11px] block font-medium">Safe Fragrance Seal</span>
            </div>
          </div>
        </div>

        {/* Right Column: Purchasing & Specifications */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Header & Meta */}
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">
                {product.fragranceFamily}
              </span>
              <div className="flex items-center gap-1.5 text-amber-400 text-xs">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-bold text-brand-cream">{product.rating}</span>
                <span className="text-brand-cream/40">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream leading-tight">
              {product.name}
            </h1>

            {product.arabicName && (
              <span className="font-arabic text-brand-gold-light/70 text-lg block font-normal">
                {product.arabicName}
              </span>
            )}

            <p className="font-serif italic text-sm text-brand-gold-light/90 font-light">
              "{product.tagline}"
            </p>
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-4 py-2 border-y border-brand-gold/15">
            <span className="font-serif text-3xl sm:text-4xl font-bold text-brand-gold-light">
              {formatPrice(selectedVariant.pricePKR)}
            </span>
            {selectedVariant.compareAtPKR && (
              <span className="text-base text-brand-cream/40 line-through">
                {formatPrice(selectedVariant.compareAtPKR)}
              </span>
            )}
            <span className="text-[11px] text-emerald-400 bg-emerald-950/60 border border-emerald-500/30 px-2 py-0.5 rounded-full font-semibold">
              In Stock • Dispatches in 24 Hrs
            </span>
          </div>

          {/* Short Narrative */}
          <p className="text-sm text-brand-cream/75 leading-relaxed font-light">
            {product.description}
          </p>

          {/* Impression Disclaimer if Applicable */}
          {product.impressionNote && (
            <div className="p-3 rounded-xl bg-brand-dark border border-brand-gold/20 text-[11px] text-brand-cream/60 italic leading-relaxed">
              <span className="text-brand-gold font-semibold">Brand Clarification: </span>
              {product.impressionNote}
            </div>
          )}

          {/* Size Variant Selector */}
          <div className="space-y-2 pt-2">
            <div className="flex items-center justify-between text-xs">
              <span className="uppercase tracking-wider text-brand-gold font-bold">
                Select Flacon Size:
              </span>
              <span className="text-brand-cream/50 text-[11px]">Concentration: Extrait de Parfum</span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {product.variants.map(v => (
                <button
                  key={v.size}
                  type="button"
                  onClick={() => setSelectedSize(v.size)}
                  className={`p-3.5 rounded-2xl border text-left transition-all ${
                    selectedSize === v.size
                      ? 'bg-brand-ruby text-white border-brand-gold shadow-ruby-glow'
                      : 'bg-brand-dark-card border-brand-gold/20 text-brand-cream/70 hover:border-brand-gold/40'
                  }`}
                >
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-serif font-bold text-base">{v.size}</span>
                    <span className="text-xs font-semibold text-brand-gold-light">
                      {formatPrice(v.pricePKR)}
                    </span>
                  </div>
                  <span className="text-[10px] text-brand-cream/70 block uppercase tracking-wider">
                    {v.size === '50ml' ? 'Travel & Daily Luxury' : 'Collector Royal Decant'}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + Add to Bag Controls */}
          <div className="space-y-3 pt-4">
            <div className="flex items-center gap-3">
              {/* Stepper */}
              <div className="flex items-center border border-brand-gold/30 rounded-xl overflow-hidden bg-brand-dark h-12">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 text-brand-cream/60 hover:text-white hover:bg-brand-ruby/40 h-full text-base"
                >
                  -
                </button>
                <span className="px-4 text-sm font-bold text-brand-cream">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 text-brand-cream/60 hover:text-white hover:bg-brand-ruby/40 h-full text-base"
                >
                  +
                </button>
              </div>

              {/* Add to Cart */}
              <button
                onClick={handleAddToCart}
                className="flex-1 h-12 rounded-xl bg-gradient-to-r from-brand-ruby to-brand-ruby-light hover:from-brand-ruby-light hover:to-brand-ruby text-white text-xs font-bold uppercase tracking-widest transition-all shadow-ruby-glow flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag</span>
              </button>
            </div>

            {/* Buy Now & WhatsApp Actions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <button
                onClick={handleBuyNow}
                className="h-12 rounded-xl bg-brand-gold hover:bg-brand-gold-light text-brand-dark text-xs font-bold uppercase tracking-widest transition-all shadow-gold-glow flex items-center justify-center gap-2"
              >
                <Zap className="w-4 h-4" />
                <span>Instant Checkout</span>
              </button>

              <a
                href={generateWhatsAppLink(product, selectedSize, quantity)}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 rounded-xl bg-emerald-950/40 border border-emerald-500/50 hover:bg-emerald-900/60 text-emerald-300 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Order via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Fragrance Architecture Sections (Sections 8, 9) */}
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
          <div className="p-6 rounded-2xl bg-brand-dark-card border border-brand-gold/20 space-y-3">
            <h4 className="font-serif text-lg font-bold text-brand-gold-light flex items-center gap-2">
              <Award className="w-4 h-4 text-brand-gold" />
              <span>THE CHARACTER</span>
            </h4>
            <p className="text-sm font-semibold text-brand-cream">{product.scentCharacter}</p>
            <p className="text-xs text-brand-cream/70 leading-relaxed font-light">
              Meticulously balanced with natural essences to prevent chemical sharpness and provide an enduring royal sillage.
            </p>
          </div>

          {/* Perfect For */}
          <div className="p-6 rounded-2xl bg-brand-dark-card border border-brand-gold/20 space-y-3">
            <h4 className="font-serif text-lg font-bold text-brand-gold-light flex items-center gap-2">
              <Clock className="w-4 h-4 text-brand-gold" />
              <span>PERFECT FOR</span>
            </h4>
            <div className="flex flex-wrap gap-2 pt-1">
              {product.bestFor.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded-lg text-xs bg-brand-dark border border-brand-gold/20 text-brand-cream/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Performance Data */}
          <div className="p-6 rounded-2xl bg-brand-dark-card border border-brand-gold/20 space-y-3">
            <h4 className="font-serif text-lg font-bold text-brand-gold-light flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-gold" />
              <span>MEASURED PERFORMANCE</span>
            </h4>
            <div className="space-y-2 text-xs">
              <div className="flex justify-between border-b border-brand-gold/10 pb-1.5">
                <span className="text-brand-cream/60">Longevity:</span>
                <span className="font-semibold text-brand-gold-light">{product.longevity}</span>
              </div>
              <div className="flex justify-between border-b border-brand-gold/10 pb-1.5">
                <span className="text-brand-cream/60">Projection:</span>
                <span className="font-semibold text-brand-gold-light">{product.projection}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-brand-cream/60">Concentration:</span>
                <span className="font-semibold text-brand-gold-light">Extrait De Parfum (35%)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related Scents */}
      <div className="pt-12 border-t border-brand-gold/20 space-y-8">
        <div className="flex items-center justify-between">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-cream">
            Complementary Fragrances
          </h3>
          <Link
            to="/shop"
            className="text-xs font-semibold uppercase tracking-wider text-brand-gold hover:text-brand-gold-light"
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
    </div>
  );
};
