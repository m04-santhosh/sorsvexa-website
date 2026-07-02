"use client";

import { motion } from "framer-motion";
import { Zap, Layout, Brain, TrendingUp, Headset, Settings2, Target } from "lucide-react";

export default function WhyChooseUsSection() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
            Why Choose <span className="text-gradient">Sorsvexa</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We don't just build software. We engineer automated growth engines tailored to your business objectives.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[200px]">
          
          {/* AI First - Large feature block */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-2 md:row-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-end"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/20 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/4 group-hover:bg-blue-500/30 transition-colors duration-500" />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center mb-6 backdrop-blur-md border border-blue-500/30">
                <Brain className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-3">AI First Approach</h3>
              <p className="text-muted-foreground text-lg max-w-md">
                Every solution we build integrates state-of-the-art artificial intelligence at its core, giving you an unfair advantage.
              </p>
            </div>
          </motion.div>

          {/* Lightning Fast */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="glass-card rounded-3xl p-6 relative group"
          >
            <div className="w-10 h-10 rounded-lg bg-yellow-500/20 flex items-center justify-center mb-4">
              <Zap className="h-5 w-5 text-yellow-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Lightning Fast</h3>
            <p className="text-sm text-muted-foreground">Rapid deployment of complex automation systems.</p>
          </motion.div>

          {/* ROI Focused */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-card rounded-3xl p-6 relative group"
          >
            <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-4">
              <Target className="h-5 w-5 text-green-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">ROI Focused</h3>
            <p className="text-sm text-muted-foreground">Measurable returns on your automation investment.</p>
          </motion.div>

          {/* Business Growth */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="md:col-span-2 glass-card rounded-3xl p-8 relative group flex items-center gap-6"
          >
             <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
             <div className="w-16 h-16 rounded-full bg-purple-500/20 flex items-center justify-center shrink-0">
               <TrendingUp className="h-8 w-8 text-purple-400" />
             </div>
             <div>
               <h3 className="text-2xl font-bold text-white mb-2">Business Growth</h3>
               <p className="text-muted-foreground">Scale operations seamlessly without linearly scaling your headcount or costs.</p>
             </div>
          </motion.div>

          {/* Modern UI */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="glass-card rounded-3xl p-6 relative group"
          >
            <div className="w-10 h-10 rounded-lg bg-pink-500/20 flex items-center justify-center mb-4">
              <Layout className="h-5 w-5 text-pink-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Modern UI</h3>
            <p className="text-sm text-muted-foreground">Apple-level aesthetics for all your customer touchpoints.</p>
          </motion.div>

          {/* Automation Experts */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="glass-card rounded-3xl p-6 relative group"
          >
            <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center mb-4">
              <Settings2 className="h-5 w-5 text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Automation Experts</h3>
            <p className="text-sm text-muted-foreground">Deep technical expertise in connecting disjointed systems.</p>
          </motion.div>
          
          {/* 24/7 Support */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="md:col-span-2 glass-card rounded-3xl p-6 relative group overflow-hidden"
          >
             <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-500 mix-blend-luminosity" />
             <div className="relative z-10 flex flex-col h-full justify-between">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center mb-4">
                  <Headset className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">24/7 Dedicated Support</h3>
                  <p className="text-sm text-muted-foreground">Our team monitors your automated workflows around the clock to ensure zero downtime.</p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
