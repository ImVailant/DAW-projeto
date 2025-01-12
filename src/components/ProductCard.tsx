import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../hooks/useCart';
import { Product } from '../types/product';

// Props interface for ProductCard component
interface ProductCardProps extends Product {}

// Component for displaying individual product cards
export function ProductCard({ 
  id, 
  name, 
  price, 
  originalPrice,
  image_url, 
  description 
}: ProductCardProps) {
  // Hook for cart operations
  const { addItem } = useCart();

  // Handle adding item to cart
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation when clicking add to cart
    addItem({
      id,
      name,
      price,
      image_url,
      description,
      category: '',
      stock: 1,
      created_at: new Date().toISOString()
    });
  };

  return (
    <Link to={`/product/${id}`} className="block group">
      <div className="bg-white rounded-lg shadow-md overflow-hidden relative">
        {/* Product Image */}
        <div className="aspect-square overflow-hidden">
          <img 
            src={image_url} 
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            onError={(e) => {
              // Fallback image if the original fails to load
              const img = e.target as HTMLImageElement;
              img.src = 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=800&q=80';
            }}
          />
        </div>

        {/* Product Details */}
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{name}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          
          {/* Price and Add to Cart */}
          <div className="flex justify-between items-center">
            <div className="flex flex-col">
              <span className="text-xl font-bold">${price.toFixed(2)}</span>
              {originalPrice && (
                <span className="text-sm text-gray-500 line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>
            <button 
              onClick={handleAddToCart}
              className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}