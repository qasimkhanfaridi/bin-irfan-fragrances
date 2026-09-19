import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../../context/CartContext';
import { X, Trash2, ShoppingBag, ArrowRight, MessageCircle, Truck, Sparkles } from 'lucide-react';

export const CartDrawer: React.FC = () => {
  const {
    cart,
    cartCount,
    cartTotalPKR,
    removeFromCart,
    updateQuantity,
    isDrawerOpen,
    closeDrawer,
    formatPrice,
    generateCartWhatsAppLink
  } = useCart();
  const navigate = useNavigate();

  if (!isDrawerOpen) return null;

  const freeShippingThreshold = 5000;
  const remainingForFreeShipping = Math.max(0, freeShippingThreshold - cartTotalPKR);
  const progressPercent = Math.min(100, Math.round((cartTotalPKR / freeShippingThreshold) * 100));

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
        onClick={closeDrawer}
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-brand-dark-card border-l border-brand-gold/30 shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-brand-gold/15 bg-brand-dark-surface">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag className="w-5 h-5 text-brand-gold" />
                <h3 className="font-serif text-lg font-bold text-brand-cream">
                  Your Fragrance Bag
                </h3>
                <span className="text-xs bg-brand-ruby px-2 py-0.5 rounded-full text-white font-semibold">
                  {cartCount}
                </span>
              </div>
              <button
                onClick={closeDrawer}
                className="p-1.5 rounded-full text-brand-cream/60 hover:text-white hover:bg-brand-ruby/40 transition-colors border border-brand-gold/20"
                aria-label="Close Bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Meter */}
            <div className="mt-4 pt-3 border-t border-brand-gold/10">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="flex items-center gap-1.5 text-brand-cream/80">
                  <Truck className="w-3.5 h-3.5 text-brand-gold" />
                  {remainingForFreeShipping === 0 ? (
                    <span className="text-emerald-400 font-semibold">
                      🎉 Free Nationwide Shipping Unlocked!
                    </span>
                  ) : (
                    <span>
                      Add <strong className="text-brand-gold-light">{formatPrice(remainingForFreeShipping)}</strong> for Free Shipping
                    </span>
                  )}
                </span>
                <span className="text-brand-gold font-bold text-[11px]">{progressPercent}%</span>
              </div>
              <div className="w-full h-1.5 bg-brand-dark rounded-full overflow-hidden border border-brand-gold/20">
                <div
                  className="h-full bg-gradient-to-r from-brand-gold-dark to-brand-gold transition-all duration-500"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-dark border border-brand-gold/20 flex items-center justify-center text-brand-gold/40">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-cream">
                  Your Bag Is Empty
                </h4>
                <p className="text-xs text-brand-cream/60 max-w-xs mx-auto">
                  Explore our royal collection of 35% Extrait De Parfum perfumes to find your signature scent.
                </p>
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-ruby hover:bg-brand-ruby-light text-white text-xs font-bold uppercase tracking-wider transition-all shadow-ruby-glow mt-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Discover Fragrances</span>
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 rounded-xl bg-brand-dark/60 border border-brand-gold/15 relative group"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-lg object-cover border border-brand-gold/20 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          to={`/shop/${item.product.slug}`}
                          onClick={closeDrawer}
                          className="font-serif text-sm font-bold text-brand-cream hover:text-brand-gold-light truncate block"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-brand-cream/40 hover:text-red-400 p-0.5 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] text-brand-gold font-medium">
                        Flacon: {item.size}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center border border-brand-gold/30 rounded-lg overflow-hidden bg-brand-dark text-xs">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-brand-cream/60 hover:text-white"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-[11px] font-bold text-brand-cream">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-brand-cream/60 hover:text-white"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-serif text-sm font-bold text-brand-gold-light">
                        {formatPrice(item.pricePKR * item.quantity)}
                      </span>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Drawer Footer / Checkout */}
          {cart.length > 0 && (
            <div className="p-6 border-t border-brand-gold/20 bg-brand-dark-surface space-y-4">
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs text-brand-cream/70">
                  <span>Subtotal</span>
                  <span className="font-serif font-semibold text-brand-cream">
                    {formatPrice(cartTotalPKR)}
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs text-brand-cream/70">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold text-brand-gold-light">
                    {remainingForFreeShipping === 0 ? 'FREE' : formatPrice(250)}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-brand-gold/15 text-sm font-bold">
                  <span className="text-brand-cream">Estimated Total</span>
                  <span className="font-serif text-lg text-brand-gold-light">
                    {formatPrice(cartTotalPKR + (remainingForFreeShipping === 0 ? 0 : 250))}
                  </span>
                </div>
              </div>

              <div className="space-y-2.5 pt-2">
                {/* Standard Checkout */}
                <button
                  onClick={() => {
                    closeDrawer();
                    navigate('/checkout');
                  }}
                  className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-brand-ruby to-brand-ruby-light hover:from-brand-ruby-light hover:to-brand-ruby text-white text-xs font-bold uppercase tracking-widest transition-all shadow-ruby-glow flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* WhatsApp Express Checkout */}
                <a
                  href={generateCartWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-900/40 border border-emerald-500/50 hover:bg-emerald-800/60 text-emerald-300 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Order via WhatsApp (1-Click)</span>
                </a>
              </div>

              <p className="text-[10px] text-center text-brand-cream/50 pt-1">
                🔒 Safe & Secure Checkout • Cash on Delivery Available
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
