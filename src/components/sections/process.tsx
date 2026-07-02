"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Search, PenTool, Code2, Rocket, Maximize } from "lucide-react";

const steps = [
  {
    title: "Discover",
    description: "We analyze your business processes to identify high-impact automation opportunities.",
    icon: Search,
  },
  {
    title: "Design",
    description: "We architect custom AI workflows and design premium, user-centric interfaces.",
    icon: PenTool,
  },
  {
    title: "Develop",
    description: "Our engineers build robust, scalable systems using the latest technology stack.",
    icon: Code2,
  },
  {
    title: "Deploy",
    description: "Seamless integration into your existing ecosystem with zero operational downtime.",
    icon: Rocket,
  },
  {
    title: "Scale",
    description: "Continuous monitoring, optimization, and scaling of your automated operations.",
    icon: Maximize,
  },
];

export default function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="process" className="py-32 relative overflow-hidden">
      <div className="absolute right-0 top-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-y-1/2" />
      
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Our Proven <span className="text-gradient">Process</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A systematic approach to transforming your business from manual operations to intelligent automation.
          </p>
        </div>

        <div className="relative max-w-3xl mx-auto" ref={containerRef}>
          {/* Animated Background Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          
          {/* Animated Foreground Line */}
          <motion.div 
            className="absolute left-8 md:left-1/2 top-0 w-1 bg-gradient-to-b from-blue-400 to-blue-600 -translate-x-1/2 rounded-full"
            style={{ height: lineHeight, originY: 0 }}
          />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div key={index} className="relative flex flex-col md:flex-row items-center gap-8 md:gap-16">
                
                {/* Content Left / Right Logic */}
                <div className={`w-full md:w-1/2 flex ${index % 2 === 0 ? "md:justify-end" : "md:justify-start md:order-last"} pl-20 md:pl-0`}>
                  <motion.div 
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className={`glass-card p-6 md:p-8 rounded-3xl w-full text-left ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                </div>

                {/* Center Node */}
                <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-background border-4 border-blue-500/30 flex items-center justify-center shadow-[0_0_20px_rgba(37,99,235,0.3)] z-10">
                  <step.icon className="h-5 w-5 text-blue-400" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
