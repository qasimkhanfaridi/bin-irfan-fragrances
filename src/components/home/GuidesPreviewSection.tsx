import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, ArrowRight } from 'lucide-react';
import { GUIDES } from '../../data/guides';

export const GuidesPreviewSection: React.FC = () => {
  const featured = GUIDES.slice(0, 3);

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white border-y border-brand-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div className="space-y-2">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-blue-700 font-bold">
              <BookOpen className="w-3.5 h-3.5" />
              Fragrance guides
            </span>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-brand-slate-900">
              Perfume tips for Pakistan
            </h2>
            <p className="text-sm text-brand-slate-600 max-w-xl">
              Extrait concentration, same-day Rawalpindi delivery, and how to order — written for search and for you.
            </p>
          </div>
          <Link
            to="/guides"
            className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue-700 hover:text-brand-blue-900"
          >
            All guides
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {featured.map(g => (
            <Link
              key={g.slug}
              to={`/guides/${g.slug}`}
              className="p-5 rounded-2xl border border-brand-slate-200/80 bg-brand-light-bg hover:border-brand-blue-200 hover:shadow-soft transition-all group"
            >
              <h3 className="font-serif font-bold text-brand-slate-900 group-hover:text-brand-blue-700 line-clamp-2">
                {g.title}
              </h3>
              <p className="text-xs text-brand-slate-600 mt-2 line-clamp-3">{g.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
