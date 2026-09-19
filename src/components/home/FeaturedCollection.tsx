import React from 'react';
import { Link } from 'react-router-dom';
import { COLLECTIONS } from '../../data/collections';
import { ArrowRight, Sparkles } from 'lucide-react';

export const FeaturedCollection: React.FC = () => {
  return (
    <section className="py-20 bg-brand-dark-surface/60 border-y border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Olfactory Realms</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-cream uppercase tracking-tight">
            Curated Collections
          </h2>
          <p className="text-sm text-brand-cream/70 font-light">
            Explore our curated fragrance portfolios designed for different mood expressions and royal occasions.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIONS.map((col) => (
            <Link
              key={col.id}
              to={`/shop?collection=${col.id}`}
              className="group relative rounded-2xl overflow-hidden border border-brand-gold/20 bg-brand-dark-card flex flex-col justify-between p-6 transition-all duration-500 hover:border-brand-gold/60 hover:shadow-luxury min-h-[380px]"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0 z-0">
                <img
                  src={col.image}
                  alt={col.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 opacity-35 group-hover:opacity-45"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-transparent" />
              </div>

              {/* Card Top Badge */}
              <div className="relative z-10">
                <span className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-brand-ruby/80 border border-brand-gold/30 text-brand-gold-light">
                  {col.badge}
                </span>
              </div>

              {/* Card Bottom Details */}
              <div className="relative z-10 space-y-3">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-brand-cream group-hover:text-brand-gold-light transition-colors">
                  {col.title}
                </h3>
                <p className="font-serif italic text-sm text-brand-gold-light/90 font-light">
                  {col.subtitle}
                </p>
                <p className="text-xs text-brand-cream/70 line-clamp-2 leading-relaxed">
                  {col.description}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-brand-gold uppercase tracking-wider group-hover:text-white transition-colors">
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
