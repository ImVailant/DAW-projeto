import { post } from './api';

export async function subscribeToNewsletter(email: string): Promise<void> {
  try {
    // Simulate API call since we don't have a real backend yet
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real application, this would be:
    // await post('/api/newsletter/subscribe', { email });
    
    if (Math.random() > 0.1) { // 90% success rate for simulation
      return Promise.resolve();
    }
    
    throw new Error('Subscription failed');
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw new Error('Failed to subscribe to newsletter');
  }
}