import React, { useState } from 'react';
import { CategoryType } from '../types';
import { Phone, Mail, MapPin, X, Instagram } from 'lucide-react';

interface FooterProps {
  onSelectCategory: (category: CategoryType | 'All') => void;
  onScrollToSection: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onSelectCategory,
  onScrollToSection,
}) => {
  const [activePolicyModal, setActivePolicyModal] = useState<string | null>(null);

  const policyContent: Record<string, { title: string; body: string }> = {
    'shipping': {
      title: 'Boutique Collection & Viewing',
      body: 'All Gabriel fine jewellery designs are available for viewing and bespoke commissions at our Castle Hill flagship boutique. Each piece is accompanied by authentic certification cards and high-security presentation cases.'
    },
    'returns': {
      title: 'Complimentary Atelier Care & Assurance',
      body: 'We provide complimentary ultrasonic cleaning, inspection, and ring sizing evaluations for all pieces handcrafted at our Castle Hill workshop.'
    },
    'privacy': {
      title: 'Privacy Policy',
      body: 'Gabriel Jewellers protects patron data with high standard security. We never sell or transfer your personal credentials, contact inquiries, or design records to third parties.'
    },
    'terms': {
      title: 'Terms & Conditions',
      body: 'All jewellery showcased is hallmarked and accompanied by authentic certification cards. Images represent actual craftsmanship under professional atelier studio illumination.'
    }
  };

  return (
    <footer className="bg-[#181614] text-[#FAF9F5] border-t border-[#2C2825] pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pb-12 border-b border-[#2C2825]">
          
          {/* Brand Col */}
          <div className="space-y-4">
            <div>
              <span className="font-serif text-3xl tracking-[0.15em] font-semibold text-[#FAF9F5] uppercase block">
                Gabriel
              </span>
              <span className="text-[11px] tracking-[0.35em] text-[#C5A059] uppercase block mt-1 font-medium">
                Jewellers
              </span>
            </div>
            <a
              href="https://www.instagram.com/thegabrieljewellers?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs text-[#D4CEBF] hover:text-[#C5A059] transition-colors pt-2"
            >
              <Instagram className="w-4 h-4 text-[#C5A059]" />
              <span>Follow @thegabrieljewellers</span>
            </a>
          </div>

          {/* Contact & Concierge */}
          <div>
            <h4 className="font-serif text-lg font-normal text-[#FAF9F5] mb-4">
              Castle Hill Boutique
            </h4>
            <div className="space-y-3 text-xs text-[#D4CEBF] font-light">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                <span className="leading-relaxed">
                  <strong className="text-white font-medium block">Gabriel Jewellers</strong>
                  297 Old Northern Rd, Castle Hill NSW 2154, Australia
                </span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="tel:+61296591110" className="hover:text-[#C5A059] font-medium text-white">
                  +61 2 9659 1110
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                <a href="mailto:gabriel.jewellers@gmail.com" className="hover:text-[#C5A059] transition-colors">
                  gabriel.jewellers@gmail.com
                </a>
              </p>
              <div className="pt-2 flex flex-col gap-2">
                <button
                  onClick={() => onScrollToSection('store-location-section')}
                  className="inline-flex items-center justify-center gap-2 bg-[#C5A059] text-white px-3 py-2 hover:bg-[#B08C46] transition-colors text-[11px] font-medium uppercase tracking-wider"
                >
                  <MapPin className="w-3.5 h-3.5" />
                  <span>View Map & Hours</span>
                </button>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#A8A29E] font-light">
          <p>© 2026 Gabriel Jewellers Castle Hill. All Rights Reserved.</p>
        </div>

      </div>

      {/* Policy Modal */}
      {activePolicyModal && policyContent[activePolicyModal] && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div className="bg-[#1C1917] border border-[#C5A059]/40 max-w-lg w-full p-8 relative text-[#FAF9F5]">
            <button
              onClick={() => setActivePolicyModal(null)}
              className="absolute top-6 right-6 text-[#A8A29E] hover:text-white"
            >
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-serif text-2xl font-normal text-[#FAF9F5] mb-4">
              {policyContent[activePolicyModal].title}
            </h3>
            <p className="text-xs text-[#D4CEBF] font-light leading-relaxed mb-6">
              {policyContent[activePolicyModal].body}
            </p>
            <button
              onClick={() => setActivePolicyModal(null)}
              className="bg-[#C5A059] text-white px-6 py-2 text-xs uppercase tracking-widest font-medium hover:bg-[#B08C46]"
            >
              Close
            </button>
          </div>
        </div>
      )}

    </footer>
  );
};
