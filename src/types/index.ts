// Product types
export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  image: string;
  images: string[];
  description: string;
  category: string;
  inStock: boolean;
  variants?: ProductVariant[];
}

export interface ProductVariant {
  id: string;
  name: string;
  value: string;
  price?: number;
}

// Cart types
export interface CartItem {
  id: string;
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  variant?: string;
}

// Category type
export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}
