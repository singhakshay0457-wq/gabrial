export type CategoryType = 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets';

export type CollectionType = 'Signature Collection' | 'Bridal Collection' | 'Everyday Luxury' | 'Statement Pieces';

export type MetalType = '18K Yellow Gold' | '18K White Gold' | '18K Rose Gold' | 'Platinum' | 'Sterling Silver';

export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  category: CategoryType;
  collection: CollectionType;
  price?: number;
  mrp?: number;
  rating: number;
  reviewCount: number;
  images: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  metalOptions: MetalType[];
  defaultMetal: MetalType;
  sizes?: string[]; // e.g. ["6", "7", "8", "9", "10"] for rings or length in inches
  description: string;
  specifications: {
    metalPurity: string;
    diamondCarat?: string;
    diamondClarity?: string;
    gemstone?: string;
    weightGrams?: string;
    certification?: string;
  };
  inStock: boolean;
  jewelleryCare: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  city: string;
  rating: number;
  comment: string;
  purchasedItem: string;
  date: string;
}

export interface FilterOptions {
  category: string; // 'All' or specific category
  collection: string; // 'All' or specific collection
  metal: string; // 'All' or specific metal
  onlyBestSellers?: boolean;
  onlyNewArrivals?: boolean;
  searchQuery?: string;
}

export type SortOption = 'featured' | 'rating' | 'newest';
