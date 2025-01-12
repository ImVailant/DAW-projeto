// Interface defining the structure of a product in the e-commerce platform
export interface Product {
  // Unique identifier for the product
  id: string;
  
  // Product name/title
  name: string;
  
  // Current selling price
  price: number;
  
  // Original price, used for displaying discounts
  originalPrice?: number;
  
  // Detailed product description
  description: string;
  
  // URL to product image
  image_url: string;
  
  // Product category (men, women, accessories)
  category: string;
  
  // Available quantity in stock
  stock: number;
  
  // Timestamp when product was added
  created_at: string;
  
  // Flag for new products
  isNew?: boolean;
  
  // Available sizes for the product
  sizes?: string[];
  
  // Percentage discount if product is on sale
  discountPercentage?: number;
  
  // Date when sale ends (if applicable)
  saleEndDate?: string;
  
  // Product badges for UI display
  badges?: {
    isNew?: boolean;      // New arrival indicator
    isSale?: boolean;     // Sale item indicator
    isLimitedTime?: boolean; // Limited time offer indicator
  };
}