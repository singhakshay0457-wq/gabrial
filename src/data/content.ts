import { Testimonial } from '../types';

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'test-1',
    name: 'Ananya Sharma',
    city: 'Mumbai',
    rating: 5,
    comment: 'The Celestia Solitaire ring exceeded all my expectations. The diamond clarity, gold weight, and immaculate packaging made opening it a truly magical moment.',
    purchasedItem: 'The Celestia Solitaire Diamond Ring',
    date: 'July 2026'
  },
  {
    id: 'test-2',
    name: 'Vikram & Radhika Mehta',
    city: 'New Delhi',
    rating: 5,
    comment: 'We sourced our entire bridal suite from Gabriel Jewellery. The personalized service, IGI certification transparency, and timeless aesthetics are unmatched.',
    purchasedItem: 'Bridal Suite Collection',
    date: 'June 2026'
  },
  {
    id: 'test-3',
    name: 'Rohan Kapoor',
    city: 'Bengaluru',
    rating: 5,
    comment: 'Purchased the Aurelia Tennis Bracelet for my anniversary. Delivery was incredibly swift, fully insured, and came wrapped in Gabriel’s iconic velvet keepsake chest.',
    purchasedItem: 'The Aurelia Tennis Diamond Bracelet',
    date: 'August 2026'
  }
];

export const CRAFTSMANSHIP_PILLARS = [
  {
    id: 'pillar-1',
    title: 'Premium Materials',
    description: '100% ethically sourced 18K solid gold, platinum, and conflict-free natural diamonds tested for highest brilliance.',
    icon: 'Sparkles'
  },
  {
    id: 'pillar-2',
    title: 'Expert Craftsmanship',
    description: 'Each creation requires up to 120 hours of delicate handcrafting by master goldsmiths steeped in centuries of heritage.',
    icon: 'Hammer'
  },
  {
    id: 'pillar-3',
    title: 'Certified Quality',
    description: 'Accompanied by international SGL, IGI, or GIA certificate verifying color, cut, clarity, and gold purity hallmarking.',
    icon: 'Award'
  },
  {
    id: 'pillar-4',
    title: 'Secure & Insured Packaging',
    description: 'Delivered in signature velvet-lined lockable travel boxes with 100% insured transit & discreet white-glove shipping.',
    icon: 'ShieldCheck'
  }
];

export const INSTAGRAM_POSTS = [
  {
    id: 'insta-1',
    image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80&w=800',
    likes: '2.4k',
    caption: 'Golden hours captured in 18K solid gold. #GabrielJewellery #HighJewellery'
  },
  {
    id: 'insta-2',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=800',
    likes: '3.8k',
    caption: 'The Celestia Solitaire ring in morning light. Unapologetic brilliance. #SolitaireRing'
  },
  {
    id: 'insta-3',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=800',
    likes: '1.9k',
    caption: 'Emerald greens and diamond halos fit for modern royalty. #StatementJewellery'
  },
  {
    id: 'insta-4',
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?auto=format&fit=crop&q=80&w=800',
    likes: '4.2k',
    caption: 'Graceful drops. Akoya cultured pearls paired with marquise diamonds. #GabrielAtelier'
  }
];

export const FEATURED_COLLECTIONS_DATA = [
  {
    id: 'col-1',
    title: 'Signature Collection',
    name: 'Signature Collection' as const,
    subtitle: 'Iconic silhouettes defined by quiet luxury and precision diamond settings.',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1000',
    tag: 'Flagship Masterpieces'
  },
  {
    id: 'col-2',
    title: 'Bridal Collection',
    name: 'Bridal Collection' as const,
    subtitle: 'Enduring symbols of love, heirloom engagement rings and wedding sets.',
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=1000',
    tag: 'Forever & Always'
  },
  {
    id: 'col-3',
    title: 'Everyday Luxury',
    name: 'Everyday Luxury' as const,
    subtitle: 'Refined essential gold and diamond accents crafted for effortless daily wear.',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1000',
    tag: 'Modern Essentials'
  },
  {
    id: 'col-4',
    title: 'Statement Pieces',
    name: 'Statement Pieces' as const,
    subtitle: 'Bold gemstone creations and dramatic high fine jewellery showstoppers.',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1000',
    tag: 'Exclusive Atelier'
  }
];
