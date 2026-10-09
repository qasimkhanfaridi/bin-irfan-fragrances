import React from 'react';
import { Star, ExternalLink } from 'lucide-react';
import { GOOGLE_REVIEW_URL } from '../../utils/analytics';
import { trackEvent } from '../../utils/analytics';

export const GoogleReviewCTA: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const handleClick = () => {
    trackEvent('google_review_click', { location: compact ? 'compact' : 'full' });
  };

  if (compact) {
    return (
      <a
        href={GOOGLE_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="inline-flex items-center gap-1.5 text-xs font-semibold text-amber-700 hover:text-amber-900"
      >
        <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
        Leave a Google review
        <ExternalLink className="w-3 h-3 opacity-60" />
      </a>
    );
  }

  return (
    <div className="rounded-2xl border border-amber-200/80 bg-gradient-to-br from-amber-50 to-white p-6 space-y-3 shadow-soft">
      <div className="flex items-center gap-2 text-amber-800">
        <Star className="w-5 h-5 fill-amber-400 text-amber-400" />
        <h3 className="font-serif text-lg font-bold text-brand-slate-900">Help us rank on Google</h3>
      </div>
      <p className="text-sm text-brand-slate-600 leading-relaxed">
        Received your order? A honest Google review helps other customers find our Rawalpindi atelier and improves local
        search visibility.
      </p>
      <a
        href={GOOGLE_REVIEW_URL}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleClick}
        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-slate-900 text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-blue-deep transition-colors"
      >
        Review on Google Maps
        <ExternalLink className="w-3.5 h-3.5" />
      </a>
    </div>
  );
};
