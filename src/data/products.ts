import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'gabriel-001',
    name: 'The Celestia Solitaire Diamond Ring',
    subtitle: 'Classic Solitaire Statement Ring',
    category: 'Rings',
    collection: 'Signature Collection',
    rating: 4.9,
    reviewCount: 38,
    images: [
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=1000'
    ],
    isBestSeller: true,
    isFeatured: true,
    description: 'The Celestia Solitaire Ring embodies celestial brilliance. Featuring a hand-selected solitaire diamond set on a polished contoured band, this iconic piece is designed to catch light from every angle with breathtaking radiance.',
    inStock: true,
    jewelleryCare: [
      'Store in your complimentary velvet Gabriel presentation box away from direct light.',
      'Avoid contact with perfumes, cosmetics, and harsh household chemicals.',
      'Clean gently with a soft microfiber cloth or mild warm water.'
    ]
  },
  {
    id: 'gabriel-002',
    name: 'The Sovereign Emerald Pendant Necklace',
    subtitle: 'Vibrant Emerald Pendant with Halo Accent',
    category: 'Necklaces',
    collection: 'Statement Pieces',
    rating: 5.0,
    reviewCount: 24,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000'
    ],
    isBestSeller: true,
    isNewArrival: true,
    isFeatured: true,
    description: 'An heirloom piece of unmatched majesty. A vibrant cushion-cut natural emerald surrounded by an exquisite halo of shimmering diamonds suspended on a delicate yet durable chain.',
    inStock: true,
    jewelleryCare: [
      'Emeralds require gentle care. Clean with a damp lukewarm cloth only.',
      'Do not use ultrasonic cleaners or alcohol-based solvents.',
      'Keep isolated from other jewellery to prevent surface abrasions.'
    ]
  },
  {
    id: 'gabriel-003',
    name: 'The Royal Eternity Diamond Band',
    subtitle: 'Continuous Full Eternity Silhouette Band',
    category: 'Rings',
    collection: 'Bridal Collection',
    rating: 4.8,
    reviewCount: 42,
    images: [
      'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000'
    ],
    isBestSeller: true,
    isFeatured: true,
    description: 'Symbolizing everlasting commitment, the Royal Eternity Band features a continuous circle of brilliant diamonds seamlessly set for an opulent and timeless shine.',
    inStock: true,
    jewelleryCare: [
      'Wipe down after wearing with a lint-free jewellery cloth.',
      'Check claw settings annually with our Castle Hill boutique jeweller.'
    ]
  },
  {
    id: 'gabriel-004',
    name: 'The Pearl Cascade Drop Earrings',
    subtitle: 'Akoya Cultured Pearl Drop Silhouette',
    category: 'Earrings',
    collection: 'Everyday Luxury',
    rating: 4.9,
    reviewCount: 19,
    images: [
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000'
    ],
    isNewArrival: true,
    isFeatured: true,
    description: 'Combining timeless luster with a contemporary silhouette, these drop earrings feature hand-selected AAA cultured pearls gracefully suspended from refined diamond accents.',
    inStock: true,
    jewelleryCare: [
      'Pearls love gentle wear. Put pearls on last after cosmetics and fragrance.',
      'Wipe with a soft damp cloth and store flat.'
    ]
  },
  {
    id: 'gabriel-005',
    name: 'The Aurelia Tennis Diamond Bracelet',
    subtitle: 'Classic Four-Prong Tennis Silhouette',
    category: 'Bracelets',
    collection: 'Signature Collection',
    rating: 5.0,
    reviewCount: 56,
    images: [
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1611591475281-8d28132de394?auto=format&fit=crop&q=80&w=1000'
    ],
    isBestSeller: true,
    isFeatured: true,
    description: 'The quintessential luxury accessory. Each round brilliant diamond is individually set to maximize light return, offering fluid movement and security with a dual-locking safety clasp.',
    inStock: true,
    jewelleryCare: [
      'Ensure safety latch is clicked closed before wearing.',
      'Store flat in original Gabriel presentation case.'
    ]
  },
  {
    id: 'gabriel-006',
    name: 'The Luminary Solitaire Diamond Pendant',
    subtitle: 'Solitaire Floating Pendant Design',
    category: 'Necklaces',
    collection: 'Everyday Luxury',
    rating: 4.8,
    reviewCount: 31,
    images: [
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000'
    ],
    isBestSeller: false,
    isNewArrival: true,
    isFeatured: false,
    description: 'Minimalist sophistication at its finest. A floating solitaire diamond held in a modern bezel setting, resting gracefully at the collarbone.',
    inStock: true,
    jewelleryCare: ['Clean with soft cloth provided.', 'Keep chain untangled when stored in pouch.']
  },
  {
    id: 'gabriel-007',
    name: 'The Golden Sculpted Bangle',
    subtitle: 'Hand-Sculpted Contoured Cuff',
    category: 'Bracelets',
    collection: 'Everyday Luxury',
    rating: 4.7,
    reviewCount: 22,
    images: [
      'https://images.unsplash.com/photo-1611591475281-8d28132de394?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1573408301185-9146fe634ad0?auto=format&fit=crop&q=80&w=1000'
    ],
    isNewArrival: false,
    isFeatured: false,
    description: 'A striking statement of sculptural form. Hand-shaped with a silky interior finish that contours comfortably against the wrist for effortless everyday wear.',
    inStock: true,
    jewelleryCare: ['Polish periodically with the provided microfiber polishing cloth to preserve lustrous shine.']
  },
  {
    id: 'gabriel-008',
    name: 'The Diamond Constellation Hoop Earrings',
    subtitle: 'Pavé Huggie Hoops Silhouette',
    category: 'Earrings',
    collection: 'Signature Collection',
    rating: 4.9,
    reviewCount: 47,
    images: [
      'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=1000'
    ],
    isBestSeller: true,
    isFeatured: false,
    description: 'Designed for effortless day-to-night glamour, these refined huggie hoops are encircled inside and out with brilliant pavé diamonds.',
    inStock: true,
    jewelleryCare: ['Snap mechanism tested for secure fit.', 'Clean with soft brush and warm water.']
  },
  {
    id: 'gabriel-009',
    name: 'The Majestic Sapphire & Diamond Ring',
    subtitle: 'Royal Blue Sapphire & Diamond Halo Design',
    category: 'Rings',
    collection: 'Statement Pieces',
    rating: 5.0,
    reviewCount: 15,
    images: [
      'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000'
    ],
    isNewArrival: true,
    isFeatured: false,
    description: 'Featuring a rare royal blue sapphire framed by baguettes and round brilliant diamonds. A showstopping regal masterpiece created for gala occasions.',
    inStock: true,
    jewelleryCare: ['Avoid extreme thermal shocks.', 'Store in protective Gabriel vault pouch.']
  },
  {
    id: 'gabriel-010',
    name: 'The Opulent Diamond Choker Necklace',
    subtitle: 'Graduated Diamond Y-Necklace Design',
    category: 'Necklaces',
    collection: 'Bridal Collection',
    rating: 5.0,
    reviewCount: 9,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000'
    ],
    isFeatured: true,
    description: 'The pinnacle of high fine jewellery artistry. Hand-set diamonds cascade down in an unforgettable silhouette designed for grand occasions.',
    inStock: true,
    jewelleryCare: ['Includes complimentary annual white glove inspection at our Castle Hill workshop.']
  }
];
