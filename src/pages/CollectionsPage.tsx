import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { COLLECTIONS } from '../data/collections';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { Sparkles, ArrowRight } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export const CollectionsPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-brand-light-bg py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
      <SEOHead
        title="Curated Fragrance Collections"
        description="Explore the curated collections of Bin Irfan Fragrance: The Oud Collection, The Signature Collection, The Luxury Extrait Series, and The Fresh Collection."
        keywords="perfume collections Pakistan, Oud collection, luxury extrait collection, fresh aquatic perfumes"
        canonicalPath="/collections"
      />
      
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-blue-700 font-bold bg-brand-blue-50 border border-brand-blue-200/60 px-3.5 py-1 rounded-full inline-flex items-center gap-2">
          <Sparkles className="w-3.5 h-3.5 text-brand-blue-600" />
          <span>Curated Olfactory Realms</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-slate-900 tracking-tight">
          THE COLLECTIONS
        </h1>
        <p className="text-sm text-brand-slate-600 font-light leading-relaxed">
          From the smoldering depths of Cambodian agarwood to crystalline citrus aquatic accords, discover our four curated fragrance lines.
        </p>
      </div>

      {/* Collections Sections */}
      <div className="space-y-24">
        {COLLECTIONS.map((col) => {
          const collectionProducts = PRODUCTS.filter(p => p.collectionId === col.id);

          return (
            <div key={col.id} id={col.id} className="space-y-10 scroll-mt-28">
              {/* Collection Hero Banner */}
              <div className="relative rounded-3xl overflow-hidden border border-brand-slate-200/80 bg-white p-8 sm:p-12 shadow-soft flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="relative z-10 max-w-xl space-y-4">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest bg-brand-blue-50 border border-brand-blue-200/60 text-brand-blue-700 inline-block">
                    {col.badge}
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-bold text-brand-slate-900">
                    {col.title}
                  </h2>
                  <p className="font-serif italic text-base sm:text-lg text-brand-blue-800">
                    "{col.subtitle}"
                  </p>
                  <p className="text-xs sm:text-sm text-brand-slate-600 leading-relaxed font-light">
                    {col.description}
                  </p>
                </div>

                <div className="relative z-10 w-full md:w-64 aspect-square rounded-2xl overflow-hidden border border-brand-slate-200 shadow-md flex-shrink-0">
                  <img
                    src={col.image}
                    alt={col.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
                  />
                </div>
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
