export type FragranceFamily = 
  | 'Woody & Oud'
  | 'Oriental & Amber'
  | 'Fresh & Citrus'
  | 'Floral Oriental'
  | 'Chypre & Smoky'
  | 'Aromatic Fougere'
  | 'Musk & Powder';

export interface FragranceNote {
  name: string;
  category?: 'citrus' | 'floral' | 'woody' | 'spicy' | 'amber' | 'musk' | 'sweet';
}

export interface ProductVariant {
  size: '50ml' | '100ml';
  pricePKR: number;
  compareAtPKR?: number;
  sku: string;
}

export interface Product {
  id: string;
  name: string;
  arabicName?: string;
  slug: string;
  tagline: string;
  fragranceFamily: FragranceFamily;
  shortDescription: string;
  description: string;
  scentCharacter: string;
  bestFor: string[];
  longevity: string;
  projection: string;
  topNotes: string[];
  heartNotes: string[];
  baseNotes: string[];
  variants: ProductVariant[];
  defaultSize: '50ml' | '100ml';
  image: string;
  gallery: string[];
  rating: number;
  reviewsCount: number;
  isBestSeller?: boolean;
  isFeatured?: boolean;
  isNew?: boolean;
  inStock: boolean;
  accentColor?: string;
  collectionId: string;
  impressionNote?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  size: '50ml' | '100ml';
  pricePKR: number;
  quantity: number;
}

export type CurrencyCode = 'PKR' | 'USD' | 'AED';

export interface CurrencyConfig {
  code: CurrencyCode;
  symbol: string;
  rate: number;
  label: string;
}

export interface Collection {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  badge: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  productName: string;
  title: string;
  comment: string;
  verifiedBuyer: boolean;
}

export interface OrderItem {
  productId: string;
  productName: string;
  size: '50ml' | '100ml';
  price: number;
  quantity: number;
  image: string;
}

export interface OrderRecord {
  id: string; // e.g. BIF-970531
  date: string;
  customerName: string;
  phone: string;
  email?: string;
  city: string;
  address: string;
  notes?: string;
  items: OrderItem[];
  subtotal: number;
  shipping: number;
  total: number;
  paymentMethod: 'cod' | 'whatsapp' | 'card';
  status: 'Pending' | 'Confirmed' | 'Dispatched' | 'Delivered' | 'Cancelled';
}
