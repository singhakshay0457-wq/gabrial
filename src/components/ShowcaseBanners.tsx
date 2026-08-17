import React from 'react';
import { MapPin, Sparkles, ArrowRight, ShieldCheck, Gem, Calendar, ExternalLink } from 'lucide-react';

interface ShowcaseBannersProps {
  onScrollToMap: () => void;
  onScrollToCatalog: () => void;
}

export const ShowcaseBanners: React.FC<ShowcaseBannersProps> = ({
  onScrollToMap,
  onScrollToCatalog,
}) => {
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Gabriel Jewellers Jewellery Store Castle Hill 297 Old Northern Rd Castle Hill NSW 2154 Australia'
  )}`;

  return (
    <section className="py-12 bg-[#FAF9F5] space-y-16">
      
      {/* Banner 1: Castle Hill Flagship Location Showcase (Ad Banner) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-[#1C1917] text-[#FAF9F5] overflow-hidden border border-[#C5A059]/40 shadow-2xl">
          {/* Subtle background luxury image */}
          <div className="absolute inset-0 opacity-25">
            <img
              src="https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1600"
              alt="Atelier Gallery Showcase"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div className="relative z-10 p-8 sm:p-12 md:p-16 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#C5A059]/20 border border-[#C5A059] text-[#C5A059] text-[11px] uppercase tracking-[0.25em] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>Castle Hill Flagship Exhibition</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white leading-tight">
                Gabriel Jewellers • Castle Hill, Sydney
              </h2>

              <p className="text-sm sm:text-base text-[#D4CEBF] font-light max-w-2xl leading-relaxed">
                Visit our premier Sydney boutique located at <strong className="text-white font-medium">297 Old Northern Rd, Castle Hill NSW 2154</strong>. Inspect certified GIA/SGL solitaire diamonds, wedding bands, and high fine jewellery creations in a private lounge.
              </p>

              <div className="flex flex-wrap items-center gap-4 text-xs text-[#E8D3A7]">
                <span className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C5A059]" /> 18K Solid Gold Hallmarked
                </span>
                <span>•</span>
                <span>3 Min Walk from Castle Hill Metro</span>
                <span>•</span>
                <span>Thursday Late Night Shopping</span>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <button
                onClick={onScrollToMap}
                className="px-6 py-4 bg-[#C5A059] hover:bg-[#B08C46] text-white text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2 shadow-lg"
              >
                <MapPin className="w-4 h-4" />
                <span>Explore Map & Hours</span>
              </button>

              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-4 bg-[#FAF9F5] hover:bg-white text-[#1C1917] text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2"
              >
                <span>Direct Google Map</span>
                <ExternalLink className="w-4 h-4 text-[#C5A059]" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Banner 2: Dual Showcase Promo Cards (Custom Heirloom Remodelling & High Solitaires) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Card A: Bespoke Custom Design & Remodelling */}
        <div className="bg-[#F3F0E6] border border-[#E2DDD0] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#C5A059] transition-all">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
              <Sparkles className="w-4 h-4" />
              <span>Atelier Service</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917]">
              Heirloom Remodelling & Fine Design
            </h3>

            <p className="text-xs sm:text-sm text-[#57534E] font-light leading-relaxed">
              Transform family gold and heirloom gemstones into a contemporary masterpiece. Co-create 3D rendered CAD models directly with our resident master goldsmiths in Castle Hill.
            </p>
          </div>

          <div className="pt-8 mt-6 border-t border-[#E2DDD0] flex items-center justify-between">
            <span className="text-[11px] text-[#C5A059] font-semibold uppercase tracking-wider">
              Castle Hill Atelier
            </span>

            <a
              href="tel:+61296591110"
              className="bg-[#1C1917] hover:bg-[#C5A059] text-white px-5 py-2.5 text-xs uppercase tracking-wider font-medium transition-colors flex items-center gap-2"
            >
              <span>Call Store</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card B: In-Store Diamond Valuation & Cleaning */}
        <div className="bg-[#F3F0E6] border border-[#E2DDD0] p-8 sm:p-10 flex flex-col justify-between relative overflow-hidden group hover:border-[#C5A059] transition-all">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium">
              <Gem className="w-4 h-4" />
              <span>Patron Courtesy Service</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917]">
              Complimentary Ultrasonic Jewellery Spa
            </h3>

            <p className="text-xs sm:text-sm text-[#57534E] font-light leading-relaxed">
              Bring any fine jewellery piece to our Castle Hill boutique for a complimentary ultrasonic steam cleaning, claw tightness inspection, and professional metal luster restoration.
            </p>
          </div>

          <div className="pt-8 mt-6 border-t border-[#E2DDD0] flex items-center justify-between">
            <span className="text-[11px] text-[#C5A059] font-semibold uppercase tracking-wider">
              Available Everyday In-Store
            </span>

            <button
              onClick={onScrollToMap}
              className="bg-[#1C1917] hover:bg-[#C5A059] text-white px-5 py-2.5 text-xs uppercase tracking-wider font-medium transition-colors flex items-center gap-2"
            >
              <span>Locate Boutique</span>
              <MapPin className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>

    </section>
  );
};
