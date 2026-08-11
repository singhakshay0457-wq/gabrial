import React, { useState } from 'react';
import { Product } from '../types';
import { Search, X, Sparkles, ArrowRight } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  products: Product[];
  onSelectProduct: (product: Product) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  products,
  onSelectProduct,
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const popularSearches = ['Solitaire Ring', 'Emerald Pendant', 'Tennis Bracelet', 'Pearl Drop Earrings', '18K Gold', 'Bridal'];

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase()) ||
          p.collection.toLowerCase().includes(query.toLowerCase()) ||
          p.defaultMetal.toLowerCase().includes(query.toLowerCase()) ||
          p.description.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#FAF9F5] border border-[#E2DDD0] max-w-3xl w-full p-6 sm:p-8 relative text-[#1C1917] shadow-2xl mb-12">
        
        {/* Search Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#E8E5DA] mb-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
            <Sparkles className="w-4 h-4" />
            <span>Search Gabriel Collections</span>
          </div>
          <button onClick={onClose} className="p-1 text-[#57534E] hover:text-[#1C1917]">
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Input Bar */}
        <div className="relative mb-6">
          <Search className="w-5 h-5 text-[#C5A059] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by diamond carat, category, metal, or collection..."
            className="w-full bg-[#F3F0E6] border border-[#D4CEBF] focus:border-[#C5A059] text-base text-[#1C1917] pl-12 pr-10 py-4 focus:outline-none placeholder-[#A8A29E] font-serif"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-[#57534E] hover:text-[#1C1917]"
            >
              Clear
            </button>
          )}
        </div>

        {/* Popular Searches Tags */}
        {!query && (
          <div>
            <span className="block text-xs uppercase tracking-widest text-[#57534E] font-semibold mb-3">
              Popular Atelier Searches
            </span>
            <div className="flex flex-wrap gap-2">
              {popularSearches.map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="bg-[#F3F0E6] border border-[#E2DDD0] hover:border-[#C5A059] hover:text-[#C5A059] text-xs px-3 py-1.5 transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Search Results */}
        {query && (
          <div>
            <div className="flex items-center justify-between text-xs text-[#57534E] mb-4 pb-2 border-b border-[#E2DDD0]">
              <span>Results for "{query}"</span>
              <span className="font-semibold text-[#1C1917]">{results.length} piece{results.length === 1 ? '' : 's'} found</span>
            </div>

            {results.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-h-[50vh] overflow-y-auto pr-2">
                {results.map((p) => (
                  <div
                    key={p.id}
                    onClick={() => {
                      onClose();
                      onSelectProduct(p);
                    }}
                    className="flex gap-4 p-3 bg-[#F3F0E6] border border-[#E2DDD0] hover:border-[#C5A059] transition-all cursor-pointer group"
                  >
                    <img
                      src={p.images[0]}
                      alt={p.name}
                      className="w-16 h-16 object-cover bg-[#E8E5DA] shrink-0 border border-[#D4CEBF]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] uppercase tracking-widest text-[#C5A059] block font-medium">
                        {p.category} • {p.defaultMetal}
                      </span>
                      <h4 className="font-serif text-sm font-normal text-[#1C1917] group-hover:text-[#C5A059] transition-colors truncate">
                        {p.name}
                      </h4>
                      <p className="text-[11px] text-[#C5A059] uppercase tracking-wider font-medium mt-1">
                        View Design Showcase →
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-xs text-[#57534E]">
                <p className="font-serif text-lg text-[#1C1917] mb-1">No fine jewellery found matching "{query}".</p>
                <p>Try searching for "Solitaire", "Emerald", "Ring", or "White Gold".</p>
              </div>
            )}
          </div>
        )}

      </div>
    </div>
  );
};
