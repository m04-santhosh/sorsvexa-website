"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { MagneticButton } from "../ui/magnetic-button";
import { 
  ArrowRight, Bot, MessageSquare, Zap, 
  CheckCircle2, TrendingUp, Users, Clock, 
  ArrowDown, Activity, Phone, Sparkles, Check
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const Particles = () => {
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {[...Array(30)].map((_, i) => (
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
            y: [null, Math.random() * -500],
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
  );
};

const AnimatedNumber = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = value;
    const duration = 2000;
    const increment = end / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCurrent(end);
        clearInterval(timer);
      } else {
        setCurrent(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return <span>{prefix}{current.toLocaleString()}{suffix}</span>;
};

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen pt-32 pb-20 overflow-hidden flex items-center">
      {/* Background Aurora & Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />
      
      <Particles />

      <div className="container mx-auto px-5 md:px-10 lg:px-16 xl:px-20 relative z-10 max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          
          {/* Left Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-8 max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass w-fit border-blue-500/30 text-blue-200 text-sm font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              Sorsvexa AI Automation Agency
            </div>
            
            <h1 className="font-heading text-[36px] md:text-[52px] lg:text-[64px] font-bold tracking-tight text-white leading-[1.1]">
              Transform Your Business With <span className="text-gradient">Intelligent AI</span> Automation
            </h1>
            
            <p className="text-[16px] lg:text-[18px] text-muted-foreground leading-relaxed max-w-xl">
              We build AI-powered websites, chatbots, CRM systems, WhatsApp automation, and business workflows that help businesses save time, increase revenue, and scale faster.
            </p>
            
            <div className="flex flex-wrap items-center gap-4 mt-4">
              <a href="#contact">
                <MagneticButton className="px-8 py-4 text-base group">
                  <span className="flex items-center gap-2">
                    Book Free Consultation
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </MagneticButton>
              </a>
              <a href="tel:+917019820571">
                <MagneticButton className="px-8 py-4 text-base bg-white/5 border border-white/10 hover:bg-white/10 text-white">
                  Call Now
                </MagneticButton>
              </a>
            </div>
          </motion.div>

          {/* Right Content - Premium AI Command Center Visualization */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="relative h-[450px] sm:h-[550px] lg:h-[700px] w-full mt-10 lg:mt-0 scale-[0.7] sm:scale-[0.85] lg:scale-100 origin-top lg:origin-center"
          >
            {/* Background glowing orb for the dashboard */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none animate-pulse duration-1000" />
            
            {/* CARD 3: CRM Dashboard (Center piece) */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[380px] glass-card rounded-2xl p-6 shadow-2xl border-white/10 z-20 backdrop-blur-xl bg-[#0a1020]/80"
            >
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 flex items-center justify-center border border-blue-500/30">
                    <Activity className="h-5 w-5 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-white font-medium text-sm">CRM Dashboard</h3>
                    <p className="text-[10px] text-green-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> Live Data Sync
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-xs text-muted-foreground mb-1">New Leads</p>
                  <p className="text-2xl font-bold text-white"><AnimatedNumber value={28} /></p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-xs text-muted-foreground mb-1">Qualified</p>
                  <p className="text-2xl font-bold text-blue-400"><AnimatedNumber value={16} /></p>
                </div>
                <div className="bg-white/5 rounded-xl p-4 border border-white/5">
                  <p className="text-xs text-muted-foreground mb-1">Appointments</p>
                  <p className="text-2xl font-bold text-green-400"><AnimatedNumber value={11} /></p>
                </div>
                <div className="bg-gradient-to-br from-blue-900/40 to-blue-600/10 rounded-xl p-4 border border-blue-500/30">
                  <p className="text-xs text-blue-200 mb-1">Revenue Gen.</p>
                  <p className="text-xl font-bold text-white"><AnimatedNumber value={2.45} prefix="₹" suffix="L" /></p>
                </div>
              </div>
            </motion.div>

            {/* CARD 1: AI Assistant */}
            <motion.div
              animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute top-[5%] left-[5%] z-30 w-[280px] glass-card p-5 rounded-2xl shadow-[0_0_40px_rgba(37,99,235,0.15)] border-white/10 backdrop-blur-xl bg-[#0a1020]/90"
            >
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div className="bg-blue-600 p-1.5 rounded-lg">
                    <Bot className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">AI Assistant</span>
                </div>
                <span className="text-[10px] text-green-400 font-medium px-2 py-0.5 rounded-full bg-green-500/20">Online</span>
              </div>
              <div className="space-y-3">
                <div className="bg-white/5 p-3 rounded-lg rounded-tl-none border border-white/5 w-11/12">
                  <p className="text-[11px] text-muted-foreground mb-1">Customer</p>
                  <p className="text-xs text-white">Hi, I want to book an appointment.</p>
                </div>
                <div className="bg-blue-600/20 p-3 rounded-lg rounded-tr-none border border-blue-500/20 ml-auto w-11/12">
                  <p className="text-[11px] text-blue-300 mb-1 flex items-center gap-1"><Sparkles className="h-3 w-3"/> AI</p>
                  <p className="text-xs text-white">Sure! Please choose a preferred date and time.</p>
                </div>
                <div className="flex justify-end pt-1">
                  <p className="text-[10px] text-muted-foreground flex items-center gap-1">
                    <CheckCircle2 className="h-3 w-3 text-green-400" /> Responded in 2s
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CARD 4: Automation Workflow */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              className="absolute top-[20%] right-[-2%] z-10 w-[220px] glass-card p-5 rounded-2xl shadow-xl border-white/10 backdrop-blur-xl bg-[#0a1020]/80"
            >
              <div className="flex items-center gap-2 mb-4">
                <Zap className="h-4 w-4 text-yellow-400" />
                <span className="text-sm font-medium text-white">Workflow</span>
              </div>
              <div className="space-y-0 relative">
                <div className="absolute left-3 top-2 bottom-2 w-0.5 bg-gradient-to-b from-blue-500 via-green-400 to-blue-500 opacity-50 rounded-full" />
                {/* Animated glowing dot moving along the line */}
                <motion.div 
                  className="absolute left-2 w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_#fff]"
                  animate={{ top: ["0%", "100%", "0%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                />
                
                {[
                  { title: "Lead Received", color: "text-white" },
                  { title: "AI Qualification", color: "text-blue-400" },
                  { title: "CRM Updated", color: "text-white" },
                  { title: "Appointment", color: "text-green-400" },
                  { title: "Confirmation", color: "text-white" }
                ].map((step, idx) => (
                  <div key={idx} className="flex items-center gap-4 py-2 relative z-10">
                    <div className="w-6 h-6 rounded-full bg-[#0a1020] border-2 border-white/20 flex items-center justify-center shrink-0">
                      <div className="w-2 h-2 rounded-full bg-white/50" />
                    </div>
                    <span className={`text-xs font-medium ${step.color}`}>{step.title}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* CARD 2: WhatsApp Automation */}
            <motion.div
              animate={{ y: [0, -15, 0], x: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              className="absolute bottom-[20%] left-[2%] z-30 w-[260px] glass-card p-5 rounded-2xl shadow-xl border-white/10 backdrop-blur-xl bg-[#0a1020]/90"
            >
               <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <div className="bg-green-600 p-1.5 rounded-lg">
                    <MessageSquare className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm font-medium text-white">WhatsApp</span>
                </div>
                <span className="text-[10px] text-green-400 flex items-center gap-1">
                  ● Running
                </span>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-xs text-muted-foreground">Incoming Leads</span>
                  <span className="text-sm font-bold text-white"><AnimatedNumber value={28} /></span>
                </div>
                <div className="flex justify-between items-center border-b border-white/5 pb-2">
                  <span className="text-xs text-muted-foreground">Automated Msgs</span>
                  <span className="text-sm font-bold text-white"><AnimatedNumber value={104} /></span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-xs text-muted-foreground">Appts Booked</span>
                  <span className="text-sm font-bold text-green-400"><AnimatedNumber value={17} /></span>
                </div>
              </div>
            </motion.div>

            {/* CARD 5: Live Analytics */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              className="absolute top-[80%] left-[45%] -translate-x-1/2 z-20 w-[300px] glass-card p-5 rounded-2xl shadow-xl border-white/10 backdrop-blur-xl bg-[#0a1020]/90"
            >
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="h-4 w-4 text-blue-400" />
                <span className="text-sm font-medium text-white">Live Analytics</span>
              </div>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Conversion Rate</span>
                    <span className="text-white font-medium">72%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "72%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="h-full bg-blue-500 rounded-full" 
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Automation Success</span>
                    <span className="text-green-400 font-medium">99.8%</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "99.8%" }}
                      transition={{ duration: 1.5, delay: 0.7 }}
                      className="h-full bg-green-500 rounded-full" 
                    />
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground">Avg Response Time</span>
                    <span className="text-white font-medium">1.8s</span>
                  </div>
                  <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      animate={{ width: "15%" }}
                      transition={{ duration: 1.5, delay: 0.9 }}
                      className="h-full bg-blue-400 rounded-full" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CARD 6: Notification Card */}
            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: 2.5,
                type: "spring",
                stiffness: 100
              }}
              className="absolute bottom-[5%] right-[-5%] z-40 w-[280px] bg-gradient-to-br from-blue-900/90 to-[#0a1020]/90 p-4 rounded-2xl shadow-[0_0_30px_rgba(37,99,235,0.2)] border border-blue-500/50 backdrop-blur-xl"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 bg-green-500/20 rounded-full p-1 border border-green-500/50">
                  <Check className="h-3 w-3 text-green-400" />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-white mb-1">New Appointment Confirmed</h4>
                  <div className="space-y-1 mb-2">
                    <p className="text-[11px] text-muted-foreground flex justify-between">
                      <span>Client:</span> <span className="text-white">Rahul Sharma</span>
                    </p>
                    <p className="text-[11px] text-muted-foreground flex justify-between">
                      <span>Date & Time:</span> <span className="text-white">Tomorrow, 10:30 AM</span>
                    </p>
                  </div>
                  <p className="text-[10px] text-blue-300">CRM Updated Automatically</p>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
