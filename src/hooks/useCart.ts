import { create } from 'zustand';
import { Product } from '../types/product';

// Extend Product type to include quantity for cart items
interface CartItem extends Product {
  quantity: number;
}

// Define the structure of the cart store
interface CartStore {
  // Array of items in the cart
  items: CartItem[];
  
  // Add a product to the cart
  addItem: (product: Product) => void;
  
  // Remove a product from the cart
  removeItem: (productId: string) => void;
  
  // Clear all items from the cart
  clearCart: () => void;
}

// Create a Zustand store for managing cart state
export const useCart = create<CartStore>((set) => ({
  items: [],
  
  // Add item to cart or increment quantity if it exists
  addItem: (product) => 
    set((state) => {
      const existingItem = state.items.find(item => item.id === product.id);
      
      if (existingItem) {
        return {
          items: state.items.map(item =>
            item.id === product.id 
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        };
      }
      
      return { 
        items: [...state.items, { ...product, quantity: 1 }]
      };
    }),
  
  // Remove item from cart
  removeItem: (productId) =>
    set((state) => ({
      items: state.items.filter(item => item.id !== productId)
    })),
  
  // Clear all items from cart
  clearCart: () => set({ items: [] })
}));