import React from 'react';
import { Sparkles, Heart, Compass } from 'lucide-react';

interface NotePyramidProps {
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
}

export const NotePyramid: React.FC<NotePyramidProps> = ({ topNotes, heartNotes, baseNotes }) => {
  return (
    <div className="bg-white border border-brand-slate-200/80 rounded-2xl p-6 sm:p-8 shadow-soft space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-3 pb-4 border-b border-brand-slate-100">
        <div>
          <h4 className="font-serif text-xl sm:text-2xl font-bold text-brand-slate-900">
            Olfactory Architecture
          </h4>
          <p className="text-xs text-brand-slate-500 mt-0.5">
            Structured note progression formulated with 35% pure French perfume oil concentration
          </p>
        </div>
        <span className="text-xs text-brand-blue-700 bg-brand-blue-50 border border-brand-blue-200/70 px-3 py-1.5 rounded-full uppercase tracking-wider font-semibold">
          35% Extrait Strength
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        {/* Top Notes */}
        <div className="p-5 rounded-2xl bg-gradient-to-b from-amber-50/60 to-white border border-amber-200/60 relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-amber-400" />
          <div className="flex items-center gap-2 text-xs text-amber-700 font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <span>Top Notes</span>
          </div>
          <p className="text-[11px] text-brand-slate-500 mb-3">First 15 - 30 minutes opening impression</p>
          <ul className="space-y-1.5">
            {topNotes.map(n => (
              <li key={n} className="text-xs font-semibold text-brand-slate-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500" />
                {n}
              </li>
            ))}
          </ul>
        </div>

        {/* Heart Notes */}
        <div className="p-5 rounded-2xl bg-gradient-to-b from-brand-blue-50/60 to-white border border-brand-blue-200/60 relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-blue-500" />
          <div className="flex items-center gap-2 text-xs text-brand-blue-700 font-bold uppercase tracking-wider mb-2">
            <Heart className="w-4 h-4 text-brand-blue-500" />
            <span>Heart Notes</span>
          </div>
          <p className="text-[11px] text-brand-slate-500 mb-3">Radiates character for 2 - 6 hours</p>
          <ul className="space-y-1.5">
            {heartNotes.map(n => (
              <li key={n} className="text-xs font-semibold text-brand-slate-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-blue-500" />
                {n}
              </li>
            ))}
          </ul>
        </div>

        {/* Base Notes */}
        <div className="p-5 rounded-2xl bg-gradient-to-b from-slate-50 to-white border border-brand-slate-200 relative overflow-hidden group shadow-sm">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-brand-gold" />
          <div className="flex items-center gap-2 text-xs text-brand-gold-dark font-bold uppercase tracking-wider mb-2">
            <Compass className="w-4 h-4 text-brand-gold" />
            <span>Base Notes</span>
          </div>
          <p className="text-[11px] text-brand-slate-500 mb-3">Lasting sillage 8 - 16+ hours</p>
          <ul className="space-y-1.5">
            {baseNotes.map(n => (
              <li key={n} className="text-xs font-semibold text-brand-slate-800 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                {n}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
