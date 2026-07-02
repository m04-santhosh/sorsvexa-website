"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, CheckCircle2, Code2, Globe2, LayoutTemplate, Zap, MessageCircle, Users, Bot, Calendar, Activity } from "lucide-react";
import { MagneticButton } from "../ui/magnetic-button";

const stats = [
  { label: "Live AI Solutions", value: "2+", icon: Globe2 },
  { label: "Responsive Design", value: "100%", icon: LayoutTemplate },
  { label: "Powered", value: "AI", icon: Zap },
  { label: "Tech Stack", value: "Modern", icon: Code2 },
];

const WhatsAppMockup = () => (
  <>
    <div className="absolute inset-0 bg-[#020817]/90" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.15)_0%,transparent_50%)] animate-pulse" />

    <div className="relative w-full h-full flex flex-col items-center justify-end z-10">
       <div className="absolute top-6 left-0 right-0 flex flex-col items-center">
         <h4 className="text-xl font-bold text-white mb-1 drop-shadow-lg tracking-tight">AI WhatsApp Business</h4>
         <p className="text-[10px] text-blue-200/70 font-medium tracking-wide">Automate. Capture. Scale.</p>
       </div>

       <div className="relative w-full flex justify-center items-end mt-16 h-[120px]">
         {/* Main WhatsApp Phone UI Mockup */}
         <div className="w-[60%] sm:w-[50%] h-full bg-[#0a1128] border border-white/10 border-b-0 rounded-t-2xl shadow-[0_0_40px_rgba(59,130,246,0.2)] relative z-20 flex flex-col group-hover:-translate-y-3 transition-transform duration-700 ease-out">
           <div className="bg-[#0f172a] p-2 rounded-t-2xl border-b border-white/5 flex items-center justify-between">
             <div className="flex items-center gap-1.5">
               <div className="w-4 h-4 rounded-full bg-blue-500/20 flex items-center justify-center">
                 <Bot className="w-2.5 h-2.5 text-blue-400" />
               </div>
               <div className="text-[9px] font-medium text-white">AI Assistant</div>
             </div>
             <div className="flex gap-0.5">
               <div className="w-1 h-1 rounded-full bg-white/20" />
               <div className="w-1 h-1 rounded-full bg-white/20" />
               <div className="w-1 h-1 rounded-full bg-white/20" />
             </div>
           </div>
           <div className="flex-1 p-3 flex flex-col gap-2.5 overflow-hidden">
             <div className="bg-white/5 rounded-lg rounded-tl-none p-2 w-[75%] self-start border border-white/5 backdrop-blur-sm">
               <div className="w-full h-1.5 bg-white/20 rounded mb-1.5" />
               <div className="w-1/2 h-1.5 bg-white/20 rounded" />
             </div>
             <div className="bg-blue-600/20 rounded-lg rounded-tr-none p-2 w-[85%] self-end border border-blue-500/30 backdrop-blur-sm">
               <div className="w-full h-1.5 bg-blue-200/50 rounded mb-1.5" />
               <div className="w-3/4 h-1.5 bg-blue-200/50 rounded mb-1.5" />
               <div className="w-1/3 h-1.5 bg-blue-200/50 rounded" />
             </div>
           </div>
         </div>

         {/* Floating Notification */}
         <div className="absolute right-[5%] top-0 w-32 bg-white/10 backdrop-blur-md border border-blue-500/30 rounded-lg p-2 shadow-[0_0_20px_rgba(59,130,246,0.3)] z-30 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-700 delay-75">
            <div className="flex items-center gap-1.5">
              <div className="w-5 h-5 rounded-full bg-yellow-500/20 flex items-center justify-center shrink-0">
                <Zap className="w-3 h-3 text-yellow-400" />
              </div>
              <div className="text-[9px] font-semibold text-white leading-tight">New Lead Captured</div>
            </div>
         </div>
         
         {/* Floating CRM Card */}
         <div className="absolute left-[5%] bottom-6 w-28 bg-[#0a1128]/90 backdrop-blur-xl border border-white/10 rounded-lg p-2 shadow-2xl z-30 group-hover:-translate-x-2 group-hover:translate-y-1 transition-all duration-700 delay-150">
           <div className="flex items-center gap-1.5 mb-2">
             <Users className="w-3.5 h-3.5 text-blue-400" />
             <div className="text-[8px] font-medium text-white/70">CRM Sync</div>
           </div>
           <div className="w-full h-1 bg-green-400/50 rounded mb-1" />
           <div className="w-4/5 h-1 bg-white/10 rounded" />
         </div>
         
         {/* Floating WhatsApp Icon */}
         <div className="absolute left-[20%] top-6 w-8 h-8 bg-green-500/10 backdrop-blur-md border border-green-500/30 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(34,197,94,0.2)] z-10 animate-pulse">
           <MessageCircle className="w-4 h-4 text-green-400" />
         </div>
       </div>
    </div>
  </>
);

