import React, { useState, useEffect } from 'react';
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', phone: '', message: '' });

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Contact Our Boutique | Bin Irfan Fragrance";
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.phone) {
      setSubmitted(true);
      // Generate WhatsApp inquiry URL with the submitted message
      const msg = `Hello Bin Irfan Fragrance, this is ${formData.name} (${formData.phone}). ${formData.message}`;
      window.open(`https://wa.me/923169699892?text=${encodeURIComponent(msg)}`, '_blank');
    }
  };

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold inline-flex items-center gap-2">
          <MessageCircle className="w-3.5 h-3.5" />
          <span>Client Relations</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-cream uppercase tracking-tight">
          VISIT OR CONNECT
        </h1>
        <p className="text-sm text-brand-cream/70 font-light leading-relaxed">
          Whether you seek a bespoke fragrance consultation, order assistance, or wholesale inquiries, our team is at your service.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* Left Column: Contact Cards */}
        <div className="lg:col-span-5 space-y-6">
          <div className="p-8 rounded-3xl bg-brand-dark-card border border-brand-gold/25 space-y-6 shadow-luxury">
            <h3 className="font-serif text-xl font-bold text-brand-cream">
              Flagship Boutique
            </h3>

            <div className="space-y-4 text-xs sm:text-sm">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-brand-gold flex-shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-cream block mb-0.5">Peshawar Boutique</strong>
                  <p className="text-brand-cream/70 leading-relaxed font-light">
                    Shop #6, Malik Dilawar Plaza, Chowk Shadi Peer, Hashtnagri, G.T. Road, Peshawar, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <div>
                  <strong className="text-brand-cream block mb-0.5">Direct WhatsApp / Call</strong>
                  <a href="tel:+923169699892" className="text-brand-gold-light hover:underline font-semibold">
                    +92 316 9699892
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <div>
                  <strong className="text-brand-cream block mb-0.5">Email Inquiries</strong>
                  <a href="mailto:sulaiman234p@gmail.com" className="text-brand-gold-light hover:underline">
                    sulaiman234p@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-brand-gold flex-shrink-0" />
                <div>
                  <strong className="text-brand-cream block mb-0.5">Boutique Hours</strong>
                  <p className="text-brand-cream/70 font-light">
                    Monday – Saturday: 11:00 AM – 10:00 PM <br />
                    Sunday: 2:00 PM – 9:00 PM
                  </p>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/923169699892?text=Hello%20Bin%20Irfan%20Fragrance,%20I%20have%20an%20inquiry%20regarding%20your%20perfume%20collection."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 rounded-xl bg-emerald-950/50 border border-emerald-500/50 hover:bg-emerald-900/60 text-emerald-300 text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg"
            >
              <MessageCircle className="w-4 h-4 text-emerald-400" />
              <span>Chat Directly on WhatsApp</span>
            </a>
          </div>
        </div>

        {/* Right Column: Interactive Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="p-8 sm:p-10 rounded-3xl bg-brand-dark-card border border-brand-gold/25 shadow-luxury">
            <h3 className="font-serif text-2xl font-bold text-brand-cream mb-2">
              Send a Message
            </h3>
            <p className="text-xs text-brand-cream/70 mb-8 font-light">
              Fill out the details below. Clicking send will connect you directly to our WhatsApp concierge with your inquiry pre-loaded.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-gold block mb-1.5">
                  Your Full Name:
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Khan"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-brand-dark border border-brand-gold/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-cream placeholder-brand-cream/40 focus:border-brand-gold outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-gold block mb-1.5">
                  Phone / WhatsApp Number:
                </label>
                <input
                  type="tel"
                  required
                  placeholder="e.g. +92 300 1234567"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full bg-brand-dark border border-brand-gold/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-cream placeholder-brand-cream/40 focus:border-brand-gold outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-semibold uppercase tracking-wider text-brand-gold block mb-1.5">
                  Fragrance Inquiry / Message:
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us which scents you are looking for or any questions regarding our Peshawar boutique..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-brand-dark border border-brand-gold/30 rounded-xl px-4 py-3 text-xs sm:text-sm text-brand-cream placeholder-brand-cream/40 focus:border-brand-gold outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-xl bg-gradient-to-r from-brand-ruby to-brand-ruby-light hover:from-brand-ruby-light hover:to-brand-ruby text-white text-xs font-bold uppercase tracking-widest transition-all shadow-ruby-glow flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Send via WhatsApp Concierge</span>
              </button>

              {submitted && (
                <div className="p-3 rounded-xl bg-emerald-950/40 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-2 mt-4">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Connecting to WhatsApp... Thank you for contacting Bin Irfan Fragrance!</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
