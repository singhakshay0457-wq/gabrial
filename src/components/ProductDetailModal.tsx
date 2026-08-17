import React, { useState, useEffect } from 'react';
import { Product, MetalType } from '../types';
import { ProductCard } from './ProductCard';
import {
  X,
  Heart,
  Star,
  Sparkles,
  ShieldCheck,
  Ruler,
  Calendar,
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
  onOpenSizeGuide,
  onSelectProduct,
  onQuickView,
  wishlistIds,
}) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [selectedMetal, setSelectedMetal] = useState<MetalType>(
    product ? product.defaultMetal : '18K Yellow Gold'
  );
  const [selectedSize, setSelectedSize] = useState<string>(
    product?.sizes && product.sizes.length > 0 ? product.sizes[1] || product.sizes[0] : ''
  );
  const [activeTab, setActiveTab] = useState<'desc' | 'specs' | 'shipping' | 'care'>('desc');

  useEffect(() => {
    if (product) {
      setSelectedImageIndex(0);
      setSelectedMetal(product.defaultMetal);
      setSelectedSize(product.sizes && product.sizes.length > 0 ? product.sizes[1] || product.sizes[0] : '');
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
            <span>Gabriel High Fine Jewellery Atelier</span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-[#57534E] hover:text-[#1C1917] hover:bg-[#E2DDD0] transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-12">
          
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
            <div className="lg:col-span-5 space-y-6">
              <div>
                <div className="flex items-center justify-between text-xs text-[#C5A059] uppercase tracking-widest font-semibold mb-1">
                  <span>{product.collection}</span>
                  <span className="text-[#57534E] text-[10px]">{product.category}</span>
                </div>

                <h1 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917] mb-2 leading-tight">
                  {product.name}
                </h1>

                {/* Rating & Certified */}
                <div className="flex items-center gap-3 text-xs text-[#57534E] pb-4 border-b border-[#E8E5DA]">
                  <div className="flex items-center text-[#C5A059]">
                    <Star className="w-4 h-4 fill-[#C5A059]" />
                    <span className="ml-1 font-semibold text-[#1C1917]">{product.rating.toFixed(1)}</span>
                  </div>
                  <span>•</span>
                  <span>{product.reviewCount} Patron Reviews</span>
                  <span>•</span>
                  <span className="text-[#C5A059] font-medium">{product.specifications.certification || 'SGL Certified'}</span>
                </div>
              </div>

              {/* Atelier Specifications Header */}
              <div className="space-y-2 pt-2 border-t border-[#E8E5DA]">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#C5A059] font-medium">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" />
                  <span>Gabriel Atelier Certified Design</span>
                </div>
                <p className="text-xs text-[#57534E] leading-relaxed">
                  Every Gabriel piece is handcrafted with ethically sourced solid gold, precision-set natural diamonds, and official hallmarks at our Castle Hill workshop.
                </p>
              </div>

              {/* Metal Selector */}
              <div>
                <label className="block text-xs uppercase tracking-wider text-[#1C1917] font-semibold mb-2">
                  Precious Metal: <span className="text-[#C5A059] font-normal">{selectedMetal}</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {product.metalOptions.map((metal) => (
                    <button
                      key={metal}
                      onClick={() => setSelectedMetal(metal)}
                      className={`p-2.5 text-xs text-center border transition-all ${
                        selectedMetal === metal
                          ? 'border-[#C5A059] bg-[#C5A059]/10 font-semibold text-[#1C1917]'
                          : 'border-[#E2DDD0] bg-[#FAF9F5] text-[#57534E] hover:border-[#C5A059]'
                      }`}
                    >
                      {metal}
                    </button>
                  ))}
                </div>
              </div>

              {/* Size Selector if applicable */}
              {product.sizes && product.sizes.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs uppercase tracking-wider text-[#1C1917] font-semibold">
                      Size Selection
                    </label>
                    <button
                      onClick={() => onOpenSizeGuide(product.category)}
                      className="text-[11px] text-[#C5A059] hover:underline uppercase tracking-wider font-medium flex items-center gap-1"
                    >
                      <Ruler className="w-3.5 h-3.5" /> Size Guide
                    </button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size}
                        onClick={() => setSelectedSize(size)}
                        className={`min-w-[40px] p-2 text-xs border transition-all ${
                          selectedSize === size
                            ? 'border-[#1C1917] bg-[#1C1917] text-[#FAF9F5] font-semibold'
                            : 'border-[#E2DDD0] bg-[#FAF9F5] text-[#1C1917] hover:border-[#C5A059]'
                        }`}
                      >
                        {size}
                      </button>
                    ))}
                  </div>
                </div>
              )}

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
              <div className="pt-4 border-t border-[#E8E5DA] p-3 bg-[#F3F0E6] text-[11px] text-[#57534E] space-y-1">
                <div className="flex items-center gap-1.5 font-semibold text-[#1C1917] uppercase tracking-wider">
                  <MapPin className="w-3.5 h-3.5 text-[#C5A059]" />
                  <span>Castle Hill Store Location</span>
                </div>
                <p>297 Old Northern Rd, Castle Hill NSW 2154, Australia</p>
                <p className="text-[10px] text-[#C5A059] font-medium">Phone: +61 2 9659 1110 • Mon–Sat (Closed Sun)</p>
              </div>

            </div>

          </div>

          {/* Collapsible Accordions for Specifications, Care & Shipping */}
          <div className="pt-8 border-t border-[#E8E5DA]">
            <div className="flex border-b border-[#E2DDD0] overflow-x-auto">
              <button
                onClick={() => setActiveTab('desc')}
                className={`py-3 px-6 text-xs uppercase tracking-[0.18em] font-semibold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'desc' ? 'border-[#C5A059] text-[#C5A059]' : 'border-transparent text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                Description
              </button>
              <button
                onClick={() => setActiveTab('specs')}
                className={`py-3 px-6 text-xs uppercase tracking-[0.18em] font-semibold border-b-2 transition-all whitespace-nowrap ${
                  activeTab === 'specs' ? 'border-[#C5A059] text-[#C5A059]' : 'border-transparent text-[#57534E] hover:text-[#1C1917]'
                }`}
              >
                Specifications
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

              {activeTab === 'specs' && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <p><strong className="text-[#1C1917]">Metal Purity:</strong> {product.specifications.metalPurity}</p>
                  {product.specifications.diamondCarat && <p><strong className="text-[#1C1917]">Diamond Carat:</strong> {product.specifications.diamondCarat}</p>}
                  {product.specifications.diamondClarity && <p><strong className="text-[#1C1917]">Diamond Clarity:</strong> {product.specifications.diamondClarity}</p>}
                  {product.specifications.gemstone && <p><strong className="text-[#1C1917]">Gemstone:</strong> {product.specifications.gemstone}</p>}
                  {product.specifications.weightGrams && <p><strong className="text-[#1C1917]">Gold Weight:</strong> {product.specifications.weightGrams}</p>}
                  {product.specifications.certification && <p><strong className="text-[#1C1917]">Hallmark & Certification:</strong> {product.specifications.certification}</p>}
                </div>
              )}

              {activeTab === 'shipping' && (
                <div className="space-y-2">
                  <p><strong className="text-[#1C1917]">Castle Hill Atelier Craft:</strong> Every piece is individually handcrafted and hallmarked at our Castle Hill boutique workshop.</p>
                  <p><strong className="text-[#1C1917]">Certified Authenticity:</strong> Accompanied by authentic gemological dossiers and certification cards.</p>
                  <p><strong className="text-[#1C1917]">Complimentary In-Store Care:</strong> Lifetime complimentary ultrasonic cleaning and claw inspection at our boutique.</p>
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
