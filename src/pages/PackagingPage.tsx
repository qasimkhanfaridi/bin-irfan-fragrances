import React, { useState, useEffect } from 'react';
import { PRODUCTS } from '../data/products';
import { Box, Layers, ShieldCheck, QrCode, Copy, CheckCircle2, Sparkles, FileText, Camera } from 'lucide-react';

export const PackagingPage: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState(PRODUCTS[0]);
  const [copiedPrompt, setCopiedPrompt] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Packaging & Craftsmanship Blueprint | Bin Irfan Fragrance";
  }, []);

  const copyToClipboard = (text: string, id: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedPrompt(id);
      setTimeout(() => setCopiedPrompt(null), 2000);
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold inline-flex items-center gap-2">
          <Box className="w-3.5 h-3.5" />
          <span>Brand Architecture • Sections 13 to 21</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-cream uppercase tracking-tight">
          PACKAGING DESIGN SYSTEM
        </h1>
        <p className="text-sm text-brand-cream/70 font-light leading-relaxed">
          The unified packaging and production specifications for Bin Irfan Fragrance. Standardized across physical flacons, labels, rigid boxes, unboxing collateral, and photography guidelines.
        </p>
      </div>

      {/* Fragrance Selector for Live Blueprint */}
      <div className="bg-brand-dark-surface p-4 rounded-2xl border border-brand-gold/20 flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs uppercase tracking-wider text-brand-gold font-bold">
          Preview Packaging for Fragrance:
        </span>
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1">
          {PRODUCTS.map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedProduct(p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedProduct.id === p.id
                  ? 'bg-brand-ruby text-white border border-brand-gold/50 shadow-sm'
                  : 'bg-brand-dark text-brand-cream/70 border border-brand-gold/15 hover:border-brand-gold/40'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* 3-Column Visual Architecture Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Card 1: Bottle Front & Back Labels */}
        <div className="p-6 rounded-3xl bg-brand-dark-card border border-brand-gold/30 space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-bold mb-4">
              <Layers className="w-4 h-4" />
              <span>1. Bottle Label Blueprint</span>
            </div>

            {/* Front Label Simulation */}
            <div className="bg-brand-dark border-2 border-brand-gold/40 rounded-2xl p-6 text-center space-y-4 mb-6 shadow-luxury">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold/70 block">FRONT LABEL</span>
              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border border-brand-gold shadow-gold-glow">
                <img src="/brand/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <p className="font-serif text-xs font-bold tracking-[0.25em] text-brand-gold-light">
                  BIN IRFAN FRAGRANCE
                </p>
                <h3 className="font-serif text-2xl font-bold tracking-wider text-brand-cream uppercase">
                  {selectedProduct.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-brand-cream/70">
                  EAU DE PARFUM
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-gold font-semibold pt-2 border-t border-brand-gold/20">
                50 ML • 1.7 FL. OZ.
              </p>
            </div>

            {/* Back Label Simulation */}
            <div className="bg-brand-dark border border-brand-gold/20 rounded-2xl p-5 text-left text-[11px] font-mono space-y-3 text-brand-cream/80">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold/70 font-sans font-bold block">
                BACK REGULATORY LABEL
              </span>
              <div className="border-b border-brand-gold/15 pb-1.5">
                <p className="font-bold text-brand-gold">BIN IRFAN FRAGRANCE</p>
                <p className="text-brand-cream/60">Product: {selectedProduct.name} (50 ML)</p>
              </div>
              <p><strong>Ingredients:</strong> [Actual formulation supplied by manufacturer]</p>
              <p><strong>Directions:</strong> Spray onto pulse points (wrists, neck).</p>
              <p className="text-[10px] text-brand-cream/50">
                <strong>Warning:</strong> For external use only. Avoid contact with eyes. Keep away from flame.
              </p>
              <div className="grid grid-cols-3 gap-1 pt-1 text-[9px] border-t border-brand-gold/10">
                <span>BATCH: BIF-2026</span>
                <span>MFG: 09/2026</span>
                <span>EXP: 09/2030</span>
              </div>
              <div className="text-[9px] text-brand-cream/60 pt-1">
                <p>Shop #6, Malik Dilawar Plaza, Hashtnagri, Peshawar</p>
                <p>Customer Care: +92 316 9699892</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Rigid Box Specification */}
        <div className="p-6 rounded-3xl bg-brand-dark-card border border-brand-gold/30 space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-bold mb-4">
              <Box className="w-4 h-4" />
              <span>2. Outer Rigid Box Blueprint</span>
            </div>

            {/* Box Front Face */}
            <div className="bg-brand-dark border-2 border-brand-gold/50 rounded-2xl p-6 text-center space-y-6 mb-6 shadow-luxury">
              <span className="text-[10px] uppercase tracking-widest text-brand-gold/70 block">BOX FRONT FACE</span>
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-brand-gold shadow-gold-glow">
                <img src="/brand/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-bold tracking-widest text-brand-cream uppercase">
                  {selectedProduct.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.25em] text-brand-gold font-semibold">
                  EXTRAIT DE PARFUM
                </p>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-brand-cream/40">
                50 ML e 1.7 FL. OZ.
              </p>
            </div>

            {/* Box Side & Back Details */}
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-brand-dark border border-brand-gold/20 space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-brand-gold font-bold block">
                  SIDE 2: NOTE ARCHITECTURE
                </span>
                <p className="text-[11px] text-brand-cream/80"><strong>TOP:</strong> {selectedProduct.topNotes.join(', ')}</p>
                <p className="text-[11px] text-brand-cream/80"><strong>HEART:</strong> {selectedProduct.heartNotes.join(', ')}</p>
                <p className="text-[11px] text-brand-cream/80"><strong>BASE:</strong> {selectedProduct.baseNotes.join(', ')}</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-dark border border-brand-gold/20 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-gold font-bold block">
                    BOX BACK: AUTHENTICITY
                  </span>
                  <span className="text-[10px] text-brand-cream/50 font-mono">EAN: 8901234567890</span>
                </div>
                <div className="w-10 h-10 bg-brand-dark-surface border border-brand-gold/30 rounded flex items-center justify-center text-brand-gold">
                  <QrCode className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Consistency Rules & Collateral */}
        <div className="p-6 rounded-3xl bg-brand-dark-card border border-brand-gold/30 space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-bold mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>3. Consistency & Collateral</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-brand-dark/70 border border-brand-gold/20">
                <strong className="text-brand-gold block mb-1">Standardized Dimensions:</strong>
                <p className="text-brand-cream/70 font-light">
                  50ml Flacon: 52mm × 52mm × 105mm (Heavy glass weight: 220g)
                </p>
                <p className="text-brand-cream/70 font-light">
                  100ml Flacon: 62mm × 62mm × 128mm (Heavy glass weight: 380g)
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-dark/70 border border-brand-gold/20">
                <strong className="text-brand-gold block mb-1">Thank-You & Unboxing Card:</strong>
                <p className="text-brand-cream/70 font-light">
                  Black soft-touch card with gold foil Bin Irfan crest, signed by the perfumer, inviting the client to macerate on pulse points.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-dark/70 border border-brand-gold/20">
                <strong className="text-brand-gold block mb-1">Shipping Box:</strong>
                <p className="text-brand-cream/70 font-light">
                  Deep charcoal corrugated mailer box lined with burgundy tissue and sealed with branded gold ribbon.
                </p>
              </div>
            </div>

            {/* The Golden Rule */}
            <div className="p-4 rounded-xl bg-brand-ruby/25 border border-brand-ruby/50 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-brand-gold-light font-bold">
                <CheckCircle2 className="w-4 h-4 text-brand-gold" />
                <span>Section 19: Unbending Design Rule</span>
              </div>
              <p className="text-brand-cream/80 font-light">
                Every fragrance flacon MUST utilize the exact same bottle silhouette, typography hierarchy, and metallic cap. Only the product designation and notes adjust.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photography & Image Prompt System (Section 21) */}
      <div className="p-8 sm:p-10 rounded-3xl bg-brand-dark-card border border-brand-gold/30 space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-gold/20">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-bold mb-1">
              <Camera className="w-4 h-4" />
              <span>Section 20 & 21 • Image Generation Prompts</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-brand-cream">
              Studio Photography Prompts for All 10 Fragrances
            </h3>
          </div>
          <span className="text-xs text-brand-cream/50">
            Click copy icon to use in Midjourney, DALL-E, or Gemini Imagen
          </span>
        </div>

        {/* Prompts Accordion / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRODUCTS.map((p) => {
            const promptText = `Luxury commercial perfume product photography for Bin Irfan Fragrance ${p.name}, premium heavy glass perfume bottle and matching luxury packaging box, preserve the exact Bin Irfan Fragrance logo with metallic gold and deep ruby accents, ${p.scentCharacter.toLowerCase()} ambiance, dark sophisticated marble background, realistic glass reflections, premium fragrance advertising photography, sharp product details, photorealistic 8k, no people, no distorted text.`;

            return (
              <div
                key={p.id}
                className="p-4 rounded-2xl bg-brand-dark/80 border border-brand-gold/15 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif font-bold text-sm text-brand-gold-light">
                      {p.name}
                    </span>
                    <button
                      onClick={() => copyToClipboard(promptText, p.id)}
                      className="text-xs text-brand-gold hover:text-white flex items-center gap-1 px-2.5 py-1 rounded bg-brand-dark border border-brand-gold/30 transition-colors"
                      title="Copy Prompt"
                    >
                      {copiedPrompt === p.id ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                          <span className="text-emerald-400 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[11px] text-brand-cream/60 leading-relaxed font-mono">
                    "{promptText}"
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
