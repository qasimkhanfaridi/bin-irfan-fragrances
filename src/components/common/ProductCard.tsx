import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { useWishlist } from '../../context/WishlistContext';
import { Heart, ShoppingBag, Eye, Star, Sparkles } from 'lucide-react';
import { QuickViewModal } from './QuickViewModal';

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const [selectedSize, setSelectedSize] = useState<'50ml' | '100ml'>(product.defaultSize);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { addToCart, formatPrice } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const selectedVariant = product.variants.find(v => v.size === selectedSize) || product.variants[0];
  const isWishlisted = isInWishlist(product.id);

  return (
    <>
      <div className="group relative flex flex-col bg-brand-dark-card rounded-2xl border border-brand-gold/15 overflow-hidden transition-all duration-500 hover:border-brand-gold/45 hover:shadow-luxury">
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
          {product.isBestSeller && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-ruby text-white border border-brand-gold/40 shadow-sm flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-brand-gold-light" /> Signature Pick
            </span>
          )}
          {product.isNew && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-900/80 text-emerald-200 border border-emerald-500/40">
              New Arrival
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            toggleWishlist(product.id);
          }}
          aria-label="Toggle Wishlist"
          className={`absolute top-3 right-3 z-10 w-9 h-9 rounded-full flex items-center justify-center transition-all ${
            isWishlisted
              ? 'bg-brand-ruby text-white border border-brand-gold/50 shadow-ruby-glow'
              : 'bg-brand-dark/70 backdrop-blur-sm text-brand-cream/70 hover:text-white hover:bg-brand-ruby/80 border border-brand-gold/20'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current text-white' : ''}`} />
        </button>

        {/* Image Container with Hover Quick Actions */}
        <div className="relative w-full aspect-square bg-brand-dark/80 overflow-hidden flex items-center justify-center">
          <Link to={`/shop/${product.slug}`} className="w-full h-full block">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
              loading="lazy"
            />
          </Link>

          {/* Quick View Overlay Bar */}
          <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex gap-2">
            <button
              onClick={() => setIsQuickViewOpen(true)}
              className="flex-1 py-2.5 px-3 rounded-xl bg-brand-dark-surface/90 backdrop-blur-md border border-brand-gold/30 hover:border-brand-gold text-brand-gold-light text-xs font-semibold flex items-center justify-center gap-1.5 shadow-lg hover:bg-brand-dark transition-all"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
            <button
              onClick={() => addToCart(product, selectedSize, 1)}
              className="py-2.5 px-3 rounded-xl bg-brand-ruby hover:bg-brand-ruby-light text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-ruby-glow transition-all"
              title="Add to Cart"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Add</span>
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between">
          <div>
            {/* Fragrance Family & Rating */}
            <div className="flex items-center justify-between gap-2 mb-1.5 text-xs">
              <span className="text-brand-gold/90 font-medium tracking-wide uppercase text-[10px] sm:text-[11px]">
                {product.fragranceFamily}
              </span>
              <div className="flex items-center gap-1 text-amber-400 text-[11px]">
                <Star className="w-3 h-3 fill-current" />
                <span className="font-semibold text-brand-cream/80">{product.rating}</span>
                <span className="text-brand-cream/40">({product.reviewsCount})</span>
              </div>
            </div>

            {/* Product Title */}
            <Link to={`/shop/${product.slug}`} className="block group-hover:text-brand-gold-light transition-colors">
              <h3 className="font-serif text-base sm:text-lg font-bold text-brand-cream leading-snug">
                {product.name}
              </h3>
            </Link>

            {/* Short notes preview */}
            <p className="text-xs text-brand-cream/60 line-clamp-1 mt-1 font-light">
              {product.topNotes.slice(0, 2).join(' • ')} • {product.baseNotes[0]}
            </p>
          </div>

          {/* Size Selector & Price */}
          <div className="mt-4 pt-3 border-t border-brand-gold/10">
            <div className="flex items-center justify-between mb-3">
              {/* Size Pills */}
              <div className="flex items-center gap-1.5">
                {product.variants.map(v => (
                  <button
                    key={v.size}
                    type="button"
                    onClick={() => setSelectedSize(v.size)}
                    className={`px-2 py-0.5 text-[10px] font-semibold rounded border transition-all ${
                      selectedSize === v.size
                        ? 'bg-brand-ruby text-white border-brand-gold/50 shadow-sm'
                        : 'bg-brand-dark/50 text-brand-cream/60 border-brand-gold/15 hover:border-brand-gold/40'
                    }`}
                  >
                    {v.size}
                  </button>
                ))}
              </div>

              {/* Price */}
              <div className="text-right">
                <span className="font-serif text-base font-bold text-brand-gold-light">
                  {formatPrice(selectedVariant.pricePKR)}
                </span>
                {selectedVariant.compareAtPKR && (
                  <span className="block text-[11px] text-brand-cream/40 line-through">
                    {formatPrice(selectedVariant.compareAtPKR)}
                  </span>
                )}
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => addToCart(product, selectedSize, 1)}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-brand-dark-surface to-brand-card hover:from-brand-ruby hover:to-brand-ruby-dark border border-brand-gold/30 hover:border-brand-gold text-brand-cream text-xs font-semibold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 group-hover:shadow-gold-glow"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-brand-gold" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick View Modal */}
      <QuickViewModal
        product={product}
        isOpen={isQuickViewOpen}
        onClose={() => setIsQuickViewOpen(false)}
      />
    </>
  );
};
