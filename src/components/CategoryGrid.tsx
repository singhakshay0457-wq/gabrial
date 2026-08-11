import React from 'react';
import { CategoryType } from '../types';

interface CategoryGridProps {
  onSelectCategory: (category: CategoryType) => void;
  activeCategory: string;
}

export const CategoryGrid: React.FC<CategoryGridProps> = ({ onSelectCategory }) => {
  const categories: { name: CategoryType; subtitle: string; image: string; count: string }[] = [
    {
      name: 'Rings',
      subtitle: 'Solitaires, Bands & Gemstone Crowns',
      image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
      count: '14 Designs'
    },
    {
      name: 'Necklaces',
      subtitle: 'Pendants, Chains & High Fine Chokers',
      image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
      count: '18 Designs'
    },
    {
      name: 'Earrings',
      subtitle: 'Studs, Huggies & Pearl Drops',
      image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800',
      count: '12 Designs'
    },
    {
      name: 'Bracelets',
      subtitle: 'Tennis Bracelets & Sculpted Bangles',
      image: 'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=800',
      count: '10 Designs'
    }
  ];

  return (
    <section className="py-20 bg-[#F3F0E6] border-b border-[#E2DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#E2DDD0]">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-[#C5A059] font-semibold block mb-2">
              Atelier Directory
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#1C1917]">
              Shop by Category
            </h2>
          </div>
          <p className="text-xs text-[#57534E] uppercase tracking-widest mt-3 md:mt-0">
            Hand-cut stones & hallmarked 18K solid gold
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {categories.map((cat) => (
            <div
              key={cat.name}
              onClick={() => onSelectCategory(cat.name)}
              className="group cursor-pointer bg-[#FAF9F5] border border-[#E2DDD0] overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-[#C5A059]"
            >
              <div className="aspect-[4/5] relative overflow-hidden bg-[#E8E5DA]">
                <img
                  src={cat.image}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1917]/70 via-[#1C1917]/10 to-transparent transition-opacity duration-300 group-hover:opacity-80" />
                
                <div className="absolute top-3 right-3 text-[10px] uppercase tracking-widest text-white/90 bg-[#1C1917]/60 backdrop-blur-xs px-2 py-0.5">
                  {cat.count}
                </div>

                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <h3 className="font-serif text-2xl font-normal tracking-wide text-white mb-1 group-hover:text-[#E8D3A7] transition-colors">
                    {cat.name}
                  </h3>
                  <p className="text-[11px] text-[#D4CEBF] font-light hidden sm:block">
                    {cat.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
