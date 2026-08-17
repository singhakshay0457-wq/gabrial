import React, { useState } from 'react';
import { ATELIER_CUSTOM_DESIGNS, CustomDesignItem } from '../data/bespokeDesigns';
import { Sparkles, Phone, X, ZoomIn } from 'lucide-react';

export const CustomCollageGallery: React.FC = () => {
  const [selectedPiece, setSelectedPiece] = useState<CustomDesignItem | null>(null);

  // High-fidelity fallback imagery for custom craftsmanship pieces
  const imageMap: Record<string, string> = {
    'bespoke-001': 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200',
    'bespoke-002': 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200',
    'bespoke-003': 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=1200',
    'bespoke-004': 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=1200',
    'bespoke-005': 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200',
  };

  return (
    <section id="gallery-showcase-section" className="py-24 bg-[#181614] text-[#FAF9F5] relative overflow-hidden border-t border-[#2C2825]">
      
      {/* Background Subtle Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#C5A059]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Castle Hill Atelier Craft</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-white tracking-tight">
            Masterpieces & Workbench Showcase
          </h2>
          <div className="w-16 h-[1px] bg-[#C5A059] mx-auto my-4" />
          <p className="text-sm text-[#D4CEBF] font-light leading-relaxed">
            A visual showcase of fine engagement rings, high fine pendants, and intricate gemstone settings handcrafted at our Castle Hill workshop.
          </p>
        </div>

        {/* Dynamic Asymmetric Collage Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">
          
          {/* Card 1: Main Highlight - Oval Sapphire Halo (Span 7) */}
          <div 
            onClick={() => setSelectedPiece(ATELIER_CUSTOM_DESIGNS[0])}
            className="md:col-span-7 group relative bg-[#211E1B] border border-[#C5A059]/30 overflow-hidden cursor-pointer min-h-[380px] sm:min-h-[460px] flex flex-col justify-end p-6 sm:p-8 transition-all duration-500 hover:border-[#C5A059] shadow-2xl"
          >
            <img 
              src={imageMap['bespoke-001']} 
              alt={ATELIER_CUSTOM_DESIGNS[0].title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-[#181614]/50 to-transparent" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest bg-[#C5A059] text-white px-2.5 py-1 font-semibold">
                {ATELIER_CUSTOM_DESIGNS[0].tag}
              </span>
              <span className="text-xs text-[#E8D3A7] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" /> View Design
              </span>
            </div>
          </div>

          {/* Card 2: Micro-Pavé Sphere Pendant (Span 5) */}
          <div 
            onClick={() => setSelectedPiece(ATELIER_CUSTOM_DESIGNS[1])}
            className="md:col-span-5 group relative bg-[#211E1B] border border-[#C5A059]/30 overflow-hidden cursor-pointer min-h-[380px] sm:min-h-[460px] flex flex-col justify-end p-6 sm:p-8 transition-all duration-500 hover:border-[#C5A059] shadow-2xl"
          >
            <img 
              src={imageMap['bespoke-002']} 
              alt={ATELIER_CUSTOM_DESIGNS[1].title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-[#181614]/50 to-transparent" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest bg-[#211E1B]/80 text-[#C5A059] border border-[#C5A059]/40 px-2.5 py-1 font-semibold inline-block">
                {ATELIER_CUSTOM_DESIGNS[1].tag}
              </span>
              <span className="text-xs text-[#E8D3A7] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" /> View Design
              </span>
            </div>
          </div>

          {/* Bottom Row: 3 Equal Width Cards (Span 4 each) */}

          {/* Card 3: Swirl Bezel Ring */}
          <div 
            onClick={() => setSelectedPiece(ATELIER_CUSTOM_DESIGNS[2])}
            className="md:col-span-4 group relative bg-[#211E1B] border border-[#C5A059]/30 overflow-hidden cursor-pointer min-h-[320px] flex flex-col justify-end p-6 transition-all duration-500 hover:border-[#C5A059] shadow-xl"
          >
            <img 
              src={imageMap['bespoke-003']} 
              alt={ATELIER_CUSTOM_DESIGNS[2].title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-[#181614]/60 to-transparent" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-[#E8D3A7] font-semibold">
                {ATELIER_CUSTOM_DESIGNS[2].category}
              </span>
              <span className="text-xs text-[#E8D3A7] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" /> View Design
              </span>
            </div>
          </div>

          {/* Card 4: Pear Diamond Halo */}
          <div 
            onClick={() => setSelectedPiece(ATELIER_CUSTOM_DESIGNS[3])}
            className="md:col-span-4 group relative bg-[#211E1B] border border-[#C5A059]/30 overflow-hidden cursor-pointer min-h-[320px] flex flex-col justify-end p-6 transition-all duration-500 hover:border-[#C5A059] shadow-xl"
          >
            <img 
              src={imageMap['bespoke-004']} 
              alt={ATELIER_CUSTOM_DESIGNS[3].title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-[#181614]/60 to-transparent" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-[#E8D3A7] font-semibold">
                {ATELIER_CUSTOM_DESIGNS[3].category}
              </span>
              <span className="text-xs text-[#E8D3A7] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" /> View Design
              </span>
            </div>
          </div>

          {/* Card 5: Master Jeweller Workbench */}
          <div 
            onClick={() => setSelectedPiece(ATELIER_CUSTOM_DESIGNS[4])}
            className="md:col-span-4 group relative bg-[#211E1B] border border-[#C5A059]/30 overflow-hidden cursor-pointer min-h-[320px] flex flex-col justify-end p-6 transition-all duration-500 hover:border-[#C5A059] shadow-xl"
          >
            <img 
              src={imageMap['bespoke-005']} 
              alt={ATELIER_CUSTOM_DESIGNS[4].title}
              className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105 opacity-85 group-hover:opacity-100"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-[#181614]/70 to-transparent" />
            
            <div className="relative z-10 flex items-center justify-between">
              <span className="text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold">
                {ATELIER_CUSTOM_DESIGNS[4].tag}
              </span>
              <span className="text-xs text-[#E8D3A7] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <ZoomIn className="w-3.5 h-3.5" /> View Design
              </span>
            </div>
          </div>

        </div>

        {/* CTA Banner below collage */}
        <div className="mt-12 p-8 bg-[#211E1B] border border-[#C5A059]/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h3 className="font-serif text-2xl text-white">Have a Unique Fine Design in Mind?</h3>
            <p className="text-xs text-[#D4CEBF] font-light">
              Visit our Castle Hill boutique or speak with our master jewellers today.
            </p>
          </div>
          <a
            href="tel:+61296591110"
            className="px-8 py-3.5 bg-[#C5A059] text-white hover:bg-[#B08C46] transition-colors text-xs uppercase tracking-[0.2em] font-medium shrink-0 flex items-center gap-2"
          >
            <Phone className="w-4 h-4" />
            <span>Call +61 2 9659 1110</span>
          </a>
        </div>

      </div>

      {/* Custom Design Lightbox Detail Modal */}
      {selectedPiece && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
          <div className="bg-[#1C1917] border border-[#C5A059]/40 max-w-2xl w-full p-6 sm:p-8 relative text-[#FAF9F5] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedPiece(null)}
              className="absolute top-4 right-4 p-2 text-[#A8A29E] hover:text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C5A059] block mb-4 font-semibold">
              {selectedPiece.category} • {selectedPiece.tag}
            </span>

            <div className="aspect-[16/10] overflow-hidden border border-[#C5A059]/30 mb-6 bg-black">
              <img 
                src={imageMap[selectedPiece.id]} 
                alt={selectedPiece.title}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            <p className="text-xs text-[#A8A29E] font-light leading-relaxed mb-6 italic border-l-2 border-[#C5A059] pl-3">
              "{selectedPiece.details}"
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-3">
              <a
                href="tel:+61296591110"
                className="w-full sm:w-auto flex-1 bg-[#C5A059] text-white py-3 px-6 text-xs uppercase tracking-widest font-medium hover:bg-[#B08C46] transition-colors flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>Call Atelier: +61 2 9659 1110</span>
              </a>
              <button
                onClick={() => setSelectedPiece(null)}
                className="w-full sm:w-auto bg-transparent border border-[#C5A059]/60 text-[#E8D3A7] py-3 px-6 text-xs uppercase tracking-widest font-medium hover:bg-[#C5A059]/10 transition-colors"
              >
                Close
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
