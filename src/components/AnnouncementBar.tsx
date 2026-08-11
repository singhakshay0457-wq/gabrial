import React from 'react';
import { MapPin, Instagram } from 'lucide-react';

export const AnnouncementBar: React.FC = () => {
  return (
    <div className="bg-[#1C1917] text-[#FAF9F5] text-xs font-medium py-2.5 px-4 text-center tracking-wider uppercase flex items-center justify-center gap-2 border-b border-[#2C2825] flex-wrap">
      <MapPin className="w-3.5 h-3.5 text-[#C5A059] animate-pulse" />
      <span>Visit Our Boutique: Gabriel Jewellers, 297 Old Northern Rd, Castle Hill NSW 2154</span>
      <span className="hidden sm:inline text-[#C5A059] mx-1">•</span>
      <a
        href="https://www.instagram.com/thegabrieljewellers?utm_source=qr"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-[#C5A059] hover:text-[#E8D3A7] transition-colors normal-case font-normal"
      >
        <Instagram className="w-3.5 h-3.5" />
        <span>@thegabrieljewellers</span>
      </a>
    </div>
  );
};
