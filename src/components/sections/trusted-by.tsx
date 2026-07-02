"use client";

import { motion } from "framer-motion";

const companies = [
  "Microsoft",
  "Google",
  "Meta",
  "Stripe",
  "Vercel",
  "Framer",
  "Linear",
  "Notion",
];

export default function TrustedBySection() {
  return (
    <section className="py-20 border-y border-white/5 bg-background/50 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl mb-10 text-center">
        <p className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
          Trusted by innovative companies worldwide
        </p>
      </div>

      {/* Marquee Container */}
      <div className="relative flex w-full overflow-hidden">
        {/* Left Gradient Fade */}
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10" />
        
        {/* Right Gradient Fade */}
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <div className="flex w-fit animate-marquee whitespace-nowrap">
          {[...companies, ...companies, ...companies].map((company, index) => (
            <div
              key={`${company}-${index}`}
              className="mx-8 flex items-center justify-center opacity-40 hover:opacity-100 transition-opacity duration-300"
            >
              <span className="font-heading text-2xl md:text-3xl font-bold text-white tracking-tight">
                {company}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
