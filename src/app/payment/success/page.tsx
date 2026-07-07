'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const [details, setDetails] = useState({
    paymentId: '',
    amount: '',
    date: '',
  });

  useEffect(() => {
    setDetails({
      paymentId: searchParams.get('payment_id') || 'N/A',
      amount: searchParams.get('amount') || 'N/A',
      date: searchParams.get('date') ? new Date(searchParams.get('date')!).toLocaleString() : new Date().toLocaleString(),
    });
  }, [searchParams]);

  return (
    <div className="glass-card rounded-3xl p-8 sm:p-12 max-w-md w-full text-center relative z-10 border border-white/10 shadow-2xl">
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(34,197,94,0.3)]">
          <CheckCircle2 className="w-10 h-10 text-green-500" />
        </div>
      </div>
      
      <h1 className="text-3xl font-heading font-bold mb-2 text-foreground">Payment Successful</h1>
      <p className="text-muted-foreground mb-8">Thank you for your payment.</p>

      <div className="bg-black/20 rounded-xl p-6 mb-8 text-left space-y-4 border border-white/5">
        <div>
          <p className="text-sm text-muted-foreground mb-1">Payment ID</p>
          <p className="font-mono text-sm text-foreground break-all">{details.paymentId}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">Amount</p>
          <p className="font-semibold text-lg text-foreground">₹ {details.amount}</p>
        </div>
        <div>
          <p className="text-sm text-muted-foreground mb-1">Date</p>
          <p className="text-foreground">{details.date}</p>
        </div>
      </div>

      <Link href="/" passHref>
        <Button className="w-full h-12 text-base font-semibold shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all rounded-xl">
          Return Home
        </Button>
      </Link>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-aurora pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-green-500/10 rounded-full blur-[100px] pointer-events-none" />
      <Suspense fallback={<div className="text-foreground">Loading payment details...</div>}>
        <PaymentSuccessContent />
      </Suspense>
    </div>
  );
}
