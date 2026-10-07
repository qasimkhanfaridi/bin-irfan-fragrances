import React, { useState, useEffect } from 'react';
import { REVIEWS } from '../../data/reviews';
import { Star, CheckCircle, MessageSquare, Edit3, Navigation, Sparkles } from 'lucide-react';
import { WriteReviewModal, UserSubmittedReview } from '../common/WriteReviewModal';

export const CustomerReviews: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [liveReviews, setLiveReviews] = useState<UserSubmittedReview[]>([]);

  useEffect(() => {
    try {
      const saved = JSON.parse(localStorage.getItem('bin_irfan_customer_reviews') || '[]');
      if (Array.isArray(saved)) {
        setLiveReviews(saved.slice(0, 4));
      }
    } catch {
      setLiveReviews([]);
    }
  }, []);

  const handleReviewSubmitted = (newRev: UserSubmittedReview) => {
    setLiveReviews(prev => [newRev, ...prev.slice(0, 3)]);
  };

  const displayReviews = [...liveReviews, ...REVIEWS].slice(0, 4);

  return (
    <section className="py-20 sm:py-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
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

        {/* Action Buttons: Write Review & Google Maps Review */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-blue-dark hover:bg-brand-blue text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md"
          >
            <Edit3 className="w-3.5 h-3.5 text-brand-gold" />
            <span>Write a Review</span>
          </button>

          <a
            href="https://maps.google.com/?q=H3X9%2B8X4+Rawalpindi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white border border-brand-slate-300 hover:bg-slate-50 text-brand-slate-900 text-xs font-bold uppercase tracking-wider transition-all shadow-xs"
          >
            <Navigation className="w-3.5 h-3.5 text-brand-gold" />
            <span>Rate on Google Maps</span>
          </a>
        </div>
      </div>

      {/* Reviews Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {displayReviews.map((rev) => (
          <div
            key={rev.id}
            className="p-6 sm:p-7 rounded-3xl bg-white border border-brand-blue-soft flex flex-col justify-between hover:border-brand-blue/50 transition-all duration-300 shadow-luxury-card hover:shadow-luxury-hover"
          >
            <div>
              {/* Stars */}
              <div className="flex items-center justify-between mb-3.5">
                <div className="flex items-center gap-1 text-amber-500">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                {('longevity' in rev && typeof (rev as any).longevity === 'string') && (
                  <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md border border-emerald-200">
                    {((rev as any).longevity as string).split(' ')[0]} Sillage
                  </span>
                )}
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

      <WriteReviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        productId="black-oud"
        productName="Bin Irfan Fragrances"
        onReviewSubmitted={handleReviewSubmitted}
      />
    </section>
  );
};
