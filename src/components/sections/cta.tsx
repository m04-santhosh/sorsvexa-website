"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MagneticButton } from "../ui/magnetic-button";
import { Phone, Mail, Calendar, ArrowRight, Loader2, XCircle } from "lucide-react";

export default function CTASection() {
  const [isLoading, setIsLoading] = useState(false);
  const [toast, setToast] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    setToast(null);

    const formData = new FormData(e.currentTarget);
    const full_name = formData.get("full_name") as string;
    const company_name = formData.get("company_name") as string;
    const email = formData.get("email") as string;
    const phone = formData.get("phone") as string;
    const industry = formData.get("industry") as string;
    const service = formData.get("service") as string;
    const budget = formData.get("budget") as string;
    const message = formData.get("message") as string;

    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          full_name,
          company_name,
          email,
          phone,
          industry,
          service,
          budget,
          message,
        }),
      });

      if (response.ok) {
        setToast({
          type: "success",
          message: "Thank you! Your consultation request has been received. Our team will contact you shortly.",
        });
        formRef.current?.reset();
      } else {
        throw new Error("Failed");
      }
    } catch (error) {
      setToast({
        type: "error",
        message: "Something went wrong.\nPlease try again later.",
      });
    } finally {
      setIsLoading(false);
      setTimeout(() => setToast(null), 8000);
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Toast */}
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className={`fixed bottom-8 left-1/2 -translate-x-1/2 z-[100] flex items-center gap-4 px-6 py-4 rounded-2xl border backdrop-blur-xl shadow-2xl ${
              toast.type === "success" 
                ? "bg-green-500/10 border-green-500/20 text-green-500" 
                : "bg-red-500/10 border-red-500/20 text-red-500"
            }`}
          >
            {toast.type === "success" ? (
              <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center shrink-0">
                <span className="text-xl">🎉</span>
              </div>
            ) : (
              <div className="w-10 h-10 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                <XCircle className="w-5 h-5" />
              </div>
            )}
            <div className="flex flex-col">
              <p className="font-medium text-white whitespace-pre-line text-sm md:text-base leading-relaxed">{toast.message}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

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
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Full Name *</label>
                  <input name="full_name" type="text" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="John Doe" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Company Name</label>
                  <input name="company_name" type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="Acme Corp" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Business Email *</label>
                  <input name="email" type="email" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Phone Number *</label>
                  <input name="phone" type="tel" required className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-blue-500 transition-colors" placeholder="+91 00000 00000" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Industry</label>
                  <select name="industry" defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-blue-500 transition-colors [&>option]:bg-[#050816] [&>option]:text-white">
                    <option value="" disabled>Select Industry</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Real Estate">Real Estate</option>
                    <option value="E-commerce">E-commerce</option>
                    <option value="Education">Education</option>
                    <option value="Finance">Finance</option>
                    <option value="Manufacturing">Manufacturing</option>
                    <option value="Restaurant">Restaurant</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-white/80">Service Required</label>
                  <select name="service" defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-blue-500 transition-colors [&>option]:bg-[#050816] [&>option]:text-white">
                    <option value="" disabled>Select Service</option>
                    <option value="AI Chatbot">AI Chatbot</option>
                    <option value="WhatsApp Automation">WhatsApp Automation</option>
                    <option value="CRM Automation">CRM Automation</option>
                    <option value="AI Website">AI Website</option>
                    <option value="AI Voice Agent">AI Voice Agent</option>
                    <option value="Custom AI Solution">Custom AI Solution</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Estimated Budget</label>
                <select name="budget" defaultValue="" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 min-h-[48px] text-white focus:outline-none focus:border-blue-500 transition-colors [&>option]:bg-[#050816] [&>option]:text-white">
                  <option value="" disabled>Select Budget</option>
                  <option value="Under ₹25,000">Under ₹25,000</option>
                  <option value="₹25,000 - ₹50,000">₹25,000 - ₹50,000</option>
                  <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                  <option value="Above ₹1,00,000">Above ₹1,00,000</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white/80">Project Description *</label>
                <textarea name="message" required rows={4} className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 transition-colors resize-none" placeholder="Tell us about your automation needs..."></textarea>
              </div>
              <button disabled={isLoading} type="submit" className="w-full group relative overflow-hidden rounded-xl bg-primary px-8 py-4 min-h-[48px] font-medium text-primary-foreground transition-colors hover:bg-blue-500 disabled:opacity-70 disabled:cursor-not-allowed">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {isLoading ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" /> Submitting...
                    </>
                  ) : (
                    <>
                      Book Free Consultation <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </>
                  )}
                </span>
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
