"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MagneticButton } from "../ui/magnetic-button";
import { Phone, Mail, Calendar, ArrowRight } from "lucide-react";

export default function CTASection() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-blue-600/5" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto px-5 md:px-10 lg:px-16 xl:px-20 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
              Get in <span className="text-gradient">Touch</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-12 max-w-md">
              Have an AI project or want to automate your business?<br/>
              Let's discuss your requirements.
            </p>

            <div className="space-y-8 mb-12">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Phone</p>
                <a href="tel:+917019820571" className="flex items-center gap-3 text-2xl font-bold text-white hover:text-blue-400 transition-colors group">
                  <Phone className="h-6 w-6 text-blue-500" />
                  +91 7019820571
                  <span className="text-sm font-normal text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-2">(click-to-call)</span>
                </a>
              </div>
              
              <div>
                <p className="text-sm text-muted-foreground mb-2">Email</p>
                <a href="mailto:sorsvexa.agency@gmail.com" className="flex items-center gap-3 text-2xl font-bold text-white hover:text-blue-400 transition-colors group">
                  <Mail className="h-6 w-6 text-blue-500" />
                  sorsvexa.agency@gmail.com
                  <span className="text-sm font-normal text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity ml-2">(click-to-email)</span>
                </a>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <a href="tel:+917019820571" className="w-full sm:w-auto">
                <MagneticButton className="w-full px-6 py-3">
                  Call Now
                </MagneticButton>
              </a>
              <a href="mailto:sorsvexa.agency@gmail.com" className="w-full sm:w-auto">
                <MagneticButton className="w-full px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white">
                  Send Email
                </MagneticButton>
              </a>
              <div className="w-full sm:w-auto">
                <MagneticButton className="w-full px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white">
                  Book Free Consultation
                </MagneticButton>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden border-blue-500/20 shadow-[0_0_50px_rgba(37,99,235,0.1)]"
          >
            {isSubmitted ? (
              <div className="h-full min-h-[400px] flex flex-col items-center justify-center text-center">
                <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Thank you for contacting Sorsvexa.</h3>
                <p className="text-muted-foreground">Our team will reach out to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Full Name</label>
                    <input type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-white/80">Email Address</label>
                    <input type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@company.com" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Project Description</label>
                  <textarea required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell us about your automation needs..."></textarea>
                </div>
                <button type="submit" className="w-full group relative overflow-hidden rounded-xl bg-primary px-8 py-4 min-h-[48px] font-medium text-primary-foreground transition-colors hover:bg-blue-500">
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Send Message <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </button>
              </form>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
