import React from 'react';
import { Product } from '../types';
import { Heart, Star, Eye, Sparkles, ArrowRight } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  isInWishlist: boolean;
  onToggleWishlist: (product: Product) => void;
  onQuickView: (product: Product) => void;
  onSelectProduct: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  isInWishlist,
  onToggleWishlist,
  onQuickView,
  onSelectProduct,
}) => {
  const hoverImage = product.images[1] || product.images[0];

  return (
    <div className="group relative bg-[#FAF9F5] border border-[#E8E5DA] hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between overflow-hidden shadow-2xs hover:shadow-lg">
      
      {/* Image container */}
      <div className="relative aspect-square bg-[#F3F0E6] overflow-hidden cursor-pointer" onClick={() => onSelectProduct(product)}>
        {/* Main image */}
        <img
          src={product.images[0]}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-opacity duration-500 group-hover:opacity-0"
          referrerPolicy="no-referrer"
        />
        {/* Hover secondary image */}
        <img
          src={hoverImage}
          alt={`${product.name} alternate view`}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-0 transition-all duration-500 group-hover:opacity-100 group-hover:scale-105"
          referrerPolicy="no-referrer"
        />

        {/* Badges */}
        <div className="absolute top-3 left-3 flex flex-col gap-1 z-10 pointer-events-none">
          {product.isBestSeller && (
            <span className="bg-[#1C1917] text-[#FAF9F5] text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 font-medium border border-[#C5A059]/40">
              Masterpiece
            </span>
          )}
          {product.isNewArrival && (
            <span className="bg-[#C5A059] text-white text-[10px] uppercase tracking-[0.18em] px-2 py-0.5 font-medium">
              New Design
            </span>
          )}
        </div>

        {/* Wishlist Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleWishlist(product);
          }}
          className={`absolute top-3 right-3 z-10 p-2.5 rounded-full backdrop-blur-md transition-all duration-300 shadow-sm ${
            isInWishlist
              ? 'bg-[#1C1917] text-[#C5A059]'
              : 'bg-white/80 text-[#1C1917] hover:bg-[#1C1917] hover:text-[#C5A059]'
          }`}
          aria-label={isInWishlist ? 'Remove from Saved' : 'Save Piece'}
        >
          <Heart className={`w-4 h-4 ${isInWishlist ? 'fill-[#C5A059]' : ''}`} />
        </button>

        {/* Quick View Button on Hover */}
        <div className="absolute inset-x-0 bottom-3 px-4 transition-all duration-300 transform translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 z-10">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="w-full bg-[#1C1917]/90 hover:bg-[#1C1917] text-[#FAF9F5] text-[11px] uppercase tracking-[0.2em] py-2.5 px-3 backdrop-blur-md border border-[#C5A059]/50 transition-colors flex items-center justify-center gap-2 font-medium"
          >
            <Eye className="w-3.5 h-3.5 text-[#C5A059]" />
            <span>Showcase Detail</span>
          </button>
        </div>
      </div>

      {/* Details Container */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          {/* Category & Metal info */}
          <div className="flex items-center justify-between text-[11px] text-[#C5A059] uppercase tracking-widest font-medium mb-1.5">
            <span>{product.category}</span>
            <span className="text-[#57534E] text-[10px]">{product.defaultMetal}</span>
          </div>

          {/* Product Name */}
          <h3 
            onClick={() => onSelectProduct(product)}
            className="font-serif text-lg font-normal text-[#1C1917] hover:text-[#C5A059] transition-colors cursor-pointer line-clamp-1 mb-1"
          >
            {product.name}
          </h3>

          {/* Subtitle / Spec summary */}
          <p className="text-xs text-[#57534E] line-clamp-1 mb-3 font-light">
            {product.subtitle || product.specifications.diamondCarat || product.specifications.metalPurity}
          </p>

          {/* Rating / Certification */}
          <div className="flex items-center gap-1.5 mb-3 text-xs text-[#57534E]">
            <div className="flex items-center text-[#C5A059]">
              <Star className="w-3.5 h-3.5 fill-[#C5A059]" />
              <span className="ml-1 font-semibold text-[#1C1917] text-[11px]">{product.rating.toFixed(1)}</span>
            </div>
            <span className="text-[10px] text-[#A8A29E]">({product.reviewCount})</span>
            <span className="text-[10px] text-[#C5A059] font-medium ml-auto flex items-center gap-1">
              <Sparkles className="w-3 h-3" /> Certified Design
            </span>
          </div>
        </div>

        {/* Pure Design Showcase Action */}
        <div className="pt-3 border-t border-[#F0ECE1] flex items-center justify-between mt-auto">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-[#A8A29E] block">Atelier Build</span>
            <span className="font-serif text-xs font-medium text-[#1C1917] truncate max-w-[120px] block">
              {product.specifications.metalPurity}
            </span>
          </div>

          <button
            onClick={() => onSelectProduct(product)}
            className="bg-[#1C1917] hover:bg-[#C5A059] text-white px-3.5 py-2 text-[11px] uppercase tracking-wider transition-colors duration-300 font-medium flex items-center gap-1.5"
          >
            <span>Explore Design</span>
            <ArrowRight className="w-3 h-3 text-[#C5A059]" />
          </button>
        </div>

      </div>

    </div>
  );
};
