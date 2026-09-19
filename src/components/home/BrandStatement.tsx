import React from 'react';

export const BrandStatement: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 relative overflow-hidden bg-gradient-to-b from-brand-dark via-brand-dark-surface to-brand-dark border-y border-brand-gold/15">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-6">
        <div className="inline-flex items-center gap-3 justify-center">
          <span className="w-8 h-[1px] bg-brand-gold/60" />
          <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-semibold">
            Philosophy
          </span>
          <span className="w-8 h-[1px] bg-brand-gold/60" />
        </div>

        <h2 className="font-serif text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-brand-cream uppercase">
          FRAGRANCE WITH CHARACTER
        </h2>

        <div className="w-16 h-[2px] bg-gradient-to-r from-transparent via-brand-gold to-transparent mx-auto" />

        <p className="font-serif italic text-lg sm:text-2xl text-brand-gold-light/90 leading-relaxed font-light px-4">
          “At Bin Irfan Fragrance, we believe a fragrance is more than a scent. It is an expression of personality, confidence and identity.”
        </p>

        <p className="text-xs uppercase tracking-[0.25em] text-brand-cream/50 pt-2 font-medium">
          Crafted in Peshawar • Blended with Passion
        </p>
      </div>
    </section>
  );
};
