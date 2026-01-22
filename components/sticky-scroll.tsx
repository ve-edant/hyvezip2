"use client"
// Framer Motion Sticky Scroll Component
import React, { useRef } from "react"
import { useMotionValueEvent, useScroll, motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { Check, ChevronRight, ArrowDown, Zap } from "lucide-react"

export const StickyScroll = ({
  content,
  contentClassName,
  header,
}: {
  content: {
    title: string
    description: string
    content?: React.ReactNode
  }[]
  contentClassName?: string
  header?: React.ReactNode
}) => {
  const [activeCard, setActiveCard] = React.useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const cardLength = content.length

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength)
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint)
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index
        }
        return acc
      },
      0
    )
    setActiveCard(closestBreakpointIndex)
  })

  const progress = ((activeCard + 1) / cardLength) * 100

  const stepIcons = [
    { emoji: "📝" },
    { emoji: "🎯" },
    { emoji: "💬" },
    { emoji: "🔒" },
  ]

  return (
    <motion.div
      ref={ref}
      style={{ height: `${cardLength * 100}vh` }}
      className="relative"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/[0.02] to-background" />
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)/0.08) 0%, transparent 70%)"
          }}
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: "radial-gradient(circle, hsl(var(--primary)/0.06) 0%, transparent 70%)"
          }}
          animate={{ 
            x: [0, -80, 0],
            y: [0, 60, 0],
            scale: [1.2, 0.9, 1.2]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        />
        <div 
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(hsl(var(--primary)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>
      
      <div className="sticky top-0 h-screen flex flex-col justify-center py-8 lg:py-12">
        {header && (
          <div className="text-center mb-8 lg:mb-12 px-4">
            {header}
          </div>
        )}
        
        <div className="container px-4 max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row items-start gap-8 lg:gap-16">
            {/* Left side - Steps */}
            <div className="flex-1 w-full lg:max-w-lg">
              {/* Progress bar */}
              <div className="mb-8 hidden lg:block">
                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-2">
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                      <Zap className="w-4 h-4 text-primary" />
                    </motion.div>
                    <span className="text-foreground font-semibold">Your Journey</span>
                  </div>
                  <motion.div 
                    key={activeCard}
                    initial={{ scale: 0.8, opacity: 0, y: -10 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-primary/15 to-primary/5 border border-primary/30"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-primary text-xs font-bold">
                      Step {activeCard + 1} / {cardLength}
                    </span>
                  </motion.div>
                </div>
                <div className="relative h-3 bg-muted/50 rounded-full overflow-hidden border border-border/50">
                  <motion.div 
                    className="absolute inset-y-0 left-0 rounded-full"
                    style={{
                      background: "linear-gradient(90deg, hsl(var(--primary)), hsl(var(--primary)/0.8), hsl(var(--primary)))"
                    }}
                    initial={{ width: "0%" }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  />
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                  />
                </div>
              </div>

              {content.map((item, index) => (
                <motion.div
                  key={item.title + index}
                  className="relative flex items-start gap-5 cursor-pointer group"
                  initial={{ opacity: 0, x: -40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.12, duration: 0.5 }}
                >
                  {/* Connecting line */}
                  {index < content.length - 1 && (
                    <div className="absolute left-7 top-[72px] w-[3px] h-[calc(100%-30px)] -translate-x-1/2 rounded-full overflow-hidden">
                      <div className="h-full bg-gradient-to-b from-border/80 via-border/50 to-border/30" />
                      <motion.div 
                        className="absolute top-0 left-0 w-full origin-top rounded-full"
                        style={{
                          background: "linear-gradient(180deg, hsl(var(--primary)), hsl(var(--primary)/0.3))"
                        }}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: activeCard > index ? 1 : 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                      />
                    </div>
                  )}
                  
                  {/* Step indicator */}
                  <div className="relative flex-shrink-0 z-10">
                    <motion.div
                      className={cn(
                        "relative w-14 h-14 rounded-2xl flex items-center justify-center text-lg font-bold transition-all duration-500 overflow-hidden",
                        activeCard === index ? "shadow-xl" : activeCard > index ? "shadow-lg" : "shadow-md group-hover:shadow-lg"
                      )}
                      style={{
                        background: activeCard >= index 
                          ? `linear-gradient(135deg, hsl(var(--primary)), hsl(var(--primary)/0.8))`
                          : undefined
                      }}
                      animate={{ scale: activeCard === index ? 1.1 : 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <div className={cn(
                        "relative z-10 flex items-center justify-center w-full h-full rounded-2xl",
                        activeCard >= index 
                          ? "bg-transparent text-primary-foreground" 
                          : "bg-card border-2 border-border text-muted-foreground group-hover:border-primary/40"
                      )}>
                        {activeCard > index ? (
                          <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            animate={{ scale: 1, rotate: 0 }}
                            transition={{ type: "spring", stiffness: 300 }}
                          >
                            <Check className="w-6 h-6" strokeWidth={3} />
                          </motion.div>
                        ) : (
                          <span className="text-xl">{stepIcons[index]?.emoji}</span>
                        )}
                      </div>
                      
                      {activeCard === index && (
                        <motion.div 
                          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                          animate={{ x: ["-100%", "200%"] }}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                        />
                      )}
                    </motion.div>
                    
                    {activeCard === index && (
                      <>
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 border-primary/60"
                          initial={{ scale: 1, opacity: 1 }}
                          animate={{ scale: 1.6, opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity }}
                        />
                        <motion.div
                          className="absolute inset-0 rounded-2xl border-2 border-primary/40"
                          initial={{ scale: 1, opacity: 1 }}
                          animate={{ scale: 2, opacity: 0 }}
                          transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
                        />
                      </>
                    )}
                  </div>
                  
                  {/* Text content */}
                  <div className="flex-1 pb-10">
                    <motion.div
                      animate={{
                        opacity: activeCard === index ? 1 : 0.5,
                        y: activeCard === index ? 0 : 5
                      }}
                      transition={{ duration: 0.4 }}
                      className={cn(
                        "relative p-5 rounded-2xl transition-all duration-500 overflow-hidden",
                        activeCard === index 
                          ? "bg-gradient-to-br from-card via-card to-muted/30 border border-primary/20 shadow-xl shadow-primary/5" 
                          : "bg-transparent hover:bg-card/50"
                      )}
                    >
                      {activeCard === index && (
                        <motion.div 
                          className="absolute left-0 top-4 bottom-4 w-1 rounded-full bg-gradient-to-b from-primary via-primary/80 to-primary/40"
                          initial={{ scaleY: 0 }}
                          animate={{ scaleY: 1 }}
                          transition={{ duration: 0.4 }}
                        />
                      )}
                      
                      <div className="flex items-center gap-3 mb-3">
                        <motion.span 
                          className={cn(
                            "text-xs font-bold px-2.5 py-1 rounded-full uppercase tracking-wider",
                            activeCard === index ? "bg-primary/15 text-primary" : "bg-muted text-muted-foreground"
                          )}
                        >
                          Step {index + 1}
                        </motion.span>
                        {activeCard === index && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: 0.1, type: "spring" }}
                          >
                            <ChevronRight className="w-4 h-4 text-primary" />
                          </motion.div>
                        )}
                      </div>
                      
                      <h3 className={cn(
                        "text-xl font-bold transition-colors duration-300 mb-2",
                        activeCard === index ? "text-foreground" : "text-muted-foreground"
                      )}>
                        {item.title}
                      </h3>
                      
                      <AnimatePresence>
                        {activeCard === index && (
                          <motion.p 
                            className="text-muted-foreground leading-relaxed text-sm"
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            {item.description}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
              
              <motion.div 
                className="hidden lg:flex items-center justify-center gap-2 mt-4 text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: activeCard < cardLength - 1 ? 1 : 0 }}
              >
                <motion.div animate={{ y: [0, 5, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
                  <ArrowDown className="w-4 h-4" />
                </motion.div>
                <span className="text-xs font-medium">Scroll to explore</span>
              </motion.div>
            </div>

            {/* Right side - Visual content */}
            <div className={cn("hidden lg:flex flex-1 h-[500px] w-full items-center justify-center relative", contentClassName)}>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCard}
                  initial={{ opacity: 0, y: 40, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: -40, scale: 0.95 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  className="h-full w-full flex items-center justify-center p-8 relative z-10"
                >
                  {content[activeCard].content ?? null}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
