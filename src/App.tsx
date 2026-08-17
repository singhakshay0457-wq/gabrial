import React, { useState, useEffect } from 'react';
import { Product, CategoryType, CollectionType } from './types';
import { PRODUCTS } from './data/products';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StoreLocation } from './components/StoreLocation';
import { CustomCollageGallery } from './components/CustomCollageGallery';
import { Footer } from './components/Footer';

// Modals & Drawers
import { ProductDetailModal } from './components/ProductDetailModal';
import { WishlistDrawer } from './components/WishlistDrawer';
import { AccountModal } from './components/AccountModal';
import { SizeGuideModal } from './components/SizeGuideModal';

export default function App() {
  // Navigation & Category States
  const [activeCategory, setActiveCategory] = useState<CategoryType | 'All'>('All');
  const [activeCollection, setActiveCollection] = useState<CollectionType | 'All'>('All');

  // Saved Wishlist State
  const [wishlistIds, setWishlistIds] = useState<string[]>(() => {
    try {
      const saved = localStorage.getItem('gabriel_wishlist');
      return saved ? JSON.parse(saved) : ['gabriel-001', 'gabriel-005'];
    } catch (e) {
      return ['gabriel-001', 'gabriel-005'];
    }
  });

  // Modals visibility
  const [isWishlistOpen, setIsWishlistOpen] = useState(false);
  const [isAccountOpen, setIsAccountOpen] = useState(false);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState(false);
  const [sizeGuideCategory, setSizeGuideCategory] = useState<string>('Rings');

  // Selected Product for PDP Showcase View
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  // Sync to LocalStorage
  useEffect(() => {
    try {
      localStorage.setItem('gabriel_wishlist', JSON.stringify(wishlistIds));
    } catch (e) {}
  }, [wishlistIds]);

  // Smooth Scroll Helper
  const scrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Wishlist Operations
  const handleToggleWishlist = (product: Product) => {
    setWishlistIds((prev) =>
      prev.includes(product.id) ? prev.filter((id) => id !== product.id) : [...prev, product.id]
    );
  };

  const wishlistProducts = PRODUCTS.filter((p) => wishlistIds.includes(p.id));

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-[#1C1917] flex flex-col font-sans selection:bg-[#C5A059] selection:text-white">
      
      {/* 1. Top Announcement Bar */}
      <AnnouncementBar />

      {/* 2. Navigation Header */}
      <Navbar
        wishlistCount={wishlistIds.length}
        onOpenWishlist={() => setIsWishlistOpen(true)}
        onOpenAccount={() => setIsAccountOpen(true)}
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setActiveCollection('All');
        }}
        onSelectCollection={(col) => {
          setActiveCollection(col);
          setActiveCategory('All');
        }}
        onScrollToSection={scrollToSection}
        activeCategory={activeCategory}
      />

      {/* Main Page Layout */}
      <main className="flex-grow">
        
        {/* 3. Hero Section */}
        <Hero
          onShopClick={() => {
            setActiveCategory('All');
            setActiveCollection('All');
            scrollToSection('store-location-section');
          }}
          onStoreLocationClick={() => {
            scrollToSection('store-location-section');
          }}
        />

        {/* 8. Interactive Store Location & Google Map Section */}
        <StoreLocation />

        {/* Custom Atelier Collage Gallery Showcase */}
        <CustomCollageGallery />

      </main>

      {/* 14. Footer */}
      <Footer
        onSelectCategory={(cat) => {
          setActiveCategory(cat);
          setActiveCollection('All');
        }}
        onScrollToSection={scrollToSection}
      />

      {/* ------------ MODALS & DRAWERS ------------ */}

      {/* Full Product Showcase Detail Modal */}
      <ProductDetailModal
        product={selectedProduct}
        allProducts={PRODUCTS}
        isOpen={Boolean(selectedProduct)}
        isInWishlist={selectedProduct ? wishlistIds.includes(selectedProduct.id) : false}
        onClose={() => setSelectedProduct(null)}
        onToggleWishlist={handleToggleWishlist}
        onOpenSizeGuide={(cat) => {
          setSizeGuideCategory(cat);
          setIsSizeGuideOpen(true);
        }}
        onSelectProduct={(p) => setSelectedProduct(p)}
        onQuickView={(p) => setSelectedProduct(p)}
        wishlistIds={wishlistIds}
      />

      {/* Saved Wishlist Drawer */}
      <WishlistDrawer
        isOpen={isWishlistOpen}
        onClose={() => setIsWishlistOpen(false)}
        wishlistProducts={wishlistProducts}
        onRemoveFromWishlist={handleToggleWishlist}
        onMoveToCart={(product) => {
          setSelectedProduct(product);
          setIsWishlistOpen(false);
        }}
        onSelectProduct={(p) => setSelectedProduct(p)}
      />

      {/* Patron Suite / Consultations Modal */}
      <AccountModal
        isOpen={isAccountOpen}
        onClose={() => setIsAccountOpen(false)}
      />

      {/* Size Guide Modal */}
      <SizeGuideModal
        isOpen={isSizeGuideOpen}
        onClose={() => setIsSizeGuideOpen(false)}
        category={sizeGuideCategory}
      />

    </div>
  );
}
