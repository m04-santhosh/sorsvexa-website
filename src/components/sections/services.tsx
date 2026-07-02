"use client";

import { motion } from "framer-motion";
import { 
  Bot, 
  Globe, 
  MessageCircle, 
  Database, 
  CalendarCheck, 
  Workflow, 
  Video, 
  Share2 
} from "lucide-react";

const services = [
  {
    title: "AI Chatbots",
    description: "Intelligent conversational agents that handle customer support, qualify leads, and drive sales 24/7.",
    icon: Bot,
    color: "from-blue-400 to-blue-600",
  },
  {
    title: "WhatsApp Automation",
    description: "Automate your WhatsApp marketing, customer service, and notifications for higher engagement.",
    icon: MessageCircle,
    color: "from-green-400 to-green-600",
  },
  {
    title: "CRM Setup & AI",
    description: "Custom CRM systems enhanced with AI to predict customer behavior and automate follow-ups.",
    icon: Database,
    color: "from-purple-400 to-purple-600",
  },
  {
    title: "Appointment Booking",
    description: "Smart scheduling systems that eliminate no-shows and seamlessly integrate with your calendar.",
    icon: CalendarCheck,
    color: "from-pink-400 to-pink-600",
  },
  {
    title: "Workflow Automation",
    description: "Connect your apps and automate repetitive tasks to save hundreds of hours every month.",
    icon: Workflow,
    color: "from-amber-400 to-amber-600",
  },
  {
    title: "Business Websites",
    description: "High-converting, AI-powered websites designed for maximum speed, SEO, and user experience.",
    icon: Globe,
    color: "from-cyan-400 to-cyan-600",
  },
  {
    title: "Video Editing",
    description: "Cinematic, attention-grabbing video content optimized for social media and advertising.",
    icon: Video,
    color: "from-rose-400 to-rose-600",
  },
  {
    title: "Social Media AI",
    description: "Automated content creation, scheduling, and community management powered by advanced AI.",
    icon: Share2,
    color: "from-indigo-400 to-indigo-600",
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: any = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function ServicesSection() {
  return (
    <section id="services" className="py-32 relative">
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-5 md:px-10 lg:px-16 xl:px-20 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
              Intelligent Solutions For <span className="text-gradient">Modern Business</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              We leverage cutting-edge artificial intelligence to build scalable systems that handle the heavy lifting, so you can focus on growth.
            </p>
          </motion.div>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group glass-card rounded-2xl p-6 relative overflow-hidden h-full flex flex-col"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10 flex-1 flex flex-col">
                <div className={`w-12 h-12 rounded-xl mb-6 flex items-center justify-center bg-gradient-to-br ${service.color} bg-opacity-10 shadow-lg shadow-black/20 group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="h-6 w-6 text-white drop-shadow-md" />
                </div>
                
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
