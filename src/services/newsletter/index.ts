import { sendNewsletterConfirmation } from '../email';
import type { NewsletterSubscription } from './types';

export async function subscribeToNewsletter(email: string): Promise<void> {
  try {
    const subscription: NewsletterSubscription = {
      email,
      subscriptionDate: new Date()
    };

    // Send confirmation email
    await sendNewsletterConfirmation(email);
    
    return Promise.resolve();
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    throw new Error('Failed to subscribe to newsletter');
  }
}