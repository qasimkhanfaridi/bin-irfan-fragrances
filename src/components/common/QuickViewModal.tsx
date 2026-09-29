import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Product } from '../../types/product';
import { useCart } from '../../context/CartContext';
import { X, ShoppingBag, MessageCircle, Star, ShieldCheck, ArrowRight } from 'lucide-react';

interface QuickViewModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, isOpen, onClose }) => {
  const [selectedSize, setSelectedSize] = useState<string>(product.defaultSize);
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
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm" onClick={onClose} />

      {/* Modal Card */}
      <div className="relative w-full max-w-4xl bg-white border border-brand-blue-soft rounded-3xl shadow-2xl overflow-hidden z-10 max-h-[90vh] flex flex-col md:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-brand-blue-soft text-brand-blue-dark hover:bg-brand-blue-light transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Gallery */}
        <div className="w-full md:w-1/2 bg-brand-blue-soft/30 p-6 flex flex-col justify-center items-center relative">
          <div className="relative w-full aspect-square max-w-sm rounded-2xl overflow-hidden border border-brand-blue-soft shadow-md bg-white">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {/* Authentic Brand Medallion Atelier Seal */}
            <div className="absolute bottom-3 right-3 z-10 pointer-events-none opacity-90 flex items-center gap-1.5 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-full border border-brand-gold/60 shadow-sm">
              <img
                src="/brand/logo_medallion.png"
                alt="Official Bin Irfan Medallion"
                className="w-4 h-4 rounded-full object-cover"
              />
              <span className="text-[9px] font-serif font-bold text-slate-900 tracking-wider">
                BIN IRFAN
              </span>
            </div>
          </div>
          <div className="mt-4 flex items-center gap-2 text-xs text-brand-blue-dark font-medium">
            <ShieldCheck className="w-4 h-4 text-brand-blue" />
            <span>Pure Extrait De Parfum • Guaranteed 12+ Hour Sillage</span>
          </div>
        </div>

        {/* Product Details & Actions */}
        <div className="w-full md:w-1/2 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto max-h-[85vh] bg-white">
          <div className="space-y-4">
            {/* Family & Rating */}
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-brand-blue font-bold">
                {product.fragranceFamily}
              </span>
              <div className="flex items-center gap-1 text-amber-500 text-xs">
                <Star className="w-3.5 h-3.5 fill-current" />
                <span className="font-bold text-slate-800">{product.rating}</span>
                <span className="text-slate-400">({product.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* Title */}
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-brand-blue-deep leading-tight">
                {product.name}
              </h3>
              {product.arabicName && (
                <span className="font-arabic text-brand-blue-dark/60 text-sm block mt-0.5">{product.arabicName}</span>
              )}
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-2xl font-bold text-brand-blue-deep">
                {formatPrice(variant.pricePKR)}
              </span>
              {variant.compareAtPKR && (
                <span className="text-sm text-slate-400 line-through">
                  {formatPrice(variant.compareAtPKR)}
                </span>
              )}
            </div>

            {/* Short Desc */}
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
              {product.shortDescription}
            </p>

            {/* Size Selector */}
            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-blue-dark block">
                Select Flacon Size:
              </label>
              <div className="flex gap-2.5 flex-wrap">
                {product.variants.map(v => (
                  <button
                    key={v.size}
                    type="button"
                    onClick={() => setSelectedSize(v.size)}
                    className={`flex-1 py-2 px-3 rounded-xl border text-xs font-bold transition-all ${
                      selectedSize === v.size
                        ? 'bg-brand-blue-dark text-white border-brand-blue-dark shadow-xs'
                        : 'bg-brand-blue-soft text-slate-700 border-brand-blue-soft hover:border-brand-blue-light'
                    }`}
                  >
                    {v.size} — {formatPrice(v.pricePKR)}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-1">
              <span className="text-xs uppercase tracking-wider text-brand-blue-dark font-bold">Quantity:</span>
              <div className="flex items-center border border-brand-blue-soft rounded-xl overflow-hidden bg-brand-blue-soft/50">
                <button
                  type="button"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1.5 text-slate-600 hover:text-brand-blue-dark hover:bg-brand-blue-light/50 text-sm font-bold"
                >
                  -
                </button>
                <span className="px-4 py-1.5 text-xs font-bold text-slate-900">{quantity}</span>
                <button
                  type="button"
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1.5 text-slate-600 hover:text-brand-blue-dark hover:bg-brand-blue-light/50 text-sm font-bold"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pt-6 border-t border-brand-blue-soft mt-6">
            <div className="flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={handleAddToCart}
                className="flex-1 py-3 px-4 rounded-xl bg-brand-blue-dark hover:bg-brand-blue-navy text-white text-xs font-bold uppercase tracking-wider transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <ShoppingBag className="w-4 h-4 text-brand-gold" />
                <span>Add to Bag</span>
              </button>

              <a
                href={generateWhatsAppLink(product, selectedSize, quantity)}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3 px-4 rounded-xl bg-emerald-50 border border-emerald-300 hover:bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-xs"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Order on WhatsApp</span>
              </a>
            </div>

            <div className="text-center pt-1">
              <Link
                to={`/shop/${product.slug}`}
                onClick={onClose}
                className="text-xs text-brand-blue hover:text-brand-blue-dark inline-flex items-center gap-1 font-bold tracking-wide"
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
