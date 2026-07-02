"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { MagneticButton } from "../ui/magnetic-button";

const plans = [
  {
    name: "Starter",
    description: "Perfect for small businesses looking to automate basic tasks.",
    price: "$999",
    period: "/month",
    features: [
      "Custom AI Chatbot",
      "Basic WhatsApp Automation",
      "Standard CRM Setup",
      "5 Automated Workflows",
      "Email Support",
    ],
    popular: false,
  },
  {
    name: "Professional",
    description: "Ideal for growing companies needing comprehensive systems.",
    price: "$2,499",
    period: "/month",
    features: [
      "Advanced AI Agent",
      "Omnichannel Automation",
      "Custom CRM Integration",
      "Unlimited Workflows",
      "Lead Generation Engine",
      "Priority Support (24/7)",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    description: "For large organizations requiring bespoke AI infrastructure.",
    price: "Custom",
    period: "",
    features: [
      "Dedicated Engineering Team",
      "Custom AI Model Training",
      "Legacy System Integration",
      "On-Premise Deployment Options",
      "White-label Solutions",
      "Dedicated Account Manager",
    ],
    popular: false,
  }
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-32 relative border-t border-white/5 bg-black">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="container mx-auto px-5 md:px-10 lg:px-16 xl:px-20 max-w-7xl relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Transparent <span className="text-gradient">Pricing</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Invest in systems that pay for themselves. Simple pricing, no hidden fees, massive ROI.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative glass-card rounded-3xl p-8 flex flex-col ${
                plan.popular ? "border-blue-500/50 shadow-[0_0_40px_rgba(37,99,235,0.2)] lg:scale-105 bg-[#0a1020]/90" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-blue-600 rounded-full text-xs font-bold tracking-wider text-white uppercase shadow-lg">
                  Most Popular
                </div>
              )}
              
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm h-10">{plan.description}</p>
              </div>
              
              <div className="mb-8">
                <span className="text-5xl font-bold text-white">{plan.price}</span>
                <span className="text-muted-foreground">{plan.period}</span>
              </div>
              
              <ul className="space-y-4 mb-8 flex-1">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-white/80">
                    <Check className="h-5 w-5 text-blue-400 shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <MagneticButton 
                className={`w-full justify-center ${
                  plan.popular ? "" : "bg-white/5 border border-white/10 hover:bg-white/10 text-white"
                }`}
              >
                Get Started
              </MagneticButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
