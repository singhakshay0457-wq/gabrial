import React from 'react';
import { X, Ruler, Sparkles } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
  category?: string;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose, category = 'Rings' }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="bg-[#FAF9F5] border border-[#E2DDD0] max-w-2xl w-full p-6 sm:p-8 relative text-[#1C1917] max-h-[90vh] overflow-y-auto">
        
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#57534E] hover:text-[#1C1917] transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-[#C5A059] font-semibold mb-2">
          <Ruler className="w-4 h-4" />
          <span>Atelier Measurement Guide</span>
        </div>

        <h3 className="font-serif text-3xl font-normal text-[#1C1917] mb-4">
          {category === 'Rings' ? 'Ring Sizing Chart' : 'Necklace Length Guide'}
        </h3>

        <p className="text-xs text-[#57534E] font-light leading-relaxed mb-6">
          Find your perfect Gabriel fit. All Gabriel rings can also be resized free of charge within 60 days of purchase at any atelier.
        </p>

        {category === 'Rings' ? (
          <div className="overflow-x-auto border border-[#E2DDD0] mb-6">
            <table className="w-full text-left text-xs">
              <thead className="bg-[#F3F0E6] text-[#1C1917] font-serif uppercase tracking-wider">
                <tr>
                  <th className="p-3 border-b border-[#E2DDD0]">Indian / US Size</th>
                  <th className="p-3 border-b border-[#E2DDD0]">Inner Diameter (mm)</th>
                  <th className="p-3 border-b border-[#E2DDD0]">Inner Circumference (mm)</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E2DDD0] font-sans text-[#57534E]">
                <tr><td className="p-3 font-semibold text-[#1C1917]">Size 5</td><td className="p-3">15.7 mm</td><td className="p-3">49.3 mm</td></tr>
                <tr><td className="p-3 font-semibold text-[#1C1917]">Size 6</td><td className="p-3">16.5 mm</td><td className="p-3">51.8 mm</td></tr>
                <tr className="bg-[#C5A059]/10"><td className="p-3 font-semibold text-[#1C1917]">Size 7 (Standard Women)</td><td className="p-3">17.3 mm</td><td className="p-3">54.4 mm</td></tr>
                <tr><td className="p-3 font-semibold text-[#1C1917]">Size 8</td><td className="p-3">18.1 mm</td><td className="p-3">56.9 mm</td></tr>
                <tr><td className="p-3 font-semibold text-[#1C1917]">Size 9 (Standard Men)</td><td className="p-3">18.9 mm</td><td className="p-3">59.5 mm</td></tr>
                <tr><td className="p-3 font-semibold text-[#1C1917]">Size 10</td><td className="p-3">19.8 mm</td><td className="p-3">62.1 mm</td></tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="space-y-4 mb-6 text-xs text-[#57534E]">
            <div className="p-4 bg-[#F3F0E6] border border-[#E2DDD0]">
              <span className="font-semibold text-[#1C1917] block text-sm">16 Inches (40 cm) • Choker / Collar</span>
              <span>Rests right at the base of the throat. Ideal for scoop and off-shoulder necklines.</span>
            </div>
            <div className="p-4 bg-[#F3F0E6] border border-[#E2DDD0]">
              <span className="font-semibold text-[#1C1917] block text-sm">18 Inches (45 cm) • Princess Length</span>
              <span>Rests on the collarbone. The most versatile length for daily pendant wearing.</span>
            </div>
            <div className="p-4 bg-[#F3F0E6] border border-[#E2DDD0]">
              <span className="font-semibold text-[#1C1917] block text-sm">20 Inches (50 cm) • Matinee Length</span>
              <span>Rests just below the collarbone. Creates an elegant elongated neck silhouette.</span>
            </div>
          </div>
        )}

        <div className="bg-[#1C1917] text-[#FAF9F5] p-4 text-xs flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-[#C5A059] shrink-0" />
          <p className="font-light">
            Unsure of your exact size? Request a complimentary physical ring sizer sent discreetly to your address before finalizing your order.
          </p>
        </div>

      </div>
    </div>
  );
};
