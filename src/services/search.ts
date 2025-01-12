import { products } from '../lib/data';
import { Product } from '../types/product';

// Search products based on query string
export async function searchProducts(query: string): Promise<Product[]> {
  // Simulate API delay for realistic behavior
  await new Promise(resolve => setTimeout(resolve, 500));
  
  // Normalize query for case-insensitive search
  const normalizedQuery = query.toLowerCase().trim();
  
  // Filter products based on name and description match
  return products.filter(product => 
    product.name.toLowerCase().includes(normalizedQuery) ||
    product.description.toLowerCase().includes(normalizedQuery)
  );
}