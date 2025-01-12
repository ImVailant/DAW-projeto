import React, { useState } from 'react';
import { subscribeToNewsletter } from '../../services/newsletter';
import { NewsletterForm } from './NewsletterForm';
import type { SubscriptionStatus } from '../../services/newsletter/types';

export function Newsletter() {
  const [status, setStatus] = useState<SubscriptionStatus>('idle');
  const [message, setMessage] = useState('');

  const handleSubmit = async (email: string) => {
    setStatus('loading');

    try {
      await subscribeToNewsletter(email);
      setStatus('success');
      setMessage('Thank you for subscribing! Check your email for confirmation.');
    } catch (error) {
      setStatus('error');
      setMessage('Something went wrong. Please try again.');
    }
  };

  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
        <p className="mb-8 text-gray-300 max-w-2xl mx-auto">
          Subscribe to receive updates about new collections, special offers, and styling tips.
        </p>
        <NewsletterForm 
          onSubmit={handleSubmit}
          status={status}
          message={message}
        />
      </div>
    </section>
  );
}