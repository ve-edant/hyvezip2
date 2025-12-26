import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  image: string;
}

interface AnimatedTooltipProps {
  items: TeamMember[];
}

export const AnimatedTooltip = ({ items }: AnimatedTooltipProps) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex -space-x-3">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.div
                initial={{ opacity: 0, y: 10, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.9 }}
                transition={{ duration: 0.2 }}
                className="absolute -top-16 left-1/2 -translate-x-1/2 z-50"
              >
                <div className="bg-foreground text-background px-3 py-2 rounded-lg text-sm whitespace-nowrap shadow-xl">
                  <p className="font-semibold">{item.name}</p>
                  <p className="text-xs opacity-80">{item.role}</p>
                </div>
                <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-foreground" />
              </motion.div>
            )}
          </AnimatePresence>
          <motion.img
            src={item.image}
            alt={item.name}
            className="w-10 h-10 rounded-full border-2 border-background object-cover cursor-pointer"
            whileHover={{ scale: 1.1, zIndex: 10 }}
            style={{ zIndex: items.length - idx }}
          />
        </div>
      ))}
    </div>
  );
};
