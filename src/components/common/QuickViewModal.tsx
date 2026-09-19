import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { X, ShoppingBag, MessageCircle, Star, ShieldCheck, ArrowRight } from 'lucide-react';
import { NotePyramid } from './NotePyramid';

interface QuickViewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<'50ml' | '100ml'>(product.defaultSize);
  const [quantity, setQuantity] = useState(1);
  const { addToCart, formatPrice, generateWhatsAppLink } = useCart();

  if (!isOpen) return null;

  const variant = product.variants.find(v => v.size === selectedSize) || product.variants[0];

  const handleAddToCart = () => {
    addToCart(product, selectedSize, quantity);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-brand-dark-card border border-brand-gold/30 rounded-3xl shadow-luxury overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-dark/80 text-brand-cream/70 hover:text-white hover:bg-brand-ruby transition-colors border border-brand-gold/20"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Gallery */}
        <div className="w-full md:w-1/2 bg-brand-dark/90 p-6 flex flex-col justify-center items-center relative">
          <div className="w-full aspect-square max-w-sm rounded-2xl overflow-hidden border border-brand-gold/20 shadow-2xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-brand-gold/80">
            <ShieldCheck className="w-4 h-4 text-brand-gold" />
            <span>Pure Extrait De Parfum • Guaranteed Beast Projection</span>
          </div>
        </div>

        {/* Product Details & Actions */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh]">
          <div className="space-y-4">
            {/* Family & Rating */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-brand-gold font-semibold">
                {product.fragranceFamily}
              </span>
              <div className="flex items-center gap-1 text-amber-400 text-xs">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-bold text-brand-cream">{product.rating}</span>
                <span className="text-brand-cream/40">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* Title */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-cream leading-tight">
                {product.name}
              </h3>
              {product.arabicName && (
                <span className="font-arabic text-brand-gold-light/60 text-sm">{product.arabicName}</span>
              )}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-2xl font-bold text-brand-gold-light">
                {formatPrice(variant.pricePKR)}
              </span>
              {variant.compareAtPKR && (
                <span className="text-sm text-brand-cream/40 line-through">
                  {formatPrice(variant.compareAtPKR)}
                </span>
              )}
            </div>

            {/* Short Desc */}
            <p className="text-sm text-brand-cream/70 leading-relaxed">
              {product.shortDescription}
            </p>

            {/* Size Selector */}
            <div className="space-y-2">
              <label className="text-xs font-semibold uppercase tracking-wider text-brand-gold-light block">
                Select Flacon Size:
              </label>
              <div className="flex gap-3">
                {product.variants.map(v => (
                  <button
                    key={v.size}
                    type="button"
                    onClick={() => setSelectedSize(v.size)}
                    className={`flex-1 py-2.5 px-4 rounded-xl border text-xs font-semibold transition-all ${
                      selectedSize === v.size
                        ? 'bg-brand-ruby text-white border-brand-gold shadow-ruby-glow'
                        : 'bg-brand-dark/50 text-brand-cream/70 border-brand-gold/20 hover:border-brand-gold/40'
                    }`}
                  >
                    {v.size} — {formatPrice(v.pricePKR)}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs uppercase tracking-wider text-brand-gold-light font-semibold">Quantity:</span>
              <div className="flex items-center border border-brand-gold/30 rounded-xl overflow-hidden bg-brand-dark">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-brand-cream/70 hover:text-white hover:bg-brand-ruby/40 text-sm"
                >
                  -
                </button>
                <span className="px-4 py-1.5 text-xs font-bold text-brand-cream">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-brand-cream/70 hover:text-white hover:bg-brand-ruby/40 text-sm"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-6 border-t border-brand-gold/15 mt-6">
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3 px-5 rounded-xl bg-gradient-to-r from-brand-ruby to-brand-ruby-light hover:from-brand-ruby-light hover:to-brand-ruby text-white text-xs font-bold uppercase tracking-widest transition-all shadow-ruby-glow flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Add to Bag</span>
              </button>

              <a
                href={generateWhatsAppLink(product, selectedSize, quantity)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-5 rounded-xl bg-emerald-900/40 border border-emerald-500/50 hover:bg-emerald-800/60 text-emerald-300 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
              >
                <MessageCircle className="w-4 h-4 text-emerald-400" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            <div className="text-center pt-1">
              <Link
                to={`/shop/${product.slug}`}
                onClick={onClose}
                className="text-xs text-brand-gold hover:text-brand-gold-light inline-flex items-center gap-1 font-semibold"
              >
                <span>View Full Fragrance Notes & Details</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
