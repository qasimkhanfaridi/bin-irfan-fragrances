import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Gift, Flame, Compass, Heart, Layers } from 'lucide-react';

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
      label: "Men's Collection",
      path: '/shop?gender=men',
      icon: Flame,
      badge: 'Popular',
      activeColor: 'bg-white hover:bg-brand-blue-soft text-brand-blue-dark'
    },
    {
      label: "Women's Collection",
      path: '/shop?gender=women',
      icon: Heart,
      badge: 'Elegant',
      activeColor: 'bg-white hover:bg-brand-blue-soft text-brand-blue-dark'
    },
    {
      label: 'Bundles & Gift Sets',
      path: '/shop?category=bundle',
      icon: Gift,
      badge: 'Save 25%',
      highlight: true,
      activeColor: 'bg-brand-blue-soft hover:bg-brand-blue-light/50 text-brand-blue-dark'
    },
    {
      label: 'Explorer Discovery Kit',
      path: '/product/explorer-discovery-kit',
      icon: Compass,
      badge: '5x10ml',
      activeColor: 'bg-white hover:bg-brand-blue-soft text-brand-blue-dark'
    },
    {
      label: 'Signature Oud Series',
      path: '/shop?family=Woody+%26+Oud',
      icon: Layers,
      badge: 'Royal',
      activeColor: 'bg-white hover:bg-brand-blue-soft text-brand-blue-dark'
    }
  ];

  return (
    <section className="py-6 border-y border-brand-blue-soft bg-white/70 backdrop-blur-sm sticky top-[60px] sm:top-[70px] z-30 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 overflow-x-auto no-scrollbar py-1 scroll-smooth">
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
