import React, { useState } from 'react';
import { Star, X, CheckCircle2, MessageCircle, Navigation, Sparkles } from 'lucide-react';

export interface UserSubmittedReview {
  id: string;
  productId: string;
  productName: string;
  author: string;
  location: string;
  rating: number;
  longevity: string;
  title: string;
  comment: string;
  date: string;
  verifiedBuyer: boolean;
}

interface WriteReviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  productId?: string;
  productName?: string;
  onReviewSubmitted: (review: UserSubmittedReview) => void;
}

export const WriteReviewModal: React.FC<WriteReviewModalProps> = ({
  isOpen,
  onClose,
  productId = 'black-oud',
  productName = 'Black Oud',
  onReviewSubmitted
}) => {
  const [rating, setRating] = useState(5);
  const [hoverRating, setHoverRating] = useState(0);
  const [author, setAuthor] = useState('');
  const [location, setLocation] = useState('');
  const [longevity, setLongevity] = useState('14+ Hours (All Day)');
  const [title, setTitle] = useState('');
  const [comment, setComment] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [lastReview, setLastReview] = useState<UserSubmittedReview | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!author.trim() || !comment.trim()) return;

    const newRev: UserSubmittedReview = {
      id: `user-rev-${Date.now()}`,
      productId,
      productName,
      author: `${author.trim()} (Verified Patron)`,
      location: location.trim() || 'Pakistan',
      rating,
      longevity,
      title: title.trim() || 'Remarkable Fragrance Experience',
      comment: comment.trim(),
      date: 'Just now',
      verifiedBuyer: true
    };

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('bin_irfan_customer_reviews') || '[]');
      localStorage.setItem('bin_irfan_customer_reviews', JSON.stringify([newRev, ...existing]));
    } catch (err) {
      console.error(err);
    }

    onReviewSubmitted(newRev);
    setLastReview(newRev);
    setSubmitted(true);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setAuthor('');
    setLocation('');
    setTitle('');
    setComment('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={handleResetAndClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg bg-white rounded-3xl border border-brand-slate-200 shadow-2xl p-6 sm:p-8 z-10 max-h-[90vh] overflow-y-auto">
        <button
          onClick={handleResetAndClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!submitted ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-gold/15 border border-brand-gold/30 text-brand-slate-900 text-[11px] font-bold uppercase tracking-wider mb-2">
                <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
                <span>Bin Irfan Patron Feedback</span>
              </div>
              <h3 className="font-serif text-2xl font-bold text-brand-slate-900">
                Review {productName}
              </h3>
              <p className="text-xs text-brand-slate-500 mt-1">
                Your genuine impression helps other Pakistani fragrance lovers discover our artisanal extrait.
              </p>
            </div>

            {/* Star Rating Selector */}
            <div className="space-y-1.5">
              <label className="text-xs font-bold uppercase tracking-wider text-brand-slate-800 block">
                Your Overall Rating
              </label>
              <div className="flex items-center gap-1.5">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button
                    key={star}
                    type="button"
                    onClick={() => setRating(star)}
                    onMouseEnter={() => setHoverRating(star)}
                    onMouseLeave={() => setHoverRating(0)}
                    className="p-1 focus:outline-none transition-transform hover:scale-110"
                  >
                    <Star
                      className={`w-7 h-7 ${
                        (hoverRating || rating) >= star
                          ? 'fill-amber-400 text-amber-400'
                          : 'text-slate-200'
                      }`}
                    />
                  </button>
                ))}
                <span className="text-xs font-bold text-brand-slate-700 ml-2">
                  {rating === 5 ? '5.0 — Outstanding / Beast Mode' : `${rating}.0 / 5.0`}
                </span>
              </div>
            </div>

            {/* Author Name & City */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-brand-slate-800 block mb-1">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Tariq Mehmood"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-brand-slate-200 focus:border-brand-blue-600 outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-bold uppercase tracking-wider text-brand-slate-800 block mb-1">
                  City / Sector *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Rawalpindi / Saddar"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-brand-slate-200 focus:border-brand-blue-600 outline-none"
                />
              </div>
            </div>

            {/* Longevity Assessment */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-brand-slate-800 block mb-1">
                Longevity &amp; Performance
              </label>
              <select
                value={longevity}
                onChange={(e) => setLongevity(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-brand-slate-200 focus:border-brand-blue-600 outline-none bg-white"
              >
                <option value="14+ Hours (All Day)">14+ Hours (Beast projection in Pakistani weather)</option>
                <option value="10-12 Hours (Strong)">10–12 Hours (Solid office to evening)</option>
                <option value="8-10 Hours (Moderate)">8–10 Hours (Comfortable everyday sillage)</option>
              </select>
            </div>

            {/* Review Title */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-brand-slate-800 block mb-1">
                Review Headline
              </label>
              <input
                type="text"
                placeholder="e.g. Pure luxury, lasted through a whole evening gala"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full text-xs px-3.5 py-2.5 rounded-xl border border-brand-slate-200 focus:border-brand-blue-600 outline-none"
              />
            </div>

            {/* Review Details */}
            <div>
              <label className="text-xs font-bold uppercase tracking-wider text-brand-slate-800 block mb-1">
                Detailed Feedback *
              </label>
              <textarea
                required
                rows={3}
                placeholder="How did the perfume develop on your skin or clothes? Did it garner compliments?"
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full text-xs p-3.5 rounded-xl border border-brand-slate-200 focus:border-brand-blue-600 outline-none resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-xl bg-brand-slate-900 hover:bg-brand-slate-800 text-white font-bold text-xs uppercase tracking-widest transition-all shadow-md"
            >
              Submit Verified Review
            </button>
          </form>
        ) : (
          /* Thank You & Google Review / WhatsApp Sharing */
          <div className="text-center py-6 space-y-5">
            <div className="w-14 h-14 rounded-full bg-emerald-100 text-emerald-600 mx-auto flex items-center justify-center">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-brand-slate-900">
                Thank You for Your Feedback!
              </h3>
              <p className="text-xs text-brand-slate-600 mt-2 max-w-sm mx-auto">
                Your review has been verified and added to the <strong>{productName}</strong> page.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-brand-light-bg border border-brand-slate-200 space-y-3 text-left">
              <span className="text-[11px] font-bold uppercase tracking-wider text-brand-blue-700 block">
                Boost Bin Irfan in Rawalpindi &amp; Pakistan
              </span>
              <p className="text-xs text-brand-slate-600 leading-relaxed">
                As an artisanal independent house, your word-of-mouth helps us grow against mass commercial brands.
              </p>

              <div className="flex flex-col gap-2 pt-1">
                {/* Send via WhatsApp */}
                <a
                  href={`https://wa.me/923215186400?text=${encodeURIComponent(
                    `Assalam-o-Alaikum Bin Irfan Fragrances, I just submitted a ${lastReview?.rating}-star review for ${lastReview?.productName}:\n\n"${lastReview?.title}"\n${lastReview?.comment}\n\n— ${lastReview?.author}, ${lastReview?.location}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-sm"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Send Review to WhatsApp Concierge</span>
                </a>

                {/* Post on Google Maps */}
                <a
                  href="https://maps.google.com/?q=H3X9%2B8X4+Rawalpindi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 px-3 rounded-xl bg-white border border-brand-slate-300 hover:bg-slate-50 text-brand-slate-900 font-bold text-xs flex items-center justify-center gap-2 transition-all"
                >
                  <Navigation className="w-4 h-4 text-brand-gold" />
                  <span>Leave Review on Google Maps</span>
                </a>
              </div>
            </div>

            <button
              onClick={handleResetAndClose}
              className="text-xs font-bold text-brand-slate-500 hover:text-brand-slate-800 underline"
            >
              Done / Return to Fragrance
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default WriteReviewModal;
