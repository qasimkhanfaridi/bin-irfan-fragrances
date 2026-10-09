import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Clock, ArrowRight } from 'lucide-react';
import { GUIDES } from '../data/guides';
import { SEOHead } from '../components/common/SEOHead';

export const GuidesIndexPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-light-bg py-14 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
      <SEOHead
        title="Fragrance Guides — Extrait, Delivery & Ordering in Pakistan"
        description="Expert guides on Extrait de Parfum, same-day perfume delivery in Rawalpindi & Islamabad, oud for men, and WhatsApp ordering from Bin Irfan Fragrances."
        keywords="perfume guides Pakistan, extrait de parfum guide, Rawalpindi perfume delivery, oud perfume tips"
        canonicalPath="/guides"
      />
      <div className="text-center space-y-3 mb-12">
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-blue-700 font-bold bg-brand-blue-50 border border-brand-blue-200/60 px-3 py-1 rounded-full">
          <BookOpen className="w-3.5 h-3.5" />
          Scent journal
        </span>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-brand-slate-900">Fragrance guides</h1>
        <p className="text-sm text-brand-slate-600 max-w-lg mx-auto">
          Practical advice on concentration, delivery across Pakistan, and ordering from our Rawalpindi atelier.
        </p>
      </div>
      <ul className="space-y-4">
        {GUIDES.map(guide => (
          <li key={guide.slug}>
            <Link
              to={`/guides/${guide.slug}`}
              className="block p-6 rounded-2xl bg-white border border-brand-slate-200/80 shadow-soft hover:border-brand-blue-200 hover:shadow-md transition-all group"
            >
              <h2 className="font-serif text-lg font-bold text-brand-slate-900 group-hover:text-brand-blue-700 transition-colors">
                {guide.title}
              </h2>
              <p className="text-sm text-brand-slate-600 mt-2 line-clamp-2">{guide.description}</p>
              <div className="flex items-center justify-between mt-4 text-xs text-brand-slate-500">
                <span className="inline-flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" />
                  {guide.readMinutes} min read
                </span>
                <span className="inline-flex items-center gap-1 text-brand-blue-600 font-semibold">
                  Read guide
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
