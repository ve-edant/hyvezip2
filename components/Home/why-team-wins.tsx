"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Zap, DollarSign, Users, Rocket } from "lucide-react";
import { HoverEffectCard } from "@/components/ui/hover-effect-card";
import { Montserrat } from "next/font/google";

const montserrat400 = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

const benefits = [
  {
    title: "Faster Delivery",
    description:
      "Multiple skilled professionals working together means projects are completed 3x faster than solo work.",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    title: "Higher Payouts",
    description:
      "Teams can take on larger, more lucrative projects. Average team earnings are 40% higher than solo.",
    icon: <DollarSign className="w-5 h-5" />,
  },
  {
    title: "Shared Responsibility",
    description:
      "Distribute workload fairly, cover for each other, and reduce individual burnout and stress.",
    icon: <Users className="w-5 h-5" />,
  },
  {
    title: "Long-term Growth",
    description:
      "Build lasting professional relationships, learn from peers, and grow your network exponentially.",
    icon: <Rocket className="w-5 h-5" />,
  },
];

export const WhyTeamsWin = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className={`${montserrat400.className} py-24 md:py-32 bg-[#fbfbf9]`} ref={ref}>
      <div className="mx-auto max-w-7xl px-4">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-[#fff4e5] text-sm font-medium text-[#1e1a16] mb-4">
            The Team Advantage
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-[#1e1a16] mb-4">
            Better Work Happens in{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#f1ac13] to-yellow-400">
              Teams
            </span>
          </h2>

          <p className="text-[#5c5244] max-w-2xl mx-auto">
            Solo freelancing has limits. Teams break through those barriers and unlock new possibilities.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, idx) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <HoverEffectCard
                title={benefit.title}
                description={benefit.description}
                icon={benefit.icon}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
