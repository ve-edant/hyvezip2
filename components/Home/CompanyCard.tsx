"use client"

import { motion } from "framer-motion"
import { Star, Users, Verified, Clock, TrendingUp } from "lucide-react"
import { TiltCard } from "../ui/TiltCard" 
import { AnimatedTooltip } from "../ui/AnimatedTooltip" 
import { AnimatedCounter } from "../ui/AnimatedCounter" 

const teamMembers = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Tech Lead",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Maya Patel",
    role: "Lead Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Jordan Lee",
    role: "Sr. Developer",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Sarah Kim",
    role: "PM",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
  },
]

const capabilities = ["Web Dev", "Mobile", "Design", "DevOps"]

export const CompanyCard = () => {
  return (
    <TiltCard className="w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl"
      >
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="relative w-14 h-14 sm:w-16 sm:h-16 bg-primary/10 rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0">
            <Users className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-card flex items-center justify-center">
              <Verified className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-black" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              <h3 className="font-bold text-base sm:text-lg text-foreground truncate">Apex Digital Team</h3>
            </div>
            <p className="text-muted-foreground text-xs sm:text-sm">Full-Stack Product Squad</p>
            <div className="flex items-center gap-1 mt-1 flex-wrap">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-[#f1ac13] text-[#f1ac13]" />
                ))}
              </div>
              <span className="text-xs sm:text-sm text-muted-foreground ml-1">4.9 (47 projects)</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {capabilities.map((cap) => (
            <span
              key={cap}
              className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-muted text-muted-foreground text-xs sm:text-sm font-medium rounded-lg"
            >
              {cap}
            </span>
          ))}
        </div>

        <div className="bg-muted/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4">
          <div className="flex items-center justify-between mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-medium text-foreground">Team Members</span>
            <span className="text-xs text-muted-foreground">Available Now</span>
          </div>
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <AnimatedTooltip items={teamMembers} />
            <span className="px-2 sm:px-2.5 py-0.5 sm:py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium whitespace-nowrap">
              Ready to deploy
            </span>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3 sm:gap-4 mt-3 sm:mt-4">
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-[#f1ac13]">
                <AnimatedCounter value={23} suffix="%" prefix="+" />
              </div>
              <div className="text-xs text-muted-foreground">Faster delivery</div>
            </div>
            <div className="text-center">
              <div className="text-xl sm:text-2xl font-bold text-[#f1ac13]">
                <AnimatedCounter value={98} suffix="%" />
              </div>
              <div className="text-xs text-muted-foreground">Client satisfaction</div>
            </div>
          </div>
        </div>

        <div className="bg-yellow-soft rounded-xl sm:rounded-2xl p-3 sm:p-4">
          <div className="flex items-center justify-between mb-2 gap-2">
            <span className="text-xs sm:text-sm font-medium text-foreground">Blended Team Rate</span>
            <div className="flex items-center gap-1 text-primary">
              <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="text-xs font-medium whitespace-nowrap">Top 10%</span>
            </div>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-foreground">
            <AnimatedCounter value={16700} prefix="₹" suffix="/hr" />
          </div>
          <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-muted-foreground">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span>Avg. project: 6-8 weeks</span>
          </div>
        </div>
      </motion.div>
    </TiltCard>
  )
}
