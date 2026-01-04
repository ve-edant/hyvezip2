"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/Home/Navbar";
import HeroSection from "@/components/Home/hero-section";
import { Companies } from "@/components/Home/companies";
import { ProblemSolution } from "@/components/Home/problem-solution";
import { CoreFeatures } from "@/components/core-features";
import { TabbedSection } from "@/components/Home/tabbed-section";
import { StickyScroll } from "@/components/Home/gsap-sticky-scroll";
import { WhyTeamsWin } from "@/components/Home/why-team-wins";
import ScrollableSteps from "@/components/Home/scrollble-steps";
import VerticalTabs from "@/components/Home/stacked-list";

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-white">
      <HeroSection />
      <Companies />
      <ProblemSolution />
      <section className="relative w-full flex justify-center">
        <VerticalTabs />
      </section>
      <CoreFeatures />
      <TabbedSection />
      <WhyTeamsWin />
    </div>
  );
}
