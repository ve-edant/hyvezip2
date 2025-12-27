import { motion } from "framer-motion";

interface TrustItem {
  text: string;
  icon?: string;
}

interface InfiniteMovingCardsProps {
  items: TrustItem[];
  speed?: "slow" | "normal" | "fast";
}

export const InfiniteMovingCards = ({
  items,
  speed = "normal",
}: InfiniteMovingCardsProps) => {
  const speedMap = {
    slow: "40s",
    normal: "30s",
    fast: "20s",
  };

  const duplicatedItems = [...items, ...items];

  return (
    <div className="relative overflow-hidden py-4 bg-foreground">
      <motion.div
        className="flex gap-8 items-center whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          duration: parseInt(speedMap[speed]),
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {duplicatedItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 px-6 py-2 text-background/80 text-sm font-medium"
          >
            {item.icon && <span className="text-primary">{item.icon}</span>}
            <span>{item.text}</span>
            <span className="text-primary ml-4">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};