const MediFlowMockup = () => (
  <>
    <div className="absolute inset-0 bg-[#020817]/90" />
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-[200%] bg-[radial-gradient(circle_at_center,rgba(79,70,229,0.15)_0%,transparent_50%)] animate-pulse" style={{ animationDuration: '4s' }} />

    <div className="relative w-full h-full flex flex-col items-center justify-end z-10">
       <div className="absolute top-6 left-0 right-0 flex flex-col items-center">
         <h4 className="text-xl font-bold text-white mb-1 drop-shadow-lg tracking-tight">MediFlow AI</h4>
         <p className="text-[10px] text-indigo-200/70 font-medium tracking-wide">AI-Powered Clinic Management</p>
       </div>

       <div className="relative w-full flex justify-center items-end mt-16 h-[120px]">
         {/* Main Dashboard Panel */}
         <div className="w-[85%] h-full bg-[#0a1128] border border-white/10 border-b-0 rounded-t-xl shadow-[0_0_40px_rgba(79,70,229,0.2)] relative z-20 flex flex-col p-2.5 group-hover:-translate-y-3 transition-transform duration-700 ease-out">
            <div className="flex justify-between items-center mb-3 px-1">
              <div className="flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-indigo-400" />
                <div className="text-[10px] font-semibold text-white">Clinic Dashboard</div>
              </div>
              <div className="flex gap-1.5">
                 <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
                 <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>
            </div>
            
            <div className="grid grid-cols-3 gap-2 mb-3">
              <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex flex-col justify-center">
                <div className="text-[7px] text-white/50 mb-1">Total Patients</div>
                <div className="w-full h-1.5 bg-indigo-400/80 rounded" />
              </div>
              <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex flex-col justify-center">
                <div className="text-[7px] text-white/50 mb-1">Appointments</div>
                <div className="w-3/4 h-1.5 bg-purple-400/80 rounded" />
              </div>
              <div className="bg-white/5 rounded-lg p-2 border border-white/5 flex flex-col justify-center">
                <div className="text-[7px] text-white/50 mb-1">Revenue</div>
                <div className="w-4/5 h-1.5 bg-emerald-400/80 rounded" />
              </div>
            </div>
            
            <div className="flex-1 bg-gradient-to-t from-indigo-500/10 to-transparent rounded border border-white/5 relative overflow-hidden flex items-end px-2">
               {/* Simulated Chart Bars */}
               <div className="w-full flex justify-between items-end h-[80%] gap-1 opacity-70">
                 <div className="w-full h-[40%] bg-indigo-500/30 rounded-t-sm" />
                 <div className="w-full h-[60%] bg-indigo-500/30 rounded-t-sm" />
                 <div className="w-full h-[30%] bg-indigo-500/30 rounded-t-sm" />
                 <div className="w-full h-[80%] bg-indigo-500/50 rounded-t-sm" />
                 <div className="w-full h-[50%] bg-indigo-500/30 rounded-t-sm" />
                 <div className="w-full h-[90%] bg-indigo-500/60 rounded-t-sm" />
                 <div className="w-full h-[70%] bg-indigo-500/40 rounded-t-sm" />
               </div>
            </div>
         </div>

         {/* AI Receptionist Card */}
         <div className="absolute right-[2%] top-2 w-32 bg-[#0f172a]/90 backdrop-blur-xl border border-indigo-500/40 rounded-lg p-2 shadow-[0_0_20px_rgba(99,102,241,0.25)] z-30 group-hover:translate-x-2 group-hover:-translate-y-2 transition-all duration-700 delay-75">
            <div className="flex items-center gap-2 mb-2">
              <Bot className="w-3.5 h-3.5 text-indigo-300" />
              <div className="text-[9px] font-semibold text-white">AI Receptionist</div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="w-full h-1 bg-indigo-400/50 rounded" />
              <div className="w-2/3 h-1 bg-white/20 rounded" />
            </div>
         </div>

         {/* Calendar/Appointment Card */}
         <div className="absolute left-[2%] bottom-6 w-28 bg-[#0f172a]/90 backdrop-blur-xl border border-white/10 rounded-lg p-2 shadow-2xl z-30 group-hover:-translate-x-2 group-hover:translate-y-1 transition-all duration-700 delay-150">
            <div className="flex items-center gap-1.5 mb-2">
              <Calendar className="w-3.5 h-3.5 text-purple-400" />
              <div className="text-[9px] font-medium text-white/80">Schedule</div>
            </div>
            <div className="space-y-1.5">
              <div className="w-full h-1 bg-white/20 rounded" />
              <div className="w-3/4 h-1 bg-white/10 rounded" />
              <div className="w-5/6 h-1 bg-white/10 rounded" />
            </div>
         </div>
       </div>
    </div>
  </>
);

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
    mockup: <WhatsAppMockup />
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
    mockup: <MediFlowMockup />
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
              <div className={`h-64 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-end justify-center p-0 border-b border-white/10 shrink-0`}>
                {project.mockup}
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
