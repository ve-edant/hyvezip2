import { motion } from "framer-motion";
import { ReactNode } from "react";

interface ShimmerButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}

export const ShimmerButton = ({
  children,
  onClick,
  className = "",
}: ShimmerButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`
        relative overflow-hidden
        px-8 py-4 rounded-xl
        bg-primary text-primary-foreground
        font-semibold text-lg
        shadow-lg hover:shadow-xl
        transition-shadow duration-300
        ${className}
      `}
    >
      {/* Shimmer effect */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          duration: 2,
          repeat: Infinity,
          repeatDelay: 1,
          ease: "linear",
        }}
      />
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </motion.button>
  );
};
