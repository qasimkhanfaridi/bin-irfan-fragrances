import React, { useEffect } from 'react';
import { Sparkles, MapPin, Award, Heart, ShieldCheck, Flame } from 'lucide-react';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Our Story & Heritage | Bin Irfan Fragrance";
  }, []);

  return (
    <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      
      {/* Hero Narrative */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold inline-flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Bin Irfan Heritage</span>
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-brand-cream uppercase tracking-tight">
          CRAFTING OLFACTORY IDENTITY
        </h1>
        <div className="w-16 h-0.5 bg-brand-gold mx-auto" />
        <p className="font-serif italic text-lg sm:text-xl text-brand-gold-light/90 font-light leading-relaxed">
          "A scent is more than an accessory. It is an unseen garment that introduces your character before you speak, and lingers with honor after you depart."
        </p>
      </div>

      {/* Origin Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 text-sm text-brand-cream/80 leading-relaxed font-light">
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-cream tracking-wide">
            Born in the Ancient Heart of Peshawar
          </h2>
          <p>
            Established in the historic trading corridors of Peshawar, Pakistan, <strong>Bin Irfan Fragrance</strong> began with a single conviction: fragrance connoisseurs in Pakistan deserve the grandeur of international French niche perfumery without compromise.
          </p>
          <p>
            We set out to master the delicate art of fragrance formulation—infusing high percentages of pure perfume oils (35% Extrait concentration) with aged Cambodian agarwood, velvety Damascus rose, and pristine Mediterranean citrus chords.
          </p>
          <p>
            Every bottle is hand-poured, macerated to peak olfactory maturation, and inspected to ensure a scent projection that outlasts long workdays and formal evening banquets.
          </p>
          <div className="pt-2 flex items-center gap-3 text-xs text-brand-gold font-semibold">
            <MapPin className="w-4 h-4 text-brand-gold" />
            <span>Physical Boutique: Shop #6, Malik Dilawar Plaza, Hashtnagri, Peshawar</span>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border-2 border-brand-gold/40 shadow-luxury">
            <img
              src="/products/black_oud.jpg"
              alt="Bin Irfan Craftsmanship"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-transparent to-transparent" />
            <div className="absolute bottom-6 inset-x-6 text-center">
              <span className="font-serif text-lg font-bold text-brand-gold-light block">
                Pure Extrait Formulation
              </span>
              <span className="text-xs text-brand-cream/60">
                Peshawar • Nationwide Delivery
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Values Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-brand-gold/15">
        <div className="p-8 rounded-2xl bg-brand-dark-card border border-brand-gold/20 space-y-3">
          <Award className="w-8 h-8 text-brand-gold mb-2" />
          <h3 className="font-serif text-xl font-bold text-brand-cream">Potency & Longevity</h3>
          <p className="text-xs text-brand-cream/70 leading-relaxed font-light">
            We formulate exclusively at Extrait de Parfum strength (35% oil concentration) to ensure that your scent maintains its character without fading in high humidity or heat.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-brand-dark-card border border-brand-gold/20 space-y-3">
          <Heart className="w-8 h-8 text-brand-ruby-light mb-2" />
          <h3 className="font-serif text-xl font-bold text-brand-cream">Artisanal Respect</h3>
          <p className="text-xs text-brand-cream/70 leading-relaxed font-light">
            Whether creating our proprietary dark agarwoods or honoring classic global compositions, each blend is crafted with genuine passion and olfactory precision.
          </p>
        </div>

        <div className="p-8 rounded-2xl bg-brand-dark-card border border-brand-gold/20 space-y-3">
          <ShieldCheck className="w-8 h-8 text-brand-gold mb-2" />
          <h3 className="font-serif text-xl font-bold text-brand-cream">Transparent Sourcing</h3>
          <p className="text-xs text-brand-cream/70 leading-relaxed font-light">
            We avoid misleading laboratory claims. We deliver honest craftsmanship, exquisite heavy flacons, and personalized client care directly from our boutique.
          </p>
        </div>
      </div>
    </div>
  );
};
