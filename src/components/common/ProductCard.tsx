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
  const [selectedSize, setSelectedSize] = useState<string>(product.defaultSize);
  const [isQuickViewOpen, setIsQuickViewOpen] = useState(false);
  const { addToCart, formatPrice } = useCart();
  const { toggleWishlist, isInWishlist } = useWishlist();

  const selectedVariant = product.variants.find(v => v.size === selectedSize) || product.variants[0];
  const isWishlisted = isInWishlist(product.id);

  return (
    <>
      <div className="group relative flex flex-col bg-white rounded-3xl border border-brand-blue-soft hover:border-brand-blue/50 overflow-hidden transition-all duration-500 shadow-luxury-card hover:shadow-luxury-hover">
        
        {/* Top Badges */}
        <div className="absolute top-3 left-3 z-10 flex flex-col gap-1.5 pointer-events-none">
          {product.badge && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-blue-dark text-white shadow-xs flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-brand-gold" />
              <span>{product.badge}</span>
            </span>
          )}
          {!product.badge && product.isBestSeller && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-blue-dark text-white shadow-xs flex items-center gap-1">
              <Sparkles className="w-2.5 h-2.5 text-brand-gold" /> Best Seller
            </span>
          )}
          {product.isNew && (
            <span className="px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-brand-blue-soft text-brand-blue-dark border border-brand-blue-light font-semibold">
              New Arrival
            </span>
          )}
          {product.gender && (
            <span className="px-2 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider bg-white/90 backdrop-blur-sm text-slate-700 border border-slate-200">
              {product.gender}
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
              ? 'bg-brand-blue-dark text-white shadow-xs'
              : 'bg-white/90 backdrop-blur-sm text-slate-600 hover:text-brand-blue-dark hover:bg-brand-blue-soft border border-brand-blue-soft shadow-xs'
          }`}
        >
          <Heart className={`w-4 h-4 ${isWishlisted ? 'fill-current text-white' : ''}`} />
        </button>

        {/* Image Container with Hover Quick Actions */}
        <div className="relative w-full aspect-square bg-brand-blue-soft/30 overflow-hidden flex items-center justify-center">
          <Link to={`/shop/${product.slug}`} className="w-full h-full block">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-106"
              loading="lazy"
            />
          </Link>

          {/* Quick View Overlay Bar */}
          <div className="absolute inset-x-3 bottom-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 flex gap-2">
            <button
              onClick={() => setIsQuickViewOpen(true)}
              className="flex-1 py-2 px-3 rounded-xl bg-white/95 backdrop-blur-md border border-brand-blue-light hover:border-brand-blue text-brand-blue-dark text-xs font-semibold flex items-center justify-center gap-1.5 shadow-sm hover:bg-white transition-all"
            >
              <Eye className="w-3.5 h-3.5" />
              <span>Quick View</span>
            </button>
            <button
              onClick={() => addToCart(product, selectedSize, 1)}
              className="py-2 px-3 rounded-xl bg-brand-blue-dark hover:bg-brand-blue-navy text-white text-xs font-semibold flex items-center justify-center gap-1.5 shadow-xs transition-all"
              title="Add to Cart"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Add</span>
            </button>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-4 sm:p-5 flex flex-col flex-grow justify-between bg-white">
          <div>
            {/* Fragrance Family & Rating */}
            <div className="flex items-center justify-between gap-2 mb-1.5 text-xs">
              <span className="text-brand-blue font-bold tracking-wider uppercase text-[10px] sm:text-[11px]">
                {product.fragranceFamily}
              </span>
              <div className="flex items-center gap-1 text-amber-500 text-[11px]">
                <Star className="w-3 h-3 fill-current" />
                <span className="font-bold text-slate-800">{product.rating}</span>
                <span className="text-slate-400">({product.reviewsCount})</span>
              </div>
            </div>

            {/* Product Title */}
            <Link to={`/shop/${product.slug}`} className="block group-hover:text-brand-blue transition-colors">
              <h3 className="font-serif text-base sm:text-lg font-bold text-brand-blue-deep leading-snug">
                {product.name}
              </h3>
            </Link>

            {/* Short notes preview */}
            <p className="text-xs text-slate-500 line-clamp-1 mt-1 font-normal">
              {product.topNotes.slice(0, 2).join(' • ')} • {product.baseNotes[0]}
            </p>
          </div>

          {/* Size Selector & Price */}
          <div className="mt-4 pt-3 border-t border-brand-blue-soft">
            <div className="flex items-center justify-between mb-3">
              {/* Size Pills */}
              <div className="flex items-center gap-1.5">
                {product.variants.map(v => (
                  <button
                    key={v.size}
                    type="button"
                    onClick={() => setSelectedSize(v.size)}
                    className={`px-2.5 py-1 text-[10px] font-bold rounded-lg border transition-all ${
                      selectedSize === v.size
                        ? 'bg-brand-blue-dark text-white border-brand-blue-dark shadow-xs'
                        : 'bg-brand-blue-soft text-slate-700 border-brand-blue-soft hover:border-brand-blue-light'
                    }`}
                  >
                    {v.size}
                  </button>
                ))}
              </div>

              {/* Price */}
              <div className="text-right">
                <span className="font-serif text-base sm:text-lg font-bold text-brand-blue-deep">
                  {formatPrice(selectedVariant.pricePKR)}
                </span>
                {selectedVariant.compareAtPKR && (
                  <span className="block text-[11px] text-slate-400 line-through">
                    {formatPrice(selectedVariant.compareAtPKR)}
                  </span>
                )}
              </div>
            </div>

            {/* Primary Action Button */}
            <button
              onClick={() => addToCart(product, selectedSize, 1)}
              className="w-full py-2.5 px-4 rounded-xl bg-brand-blue-dark hover:bg-brand-blue-navy text-white text-xs font-bold tracking-wider uppercase transition-all duration-300 flex items-center justify-center gap-2 shadow-xs group-hover:shadow-soft-blue"
            >
              <ShoppingBag className="w-3.5 h-3.5 text-brand-gold" />
              <span>Add to Bag</span>
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
