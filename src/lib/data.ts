import { CategorySection } from '../types/category';

export const products = [
  {
    id: "1",
    name: "Classic White T-Shirt",
    price: 29.99,
    description: "Essential cotton t-shirt in classic white",
    image_url: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    stock: 100,
    created_at: new Date().toISOString()
  },
  {
    id: "2",
    name: "Women's Denim Jeans",
    price: 79.99,
    description: "Classic blue denim jeans",
    image_url: "https://images.unsplash.com/photo-1542272604-787c3835535d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "women",
    stock: 50,
    created_at: new Date().toISOString()
  },
  {
    id: "3",
    name: "Leather Jacket",
    price: 199.99,
    description: "Premium leather jacket in black",
    image_url: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    stock: 25,
    created_at: new Date().toISOString()
  },
  {
    id: "4",
    name: "Designer Handbag",
    price: 299.99,
    description: "Luxury leather handbag",
    image_url: "https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    stock: 15,
    created_at: new Date().toISOString()
  },
  {
    id: "5",
    name: "Summer Dress",
    price: 89.99,
    description: "Floral print summer dress",
    image_url: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "women",
    stock: 30,
    created_at: new Date().toISOString()
  },
  {
    id: "6",
    name: "Classic Watch",
    price: 159.99,
    description: "Timeless design watch",
    image_url: "https://images.unsplash.com/photo-1524592094714-0f0654e20314?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    stock: 20,
    created_at: new Date().toISOString()
  },
  {
    id: "7",
    name: "Silk Blouse",
    price: 119.99,
    description: "Elegant silk blouse for any occasion",
    image_url: "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "women",
    stock: 40,
    created_at: new Date().toISOString()
  },
  {
    id: "8",
    name: "Men's Suit",
    price: 399.99,
    description: "Classic fit wool suit",
    image_url: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    stock: 20,
    created_at: new Date().toISOString()
  },
  {
    id: "9",
    name: "Designer Sunglasses",
    price: 199.99,
    description: "Premium UV protection sunglasses",
    image_url: "https://images.unsplash.com/photo-1511499767150-a48a237f0083?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    stock: 30,
    created_at: new Date().toISOString()
  },
  {
    id: "10",
    name: "Evening Gown",
    price: 299.99,
    description: "Elegant evening dress for special occasions",
    image_url: "https://images.unsplash.com/photo-1566174053879-31528523f8ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "women",
    stock: 15,
    created_at: new Date().toISOString()
  },

  {
    id: "11",
    name: "White Sneakers",
    price: 99.99,
    description: "Comfortable and stylish sneakers for everyday wear",
    image_url: "https://images.unsplash.com/photo-1600269452121-4f2416e55c28?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    stock: 60,
    created_at: new Date().toISOString()
  },
  {
    id: "12",
    name: "High-Heel Sandals",
    price: 79.99,
    description: "Chic high-heel sandals perfect for any occasion",
    image_url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "women",
    stock: 40,
    created_at: new Date().toISOString()
  },
  {
    id: "13",
    name: "Wool Scarf",
    price: 49.99,
    description: "Soft and warm wool scarf for chilly days",
    image_url: "https://images.unsplash.com/photo-1607242792481-37f27e1d74e1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    stock: 70,
    created_at: new Date().toISOString()
  },
  {
    id: "14",
    name: "Running Shorts",
    price: 34.99,
    description: "Breathable shorts designed for workouts",
    image_url: "https://images.unsplash.com/photo-1618354691792-d1d42acfd860?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    stock: 80,
    created_at: new Date().toISOString()
  },
  {
    id: "15",
    name: "Yoga Leggings",
    price: 59.99,
    description: "Comfortable and flexible leggings for yoga and exercise",
    image_url: "https://images.unsplash.com/photo-1506629082955-511b1aa562c8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "women",
    stock: 50,
    created_at: new Date().toISOString()
  },
  {
    id: "16",
    name: "Beanie Hat",
    price: 19.99,
    description: "Trendy and warm knit beanie hat",
    image_url: "https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    stock: 100,
    created_at: new Date().toISOString()
  },
  {
    id: "17",
    name: "Puffer Jacket",
    price: 129.99,
    description: "Lightweight and insulated puffer jacket",
    image_url: "https://images.unsplash.com/photo-1604025677169-6b07c4b5d3c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    stock: 25,
    created_at: new Date().toISOString()
  },
  {
    id: "18",
    name: "Cotton Pajama Set",
    price: 49.99,
    description: "Soft cotton pajama set for a comfortable night",
    image_url: "https://images.unsplash.com/photo-1613521973937-dd9a7f4dd385?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "women",
    stock: 30,
    created_at: new Date().toISOString()
  },
  {
    id: "19",
    name: "Running Shoes",
    price: 119.99,
    description: "High-performance running shoes for athletes",
    image_url: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "men",
    stock: 50,
    created_at: new Date().toISOString()
  },
  {
    id: "20",
    name: "Wide-Brim Hat",
    price: 39.99,
    description: "Stylish wide-brim hat for sunny days",
    image_url: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    category: "accessories",
    stock: 20,
    created_at: new Date().toISOString()
  }
];

export const categories: CategorySection[] = [
  
  {
    id: 'women',
    title: 'Women\'s Collection',
    description: 'Elegant and stylish clothing for the modern woman',
    imageUrl: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: 'men',
    title: 'Men\'s Collection',
    description: 'Contemporary and classic styles for every occasion',
    imageUrl: 'https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  },
  {
    id: 'accessories',
    title: 'Accessories',
    description: 'Complete your look with our premium accessories',
    imageUrl: 'https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80'
  }
  
];