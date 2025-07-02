
export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  category: 'maillots' | 'crampons' | 'accessoires';
  brand: string;
  team?: string;
  sizes?: string[];
  description: string;
  features: string[];
  inStock: boolean;
  isNew?: boolean;
  isPromo?: boolean;
  rating: number;
  reviews: number;
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Maillot Paris Saint-Germain Domicile 2024',
    price: 89.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
    images: [
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400',
      'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?w=400'
    ],
    category: 'maillots',
    brand: 'Nike',
    team: 'PSG',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Maillot officiel du Paris Saint-Germain pour la saison 2024. Technologie Dri-FIT pour évacuer la transpiration.',
    features: ['Technologie Dri-FIT', '100% Polyester recyclé', 'Coupe athlétique', 'Écusson brodé'],
    inStock: true,
    isNew: true,
    isPromo: true,
    rating: 4.8,
    reviews: 156
  },
  {
    id: '2',
    name: 'Crampons Nike Mercurial Vapor 15',
    price: 249.99,
    image: 'https://images.unsplash.com/photo-1544966503-7cc36d4c2d8b?w=400',
    images: [
      'https://images.unsplash.com/photo-1544966503-7cc36d4c2d8b?w=400',
      'https://images.unsplash.com/photo-1556906781-9a412961c28c?w=400'
    ],
    category: 'crampons',
    brand: 'Nike',
    sizes: ['39', '40', '41', '42', '43', '44', '45', '46'],
    description: 'Crampons de football haute performance pour terrains naturels. Vitesse et agilité maximales.',
    features: ['Semelle FG', 'Tige en mesh', 'Technologie ACC', 'Poids réduit'],
    inStock: true,
    isNew: true,
    rating: 4.6,
    reviews: 89
  },
  {
    id: '3',
    name: 'Maillot Manchester United Domicile',
    price: 79.99,
    image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400',
    images: [
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400',
      'https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=400'
    ],
    category: 'maillots',
    brand: 'Adidas',
    team: 'Manchester United',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Maillot officiel de Manchester United. Design iconique rouge avec détails dorés.',
    features: ['Technologie AEROREADY', 'Coupe standard', 'Logo brodé', 'Matière recyclée'],
    inStock: true,
    rating: 4.7,
    reviews: 203
  },
  {
    id: '4',
    name: 'Crampons Adidas Predator Edge',
    price: 199.99,
    image: 'https://images.unsplash.com/photo-1574624358146-8b8f8c175b3f?w=400',
    images: [
      'https://images.unsplash.com/photo-1574624358146-8b8f8c175b3f?w=400',
      'https://images.unsplash.com/photo-1544966503-7cc36d4c2d8b?w=400'
    ],
    category: 'crampons',
    brand: 'Adidas',
    sizes: ['39', '40', '41', '42', '43', '44', '45'],
    description: 'Crampons Predator pour un contrôle de balle exceptionnel. Parfait pour les passes et tirs précis.',
    features: ['Zone de frappe PREDATOR', 'Tige Primeknit', 'Semelle Controlframe', 'Crampons coniques'],
    inStock: true,
    rating: 4.5,
    reviews: 67
  },
  {
    id: '5',
    name: 'Gants de Gardien Nike Vapor Grip',
    price: 49.99,
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400',
    images: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400'
    ],
    category: 'accessoires',
    brand: 'Nike',
    sizes: ['7', '8', '9', '10', '11'],
    description: 'Gants de gardien de but professionnels avec excellente adhérence par tous les temps.',
    features: ['Paume en latex', 'Protection des doigts', 'Fermeture ajustable', 'Résistant à l\'usure'],
    inStock: true,
    rating: 4.4,
    reviews: 34
  },
  {
    id: '6',
    name: 'Maillot FC Barcelona Domicile',
    price: 89.99,
    originalPrice: 99.99,
    image: 'https://images.unsplash.com/photo-1575517113308-0fa36b6cd4bb?w=400',
    images: [
      'https://images.unsplash.com/photo-1575517113308-0fa36b6cd4bb?w=400',
      'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400'
    ],
    category: 'maillots',
    brand: 'Nike',
    team: 'FC Barcelona',
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    description: 'Maillot officiel du FC Barcelona. Les couleurs légendaires blaugrana.',
    features: ['Technologie Dri-FIT', 'Design authentique', 'Écusson tissé', 'Coupe sportive'],
    inStock: true,
    isPromo: true,
    rating: 4.9,
    reviews: 287
  }
];

export const getProductsByCategory = (category?: string) => {
  if (!category) return products;
  return products.filter(product => product.category === category);
};

export const getProductById = (id: string) => {
  return products.find(product => product.id === id);
};

export const getFeaturedProducts = () => {
  return products.filter(product => product.isNew || product.isPromo).slice(0, 4);
};

export const getNewArrivals = () => {
  return products.filter(product => product.isNew).slice(0, 4);
};

export const getPromotions = () => {
  return products.filter(product => product.isPromo).slice(0, 4);
};
