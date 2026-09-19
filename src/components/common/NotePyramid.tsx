import React from 'react';
import { Sparkles, Heart, Compass } from 'lucide-react';

interface NotePyramidProps {
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
}

export const NotePyramid: React.FC<NotePyramidProps> = ({ topNotes, heartNotes, baseNotes }) => {
  return (
    <div className="bg-brand-dark-surface/80 border border-brand-gold/20 rounded-2xl p-5 sm:p-6 space-y-6">
      <div className="flex items-center justify-between pb-3 border-b border-brand-gold/15">
        <h4 className="font-serif text-base sm:text-lg font-bold text-brand-gold-light flex items-center gap-2">
          <span>Olfactory Note Pyramid</span>
        </h4>
        <span className="text-[11px] text-brand-gold/70 tracking-widest uppercase font-semibold">
          35% Extrait Strength
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Top Notes */}
        <div className="p-4 rounded-xl bg-brand-dark/70 border border-brand-gold/15 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-amber-400" />
          <div className="flex items-center gap-2 text-xs text-amber-300 font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Top Notes</span>
          </div>
          <p className="text-[11px] text-brand-cream/50 mb-2">First 15 - 30 minutes opening impression</p>
          <ul className="space-y-1">
            {topNotes.map(n => (
              <li key={n} className="text-xs font-medium text-brand-cream/90 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400/80" />
                {n}
              </li>
            ))}
          </ul>
        </div>

        {/* Heart Notes */}
        <div className="p-4 rounded-xl bg-brand-dark/70 border border-brand-gold/15 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-ruby-light" />
          <div className="flex items-center gap-2 text-xs text-brand-ruby-light font-bold uppercase tracking-wider mb-2">
            <Heart className="w-3.5 h-3.5" />
            <span>Heart Notes</span>
          </div>
          <p className="text-[11px] text-brand-cream/50 mb-2">Radiates for 2 - 6 hours</p>
          <ul className="space-y-1">
            {heartNotes.map(n => (
              <li key={n} className="text-xs font-medium text-brand-cream/90 flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-brand-ruby" />
                {n}
              </li>
            ))}
          </ul>
        </div>

        {/* Base Notes */}
        <div className="p-4 rounded-xl bg-brand-dark/70 border border-brand-gold/15 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1 h-full bg-brand-gold" />
          <div className="flex items-center gap-2 text-xs text-brand-gold font-bold uppercase tracking-wider mb-2">
            <Compass className="w-3.5 h-3.5" />
            <span>Base Notes</span>
          </div>
          <p className="text-[11px] text-brand-cream/50 mb-2">Lasting sillage 8 - 16+ hours</p>
          <ul className="space-y-1">
            {baseNotes.map(n => (
              <li key={n} className="text-xs font-medium text-brand-cream/90 flex items-center gap-1.5">
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
