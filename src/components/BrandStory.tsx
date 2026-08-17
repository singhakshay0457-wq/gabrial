import React, { useState } from 'react';
import { Sparkles, ArrowRight, ShieldCheck, Award, HeartHandshake, X } from 'lucide-react';

interface BrandStoryProps {}

export const BrandStory: React.FC<BrandStoryProps> = () => {
  const [showStoryModal, setShowStoryModal] = useState(false);

  return (
    <section id="brand-story-section" className="py-24 bg-[#181614] text-[#FAF9F5] relative overflow-hidden">
      
      {/* Background Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#C5A059]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Editorial Image Side */}
          <div className="lg:col-span-6 relative">
            <div className="relative aspect-[4/5] overflow-hidden border border-[#C5A059]/30 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=1200"
                alt="Master Craftsman Setting Diamonds at Gabriel Atelier"
                className="w-full h-full object-cover object-center grayscale hover:grayscale-0 transition-all duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#181614] via-transparent to-transparent opacity-60" />
            </div>

            {/* Overlapping Badge Card */}
            <div className="absolute -bottom-6 -right-6 bg-[#211E1B] border border-[#C5A059]/40 p-6 hidden sm:block max-w-xs backdrop-blur-md shadow-2xl">
              <p className="font-serif italic text-lg text-[#E8D3A7] mb-1">“Perfection in every micron.”</p>
              <p className="text-[11px] uppercase tracking-widest text-[#D4CEBF]">Atelier Gabriel • Since 1994</p>
            </div>
          </div>

          {/* Text Content Side */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#C5A059] font-medium mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                Atelier Heritage
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal leading-[1.1] text-[#FAF9F5] mb-6">
                Crafted with intention.<br />
                <span className="italic font-light text-[#E8D3A7]">Designed to last.</span>
              </h2>
            </div>

            <p className="text-base text-[#D4CEBF] font-light leading-relaxed font-sans">
              Founded on the belief that fine jewellery should be an intimate expression of individuality, Gabriel Jewellery combines age-old master goldsmithing techniques with modern architectural grace.
            </p>

            <p className="text-sm text-[#A8A29E] font-light leading-relaxed">
              Every diamond is hand-selected under 10x magnification for fire, brilliance, and optical purity. Every gold alloy is hallmarked 18K solid purity, ensuring your piece retains structural integrity across generations.
            </p>

            <div className="pt-4 border-t border-[#332F2A] grid grid-cols-2 gap-6 text-xs text-[#E8D3A7]">
              <div>
                <span className="font-serif text-2xl text-[#FAF9F5] block mb-0.5">100%</span>
                <span className="uppercase tracking-wider text-[#A8A29E]">Recycled Gold Standard</span>
              </div>
              <div>
                <span className="font-serif text-2xl text-[#FAF9F5] block mb-0.5">Conflict-Free</span>
                <span className="uppercase tracking-wider text-[#A8A29E]">Kimberley Process Compliant</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <button
                onClick={() => setShowStoryModal(true)}
                className="w-full sm:w-auto px-8 py-3.5 bg-[#C5A059] text-white hover:bg-[#B08C46] transition-colors text-xs uppercase tracking-[0.25em] font-medium flex items-center justify-center gap-2 group"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Brand Story Modal */}
      {showStoryModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#1C1917] border border-[#C5A059]/40 max-w-3xl w-full p-8 md:p-12 relative text-[#FAF9F5] max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setShowStoryModal(false)}
              className="absolute top-6 right-6 p-2 text-[#A8A29E] hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>

            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] block mb-2 font-medium">
              The Legacy of Gabriel Jewellery
            </span>
            <h3 className="font-serif text-3xl sm:text-4xl font-normal text-[#FAF9F5] mb-6">
              In Pursuit of Eternal Beauty
            </h3>

            <div className="space-y-4 text-sm text-[#D4CEBF] leading-relaxed font-light">
              <p>
                Gabriel Jewellery was established with a clear mandate: to dismantle mass-produced compromises and return fine jewellery to its original artisan origins.
              </p>
              <p>
                In our atelier, master craftspeople dedicated to traditional stone setting, hand-engraving, and custom CAD modeling spend dozens of hours refining each curve. We work strictly with 18K solid gold and 950 Platinum, never plating or filling.
              </p>
              <p>
                Whether crafting a fine engagement solitaire or a daily tennis bracelet, our commitment remains absolute: fine jewellery that feels effortless, wears comfortably, and becomes part of your family’s legacy.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-[#332F2A] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <p className="font-serif text-lg text-[#E8D3A7] italic">Gabriel V. & Team</p>
                <p className="text-[11px] text-[#A8A29E] uppercase tracking-wider">Founders & Master Jewelers</p>
              </div>

              <button
                onClick={() => setShowStoryModal(false)}
                className="bg-[#C5A059] text-white px-6 py-2.5 text-xs uppercase tracking-widest font-medium hover:bg-[#B08C46] transition-colors"
              >
                Close Story
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};
