"use client";

import { motion } from "framer-motion";
import { Zap, Activity, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AnimatedTooltip } from "@/components/Home/animated-tooltip";
import { Montserrat } from "next/font/google";
import { AnimatedShinyText } from "../ui/shiny-text";
import { AnimatedShinyTextDemo } from "./animated-shiny-text";

const montserrat400 = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

const HeroText = () => {
  const users = [
    {
      id: 1,
      name: "Sarah Johnson",
      designation: "Freelance Designer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
    },
    {
      id: 2,
      name: "Michael Chen",
      designation: "Software Engineer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      designation: "Marketing Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
    {
      id: 4,
      name: "David Kim",
      designation: "Product Manager",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
    },
    {
      id: 5,
      name: "Lisa Anderson",
      designation: "UX Designer",
      image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
    },
  ];

  return (
    <div
      className={`${montserrat400.className} space-y-5 lg:space-y-6 order-2 lg:order-1 z-10`}
    >
      <motion.div
        className="flex items-center gap-2"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <AnimatedShinyTextDemo />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 leading-none text-balance">
          Freelancing, <br />
          <span className="text-[#f1ac13]">Built for Teams</span>
        </h1>
      </motion.div>

      <motion.p
        className="text-md lg:text-lg text-black leading-relaxed max-w-xl text-pretty"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
      >
        HYVE is a team-based freelancing platform where freelancers collaborate,
        companies hire verified teams, and payments stay secure.
      </motion.p>

      <motion.div
        className="
    flex flex-col md:flex-row
    items-center md:items-start
    justify-center md:justify-start
    gap-4
    w-full
  "
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
      >
        <Button
          variant="outline"
          className="
      w-full md:w-auto
      gap-2
      text-gray-700
      border-gray-300
      bg-transparent
      hover:bg-gray-50
      py-3
    "
        >
          Learn more
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 3V13M8 13L12 9M8 13L4 9"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>

        <Button
          className="
      w-full md:w-auto
      gap-2
      bg-[#f1ac13]
      hover:bg-[#d99910]
      text-white
      shadow-lg shadow-[#f1ac13]/30
      py-3
    "
        >
          Start now
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 3L11 8L6 13"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Button>
      </motion.div>

      <motion.div
        className="flex mb-2 flex-col sm:flex-row sm:flex-wrap items-start sm:items-center gap-4 sm:gap-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.6 }}
      >
        <div className="flex items-center gap-5">
          <div className="flex items-center">
            <AnimatedTooltip items={users} />
          </div>
          {/* Text */}
          <div className="flex flex-col gap-0.5 sm:gap-1">
            <span className="text-xs sm:text-sm md:text-base text-gray-700">
              500+ active users daily
            </span>
            <p className="text-xs sm:text-sm text-gray-600 leading-snug sm:leading-normal">
              Join the community that grows with us.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HeroText;
