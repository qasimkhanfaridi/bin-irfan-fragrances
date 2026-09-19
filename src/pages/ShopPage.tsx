import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { FragranceFamily } from '../types/product';
import { useWishlist } from '../context/WishlistContext';
import { Filter, SlidersHorizontal, Sparkles, X } from 'lucide-react';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { wishlist } = useWishlist();

  const [selectedFamily, setSelectedFamily] = useState<string>('All');
  const [selectedCollection, setSelectedCollection] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sync with URL query parameters
  useEffect(() => {
    document.title = "Shop All Luxury Fragrances | Bin Irfan Fragrance";
    window.scrollTo(0, 0);

    const filterParam = searchParams.get('filter');
    const colParam = searchParams.get('collection');

    if (colParam) {
      setSelectedCollection(colParam);
    }
  }, [searchParams]);

  const families: (string | FragranceFamily)[] = [
    'All',
    'Woody & Oud',
    'Oriental & Amber',
    'Fresh & Citrus',
    'Chypre & Smoky',
    'Aromatic Fougere',
    'Floral Oriental',
    'Musk & Powder'
  ];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter(p => {
      // Family filter
      if (selectedFamily !== 'All' && p.fragranceFamily !== selectedFamily) return false;
      // Collection filter
      if (selectedCollection !== 'All' && p.collectionId !== selectedCollection) return false;
      // Wishlist filter
      if (searchParams.get('filter') === 'wishlist' && !wishlist.includes(p.id)) return false;
      // Bestsellers filter
      if (searchParams.get('filter') === 'bestsellers' && !p.isBestSeller) return false;
      // Search query
      if (searchQuery.trim() !== '') {
        const q = searchQuery.toLowerCase();
        const matches =
          p.name.toLowerCase().includes(q) ||
          p.fragranceFamily.toLowerCase().includes(q) ||
          p.topNotes.some(n => n.toLowerCase().includes(q)) ||
          p.baseNotes.some(n => n.toLowerCase().includes(q));
        if (!matches) return false;
      }
      return true;
    }).sort((a, b) => {
      if (sortBy === 'price-low') return a.variants[0].pricePKR - b.variants[0].pricePKR;
      if (sortBy === 'price-high') return b.variants[0].pricePKR - a.variants[0].pricePKR;
      if (sortBy === 'rating') return b.rating - a.rating;
      return 0; // featured default
    });
  }, [selectedFamily, selectedCollection, sortBy, searchQuery, searchParams, wishlist]);

  const clearAllFilters = () => {
    setSelectedFamily('All');
    setSelectedCollection('All');
    setSearchQuery('');
    setSearchParams({});
  };

  const isFiltered = selectedFamily !== 'All' || selectedCollection !== 'All' || searchQuery !== '' || searchParams.has('filter');

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
        <span className="text-xs uppercase tracking-[0.3em] text-brand-gold font-bold flex items-center justify-center gap-2">
          <Sparkles className="w-3.5 h-3.5" />
          <span>The Complete Catalogue</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-cream uppercase tracking-tight">
          ARTISANAL FRAGRANCES
        </h1>
        <p className="text-sm text-brand-cream/70 font-light max-w-xl mx-auto">
          Explore our collection of pure Extrait De Parfum formulations, rare agarwood blends, and timeless olfactory impressions.
        </p>
      </div>

      {/* Controls Bar */}
      <div className="bg-brand-dark-surface/80 border border-brand-gold/20 rounded-2xl p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Search Input */}
        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="Search by scent or note..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-brand-dark border border-brand-gold/20 rounded-xl px-4 py-2 text-xs text-brand-cream placeholder-brand-cream/40 focus:border-brand-gold outline-none"
          />
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex md:hidden w-full justify-between items-center">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="px-4 py-2 rounded-xl bg-brand-dark border border-brand-gold/30 text-brand-gold-light text-xs font-semibold flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            <span>Filter Categories</span>
          </button>
          <span className="text-xs text-brand-cream/60">
            {filteredProducts.length} Scents
          </span>
        </div>

        {/* Desktop Quick Family Chips */}
        <div className="hidden md:flex items-center gap-2 overflow-x-auto max-w-xl pb-1">
          {families.slice(0, 5).map(f => (
            <button
              key={f}
              onClick={() => setSelectedFamily(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all ${
                selectedFamily === f
                  ? 'bg-brand-ruby text-white border border-brand-gold/50 shadow-sm'
                  : 'bg-brand-dark/60 text-brand-cream/70 border border-brand-gold/15 hover:border-brand-gold/40'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <label htmlFor="sort-select" className="text-xs text-brand-cream/60 whitespace-nowrap">Sort By:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-brand-dark border border-brand-gold/25 text-brand-gold-light text-xs rounded-xl px-3 py-2 outline-none cursor-pointer focus:border-brand-gold"
          >
            <option value="featured">Featured Picks</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Highest Rated</option>
          </select>
        </div>
      </div>

      {/* Active Filter Clear Bar */}
      {isFiltered && (
        <div className="mb-6 flex items-center justify-between bg-brand-ruby/15 border border-brand-ruby/40 rounded-xl px-4 py-2.5 text-xs">
          <span className="text-brand-cream/80">
            Showing filtered results ({filteredProducts.length} fragrance{filteredProducts.length === 1 ? '' : 's'})
          </span>
          <button
            onClick={clearAllFilters}
            className="text-brand-gold-light hover:text-white font-semibold flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset Filters</span>
          </button>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-24 bg-brand-dark-card rounded-3xl border border-brand-gold/15 p-8 space-y-4">
          <SlidersHorizontal className="w-12 h-12 text-brand-gold/40 mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-brand-cream">
            No Fragrances Matched Your Criteria
          </h3>
          <p className="text-xs text-brand-cream/60 max-w-sm mx-auto">
            Try adjusting your search terms or resetting the fragrance family filters.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-2.5 rounded-xl bg-brand-ruby text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-ruby-light transition-all"
          >
            View All 10 Fragrances
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}

      {/* Mobile Filter Drawer */}
      {showMobileFilters && (
        <div className="fixed inset-0 z-50 flex justify-end bg-black/80 backdrop-blur-sm">
          <div className="w-4/5 max-w-xs bg-brand-dark-card border-l border-brand-gold/30 p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-brand-gold/20">
                <h3 className="font-serif text-lg font-bold text-brand-cream">Filter Fragrances</h3>
                <button onClick={() => setShowMobileFilters(false)}>
                  <X className="w-5 h-5 text-brand-cream/60" />
                </button>
              </div>

              <div className="mt-6 space-y-4">
                <span className="text-xs uppercase tracking-wider text-brand-gold font-bold block">
                  Fragrance Families:
                </span>
                <div className="flex flex-col space-y-1.5">
                  {families.map(f => (
                    <button
                      key={f}
                      onClick={() => {
                        setSelectedFamily(f);
                        setShowMobileFilters(false);
                      }}
                      className={`text-left px-3 py-2 rounded-lg text-xs font-semibold transition-all ${
                        selectedFamily === f
                          ? 'bg-brand-ruby text-white'
                          : 'text-brand-cream/70 hover:bg-brand-dark'
                      }`}
                    >
                      {f}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <button
              onClick={() => {
                clearAllFilters();
                setShowMobileFilters(false);
              }}
              className="w-full py-2.5 rounded-xl bg-brand-dark border border-brand-gold/30 text-brand-gold-light text-xs font-semibold"
            >
              Reset All
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
