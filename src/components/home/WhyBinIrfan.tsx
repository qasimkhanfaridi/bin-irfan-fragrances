import React from 'react';
import { Award, PackageCheck, Flame, ShieldCheck } from 'lucide-react';

export const WhyBinIrfan: React.FC = () => {
  const pillars = [
    {
      icon: Award,
      title: '35% EXTRAIT DE PARFUM',
      description: 'Formulated with ultra-high pure fragrance oil concentrations, delivering 12–16+ hours of projection that outlasts standard department store EDTs.'
    },
    {
      icon: PackageCheck,
      title: 'LUXURY PRESENTATION',
      description: 'Presented in heavy faceted crystal flacons with magnetic gold caps and soft-blue embossed rigid gift packaging ready for royal gifting.'
    },
    {
      icon: Flame,
      title: 'PRECIOUS RAW ESSENCES',
      description: 'Carefully sourced French floral absolutes, aged Cambodian agarwood, and velvety ambers, masterfully macerated for maximum olfactory depth.'
    },
    {
      icon: ShieldCheck,
      title: 'SAME-DAY DISPATCH & ADVANCE PAYMENT',
      description: 'Same-day express rider delivery across Rawalpindi & Islamabad, and 2–3 day fast nationwide courier. Secure 100% advance payment via Bank Transfer, EasyPaisa, or JazzCash.'
    }
  ];

  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-blue font-bold">
          The Mark of Distinction
        </span>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue-deep tracking-tight">
          Why Choose Bin Irfan
        </h2>
        <div className="w-14 h-0.5 bg-brand-blue mx-auto mt-2" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {pillars.map((item, idx) => {
          const Icon = item.icon;
          return (
            <div
              key={idx}
              className="p-7 sm:p-8 rounded-3xl bg-white border border-brand-blue-soft hover:border-brand-blue/50 transition-all duration-300 shadow-luxury-card hover:shadow-luxury-hover group flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-brand-blue-soft border border-brand-blue-light/60 flex items-center justify-center text-brand-blue-dark group-hover:scale-110 group-hover:bg-brand-blue-dark group-hover:text-white transition-all shadow-xs">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-base sm:text-lg font-bold text-brand-blue-deep tracking-wide">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {item.description}
                </p>
              </div>
              <div className="pt-5 border-t border-brand-blue-soft mt-5 flex items-center gap-2">
                <span className="text-[10px] uppercase tracking-widest text-brand-blue font-bold">
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
