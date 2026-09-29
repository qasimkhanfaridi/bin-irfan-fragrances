import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../common/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

export const BestSellersCarousel: React.FC = () => {
  // Select top 4 individual bestsellers (excluding bundles)
  const bestSellers = PRODUCTS.filter(p => (p.isBestSeller || p.isFeatured) && p.category !== 'bundle').slice(0, 4);

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 sm:mb-14 gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-soft border border-brand-blue-light text-brand-blue-dark text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Most Coveted Masterpieces</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-blue-deep">
            Best Sellers Collection
          </h2>
          <p className="text-sm sm:text-base text-brand-slate/75 mt-2 font-normal">
            Fragrances formulated with 35% pure oil concentration for all-day projection and compliments.
          </p>
        </div>

        <Link
          to="/shop?filter=bestsellers"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-brand-blue-dark hover:text-brand-blue transition-colors border-b border-brand-blue-dark hover:border-brand-blue pb-1 self-start md:self-auto"
        >
          <span>View All 10 Fragrances</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {bestSellers.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};
