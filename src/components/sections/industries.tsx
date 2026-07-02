"use client";

import { motion } from "framer-motion";
import { 
  Stethoscope, 
  Utensils, 
  Dumbbell, 
  Hotel, 
  Scissors, 
  GraduationCap, 
  Rocket, 
  Building2
} from "lucide-react";

const industries = [
  { name: "Clinics & Hospitals", icon: Stethoscope },
  { name: "Restaurants", icon: Utensils },
  { name: "Gyms & Fitness", icon: Dumbbell },
  { name: "Hotels & Resorts", icon: Hotel },
  { name: "Salons & Spas", icon: Scissors },
  { name: "Educational Institutions", icon: GraduationCap },
  { name: "Startups", icon: Rocket },
  { name: "Real Estate", icon: Building2 },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-black relative border-y border-white/5">
      <div className="container mx-auto px-5 md:px-10 lg:px-16 xl:px-20 max-w-7xl">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Industries We <span className="text-gradient">Elevate</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Our AI automation frameworks are highly adaptable, delivering industry-specific results that redefine operational efficiency.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 lg:gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center justify-center text-center gap-4 group cursor-pointer hover:bg-white/10"
            >
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 group-hover:bg-primary/20">
                <industry.icon className="h-6 w-6 text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-sm md:text-base font-medium text-white/90 group-hover:text-white">
                {industry.name}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
