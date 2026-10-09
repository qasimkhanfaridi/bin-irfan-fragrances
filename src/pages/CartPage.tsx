import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag, ArrowRight, MessageCircle, Truck, ShieldCheck, Tag } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

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
    <div className="min-h-screen bg-brand-light-bg py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-10">
      <SEOHead title="Shopping bag" description="Review items in your Bin Irfan Fragrances shopping bag." canonicalPath="/cart" robots="noindex, follow" />
      {/* Header */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs uppercase tracking-[0.25em] text-brand-blue-700 font-bold bg-brand-blue-50 border border-brand-blue-200/60 px-3 py-1 rounded-full">
          Bin Irfan Fragrances
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-slate-900 tracking-tight">
          Your Fragrance Bag
        </h1>
        <p className="text-xs text-brand-slate-500">
          Review your selection of artisanal 35% Extrait de Parfum flacons and luxury sets.
        </p>
      </div>

      {cart.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-brand-slate-200 p-8 space-y-6 max-w-2xl mx-auto shadow-soft">
          <div className="w-20 h-20 mx-auto rounded-full bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-500">
            <ShoppingBag className="w-10 h-10" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-brand-slate-900">
            Your Bag Is Currently Empty
          </h2>
          <p className="text-sm text-brand-slate-500 max-w-md mx-auto">
            Discover our signature perfume compositions and high-value luxury bundles crafted to define your presence.
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md"
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
            <div className="p-4 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft flex items-center justify-between text-xs">
              <span className="flex items-center gap-2 text-brand-slate-700">
                <Truck className="w-4 h-4 text-brand-blue-600" />
                {remaining === 0 ? (
                  <span className="text-emerald-600 font-bold">
                    You have unlocked FREE Nationwide Express Delivery across Pakistan!
                  </span>
                ) : (
                  <span>
                    Add <strong className="text-brand-blue-700">{formatPrice(remaining)}</strong> more to get Free Express Delivery
                  </span>
                )}
              </span>
              <span className="text-brand-blue-700 font-bold">
                {Math.min(100, Math.round((cartTotalPKR / freeShippingThreshold) * 100))}%
              </span>
            </div>

            {/* List */}
            <div className="bg-white rounded-3xl border border-brand-slate-200/80 shadow-soft overflow-hidden divide-y divide-brand-slate-100">
              {cart.map((item) => (
                <div key={item.id} className="p-4 sm:p-6 flex flex-col sm:flex-row items-center gap-5 justify-between">
                  <div className="flex items-center gap-4 w-full sm:w-auto">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-20 h-20 rounded-2xl object-cover border border-brand-slate-100 flex-shrink-0"
                    />
                    <div>
                      <Link
                        to={`/shop/${item.product.slug}`}
                        className="font-serif text-lg font-bold text-brand-slate-900 hover:text-brand-blue-600 transition-colors"
                      >
                        {item.product.name}
                      </Link>
                      <p className="text-xs text-brand-blue-700 font-semibold mt-0.5">
                        Flacon: {item.size} • Extrait de Parfum
                      </p>
                      <p className="text-xs text-brand-slate-400 mt-1">
                        Unit: {formatPrice(item.pricePKR)}
                      </p>
                    </div>
                  </div>

                  {/* Quantity & Controls */}
                  <div className="flex items-center justify-between w-full sm:w-auto gap-6">
                    <div className="flex items-center border border-brand-slate-200 rounded-xl overflow-hidden bg-brand-light-bg text-xs">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="px-3 py-1.5 text-brand-slate-500 hover:text-brand-slate-900 hover:bg-brand-slate-200 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-1.5 font-bold text-brand-slate-900">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="px-3 py-1.5 text-brand-slate-500 hover:text-brand-slate-900 hover:bg-brand-slate-200 transition-colors"
                      >
                        +
                      </button>
                    </div>

                    <span className="font-serif text-base font-bold text-brand-slate-900 w-24 text-right">
                      {formatPrice(item.pricePKR * item.quantity)}
                    </span>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-brand-slate-400 hover:text-rose-600 p-2 transition-colors"
                      title="Remove Item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center pt-2 text-xs">
              <Link to="/shop" className="text-brand-blue-700 hover:text-brand-blue-900 font-bold">
                &larr; Continue Shopping
              </Link>
            </div>
          </div>

          {/* Summary Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-brand-slate-200/80 shadow-soft space-y-6">
              <h3 className="font-serif text-xl font-bold text-brand-slate-900 pb-4 border-b border-brand-slate-100">
                Order Summary
              </h3>

              {/* Coupon Form */}
              <form onSubmit={handleApplyCoupon} className="flex gap-2">
                <div className="relative flex-1">
                  <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-brand-slate-400" />
                  <input
                    type="text"
                    placeholder="Coupon (use VIP10)"
                    value={couponCode}
                    onChange={(e) => setCouponCode(e.target.value)}
                    className="w-full bg-brand-light-bg border border-brand-slate-200 rounded-xl py-2 pl-9 pr-3 text-xs text-brand-slate-900 placeholder-brand-slate-400 focus:border-brand-blue-500 outline-none uppercase font-medium"
                  />
                </div>
                <button
                  type="submit"
                  className="px-4 py-2 rounded-xl bg-brand-slate-100 border border-brand-slate-200 hover:bg-brand-slate-200 text-brand-slate-800 text-xs font-bold transition-colors"
                >
                  Apply
                </button>
              </form>

              {couponApplied && (
                <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs flex justify-between font-medium">
                  <span>VIP10 (10% Discount)</span>
                  <span className="font-bold">-{formatPrice(discountAmount)}</span>
                </div>
              )}

              {/* Calculation Rows */}
              <div className="space-y-3 text-xs sm:text-sm text-brand-slate-600 pt-2 border-t border-brand-slate-100">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-bold text-brand-slate-900">{formatPrice(cartTotalPKR)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Nationwide Express Delivery:</span>
                  <span className="font-bold text-brand-blue-700">
                    {shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}
                  </span>
                </div>
                {couponApplied && (
                  <div className="flex justify-between text-emerald-600 font-medium">
                    <span>VIP Privilege Discount:</span>
                    <span>-{formatPrice(discountAmount)}</span>
                  </div>
                )}
                <div className="flex justify-between text-base font-bold pt-3 border-t border-brand-slate-200 text-brand-slate-900">
                  <span>Grand Total:</span>
                  <span className="font-serif text-2xl text-brand-blue-900">
                    {formatPrice(grandTotal)}
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 pt-4">
                <button
                  onClick={() => navigate('/checkout')}
                  className="w-full py-4 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
                >
                  <span>Proceed to Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <a
                  href={generateCartWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Order via WhatsApp (1-Click)</span>
                </a>
              </div>

              <div className="pt-2 text-center text-[11px] text-brand-slate-500 flex items-center justify-center gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>⚡ Same-Day Delivery in Rwp/Isb • 100% Advance Payment</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
