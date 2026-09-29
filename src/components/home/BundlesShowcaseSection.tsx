import React from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Gift, CheckCircle2, ShoppingBag, MessageCircle, ArrowRight, Sparkles } from 'lucide-react';

export const BundlesShowcaseSection: React.FC = () => {
  const { addToCart, formatPrice, generateWhatsAppLink } = useCart();
  
  // Filter bundle products
  const bundles = PRODUCTS.filter(p => p.category === 'bundle' || p.category === 'discovery-set');

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-brand-blue-soft/50 via-white to-white border-t border-brand-blue-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-soft border border-brand-blue-light text-brand-blue-dark text-xs font-bold uppercase tracking-wider">
            <Gift className="w-3.5 h-3.5 text-brand-gold" />
            <span>Value Bundles & Discovery Sets</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-brand-blue-deep tracking-tight">
            Curated Luxury Sets
          </h2>
          <p className="text-sm sm:text-base text-brand-slate/80 font-normal leading-relaxed">
            Experience multiple artisanal signatures or discover your personal favorite with our handcrafted discovery kits and bundle collections.
          </p>
        </div>

        {/* 2x2 or 4-col Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {bundles.map((bundle) => {
            const variant = bundle.variants[0];
            const savings = variant.compareAtPKR ? variant.compareAtPKR - variant.pricePKR : 0;

            return (
              <div
                key={bundle.id}
                className="bg-white rounded-3xl border border-brand-blue-soft hover:border-brand-blue/50 overflow-hidden shadow-luxury-card hover:shadow-luxury-hover transition-all duration-500 flex flex-col justify-between group"
              >
                {/* Image Container with Badges */}
                <div className="relative aspect-square w-full bg-brand-blue-soft/30 overflow-hidden">
                  <Link to={`/shop/${bundle.slug}`} className="block w-full h-full">
                    <img
                      src={bundle.image}
                      alt={bundle.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </Link>

                  {/* Savings Badge */}
                  {savings > 0 && (
                    <div className="absolute top-3 left-3 z-10">
                      <span className="px-3 py-1 rounded-full bg-brand-blue-dark text-white text-[10px] font-bold uppercase tracking-wider shadow-sm flex items-center gap-1">
                        <Sparkles className="w-3 h-3 text-brand-gold" />
                        <span>Save {formatPrice(savings)}</span>
                      </span>
                    </div>
                  )}

                  {/* Top Free Shipping Pill */}
                  <div className="absolute top-3 right-3 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-sm text-emerald-800 border border-emerald-200 text-[10px] font-bold uppercase tracking-wider">
                      Free Shipping
                    </span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between space-y-4">
                  <div>
                    <span className="text-[10px] font-bold text-brand-blue tracking-widest uppercase block mb-1">
                      {bundle.category === 'discovery-set' ? 'Travel Discovery Set' : 'Luxury Perfume Pack'}
                    </span>

                    <Link to={`/shop/${bundle.slug}`}>
                      <h3 className="font-serif text-lg font-bold text-brand-blue-deep group-hover:text-brand-blue transition-colors leading-snug">
                        {bundle.name}
                      </h3>
                    </Link>

                    <p className="text-xs text-brand-slate/75 line-clamp-2 mt-2 leading-relaxed">
                      {bundle.shortDescription}
                    </p>

                    {/* Bundle items list with checkmarks */}
                    {bundle.bundleItems && (
                      <div className="mt-3.5 pt-3 border-t border-brand-blue-soft space-y-1.5">
                        <span className="text-[10px] font-bold text-brand-blue-dark uppercase tracking-wider block">
                          Included in Box:
                        </span>
                        {bundle.bundleItems.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-1.5 text-[11px] text-brand-slate/85">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
                            <span className="truncate">{item}</span>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Price & Actions */}
                  <div className="pt-3 border-t border-brand-blue-soft space-y-3">
                    <div className="flex items-baseline justify-between">
                      <div>
                        <span className="font-serif text-2xl font-bold text-brand-blue-deep">
                          {formatPrice(variant.pricePKR)}
                        </span>
                        {variant.compareAtPKR && (
                          <span className="ml-2 text-xs text-slate-400 line-through">
                            {formatPrice(variant.compareAtPKR)}
                          </span>
                        )}
                      </div>
                      <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                        {bundle.savingsPercentage}% OFF
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 pt-1">
                      <button
                        onClick={() => addToCart(bundle, variant.size, 1)}
                        className="py-2.5 px-3 rounded-xl bg-brand-blue-dark hover:bg-brand-blue-navy text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-xs"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>Add to Bag</span>
                      </button>

                      <a
                        href={generateWhatsAppLink(bundle, variant.size, 1)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="py-2.5 px-3 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-300 text-emerald-800 text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-1 shadow-xs"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-600" />
                        <span>WhatsApp</span>
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* View All Bundles Banner */}
        <div className="mt-12 text-center">
          <Link
            to="/shop?category=bundle"
            className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-brand-blue-dark hover:text-brand-blue pb-1 border-b border-brand-blue-dark hover:border-brand-blue transition-colors"
          >
            <span>View All Value Packs & Gifting Options</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
