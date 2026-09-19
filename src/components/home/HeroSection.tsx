import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, ShieldCheck, Award } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 sm:py-24">
      {/* Background radial ambient lights */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full bg-brand-ruby/25 filter blur-[140px] pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-[650px] h-[650px] rounded-full bg-brand-gold/20 filter blur-[150px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_#0E0C0D_85%)] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Pill Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-ruby/30 border border-brand-gold/30 text-brand-gold-light text-xs font-semibold tracking-wider uppercase backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
              <span>Peshawar Boutique • Artisanal Extrait De Parfum</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-6xl xl:text-7xl font-bold tracking-tight text-brand-cream leading-[1.1]">
              A Fragrance That <br />
              <span className="text-gold-gradient">Defines You.</span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-brand-cream/75 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Discover distinctive fragrances crafted to leave a lasting impression. Formulated with high-potency oil extracts for 12+ hour sillage and regal sophistication.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                to="/shop"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-brand-ruby to-brand-ruby-light hover:from-brand-ruby-light hover:to-brand-ruby text-white font-bold text-xs uppercase tracking-widest transition-all shadow-ruby-glow flex items-center justify-center gap-2 group"
              >
                <span>SHOP FRAGRANCES</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                to="/collections"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-brand-dark-surface/80 hover:bg-brand-dark border border-brand-gold/35 hover:border-brand-gold text-brand-gold-light font-bold text-xs uppercase tracking-widest transition-all backdrop-blur-sm flex items-center justify-center gap-2"
              >
                <span>EXPLORE COLLECTION</span>
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="pt-6 border-t border-brand-gold/15 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs text-brand-cream/70">
              <div className="flex items-center gap-2">
                <Award className="w-4 h-4 text-brand-gold" />
                <span>35% Pure Perfume Oil</span>
              </div>
              <span className="text-brand-gold/30">•</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-brand-gold" />
                <span>12+ Hour Beast Projection</span>
              </div>
              <span className="text-brand-gold/30">•</span>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>Cash on Delivery across Pakistan</span>
              </div>
            </div>
          </div>

          {/* Right Hero Visual with Official Logo & Bottle Showcase */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center relative">
            <div className="relative w-full max-w-md aspect-square rounded-3xl p-1 bg-gradient-to-b from-brand-gold/40 via-brand-ruby/40 to-transparent shadow-2xl">
              
              {/* Internal Card Container */}
              <div className="w-full h-full rounded-[22px] bg-brand-dark-surface/90 overflow-hidden relative flex items-center justify-center border border-brand-gold/20">
                
                {/* Hero Bottle Image with slow floating animation */}
                <img
                  src="/products/black_oud.jpg"
                  alt="Bin Irfan Fragrance - Black Oud Luxury Bottle"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                />

                {/* Ambient vignette overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent opacity-80" />

                {/* Embedded Official Bin Irfan Logo Medallion */}
                <div className="absolute top-5 right-5 z-20 w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 border-brand-gold shadow-gold-glow bg-brand-dark/80 backdrop-blur-md">
                  <img
                    src="/brand/logo.jpg"
                    alt="Official Bin Irfan Fragrance Logo"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating Bottom Card */}
                <div className="absolute bottom-5 inset-x-5 p-4 rounded-xl bg-brand-dark/85 backdrop-blur-md border border-brand-gold/30 shadow-luxury">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">
                        Signature Masterpiece
                      </span>
                      <h3 className="font-serif text-lg font-bold text-brand-cream">
                        Black Oud • Extrait De Parfum
                      </h3>
                    </div>
                    <Link
                      to="/shop/black-oud"
                      className="px-3.5 py-1.5 rounded-lg bg-brand-ruby hover:bg-brand-ruby-light text-white text-xs font-semibold tracking-wider uppercase transition-colors"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
