import { products } from '../lib/data';
import { Product } from '../types/product';

// Get all products with error handling
export async function getProducts(): Promise<{ data: Product[] | null; error: Error | null }> {
  try {
    // In a real app, this would fetch from an API
    return { data: products, error: null };
  } catch (error) {
    console.error('Error fetching products:', error);
    return { data: null, error: error as Error };
  }
}

// Get a single product by ID
export async function getProductById(id: string): Promise<Product | null> {
  // In a real app, this would be an API call
  const product = products.find(p => p.id === id);
  if (!product) {
    return null;
  }
  return product;
}