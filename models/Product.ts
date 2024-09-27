// models/Product.ts
export interface Product {
    id: string;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl: string;
    inStock: boolean;
  }
  