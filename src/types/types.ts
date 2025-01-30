export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'nucleus' | 'queen';
  availability: string;
  genetics?: string;
  matingDate?: string;
} 