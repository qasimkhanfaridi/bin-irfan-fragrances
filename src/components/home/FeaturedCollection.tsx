import React from 'react';
import { Link } from 'react-router-dom';
import { COLLECTIONS } from '../../data/collections';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FeaturedCollection: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-brand-blue-soft/30 border-y border-brand-blue-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-soft border border-brand-blue-light text-brand-blue-dark text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Curated Olfactory Portfolios</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue-deep tracking-tight">
            Curated Collections
          </h2>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Explore our curated fragrance portfolios designed for different mood expressions and royal occasions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIONS.map((col) => (
            <Link
              key={col.id}
              to={`/shop?collection=${col.id}`}
              className="group relative rounded-3xl overflow-hidden border border-brand-blue-soft bg-white flex flex-col justify-between p-6 transition-all duration-500 hover:border-brand-blue/50 shadow-luxury-card hover:shadow-luxury-hover min-h-[380px]"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover transform group-hover:scale-108 transition-transform duration-700 opacity-25 group-hover:opacity-35"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent" />
              </div>

              {/* Card Top Badge */}
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-brand-blue-soft border border-brand-blue-light text-brand-blue-dark shadow-xs">
                  {col.badge}
                </span>
              </div>

              {/* Card Bottom Details */}
              <div className="relative z-10 space-y-2.5">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-blue-deep group-hover:text-brand-blue transition-colors">
                  {col.title}
                </h3>
                <p className="font-serif italic text-sm text-brand-blue-dark font-medium">
                  {col.subtitle}
                </p>
                <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">
                  {col.description}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-blue-dark uppercase tracking-wider group-hover:text-brand-blue transition-colors">
                  <span>Explore Portfolio</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
