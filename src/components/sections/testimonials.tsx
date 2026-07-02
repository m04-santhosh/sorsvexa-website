"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Jenkins",
    role: "CEO, TechFlow",
    image: "https://i.pravatar.cc/150?u=sarah",
    content: "Sorsvexa completely transformed our sales pipeline. Their AI CRM integration saves us 40 hours a week and increased our closing rate by 22%. It feels like magic.",
  },
  {
    name: "Marcus Chen",
    role: "Operations Director, Elevate Medical",
    image: "https://i.pravatar.cc/150?u=marcus",
    content: "The WhatsApp automation they built for our clinics eliminated no-shows and freed up our reception staff to focus on actual patient care. Brilliant team.",
  },
  {
    name: "Elena Rodriguez",
    role: "Founder, Luxe Real Estate",
    image: "https://i.pravatar.cc/150?u=elena",
    content: "Our new website and AI chatbot capture leads at 3 AM and schedule viewings automatically. Best investment we've made in our business infrastructure.",
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 relative">
      <div className="container mx-auto px-5 md:px-10 lg:px-16 xl:px-20 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Trusted By <span className="text-gradient">Industry Leaders</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our partners say about scaling with Sorsvexa.
          </p>
        </div>

        <div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] -mx-5 px-5 md:mx-0 md:px-0">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-3xl p-8 relative min-w-[85vw] sm:min-w-[400px] md:min-w-0 snap-center flex-shrink-0 flex flex-col justify-between"
            >
              <Quote className="absolute top-8 right-8 h-12 w-12 text-white/5" />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-lg text-white/90 mb-8 leading-relaxed relative z-10">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full border-2 border-white/10"
                />
                <div>
                  <h4 className="font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-sm text-blue-400">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
