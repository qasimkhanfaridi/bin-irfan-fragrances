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
    <div className="min-h-screen bg-brand-light-bg py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-blue-700 font-bold bg-brand-blue-50 border border-brand-blue-200/60 px-3.5 py-1 rounded-full inline-flex items-center gap-2">
          <Box className="w-3.5 h-3.5 text-brand-blue-600" />
          <span>Atelier Packaging Architecture</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-slate-900 tracking-tight">
          PACKAGING DESIGN SYSTEM
        </h1>
        <p className="text-sm text-brand-slate-600 font-light leading-relaxed">
          The standardized packaging and presentation specifications for Bin Irfan Fragrance. Unified across heavy crystal flacons, metallic labels, rigid boxes, unboxing collateral, and photography guidelines.
        </p>
      </div>

      {/* Fragrance Selector for Live Blueprint */}
      <div className="bg-white p-4 rounded-2xl border border-brand-slate-200/80 shadow-soft flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="text-xs uppercase tracking-wider text-brand-slate-900 font-bold">
          Preview Packaging for Fragrance:
        </span>
        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1">
          {PRODUCTS.map(p => (
            <button
              key={p.id}
              onClick={() => setSelectedProduct(p)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedProduct.id === p.id
                  ? 'bg-brand-blue-600 text-white shadow-sm'
                  : 'bg-brand-light-bg text-brand-slate-700 border border-brand-slate-200 hover:border-brand-blue-300'
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
        <div className="p-6 rounded-3xl bg-white border border-brand-slate-200/80 shadow-soft space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-blue-700 font-bold mb-4">
              <Layers className="w-4 h-4" />
              <span>1. Bottle Label Blueprint</span>
            </div>

            {/* Front Label Simulation */}
            <div className="bg-brand-light-bg border border-brand-slate-200 rounded-2xl p-6 text-center space-y-4 mb-6 shadow-sm">
              <span className="text-[10px] uppercase tracking-widest text-brand-slate-400 block font-semibold">FRONT EMBOSSED LABEL</span>
              <div className="w-16 h-16 mx-auto rounded-full overflow-hidden border-2 border-brand-gold shadow-md">
                <img src="/brand/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <p className="font-serif text-xs font-bold tracking-[0.25em] text-brand-blue-900">
                  BIN IRFAN FRAGRANCE
                </p>
                <h3 className="font-serif text-2xl font-bold tracking-wider text-brand-slate-900 uppercase">
                  {selectedProduct.name}
                </h3>
                <p className="text-[11px] uppercase tracking-[0.2em] text-brand-blue-700 font-semibold">
                  EXTRAIT DE PARFUM
                </p>
              </div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-brand-slate-500 font-bold pt-2 border-t border-brand-slate-200">
                50 ML • 1.7 FL. OZ. (35% OIL)
              </p>
            </div>

            {/* Back Label Simulation */}
            <div className="bg-brand-light-bg border border-brand-slate-200 rounded-2xl p-5 text-left text-[11px] font-mono space-y-3 text-brand-slate-700">
              <span className="text-[10px] uppercase tracking-widest text-brand-slate-500 font-sans font-bold block">
                BACK REGULATORY LABEL
              </span>
              <div className="border-b border-brand-slate-200 pb-1.5">
                <p className="font-bold text-brand-slate-900 font-sans">BIN IRFAN FRAGRANCE ATELIER</p>
                <p className="text-brand-slate-500">Product: {selectedProduct.name} (50 ML)</p>
              </div>
              <p><strong>Ingredients:</strong> Alcohol Denat., Fragrance (Parfum), Benzyl Benzoate, Linalool, Limonene.</p>
              <p><strong>Directions:</strong> Spray onto pulse points (wrists, collarbone).</p>
              <p className="text-[10px] text-brand-slate-500">
                <strong>Warning:</strong> For external use only. Avoid contact with eyes. Keep away from naked flame.
              </p>
              <div className="grid grid-cols-3 gap-1 pt-1 text-[9px] border-t border-brand-slate-200">
                <span>BATCH: BIF-2026</span>
                <span>MFG: 09/2026</span>
                <span>EXP: 09/2030</span>
              </div>
              <div className="text-[9px] text-brand-slate-500 pt-1">
                <p>Bin Irfan Fragrance Atelier, Rawalpindi / Islamabad</p>
                <p>Concierge Care: +92 321 5186400</p>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2: Rigid Box Specification */}
        <div className="p-6 rounded-3xl bg-white border border-brand-slate-200/80 shadow-soft space-y-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-blue-700 font-bold mb-4">
              <Box className="w-4 h-4" />
              <span>2. Outer Rigid Box Blueprint</span>
            </div>

            {/* Box Front Face */}
            <div className="bg-gradient-to-b from-brand-blue-50/50 to-white border-2 border-brand-blue-200 rounded-2xl p-6 text-center space-y-5 mb-6 shadow-sm">
              <span className="text-[10px] uppercase tracking-widest text-brand-blue-700 block font-bold">PREMIUM RIGID BOX FACE</span>
              <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 border-brand-gold shadow-md">
                <img src="/brand/logo.jpg" alt="Logo" className="w-full h-full object-cover" />
              </div>
              <div className="space-y-1">
                <h3 className="font-serif text-xl font-bold tracking-widest text-brand-slate-900 uppercase">
                  {selectedProduct.name}
                </h3>
                <p className="text-[10px] uppercase tracking-[0.25em] text-brand-blue-700 font-bold">
                  EXTRAIT DE PARFUM
                </p>
              </div>
              <p className="text-[9px] uppercase tracking-widest text-brand-slate-500">
                50 ML e 1.7 FL. OZ.
              </p>
            </div>

            {/* Box Side & Back Details */}
            <div className="space-y-4 text-xs">
              <div className="p-4 rounded-xl bg-brand-light-bg border border-brand-slate-200 space-y-2">
                <span className="text-[10px] uppercase tracking-wider text-brand-blue-700 font-bold block">
                  NOTE COMPOSITION ARCHITECTURE
                </span>
                <p className="text-[11px] text-brand-slate-700"><strong>TOP:</strong> {selectedProduct.topNotes.join(', ')}</p>
                <p className="text-[11px] text-brand-slate-700"><strong>HEART:</strong> {selectedProduct.heartNotes.join(', ')}</p>
                <p className="text-[11px] text-brand-slate-700"><strong>BASE:</strong> {selectedProduct.baseNotes.join(', ')}</p>
              </div>

              <div className="p-4 rounded-xl bg-brand-light-bg border border-brand-slate-200 flex items-center justify-between">
                <div>
                  <span className="text-[10px] uppercase tracking-wider text-brand-slate-700 font-bold block">
                    BOX AUTHENTICITY SEAL
                  </span>
                  <span className="text-[10px] text-brand-slate-500 font-mono">EAN: 8901234567890</span>
                </div>
                <div className="w-10 h-10 bg-white border border-brand-slate-200 rounded flex items-center justify-center text-brand-blue-700">
                  <QrCode className="w-6 h-6" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 3: Consistency Rules & Collateral */}
        <div className="p-6 rounded-3xl bg-white border border-brand-slate-200/80 shadow-soft space-y-6 flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-blue-700 font-bold mb-4">
              <ShieldCheck className="w-4 h-4" />
              <span>3. Consistency & Collateral</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-xl bg-brand-light-bg border border-brand-slate-200">
                <strong className="text-brand-slate-900 block mb-1">Standardized Dimensions:</strong>
                <p className="text-brand-slate-600 font-light">
                  50ml Flacon: 52mm × 52mm × 105mm (Heavy glass weight: 220g)
                </p>
                <p className="text-brand-slate-600 font-light">
                  100ml Flacon: 62mm × 62mm × 128mm (Heavy glass weight: 380g)
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-light-bg border border-brand-slate-200">
                <strong className="text-brand-slate-900 block mb-1">Thank-You & Unboxing Card:</strong>
                <p className="text-brand-slate-600 font-light">
                  Crisp white soft-touch card with embossed Bin Irfan gold crest, signed by the perfumer with instructions on pulse points application.
                </p>
              </div>

              <div className="p-3.5 rounded-xl bg-brand-light-bg border border-brand-slate-200">
                <strong className="text-brand-slate-900 block mb-1">Corrugated Shipping Mailer:</strong>
                <p className="text-brand-slate-600 font-light">
                  Protective white mailer box lined with soft-blue tissue and sealed with official Bin Irfan gold medallion sticker.
                </p>
              </div>
            </div>

            {/* The Golden Rule */}
            <div className="p-4 rounded-xl bg-brand-blue-50 border border-brand-blue-200 text-xs space-y-1.5">
              <div className="flex items-center gap-1.5 text-brand-blue-900 font-bold">
                <CheckCircle2 className="w-4 h-4 text-brand-blue-600" />
                <span>Atelier Standard Design Rule</span>
              </div>
              <p className="text-brand-slate-700 font-light">
                Every fragrance flacon utilizes the signature silhouette, typography hierarchy, and magnetic cap. Only the product designation and notes adjust.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Photography & Image Prompt System */}
      <div className="p-8 sm:p-10 rounded-3xl bg-white border border-brand-slate-200/80 shadow-soft space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-brand-slate-100">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-blue-700 font-bold mb-1">
              <Camera className="w-4 h-4" />
              <span>Studio Photography Prompts for All Fragrances</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-brand-slate-900">
              Commercial Studio Photography Prompt Engine
            </h3>
          </div>
          <span className="text-xs text-brand-slate-500">
            Click copy icon to generate in Midjourney, DALL-E, or Gemini Imagen
          </span>
        </div>

        {/* Prompts Accordion / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {PRODUCTS.map((p) => {
            const promptText = `Luxury commercial perfume product photography for Bin Irfan Fragrance ${p.name}, premium heavy crystal perfume bottle and matching luxury packaging box, preserve the exact Bin Irfan Fragrance logo with metallic gold and soft blue accents, ${p.scentCharacter.toLowerCase()} ambiance, bright white marble podium background with soft morning lighting, realistic glass reflections, premium fragrance advertising photography, sharp product details, photorealistic 8k, no people, no distorted text.`;

            return (
              <div
                key={p.id}
                className="p-4 rounded-2xl bg-brand-light-bg border border-brand-slate-200 flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-serif font-bold text-sm text-brand-slate-900">
                      {p.name}
                    </span>
                    <button
                      onClick={() => copyToClipboard(promptText, p.id)}
                      className="text-xs text-brand-blue-700 hover:text-brand-blue-900 flex items-center gap-1 px-2.5 py-1 rounded bg-white border border-brand-slate-200 transition-colors shadow-sm"
                      title="Copy Prompt"
                    >
                      {copiedPrompt === p.id ? (
                        <>
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                          <span className="text-emerald-600 font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3 h-3" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <p className="text-[11px] text-brand-slate-600 leading-relaxed font-mono">
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
