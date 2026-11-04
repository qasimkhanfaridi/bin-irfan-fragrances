import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Gift, Flame, Compass, Heart, Layers, MapPin, Truck } from 'lucide-react';

export const CategoryPillsSection: React.FC = () => {
  const categories = [
    {
      label: 'All Fragrances',
      path: '/shop',
      icon: Sparkles,
      badge: '14 Scents',
      activeColor: 'bg-brand-blue-dark text-white'
    },
    {
      label: "Men's Perfumes",
      path: '/mens-perfumes',
      icon: Flame,
      badge: '35% Extrait',
      activeColor: 'bg-white hover:bg-brand-blue-soft text-brand-blue-dark'
    },
    {
      label: "Women's Perfumes",
      path: '/womens-perfumes',
      icon: Heart,
      badge: 'Luxury',
      activeColor: 'bg-white hover:bg-brand-blue-soft text-brand-blue-dark'
    },
    {
      label: 'Oud & Extrait',
      path: '/oud-perfumes',
      icon: Layers,
      badge: 'Royal Assorted',
      activeColor: 'bg-white hover:bg-brand-blue-soft text-brand-blue-dark'
    },
    {
      label: 'Bundles & Gift Sets',
      path: '/perfume-gift-sets',
      icon: Gift,
      badge: 'Save 25%',
      highlight: true,
      activeColor: 'bg-brand-blue-soft hover:bg-brand-blue-light/50 text-brand-blue-dark'
    },
    {
      label: 'Islamabad Express Delivery',
      path: '/perfume-delivery-islamabad',
      icon: Truck,
      badge: 'Same-Day',
      activeColor: 'bg-white hover:bg-brand-blue-soft text-brand-blue-dark'
    },
    {
      label: 'Rawalpindi Studio',
      path: '/perfume-shop-rawalpindi',
      icon: MapPin,
      badge: 'Dhoke Chiragh Deen',
      activeColor: 'bg-white hover:bg-brand-blue-soft text-brand-blue-dark'
    }
  ];

  return (
    <section className="py-3 sm:py-4 border-y border-brand-blue-soft bg-white/95 backdrop-blur-md relative z-10 shadow-xs w-full max-w-full overflow-hidden">
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 sm:gap-2.5 overflow-x-auto no-scrollbar py-0.5 scroll-smooth overscroll-x-contain">
          {categories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <Link
                key={idx}
                to={cat.path}
                className={`flex items-center gap-2 px-3.5 py-2 rounded-full border border-brand-blue-soft text-xs font-semibold whitespace-nowrap transition-all duration-300 shadow-xs flex-shrink-0 ${
                  cat.highlight
                    ? 'border-brand-blue/50 bg-gradient-to-r from-brand-blue-soft to-brand-blue-light/40 text-brand-blue-dark font-bold'
                    : 'text-brand-slate hover:border-brand-blue hover:text-brand-blue-dark bg-white'
                }`}
              >
                <Icon className={`w-3.5 h-3.5 ${cat.highlight ? 'text-brand-blue-dark' : 'text-brand-blue'}`} />
                <span>{cat.label}</span>
                {cat.badge && (
                  <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                    cat.highlight 
                      ? 'bg-brand-blue-dark text-white' 
                      : 'bg-brand-blue-soft text-brand-blue-dark border border-brand-blue-light/60'
                  }`}>
                    {cat.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};
