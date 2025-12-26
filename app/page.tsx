"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Home/Navbar";
import HeroSection from "@/components/Home/hero-section";
import { Companies } from "@/components/Home/companies";
import { ProblemSolution } from "@/components/Home/problem-solution";
import StickyScrollRevealDemo from "@/components/sticky-scroll-reveal-demo";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import { CoreFeatures } from "@/components/core-features";
import { TabbedSection } from "@/components/Home/tabbed-section";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <Navbar />
      <HeroSection />
      <ProblemSolution />
      <StickyScroll />
      <CoreFeatures />
      <TabbedSection />
      <section className="h-screen w-full bg-red-300"></section>
    </div>
  );
}
