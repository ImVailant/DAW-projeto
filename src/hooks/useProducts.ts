import { useEffect, useState } from 'react';
import { Product } from '../types/product';
import { getProducts } from '../services/products';

// Custom hook for managing products data and loading state
export function useProducts() {
  // State for products, loading status, and errors
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch products on component mount
  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await getProducts();
      if (error) {
        setError(error.message);
      } else {
        setProducts(data || []);
      }
      setLoading(false);
    }

    fetchProducts();
  }, []);

  return { products, loading, error };
}