import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { Box, Layers, ShieldCheck, QrCode, ArrowRight, CheckCircle2 } from 'lucide-react';

export const PackagingShowcaseSection: React.FC = () => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [activeView, setActiveView] = useState<'bottle-front' | 'bottle-back' | 'box-front' | 'box-side' | 'box-back'>('bottle-front');

  const product = PRODUCTS[selectedProductIndex];

  return (
    <section className="py-24 bg-gradient-to-b from-brand-dark via-brand-dark-surface to-brand-dark border-y border-brand-gold/20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-ruby/30 border border-brand-gold/30 text-brand-gold text-xs font-semibold uppercase tracking-widest">
            <Box className="w-3.5 h-3.5" />
            <span>Sections 13–19 • Standardized Design System</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-cream uppercase tracking-tight">
            THE PACKAGING DESIGN SYSTEM
          </h2>
          <p className="text-sm text-brand-cream/70 font-light leading-relaxed">
            Every bottle and box follows a unified luxury identity. Preserving our signature Bin Irfan logo, proportions, and typography while distinguishing individual fragrances through bespoke olfactory notes.
          </p>
        </div>

        {/* Fragrance Switcher Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {PRODUCTS.slice(0, 5).map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedProductIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold tracking-wider uppercase transition-all ${
                selectedProductIndex === idx
                  ? 'bg-brand-ruby text-white border border-brand-gold shadow-ruby-glow'
                  : 'bg-brand-dark-card border border-brand-gold/15 text-brand-cream/70 hover:border-brand-gold/40'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {/* Main Packaging Studio Preview Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Controls & Specifications */}
          <div className="lg:col-span-5 space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl font-bold text-brand-cream">
                Unified Architectural Standard
              </h3>
              <p className="text-xs text-brand-cream/70 leading-relaxed font-light">
                Inspect how the Bin Irfan identity is systematically applied across physical flacons and outer rigid boxes without visual clutter.
              </p>
            </div>

            {/* View Selection Tabs */}
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-brand-gold font-bold block">
                Select Blueprint Element:
              </span>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                <button
                  onClick={() => setActiveView('bottle-front')}
                  className={`py-2 px-3 rounded-lg text-xs font-medium text-left border transition-all ${
                    activeView === 'bottle-front'
                      ? 'bg-brand-gold/20 border-brand-gold text-brand-gold-light'
                      : 'bg-brand-dark/60 border-brand-gold/15 text-brand-cream/60 hover:text-white'
                  }`}
                >
                  1. Bottle Front
                </button>
                <button
                  onClick={() => setActiveView('bottle-back')}
                  className={`py-2 px-3 rounded-lg text-xs font-medium text-left border transition-all ${
                    activeView === 'bottle-back'
                      ? 'bg-brand-gold/20 border-brand-gold text-brand-gold-light'
                      : 'bg-brand-dark/60 border-brand-gold/15 text-brand-cream/60 hover:text-white'
                  }`}
                >
                  2. Bottle Back Label
                </button>
                <button
                  onClick={() => setActiveView('box-front')}
                  className={`py-2 px-3 rounded-lg text-xs font-medium text-left border transition-all ${
                    activeView === 'box-front'
                      ? 'bg-brand-gold/20 border-brand-gold text-brand-gold-light'
                      : 'bg-brand-dark/60 border-brand-gold/15 text-brand-cream/60 hover:text-white'
                  }`}
                >
                  3. Outer Box Front
                </button>
                <button
                  onClick={() => setActiveView('box-side')}
                  className={`py-2 px-3 rounded-lg text-xs font-medium text-left border transition-all ${
                    activeView === 'box-side'
                      ? 'bg-brand-gold/20 border-brand-gold text-brand-gold-light'
                      : 'bg-brand-dark/60 border-brand-gold/15 text-brand-cream/60 hover:text-white'
                  }`}
                >
                  4. Box Note Side
                </button>
                <button
                  onClick={() => setActiveView('box-back')}
                  className={`py-2 px-3 rounded-lg text-xs font-medium text-left border transition-all ${
                    activeView === 'box-back'
                      ? 'bg-brand-gold/20 border-brand-gold text-brand-gold-light'
                      : 'bg-brand-dark/60 border-brand-gold/15 text-brand-cream/60 hover:text-white'
                  }`}
                >
                  5. Box Regulatory
                </button>
              </div>
            </div>

            {/* Packaging Rule Guarantee */}
            <div className="p-4 rounded-xl bg-brand-dark/80 border border-brand-gold/20 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-brand-gold font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>The 10-Flacon Consistency Rule</span>
              </div>
              <p className="text-brand-cream/70 leading-relaxed font-light">
                All 10 fragrances utilize the identical heavy flacon silhouette and typography scale. Only the product designation, olfactory notes, and subtle color accent adapt, making every bottle immediately recognizable on retail vanity displays.
              </p>
            </div>

            <Link
              to="/packaging"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-semibold hover:text-brand-gold-light pt-2"
            >
              <span>Explore Full Packaging Specifications & Print Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Interactive Blueprint Visualizer */}
          <div className="lg:col-span-7 flex justify-center">
            <div className="w-full max-w-md bg-brand-dark border-2 border-brand-gold/40 rounded-3xl p-8 shadow-luxury relative min-h-[500px] flex flex-col justify-between items-center text-center">
              
              {/* Gold Top Flacon Accent */}
              <div className="w-20 h-4 bg-gradient-to-r from-brand-gold-dark via-brand-gold to-brand-gold-dark rounded-t-lg -mt-10 border border-brand-gold/60 shadow-gold-glow" />

              {/* View 1: Bottle Front Label */}
              {activeView === 'bottle-front' && (
                <div className="w-full my-auto space-y-6 animate-fadeIn">
                  <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-brand-gold shadow-gold-glow">
                    <img src="/brand/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold">
                      BIN IRFAN FRAGRANCE
                    </span>
                    <h4 className="font-serif text-3xl font-bold tracking-wider text-brand-cream uppercase">
                      {product.name}
                    </h4>
                    <p className="text-xs uppercase tracking-[0.25em] text-brand-cream/70">
                      EAU DE PARFUM
                    </p>
                  </div>
                  <div className="pt-4 border-t border-brand-gold/20 inline-block">
                    <span className="text-xs uppercase tracking-[0.2em] text-brand-gold font-semibold">
                      50 ML • 1.7 FL. OZ.
                    </span>
                  </div>
                </div>
              )}

              {/* View 2: Bottle Back Label */}
              {activeView === 'bottle-back' && (
                <div className="w-full my-auto text-left space-y-4 text-xs font-mono text-brand-cream/80 bg-brand-dark-surface p-5 rounded-2xl border border-brand-gold/20">
                  <div className="border-b border-brand-gold/20 pb-2">
                    <p className="font-bold text-brand-gold uppercase">BIN IRFAN FRAGRANCE</p>
                    <p className="text-[11px] text-brand-cream/60">Product: {product.name} • 50 ML</p>
                  </div>
                  <div className="space-y-1 text-[11px] leading-relaxed">
                    <p><strong className="text-brand-gold">Ingredients:</strong> [Actual formulation to be supplied by manufacturer]</p>
                    <p><strong className="text-brand-gold">Directions:</strong> Spray onto pulse points (wrists, neck, chest).</p>
                    <p className="text-[10px] text-brand-cream/50 pt-1">
                      <strong>Warning:</strong> For external use only. Avoid eye contact. Keep away from heat and flame. Keep out of reach of children.
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-2 border-t border-brand-gold/20 text-[10px]">
                    <div><span className="text-brand-gold">BATCH:</span> BIF-2026-A1</div>
                    <div><span className="text-brand-gold">MFG:</span> 09/2026</div>
                    <div><span className="text-brand-gold">EXP:</span> 09/2030</div>
                  </div>
                  <div className="pt-2 text-[10px] text-brand-cream/60">
                    <p>Shop #6, Malik Dilawar Plaza, Hashtnagri, Peshawar</p>
                    <p>Customer Care: +92 316 9699892 • Made in Pakistan</p>
                  </div>
                </div>
              )}

              {/* View 3: Outer Box Front */}
              {activeView === 'box-front' && (
                <div className="w-full my-auto space-y-8 bg-brand-dark-card p-8 rounded-2xl border border-brand-gold/40 shadow-2xl">
                  <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-brand-gold shadow-gold-glow">
                    <img src="/brand/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-serif text-2xl font-bold tracking-widest text-brand-cream uppercase">
                      {product.name}
                    </h4>
                    <p className="text-[11px] uppercase tracking-[0.3em] text-brand-gold font-semibold">
                      EXTRAIT DE PARFUM
                    </p>
                  </div>
                  <div className="text-[10px] uppercase tracking-widest text-brand-cream/50">
                    50 ML e 1.7 FL. OZ.
                  </div>
                </div>
              )}

              {/* View 4: Box Side 2 (Fragrance Notes) */}
              {activeView === 'box-side' && (
                <div className="w-full my-auto text-left space-y-4 bg-brand-dark-card p-6 rounded-2xl border border-brand-gold/30">
                  <div className="text-center pb-2 border-b border-brand-gold/20">
                    <span className="text-[10px] uppercase tracking-widest text-brand-gold font-bold">
                      Olfactory Architecture
                    </span>
                    <h5 className="font-serif text-lg font-bold text-brand-cream">{product.name}</h5>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-[10px] uppercase text-amber-300 font-bold block">TOP NOTES:</span>
                      <p className="text-brand-cream/80">{product.topNotes.join(', ')}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-brand-ruby-light font-bold block">HEART NOTES:</span>
                      <p className="text-brand-cream/80">{product.heartNotes.join(', ')}</p>
                    </div>
                    <div>
                      <span className="text-[10px] uppercase text-brand-gold font-bold block">BASE NOTES:</span>
                      <p className="text-brand-cream/80">{product.baseNotes.join(', ')}</p>
                    </div>
                  </div>
                </div>
              )}

              {/* View 5: Box Back Regulatory & Barcode */}
              {activeView === 'box-back' && (
                <div className="w-full my-auto space-y-4 bg-brand-dark-card p-6 rounded-2xl border border-brand-gold/30 text-left text-xs">
                  <p className="text-brand-cream/70 text-[11px] italic">
                    "{product.shortDescription}"
                  </p>
                  <div className="flex items-center justify-between pt-3 border-t border-brand-gold/20">
                    <div className="space-y-1">
                      <div className="w-28 h-10 bg-brand-cream/20 rounded flex items-center justify-center text-[10px] font-mono text-brand-cream/80 border border-brand-gold/30">
                        |||||||||||||||||||
                      </div>
                      <span className="text-[9px] text-brand-cream/50 font-mono block">8 901234 567890</span>
                    </div>
                    <div className="w-12 h-12 bg-brand-dark border border-brand-gold/40 rounded-lg flex items-center justify-center text-brand-gold">
                      <QrCode className="w-7 h-7" />
                    </div>
                  </div>
                  <div className="text-[10px] text-brand-cream/50 pt-2 border-t border-brand-gold/10">
                    Bin Irfan Fragrance • Peshawar, Pakistan • www.binirfanfragrance.com
                  </div>
                </div>
              )}

              {/* Bottom Badge */}
              <div className="w-full pt-4 border-t border-brand-gold/20 flex items-center justify-between text-[11px] text-brand-gold">
                <span>EST. PESHAWAR</span>
                <span className="font-semibold">35% CONCENTRATION</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
