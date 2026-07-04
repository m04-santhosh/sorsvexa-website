"use client";

import { motion } from "framer-motion";
import { MagneticButton } from "../ui/magnetic-button";
import { Bot, Zap, Palette, TrendingUp, Lock, Handshake, ArrowRight, Sparkles } from "lucide-react";

const cards = [
  {
    icon: Bot,
    title: "AI-First Solutions",
    description: "Every solution is built with AI at its core to automate repetitive work and improve efficiency.",
  },
  {
    icon: Zap,
    title: "Fast Delivery",
    description: "Rapid project delivery using modern technologies without sacrificing quality.",
  },
  {
    icon: Palette,
    title: "Premium UI/UX",
    description: "Beautiful, responsive and conversion-focused digital experiences.",
  },
  {
    icon: TrendingUp,
    title: "Built for Growth",
    description: "Scalable solutions that grow with your business.",
  },
  {
    icon: Lock,
    title: "Secure & Reliable",
    description: "Built using secure architectures and modern development practices.",
  },
  {
    icon: Handshake,
    title: "Ongoing Support",
    description: "Continuous support after launch with updates and improvements.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 }
  },
};

export default function WhyBusinessesChooseSorsvexa() {
  return (
    <section id="why-sorsvexa" className="relative py-24 lg:py-32 overflow-hidden flex flex-col items-center">
      {/* Background cinematic elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Floating particles */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-50">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-1 w-1 rounded-full bg-blue-400/30 blur-[1px]"
            initial={{
              x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
              y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 1000),
              opacity: Math.random() * 0.5 + 0.1,
              scale: Math.random() * 2 + 1,
            }}
            animate={{
              y: [null, Math.random() * -200],
              opacity: [null, Math.random() * 0.8 + 0.2, 0],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-5 md:px-10 lg:px-16 xl:px-20 relative z-10 max-w-7xl">
        {/* Header Section */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-blue-500/20 backdrop-blur-md"
          >
            <Sparkles className="h-4 w-4 text-blue-400" />
            <span className="text-sm font-medium text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.5)]">
              Why Choose Sorsvexa
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-heading text-[32px] md:text-[44px] lg:text-[52px] font-bold tracking-tight text-white leading-[1.1] mb-6"
          >
            Why Businesses Choose Sorsvexa
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-[16px] md:text-[18px] text-muted-foreground leading-relaxed"
          >
            We don't just build websites—we build intelligent AI solutions that automate operations, improve customer experiences, and help businesses grow faster.
          </motion.p>
        </div>

        {/* 3x2 Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-20"
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="group relative h-full rounded-2xl bg-[#0a1020]/60 backdrop-blur-xl border border-white/10 p-8 hover:-translate-y-2 hover:border-blue-500/40 shadow-[0_0_15px_rgba(0,0,0,0.5)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.2)] transition-all duration-500 flex flex-col overflow-hidden"
            >
              {/* Subtle gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-all duration-500">
                  <card.icon className="h-6 w-6 text-white group-hover:text-blue-400 transition-colors duration-500 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] group-hover:drop-shadow-[0_0_12px_rgba(59,130,246,0.6)]" />
                </div>
                
                <h3 className="text-xl font-bold text-white mb-3 tracking-wide">
                  {card.title}
                </h3>
                
                <p className="text-muted-foreground text-[15px] leading-relaxed">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col items-center text-center max-w-2xl mx-auto"
        >
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-white mb-4">
            Ready to Transform Your Business?
          </h3>
          <p className="text-muted-foreground mb-8">
            Let's build an AI-powered solution for your business.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            <a href="#contact" className="w-full sm:w-auto">
              <MagneticButton className="w-full sm:w-auto px-8 py-4 text-base group">
                <span className="flex items-center justify-center gap-2">
                  Book Free Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </MagneticButton>
            </a>
            <a href="#portfolio" className="w-full sm:w-auto">
              <MagneticButton className="w-full sm:w-auto px-8 py-4 text-base bg-white/5 border border-white/10 hover:bg-white/10 text-white">
                Explore Portfolio
              </MagneticButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
