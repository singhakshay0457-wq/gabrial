import React from 'react';
import { CRAFTSMANSHIP_PILLARS } from '../data/content';
import { Sparkles, Hammer, Award, ShieldCheck } from 'lucide-react';

export const Craftsmanship: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
      case 'Hammer':
        return <Hammer className="w-6 h-6 text-[#C5A059]" />;
      case 'Award':
        return <Award className="w-6 h-6 text-[#C5A059]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#C5A059]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#C5A059]" />;
    }
  };

  return (
    <section id="craftsmanship-section" className="py-20 bg-[#F3F0E6] border-y border-[#E2DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-semibold block mb-2">
            The Gabriel Promise
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1917] tracking-tight">
            Pillars of Luxury Craftsmanship
          </h2>
          <div className="w-12 h-[1px] bg-[#C5A059] mx-auto mt-4 mb-3" />
          <p className="text-xs text-[#57534E] uppercase tracking-widest font-medium">
            Uncompromising Standards for Every Piece
          </p>
        </div>

        {/* Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {CRAFTSMANSHIP_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="bg-[#FAF9F5] p-8 border border-[#E2DDD0] hover:border-[#C5A059] transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1 shadow-2xs hover:shadow-md"
            >
              <div>
                <div className="w-12 h-12 rounded-full bg-[#F3F0E6] flex items-center justify-center mb-6 group-hover:bg-[#1C1917] transition-colors duration-300 border border-[#E2DDD0]">
                  {getIcon(pillar.icon)}
                </div>

                <h3 className="font-serif text-2xl font-normal text-[#1C1917] mb-3 group-hover:text-[#C5A059] transition-colors">
                  {pillar.title}
                </h3>

                <p className="text-xs text-[#57534E] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#F0ECE1] flex items-center gap-1.5 text-[10px] uppercase tracking-widest text-[#C5A059] font-semibold">
                <span>Gabriel Standard</span>
                <span>•</span>
                <span>Verified</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
