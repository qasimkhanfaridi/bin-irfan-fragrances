import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Award, Gift, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden py-12 sm:py-20 bg-gradient-to-b from-brand-blue-soft/70 via-white to-brand-blue-soft/30">
      {/* Background soft ambient radial tints */}
      <div className="absolute -top-32 -left-32 w-[550px] h-[550px] rounded-full bg-brand-blue-light/50 filter blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full bg-brand-blue-ice/60 filter blur-[130px] pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-brand-blue-light text-brand-blue-dark text-xs font-semibold tracking-wider uppercase shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Peshawar Boutique • Artisanal 35% Extrait De Parfum</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-brand-blue-deep leading-[1.12]">
              A Fragrance That <br />
              <span className="text-blue-gradient">Defines You.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-brand-slate/85 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Discover distinctive fragrances crafted to leave a lasting impression. Formulated with high-potency oil extracts for 12+ hour sillage, regal sophistication, and effortless compliments.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-2">
              <Link
                to="/shop"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-blue-dark hover:bg-brand-blue-navy text-white font-bold text-xs uppercase tracking-widest transition-all shadow-soft-blue flex items-center justify-center gap-2 group"
              >
                <span>SHOP ALL FRAGRANCES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/shop?category=bundle"
                className="w-full sm:w-auto px-7 py-4 rounded-xl bg-white hover:bg-brand-blue-soft border border-brand-blue-medium/40 hover:border-brand-blue text-brand-blue-dark font-bold text-xs uppercase tracking-widest transition-all shadow-xs flex items-center justify-center gap-2"
              >
                <Gift className="w-4 h-4 text-brand-gold" />
                <span>EXPLORE BUNDLES (SAVE UP TO 25%)</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-brand-blue-soft flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-brand-slate/80 font-medium">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-brand-gold" />
                <span>35% Pure Extrait De Parfum</span>
              </div>
              <span className="text-brand-blue-light hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-brand-blue-dark" />
                <span>12+ Hour Beast Projection</span>
              </div>
              <span className="text-brand-blue-light hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>Cash on Delivery across Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual with Official Medallion Logo & Bottle Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-md aspect-square rounded-3xl p-1.5 bg-gradient-to-b from-brand-blue-light/70 via-white to-brand-blue-soft shadow-luxury-card">
              
              {/* Internal Card Container */}
              <div className="w-full h-full rounded-[22px] bg-white overflow-hidden relative flex items-center justify-center border border-brand-blue-soft shadow-inner">
                
                {/* Hero Bottle Image with smooth hover effect */}
                <img
                  src="/banners/hero_banner.jpg"
                  alt="Bin Irfan Fragrance - Artisanal Flacon Collection"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Status Badge in top-left */}
                <div className="absolute top-4 left-4 z-20 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md border border-brand-blue-light/80 shadow-xs flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[11px] font-bold tracking-wider uppercase text-brand-blue-deep">Flagship Extrait</span>
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-4 inset-x-4 p-3.5 sm:p-4 rounded-2xl bg-white/95 backdrop-blur-md border border-brand-blue-soft shadow-md flex items-center justify-between">
                  <div>
                    <span className="text-[10px] uppercase tracking-wider text-brand-blue font-bold block">
                      Black Oud Masterpiece
                    </span>
                    <h3 className="font-serif text-sm sm:text-base font-bold text-brand-blue-deep">
                      35% Extrait De Parfum
                    </h3>
                  </div>
                  <Link
                    to="/product/black-oud"
                    className="px-4 py-2 rounded-xl bg-brand-blue-dark hover:bg-brand-blue-navy text-white text-[11px] font-bold tracking-wider uppercase transition-colors shadow-xs"
                  >
                    Explore Scent
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
