import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../../data/products';
import { useCart } from '../../context/CartContext';
import { Search, X, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const { formatPrice } = useCart();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filtered = query.trim() === '' ? [] : PRODUCTS.filter(p => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.fragranceFamily.toLowerCase().includes(q) ||
      p.topNotes.some(n => n.toLowerCase().includes(q)) ||
      p.heartNotes.some(n => n.toLowerCase().includes(q)) ||
      p.baseNotes.some(n => n.toLowerCase().includes(q)) ||
      p.shortDescription.toLowerCase().includes(q)
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/85 backdrop-blur-md" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-brand-dark-surface border border-brand-gold/30 rounded-2xl shadow-luxury overflow-hidden z-10">
        <div className="p-4 sm:p-6 border-b border-brand-gold/20 flex items-center gap-3">
          <Search className="w-5 h-5 text-brand-gold" />
          <input
            type="text"
            placeholder="Search perfumes by name, notes (e.g., Oud, Rose, Amber, Apple)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-brand-cream placeholder-brand-cream/40 text-base sm:text-lg outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-full text-brand-cream/60 hover:text-white hover:bg-brand-ruby/40 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-brand-cream/50 text-sm">
              <p className="mb-2">Search our 10 artisanal fragrance masterpieces.</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['Black Oud', 'Creed Aventus', 'Royal Oud', 'Blue Night', 'Amber Noir'].map(suggest => (
                  <button
                    key={suggest}
                    onClick={() => setQuery(suggest)}
                    className="text-xs px-3 py-1.5 rounded-full bg-brand-dark border border-brand-gold/20 text-brand-gold-light hover:border-brand-gold"
                  >
                    {suggest}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-10 text-brand-cream/60">
              <p className="font-serif text-lg text-brand-gold-light mb-1">No Fragrances Found</p>
              <p className="text-sm">We could not find matches for "{query}". Try searching for Oud, Rose, Amber or Vanilla.</p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-brand-gold font-semibold mb-2">
                Found {filtered.length} Fragrance{filtered.length > 1 ? 's' : ''}
              </p>
              {filtered.map(product => (
                <Link
                  key={product.id}
                  to={`/shop/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center justify-between p-3 rounded-xl bg-brand-dark/60 border border-brand-gold/15 hover:border-brand-gold/50 hover:bg-brand-ruby/15 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-lg object-cover border border-brand-gold/20"
                    />
                    <div>
                      <h4 className="font-serif text-base text-brand-cream group-hover:text-brand-gold-light transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs text-brand-gold/80">{product.fragranceFamily}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-semibold text-brand-gold-light">
                      {formatPrice(product.variants[0].pricePKR)}
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand-gold/40 group-hover:text-brand-gold group-hover:translate-x-1 transition-all" />
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
