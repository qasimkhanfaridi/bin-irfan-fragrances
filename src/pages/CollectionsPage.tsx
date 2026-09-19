import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COLLECTIONS } from '../data/collections';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { Sparkles, ArrowRight } from 'lucide-react';

export const CollectionsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Fragrance Collections | Bin Irfan Fragrance";
  }, []);

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold inline-flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Curated Olfactory Kingdoms</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-cream uppercase tracking-tight">
          THE COLLECTIONS
        </h1>
        <p className="text-sm text-brand-cream/70 font-light leading-relaxed">
          From the smoldering depths of Cambodian agarwood to crystalline citrus aquatic accords, discover our four curated fragrance lines.
        </p>
      </div>

      {/* Collections Sections */}
      <div className="space-y-24">
        {COLLECTIONS.map((col, index) => {
          const collectionProducts = PRODUCTS.filter(p => p.collectionId === col.id);

          return (
            <div key={col.id} id={col.id} className="space-y-10 scroll-mt-28">
              {/* Collection Hero Banner */}
              <div className="relative rounded-3xl overflow-hidden border border-brand-gold/30 bg-brand-dark-card p-8 sm:p-12 shadow-luxury flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="relative z-10 max-w-xl space-y-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-brand-ruby/80 border border-brand-gold/30 text-brand-gold-light inline-block">
                    {col.badge}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-cream">
                    {col.title}
                  </h2>
                  <p className="font-serif italic text-base sm:text-lg text-brand-gold-light/90">
                    "{col.subtitle}"
                  </p>
                  <p className="text-xs sm:text-sm text-brand-cream/75 leading-relaxed font-light">
                    {col.description}
                  </p>
                </div>

                <div className="relative z-10 w-full md:w-64 aspect-square rounded-2xl overflow-hidden border border-brand-gold/30 shadow-2xl flex-shrink-0">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-transparent pointer-events-none" />
              </div>

              {/* Products in this Collection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {collectionProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
