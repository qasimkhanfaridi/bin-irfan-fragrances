import React from 'react';
import { REVIEWS } from '../../data/reviews';
import { Star, CheckCircle, MessageSquare } from 'lucide-react';

export const CustomerReviews: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-soft border border-brand-blue-light text-brand-blue-dark text-xs font-bold uppercase tracking-wider">
          <MessageSquare className="w-3.5 h-3.5 text-brand-gold" />
          <span>Verified Client Impressions</span>
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue-deep tracking-tight">
          Words From Connoisseurs
        </h2>
        <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
          Real feedback from fragrance enthusiasts across Rawalpindi, Islamabad, Lahore, and Karachi.
        </p>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {REVIEWS.map((rev) => (
          <div
            key={rev.id}
            className="p-6 sm:p-7 rounded-3xl bg-white border border-brand-blue-soft flex flex-col justify-between hover:border-brand-blue/50 transition-all duration-300 shadow-luxury-card hover:shadow-luxury-hover"
          >
            <div>
              {/* Stars */}
              <div className="flex items-center gap-1 text-amber-500 mb-3.5">
                {[...Array(rev.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>

              {/* Title & Comment */}
              <h4 className="font-serif text-base font-bold text-brand-blue-deep mb-2 leading-snug">
                "{rev.title}"
              </h4>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                {rev.comment}
              </p>
            </div>

            {/* Author & Verification */}
            <div className="pt-5 border-t border-brand-blue-soft mt-5 flex items-center justify-between text-xs">
              <div>
                <p className="font-bold text-brand-blue-dark flex items-center gap-1">
                  <span>{rev.author}</span>
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                </p>
                <p className="text-[11px] text-slate-400 font-medium">{rev.location}</p>
              </div>
              <span className="text-[10px] text-brand-blue font-bold px-2.5 py-1 rounded-full bg-brand-blue-soft border border-brand-blue-light/60">
                {rev.productName}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
