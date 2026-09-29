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
      p.shortDescription.toLowerCase().includes(q) ||
      (p.gender && p.gender.toLowerCase().includes(q)) ||
      (p.category && p.category.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-md" onClick={onClose} />

      {/* Modal Box */}
      <div className="relative w-full max-w-2xl bg-white border border-brand-slate-200 rounded-3xl shadow-2xl overflow-hidden z-10">
        <div className="p-4 sm:p-6 border-b border-brand-slate-100 flex items-center gap-3 bg-brand-light-bg/50">
          <Search className="w-5 h-5 text-brand-blue-600" />
          <input
            type="text"
            placeholder="Search perfumes by name, notes (e.g. Oud, Rose, Citrus, Vanilla, Bundle)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-brand-slate-900 placeholder-brand-slate-400 text-base sm:text-lg outline-none"
          />
          <button
            onClick={onClose}
            className="p-1.5 rounded-full text-brand-slate-400 hover:text-brand-slate-700 hover:bg-brand-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Search Results Area */}
        <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-6 space-y-3 bg-white">
          {query.trim() === '' ? (
            <div className="text-center py-8 text-brand-slate-500 text-sm">
              <p className="mb-2">Search our 35% Extrait perfumes and exclusive bundles.</p>
              <div className="flex flex-wrap justify-center gap-2 mt-4">
                {['Royal Trio', 'Discovery Kit', 'Aventus', 'Paradise Sapphire', 'Black Oud', 'Blue Night'].map(suggest => (
                  <button
                    key={suggest}
                    onClick={() => setQuery(suggest)}
                    className="text-xs px-3.5 py-1.5 rounded-full bg-brand-light-bg border border-brand-slate-200 text-brand-slate-700 hover:border-brand-blue-400 hover:text-brand-blue-700 transition-colors font-medium"
                  >
                    {suggest}
                  </button>
                ))}
              </div>
            </div>
          ) : filtered.length === 0 ? (
            <div className="text-center py-10 text-brand-slate-500">
              <p className="font-serif text-lg text-brand-slate-800 mb-1">No Fragrances Found</p>
              <p className="text-sm">We could not find matches for "{query}". Try searching for Oud, Rose, Amber, or Fresh.</p>
            </div>
          ) : (
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-brand-blue-700 font-bold mb-2">
                Found {filtered.length} Fragrance{filtered.length > 1 ? 's' : ''}
              </p>
              {filtered.map(product => (
                <Link
                  key={product.id}
                  to={`/shop/${product.slug}`}
                  onClick={onClose}
                  className="flex items-center justify-between p-3.5 rounded-2xl bg-brand-light-bg/50 border border-brand-slate-200/80 hover:border-brand-blue-300 hover:bg-brand-blue-50/50 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-12 h-12 rounded-xl object-cover border border-brand-slate-200"
                    />
                    <div>
                      <h4 className="font-serif text-base font-bold text-brand-slate-900 group-hover:text-brand-blue-700 transition-colors">
                        {product.name}
                      </h4>
                      <p className="text-xs text-brand-slate-500">{product.fragranceFamily}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm font-bold text-brand-blue-900">
                      {formatPrice(product.variants[0].pricePKR)}
                    </span>
                    <ArrowRight className="w-4 h-4 text-brand-slate-400 group-hover:text-brand-blue-600 group-hover:translate-x-1 transition-all" />
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
