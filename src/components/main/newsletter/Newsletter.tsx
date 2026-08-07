'use client';

import Image from 'next/image';
import React, { useState } from 'react';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (error) setError(null);
    if (success) setSuccess(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_ROUT_URL || ''}/newsletters`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      const data = await response.json().catch(() => ({}));
      if (response.ok) {
        setSuccess(true);
        setEmail('');
      } else {
        setError(data.error || 'Failed to subscribe. Please try again later.');
      }
    } catch {
      setError('Network error. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-gradient-primary relative w-full rounded-lg px-6 py-10 lg:px-28 lg:py-16">
      <div className="mb-4 flex justify-center lg:absolute lg:-top-16 lg:left-16 lg:mb-0 lg:block">
        <Image
          src={'/logo/offcarry.svg'}
          width={120}
          height={120}
          alt="Notification Bell"
          className="h-auto w-20 lg:w-32"
        />
      </div>

      <div className="flex flex-col justify-between text-center lg:flex-row lg:text-left xl:pl-32">
        <h2 className="mb-2 text-2xl font-semibold text-white sm:text-3xl lg:mb-4 lg:text-4xl lg:leading-[50px]">
          Let’s Join Us <br className="hidden lg:block" /> Today
        </h2>

        <div className="flex flex-col items-center gap-2 lg:items-start">
          <p className="font-medium text-[#DDE2E5] lg:text-lg">We don’t send spam so don’t worry</p>

          <form
            onSubmit={handleSubmit}
            className="mt-4 flex w-full flex-col sm:max-w-[80%] sm:flex-row lg:mt-0 lg:max-w-full"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full rounded-md px-4 py-3 text-black placeholder-[#ACB5BD] focus:outline-none sm:rounded-r-none lg:w-80"
              value={email}
              onChange={handleChange}
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading}
              className="bg-primary hover:bg-secondary mt-2 rounded-md px-6 py-3 font-semibold text-white transition duration-300 disabled:opacity-50 sm:mt-0 sm:rounded-l-none sm:rounded-r-md"
            >
              {loading ? 'Subscribing...' : 'Subscribe'}
            </button>
          </form>

          {error && <p className="mt-2 text-sm font-medium text-red-300">{error}</p>}
          {success && (
            <p className="mt-2 text-sm font-medium text-emerald-300">
              🎉 Thank you for subscribing to our newsletter!
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
