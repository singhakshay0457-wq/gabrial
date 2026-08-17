export interface CustomDesignItem {
  id: string;
  title: string;
  category: string;
  description: string;
  details: string;
  image: string;
  tag: string;
  specifications: string[];
}

export const ATELIER_CUSTOM_DESIGNS: CustomDesignItem[] = [
  {
    id: 'bespoke-001',
    title: 'The Oval Sapphire & Multi-Gemstone Halo Ring',
    category: 'Atelier Ring',
    tag: 'Signature Atelier Piece',
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?auto=format&fit=crop&q=80&w=1200',
    description: 'A striking oval light-blue sapphire surrounded by a brilliant diamond halo bezel, flanked by channel-set multi-colored sapphires along the 18K gold band.',
    details: 'Handcrafted order featuring an unheated center blue sapphire, double-bezel setting, and rainbow channel accents.',
    specifications: [
      'Center Stone: 2.45 Ct Oval Light Blue Sapphire',
      'Halo: 0.35 Ct Round Brilliant Diamonds',
      'Band Accents: Princess-cut Pink, Orange & Blue Sapphires',
      'Metal: 18K Yellow Gold & White Gold Bezel'
    ]
  },
  {
    id: 'bespoke-002',
    title: 'The Full Pavé Diamond Sphere Pendant Chain',
    category: 'Fine Neckwear',
    tag: 'Master Goldsmithing',
    image: 'https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80&w=1200',
    description: 'An architectural 3D dome pendant completely encrusted with micro-pavé diamonds, suspended on an intricate hand-engraved 18K rose gold rope chain.',
    details: 'Statement pendant featuring over 300 individual hand-set brilliant diamonds on a hand-worked filigree rose gold casing.',
    specifications: [
      'Total Diamond Weight: 4.80 Ct Micro-Pavé',
      'Chain: 18K Rose Gold Hand-Twisted Link',
      'Crafting Time: 140 Hours of Master Setting',
      'Finish: Hand-Engraved Scrollwork Base'
    ]
  },
  {
    id: 'bespoke-003',
    title: 'The Swirl Bezel Diamond & Pink Sapphire Ring',
    category: 'Engagement Ring',
    tag: 'Unique Atelier Creation',
    image: 'https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80&w=1200',
    description: 'An avant-garde swirling 18K yellow and white gold bezel setting cradling a round brilliant solitaire, accented with teardrop diamond pods and a rare Argyle pink sapphire.',
    details: 'Fluid kinetic-inspired design with a dual-tone gold ribbon motif encasing the center solitaire.',
    specifications: [
      'Center Diamond: 1.20 Ct Round Brilliant Cut',
      'Accent Stone: 0.12 Ct Australian Natural Pink Sapphire',
      'Design Motif: Sculptural Kinetic Swirl',
      'Metal: Two-Tone 18K Gold & Platinum'
    ]
  },
  {
    id: 'bespoke-004',
    title: 'The Pear Diamond Halo Solitaire with Channel Band',
    category: 'Fine Bridal',
    tag: 'Signature Solitaire',
    image: 'https://images.unsplash.com/photo-1598560917505-59a3ad559071?auto=format&fit=crop&q=80&w=1200',
    description: 'An elegant pear-cut natural diamond in a platinum halo setting, paired with a tapered micro-pavé diamond band for breathtaking reflection.',
    details: 'Engineered for maximum light performance with an elevated gallery that fits flush against wedding bands.',
    specifications: [
      'Center Stone: 1.85 Ct Pear Cut Diamond (VVS1, E Color)',
      'Setting: Platinum Micro-Prong Bezel Halo',
      'Band: Tapered Pavé Diamond Shank',
      'Certification: GIA Individual Diamond Dossier'
    ]
  },
  {
    id: 'bespoke-005',
    title: 'The Master Jeweller Workbench & Restoration Atelier',
    category: 'Master Craftsmanship',
    tag: 'Gabriel Workbench',
    image: 'https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?auto=format&fit=crop&q=80&w=1200',
    description: 'Where imagination becomes reality. Our Castle Hill in-house master jeweller bench equipped for fine design, stone resetting, precision laser soldering, and expert repairs.',
    details: 'Direct consultation with our on-site master jewellers for design, ring resizing, gemstone resetting, and heirloom remodeling.',
    specifications: [
      'Services: Handcrafted CAD Design, 3D Wax Printing, Hand Setting',
      'Restoration: Vintage Fine Jewellery Renewal & Rebuilding',
      'Location: Castle Hill Boutique Workbench',
      'Turnaround: On-site Consultations & Express Atelier Service'
    ]
  }
];
