"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Counter({ value, suffix = "", prefix = "" }: { value: number, suffix?: string, prefix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [hasAnimated, setHasAnimated] = useState(false);
  
  const spring = useSpring(0, {
    mass: 1,
    stiffness: 50,
    damping: 15,
  });

  const display = useTransform(spring, (current) => 
    `${prefix}${Math.floor(current).toLocaleString()}${suffix}`
  );

  useEffect(() => {
    if (isInView && !hasAnimated) {
      spring.set(value);
      setHasAnimated(true);
    }
  }, [isInView, spring, value, hasAnimated]);

  return <motion.span ref={ref}>{display}</motion.span>;
}

const stats = [
  { label: "Projects Delivered", value: 150, suffix: "+" },
  { label: "Happy Clients", value: 98, suffix: "%" },
  { label: "Automations Running", value: 500, suffix: "+" },
  { label: "Hours Saved / Month", value: 10000, suffix: "+" },
];

export default function StatisticsSection() {
  return (
    <section className="py-20 border-y border-white/5 bg-blue-950/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10" />
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-white/5">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center justify-center text-center px-4">
              <h3 className="font-heading text-4xl md:text-5xl font-bold text-white mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p className="text-sm font-medium text-blue-400 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
