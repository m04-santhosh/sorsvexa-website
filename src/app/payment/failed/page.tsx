'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { XCircle } from 'lucide-react';
import Link from 'next/link';

export default function PaymentFailedPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute inset-0 bg-aurora pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-red-500/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="glass-card rounded-3xl p-8 sm:p-12 max-w-md w-full text-center relative z-10 border border-white/10 shadow-2xl">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 bg-red-500/20 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.3)]">
            <XCircle className="w-10 h-10 text-red-500" />
          </div>
        </div>
        
        <h1 className="text-3xl font-heading font-bold mb-2 text-foreground">Payment Failed</h1>
        <p className="text-muted-foreground mb-8">We couldn't process your payment at this time.</p>

        <div className="space-y-4">
          <Button 
            onClick={() => router.push('/payment')}
            className="w-full h-12 text-base font-semibold shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] transition-all rounded-xl"
          >
            Retry Payment
          </Button>
          
          <Link href="/#contact" passHref className="w-full block">
            <Button 
              variant="outline" 
              className="w-full h-12 text-base font-semibold rounded-xl border-white/10 hover:bg-white/5"
            >
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
