"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Code2, Globe2, LayoutTemplate, Zap } from "lucide-react";
import { MagneticButton } from "../ui/magnetic-button";

const stats = [
  { label: "Live AI Solutions", value: "2+", icon: Globe2 },
  { label: "Responsive Design", value: "100%", icon: LayoutTemplate },
  { label: "Powered", value: "AI", icon: Zap },
  { label: "Tech Stack", value: "Modern", icon: Code2 },
];

const projects = [
  {
    title: "AI WhatsApp Business Automation",
    category: "Business Automation",
    description: "An AI-powered WhatsApp automation platform that helps businesses instantly respond to customer enquiries, qualify leads, automate conversations, and improve customer engagement.",
    features: ["AI Chatbot", "WhatsApp Automation", "Lead Qualification", "Auto Reply", "CRM Integration"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI Integration"],
    liveDemo: "https://ai-whatsapp-landing-page.vercel.app",
    color: "from-blue-500/20 to-cyan-500/20",
    border: "hover:border-blue-500/50 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]",
  },
  {
    title: "MediFlow AI – Clinic Management",
    category: "Healthcare",
    description: "A premium AI-powered clinic management platform with intelligent appointment booking, AI receptionist, patient CRM, billing, reports, analytics, and workflow automation.",
    features: ["AI Receptionist", "Appointment Booking", "Patient CRM", "Billing", "Analytics", "Reports"],
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "AI Integration"],
    liveDemo: "https://ai-clinic-management-system-two.vercel.app",
    color: "from-indigo-500/20 to-purple-500/20",
    border: "hover:border-indigo-500/50 hover:shadow-[0_0_30px_rgba(99,102,241,0.2)]",
  }
];

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-32 relative">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-3xl">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Featured <span className="text-gradient">AI Solutions</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Explore some of our AI-powered solutions designed to automate businesses, improve customer experience, and accelerate growth.
            </p>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-2xl p-6 flex flex-col items-center text-center justify-center border border-white/5 bg-white/[0.02]"
            >
              <stat.icon className="w-8 h-8 text-blue-400 mb-4" />
              <h4 className="text-3xl font-bold text-white mb-1">{stat.value}</h4>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Cards */}
        <div className="grid lg:grid-cols-2 gap-10 mb-24">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`group glass-card rounded-3xl overflow-hidden border border-white/10 bg-white/[0.02] ${project.border} transition-all duration-500 hover:-translate-y-2 flex flex-col`}
            >
              {/* Mockup Container */}
              <div className={`h-64 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-end justify-center p-6 pb-0 border-b border-white/10 shrink-0`}>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80')] bg-cover bg-center opacity-5 mix-blend-luminosity" />
                
                {/* Laptop Mockup Abstraction */}
                <div className="w-4/5 h-[90%] bg-[#0f172a] rounded-t-xl border-x-4 border-t-4 border-gray-800 relative shadow-2xl group-hover:-translate-y-2 transition-transform duration-500">
                  <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-gray-600" />
                  <div className="w-full h-full bg-gradient-to-b from-blue-900/20 to-transparent p-4 flex flex-col gap-3">
                    <div className="w-1/3 h-4 bg-white/10 rounded" />
                    <div className="w-full h-2 bg-white/5 rounded" />
                    <div className="w-3/4 h-2 bg-white/5 rounded" />
                  </div>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 text-xs font-semibold uppercase tracking-wider border border-blue-500/20 mb-4">
                      {project.category}
                    </span>
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-8 shrink-0">
                  {project.description}
                </p>

                <div className="space-y-6 mb-8 flex-1">
                  <div>
                    <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Key Features</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.features.map((feature, fIndex) => (
                        <span key={fIndex} className="text-xs text-white/80 bg-white/5 border border-white/10 px-2.5 py-1.5 rounded-md flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-xs font-semibold text-white/50 uppercase tracking-wider mb-3">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, tIndex) => (
                        <span key={tIndex} className="text-xs text-blue-300/80 bg-blue-500/5 border border-blue-500/10 px-2.5 py-1.5 rounded-md">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 mt-auto">
                  <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <MagneticButton className="w-full bg-blue-600 hover:bg-blue-500 text-white border-none py-3 h-12 flex items-center justify-center gap-2">
                      Live Demo <ArrowUpRight className="w-4 h-4" />
                    </MagneticButton>
                  </a>
                  <a href="#contact" className="flex-1">
                    <MagneticButton className="w-full bg-white/5 hover:bg-white/10 text-white border border-white/10 py-3 h-12 flex items-center justify-center">
                      Case Study
                    </MagneticButton>
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-10 md:p-16 text-center relative overflow-hidden border border-blue-500/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 via-transparent to-purple-600/10" />
          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Have a project in mind?
            </h3>
            <p className="text-lg text-muted-foreground mb-8">
              Let's build an AI-powered solution tailored for your business.
            </p>
            <a href="#contact">
              <MagneticButton className="bg-white text-black hover:bg-gray-100 font-semibold px-8 py-4 h-14 text-lg">
                Book a Free Consultation
              </MagneticButton>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
