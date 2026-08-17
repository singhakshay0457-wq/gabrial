import { Product } from '../types';

export const PRODUCTS: Product[] = [
  {
    id: 'gabriel-001',
    name: 'The Celestia Solitaire Diamond Ring',
    subtitle: '18K Yellow Gold & 1.5 Ct VVS1 Solitaire Diamond',
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
    metalOptions: ['18K Yellow Gold', '18K White Gold', '18K Rose Gold', 'Platinum'],
    defaultMetal: '18K Yellow Gold',
    sizes: ['5', '6', '7', '8', '9', '10'],
    description: 'The Celestia Solitaire Ring embodies pure celestial brilliance. Featuring a hand-selected 1.5-carat round brilliant cut solitaire diamond set on a polished 18K solid gold band, this ring is designed to catch light from every angle with breathtaking radiance.',
    specifications: {
      metalPurity: '18K Solid Gold (750 Hallmark)',
      diamondCarat: '1.50 Ct Natural Diamond',
      diamondClarity: 'VVS1 Clarity, E Color Excellent Cut',
      weightGrams: '4.8g',
      certification: 'SGL & IGI Individually Certified'
    },
    inStock: true,
    jewelleryCare: [
      'Store in your complimentary velvet Gabriel box away from direct light.',
      'Avoid contact with perfumes, hairsprays, and harsh household chemicals.',
      'Clean gently with a soft microfiber cloth or mild warm soap solution.'
    ]
  },
  {
    id: 'gabriel-002',
    name: 'The Sovereign Emerald Pendant Necklace',
    subtitle: 'Colombian Emerald & Halo Diamonds in 18K Yellow Gold',
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
    metalOptions: ['18K Yellow Gold', '18K White Gold', 'Platinum'],
    defaultMetal: '18K Yellow Gold',
    sizes: ['16 inches', '18 inches', '20 inches'],
    description: 'An heirloom piece of unmatched majesty. A vibrant 2.2-carat cushion-cut natural Colombian emerald surrounded by a sparkling halo of micro-pavé diamonds suspended on a delicate yet durable gold chain.',
    specifications: {
      metalPurity: '18K Yellow Gold',
      gemstone: '2.20 Ct Natural Emerald',
      diamondCarat: '0.45 Ct Total Diamond Weight',
      diamondClarity: 'VS Clarity, F-G Color',
      weightGrams: '8.2g',
      certification: 'GIA Gemological Report Included'
    },
    inStock: true,
    jewelleryCare: [
      'Emeralds require gentle care. Clean with a damp lukewarm cloth only.',
      'Do not use ultrasonic cleaners or alcohol-based solvents.',
      'Keep isolated from other jewellery to prevent surface scratches.'
    ]
  },
  {
    id: 'gabriel-003',
    name: 'The Royal Eternity Diamond Band',
    subtitle: 'Full Eternity Platinum Band with Round Cut Diamonds',
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
    metalOptions: ['Platinum', '18K White Gold', '18K Yellow Gold', '18K Rose Gold'],
    defaultMetal: 'Platinum',
    sizes: ['5', '6', '7', '8', '9'],
    description: 'Symbolizing everlasting commitment, the Royal Eternity Band features a continuous circle of brilliant round diamonds seamlessly set in pure 950 Platinum for an opulent shine.',
    specifications: {
      metalPurity: '950 Platinum',
      diamondCarat: '2.00 Ct Total Diamond Weight',
      diamondClarity: 'VVS2 Clarity, F Color',
      weightGrams: '5.6g',
      certification: 'SGL Certified'
    },
    inStock: true,
    jewelleryCare: [
      'Wipe down after wearing with a lint-free jewellery cloth.',
      'Check prong settings annually at any Gabriel atelier.'
    ]
  },
  {
    id: 'gabriel-004',
    name: 'The Pearl Cascade Drop Earrings',
    subtitle: 'Akoya Cultured Pearls & Marquise Diamonds in 18K Gold',
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
    metalOptions: ['18K Yellow Gold', '18K Rose Gold', '18K White Gold'],
    defaultMetal: '18K Yellow Gold',
    description: 'Combining timeless luster with contemporary silhouette, these drop earrings feature hand-selected AAA Akoya cultured pearls gracefully suspended from marquise-cut diamond studs.',
    specifications: {
      metalPurity: '18K Solid Gold',
      gemstone: '8.5mm AAA Grade Akoya Pearl',
      diamondCarat: '0.30 Ct Total Diamond Weight',
      weightGrams: '4.1g',
      certification: 'Gabriel Authenticity Card'
    },
    inStock: true,
    jewelleryCare: [
      'Pearls love skin oils! Wear them often.',
      'Put pearls on last after makeup, perfume, and lotion.'
    ]
  },
  {
    id: 'gabriel-005',
    name: 'The Aurelia Tennis Diamond Bracelet',
    subtitle: '3.5 Ct Diamond Tennis Bracelet in 18K White Gold',
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
    metalOptions: ['18K White Gold', '18K Yellow Gold', 'Platinum'],
    defaultMetal: '18K White Gold',
    sizes: ['6.5 inches', '7.0 inches', '7.5 inches'],
    description: 'The quintessential luxury accessory. Each round brilliant diamond is four-prong set to maximize light return, offering fluid movement and security with a dual-locking safety clasp.',
    specifications: {
      metalPurity: '18K White Gold',
      diamondCarat: '3.50 Ct Total Diamond Weight',
      diamondClarity: 'VS1 Clarity, F Color',
      weightGrams: '11.4g',
      certification: 'IGI Diamond Certificate'
    },
    inStock: true,
    jewelleryCare: [
      'Ensure safety latch is clicked closed before wearing.',
      'Store flat in original velvet box.'
    ]
  },
  {
    id: 'gabriel-006',
    name: 'The Luminary Solitaire Diamond Pendant',
    subtitle: '1.0 Ct Ideal Cut Diamond on 18K Gold Chain',
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
    metalOptions: ['18K Yellow Gold', '18K Rose Gold', '18K White Gold', 'Platinum'],
    defaultMetal: '18K Yellow Gold',
    sizes: ['16 inches', '18 inches'],
    description: 'Minimalist sophistication at its finest. A floating 1.0-carat solitaire diamond held in a bezel setting, resting gracefully at the collarbone.',
    specifications: {
      metalPurity: '18K Solid Gold',
      diamondCarat: '1.00 Ct Round Brilliant Diamond',
      diamondClarity: 'VVS2 Clarity, E Color',
      weightGrams: '3.9g',
      certification: 'SGL Diamond Certificate'
    },
    inStock: true,
    jewelleryCare: ['Clean with soft cloth provided.', 'Keep chain untangled when stored.']
  },
  {
    id: 'gabriel-007',
    name: 'The Golden Sculpted Bangle',
    subtitle: 'Solid 18K Yellow Gold Hand-Finished Cuff',
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
    metalOptions: ['18K Yellow Gold', '18K Rose Gold'],
    defaultMetal: '18K Yellow Gold',
    sizes: ['Small (2.2)', 'Medium (2.4)', 'Large (2.6)'],
    description: 'A striking statement of minimalist form. Hand-sculpted in heavy 18K solid gold with a silky interior finish that contours comfortably against the wrist.',
    specifications: {
      metalPurity: '18K Solid Gold (750 BIS Hallmark)',
      weightGrams: '16.8g',
      certification: 'BIS Hallmarked'
    },
    inStock: true,
    jewelleryCare: ['Polished gold develops a natural patina over time which adds character. Polish with microfiber cloth.']
  },
  {
    id: 'gabriel-008',
    name: 'The Diamond Constellation Hoop Earrings',
    subtitle: 'Pavé Diamond Huggie Hoops in 18K Gold',
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
    metalOptions: ['18K Yellow Gold', '18K White Gold', '18K Rose Gold'],
    defaultMetal: '18K Yellow Gold',
    description: 'Designed for effortless day-to-night glamour, these gold huggie hoops are encircled inside and out with brilliant pavé diamonds.',
    specifications: {
      metalPurity: '18K Gold',
      diamondCarat: '0.85 Ct Total Diamond Weight',
      diamondClarity: 'VS Clarity, F-G Color',
      weightGrams: '5.2g',
      certification: 'Gabriel Guarantee Certificate'
    },
    inStock: true,
    jewelleryCare: ['Snap mechanism tested for secure fit.', 'Clean with soft brush and soapy water.']
  },
  {
    id: 'gabriel-009',
    name: 'The Majestic Sapphire & Diamond Ring',
    subtitle: 'Ceylon Royal Blue Sapphire & Diamond Halo Ring',
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
    metalOptions: ['18K White Gold', 'Platinum', '18K Yellow Gold'],
    defaultMetal: '18K White Gold',
    sizes: ['6', '7', '8', '9'],
    description: 'Featuring a rare 3.1-carat unheated Royal Blue Ceylon sapphire framed by baguettes and round diamonds. A showstopping regal masterpiece.',
    specifications: {
      metalPurity: '18K White Gold',
      gemstone: '3.10 Ct Natural Ceylon Sapphire',
      diamondCarat: '0.75 Ct Diamonds',
      weightGrams: '6.9g',
      certification: 'GIA & SGL Gem Certificate'
    },
    inStock: true,
    jewelleryCare: ['Avoid extreme thermal shocks.', 'Store in protective Gabriel vault pouch.']
  },
  {
    id: 'gabriel-010',
    name: 'The Opulent Diamond Choker Necklace',
    subtitle: 'Graduated Diamond Y-Necklace in Platinum',
    category: 'Necklaces',
    collection: 'Bridal Collection',
    rating: 5.0,
    reviewCount: 9,
    images: [
      'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000',
      'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=1000'
    ],
    isFeatured: true,
    metalOptions: ['Platinum', '18K White Gold'],
    defaultMetal: 'Platinum',
    sizes: ['15 inches', '16 inches'],
    description: 'The pinnacle of high fine jewellery craftsmanship. Over 5 carats of hand-set, ethically sourced diamonds cascade down in an unforgettable silhouette designed for grand occasions.',
    specifications: {
      metalPurity: '950 Platinum',
      diamondCarat: '5.20 Ct Total Diamond Weight',
      diamondClarity: 'VVS1-VVS2 Clarity, E-F Color',
      weightGrams: '24.5g',
      certification: 'GIA Master Certificate Included'
    },
    inStock: true,
    jewelleryCare: ['Includes complimentary annual white glove cleaning & inspection.']
  }
];
