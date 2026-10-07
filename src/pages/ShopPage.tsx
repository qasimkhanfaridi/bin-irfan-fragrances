import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PRODUCTS } from '../data/products';
import { ProductCard } from '../components/common/ProductCard';
import { FragranceFamily } from '../types/product';
import { useWishlist } from '../context/WishlistContext';
import { Filter, SlidersHorizontal, Sparkles, X, Gift, Flame, Heart } from 'lucide-react';
import { SEOHead } from '../components/common/SEOHead';

export const ShopPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const { wishlist } = useWishlist();

  const [selectedGender, setSelectedGender] = useState<string>('All');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedFamily, setSelectedFamily] = useState<string>('All');
  const [selectedCollection, setSelectedCollection] = useState<string>('All');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high' | 'rating'>('featured');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);

  // Sync with URL query parameters
  useEffect(() => {
    document.title = "Shop All Luxury Fragrances | Bin Irfan Fragrance";
    window.scrollTo(0, 0);

    const genderParam = searchParams.get('gender');
    const catParam = searchParams.get('category');
    const familyParam = searchParams.get('family');
    const colParam = searchParams.get('collection');

    if (genderParam) setSelectedGender(genderParam);
    if (catParam) setSelectedCategory(catParam);
    if (familyParam) setSelectedFamily(familyParam);
    if (colParam) setSelectedCollection(colParam);
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
      // Gender filter
      if (selectedGender !== 'All' && p.gender !== selectedGender) return false;
      // Category filter (bundle vs perfume)
      if (selectedCategory === 'bundle' && p.category !== 'bundle' && p.category !== 'discovery-set') return false;
      if (selectedCategory === 'perfume' && p.category !== 'perfume') return false;
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
  }, [selectedGender, selectedCategory, selectedFamily, selectedCollection, sortBy, searchQuery, searchParams, wishlist]);

  const clearAllFilters = () => {
    setSelectedGender('All');
    setSelectedCategory('All');
    setSelectedFamily('All');
    setSelectedCollection('All');
    setSearchQuery('');
    setSearchParams({});
  };

  const isFiltered = 
    selectedGender !== 'All' || 
    selectedCategory !== 'All' || 
    selectedFamily !== 'All' || 
    selectedCollection !== 'All' || 
    searchQuery !== '' || 
    searchParams.has('filter') ||
    searchParams.has('gender') ||
    searchParams.has('category');

  return (
    <div className="min-h-screen py-10 sm:py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <SEOHead
        title="Shop All Luxury Fragrances & Extrait De Parfum"
        description="Browse the complete Bin Irfan Fragrance collection. Handcrafted 35% concentration Extrait de Parfum flacons, royal oud, woody, oriental and aquatic perfumes with Cash on Delivery across Pakistan."
        keywords="shop perfumes online Pakistan, Bin Irfan collection, buy Extrait de parfum, fragrance catalogue Pakistan, perfume COD"
        canonicalPath="/shop"
      />
      
      {/* Top Banner */}
      <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12 space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-blue-soft border border-brand-blue-light text-brand-blue-dark text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
          <span>The Complete Catalogue</span>
        </span>
        <h1 className="font-serif text-3xl sm:text-5xl font-bold text-brand-blue-deep tracking-tight">
          Artisanal Fragrance Collection
        </h1>
        <p className="text-sm sm:text-base text-slate-600 font-normal max-w-xl mx-auto">
          Explore our collection of pure 35% Extrait De Parfum formulations, curated gift bundles, and timeless impressions.
        </p>
      </div>

      {/* Quick Category / Gender Filter Pills Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-4 border-b border-brand-blue-soft">
        
        {/* Gender & Type Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-1">
          <button
            onClick={() => { setSelectedGender('All'); setSelectedCategory('All'); }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all ${
              selectedGender === 'All' && selectedCategory === 'All'
                ? 'bg-brand-blue-dark text-white shadow-xs'
                : 'bg-white text-slate-700 border border-brand-blue-soft hover:bg-brand-blue-soft'
            }`}
          >
            All Products
          </button>

          <button
            onClick={() => { setSelectedGender('men'); setSelectedCategory('All'); }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedGender === 'men'
                ? 'bg-brand-blue-dark text-white shadow-xs'
                : 'bg-white text-slate-700 border border-brand-blue-soft hover:bg-brand-blue-soft'
            }`}
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Men's Fragrances</span>
          </button>

          <button
            onClick={() => { setSelectedGender('women'); setSelectedCategory('All'); }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedGender === 'women'
                ? 'bg-brand-blue-dark text-white shadow-xs'
                : 'bg-white text-slate-700 border border-brand-blue-soft hover:bg-brand-blue-soft'
            }`}
          >
            <Heart className="w-3.5 h-3.5" />
            <span>Women's</span>
          </button>

          <button
            onClick={() => { setSelectedCategory('bundle'); setSelectedGender('All'); }}
            className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all flex items-center gap-1.5 ${
              selectedCategory === 'bundle'
                ? 'bg-brand-blue-dark text-white shadow-xs'
                : 'bg-brand-blue-soft text-brand-blue-dark border border-brand-blue-light hover:bg-brand-blue-light/50'
            }`}
          >
            <Gift className="w-3.5 h-3.5 text-brand-gold" />
            <span>Bundles & Sets (Save 25%)</span>
          </button>
        </div>

        {/* Counter */}
        <span className="text-xs font-bold text-brand-blue-dark">
          Showing {filteredProducts.length} items
        </span>
      </div>

      {/* Controls Bar: Search & Sort */}
      <div className="bg-white border border-brand-blue-soft rounded-2xl p-4 mb-8 flex flex-col md:flex-row items-center justify-between gap-4 shadow-luxury-card">
        
        {/* Search Input */}
        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="Search by scent, note, or impression..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-brand-blue-soft/50 border border-brand-blue-soft rounded-xl px-4 py-2 text-xs text-slate-800 placeholder-slate-400 focus:border-brand-blue focus:bg-white outline-none transition-colors"
          />
        </div>

        {/* Mobile Filter Toggle */}
        <div className="flex md:hidden w-full justify-between items-center">
          <button
            onClick={() => setShowMobileFilters(true)}
            className="px-4 py-2 rounded-xl bg-brand-blue-soft border border-brand-blue-light text-brand-blue-dark text-xs font-bold flex items-center gap-2"
          >
            <Filter className="w-4 h-4" />
            <span>Filter Categories</span>
          </button>
          <span className="text-xs text-slate-500 font-medium">
            {filteredProducts.length} Scents
          </span>
        </div>

        {/* Desktop Quick Family Chips */}
        <div className="hidden md:flex items-center gap-1.5 overflow-x-auto max-w-xl pb-1">
          {families.slice(0, 5).map(f => (
            <button
              key={f}
              onClick={() => setSelectedFamily(f)}
              className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                selectedFamily === f
                  ? 'bg-brand-blue-dark text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-brand-blue-soft hover:bg-brand-blue-soft'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Sorting Dropdown */}
        <div className="flex items-center gap-3 w-full md:w-auto justify-end">
          <label htmlFor="sort-select" className="text-xs text-slate-500 font-semibold whitespace-nowrap">Sort By:</label>
          <select
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value as any)}
            className="bg-white border border-brand-blue-soft text-brand-blue-dark font-bold text-xs rounded-xl px-3 py-2 outline-none cursor-pointer focus:border-brand-blue shadow-xs"
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
        <div className="mb-6 flex items-center justify-between bg-brand-blue-soft border border-brand-blue-light rounded-xl px-4 py-2.5 text-xs">
          <span className="text-brand-blue-dark font-medium">
            Showing filtered results ({filteredProducts.length} item{filteredProducts.length === 1 ? '' : 's'})
          </span>
          <button
            onClick={clearAllFilters}
            className="text-brand-blue-dark hover:text-brand-blue font-bold flex items-center gap-1"
          >
            <X className="w-3.5 h-3.5" />
            <span>Reset All Filters</span>
          </button>
        </div>
      )}

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-20 bg-white rounded-3xl border border-brand-blue-soft p-8 space-y-4 shadow-luxury-card">
          <SlidersHorizontal className="w-12 h-12 text-brand-blue/50 mx-auto" />
          <h3 className="font-serif text-2xl font-bold text-brand-blue-deep">
            No Fragrances Matched Your Criteria
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 max-w-sm mx-auto font-normal">
            Try adjusting your search terms or resetting the gender and category filters.
          </p>
          <button
            onClick={clearAllFilters}
            className="px-6 py-2.5 rounded-xl bg-brand-blue-dark text-white text-xs font-bold uppercase tracking-wider hover:bg-brand-blue-navy transition-all shadow-xs"
          >
            View All 14 Products
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
        <div className="fixed inset-0 z-50 flex justify-end bg-slate-900/60 backdrop-blur-sm">
          <div className="w-4/5 max-w-xs bg-white border-l border-brand-blue-soft p-6 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-brand-blue-soft">
                <h3 className="font-serif text-lg font-bold text-brand-blue-deep">Filter Fragrances</h3>
                <button onClick={() => setShowMobileFilters(false)}>
                  <X className="w-5 h-5 text-slate-500" />
                </button>
              </div>

              <div className="mt-6 space-y-6">
                {/* Gender */}
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-brand-blue font-bold block">
                    Gender:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {['All', 'men', 'women', 'unisex'].map(g => (
                      <button
                        key={g}
                        onClick={() => { setSelectedGender(g); setShowMobileFilters(false); }}
                        className={`px-3 py-1.5 rounded-lg text-xs font-bold uppercase ${
                          selectedGender === g
                            ? 'bg-brand-blue-dark text-white'
                            : 'bg-brand-blue-soft text-slate-700'
                        }`}
                      >
                        {g}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Fragrance Families */}
                <div className="space-y-2">
                  <span className="text-xs uppercase tracking-wider text-brand-blue font-bold block">
                    Fragrance Family:
                  </span>
                  <div className="space-y-1">
                    {families.map(f => (
                      <button
                        key={f}
                        onClick={() => { setSelectedFamily(f); setShowMobileFilters(false); }}
                        className={`w-full text-left py-2 px-3 rounded-lg text-xs font-semibold ${
                          selectedFamily === f
                            ? 'bg-brand-blue-dark text-white'
                            : 'text-slate-700 hover:bg-brand-blue-soft'
                        }`}
                      >
                        {f}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-brand-blue-soft">
              <button
                onClick={clearAllFilters}
                className="w-full py-2.5 rounded-xl border border-brand-blue text-brand-blue-dark text-xs font-bold uppercase tracking-wider"
              >
                Reset Filters
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
