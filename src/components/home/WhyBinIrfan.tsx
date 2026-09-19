import React from 'react';
import { Award, PackageCheck, Flame, Compass } from 'lucide-react';

export const WhyBinIrfan: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: 'AUTHENTIC EXPERIENCE',
      description: 'Carefully selected fragrance profiles designed with deep notes and masterfully balanced accords.'
    },
    {
      icon: PackageCheck,
      title: 'PREMIUM PRESENTATION',
      description: 'Designed to look as good as they smell. Elegant heavy flacons with unified luxury branding.'
    },
    {
      icon: Flame,
      title: 'CRAFTED WITH CARE',
      description: 'Meticulous attention to fragrance maceration, pure Extrait concentrations, and atomization performance.'
    },
    {
      icon: Compass,
      title: 'MADE FOR YOUR SIGNATURE',
      description: 'Scents crafted to express individuality, leave a memorable impression, and command quiet respect.'
    }
  ];

  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold">
          The Mark of Distinction
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-cream uppercase tracking-tight">
          WHY BIN IRFAN FRAGRANCE
        </h2>
        <div className="w-12 h-0.5 bg-brand-gold mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {pillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-8 rounded-2xl bg-brand-dark-card border border-brand-gold/15 hover:border-brand-gold/50 transition-all duration-300 hover:shadow-luxury group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-brand-ruby/30 border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:scale-110 group-hover:bg-brand-ruby/50 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-lg font-bold text-brand-cream tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-brand-cream/70 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
              <div className="pt-6 border-t border-brand-gold/10 mt-6 flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-brand-gold/60 font-semibold">
                  Standard {idx + 1}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
