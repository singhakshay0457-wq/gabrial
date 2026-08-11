import React from 'react';
import { ArrowRight, Sparkles, MapPin } from 'lucide-react';

interface HeroProps {
  onShopClick: () => void;
  onStoreLocationClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onShopClick, onStoreLocationClick }) => {
  return (
    <section className="relative min-h-[85vh] lg:min-h-[90vh] flex items-center justify-center bg-[#181614] overflow-hidden">
      {/* Background Image with refined luxury lighting overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=2000"
          alt="Gabriel Fine Jewellery Editorial"
          className="w-full h-full object-cover object-center opacity-65 scale-105 transition-transform duration-10000 ease-out hover:scale-100"
          referrerPolicy="no-referrer"
        />
        {/* Subtle dark gradient overlay to guarantee text legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-[#181614]/40 to-[#181614]/20" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-20 text-center text-[#FAF9F5]">
        
        {/* Eyebrow badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-[#FAF9F5]/10 backdrop-blur-md border border-[#C5A059]/40 mb-8 rounded-none">
          <Sparkles className="w-3.5 h-3.5 text-[#C5A059]" />
          <span className="text-[11px] uppercase tracking-[0.3em] text-[#E8D3A7] font-medium font-sans">
            Castle Hill Store • High Fine Jewellery Atelier
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-wide text-[#FAF9F5] leading-[1.08] mb-6 max-w-4xl mx-auto">
          Jewellery That Becomes Part of Your Story.
        </h1>

        {/* Supporting text */}
        <p className="text-base sm:text-xl font-light text-[#E4DFD3] max-w-2xl mx-auto mb-10 leading-relaxed tracking-wide font-sans">
          Discover timeless handcrafted pieces celebrating every moment. Visit our flagship boutique in Castle Hill or explore our fine jewellery showcase.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
          <button
            onClick={onShopClick}
            className="w-full sm:w-auto px-9 py-4 bg-[#C5A059] text-white hover:bg-[#B08C46] transition-all duration-300 text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center gap-3 group shadow-lg hover:shadow-xl hover:-translate-y-0.5"
          >
            <span>Explore Showcase Catalog</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </button>

          <button
            onClick={onStoreLocationClick}
            className="w-full sm:w-auto px-9 py-4 bg-transparent border border-[#FAF9F5]/70 text-[#FAF9F5] hover:bg-[#FAF9F5] hover:text-[#1C1917] transition-all duration-300 text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center gap-2"
          >
            <MapPin className="w-4 h-4 text-[#C5A059]" />
            <span>Castle Hill Store & Map</span>
          </button>
        </div>

      </div>
    </section>
  );
};
