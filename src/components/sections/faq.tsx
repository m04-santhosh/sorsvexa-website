"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How long does it take to deploy an AI solution?",
    answer: "Most of our automated systems are deployed within 2 to 4 weeks. Complex enterprise integrations may take 6 to 8 weeks depending on the existing infrastructure.",
  },
  {
    question: "Do I need technical knowledge to use these systems?",
    answer: "Not at all. We design our automation systems to be entirely frictionless. You'll manage everything through intuitive dashboards and receive automated reports.",
  },
  {
    question: "Will AI replace my current employees?",
    answer: "AI doesn't replace employees; it augments them. By automating repetitive tasks, your team can focus on high-value, strategic work that requires human creativity and empathy.",
  },
  {
    question: "Is my business data secure?",
    answer: "Security is our top priority. We use enterprise-grade encryption, comply with major data protection regulations, and offer on-premise deployment options for highly sensitive data.",
  },
  {
    question: "What is the expected ROI?",
    answer: "Our clients typically see a complete return on their investment within the first 3 to 4 months through saved labor hours, increased lead conversion, and reduced operational bottlenecks.",
  }
];

export default function FAQSection() {
  return (
    <section className="py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6 max-w-4xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about partnering with Sorsvexa.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="glass-card rounded-3xl p-8"
        >
          <Accordion className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/10">
                <AccordionTrigger className="text-left text-lg font-medium text-white hover:text-blue-400 hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed text-base pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
