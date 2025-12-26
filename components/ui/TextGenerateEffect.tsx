import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  highlightWord?: string;
  highlightClassName?: string;
}

export const TextGenerateEffect = ({
  words,
  className = "",
  highlightWord,
  highlightClassName = "",
}: TextGenerateEffectProps) => {
  const controls = useAnimation();
  const wordsArray = words.split(" ");

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const child = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: "blur(10px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.4,
        ease: "easeOut" as const,
      },
    },
  };

  return (
    <motion.div
      className={`inline-flex flex-wrap ${className}`}
      variants={container}
      initial="hidden"
      animate={controls}
    >
      {wordsArray.map((word, idx) => (
        <motion.span
          key={idx}
          variants={child}
          className={`mr-2 ${
            word === highlightWord ? highlightClassName : ""
          }`}
        >
          {word}
        </motion.span>
      ))}
    </motion.div>
  );
};
