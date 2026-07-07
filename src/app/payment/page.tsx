'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Script from 'next/script';
import { Button } from '@/components/ui/button';

export default function PaymentPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    mobile: '',
    project: '',
    amount: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!formData.name || !formData.email || !formData.mobile || !formData.project || !formData.amount) {
      setError('Please fill in all required fields.');
      return;
    }

    if (isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
      setError('Please enter a valid amount.');
      return;
    }

    setLoading(true);

    try {
      const orderRes = await fetch('/api/payment/create-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ amount: Number(formData.amount) }),
      });

      const orderData = await orderRes.json();

      if (!orderRes.ok) {
        if (orderData.error && orderData.error.includes('Developer message')) {
          setError(orderData.error);
        } else {
          setError(orderData.error || 'Failed to create order.');
        }
        setLoading(false);
        return;
      }

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID, 
        amount: orderData.amount, 
        currency: orderData.currency,
        name: 'Sorsvexa',
        description: `Payment for ${formData.project}`,
        order_id: orderData.id, 
        handler: async function (response: any) {
          try {
            const verifyRes = await fetch('/api/payment/verify', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_order_id: response.razorpay_order_id,
                razorpay_signature: response.razorpay_signature,
              }),
            });

            const verifyData = await verifyRes.json();

            if (verifyRes.ok) {
              const query = new URLSearchParams({
                payment_id: response.razorpay_payment_id,
                amount: formData.amount,
                date: new Date().toISOString(),
              }).toString();
              router.push(`/payment/success?${query}`);
            } else {
              router.push('/payment/failed');
            }
          } catch (err) {
            router.push('/payment/failed');
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.mobile,
        },
        theme: {
          color: '#2563EB', 
        },
      };

      const rzp = new (window as any).Razorpay(options);
      
      rzp.on('payment.failed', function (response: any) {
        router.push('/payment/failed');
      });

      rzp.open();
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center pt-32 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorations matching site style */}
      <div className="absolute inset-0 bg-aurora pointer-events-none" />
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-secondary/20 rounded-full blur-[100px] pointer-events-none" />

      <Script src="https://checkout.razorpay.com/v1/checkout.js" strategy="lazyOnload" />
      
      <div className="w-full max-w-md z-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-heading font-bold text-gradient mb-3">Make a Payment</h1>
          <p className="text-muted-foreground text-sm sm:text-base">Secure payment via Razorpay for your project.</p>
        </div>

        <form onSubmit={handlePayment} className="glass-card rounded-3xl p-6 sm:p-8 shadow-2xl flex flex-col gap-6 border border-white/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent pointer-events-none" />
          
          {error && (
            <div className="relative z-10 p-4 bg-destructive/10 border border-destructive/20 rounded-xl text-destructive text-sm">
              {error}
            </div>
          )}

          <div className="space-y-4 relative z-10">
            <div className="space-y-1.5">
              <label htmlFor="name" className="text-sm font-medium text-foreground/90 ml-1">Full Name *</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all focus:bg-black/40"
                placeholder="John Doe"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="company" className="text-sm font-medium text-foreground/90 ml-1">Company Name</label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all focus:bg-black/40"
                placeholder="Acme Inc. (Optional)"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="email" className="text-sm font-medium text-foreground/90 ml-1">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all focus:bg-black/40"
                placeholder="john@example.com"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="mobile" className="text-sm font-medium text-foreground/90 ml-1">Mobile Number *</label>
              <input
                type="tel"
                id="mobile"
                name="mobile"
                required
                value={formData.mobile}
                onChange={handleChange}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all focus:bg-black/40"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="project" className="text-sm font-medium text-foreground/90 ml-1">Project Name *</label>
              <input
                type="text"
                id="project"
                name="project"
                required
                value={formData.project}
                onChange={handleChange}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all focus:bg-black/40"
                placeholder="Website Redesign"
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="amount" className="text-sm font-medium text-foreground/90 ml-1">Amount (INR) *</label>
              <input
                type="number"
                id="amount"
                name="amount"
                required
                min="1"
                step="any"
                value={formData.amount}
                onChange={handleChange}
                className="w-full bg-black/20 border border-white/10 rounded-xl px-4 py-3 text-foreground placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all focus:bg-black/40 font-mono"
                placeholder="5000"
              />
            </div>
          </div>

          <Button 
            type="submit" 
            disabled={loading} 
            className="w-full mt-2 h-14 text-base font-semibold shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all rounded-xl relative z-10"
          >
            {loading ? 'Processing...' : 'Pay Now'}
          </Button>
        </form>
      </div>
    </div>
  );
}
