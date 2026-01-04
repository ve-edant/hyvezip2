"use client";

import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Shield,
  Folder,
  TrendingUp,
  Star,
} from "lucide-react";
import Image from "next/image";
import { CometCard } from "./ui/comet-card";
import { AnimatedTooltip } from "./Home/animated-tooltip";
import { Montserrat } from "next/font/google";

const montserrat400 = Montserrat({
  subsets: ["latin"],
  weight: ["400"],
});

export function CoreFeatures() {
  const teamMembers = [
    { id: 1, name: "User 1", image: "/placeholder.svg?height=40&width=40" },
    { id: 2, name: "User 2", image: "/placeholder.svg?height=40&width=40" },
    { id: 3, name: "User 3", image: "/placeholder.svg?height=40&width=40" },
    { id: 4, name: "User 4", image: "/placeholder.svg?height=40&width=40" },
  ];

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
    <section className={`relative ${montserrat400.className} overflow-hidden`}>
      {/* Background gradient - Fixed positioning */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute bottom-0 z-5 right-0 w-full md:w-1/2 h-1/2 bg-linear-to-tl from-yellow-200 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10  container mx-auto px-4 py-16 sm:py-20 lg:py-24 ">
        <div className="text-center mb-16">
          <motion.span
            className="inline-block px-4 py-1.5 rounded-full bg-[#fff4e5] text-sm font-medium text-[#1e1a16] mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            Core Features
          </motion.span>
          <motion.h2
            className="text-3xl md:text-5xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="flex flex-wrap justify-center gap-2">
              {["Everything", "You", "Need", "to"].map((word, i) => (
                <span key={i} className="inline-block">
                  {word}
                </span>
              ))}
              <span className="inline-block bg-clip-text text-transparent bg-gradient-to-r from-[#f1ac13] to-yellow-400">
                Thrive
              </span>
            </div>
          </motion.h2>
          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            HYVE provides all the tools and structure for teams to collaborate
            effectively and get paid fairly.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {/* Left side - 2x2 grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Build or Join Teams */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-card hover:bg-[#fff4e5] transition-all duration-300 hover:border-[#f1ac13]/50 hover:shadow-lg hover:shadow-[#f1ac13]/5 hover:-translate-y-1">
                {/* Main Content */}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#fff4e5] group-hover:bg-white flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                    <Users className="w-6 h-6 text-[#f1ac13]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Build or Join Teams
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Create your own team with handpicked talent or discover
                    teams that need your skills.
                  </p>
                </div>

                {/* Expandable Content */}
                <div className="max-h-0 group-hover:max-h-32 transition-all duration-300 ease-in-out overflow-hidden">
                  {/* Divider Line */}
                  <div className="px-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#f1ac13]/30 to-transparent" />
                  </div>

                  {/* Hidden Content */}
                  <div className="px-6 py-4">
                    <p className="text-sm font-semibold text-[#f1ac13]">
                      4,200+ active teams
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Work on Large Projects */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-card hover:bg-[#fff4e5] transition-all duration-300 hover:border-[#f1ac13]/50 hover:shadow-lg hover:shadow-[#f1ac13]/5 hover:-translate-y-1">
                {/* Main Content */}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#fff4e5] group-hover:bg-white flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                    <Briefcase className="w-6 h-6 text-[#f1ac13]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Work on Large Projects
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Access enterprise-level projects that require diverse skills
                    — impossible for solo freelancers.
                  </p>
                </div>

                {/* Expandable Content */}
                <div className="max-h-0 group-hover:max-h-32 transition-all duration-300 ease-in-out overflow-hidden">
                  {/* Divider Line */}
                  <div className="px-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#f1ac13]/30 to-transparent" />
                  </div>

                  {/* Hidden Content */}
                  <div className="px-6 py-4">
                    <p className="text-sm font-semibold text-[#f1ac13]">
                      ₹10Cr+ in enterprise projects
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Secure Milestone Payments */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-card hover:bg-[#fff4e5] transition-all duration-300 hover:border-[#f1ac13]/50 hover:shadow-lg hover:shadow-[#f1ac13]/5 hover:-translate-y-1">
                {/* Main Content */}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#fff4e5] group-hover:bg-white flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                    <Shield className="w-6 h-6 text-[#f1ac13]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Secure Milestone Payments
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    Funds held in escrow and released as milestones are
                    completed. No payment anxiety.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-muted-foreground">
                        Milestone Progress
                      </span>
                      <span className="text-[#f1ac13] font-semibold">75%</span>
                    </div>
                    <div className="h-2 bg-[#fff4e5] rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-r from-[#f1ac13] to-[#d99910] w-3/4 rounded-full transition-all duration-500" />
                    </div>
                  </div>
                </div>

                {/* Expandable Content */}
                {/* <div className="max-h-0 group-hover:max-h-32 transition-all duration-300 ease-in-out overflow-hidden">
                  
                  <div className="px-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#f1ac13]/30 to-transparent" />
                  </div>

                  
                  <div className="px-6 py-4">
                    <p className="text-sm font-semibold text-[#f1ac13]">
                      100% payment security guaranteed
                    </p>
                  </div>
                </div> */}
              </div>
            </motion.div>

            {/* Portfolio with Real Work */}
            <motion.div
              className="group relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <div className="overflow-hidden h-full rounded-2xl border border-border bg-card hover:bg-[#fff4e5] transition-all duration-300 hover:border-[#f1ac13]/50 hover:shadow-lg hover:shadow-[#f1ac13]/5 hover:-translate-y-1">
                {/* Main Content */}
                <div className="p-6">
                  <div className="w-12 h-12 rounded-xl bg-[#fff4e5] group-hover:bg-white flex items-center justify-center mb-4 transition-all duration-300 group-hover:scale-110">
                    <Folder className="w-6 h-6 text-[#f1ac13]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    Portfolio with Real Work
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Showcase collaborative projects and verified client reviews.
                  </p>
                </div>

                {/* Expandable Content */}
                {/* <div className="max-h-0 group-hover:max-h-32 transition-all duration-300 ease-in-out overflow-hidden">
                  
                  <div className="px-6">
                    <div className="h-px bg-gradient-to-r from-transparent via-[#f1ac13]/30 to-transparent" />
                  </div>

                  
                  <div className="px-6 py-4">
                    <p className="text-sm font-semibold text-[#f1ac13]">
                      15K+ verified portfolios
                    </p>
                  </div>
                </div> */}
              </div>
            </motion.div>
          </div>

          {/* Right side - Large card */}
          <motion.div
            className="group relative h-full" // Add h-full here
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <CometCard className="group relative w-full h-full">
              <div className="h-full flex flex-col justify-between w-full p-6 rounded-2xl border border-border hover:border-[#f1ac13]/50 bg-white transition-all duration-300 relative overflow-hidden">
                {/* Decorative gradient circle */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#f1ac13]/50 to-transparent rounded-bl-full"></div>
                <div className="absolute top-4 right-4">
                  <div
                    className="w-3 h-3 rounded-full bg-green-500"
                    style={{ transform: "scale(1.14436)" }}
                  ></div>
                </div>

                {/* Top Rated Badge */}
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-[#f1ac13] fill-[#f1ac13]" />
                  <span className="text-sm font-medium text-[#f1ac13]">
                    Top Rated Team
                  </span>
                </div>

                {/* Team Name */}
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  PixelCraft Studio
                </h3>
                <p className="text-sm text-muted-foreground mb-6">
                  Full-stack design & development
                </p>

                {/* Team Members */}
                <div className="mb-6">
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide mb-2 block">
                    Team Members
                  </span>
                  <div className="flex -space-x-2">
                    <AnimatedTooltip items={users} />
                  </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-1">
                      Total Earned
                    </span>
                    <span className="text-2xl font-bold text-foreground">
                      ₹24L+
                    </span>
                  </div>
                  <div>
                    <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide block mb-1">
                      Projects
                    </span>
                    <span className="text-2xl font-bold text-foreground">
                      47+
                    </span>
                  </div>
                </div>

                {/* Growth indicator */}
                <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f1ac13]/10 border border-[#f1ac13]/20">
                  <TrendingUp className="w-4 h-4 text-[#f1ac13]" />
                  <span className="text-sm font-medium text-[#f1ac13]">
                    +32%
                  </span>
                  <span className="text-sm text-muted-foreground">
                    earnings this month
                  </span>
                </div>
              </div>
            </CometCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
