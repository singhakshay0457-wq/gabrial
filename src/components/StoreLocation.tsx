import React, { useState } from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Navigation,
  ExternalLink,
  Calendar,
  Sparkles,
  Train,
  Car,
  ShieldCheck,
  CheckCircle2,
  Mail,
  Instagram
} from 'lucide-react';

interface StoreLocationProps {}

export const StoreLocation: React.FC<StoreLocationProps> = () => {
  const storeName = "Gabriel Jewellers - Jewellery Store Castle Hill";
  const address = "297 Old Northern Rd, Castle Hill NSW 2154, Australia";
  const phone = "+61 2 9659 1110";
  const email = "gabriel.jewellers@gmail.com";

  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    'Gabriel Jewellers Jewellery Store Castle Hill 297 Old Northern Rd Castle Hill NSW 2154 Australia'
  )}`;

  const directionsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(
    'Gabriel Jewellers 297 Old Northern Rd Castle Hill NSW 2154 Australia'
  )}`;

  const embedMapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    'Gabriel Jewellers 297 Old Northern Rd Castle Hill NSW 2154 Australia'
  )}&t=&z=16&ie=UTF8&iwloc=&output=embed`;

  const [startingPoint, setStartingPoint] = useState('Sydney CBD');

  const routeGuides: Record<string, { driveTime: string; metroTime: string; tip: string }> = {
    'Sydney CBD': {
      driveTime: '32 mins via M2 Motorway',
      metroTime: '35 mins via Metro Northwest line from Martin Place / Barangaroo',
      tip: 'Exit at Castle Hill Metro Station; walk 250m north along Old Northern Rd.',
    },
    'Parramatta': {
      driveTime: '18 mins via Windsor Rd',
      metroTime: '22 mins via Bus 600 / Metro route',
      tip: 'Convenient street-level entry opposite Castle Towers precinct.',
    },
    'Norwest / Bella Vista': {
      driveTime: '10 mins via Showground Rd',
      metroTime: '6 mins via Metro Northwest (2 stops)',
      tip: 'Direct 1-stop trip from Norwest Station straight to Castle Hill Station.',
    },
    'Rouse Hill': {
      driveTime: '14 mins via Windsor Rd',
      metroTime: '10 mins via Metro Northwest',
      tip: 'Short metro commute with frequent 4-minute departures.',
    },
  };

  const selectedRoute = routeGuides[startingPoint] || routeGuides['Sydney CBD'];

  return (
    <section id="store-location-section" className="py-20 bg-[#F3F0E6] border-t border-b border-[#E2DDD0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FAF9F5] border border-[#C5A059]/40 text-[#C5A059] text-[11px] uppercase tracking-[0.25em] font-medium mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Castle Hill Flagship Store</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-normal text-[#1C1917] mb-4">
            Visit Our Atelier in Castle Hill
          </h2>
          <p className="text-sm sm:text-base text-[#57534E] font-light leading-relaxed">
            Experience our master handcrafted fine jewellery in person. Walk through our fine diamond gallery or consult directly with our gemologists at our Castle Hill boutique.
          </p>
        </div>

        {/* Grid: Map Embed + Store Details */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Left Column: Interactive Google Map & Transport Guide */}
          <div className="lg:col-span-7 flex flex-col justify-between bg-[#FAF9F5] border border-[#E2DDD0] shadow-sm overflow-hidden">
            
            {/* Map Frame Container */}
            <div className="relative w-full h-[360px] sm:h-[420px] bg-[#E8E5DA]">
              <iframe
                title="Gabriel Jewellers Castle Hill Location Map"
                src={embedMapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full grayscale-[20%] contrast-[105%]"
              />

              {/* Floating Map Navigation Badge */}
              <div className="absolute bottom-4 left-4 right-4 sm:right-auto bg-[#1C1917]/95 text-[#FAF9F5] p-4 backdrop-blur-md border border-[#C5A059]/50 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div>
                  <h4 className="font-serif text-sm font-medium text-white flex items-center gap-1.5">
                    <MapPin className="w-4 h-4 text-[#C5A059]" />
                    <span>297 Old Northern Rd, Castle Hill</span>
                  </h4>
                  <p className="text-[11px] text-[#D4CEBF] font-light">NSW 2154, Sydney, Australia</p>
                </div>

                <div className="flex gap-2 w-full sm:w-auto">
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-3.5 py-2 bg-[#C5A059] hover:bg-[#B08C46] text-white text-[11px] uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <span>View Map</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>

                  <a
                    href={directionsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 sm:flex-none px-3.5 py-2 bg-[#FAF9F5] text-[#1C1917] hover:bg-white text-[11px] uppercase tracking-wider font-semibold transition-colors flex items-center justify-center gap-1.5"
                  >
                    <Navigation className="w-3.5 h-3.5 text-[#C5A059]" />
                    <span>Directions</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Travel / Metro & Parking Planner */}
            <div className="p-6 bg-[#FAF9F5] border-t border-[#E8E5DA] space-y-4">
              <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-[#1C1917]">
                <span className="flex items-center gap-1.5">
                  <Navigation className="w-4 h-4 text-[#C5A059]" />
                  <span>Travel & Directions Assistant</span>
                </span>
                <span className="text-[10px] text-[#C5A059] font-normal">3 Min Walk From Metro</span>
              </div>

              {/* Selector */}
              <div className="flex flex-wrap gap-2">
                {Object.keys(routeGuides).map((loc) => (
                  <button
                    key={loc}
                    onClick={() => setStartingPoint(loc)}
                    className={`px-3 py-1.5 text-xs border transition-all ${
                      startingPoint === loc
                        ? 'border-[#C5A059] bg-[#C5A059]/15 text-[#1C1917] font-semibold'
                        : 'border-[#E2DDD0] bg-[#F3F0E6] text-[#57534E] hover:border-[#C5A059]'
                    }`}
                  >
                    From {loc}
                  </button>
                ))}
              </div>

              {/* Route Summary Box */}
              <div className="p-4 bg-[#F3F0E6] border border-[#E2DDD0] text-xs space-y-2">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="flex items-center gap-2 text-[#1C1917]">
                    <Car className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <div>
                      <span className="text-[10px] text-[#57534E] uppercase tracking-wider block">Driving</span>
                      <span className="font-semibold">{selectedRoute.driveTime}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-[#1C1917]">
                    <Train className="w-4 h-4 text-[#C5A059] shrink-0" />
                    <div>
                      <span className="text-[10px] text-[#57534E] uppercase tracking-wider block">Sydney Metro</span>
                      <span className="font-semibold">{selectedRoute.metroTime}</span>
                    </div>
                  </div>
                </div>

                <p className="text-[11px] text-[#57534E] pt-2 border-t border-[#E2DDD0] italic">
                  💡 <strong className="font-semibold text-[#1C1917] font-sans">Atelier Tip:</strong> {selectedRoute.tip} Complimentary 3-hour parking is available directly across at Castle Towers shopping precinct.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Store Boutique Details & Hours */}
          <div className="lg:col-span-5 bg-[#FAF9F5] border border-[#E2DDD0] p-6 sm:p-8 flex flex-col justify-between space-y-8 shadow-sm">
            
            {/* Header info */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-[#C5A059] font-medium mb-1">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Castle Hill Fine Jewellery Boutique</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#1C1917] mb-2">
                Gabriel Jewellers
              </h3>
              <p className="text-xs text-[#57534E] font-light leading-relaxed">
                Specialising in certified diamond solitaire engagement rings, wedding bands, luxury gemstone remodelling, and official valuations.
              </p>
            </div>

            {/* Address & Contact Cards */}
            <div className="space-y-4 text-xs font-sans">
              <div className="p-4 bg-[#F3F0E6] border border-[#E2DDD0] space-y-2">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-[#C5A059] shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold text-[#1C1917] block">Boutique Address</span>
                    <span className="text-[#57534E] leading-relaxed block">{address}</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3 bg-[#F3F0E6] border border-[#E2DDD0] flex items-center gap-2">
                  <Phone className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#57534E] uppercase tracking-wider block">Call</span>
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="font-semibold text-[#1C1917] hover:text-[#C5A059] text-xs">
                      {phone}
                    </a>
                  </div>
                </div>

                <div className="p-3 bg-[#F3F0E6] border border-[#E2DDD0] flex items-center gap-2">
                  <Mail className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#57534E] uppercase tracking-wider block">Email</span>
                    <a href={`mailto:${email}`} className="font-semibold text-[#1C1917] hover:text-[#C5A059] truncate block max-w-[100px] text-xs">
                      {email}
                    </a>
                  </div>
                </div>

                <div className="p-3 bg-[#F3F0E6] border border-[#E2DDD0] flex items-center gap-2">
                  <Instagram className="w-4 h-4 text-[#C5A059] shrink-0" />
                  <div>
                    <span className="text-[10px] text-[#57534E] uppercase tracking-wider block">Instagram</span>
                    <a
                      href="https://www.instagram.com/thegabrieljewellers?utm_source=qr"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-[#1C1917] hover:text-[#C5A059] truncate block max-w-[100px] text-xs"
                    >
                      @thegabrieljewellers
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Boutique Hours */}
            <div>
              <div className="flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-[#1C1917] mb-3">
                <Clock className="w-4 h-4 text-[#C5A059]" />
                <span>Store Opening Hours</span>
              </div>

              <div className="bg-[#F3F0E6] p-4 border border-[#E2DDD0] text-xs space-y-2">
                <div className="flex justify-between py-1 border-b border-[#E2DDD0]">
                  <span className="text-[#57534E]">Monday – Friday</span>
                  <span className="font-semibold text-[#1C1917]">9:00 AM – 5:00 PM</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#E2DDD0]">
                  <span className="text-[#57534E]">Saturday</span>
                  <span className="font-semibold text-[#1C1917]">9:00 AM – 4:00 PM</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-[#57534E]">Sunday</span>
                  <span className="font-semibold text-red-700">Closed</span>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3 pt-2">
              <a
                href={googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#C5A059] hover:bg-[#B08C46] text-white py-3.5 text-xs uppercase tracking-[0.2em] font-medium transition-colors flex items-center justify-center gap-2"
              >
                <Navigation className="w-4 h-4" />
                <span>Open Direct Location in Google Maps</span>
              </a>
            </div>

            {/* In-Store Amenities */}
            <div className="pt-4 border-t border-[#E8E5DA] grid grid-cols-3 gap-2 text-[10px] text-[#57534E] uppercase tracking-wider text-center">
              <div className="flex flex-col items-center">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C5A059] mb-1" />
                <span>Free On-Site Cleaning</span>
              </div>
              <div className="flex flex-col items-center">
                <ShieldCheck className="w-3.5 h-3.5 text-[#C5A059] mb-1" />
                <span>Certified Valuations</span>
              </div>
              <div className="flex flex-col items-center">
                <Sparkles className="w-3.5 h-3.5 text-[#C5A059] mb-1" />
                <span>Private VIP Lounge</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
