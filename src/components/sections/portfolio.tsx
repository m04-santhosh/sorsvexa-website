"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { MagneticButton } from "../ui/magnetic-button";

const projects = [
  {
    title: "MedSync CRM",
    category: "Healthcare Automation",
    description: "Automated patient intake and scheduling system reducing wait times by 45%.",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "group-hover:border-blue-500/50",
  },
  {
    title: "Apex Flow",
    category: "E-Commerce AI",
    description: "Intelligent customer service bot handling 80% of tier 1 queries autonomously.",
    color: "from-purple-500/20 to-pink-500/20",
    border: "group-hover:border-purple-500/50",
  },
  {
    title: "Lumina Estate",
    category: "Real Estate WhatsApp Bot",
    description: "Conversational property viewing scheduler increasing lead conversion by 3x.",
    color: "from-green-500/20 to-emerald-500/20",
    border: "group-hover:border-green-500/50",
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-gradient">Work</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              A selection of our most impactful automation projects that redefined how businesses operate.
            </p>
          </div>
          <MagneticButton className="w-fit bg-white/5 border border-white/10 hover:bg-white/10 text-white">
            View All Projects
          </MagneticButton>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group glass-card rounded-3xl overflow-hidden cursor-pointer ${project.border} transition-colors duration-500`}
            >
              {/* Mockup Container */}
              <div className={`h-64 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-end justify-center p-6 pb-0`}>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-5 mix-blend-luminosity" />
                
                {/* Laptop Mockup Abstraction */}
                <div className="w-full h-[85%] bg-[#0f172a] rounded-t-xl border-x-4 border-t-4 border-gray-800 relative shadow-2xl group-hover:-translate-y-4 transition-transform duration-500">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gray-600" />
                  <div className="w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent p-4">
                    <div className="w-1/3 h-4 bg-white/10 rounded mb-4" />
                    <div className="w-full h-2 bg-white/5 rounded mb-2" />
                    <div className="w-3/4 h-2 bg-white/5 rounded" />
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-blue-400 mb-2">
                      {project.category}
                    </p>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                    <ArrowUpRight className="h-5 w-5 text-white" />
                  </div>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
