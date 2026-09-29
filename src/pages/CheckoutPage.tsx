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
    document.title = "Direct WhatsApp Checkout | Bin Irfan Fragrance";
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
      <div className="min-h-screen bg-brand-light-bg py-16 px-4 sm:px-6 max-w-xl mx-auto text-center space-y-6">
        <div className="w-20 h-20 mx-auto rounded-full bg-emerald-50 border-2 border-emerald-500 flex items-center justify-center text-emerald-600 shadow-soft">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <div className="space-y-2">
          <span className="text-xs uppercase tracking-[0.25em] text-brand-blue-700 font-bold bg-brand-blue-50 border border-brand-blue-200/60 px-3 py-1 rounded-full">
            Order Sent to Official WhatsApp
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-slate-900">
            Thank You, {completedOrder.name}!
          </h1>
          <p className="text-xs sm:text-sm text-brand-slate-600 max-w-md mx-auto">
            Your order details have been forwarded to the official <strong>Bin Irfan Fragrance</strong> concierge (+92 321 5186400) for instant dispatch confirmation.
          </p>
        </div>

        {/* Order Receipt Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-brand-slate-200/80 text-left space-y-3.5 text-xs sm:text-sm shadow-soft">
          <div className="flex justify-between border-b border-brand-slate-100 pb-2.5">
            <span className="text-brand-slate-500">Order Reference:</span>
            <span className="font-mono font-bold text-brand-blue-900">{completedOrder.ref}</span>
          </div>

          <div className="flex justify-between border-b border-brand-slate-100 pb-2.5">
            <span className="text-brand-slate-500">Payment Mode:</span>
            <span className="font-bold text-emerald-600">Cash on Delivery (COD)</span>
          </div>

          <div className="flex justify-between border-b border-brand-slate-100 pb-2.5">
            <span className="text-brand-slate-500">Delivery Address:</span>
            <span className="text-brand-slate-900 font-medium text-right">{completedOrder.address}, {completedOrder.city}</span>
          </div>

          {/* Items */}
          <div className="py-2.5 border-b border-brand-slate-100 space-y-2">
            <span className="text-brand-blue-900 font-bold text-xs uppercase tracking-wider block">Items:</span>
            {completedOrder.items.map((it: any, idx: number) => (
              <div key={idx} className="flex justify-between text-xs text-brand-slate-700">
                <span>{it.product.name} ({it.size}) × {it.quantity}</span>
                <span className="font-mono font-bold">{formatPrice(it.pricePKR * it.quantity)}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-between pt-1 font-bold">
            <span className="text-brand-slate-900">Total Payable (COD):</span>
            <span className="font-serif text-xl text-brand-blue-900">
              {formatPrice(completedOrder.total)}
            </span>
          </div>
        </div>

        <div className="space-y-3 pt-2">
          <a
            href={completedOrder.waUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-4 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md"
          >
            <MessageCircle className="w-5 h-5" />
            <span>Open WhatsApp Chat (+92 321 5186400)</span>
          </a>

          <Link
            to="/shop"
            className="inline-block text-xs uppercase tracking-wider text-brand-blue-700 hover:text-brand-blue-900 font-bold pt-2"
          >
            &larr; Return to Fragrance Catalogue
          </Link>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-brand-light-bg py-24 text-center max-w-md mx-auto space-y-4 px-4">
        <div className="w-16 h-16 mx-auto rounded-full bg-brand-blue-50 border border-brand-blue-100 flex items-center justify-center text-brand-blue-500">
          <ShoppingBag className="w-8 h-8" />
        </div>
        <h2 className="font-serif text-2xl font-bold text-brand-slate-900">Your Bag Is Empty</h2>
        <p className="text-xs text-brand-slate-500">Please choose a fragrance before placing your WhatsApp order.</p>
        <Link to="/shop" className="inline-block px-6 py-2.5 rounded-xl bg-brand-blue-600 text-white text-xs font-bold uppercase shadow-md">
          Discover Fragrances
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-brand-light-bg py-12 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto space-y-10">
      
      {/* Title */}
      <div className="text-center max-w-xl mx-auto space-y-2">
        <span className="text-xs uppercase tracking-[0.25em] text-brand-blue-700 font-bold bg-brand-blue-50 border border-brand-blue-200/60 px-3 py-1 rounded-full inline-flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Express WhatsApp Checkout (No Account Needed)</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-slate-900 tracking-tight">
          Complete Your Order
        </h1>
        <p className="text-xs text-brand-slate-500">
          Enter your delivery details below. Clicking "Place Order" transmits your order directly to our official WhatsApp.
        </p>
      </div>

      <form onSubmit={handleWhatsAppCheckout} className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Form: Delivery Details */}
        <div className="lg:col-span-7 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-brand-slate-200/80 space-y-6 shadow-soft">
            <div className="flex items-center justify-between pb-3 border-b border-brand-slate-100">
              <h3 className="font-serif text-xl font-bold text-brand-slate-900 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-brand-blue-600" />
                <span>Delivery Address in Pakistan</span>
              </h3>
              <span className="text-xs text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full font-bold">
                Cash on Delivery
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-brand-slate-700 block mb-1.5">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Qasim Khan"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full bg-brand-light-bg border border-brand-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-slate-900 placeholder-brand-slate-400 focus:border-brand-blue-500 outline-none"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-slate-700 block mb-1.5">
                    WhatsApp Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 0321 5186400"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-brand-light-bg border border-brand-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-slate-900 placeholder-brand-slate-400 focus:border-brand-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold uppercase tracking-wider text-brand-slate-700 block mb-1.5">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Lahore, Karachi, Islamabad..."
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-brand-light-bg border border-brand-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-slate-900 placeholder-brand-slate-400 focus:border-brand-blue-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-brand-slate-700 block mb-1.5">
                  Complete Street Address *
                </label>
                <textarea
                  rows={2}
                  required
                  placeholder="House / Flat #, Street #, Sector / Area, Landmark"
                  value={formData.address}
                  onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                  className="w-full bg-brand-light-bg border border-brand-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-slate-900 placeholder-brand-slate-400 focus:border-brand-blue-500 outline-none resize-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-brand-slate-700 block mb-1.5">
                  Delivery Notes (Optional)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Urgent gift delivery, call upon arrival"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-brand-light-bg border border-brand-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-slate-900 placeholder-brand-slate-400 focus:border-brand-blue-500 outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Order Summary & Place Order */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-6 sm:p-8 rounded-3xl bg-white border border-brand-slate-200/80 space-y-6 shadow-soft sticky top-28">
            <h3 className="font-serif text-xl font-bold text-brand-slate-900 pb-3 border-b border-brand-slate-100">
              Order Summary
            </h3>

            {/* Items */}
            <div className="space-y-3 max-h-56 overflow-y-auto pr-1 divide-y divide-brand-slate-100">
              {cart.map(item => (
                <div key={item.id} className="pt-2 flex items-center justify-between text-xs">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="w-11 h-11 rounded-xl object-cover border border-brand-slate-100"
                    />
                    <div>
                      <p className="font-bold text-brand-slate-900">{item.product.name}</p>
                      <p className="text-brand-blue-700 text-[11px] font-medium">{item.size} × {item.quantity}</p>
                    </div>
                  </div>
                  <span className="font-serif font-bold text-brand-slate-900">
                    {formatPrice(item.pricePKR * item.quantity)}
                  </span>
                </div>
              ))}
            </div>

            {/* Calculations */}
            <div className="space-y-2 text-xs text-brand-slate-600 pt-4 border-t border-brand-slate-100">
              <div className="flex justify-between">
                <span>Subtotal:</span>
                <span className="font-bold text-brand-slate-900">{formatPrice(cartTotalPKR)}</span>
              </div>
              <div className="flex justify-between">
                <span>Nationwide Courier:</span>
                <span className="font-bold text-brand-blue-700">
                  {shippingFee === 0 ? 'FREE' : formatPrice(shippingFee)}
                </span>
              </div>
              <div className="flex justify-between text-base font-bold pt-3 border-t border-brand-slate-200 text-brand-slate-900">
                <span>Total Payable (COD):</span>
                <span className="font-serif text-2xl text-brand-blue-900">{formatPrice(grandTotal)}</span>
              </div>
            </div>

            {/* Primary Order Button */}
            <button
              type="submit"
              className="w-full py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 group"
            >
              <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform" />
              <span>Place Order via WhatsApp</span>
            </button>

            <div className="text-[11px] text-center text-brand-slate-500 space-y-1.5 pt-1">
              <p className="flex items-center justify-center gap-1.5 text-emerald-700 font-semibold">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Orders arrive in 2–4 business days with Cash on Delivery</span>
              </p>
              <p className="text-[10px] text-brand-slate-400">
                Official Concierge: +92 321 5186400
              </p>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
