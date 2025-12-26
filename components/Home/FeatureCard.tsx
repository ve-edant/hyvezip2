"use client"

import { motion } from "framer-motion"
import type { LucideIcon } from "lucide-react"

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  delay?: number
  accentColor?: string
  showStats?: boolean
  statsText?: string
}

export const FeatureCard = ({
  icon: Icon,
  title,
  description,
  delay = 0,
  accentColor = "#FBBF24",
  showStats = false,
  statsText,
}: FeatureCardProps) => {
  // Generate color variants from accent color
  const colorVars = {
    bg: `${accentColor}0D`, // 5% opacity
    hover: `${accentColor}1A`, // 10% opacity
    icon: accentColor,
    glow: `${accentColor}40`, // 25% opacity
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: [0.21, 0.47, 0.32, 0.98], // Custom easing
      }}
      className="group relative h-full"
    >
      <motion.div
        whileHover={{
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" },
        }}
        className="relative h-full bg-card rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-border shadow-sm hover:shadow-lg hover:border-border/80 transition-all duration-300 overflow-hidden"
      >
        {/* Animated gradient background on hover */}
        <motion.div
          className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{
            background: `radial-gradient(circle at 50% 0%, ${colorVars.hover}, transparent 70%)`,
          }}
        />

        {/* Content wrapper */}
        <div className="relative flex flex-col h-full gap-3 sm:gap-4">
          {/* Icon and Title Row */}
          <div className="flex gap-3 sm:gap-4">
            {/* Icon Container */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <div
                className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg sm:rounded-xl flex items-center justify-center transition-all duration-300 group-hover:shadow-lg"
                style={{
                  backgroundColor: colorVars.bg,
                  boxShadow: `0 0 0 0 ${colorVars.glow}`,
                }}
              >
                <Icon
                  className="w-5 h-5 sm:w-6 sm:h-6 transition-transform duration-300 group-hover:scale-110"
                  style={{ color: colorVars.icon }}
                  strokeWidth={2}
                />
              </div>
            </motion.div>

            {/* Title */}
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-sm sm:text-base lg:text-lg text-foreground mb-1 sm:mb-2 transition-colors duration-300 group-hover:text-foreground/90">
                {title}
              </h3>
            </div>
          </div>

          {/* Description */}
          <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
            {description}
          </p>

          {/* Stats Section - Expandable on Hover */}
          {showStats && statsText && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              whileHover={{ height: "auto", opacity: 1 }}
              className="overflow-hidden"
            >
              <div className="pt-3 sm:pt-4 border-t border-border/50">
                <p
                  className="text-xs sm:text-sm font-semibold"
                  style={{ color: colorVars.icon }}
                >
                  {statsText}
                </p>
              </div>
            </motion.div>
          )}
        </div>

        {/* Corner accent */}
        <div
          className="absolute -right-8 -bottom-8 w-24 h-24 rounded-full opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500"
          style={{ backgroundColor: colorVars.icon }}
        />
      </motion.div>
    </motion.div>
  )
}

// Example usage component
export default function FeatureCardDemo() {
  const features = [
    {
      icon: ({ className, strokeWidth }: { className?: string; strokeWidth?: number }) => (
        <svg
          className={className}
          strokeWidth={strokeWidth}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      title: "Build or Join Teams",
      description:
        "Create your own team with handpicked talent or discover teams that need your skills.",
      accentColor: "#FBBF24",
      showStats: true,
      statsText: "4,200+ active teams",
    },
    {
      icon: ({ className, strokeWidth }: { className?: string; strokeWidth?: number }) => (
        <svg
          className={className}
          strokeWidth={strokeWidth}
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <path d="M3 9h18" />
          <path d="M9 21V9" />
        </svg>
      ),
      title: "Project Management",
      description:
        "Organize tasks, track progress, and collaborate seamlessly with your team members.",
      accentColor: "#10B981",
      showStats: true,
      statsText: "50K+ projects completed",
    },
  ]

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon as any}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
              accentColor={feature.accentColor}
              showStats={feature.showStats}
              statsText={feature.statsText}
            />
          ))}
        </div>
      </div>
    </div>
  )
}