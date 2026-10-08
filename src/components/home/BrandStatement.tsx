import React from 'react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-brand-blue-soft/60 via-white to-brand-blue-soft/40 border-y border-brand-blue-soft">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        
        {/* Brand Medallion Seal */}
        <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto rounded-full overflow-hidden border-2 border-brand-gold shadow-md bg-white p-0.5">
          <img
            src="/brand/logo.jpg"
            alt="Bin Irfan Fragrance Official Seal"
            className="w-full h-full object-cover rounded-full"
          />
        </div>

        <div className="inline-flex items-center gap-3 justify-center">
          <span className="w-8 h-[1px] bg-brand-blue/40" />
          <span className="text-xs uppercase tracking-[0.3em] text-brand-blue-dark font-bold">
            The Brand Philosophy
          </span>
          <span className="w-8 h-[1px] bg-brand-blue/40" />
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-blue-deep uppercase">
          Fragrance With Character
        </h2>

        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-brand-blue to-transparent mx-auto" />

        <p className="font-serif italic text-lg sm:text-2xl text-brand-blue-dark/90 leading-relaxed font-light px-4">
          “At Bin Irfan Fragrances, we believe a fragrance is more than a scent. It is an expression of personality, confidence and timeless identity.”
        </p>

        <p className="text-xs uppercase tracking-[0.25em] text-brand-slate/60 pt-2 font-semibold">
          Artisanal Extrait De Parfum • Handcrafted in Rawalpindi • Delivered Nationwide
        </p>
      </div>
    </section>
  );
};
