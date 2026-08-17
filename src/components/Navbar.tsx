import React, { useState, useEffect } from 'react';
import { MapPin, Menu, X, Sparkles, Navigation } from 'lucide-react';
import { CategoryType, CollectionType } from '../types';

interface NavbarProps {
  wishlistCount: number;
  onOpenWishlist: () => void;
  onOpenAccount: () => void;
  onSelectCategory: (category: CategoryType | 'All') => void;
  onSelectCollection: (collection: CollectionType | 'All') => void;
  onScrollToSection: (sectionId: string) => void;
  activeCategory: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  wishlistCount,
  onOpenWishlist,
  onOpenAccount,
  onSelectCategory,
  onSelectCollection,
  onScrollToSection,
  activeCategory,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navCategories: { label: string; category?: CategoryType; collection?: CollectionType; sectionId?: string }[] = [
    { label: 'Castle Hill Store & Map', sectionId: 'store-location-section' },
    { label: 'Atelier Showcase', sectionId: 'gallery-showcase-section' },
  ];

  const handleNavClick = (item: typeof navCategories[0]) => {
    setMobileMenuOpen(false);
    if (item.sectionId) {
      onScrollToSection(item.sectionId);
    }
  };

  return (
    <header className={`sticky top-0 z-40 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#FAF9F5]/90 backdrop-blur-md shadow-sm border-b border-[#E8E5DA]' 
        : 'bg-[#FAF9F5] border-b border-[#F0ECE1]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Mobile menu hamburger button */}
          <div className="flex items-center lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="p-2 text-[#1C1917] hover:text-[#C5A059] transition-colors focus:outline-none"
              aria-label="Open Navigation Menu"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>

          {/* Brand Logo */}
          <div className="flex-1 lg:flex-initial text-center lg:text-left">
            <button 
              onClick={() => {
                onSelectCategory('All');
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }} 
              className="inline-block group text-left focus:outline-none"
            >
              <span className="font-serif text-2xl sm:text-3xl tracking-[0.15em] font-semibold text-[#1C1917] uppercase block leading-none">
                Gabriel
              </span>
              <span className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#C5A059] uppercase block mt-1 font-medium font-sans">
                Jewellers • Castle Hill
              </span>
            </button>
          </div>

          {/* Desktop Links */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navCategories.map((item) => {
              const isActive = item.category === activeCategory;
              return (
                <button
                  key={item.label}
                  onClick={() => handleNavClick(item)}
                  className={`text-xs uppercase tracking-[0.18em] font-medium transition-colors relative py-1 hover:text-[#C5A059] ${
                    isActive ? 'text-[#C5A059]' : 'text-[#1C1917]'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#C5A059] rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right Action Icons */}
          <div className="flex items-center space-x-2 sm:space-x-4">
            <button
              onClick={() => onScrollToSection('store-location-section')}
              className="flex items-center gap-1 text-xs uppercase tracking-wider text-[#1C1917] hover:text-[#C5A059] px-2.5 py-1.5 border border-[#E2DDD0] hover:border-[#C5A059] bg-[#F3F0E6] transition-colors"
              title="Gabriel Jewellers Castle Hill Location"
            >
              <MapPin className="w-4 h-4 text-[#C5A059]" />
              <span className="hidden md:inline font-semibold text-[11px]">Castle Hill Map</span>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-xs transition-opacity" 
            onClick={() => setMobileMenuOpen(false)} 
          />
          <div className="fixed inset-y-0 left-0 max-w-xs w-full bg-[#FAF9F5] shadow-2xl flex flex-col justify-between z-10 border-r border-[#E8E5DA]">
            <div className="p-6 overflow-y-auto">
              <div className="flex items-center justify-between pb-6 border-b border-[#E8E5DA]">
                <div>
                  <span className="font-serif text-2xl tracking-[0.15em] font-semibold text-[#1C1917] uppercase block">
                    Gabriel
                  </span>
                  <span className="text-[10px] tracking-[0.3em] text-[#C5A059] uppercase block mt-0.5">
                    Jewellers • Castle Hill
                  </span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 text-[#1C1917] hover:text-[#C5A059]"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-8 space-y-3">
                {navCategories.map((item) => (
                  <button
                    key={item.label}
                    onClick={() => handleNavClick(item)}
                    className="block w-full text-left py-2.5 text-xs uppercase tracking-[0.2em] font-medium text-[#1C1917] hover:text-[#C5A059] border-b border-[#F3F0E6] transition-colors"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div className="p-6 bg-[#F3F0E6] text-xs text-[#57534E] border-t border-[#E8E5DA] text-center space-y-2">
              <p className="font-semibold text-[#1C1917] uppercase tracking-wider flex items-center justify-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C5A059]" /> Castle Hill Store
              </p>
              <p className="text-[11px]">297 Old Northern Rd, Castle Hill NSW 2154</p>
              <p className="text-[11px] text-[#C5A059] font-medium">+61 2 9659 1110</p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
