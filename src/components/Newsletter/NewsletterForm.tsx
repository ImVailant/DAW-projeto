import React, { useState } from 'react';
import type { SubscriptionStatus } from '../../services/newsletter/types';

interface NewsletterFormProps {
  onSubmit: (email: string) => Promise<void>;
  status: SubscriptionStatus;
  message: string;
}

export function NewsletterForm({ onSubmit, status, message }: NewsletterFormProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await onSubmit(email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto">
      <div className="flex gap-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="flex-1 px-4 py-2 text-black"
          required
        />
        <button
          type="submit"
          disabled={status === 'loading'}
          className="bg-white text-black px-6 py-2 font-medium hover:bg-gray-100 transition-colors disabled:opacity-50"
        >
          {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
        </button>
      </div>
      {message && (
        <p className={`mt-4 text-sm ${status === 'error' ? 'text-red-400' : 'text-green-400'}`}>
          {message}
        </p>
      )}
    </form>
  );
}