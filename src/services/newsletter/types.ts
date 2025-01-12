export interface NewsletterSubscription {
  email: string;
  subscriptionDate: Date;
}

export type SubscriptionStatus = 'idle' | 'loading' | 'success' | 'error';