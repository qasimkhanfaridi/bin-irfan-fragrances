import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2, ExternalLink } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';
import { getStoreSchema } from '../config/seo';
import { GoogleReviewCTA } from '../components/common/GoogleReviewCTA';
import { trackEvent } from '../utils/analytics';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
      const msg = `Hello Bin Irfan Fragrances, this is ${formData.name} (${formData.phone}). ${formData.message}`;
      trackEvent('whatsapp_contact_submit');
      window.open(`https://wa.me/923215186400?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-brand-light-bg py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      <SEOHead
        title="Contact Atelier & Client Relations"
        description="Connect with Bin Irfan Fragrances in Rawalpindi or directly via WhatsApp (+92 321 5186400) for bespoke fragrance consultations, order inquiries, and deliveries."
        keywords="contact Bin Irfan, fragrance boutique Rawalpindi, WhatsApp perfume order, Islamabad perfume"
        canonicalPath="/contact"
        schema={getStoreSchema()}
      />
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-blue-700 font-bold bg-brand-blue-50 border border-brand-blue-200/60 px-3.5 py-1 rounded-full inline-flex items-center gap-2">
          <MessageCircle className="w-3.5 h-3.5 text-brand-blue-600" />
          <span>Client Relations & Boutique Support</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-slate-900 tracking-tight">
          VISIT OR CONNECT
        </h1>
        <p className="text-sm text-brand-slate-600 font-light leading-relaxed">
          Whether you seek a bespoke fragrance consultation, order dispatch tracking, or atelier inquiries, our concierge team is at your service.
        </p>
      </div>

      <div className="max-w-xl mx-auto">
        <GoogleReviewCTA />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-white border border-brand-slate-200/80 space-y-6 shadow-soft">
            <h3 className="font-serif text-xl font-bold text-brand-slate-900">
              Rawalpindi Fragrance Studio
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-blue-600 flex-shrink-0 mt-0.5" />
                <div className="space-y-1">
                  <strong className="text-brand-slate-900 block mb-0.5">Bin Irfan Fragrances</strong>
                  <p className="text-brand-slate-600 leading-relaxed font-light">
                    H3X9+8X4, Dhoke Chiragh Deen, Rawalpindi, 46000, Punjab, Pakistan
                  </p>
                  <div className="pt-1 flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[11px] bg-brand-blue-50 text-brand-blue-900 px-2 py-0.5 rounded border border-brand-blue-200/60 font-semibold">
                      Plus Code: H3X9+8X4
                    </span>
                    <a
                      href="https://maps.google.com/?cid=4711070535657308662"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-blue-700 hover:text-brand-blue-900 underline"
                    >
                      <span>View on Google Maps</span>
                      <ExternalLink className="w-3 h-3" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                <div>
                  <strong className="text-brand-slate-900 block mb-0.5">Direct WhatsApp / Call</strong>
                  <a href="tel:+923215186400" className="text-brand-blue-700 hover:underline font-bold">
                    +92 321 5186400
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-blue-600 flex-shrink-0" />
                <div>
                  <strong className="text-brand-slate-900 block mb-0.5">Email Inquiries</strong>
                  <a href="mailto:sulaiman234p@gmail.com" className="text-brand-blue-700 hover:underline">
                    sulaiman234p@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-gold-dark flex-shrink-0" />
                <div>
                  <strong className="text-brand-slate-900 block mb-0.5">Studio Hours</strong>
                  <p className="text-brand-slate-600 font-light">
                    Monday – Sunday: 8:00 AM – 11:30 PM (All 7 Days)
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/923215186400?text=Hello%20Bin%20Irfan%20Fragrance,%20I%20have%20an%20inquiry%20regarding%20your%20perfume%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Chat Directly on WhatsApp (+92 321 5186400)</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-slate-200/80 shadow-soft">
            <h3 className="font-serif text-2xl font-bold text-brand-slate-900 mb-2">
              Send a Direct Message
            </h3>
            <p className="text-xs text-brand-slate-500 mb-8 font-light">
              Fill out the details below. Clicking send connects you directly to our WhatsApp concierge with your inquiry pre-loaded.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-brand-slate-700 block mb-1.5">
                  Your Full Name:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Khan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-brand-light-bg border border-brand-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-slate-900 placeholder-brand-slate-400 focus:border-brand-blue-500 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-brand-slate-700 block mb-1.5">
                  Phone / WhatsApp Number:
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
                  Fragrance Inquiry / Message:
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us which scent notes you are looking for or any questions regarding our fragrance impressions and delivery..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-brand-light-bg border border-brand-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-slate-900 placeholder-brand-slate-400 focus:border-brand-blue-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-brand-blue-600 hover:bg-brand-blue-700 text-white text-xs font-bold uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send via WhatsApp Concierge</span>
              </button>

              {submitted && (
                <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs flex items-center gap-2 mt-4 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Connecting to WhatsApp... Thank you for contacting Bin Irfan Fragrances!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>

      {/* Google Maps Location Showcase */}
      <div className="bg-white rounded-3xl border border-brand-slate-200/80 p-6 sm:p-8 shadow-soft space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-brand-slate-100 pb-5">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-blue-700 font-bold mb-1">
              <MapPin className="w-4 h-4 text-brand-blue-600" />
              <span>Google Maps Location</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-slate-900">
              Bin Irfan Fragrances — Rawalpindi Studio
            </h3>
            <p className="text-xs text-brand-slate-500 mt-1">
              Digital Plus Code: <strong className="font-mono text-brand-blue-900">H3X9+8X4 Rawalpindi, Pakistan</strong>
            </p>
          </div>

          <a
            href="https://maps.google.com/?q=H3X9%2B8X4+Rawalpindi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-blue-deep hover:bg-brand-blue-dark text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md self-start sm:self-auto"
          >
            <span>Get Directions on Google Maps</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Embedded Map */}
        <div className="w-full h-72 sm:h-96 rounded-2xl overflow-hidden border border-brand-slate-200 relative bg-brand-light-bg">
          <iframe
            title="Bin Irfan Fragrances Google Map"
            src="https://maps.google.com/maps?q=H3X9%2B8X4+Rawalpindi&t=&z=15&ie=UTF8&iwloc=&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </div>
  );
};
