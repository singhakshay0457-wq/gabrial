export type CategoryType = 'Rings' | 'Necklaces' | 'Earrings' | 'Bracelets';

export type CollectionType = 'Signature Collection' | 'Bridal Collection' | 'Everyday Luxury' | 'Statement Pieces';

export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  category: CategoryType;
  collection: CollectionType;
  rating: number;
  reviewCount: number;
  images: string[];
  isNewArrival?: boolean;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  description: string;
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
  onlyBestSellers?: boolean;
  onlyNewArrivals?: boolean;
}

export type SortOption = 'featured' | 'rating' | 'newest';

