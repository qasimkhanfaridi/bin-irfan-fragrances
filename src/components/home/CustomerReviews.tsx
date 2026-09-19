import React from 'react';
import { REVIEWS } from '../../data/reviews';
import { Star, CheckCircle, Quote, MessageSquare } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-semibold">
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Verified Client Impressions</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-cream uppercase tracking-tight">
          WORDS FROM CONNOISSEURS
        </h2>
        <p className="text-xs text-brand-cream/50 uppercase tracking-widest font-medium">
          [Customer Reviews — Verified Sample Previews]
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="p-6 rounded-2xl bg-brand-dark-card border border-brand-gold/15 flex flex-col justify-between hover:border-brand-gold/40 transition-all duration-300 relative group"
          >
            <div>
              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-400 mb-3">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-current" />
                ))}
              </div>

              {/* Title & Comment */}
              <h4 className="font-serif text-base font-bold text-brand-cream mb-2 leading-snug">
                "{rev.title}"
              </h4>
              <p className="text-xs sm:text-sm text-brand-cream/75 leading-relaxed font-light">
                {rev.comment}
              </p>
            </div>

            {/* Author & Verification */}
            <div className="pt-6 border-t border-brand-gold/10 mt-6 flex items-center justify-between text-xs">
              <div>
                <p className="font-semibold text-brand-gold-light flex items-center gap-1">
                  <span>{rev.author}</span>
                  <CheckCircle className="w-3 h-3 text-emerald-400" />
                </p>
                <p className="text-[11px] text-brand-cream/40">{rev.location}</p>
              </div>
              <span className="text-[10px] text-brand-gold/80 px-2 py-0.5 rounded bg-brand-dark border border-brand-gold/20">
                {rev.productName}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
