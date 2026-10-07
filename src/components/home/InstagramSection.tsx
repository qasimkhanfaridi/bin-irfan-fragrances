import React from 'react';
import { Instagram, ArrowUpRight, Sparkles } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const posts = [
    {
      image: '/products/lifestyle_spritz.jpg',
      title: 'The Art of Sillage • 12+ Hour Projection',
      tag: 'Extrait Formula'
    },
    {
      image: '/products/paradise_sapphire.jpg',
      title: 'Paradise Extrait • Pure Aquatic Freshness',
      tag: 'Fresh Impression'
    },
    {
      image: '/products/royal_trio_bundle.jpg',
      title: 'The Royal Trio Discovery Set',
      tag: 'Luxury Set'
    },
    {
      image: '/products/box_packaging.jpg',
      title: 'Rigid Gift Box Craftsmanship',
      tag: 'Presentation'
    }
  ];

  return (
    <section className="py-20 sm:py-28 bg-brand-blue-soft/30 border-t border-brand-blue-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-brand-blue font-bold mb-2">
              <Instagram className="w-4 h-4 text-brand-blue-dark" />
              <span>@binirfanfragrances</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-brand-blue-deep">
              The Scent Gallery
            </h2>
            <p className="text-sm sm:text-base text-slate-600 mt-1 font-normal">
              Follow our journey on Instagram for scent notes breakdowns, flacon presentations, and new seasonal releases.
            </p>
          </div>

          <a
            href="https://www.instagram.com/binirfanfragrances/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-brand-blue-medium/30 hover:border-brand-blue bg-white text-brand-blue-dark hover:bg-brand-blue-soft text-xs font-bold tracking-wider uppercase transition-all shadow-xs self-start md:self-auto"
          >
            <span>Follow @binirfanfragrances</span>
            <ArrowUpRight className="w-4 h-4 text-brand-blue" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((p, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/binirfanfragrances/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/5] rounded-3xl overflow-hidden border border-brand-blue-soft block bg-white shadow-luxury-card hover:shadow-luxury-hover"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-106 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm border border-brand-blue-light flex items-center justify-center text-brand-blue-dark group-hover:scale-110 transition-transform shadow-xs">
                <Instagram className="w-3.5 h-3.5 text-brand-blue-dark" />
              </div>

              <div className="absolute inset-x-3 bottom-3 p-3 rounded-2xl bg-white/95 backdrop-blur-md border border-brand-blue-soft text-xs shadow-xs">
                <p className="font-serif font-bold text-brand-blue-deep line-clamp-1 group-hover:text-brand-blue transition-colors">
                  {p.title}
                </p>
                <span className="text-[10px] text-brand-blue font-bold tracking-wide uppercase">{p.tag}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
