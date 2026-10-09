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
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={closeDrawer}
      />

      {/* Slide-over panel */}
      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-white border-l border-brand-slate-200 shadow-2xl flex flex-col justify-between">
          
          {/* Drawer Header */}
          <div className="p-6 border-b border-brand-slate-100 bg-brand-light-bg/80">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShoppingBag className="w-5 h-5 text-brand-blue-600" />
                <h3 className="font-serif text-lg font-bold text-brand-slate-900">
                  Your Fragrance Bag
                </h3>
                <span className="text-xs bg-brand-blue-600 px-2 py-0.5 rounded-full text-white font-bold">
                  {cartCount}
                </span>
              </div>
              <button
                onClick={closeDrawer}
                className="p-2 rounded-full text-brand-slate-400 hover:text-brand-slate-700 hover:bg-brand-slate-100 transition-colors"
                aria-label="Close Bag"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Free Shipping Meter */}
            <div className="mt-4 pt-3 border-t border-brand-slate-200">
              <div className="flex items-center justify-between text-xs mb-1.5">
                <span className="flex items-center gap-1.5 text-brand-slate-700">
                  <Truck className="w-3.5 h-3.5 text-brand-blue-600" />
                  {remainingForFreeShipping === 0 ? (
                    <span className="text-emerald-600 font-bold">
                      🎉 Free Express Delivery Unlocked!
                    </span>
                  ) : (
                    <span>
                      Add <strong className="text-brand-blue-700">{formatPrice(remainingForFreeShipping)}</strong> for Free Delivery
                    </span>
                  )}
                </span>
                <span className="text-brand-blue-700 font-bold text-[11px]">{progressPercent}%</span>
              </div>
              <div className="w-full h-2 bg-brand-slate-100 rounded-full overflow-hidden border border-brand-slate-200/80">
                <div
                  className="h-full bg-gradient-to-r from-brand-blue-400 to-brand-blue-600 transition-all duration-500 rounded-full"
                  style={{ width: `${progressPercent}%` }}
                />
              </div>
            </div>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 bg-brand-light-bg/40">
            {cart.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 mx-auto rounded-full bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-400">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h4 className="font-serif text-lg font-bold text-brand-slate-900">
                  Your Bag Is Empty
                </h4>
                <p className="text-xs text-brand-slate-500 max-w-xs mx-auto">
                  Explore our luxury collection of 35% Extrait De Parfum flacons and discovery sets.
                </p>
                <Link
                  to="/shop"
                  onClick={closeDrawer}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md mt-2"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Discover Fragrances</span>
                </Link>
              </div>
            ) : (
              cart.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-4 p-3.5 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft relative group"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 rounded-xl object-cover border border-brand-slate-100 flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-2">
                        <Link
                          to={`/shop/${item.product.slug}`}
                          onClick={closeDrawer}
                          className="font-serif text-sm font-bold text-brand-slate-900 hover:text-brand-blue-600 truncate block transition-colors"
                        >
                          {item.product.name}
                        </Link>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="text-brand-slate-400 hover:text-rose-600 p-0.5 transition-colors"
                          aria-label="Remove item"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="text-[11px] text-brand-blue-700 font-semibold">
                        Flacon: {item.size}
                      </span>
                    </div>

                    <div className="flex items-center justify-between mt-2.5">
                      <div className="flex items-center border border-brand-slate-200 rounded-lg overflow-hidden bg-brand-light-bg text-xs">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-brand-slate-500 hover:text-brand-slate-900 hover:bg-brand-slate-200 transition-colors"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-[11px] font-bold text-brand-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-brand-slate-500 hover:text-brand-slate-900 hover:bg-brand-slate-200 transition-colors"
                        >
                          +
                        </button>
                      </div>

                      <span className="font-serif text-sm font-bold text-brand-slate-900">
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
            <div className="p-6 border-t border-brand-slate-200 bg-white space-y-4">
              <div className="space-y-1.5 text-xs text-brand-slate-600">
                <div className="flex items-center justify-between">
                  <span>Subtotal</span>
                  <span className="font-serif font-bold text-brand-slate-900">
                    {formatPrice(cartTotalPKR)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span>Nationwide Express Delivery</span>
                  <span className="font-bold text-brand-blue-700">
                    {remainingForFreeShipping === 0 ? 'FREE' : formatPrice(250)}
                  </span>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-brand-slate-100 text-sm font-bold text-brand-slate-900">
                  <span>Total</span>
                  <span className="font-serif text-xl text-brand-blue-900">
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
                  className="w-full py-3.5 px-4 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                {/* WhatsApp Express Checkout */}
                <a
                  href={generateCartWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order via WhatsApp (1-Click)</span>
                </a>
              </div>

              <p className="text-[10px] text-center text-brand-slate-500 pt-1">
                ⚡ Same-Day Delivery in Rawalpindi &amp; Islamabad • Advance Payment Only
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
