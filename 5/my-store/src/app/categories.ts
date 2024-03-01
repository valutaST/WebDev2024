// categories.ts

import { Product } from './products';
import { products } from './products';


export interface Category {
  id: number;
  name: string;
  products: Product[];
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'Телефоны и гаджеты',
    products: products.slice(0, 5) // Extract first 5 products for this category
  },
  {
    id: 2,
    name: 'Бытовая техника',
    products: products.slice(5, 10) // Extract next 5 products for this category
  },
  {
    id: 3,
    name: 'Красота и здоровье',
    products: products.slice(10, 15) // Extract next 5 products for this category
  },
  {
    id: 4,
    name: 'Книги',
    products: products.slice(15, 20) // Extract last 5 products for this category
  }
];
