import kitchena1 from '../assets/images/kitchena1.jpg';
import kitchena2 from '../assets/images/kitchena2.jpg';
import kitchena3 from '../assets/images/kitchena3.jpg';
import kitchena4 from '../assets/images/kitchena4.jpg';
import kitchena5 from '../assets/images/kitchena5.jpg';
import beforeA1 from '../assets/images/BeforeA1.jpg';
import afterA1 from '../assets/images/AfterA1.jpg';
import bathroomA1 from '../assets/images/BathroomA1.jpg';
import bathroomA2 from '../assets/images/BathroomA2.jpg';
import bathroomA3 from '../assets/images/BathroomA3.jpg';
import gardenA1 from '../assets/images/GardenA1.jpg';
import gardenA2 from '../assets/images/GardenA2.jpg';
import gardenA3 from '../assets/images/GardenA3.jpg';
import gardenA4 from '../assets/images/GardenA4.jpg';
import pergolaA1 from '../assets/images/PergolaA1.jpg';
import pergolaA2 from '../assets/images/PergolaA2.jpg';
import pergolaA3 from '../assets/images/PergolaA3.jpg';
import pergolaA4 from '../assets/images/PergolaA4.jpg';
import vanA1 from '../assets/images/VanA1.jpg';

export interface Photo {
  image: ImageMetadata;
  alt: string;
  caption: string;
}

export interface Category {
  id: string;
  label: string;
  blurb: string;
  photos: Photo[];
}

export const van: Photo = {
  image: vanA1,
  alt: 'The O.J. Carpentry branded van, Narberth, Pembrokeshire',
  caption: 'O.J. Carpentry',
};

export const beforeAfter = {
  before: {
    image: beforeA1,
    alt: 'Dated cream kitchen with black and white tiled floor before refurbishment',
    caption: 'Before',
  } as Photo,
  after: {
    image: afterA1,
    alt: 'Sage green shaker kitchen with wood-effect worktops after a full refurbishment',
    caption: 'After',
  } as Photo,
};

export const categories: Category[] = [
  {
    id: 'kitchens',
    label: 'Kitchens',
    blurb: 'Full kitchen installations — units, quartz worktops, splashbacks and final fix.',
    photos: [
      { image: kitchena1, alt: 'Fitted grey shaker kitchen with quartz worktops, integrated double oven and breakfast bar', caption: 'Shaker kitchen — full fit' },
      { image: kitchena2, alt: 'Grey shaker kitchen with marble-effect splashback, induction hob and stainless steel extractor', caption: 'Hob run & splashback' },
      { image: kitchena3, alt: 'Shaker kitchen units with quartz worktop and brushed nickel cup handles', caption: 'Wall & base units' },
      { image: kitchena4, alt: 'Fitted kitchen wall and base units with quartz worktop and under-cabinet lighting', caption: 'Under-cabinet lighting' },
      { image: kitchena5, alt: 'Open-plan kitchen with breakfast bar seating, integrated ovens and tongue-and-groove panelling', caption: 'Breakfast bar & panelling' },
    ],
  },
  {
    id: 'bathrooms',
    label: 'Bathrooms',
    blurb: 'Bathroom refits with panelled walls, shower baths, screens and vanity units.',
    photos: [
      { image: bathroomA1, alt: 'Fitted bathroom with L-shaped shower bath, glass screen and white vanity unit', caption: 'Shower bath & vanity' },
      { image: bathroomA2, alt: 'Bathroom with electric shower over the bath and stone-effect wall panelling', caption: 'Wall panelling' },
      { image: bathroomA3, alt: 'Refitted bathroom with shower bath, vanity basin and wood-effect wall panelling', caption: 'Full bathroom refit' },
    ],
  },
  {
    id: 'gardens',
    label: 'Gardens & Decking',
    blurb: 'Composite decking, close-board fencing and sandstone patio work built to last.',
    photos: [
      { image: gardenA1, alt: 'Composite decking hot tub base with Indian sandstone patio and close-board fencing', caption: 'Decking & patio' },
      { image: gardenA2, alt: 'Grey composite decking with recessed hot tub and new timber fencing', caption: 'Composite deck' },
      { image: gardenA3, alt: 'Close-board timber fencing alongside a sandstone patio and composite decking', caption: 'Close-board fencing' },
      { image: gardenA4, alt: 'Indian sandstone patio with new feather-edge fence panels and composite deck edge', caption: 'Patio & fence panels' },
    ],
  },
  {
    id: 'pergolas',
    label: 'Pergolas',
    blurb: 'Made-to-measure timber pergolas and screen fencing for garden seating areas.',
    photos: [
      { image: pergolaA1, alt: 'Timber pergola with decorative lattice-top fencing over a garden patio', caption: 'Garden pergola' },
      { image: pergolaA2, alt: 'Freshly built timber pergola with slatted roof beams and wave-top lattice fencing', caption: 'Slatted roof beams' },
      { image: pergolaA3, alt: 'Corner garden pergola with lattice-topped screen fencing', caption: 'Corner build' },
      { image: pergolaA4, alt: 'Timber pergola and wave-top lattice fence panels enclosing a garden seating area', caption: 'Screen fencing' },
    ],
  },
];

// Curated homepage highlight reel — one standout shot per category.
export const highlights: Photo[] = [
  { image: kitchena2, alt: 'Grey shaker kitchen with marble-effect splashback and stainless steel extractor, fitted in Pembrokeshire', caption: 'Kitchen Fitting' },
  { image: afterA1, alt: 'Sage green shaker kitchen with wood-effect worktops after a full refurbishment', caption: 'Kitchen Refurb' },
  { image: pergolaA1, alt: 'Timber pergola with decorative lattice-top fencing over a garden patio', caption: 'Pergolas' },
  { image: gardenA2, alt: 'Grey composite decking with recessed hot tub and new timber fencing', caption: 'Decking & Fencing' },
  { image: bathroomA3, alt: 'Refitted bathroom with shower bath, vanity basin and wood-effect wall panelling', caption: 'Bathrooms' },
  { image: kitchena5, alt: 'Open-plan kitchen with breakfast bar seating, integrated ovens and tongue-and-groove panelling', caption: 'Joinery & Panelling' },
];

// Portrait for the About section. Left null until a real headshot of Owen exists —
// setting a Photo here restores the section's two-column image layout on its own.
export const aboutPhoto: Photo | null = null;
