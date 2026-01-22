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
} from "lucide-react";
import { motion } from "framer-motion";

export const steps = [
  {
    title: "Post a Project",
    description:
      "Describe your project, set your budget, and specify the skills you need. Our platform makes it easy to outline exactly what you're looking for.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <motion.div
          className="w-full max-w-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <div className="relative group">
            <motion.div
              className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#f1ac13] via-[#f1ac13]/50 to-[#f1ac13] opacity-70"
              animate={{
                background: [
                  "linear-gradient(0deg, hsl(41, 89%, 51%), hsl(41, 89%, 51%/0.5), hsl(41, 89%, 51%))",
                  "linear-gradient(180deg, hsl(41, 89%, 51%), hsl(41, 89%, 51%/0.5), hsl(41, 89%, 51%))",
                  "linear-gradient(360deg, hsl(41, 89%, 51%), hsl(41, 89%, 51%/0.5), hsl(41, 89%, 51%))",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-[#f1ac13]/15 via-[#f1ac13]/10 to-transparent px-6 py-5 border-b border-border">
                <div className="flex items-center gap-4">
                  <motion.div
                    className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#f1ac13] to-[#f1ac13]/80 flex items-center justify-center shadow-lg shadow-[#f1ac13]/30"
                    animate={{ rotate: [0, 5, -5, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <FileText className="w-7 h-7 text-[#f1ac13]-foreground" />
                  </motion.div>
                  <div>
                    <h4 className="text-foreground font-bold text-lg">
                      Create Project
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Fill in the details
                    </p>
                  </div>
                  <motion.div
                    className="ml-auto"
                    animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.3, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Sparkles className="w-6 h-6 text-[#f1ac13]" />
                  </motion.div>
                </div>
              </div>

              <div className="p-6 space-y-5">
                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider">
                    Project Title
                  </label>
                  <motion.div
                    className="h-12 rounded-xl border-2 border-[#f1ac13]/30 bg-gradient-to-r from-[#f1ac13]/5 to-transparent px-4 flex items-center"
                    animate={{
                      borderColor: [
                        "hsl(41, 89%, 51%/0.3)",
                        "hsl(41, 89%, 51%/0.6)",
                        "hsl(41, 89%, 51%/0.3)",
                      ],
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <span className="text-foreground font-semibold">
                      E-commerce Redesign
                    </span>
                    <motion.span
                      className="w-0.5 h-5 bg-[#f1ac13] ml-1 rounded-full"
                      animate={{ opacity: [1, 0] }}
                      transition={{ duration: 0.5, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider">
                      Budget
                    </label>
                    <motion.div
                      className="h-12 rounded-xl border-2 border-[#f1ac13] bg-[#f1ac13]/10 px-4 flex items-center justify-center"
                      whileHover={{ scale: 1.02 }}
                    >
                      <TrendingUp className="w-4 h-4 text-[#f1ac13] mr-2" />
                      <span className="text-[#f1ac13] font-bold">₹2L - ₹5L</span>
                    </motion.div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-muted-foreground mb-2 block uppercase tracking-wider">
                      Timeline
                    </label>
                    <div className="h-12 rounded-xl border border-border bg-muted/30 px-4 flex items-center justify-center">
                      <span className="text-foreground font-medium">
                        4-6 weeks
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="text-xs font-semibold text-muted-foreground mb-3 block uppercase tracking-wider">
                    Required Skills
                  </label>
                  <div className="flex flex-wrap gap-2">
                    {["React", "Node.js", "UI/UX", "TypeScript"].map(
                      (skill, i) => (
                        <motion.span
                          key={skill}
                          initial={{ scale: 0, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{
                            delay: i * 0.1,
                            type: "spring",
                            stiffness: 200,
                          }}
                          whileHover={{ scale: 1.1, y: -2 }}
                          className="px-4 py-2 text-xs font-bold rounded-xl bg-gradient-to-r from-[#f1ac13]/20 to-[#f1ac13]/10 text-[#f1ac13] border border-[#f1ac13]/30 cursor-pointer shadow-sm"
                        >
                          {skill}
                        </motion.span>
                      ),
                    )}
                  </div>
                </div>

                <motion.button
                  className="w-full h-12 rounded-xl bg-gradient-to-r from-[#f1ac13] to-[#f1ac13]/80 text-[#f1ac13]-foreground font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#f1ac13]/30"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 20px 40px -10px hsl(41, 89%, 51%/0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Rocket className="w-5 h-5" />
                  Post Project
                  <ArrowRight className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    ),
  },
  {
    title: "Get Matched",
    description:
      "We match you with vetted Freelance Teams or Skilled individuals that fit your requirements. No more endless searching through profiles.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-full max-w-sm space-y-4">
          <motion.div
            className="flex items-center justify-between mb-2 px-1"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="flex items-center gap-3">
              <motion.div
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              >
                <Target className="w-6 h-6 text-[#f1ac13]" />
              </motion.div>
              <span className="text-foreground font-bold text-lg">
                Top Matches
              </span>
            </div>
            <motion.span
              className="px-3 py-1 rounded-full bg-[#f1ac13]/10 text-[#f1ac13] text-xs font-bold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              3 teams found
            </motion.span>
          </motion.div>

          {[
            {
              name: "Team Alpha",
              match: 98,
              members: 4,
              rating: 4.9,
              avatar: "🚀",
              highlight: true,
            },
            {
              name: "DevStudio",
              match: 95,
              members: 3,
              rating: 4.8,
              avatar: "⚡",
            },
            {
              name: "PixelCraft",
              match: 92,
              members: 5,
              rating: 4.7,
              avatar: "🎨",
            },
          ].map((team, i) => (
            <motion.div
              key={i}
              initial={{ x: 60, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: i * 0.15, type: "spring", stiffness: 100 }}
              whileHover={{ scale: 1.03, x: 8 }}
              className={`relative rounded-2xl p-5 border-2 transition-all cursor-pointer overflow-hidden ${
                team.highlight
                  ? "border-[#f1ac13] bg-gradient-to-r from-card via-[#f1ac13]/5 to-card shadow-xl shadow-[#f1ac13]/10"
                  : "border-border bg-card hover:border-[#f1ac13]/50 hover:shadow-lg"
              }`}
            >
              {team.highlight && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-[#f1ac13]/10 to-transparent"
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 2, repeat: Infinity, repeatDelay: 1 }}
                />
              )}

              <div className="relative flex items-center gap-4">
                <motion.div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center text-2xl shadow-lg ${
                    team.highlight
                      ? "bg-gradient-to-br from-[#f1ac13]/20 to-[#f1ac13]/10"
                      : "bg-muted"
                  }`}
                  animate={team.highlight ? { rotate: [0, 5, -5, 0] } : {}}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  {team.avatar}
                </motion.div>

                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-foreground font-bold">{team.name}</p>
                    {team.highlight && (
                      <motion.span
                        className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-gradient-to-r from-[#f1ac13] to-[#f1ac13]/80 text-[#f1ac13]-foreground text-[10px] font-bold shadow-md"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        <Crown className="w-3 h-3" />
                        BEST
                      </motion.span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1.5">
                      <Users className="w-4 h-4" />
                      {team.members}
                    </span>
                    <span className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold text-foreground">
                        {team.rating}
                      </span>
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <motion.div
                    className={`text-3xl font-black ${team.highlight ? "text-[#f1ac13]" : "text-foreground"}`}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{
                      delay: i * 0.15 + 0.3,
                      type: "spring",
                      stiffness: 200,
                    }}
                  >
                    {team.match}%
                  </motion.div>
                  <span className="text-xs text-muted-foreground font-medium uppercase">
                    match
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    ),
  },
  {
    title: "Collaborate",
    description:
      "Work directly with your team and have discussions on our platform with the built-in Project Management tool. Everything you need in one place.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-full max-w-sm">
          <div className="relative">
            <motion.div
              className="absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-[#f1ac13]/50 via-transparent to-[#f1ac13]/50 opacity-50"
              animate={{
                background: [
                  "linear-gradient(0deg, hsl(41, 89%, 51%/0.5), transparent, hsl(41, 89%, 51%/0.5))",
                  "linear-gradient(180deg, hsl(41, 89%, 51%/0.5), transparent, hsl(41, 89%, 51%/0.5))",
                ],
              }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative bg-card rounded-2xl border border-border overflow-hidden shadow-2xl">
              <div className="px-5 py-4 border-b border-border bg-gradient-to-r from-[#f1ac13]/10 to-transparent">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-3">
                      {["🧑‍💻", "👩‍🎨", "👨‍💼"].map((emoji, i) => (
                        <motion.div
                          key={i}
                          className="w-10 h-10 rounded-full bg-gradient-to-br from-muted to-muted/80 border-3 border-card flex items-center justify-center text-lg shadow-md"
                          initial={{ scale: 0, x: -20 }}
                          animate={{ scale: 1, x: 0 }}
                          transition={{ delay: i * 0.1, type: "spring" }}
                        >
                          {emoji}
                        </motion.div>
                      ))}
                    </div>
                    <div>
                      <p className="text-foreground font-bold">Project Chat</p>
                      <div className="flex items-center gap-2">
                        <motion.span
                          className="w-2.5 h-2.5 rounded-full bg-green-500 shadow-lg shadow-green-500/50"
                          animate={{ scale: [1, 1.3, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        />
                        <span className="text-xs text-muted-foreground">
                          3 online
                        </span>
                      </div>
                    </div>
                  </div>
                  <motion.div
                    className="p-2 rounded-xl bg-[#f1ac13]/10"
                    whileHover={{ scale: 1.1 }}
                  >
                    <MessageSquare className="w-5 h-5 text-[#f1ac13]" />
                  </motion.div>
                </div>
              </div>

              <div className="px-5 py-5 space-y-4 bg-gradient-to-b from-muted/20 to-transparent min-h-[200px]">
                <motion.div
                  className="flex gap-3"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-lg shadow-blue-500/30">
                    A
                  </div>
                  <div>
                    <div className="bg-card rounded-2xl rounded-tl-md px-4 py-3 shadow-lg border border-border">
                      <p className="text-foreground text-sm">
                        Design mockups are ready! 🎨
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2 mt-1">
                      2m ago
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-3 justify-end"
                  initial={{ x: 30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  <div className="text-right">
                    <div className="bg-gradient-to-r from-[#f1ac13] to-[#f1ac13]/80 text-[#f1ac13]-foreground rounded-2xl rounded-tr-md px-4 py-3 shadow-lg shadow-[#f1ac13]/20">
                      <p className="text-sm font-medium">
                        Looks amazing! Starting dev now 🚀
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground mr-2 mt-1">
                      Just now
                    </span>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#f1ac13]/30 to-[#f1ac13]/20 flex items-center justify-center text-[#f1ac13] text-sm font-bold flex-shrink-0 border-2 border-[#f1ac13]/30">
                    Y
                  </div>
                </motion.div>

                <motion.div
                  className="flex gap-3"
                  initial={{ x: -30, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: 0.6, type: "spring" }}
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-purple-600 flex items-center justify-center text-white text-sm font-bold flex-shrink-0 shadow-lg shadow-purple-500/30">
                    B
                  </div>
                  <div className="bg-card rounded-2xl rounded-tl-md px-5 py-3 shadow-lg border border-border">
                    <motion.div
                      className="flex gap-1.5"
                      animate={{ opacity: [0.4, 1, 0.4] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      {[0, 1, 2].map((i) => (
                        <motion.span
                          key={i}
                          className="w-2.5 h-2.5 rounded-full bg-muted-foreground"
                          animate={{ y: [0, -5, 0] }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </div>

              <div className="px-5 py-4 border-t border-border bg-card/50">
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-11 rounded-xl bg-muted/50 px-4 flex items-center border border-border">
                    <span className="text-muted-foreground text-sm">
                      Type a message...
                    </span>
                  </div>
                  <motion.button
                    className="w-11 h-11 rounded-xl bg-gradient-to-br from-[#f1ac13] to-[#f1ac13]/80 flex items-center justify-center shadow-lg shadow-[#f1ac13]/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Send className="w-5 h-5 text-[#f1ac13]-foreground" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    title: "Pay Securely",
    description:
      "Only release payments when you are satisfied with the milestone deliverables. Secure escrow system protects both you and your team.",
    content: (
      <div className="h-full w-full flex items-center justify-center">
        <div className="w-full max-w-sm">
          <div className="relative">
            <motion.div
              className="absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-green-500 via-emerald-500 to-green-500 opacity-60"
              animate={{
                background: [
                  "linear-gradient(0deg, #22c55e, #10b981, #22c55e)",
                  "linear-gradient(180deg, #22c55e, #10b981, #22c55e)",
                  "linear-gradient(360deg, #22c55e, #10b981, #22c55e)",
                ],
              }}
              transition={{ duration: 4, repeat: Infinity }}
            />

            <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden">
              <div className="bg-gradient-to-r from-green-500/15 via-emerald-500/10 to-transparent px-6 py-6 border-b border-border">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium mb-1">
                      Project Total
                    </p>
                    <motion.p
                      className="text-4xl font-black text-foreground"
                      initial={{ scale: 0.5, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ type: "spring", stiffness: 200 }}
                    >
                      ₹2,00,000
                    </motion.p>
                  </div>
                  <motion.div
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center shadow-xl shadow-green-500/40"
                    animate={{ rotate: [0, 10, -10, 0], scale: [1, 1.05, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    <ShieldCheck className="w-8 h-8 text-white" />
                  </motion.div>
                </div>
                <motion.div
                  className="flex items-center gap-2 mt-4 px-3 py-2 rounded-xl bg-green-500/10 border border-green-500/30 w-fit"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <motion.span
                    className="w-2.5 h-2.5 rounded-full bg-green-500"
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  <Lock className="w-4 h-4 text-green-600" />
                  <span className="text-sm text-green-600 font-bold">
                    Escrow Protected
                  </span>
                </motion.div>
              </div>

              <div className="p-5 space-y-3">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-sm font-bold text-foreground flex items-center gap-2">
                    <Award className="w-4 h-4 text-[#f1ac13]" />
                    Milestones
                  </p>
                  <span className="text-xs text-muted-foreground">
                    2 of 3 complete
                  </span>
                </div>

                {[
                  {
                    name: "Design Phase",
                    amount: "₹50,000",
                    status: "complete",
                    icon: "✅",
                  },
                  {
                    name: "Development",
                    amount: "₹1,00,000",
                    status: "active",
                    icon: "🔄",
                  },
                  {
                    name: "Testing & Launch",
                    amount: "₹50,000",
                    status: "pending",
                    icon: "⏳",
                  },
                ].map((milestone, i) => (
                  <motion.div
                    key={i}
                    initial={{ x: -30, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.15, type: "spring" }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className={`flex items-center justify-between p-4 rounded-xl border-2 transition-all cursor-pointer ${
                      milestone.status === "complete"
                        ? "border-green-500/40 bg-gradient-to-r from-green-500/10 to-transparent"
                        : milestone.status === "active"
                          ? "border-[#f1ac13]/40 bg-gradient-to-r from-[#f1ac13]/10 to-transparent shadow-lg"
                          : "border-border bg-muted/20"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <motion.span
                        className="text-xl"
                        animate={
                          milestone.status === "active" ? { rotate: 360 } : {}
                        }
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      >
                        {milestone.icon}
                      </motion.span>
                      <div>
                        <p
                          className={`font-bold text-sm ${
                            milestone.status === "complete"
                              ? "text-green-600"
                              : milestone.status === "active"
                                ? "text-foreground"
                                : "text-muted-foreground"
                          }`}
                        >
                          {milestone.name}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {milestone.status === "complete"
                            ? "Completed"
                            : milestone.status === "active"
                              ? "In Progress"
                              : "Upcoming"}
                        </p>
                      </div>
                    </div>
                    <span
                      className={`font-black text-lg ${
                        milestone.status === "complete"
                          ? "text-green-600"
                          : milestone.status === "active"
                            ? "text-[#f1ac13]"
                            : "text-muted-foreground"
                      }`}
                    >
                      {milestone.amount}
                    </span>
                  </motion.div>
                ))}

                <motion.button
                  className="w-full h-14 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 text-white font-bold text-lg flex items-center justify-center gap-3 mt-5 shadow-xl shadow-green-500/30"
                  whileHover={{
                    scale: 1.02,
                    boxShadow: "0 25px 50px -12px rgba(34, 197, 94, 0.4)",
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Check className="w-6 h-6" />
                  Release Payment
                  <Sparkles className="w-5 h-5" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];