import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { Box, CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';

export const PackagingShowcaseSection: React.FC = () => {
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [activeView, setActiveView] = useState<'studio-shot' | 'bottle-front' | 'box-front' | 'box-back'>('studio-shot');

  const product = PRODUCTS[selectedProductIndex];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-white via-brand-blue-soft/40 to-white border-y border-brand-blue-soft relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-brand-blue-soft border border-brand-blue-light text-brand-blue-dark text-xs font-bold uppercase tracking-wider">
            <Box className="w-3.5 h-3.5 text-brand-gold" />
            <span>Luxury Packaging & Presentation</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue-deep tracking-tight">
            The Presentation Standard
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Every Bin Irfan flacon and rigid presentation box is crafted with subtle lighting, soft sky-blue tones, and crisp white textured cardstock with gold foil hot-stamping.
          </p>
        </div>

        {/* Fragrance Switcher Strip */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {PRODUCTS.slice(0, 5).map((p, idx) => (
            <button
              key={p.id}
              onClick={() => setSelectedProductIndex(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider uppercase transition-all ${
                selectedProductIndex === idx
                  ? 'bg-brand-blue-dark text-white shadow-xs'
                  : 'bg-white border border-brand-blue-soft text-slate-700 hover:border-brand-blue-light'
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
              <h3 className="font-serif text-2xl font-bold text-brand-blue-deep">
                Unified Architectural Standard
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                Inspect how the Bin Irfan identity is systematically applied across physical flacons and outer rigid boxes without visual clutter.
              </p>
            </div>

            {/* View Selection Tabs */}
            <div className="space-y-2">
              <span className="text-[11px] uppercase tracking-wider text-brand-blue-dark font-bold block">
                Select Blueprint Element:
              </span>
              <div className="grid grid-cols-2 gap-2">
                <button
                  onClick={() => setActiveView('studio-shot')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold text-left border transition-all ${
                    activeView === 'studio-shot'
                      ? 'bg-brand-blue-dark text-white border-brand-blue-dark shadow-xs'
                      : 'bg-white border-brand-blue-soft text-slate-700 hover:bg-brand-blue-soft'
                  }`}
                >
                  1. Bottle & Box Studio View
                </button>
                <button
                  onClick={() => setActiveView('bottle-front')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold text-left border transition-all ${
                    activeView === 'bottle-front'
                      ? 'bg-brand-blue-dark text-white border-brand-blue-dark shadow-xs'
                      : 'bg-white border-brand-blue-soft text-slate-700 hover:bg-brand-blue-soft'
                  }`}
                >
                  2. Flacon Label Spec
                </button>
                <button
                  onClick={() => setActiveView('box-front')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold text-left border transition-all ${
                    activeView === 'box-front'
                      ? 'bg-brand-blue-dark text-white border-brand-blue-dark shadow-xs'
                      : 'bg-white border-brand-blue-soft text-slate-700 hover:bg-brand-blue-soft'
                  }`}
                >
                  3. Outer Box Front Face
                </button>
                <button
                  onClick={() => setActiveView('box-back')}
                  className={`py-2 px-3 rounded-xl text-xs font-bold text-left border transition-all ${
                    activeView === 'box-back'
                      ? 'bg-brand-blue-dark text-white border-brand-blue-dark shadow-xs'
                      : 'bg-white border-brand-blue-soft text-slate-700 hover:bg-brand-blue-soft'
                  }`}
                >
                  4. Regulatory Details
                </button>
              </div>
            </div>

            {/* Packaging Rule Guarantee */}
            <div className="p-4 sm:p-5 rounded-2xl bg-white border border-brand-blue-soft shadow-xs space-y-2 text-xs">
              <div className="flex items-center gap-2 text-brand-blue-dark font-bold uppercase tracking-wider">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>The 10-Flacon Consistency Rule</span>
              </div>
              <p className="text-slate-600 leading-relaxed font-normal">
                All fragrances utilize the identical heavy crystal flacon silhouette and typography scale. Only the product designation, olfactory notes, and subtle color accent adapt, making every bottle immediately recognizable on retail vanity displays.
              </p>
            </div>

            <Link
              to="/packaging"
              className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-blue-dark font-bold hover:text-brand-blue pt-2 border-b border-brand-blue-dark hover:border-brand-blue pb-0.5 transition-colors"
            >
              <span>Explore Full Packaging Specifications & Print Guide</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Interactive Blueprint Visualizer */}
          <div className="lg:col-span-7 flex justify-center">
            {activeView === 'studio-shot' ? (
              <div className="w-full max-w-md bg-white border border-brand-blue-soft rounded-3xl p-3 shadow-luxury-hover relative overflow-hidden group">
                <img
                  src="/products/box_packaging.jpg"
                  alt="Bin Irfan Fragrances Luxury Packaging Presentation"
                  className="w-full aspect-square object-cover rounded-2xl group-hover:scale-103 transition-transform duration-700"
                />
                <div className="p-4 text-center">
                  <span className="text-xs uppercase tracking-wider text-brand-blue font-bold block mb-1">
                    Authentic Rigid Packaging
                  </span>
                  <p className="text-xs text-slate-600 font-normal">
                    White & Soft Sky-Blue Rigid Gift Box with Gold Embossed Medallion
                  </p>
                </div>
              </div>
            ) : (
              <div className="w-full max-w-md bg-white border-2 border-brand-blue/30 rounded-3xl p-8 shadow-luxury-card relative min-h-[460px] flex flex-col justify-between items-center text-center">
                
                {/* Gold Top Flacon Accent */}
                <div className="w-20 h-3.5 bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300 rounded-t-lg -mt-10 border border-amber-400 shadow-sm" />

                {/* View 2: Bottle Front Label */}
                {activeView === 'bottle-front' && (
                  <div className="w-full my-auto space-y-6">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-brand-gold shadow-md bg-white">
                      <img src="/brand/logo.jpg" alt="Official Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1.5">
                      <span className="text-xs uppercase tracking-[0.3em] text-brand-blue font-bold">
                        BIN IRFAN FRAGRANCE
                      </span>
                      <h4 className="font-serif text-3xl font-bold tracking-wider text-brand-blue-deep uppercase">
                        {product.name}
                      </h4>
                      <p className="text-xs uppercase tracking-[0.25em] text-slate-500 font-semibold">
                        EXTRAIT DE PARFUM
                      </p>
                    </div>
                    <div className="pt-4 border-t border-brand-blue-soft inline-block">
                      <span className="text-xs uppercase tracking-[0.2em] text-brand-blue-dark font-bold">
                        50 ML • 1.7 FL. OZ. (35% OIL)
                      </span>
                    </div>
                  </div>
                )}

                {/* View 3: Outer Box Front */}
                {activeView === 'box-front' && (
                  <div className="w-full my-auto space-y-6 bg-brand-blue-soft/50 p-8 rounded-2xl border border-brand-blue-soft">
                    <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-brand-gold shadow-md bg-white">
                      <img src="/brand/logo.jpg" alt="Official Logo" className="w-full h-full object-cover" />
                    </div>
                    <div className="space-y-1.5">
                      <h4 className="font-serif text-2xl font-bold tracking-widest text-brand-blue-deep uppercase">
                        {product.name}
                      </h4>
                      <p className="text-[11px] uppercase tracking-[0.3em] text-brand-blue font-bold">
                        EXTRAIT DE PARFUM
                      </p>
                    </div>
                    <div className="text-[10px] uppercase tracking-widest text-slate-500 font-medium">
                      50 ML e 1.7 FL. OZ. • BATCH BIF-2026
                    </div>
                  </div>
                )}

                {/* View 4: Regulatory Details */}
                {activeView === 'box-back' && (
                  <div className="w-full my-auto text-left space-y-3 text-xs font-mono text-slate-700 bg-brand-blue-soft/40 p-5 rounded-2xl border border-brand-blue-soft">
                    <div className="border-b border-brand-blue-soft pb-2">
                      <p className="font-bold text-brand-blue-dark uppercase">BIN IRFAN FRAGRANCE</p>
                      <p className="text-[11px] text-slate-500">Product: {product.name} • 50 ML</p>
                    </div>
                    <div className="space-y-1 text-[11px] leading-relaxed">
                      <p><strong className="text-brand-blue-dark">Directions:</strong> Spray onto pulse points (wrists, neck, chest).</p>
                      <p className="text-[10px] text-slate-500 pt-1">
                        <strong>Warning:</strong> For external use only. Avoid eye contact. Keep away from heat and flame.
                      </p>
                    </div>
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-brand-blue-soft text-[10px]">
                      <div><span className="text-brand-blue-dark font-bold">BATCH:</span> BIF-2026</div>
                      <div><span className="text-brand-blue-dark font-bold">MFG:</span> 09/2026</div>
                      <div><span className="text-brand-blue-dark font-bold">EXP:</span> 09/2030</div>
                    </div>
                    <div className="pt-2 text-[10px] text-slate-600">
                      <p>Bin Irfan Fragrances, Dhoke Chiragh Deen, Rawalpindi, Pakistan</p>
                      <p>Customer Care: +92 321 5186400 • Made in Pakistan</p>
                    </div>
                  </div>
                )}

              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
