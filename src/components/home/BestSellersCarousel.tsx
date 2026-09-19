import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { ProductCard } from '../common/ProductCard';
import { ArrowRight, Sparkles } from 'lucide-react';

export const BestSellersCarousel: React.FC = () => {
  const bestSellers = PRODUCTS.filter(p => p.isBestSeller || p.isFeatured).slice(0, 4);

  return (
    <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Most Coveted Masterpieces</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-cream">
            THE SIGNATURE PICKS
          </h2>
          <p className="text-sm text-brand-cream/70 mt-1 font-light">
            Fragrances chosen for unforgettable moments.
          </p>
        </div>

        <Link
          to="/shop?filter=bestsellers"
          className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-semibold text-brand-gold-light hover:text-brand-gold transition-colors border-b border-brand-gold/40 pb-1 self-start md:self-auto"
        >
          <span>View All Best Sellers</span>
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
