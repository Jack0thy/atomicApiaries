import { Product } from '../types/types';

export const products: Product[] = [
  {
    id: 'cell-1',
    name: 'Queen Cell',
    description: 'Premium queen cells from selected breeder queens.',
    price: 8.00,
    image: '/images/queen-cells.jpg',
    category: 'cell',
    availability: 'May - August',
  },
  {
    id: 'queen-1',
    name: 'Mated Queen',
    description: 'Marked and tested queen from our selective breeding program.',
    price: 45.00,
    image: '/images/italian-queen.jpg',
    category: 'queen',
    availability: 'March - September',
  },
  {
    id: 'nuc-1',
    name: 'Nucleus Colony',
    description: 'Strong 5-frame nucleus colony with locally adapted genetics.',
    price: 185.00,
    image: '/images/nucleus-colony.jpg',
    category: 'nucleus',
    availability: 'April - June',
  },
]; 