import React from 'react';
import { Instagram, Play, ArrowUpRight } from 'lucide-react';

export const InstagramSection: React.FC = () => {
  const posts = [
    {
      image: '/products/story-mist.jpg',
      type: 'reel',
      title: 'The Art of The Mist • Oud Al Sultan',
      views: '12.4K'
    },
    {
      image: '/products/black_oud.jpg',
      type: 'photo',
      title: 'Obsidian & Gold • Signature Extrait',
      views: '8.9K'
    },
    {
      image: '/products/royal_amber.jpg',
      type: 'reel',
      title: 'Maceration Masterclass • Amber Noir',
      views: '15.1K'
    },
    {
      image: '/products/blue_night.jpg',
      type: 'reel',
      title: 'Nightfall Longevity Test • Blue Night',
      views: '10.7K'
    }
  ];

  return (
    <section className="py-20 bg-brand-dark border-t border-brand-gold/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2">
              <Instagram className="w-4 h-4" />
              <span>@binirfanfragrances</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-brand-cream">
              FOLLOW OUR SCENT REELS
            </h2>
            <p className="text-sm text-brand-cream/70 mt-1 font-light">
              Behind the flacon, ASMR atomization tests, and royal fragrance reviews on Instagram & TikTok.
            </p>
          </div>

          <a
            href="https://www.instagram.com/binirfanfragrances/reels/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-brand-gold/30 hover:border-brand-gold bg-brand-dark-surface text-brand-gold-light hover:text-white text-xs font-semibold tracking-wider uppercase transition-all shadow-md self-start md:self-auto"
          >
            <span>Follow on Instagram</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((p, idx) => (
            <a
              key={idx}
              href="https://www.instagram.com/binirfanfragrances/reels/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-[4/5] rounded-2xl overflow-hidden border border-brand-gold/20 block bg-brand-dark-card shadow-lg"
            >
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/30 to-transparent opacity-60 group-hover:opacity-85 transition-opacity" />

              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-brand-dark/80 backdrop-blur-sm border border-brand-gold/30 flex items-center justify-center text-brand-gold group-hover:scale-110 transition-transform">
                {p.type === 'reel' ? <Play className="w-3.5 h-3.5 fill-current" /> : <Instagram className="w-3.5 h-3.5" />}
              </div>

              <div className="absolute inset-x-3 bottom-3 p-3 rounded-xl bg-brand-dark/80 backdrop-blur-md border border-brand-gold/20 text-xs">
                <p className="font-serif font-bold text-brand-cream line-clamp-1 group-hover:text-brand-gold-light transition-colors">
                  {p.title}
                </p>
                <span className="text-[10px] text-brand-gold font-semibold">{p.views} views</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
