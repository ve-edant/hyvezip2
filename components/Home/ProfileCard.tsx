"use client"

import { motion } from "framer-motion"
import { Star, CheckCircle2, Clock } from "lucide-react"
import { TiltCard } from "../ui/TiltCard"
import { AnimatedTooltip } from "../ui/AnimatedTooltip"
import { AnimatedCounter } from "../ui/AnimatedCounter"

const teamMembers = [
  {
    id: 1,
    name: "Alex Chen",
    role: "Backend Dev",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Maya Patel",
    role: "Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Jordan Lee",
    role: "Frontend Dev",
    image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop&crop=face",
  },
]

const skills = ["React", "TypeScript", "Node.js", "UI/UX"]

export const ProfileCard = () => {
  return (
    <TiltCard className="w-full">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="bg-card rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-gray-200 shadow-sm transition-all duration-300 hover:shadow-xl"
      >
        <div className="flex items-start gap-3 sm:gap-4 mb-4 sm:mb-6">
          <div className="relative flex-shrink-0">
            <img
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="Sarah Martinez"
              className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl object-cover"
            />
            <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-green-500 rounded-full border-2 border-card" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base sm:text-lg text-foreground truncate">Sarah Martinez</h3>
            <p className="text-muted-foreground text-xs sm:text-sm">Full-Stack Developer</p>
            <div className="flex items-center gap-1 mt-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-primary text-primary" />
              ))}
              <span className="text-xs sm:text-sm text-muted-foreground ml-1">5.0</span>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
          {skills.map((skill) => (
            <span
              key={skill}
              className="px-2.5 sm:px-3 py-1 sm:py-1.5 bg-muted text-muted-foreground text-xs sm:text-sm font-medium rounded-lg"
            >
              {skill}
            </span>
          ))}
        </div>

        <div className="bg-muted/50 rounded-xl sm:rounded-2xl p-3 sm:p-4 mb-3 sm:mb-4">
          <div className="flex items-center justify-between mb-2 sm:mb-3 gap-2">
            <span className="text-xs sm:text-sm font-medium text-foreground">Active Team</span>
            <span className="text-xs text-muted-foreground truncate max-w-[150px] sm:max-w-none">
              Web Platform Rebuild
            </span>
          </div>
          <div className="flex items-center justify-between mb-3 sm:mb-4">
            <AnimatedTooltip items={teamMembers} />
            <span className="text-xs sm:text-sm text-muted-foreground">+2 more</span>
          </div>

          {/* Progress */}
          <div className="mt-3 sm:mt-4">
            <div className="flex justify-between text-xs sm:text-sm mb-2">
              <span className="text-muted-foreground">Project Progress</span>
              <span className="font-medium text-foreground">8/12 milestones</span>
            </div>
            <div className="h-2 bg-muted rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "66%" }}
                transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
                className="h-full bg-primary rounded-full"
              />
            </div>
          </div>
        </div>

        <div className="bg-yellow-soft rounded-xl sm:rounded-2xl p-3 sm:p-4">
          <div className="flex items-center justify-between mb-2 gap-2">
            <span className="text-xs sm:text-sm font-medium text-foreground">Team Project Value</span>
            <div className="flex items-center gap-1 px-2 py-0.5 bg-green-100 text-green-700 rounded-full text-xs font-medium whitespace-nowrap">
              <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
              <span className="hidden xs:inline">Released</span>
            </div>
          </div>
          <div className="text-xl sm:text-2xl font-bold text-foreground">
            <AnimatedCounter value={24500} prefix="$" />
          </div>
          <div className="flex items-center gap-2 mt-2 text-xs sm:text-sm text-muted-foreground">
            <Clock className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <span className="truncate">Next milestone: $8,200 in 5 days</span>
          </div>
        </div>
      </motion.div>
    </TiltCard>
  )
}
