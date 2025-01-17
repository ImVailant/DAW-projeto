// Define the available category types for the e-commerce platform
export type Category = 'women' | 'men' | 'accessories';

// Interface defining the structure of a category section
// Used for displaying category information in the UI
export interface CategorySection {
  // Unique identifier matching the Category type
  id: Category;
  
  // Display title for the category
  title: string;
  
  // Description text for the category
  description: string;
  
  // URL for the category's header image
  imageUrl: string;
}