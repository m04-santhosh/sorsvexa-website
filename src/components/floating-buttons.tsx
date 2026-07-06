"use client";

import { MessageCircle, Phone } from "lucide-react";
import { motion } from "framer-motion";

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-50 flex flex-col gap-3 md:gap-4 scale-90 md:scale-100 origin-bottom-right">
      {/* WhatsApp Button */}
      <motion.a
        href="https://wa.me/919742306859"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-lg shadow-green-500/30 transition-shadow hover:shadow-green-500/50"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="sr-only">WhatsApp Us</span>
      </motion.a>

      {/* Call Button */}
      <motion.a
        href="tel:+919742306859"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/30 transition-shadow hover:shadow-blue-600/50"
      >
        <Phone className="h-6 w-6" />
        <span className="sr-only">Call Us</span>
      </motion.a>
    </div>
  );
}
