"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

interface HoverCardProps {
  title: string;
  description: string;
  icon: ReactNode;
}

export const HoverEffectCard = ({ title, description, icon }: HoverCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="
        group relative p-6 rounded-2xl 
        border border-[#e7e5df] 
        bg-white 
        hover:border-[#f1ac13]/30 
        hover:shadow-lg hover:shadow-[#f1ac13]/10 
        transition-all duration-300
      "
    >
      {/* Gradient overlay on hover */}
      <div
        className="
          absolute inset-0 rounded-2xl 
          bg-gradient-to-br from-[#f1ac13]/5 via-transparent to-transparent
          opacity-0 group-hover:opacity-100
          transition-opacity
        "
      />

      <div className="relative z-10">
        <div
          className="
            w-10 h-10 rounded-lg 
            bg-[#fff4e5] 
            flex items-center justify-center mb-4 
            transition-colors
            group-hover:bg-[#f1ac13] 
            group-hover:text-black
          "
        >
          {icon}
        </div>

        <h3 className="text-lg font-semibold text-[#1e1a16] mb-2">
          {title}
        </h3>
        <p className="text-sm text-[#5c5244]">
          {description}
        </p>
      </div>
    </motion.div>
  );
};
