import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight, MessageCircle, Truck, ShieldCheck, Tag } from 'lucide-react';

export const CartPage: React.FC = () => {
  const {
    cart,
    cartTotalPKR,
    removeFromCart,
    updateQuantity,
    formatPrice,
    generateCartWhatsAppLink
  } = useCart();
  const navigate = useNavigate();

  const [couponCode, setCouponCode] = useState('');
  const [couponApplied, setCouponApplied] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Shopping Bag | Bin Irfan Fragrance";
  }, []);

  const freeShippingThreshold = 5000;
  const remaining = Math.max(0, freeShippingThreshold - cartTotalPKR);
  const shippingFee = remaining === 0 || cart.length === 0 ? 0 : 250;
  const discountAmount = couponApplied ? Math.round(cartTotalPKR * 0.1) : 0;
  const grandTotal = Math.max(0, cartTotalPKR - discountAmount + shippingFee);

  const handleApplyCoupon = (e: React.FormEvent) => {
    e.preventDefault();
    if (couponCode.trim().toUpperCase() === 'VIP10' || couponCode.trim().toUpperCase() === 'BINIRFAN') {
      setCouponApplied(true);
    } else {
      alert("Invalid coupon code. Try using code 'VIP10' for 10% off.");
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-cream uppercase tracking-tight">
          YOUR FRAGRANCE BAG
        </h1>
        <p className="text-xs text-brand-cream/60">
          Review your selection of artisanal 35% Extrait de Parfum flacons.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-24 bg-brand-dark-card rounded-3xl border border-brand-gold/20 p-8 space-y-6 max-w-2xl mx-auto">
          <div className="w-20 h-20 mx-auto rounded-full bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold/50">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-brand-cream">
            Your Bag Is Currently Empty
          </h2>
          <p className="text-sm text-brand-cream/60 max-w-md mx-auto">
            Discover our 10 signature perfume impressions and royal oud formulations crafted to define your presence.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-ruby hover:bg-brand-ruby-light text-white text-xs font-bold uppercase tracking-widest transition-all shadow-ruby-glow"
          >
            <span>Explore Fragrance Catalogue</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Items Table */}
          <div className="lg:col-span-8 space-y-4">
            
            {/* Free Shipping Tracker */}
            <div className="p-4 rounded-2xl bg-brand-dark-card border border-brand-gold/20 flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-brand-cream">
                <Truck className="w-4 h-4 text-brand-gold" />
                {remaining === 0 ? (
                  <span className="text-emerald-400 font-semibold">
                    You have unlocked FREE Nationwide Delivery across Pakistan!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-brand-gold-light">{formatPrice(remaining)}</strong> more to get Free Delivery
                  </span>
                )}
              </span>
              <span className="text-brand-gold font-bold">
                {Math.min(100, Math.round((cartTotalPKR / freeShippingThreshold) * 100))}%
              </span>
            </div>

            {/* List */}
            <div className="bg-brand-dark-card rounded-3xl border border-brand-gold/20 overflow-hidden divide-y divide-brand-gold/10">
              {cart.map((item) => (
                <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-5 justify-between">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 rounded-2xl object-cover border border-brand-gold/20 flex-shrink-0"
                    />
                    <div>
                      <Link
                        to={`/shop/${item.product.slug}`}
                        className="font-serif text-lg font-bold text-brand-cream hover:text-brand-gold-light"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-brand-gold font-medium mt-0.5">
                        Flacon: {item.size} • Extrait de Parfum
                      </p>
                      <p className="text-xs text-brand-cream/50 mt-1">
                        Unit: {formatPrice(item.pricePKR)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity & Controls */}
                  <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                    <div className="flex items-center border border-brand-gold/30 rounded-xl overflow-hidden bg-brand-dark text-xs">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1.5 text-brand-cream/60 hover:text-white"
                      >
                        -
                      </button>
                      <span className="px-4 py-1.5 font-bold text-brand-cream">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1.5 text-brand-cream/60 hover:text-white"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-serif text-base font-bold text-brand-gold-light w-24 text-right">
                      {formatPrice(item.pricePKR * item.quantity)}
                    </span>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-brand-cream/40 hover:text-red-400 p-2 transition-colors"
                      title="Remove Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2 text-xs">
              <Link to="/shop" className="text-brand-gold hover:text-brand-gold-light font-semibold">
                &larr; Continue Shopping
              </Link>
            </div>
          </div>

          {/* Summary Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-dark-card border border-brand-gold/25 space-y-6 shadow-luxury">
              <h3 className="font-serif text-xl font-bold text-brand-cream pb-4 border-b border-brand-gold/15">
                Order Summary
              </h3>

              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-brand-gold/60" />
                  <input
                    type="text"
                    placeholder="Coupon (use VIP10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full bg-brand-dark border border-brand-gold/20 rounded-xl py-2 pl-9 pr-3 text-xs text-brand-cream placeholder-brand-cream/40 focus:border-brand-gold outline-none uppercase"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-brand-dark-surface border border-brand-gold/30 hover:border-brand-gold text-brand-gold-light text-xs font-semibold"
                >
                  Apply
                </button>
              </form>

              {couponApplied && (
                <div className="p-2.5 rounded-xl bg-emerald-950/40 border border-emerald-500/30 text-emerald-400 text-xs flex justify-between">
                  <span>VIP10 (10% Discount)</span>
                  <span className="font-bold">-{formatPrice(discountAmount)}</span>
                </div>
              )}

              {/* Calculation Rows */}
              <div className="space-y-3 text-xs sm:text-sm text-brand-cream/80 pt-2 border-t border-brand-gold/15">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-semibold text-brand-cream">{formatPrice(cartTotalPKR)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Nationwide Shipping:</span>
                  <span className="font-semibold text-brand-gold-light">
                    {shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}
                  </span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-emerald-400">
                    <span>Discount:</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold pt-3 border-t border-brand-gold/20 text-brand-cream">
                  <span>Grand Total:</span>
                  <span className="font-serif text-xl text-brand-gold-light">
                    {formatPrice(grandTotal)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-ruby to-brand-ruby-light hover:from-brand-ruby-light hover:to-brand-ruby text-white text-xs font-bold uppercase tracking-widest transition-all shadow-ruby-glow flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={generateCartWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-950/40 border border-emerald-500/50 hover:bg-emerald-900/60 text-emerald-300 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400" />
                  <span>Order via WhatsApp (1-Click)</span>
                </a>
              </div>

              <div className="pt-2 text-center text-[10px] text-brand-cream/50 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>Cash on Delivery • Authentic Extrait Guarantee</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
