"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  FileText,
  Users,
  MessageSquare,
  ShieldCheck,
  Check,
  Star,
  Sparkles,
  ArrowRight,
  Zap,
  Crown,
  TrendingUp,
  Lock,
  Send,
  Rocket,
  Target,
  Award,
  SquareArrowOutUpRight,
} from "lucide-react";
import { StickyScroll } from "@/components/sticky-scroll";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { LayoutTextFlip } from "../ui/layout-text-flip";
import { Montserrat } from "next/font/google";
import { steps } from "./Steps";

const montserrat400 = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

interface Step {
  title: string;
  description: string;
  cta?: string;
  content?: React.ReactNode;
}

interface StepCardProps {
  step: Step
  onClick: () => void;
  index: number;
  isActive: boolean;
  totalSteps: number;
}
const StepCard = ({
  step,
  index,
  isActive,
  onClick,
  totalSteps,
}: StepCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      onClick={onClick}
      className="cursor-pointer"
    >
      <div
        className={`relative p-4 sm:p-6 pb-16 rounded-2xl border-2 transition-all duration-500 ${
          isActive
            ? "border-[#f5c55a] bg-gradient-to-r from-white via-[#f1ac13]/5 to-white shadow-xl"
            : "border-[#fbe6b8] bg-[#fffbf5] hover:border-[#fff4e6]/50 hover:shadow-lg"
        }`}
      >
        {/* Step number + content */}
        <div className="flex items-start gap-4">
          <div className="flex-1 min-w-0">
            {/* ================= TITLE ROW ================= */}
            <div className="flex items-center justify-between gap-4 mb-3">
              {/* LEFT: Badge + Title (one hierarchy block) */}
              <div className="flex items-center gap-3 min-w-0">
                {/* Step badge */}
                <motion.div
                  animate={{ scale: isActive ? 1.05 : 1 }}
                  className={`
        flex-shrink-0 
        px-3 py-1.5 
        rounded-lg 
        border 
        text-xs font-mono font-semibold 
        tracking-wide
        ${
          isActive
            ? "bg-white text-gray-900 border-gray-400"
            : "bg-[#f4f4f4] text-gray-500 border-gray-400"
        }
      `}
                >
                  {String(index + 1).padStart(2, "0")}
                </motion.div>

                {/* Title */}
                <h3
                  className={`
        text-base sm:text-lg font-semibold truncate
        transition-colors
        ${isActive ? "text-gray-900" : "text-gray-600"}
      `}
                >
                  {step.title}
                </h3>
              </div>

              {/* RIGHT: Arrow toggle (lowest hierarchy) */}
              <motion.span
                initial={false}
                animate={{ rotate: isActive ? 90 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="bg-[#f8d689] rounded-full p-2 text-sm"
              >
                <ChevronRight />
              </motion.span>
            </div>

            {/* Mobile content */}
            <div className="lg:hidden">
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden mb-4"
                  >
                    <div className="py-4">{step.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Description */}
            <AnimatePresence mode="wait">
              {isActive && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-sm sm:text-base text-gray-600 leading-relaxed"
                >
                  {step.description}
                </motion.p>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* ===================== BOTTOM UI (ACTIVE ONLY) ===================== */}
        <AnimatePresence>
          {isActive && (
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 8 }}
              transition={{ duration: 0.25 }}
              className="mt-6 flex items-end justify-between"
            >
              {/* CTA – bottom left */}
              <motion.button
                whileHover={{ x: 4 }}
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#f1ac13]"
                onClick={(e) => e.stopPropagation()}
              >
                <span>Join Us</span>
                <span className="inline-block -rotate-45deg text-base">
                  <SquareArrowOutUpRight />
                </span>
              </motion.button>

              {/* Progress – bottom right */}
              <div className="flex items-center gap-3">
                <div className="w-28 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-[#f1ac13] to-[#f1ac13]/70"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "easeOut" }}
                  />
                </div>
                <span className="text-xs font-medium text-gray-500">100%</span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const StickyScrollCarousel = ({ steps } : { steps: Step[] }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const handleNext = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % steps.length);
  }, [steps.length]);

  const handlePrev = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + steps.length) % steps.length);
  }, [steps.length]);

  // Auto-play
  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(handleNext, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, isPaused, handleNext]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
      {/* Header */}
      <div className="relative flex flex-col mb-4 items-center text-center">
        {/* ================= BACKGROUND GLOW ================= */}
        <motion.div
          className="pointer-events-none absolute inset-0 -z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#f1ac13]/10 rounded-full blur-[100px]" />
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[200px] bg-[#f1ac13]/15 rounded-full blur-[80px]"
            animate={{ scale: [1, 1.15, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* ================= BADGE ================= */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 180, damping: 14 }}
          className="relative inline-flex items-center gap-3 px-6 py-2.5 mb-8
               text-sm font-semibold text-[#f1ac13]
               border border-[#f1ac13]/30 rounded-full
               bg-gradient-to-r from-[#f1ac13]/15 via-[#f1ac13]/5 to-[#f1ac13]/15
               shadow-lg shadow-[#f1ac13]/10 overflow-hidden"
        >
          {/* Shimmer */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f1ac13]/20 to-transparent"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
          />

          {/* Icon */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="relative z-10"
          >
            <Sparkles className="w-5 h-5" />
          </motion.div>

          <span className="relative z-10 tracking-wide">How It Works</span>
        </motion.div>

        {/* ================= HEADING ================= */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl sm:text-5xl lg:text-6xl font-medium text-gray-900 leading-none text-balance mb-6"
        >
          Simple Steps to{" "}
          <span className="relative inline-block">
            <span className="relative z-10 bg-gradient-to-r from-[#f1ac13] via-[#f1ac13] to-[#f1ac13]/80 bg-clip-text text-transparent">
              Success
            </span>

            <motion.div
              className="absolute -bottom-2 left-0 right-0 h-4 bg-[#f1ac13]/20 rounded-full blur-lg origin-left"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.45, duration: 0.5, ease: "easeOut" }}
            />

            <motion.svg
              className="absolute -bottom-3 left-0 w-full"
              viewBox="0 0 200 12"
              initial={{ pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" }}
            >
              <motion.path
                d="M0 6 Q 50 12, 100 6 T 200 6"
                stroke="#f1ac13"
                strokeWidth="4"
                fill="none"
                strokeLinecap="round"
              />
            </motion.svg>
          </span>
        </motion.h2>

        {/* ================= DESCRIPTION ================= */}
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
          className="text-muted-foreground max-w-2xl text-lg lg:text-xl leading-relaxed"
        >
          From posting your project to secure payment, we've streamlined the
          entire process for seamless collaboration.
        </motion.p>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
        {/* Left: Steps */}
        <div className="lg:col-span-6 space-y-4">
          {steps.map((step, index) => (
            <StepCard
              key={index}
              step={step}
              index={index}
              isActive={activeIndex === index}
              onClick={() => {
                setActiveIndex(index);
                setIsPaused(false);
              }}
              totalSteps={steps.length}
            />
          ))}
        </div>

        {/* Right: Content Carousel (Desktop only) */}
        <div className="hidden lg:block lg:col-span-6">
          <div
            className="sticky top-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            <div className="relative aspect-square overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, filter: "blur(6px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)" }}
                  exit={{ opacity: 0, filter: "blur(6px)" }}
                  transition={{
                    duration: 0.35,
                    ease: "easeOut",
                  }}
                  className="absolute inset-0"
                >
                  {steps[activeIndex].content}
                </motion.div>
              </AnimatePresence>

              {/* Navigation Controls */}
              <div className="absolute bottom-6 right-6 flex gap-3 z-20">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handlePrev();
                  }}
                  className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-md border border-gray-200 flex items-center justify-center text-gray-900 hover:bg-white transition-all active:scale-90 shadow-lg"
                  aria-label="Previous"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleNext();
                  }}
                  className="w-12 h-12 rounded-full bg-[#f1ac13] backdrop-blur-md border border-[#f1ac13]/50 flex items-center justify-center text-white hover:bg-[#d99a11] transition-all active:scale-90 shadow-lg"
                  aria-label="Next"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>

              {/* Progress Dots */}
              <div className="absolute bottom-6 left-6 flex gap-2 z-20">
                {steps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`h-2 rounded-full transition-all ${
                      index === activeIndex
                        ? "w-8 bg-[#f1ac13]"
                        : "w-2 bg-white border-2 border-[#f1ac13] hover:bg-[#f1ac13]"
                    }`}
                    aria-label={`Go to step ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  return (
    <section
      id="how-it-works"
      className={`relative ${montserrat400.className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none z-10" />

      <StickyScrollCarousel steps={steps} />

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
    </section>
  );
};

export default HowItWorks;
