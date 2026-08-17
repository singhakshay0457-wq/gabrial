import React, { useState } from 'react';
import { Product, CategoryType, CollectionType, SortOption } from '../types';
import { ProductCard } from './ProductCard';
import { SlidersHorizontal, Sparkles, X } from 'lucide-react';

interface BestSellersProps {
  products: Product[];
  wishlistIds: string[];
  activeCategory: string;
  activeCollection: string;
  onSelectCategory: (category: CategoryType | 'All') => void;
  onSelectCollection: (collection: CollectionType | 'All') => void;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const BestSellers: React.FC<BestSellersProps> = ({
  products,
  wishlistIds,
  activeCategory,
  activeCollection,
  onSelectCategory,
  onSelectCollection,
  onToggleWishlist,
  onQuickView,
  onSelectProduct,
}) => {
  const [sortBy, setSortBy] = useState<SortOption>('featured');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Categories Filter
  const categories: (CategoryType | 'All')[] = ['All', 'Rings', 'Necklaces', 'Earrings', 'Bracelets'];

  // Collections Filter
  const collections: (CollectionType | 'All')[] = [
    'All',
    'Signature Collection',
    'Bridal Collection',
    'Everyday Luxury',
    'Statement Pieces'
  ];

  // Filtering Logic
  let filtered = products.filter((p) => {
    if (activeCategory !== 'All' && p.category !== activeCategory) return false;
    if (activeCollection !== 'All' && p.collection !== activeCollection) return false;
    return true;
  });

  // Sorting Logic
  if (sortBy === 'rating') {
    filtered.sort((a, b) => b.rating - a.rating);
  } else if (sortBy === 'newest') {
    filtered.sort((a, b) => (b.isNewArrival ? 1 : 0) - (a.isNewArrival ? 1 : 0));
  } else {
    // Featured / Best Sellers first
    filtered.sort((a, b) => (b.isBestSeller ? 1 : 0) - (a.isBestSeller ? 1 : 0));
  }

  return (
    <section id="catalog-section" className="py-20 bg-[#FAF9F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Castle Hill Design Showcase</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1917] tracking-tight">
            Fine Jewellery Design Gallery
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A059] mx-auto mt-4 mb-3" />
          <p className="text-sm text-[#57534E] font-light">
            {activeCategory !== 'All' || activeCollection !== 'All'
              ? `Showing design showcase for ${activeCategory !== 'All' ? activeCategory : ''} ${activeCollection !== 'All' ? activeCollection : ''}`
              : 'Explore iconic ring designs, necklaces, earrings and bracelets crafted for our Castle Hill boutique.'}
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-4 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => onSelectCategory(cat)}
              className={`px-5 py-2 text-xs uppercase tracking-[0.18em] font-medium transition-all duration-300 border ${
                activeCategory === cat
                  ? 'bg-[#1C1917] text-[#FAF9F5] border-[#1C1917] shadow-sm'
                  : 'bg-[#FAF9F5] text-[#57534E] border-[#E2DDD0] hover:border-[#C5A059] hover:text-[#C5A059]'
              }`}
            >
              {cat === 'All' ? 'All Designs' : cat}
            </button>
          ))}
        </div>

        {/* Controls Bar: Filters Toggle, Collection Filter, Sort By */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 py-4 border-y border-[#E8E5DA] mb-10 bg-[#F3F0E6]/50 px-4 sm:px-6">
          
          <div className="flex items-center gap-4 w-full md:w-auto justify-between md:justify-start">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#1C1917] font-medium py-1.5 px-3 border border-[#D4CEBF] hover:border-[#C5A059] bg-[#FAF9F5] transition-colors"
            >
              <SlidersHorizontal className="w-3.5 h-3.5 text-[#C5A059]" />
              <span>Collections {activeCollection !== 'All' ? `(${activeCollection})` : ''}</span>
            </button>

            <span className="text-xs text-[#57534E] font-light">
              Showing <span className="font-semibold text-[#1C1917]">{filtered.length}</span> fine design{filtered.length === 1 ? '' : 's'}
            </span>
          </div>

          <div className="flex items-center gap-4 w-full md:w-auto justify-end">
            <label className="text-xs text-[#57534E] uppercase tracking-wider font-medium hidden sm:inline">
              Sort By:
            </label>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className="bg-[#FAF9F5] border border-[#D4CEBF] text-xs text-[#1C1917] uppercase tracking-wider font-medium px-3 py-1.5 focus:outline-none focus:border-[#C5A059]"
            >
              <option value="featured">Featured Designs</option>
              <option value="rating">Patron Ratings</option>
              <option value="newest">New Design Arrivals</option>
            </select>
          </div>

        </div>

        {/* Expanded Collections Filter Panel */}
        {showFilters && (
          <div className="bg-[#F3F0E6] p-6 mb-10 border border-[#E2DDD0] transition-all">
            <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#E2DDD0]">
              <h4 className="font-serif text-lg font-normal text-[#1C1917]">Select Curated Collection</h4>
              <button
                onClick={() => {
                  onSelectCollection('All');
                  onSelectCategory('All');
                }}
                className="text-xs text-[#C5A059] hover:underline uppercase tracking-wider font-medium flex items-center gap-1"
              >
                <X className="w-3.5 h-3.5" /> Reset Collections
              </button>
            </div>

            <div>
              <div className="flex flex-wrap gap-2">
                {collections.map((col) => (
                  <button
                    key={col}
                    onClick={() => onSelectCollection(col)}
                    className={`text-xs px-4 py-2 border transition-colors ${
                      activeCollection === col
                        ? 'bg-[#C5A059] text-white border-[#C5A059] font-medium'
                        : 'bg-[#FAF9F5] text-[#1C1917] border-[#D4CEBF] hover:border-[#C5A059]'
                    }`}
                  >
                    {col === 'All' ? 'All Collections' : col}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Product Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filtered.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                isInWishlist={wishlistIds.includes(product.id)}
                onToggleWishlist={onToggleWishlist}
                onQuickView={onQuickView}
                onSelectProduct={onSelectProduct}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-[#F3F0E6] border border-[#E2DDD0]">
            <p className="font-serif text-2xl text-[#1C1917] mb-2">No pieces match your current filter criteria.</p>
            <p className="text-xs text-[#57534E] mb-6">Try resetting collections to discover Gabriel’s full fine jewellery suite.</p>
            <button
              onClick={() => {
                onSelectCategory('All');
                onSelectCollection('All');
              }}
              className="bg-[#1C1917] text-[#FAF9F5] px-6 py-2.5 text-xs uppercase tracking-widest hover:bg-[#C5A059] transition-colors"
            >
              Show All Designs
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
