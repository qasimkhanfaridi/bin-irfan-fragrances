import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import {
  MessageCircle,
  Truck,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ShoppingBag,
  MapPin,
  Phone,
  User,
  Sparkles
} from 'lucide-react';

export const CheckoutPage: React.FC = () => {
  const { cart, cartTotalPKR, clearCart, formatPrice, whatsappNumber } = useCart();

  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    city: '',
    address: '',
    notes: ''
  });

  const [isOrdered, setIsOrdered] = useState(false);
  const [completedOrder, setCompletedOrder] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "WhatsApp Express Checkout | Bin Irfan Fragrance";
  }, []);

  const shippingFee = cartTotalPKR >= 5000 || cart.length === 0 ? 0 : 250;
  const grandTotal = cartTotalPKR + shippingFee;

  const handleWhatsAppCheckout = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.fullName.trim() || !formData.phone.trim() || !formData.city.trim() || !formData.address.trim()) {
      alert("Please fill in your Name, Phone, City, and Delivery Address.");
      return;
    }

    const orderRef = `BIF-${Math.floor(100000 + Math.random() * 900000)}`;
    const itemsList = cart.map(
      i => `• ${i.product.name} (${i.size}) × ${i.quantity} = ${formatPrice(i.pricePKR * i.quantity)}`
    ).join('\n');

    let msg = `👑 *NEW ORDER — BIN IRFAN FRAGRANCE*\n`;
    msg += `-----------------------------------------\n`;
    msg += `*Order Reference:* ${orderRef}\n`;
    msg += `*Customer:* ${formData.fullName.trim()}\n`;
    msg += `*WhatsApp/Phone:* ${formData.phone.trim()}\n`;
    msg += `*City:* ${formData.city.trim()}\n`;
    msg += `*Delivery Address:* ${formData.address.trim()}\n`;
    if (formData.notes.trim()) {
      msg += `*Instructions:* ${formData.notes.trim()}\n`;
    }
    msg += `\n*Items Ordered:*\n${itemsList}\n\n`;
    msg += `*Subtotal:* ${formatPrice(cartTotalPKR)}\n`;
    msg += `*Shipping:* ${shippingFee === 0 ? 'FREE (Orders over ₨ 5,000)' : formatPrice(shippingFee)}\n`;
    msg += `*Total Amount (COD):* ${formatPrice(grandTotal)}\n`;
    msg += `-----------------------------------------\n`;
    msg += `Please confirm my order and courier dispatch. Thank you!`;

    const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(msg)}`;

    setCompletedOrder({
      ref: orderRef,
      name: formData.fullName,
      phone: formData.phone,
      city: formData.city,
      address: formData.address,
      items: [...cart],
      total: grandTotal,
      waUrl: waUrl
    });

    setIsOrdered(true);
    clearCart();

    // Open WhatsApp in new tab
    window.open(waUrl, '_blank');
  };

  if (isOrdered && completedOrder) {
    return (
      <div className="min-h-screen py-16 px-4 sm:px-6 max-w-xl mx-auto text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-950/70 border-2 border-emerald-500/60 flex items-center justify-center text-emerald-400 shadow-xl">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold">
            Order Dispatched to WhatsApp
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-cream">
            Thank You, {completedOrder.name}!
          </h1>
          <p className="text-xs sm:text-sm text-brand-cream/70 font-light max-w-md mx-auto">
            Your order details have been sent directly to the official **Bin Irfan Fragrance** WhatsApp (+92 316 9699892) for immediate confirmation.
          </p>
        </div>

        {/* Order Receipt Box */}
        <div className="p-6 rounded-2xl bg-brand-dark-card border border-brand-gold/30 text-left space-y-3 text-xs sm:text-sm shadow-luxury">
          <div className="flex justify-between border-b border-brand-gold/15 pb-2">
            <span className="text-brand-cream/60">Order Reference:</span>
            <span className="font-mono font-bold text-brand-gold-light">{completedOrder.ref}</span>
          </div>

          <div className="flex justify-between border-b border-brand-gold/15 pb-2">
            <span className="text-brand-cream/60">Payment Method:</span>
            <span className="font-semibold text-emerald-400">Cash on Delivery (COD)</span>
          </div>

          <div className="flex justify-between border-b border-brand-gold/15 pb-2">
            <span className="text-brand-cream/60">Delivery To:</span>
            <span className="text-brand-cream text-right">{completedOrder.address}, {completedOrder.city}</span>
          </div>

          {/* Items */}
          <div className="py-2 border-b border-brand-gold/15 space-y-1.5">
            <span className="text-brand-gold font-bold text-xs uppercase tracking-wider block">Items:</span>
            {completedOrder.items.map((it: any, idx: number) => (
              <div key={idx} className="flex justify-between text-xs text-brand-cream/80">
                <span>{it.product.name} ({it.size}) × {it.quantity}</span>
                <span className="font-mono">{formatPrice(it.pricePKR * it.quantity)}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between pt-1 font-bold">
            <span className="text-brand-cream">Total Payable (COD):</span>
            <span className="font-serif text-lg text-brand-gold-light">
              {formatPrice(completedOrder.total)}
            </span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <a
            href={completedOrder.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-4 rounded-xl bg-emerald-950/50 border border-emerald-500/60 hover:bg-emerald-900/60 text-emerald-300 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
          >
            <MessageCircle className="w-5 h-5 text-emerald-400" />
            <span>Open WhatsApp Chat (+92 316 9699892)</span>
          </a>

          <Link
            to="/shop"
            className="inline-block text-xs uppercase tracking-wider text-brand-gold hover:text-brand-gold-light font-semibold pt-2"
          >
            &larr; Return to Fragrance Catalogue
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen py-24 text-center max-w-md mx-auto space-y-4 px-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-brand-dark border border-brand-gold/30 flex items-center justify-center text-brand-gold/60">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-brand-cream">Your Bag Is Empty</h2>
        <p className="text-xs text-brand-cream/60">Please choose a fragrance before placing your WhatsApp order.</p>
        <Link to="/shop" className="inline-block px-6 py-2.5 rounded-xl bg-brand-ruby text-white text-xs font-bold uppercase">
          Discover Fragrances
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
      
      {/* Title */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs uppercase tracking-[0.25em] text-brand-gold font-bold inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Direct WhatsApp Order (No Account Needed)</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-cream uppercase tracking-tight">
          COMPLETE YOUR ORDER
        </h1>
        <p className="text-xs text-brand-cream/60">
          Enter your delivery details. Clicking place order sends your order directly to our official WhatsApp.
        </p>
      </div>

      <form onSubmit={handleWhatsAppCheckout} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Form: Delivery Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-brand-dark-card border border-brand-gold/25 space-y-6 shadow-luxury">
            <div className="flex items-center justify-between pb-3 border-b border-brand-gold/15">
              <h3 className="font-serif text-xl font-bold text-brand-cream flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-gold" />
                <span>Delivery Address in Pakistan</span>
              </h3>
              <span className="text-[10px] text-emerald-400 uppercase font-semibold tracking-wider">
                Cash on Delivery (COD)
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-gold block mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Qasim Khan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-brand-dark border border-brand-gold/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-cream placeholder-brand-cream/40 focus:border-brand-gold outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-brand-gold block mb-1.5">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0300 1234567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-brand-dark border border-brand-gold/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-cream placeholder-brand-cream/40 focus:border-brand-gold outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-semibold uppercase tracking-wider text-brand-gold block mb-1.5">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Rawalpindi, Peshawar, Lahore..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-brand-dark border border-brand-gold/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-cream placeholder-brand-cream/40 focus:border-brand-gold outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-gold block mb-1.5">
                  Complete Delivery Address *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="House / Flat #, Street #, Sector / Area, Landmark"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-brand-dark border border-brand-gold/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-cream placeholder-brand-cream/40 focus:border-brand-gold outline-none resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-gold block mb-1.5">
                  Special Note (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Urgent gift delivery, call before arrival"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-brand-dark border border-brand-gold/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-cream placeholder-brand-cream/40 focus:border-brand-gold outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary & Place Order */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-brand-dark-card border border-brand-gold/30 space-y-6 shadow-luxury sticky top-28">
            <h3 className="font-serif text-xl font-bold text-brand-cream pb-3 border-b border-brand-gold/15">
              Order Summary
            </h3>

            {/* Items */}
            <div className="space-y-3 max-h-56 overflow-y-auto pr-1 divide-y divide-brand-gold/10">
              {cart.map(item => (
                <div key={item.id} className="pt-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-11 h-11 rounded-lg object-cover border border-brand-gold/20"
                    />
                    <div>
                      <p className="font-bold text-brand-cream">{item.product.name}</p>
                      <p className="text-brand-gold text-[11px]">{item.size} × {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-serif font-bold text-brand-gold-light">
                    {formatPrice(item.pricePKR * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-2 text-xs text-brand-cream/80 pt-4 border-t border-brand-gold/15">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-semibold text-brand-cream">{formatPrice(cartTotalPKR)}</span>
              </div>
              <div className="flex justify-between">
                <span>Nationwide Courier:</span>
                <span className="font-semibold text-brand-gold-light">
                  {shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold pt-3 border-t border-brand-gold/20 text-brand-cream">
                <span>Total Payable (COD):</span>
                <span className="font-serif text-2xl text-brand-gold-light">{formatPrice(grandTotal)}</span>
              </div>
            </div>

            {/* Primary Order Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-emerald-950/60 border border-emerald-500/60 hover:bg-emerald-900/80 text-emerald-300 text-xs font-bold uppercase tracking-widest transition-all shadow-lg flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-5 h-5 text-emerald-400 group-hover:scale-110 transition-transform" />
              <span>Place Order via WhatsApp</span>
            </button>

            <div className="text-[11px] text-center text-brand-cream/60 space-y-1.5 pt-1">
              <p className="flex items-center justify-center gap-1.5 text-emerald-400 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Orders arrive in 2–4 business days with Cash on Delivery</span>
              </p>
              <p className="text-[10px] text-brand-cream/40">
                Official Boutique Concierge: +92 316 9699892
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
