import React, { useEffect } from 'react';
import { Sparkles, MapPin, Award, Heart, ShieldCheck, Flame, Phone } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export const AboutPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-light-bg py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24">
      <SEOHead
        title="Our Heritage & Artisanal Perfumery"
        description="Learn about the mastercraft behind Bin Irfan Fragrances. Discover our 35% Extrait De Parfum formulation, Rawalpindi atelier roots, and commitment to royal ingredients."
        keywords="Bin Irfan story, artisanal perfumery Pakistan, luxury fragrance Rawalpindi, Islamabad perfume, Extrait de parfum craftsmanship"
        canonicalPath="/about"
      />
      
      {/* Hero Narrative */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <div className="flex justify-center">
          <img
            src="/brand/logo.jpg"
            alt="Bin Irfan Seal"
            className="w-20 h-20 rounded-full border-2 border-brand-gold shadow-md object-cover"
          />
        </div>
        <span className="text-xs uppercase tracking-[0.3em] text-brand-blue-700 font-bold bg-brand-blue-50 border border-brand-blue-200/60 px-3.5 py-1 rounded-full inline-flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-brand-gold-dark" />
          <span>The Bin Irfan Heritage</span>
        </span>
        <h1 className="font-serif text-4xl sm:text-6xl font-bold text-brand-slate-900 tracking-tight">
          CRAFTING OLFACTORY IDENTITY
        </h1>
        <div className="w-20 h-0.5 bg-brand-gold mx-auto" />
        <p className="font-serif italic text-lg sm:text-xl text-brand-slate-600 font-light leading-relaxed">
          "A scent is more than an accessory. It is an unseen garment that introduces your character before you speak, and lingers with honor after you depart."
        </p>
      </div>

      {/* Origin Story Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-6 space-y-6 text-sm text-brand-slate-600 leading-relaxed">
          <div className="inline-block">
            <span className="text-xs uppercase tracking-wider text-brand-blue-700 font-bold">
              Atelier Origins
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-slate-900 tracking-tight mt-1">
              Handcrafted in Rawalpindi, Pakistan
            </h2>
          </div>
          <p>
            Founded in Rawalpindi, Pakistan, <strong>Bin Irfan Fragrances</strong> began with a clear mission: fragrance connoisseurs across Pakistan deserve authentic 35% Extrait concentration, multi-layered projection, and pure ingredients without synthetic alcohol harshness or inflated designer markups.
          </p>
          <p>
            We specialize in crafting artisanal impressions and signature luxury formulations—infusing ultra-high percentages of French and Arabian fragrance oils with aged agarwood, velvety Damascus rose, and pristine Mediterranean citrus chords.
          </p>
          <p>
            Every flacon is hand-filled, macerated for maximum longevity, and presented in our signature luxury gift packaging with Same-Day Express Delivery in Rawalpindi &amp; Islamabad and fast nationwide courier shipping.
          </p>
          <div className="pt-3 space-y-2">
            <div className="flex items-center gap-3 text-xs text-brand-slate-800 font-medium">
              <MapPin className="w-4 h-4 text-brand-blue-600 flex-shrink-0" />
              <span>Studio: Bin Irfan Fragrances, H3X9+8X4, Dhoke Chiragh Deen, Rawalpindi, Pakistan</span>
            </div>
            <div className="flex items-center gap-3 text-xs text-brand-slate-800 font-medium">
              <Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Official Concierge: +92 321 5186400</span>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-3xl overflow-hidden border border-brand-slate-200 shadow-luxury group">
            <img
              src="/products/box_packaging.jpg"
              alt="Bin Irfan Craftsmanship & Presentation"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 inset-x-6 text-center text-white">
              <span className="font-serif text-xl font-bold block">
                Pure Extrait Formulation
              </span>
              <span className="text-xs text-slate-200">
                Bin Irfan Fragrances Rawalpindi • Nationwide Express Delivery
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Values Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-brand-slate-200">
        <div className="p-8 rounded-3xl bg-white border border-brand-slate-200/80 shadow-soft space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-brand-blue-50 flex items-center justify-center text-brand-blue-600 mb-2">
            <Award className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-brand-slate-900">Potency & Longevity</h3>
          <p className="text-xs text-brand-slate-500 leading-relaxed">
            We formulate exclusively at Extrait de Parfum strength (35% oil concentration) to ensure that your scent maintains its majestic character without fading in high humidity or heat.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-brand-slate-200/80 shadow-soft space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-amber-50 flex items-center justify-center text-amber-600 mb-2">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-brand-slate-900">Artisanal Respect</h3>
          <p className="text-xs text-brand-slate-500 leading-relaxed">
            Whether creating proprietary dark agarwoods or honoring classic global compositions, each blend is crafted with genuine passion, proper maceration, and olfactory precision.
          </p>
        </div>

        <div className="p-8 rounded-3xl bg-white border border-brand-slate-200/80 shadow-soft space-y-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-2">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <h3 className="font-serif text-xl font-bold text-brand-slate-900">Direct Pakistan Delivery</h3>
          <p className="text-xs text-brand-slate-500 leading-relaxed">
            Same-Day Express Delivery across Rawalpindi &amp; Islamabad, and fast 2–3 business days courier delivery to Karachi, Lahore, Peshawar, Multan, and all corners of Pakistan on 100% advance payment.
          </p>
        </div>
      </div>
    </div>
  );
};
