import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { ProductCard } from './ProductCard';
import {
  X,
  Heart,
  Star,
  Sparkles,
  ShieldCheck,
  MapPin,
  ExternalLink
} from 'lucide-react';

interface ProductDetailModalProps {
  product: Product | null;
  allProducts: Product[];
  isOpen: boolean;
  isInWishlist: boolean;
  onClose: () => void;
  onToggleWishlist: (product: Product) => void;
  onOpenSizeGuide: (category: string) => void;
  onSelectProduct: (product: Product) => void;
  onQuickView: (product: Product) => void;
  wishlistIds: string[];
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  allProducts,
  isOpen,
  isInWishlist,
  onClose,
  onToggleWishlist,
  onSelectProduct,
  onQuickView,
  wishlistIds,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'desc' | 'shipping' | 'care'>('desc');

  useEffect(() => {
    if (product) {
      setSelectedImageIndex(0);
    }
  }, [product]);

  if (!isOpen || !product) return null;

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Gabriel Jewellers Jewellery Store Castle Hill 297 Old Northern Rd Castle Hill NSW 2154 Australia'
  )}`;

  // Recommendations: Other products from same category or collection
  const relatedProducts = allProducts
    .filter((p) => p.id !== product.id && (p.category === product.category || p.collection === product.collection))
    .slice(0, 4);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div className="bg-[#FAF9F5] border border-[#E2DDD0] max-w-5xl w-full my-auto relative text-[#1C1917] shadow-2xl max-h-[95vh] flex flex-col overflow-hidden">
        
        {/* Top Header Bar */}
        <div className="p-4 sm:px-8 border-b border-[#E8E5DA] flex items-center justify-between bg-[#F3F0E6]/80">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Gabriel Fine Jewellery Design Showcase</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#57534E] hover:text-[#1C1917] hover:bg-[#E2DDD0] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-10">
          
          {/* Main Product PDP Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Left Image Gallery */}
            <div className="lg:col-span-7 space-y-4">
              {/* Main Image Display */}
              <div className="aspect-square bg-[#F3F0E6] relative border border-[#E2DDD0] overflow-hidden group">
                <img
                  src={product.images[selectedImageIndex] || product.images[0]}
                  alt={product.name}
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />

                {/* Wishlist Floating Button */}
                <button
                  onClick={() => onToggleWishlist(product)}
                  className={`absolute top-4 right-4 p-3 rounded-full backdrop-blur-md shadow-md transition-colors ${
                    isInWishlist ? 'bg-[#1C1917] text-[#C5A059]' : 'bg-white/80 text-[#1C1917] hover:bg-[#1C1917] hover:text-[#C5A059]'
                  }`}
                  aria-label="Wishlist"
                >
                  <Heart className={`w-5 h-5 ${isInWishlist ? 'fill-[#C5A059]' : ''}`} />
                </button>
              </div>

              {/* Thumbnails */}
              {product.images.length > 1 && (
                <div className="flex gap-3 overflow-x-auto pb-2">
                  {product.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedImageIndex(idx)}
                      className={`w-20 aspect-square border overflow-hidden shrink-0 transition-all ${
                        selectedImageIndex === idx ? 'border-[#C5A059] ring-1 ring-[#C5A059]' : 'border-[#E2DDD0] opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Right Information & Options Panel */}
            <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#C5A059] uppercase tracking-widest font-semibold mb-1">
                  <span>{product.collection}</span>
                  <span className="text-[#57534E] text-[10px]">{product.category}</span>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917] mb-2 leading-tight">
                  {product.name}
                </h1>

                {product.subtitle && (
                  <p className="text-sm text-[#8C827A] mb-3 font-light">
                    {product.subtitle}
                  </p>
                )}

                {/* Rating & Certified */}
                <div className="flex items-center gap-3 text-xs text-[#57534E] pb-4 border-b border-[#E8E5DA]">
                  <div className="flex items-center text-[#C5A059]">
                    <Star className="w-4 h-4 fill-[#C5A059]" />
                    <span className="ml-1 font-semibold text-[#1C1917]">{product.rating.toFixed(1)}</span>
                  </div>
                  <span>•</span>
                  <span>{product.reviewCount} Patron Reviews</span>
                  <span>•</span>
                  <span className="text-[#C5A059] font-medium flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> Handcrafted Design
                  </span>
                </div>
              </div>

              {/* Design narrative box */}
              <div className="space-y-3 p-4 bg-[#F3F0E6]/70 border border-[#E8E5DA]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] font-semibold">
                  <Sparkles className="w-4 h-4 text-[#C5A059]" />
                  <span>Gabriel Atelier Showcase</span>
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed font-light">
                  This signature piece is individually handcrafted and available for private viewing and bespoke consultation at our Castle Hill flagship boutique.
                </p>
              </div>

              {/* Showcase Action CTAs */}
              <div className="space-y-3 pt-2">
                <a
                  href={googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-[#1C1917] hover:bg-[#C5A059] text-white py-4 text-xs uppercase tracking-[0.25em] font-medium transition-colors duration-300 flex items-center justify-center gap-2 shadow-md"
                >
                  <MapPin className="w-4 h-4 text-[#C5A059]" />
                  <span>Locate Store on Google Maps</span>
                  <ExternalLink className="w-3.5 h-3.5 text-white/80" />
                </a>
              </div>

              {/* Boutique info badge */}
              <div className="pt-3 border-t border-[#E8E5DA] p-3 bg-[#F3F0E6] text-[11px] text-[#57534E] space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-[#1C1917] uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Castle Hill Store Location</span>
                </div>
                <p>297 Old Northern Rd, Castle Hill NSW 2154, Australia</p>
                <p className="text-[10px] text-[#C5A059] font-medium">Phone: +61 2 9659 1110 • Mon–Sat (Closed Sun)</p>
              </div>

            </div>

          </div>

          {/* Collapsible Accordions for Description, Care & Atelier Craft */}
          <div className="pt-8 border-t border-[#E8E5DA]">
            <div className="flex border-b border-[#E2DDD0] overflow-x-auto">
              <button
                onClick={() => setActiveTab('desc')}
                className={`py-3 px-6 text-xs uppercase tracking-[0.18em] font-semibold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'desc' ? 'border-[#C5A059] text-[#C5A059]' : 'border-transparent text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                Design Narrative
              </button>
              <button
                onClick={() => setActiveTab('shipping')}
                className={`py-3 px-6 text-xs uppercase tracking-[0.18em] font-semibold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'shipping' ? 'border-[#C5A059] text-[#C5A059]' : 'border-transparent text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                Atelier & Authenticity
              </button>
              <button
                onClick={() => setActiveTab('care')}
                className={`py-3 px-6 text-xs uppercase tracking-[0.18em] font-semibold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'care' ? 'border-[#C5A059] text-[#C5A059]' : 'border-transparent text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                Jewellery Care
              </button>
            </div>

            <div className="py-6 bg-[#F3F0E6]/50 p-6 border-b border-[#E2DDD0] text-xs text-[#57534E] font-light leading-relaxed">
              {activeTab === 'desc' && (
                <p className="text-sm font-serif leading-relaxed text-[#1C1917]">{product.description}</p>
              )}

              {activeTab === 'shipping' && (
                <div className="space-y-2">
                  <p><strong className="text-[#1C1917]">Castle Hill Atelier Craft:</strong> Every piece is individually handcrafted at our Castle Hill boutique workshop.</p>
                  <p><strong className="text-[#1C1917]">Design Authenticity:</strong> Accompanied by authentic Gabriel design dossiers and presentation cases.</p>
                  <p><strong className="text-[#1C1917]">Complimentary In-Store Care:</strong> Lifetime complimentary cleaning and setting inspection at our boutique.</p>
                </div>
              )}

              {activeTab === 'care' && (
                <ul className="list-disc list-inside space-y-1.5">
                  {product.jewelleryCare.map((tip, idx) => (
                    <li key={idx}>{tip}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>

          {/* You May Also Like Section */}
          {relatedProducts.length > 0 && (
            <div className="pt-6">
              <h3 className="font-serif text-2xl font-normal text-[#1C1917] mb-6 text-center">
                You May Also Like
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                {relatedProducts.map((rel) => (
                  <ProductCard
                    key={rel.id}
                    product={rel}
                    isInWishlist={wishlistIds.includes(rel.id)}
                    onToggleWishlist={onToggleWishlist}
                    onQuickView={onQuickView}
                    onSelectProduct={onSelectProduct}
                  />
                ))}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
