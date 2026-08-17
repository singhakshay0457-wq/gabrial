export interface CustomDesignItem {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string;
  image: string;
  tag: string;
  highlights: string[];
}

export const ATELIER_CUSTOM_DESIGNS: CustomDesignItem[] = [
  {
    id: 'bespoke-001',
    title: 'The Oval Sapphire & Multi-Gemstone Halo Ring',
    category: 'Atelier Ring',
    tag: 'Signature Atelier Piece',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200',
    description: 'A striking oval light-blue sapphire surrounded by a halo bezel, flanked by channel-set multi-colored sapphires along the band.',
    details: 'Handcrafted order featuring an unheated center blue sapphire, double-bezel setting, and rainbow channel accents.',
    highlights: [
      'Individually sculpted double-bezel silhouette',
      'Harmonious rainbow channel accents',
      'Artisan crafted for Castle Hill patron'
    ]
  },
  {
    id: 'bespoke-002',
    title: 'The Full Pavé Sphere Pendant Chain',
    category: 'Fine Neckwear',
    tag: 'Master Goldsmithing',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200',
    description: 'An architectural 3D dome pendant completely encrusted with micro-pavé diamonds, suspended on an intricate hand-engraved rope chain.',
    details: 'Statement pendant featuring over 300 individual hand-set stones on a filigree casing.',
    highlights: [
      'Architectural spherical 3D dome form',
      'Hand-worked filigree engraving',
      'Over 140 hours of precision hand-setting'
    ]
  },
  {
    id: 'bespoke-003',
    title: 'The Swirl Bezel Diamond & Pink Sapphire Ring',
    category: 'Fine Jewellery',
    tag: 'Unique Atelier Creation',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=1200',
    description: 'An avant-garde swirling bezel setting cradling a brilliant center stone, accented with teardrop pods and an Australian pink sapphire.',
    details: 'Fluid kinetic-inspired design with a ribbon motif encasing the center solitaire.',
    highlights: [
      'Dynamic fluid ribbon motif',
      'Asymmetric contemporary bezel',
      'Custom bespoke commission'
    ]
  },
  {
    id: 'bespoke-004',
    title: 'The Pear Halo Solitaire with Channel Band',
    category: 'Fine Bridal',
    tag: 'Signature Solitaire',
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=1200',
    description: 'An elegant pear-cut diamond in a halo setting, paired with a tapered micro-pavé band for breathtaking reflection.',
    details: 'Engineered for light performance with an elevated gallery that fits flush against pairing bands.',
    highlights: [
      'Elevated light gallery setting',
      'Tapered micro-pavé shank',
      'Master stone-setter alignment'
    ]
  },
  {
    id: 'bespoke-005',
    title: 'The Master Jeweller Workbench & Restoration Atelier',
    category: 'Master Craftsmanship',
    tag: 'Gabriel Workbench',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200',
    description: 'Where imagination becomes reality. Our Castle Hill in-house master jeweller bench equipped for fine design, stone resetting, precision laser soldering, and expert repairs.',
    details: 'Direct consultation with our on-site master jewellers for design, resizing, stone resetting, and heirloom remodeling.',
    highlights: [
      'Handcrafted design & 3D wax modeling',
      'Vintage fine jewellery renewal & rebuilding',
      'On-site Castle Hill boutique workbench'
    ]
  }
];
