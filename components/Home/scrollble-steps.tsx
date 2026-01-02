"use client";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { LayoutTextFlip } from "@/components/ui/layout-text-flip";
import { motion } from "motion/react";
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const content = [
  {
    title: "Stellar feature",
    description:
      "Donec sollicitudin molestie malesuada. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.",
    image:
      "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "This is cool too",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly.",
    image:
      "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "But then you can do this",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version.",
    image:
      "https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop",
  },
  {
    title: "This will also help",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures you're always working on the most recent version.",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=800&auto=format&fit=crop",
  },
];

export default function ScrollableSteps() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const descriptionRefs = useRef<(HTMLDivElement | null)[]>([]);

  const backgroundColors = [
    "#0f172a", // slate-900
    "#1e293b", // slate-800
    "#334155", // slate-700
    "#475569", // slate-600
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)",
    "linear-gradient(to bottom right, #ec4899, #6366f1)",
    "linear-gradient(to bottom right, #f97316, #eab308)",
    "linear-gradient(to bottom right, #8b5cf6, #d946ef)",
  ];

  useEffect(() => {
    if (!containerRef.current) return;

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const ctx = gsap.context(() => {
      // Initially hide all descriptions
      descriptionRefs.current.forEach((desc) => {
        if (desc) {
          gsap.set(desc, { height: 0, opacity: 0, marginTop: 0 });
        }
      });

      // Pin the entire section
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${content.length * 100}vh`,
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const progress = self.progress;
          const newActiveStep = Math.min(
            Math.floor(progress * content.length),
            content.length - 1
          );

          if (newActiveStep !== activeStep) {
            setActiveStep(newActiveStep);

            // Hide all descriptions
            descriptionRefs.current.forEach((desc, i) => {
              if (desc) {
                if (i === newActiveStep) {
                  // Show active description - expand it
                  gsap.to(desc, {
                    height: "auto",
                    opacity: 1,
                    marginTop: 12,
                    duration: 0.4,
                    ease: "power2.out",
                  });
                } else {
                  // Hide inactive descriptions - collapse them
                  gsap.to(desc, {
                    height: 0,
                    opacity: 0,
                    marginTop: 0,
                    duration: 0.3,
                    ease: "power2.in",
                  });
                }
              }
            });
          }
        },
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [activeStep]);

  return (
    <div
      ref={containerRef}
      className="relative top-20 h-screen w-full overflow-hidden transition-colors duration-500"
      style={{
        backgroundColor: backgroundColors[activeStep % backgroundColors.length],
      }}
    >
      <motion.div className="relative px-4 py-4 flex flex-col items-center justify-center gap-4 text-center sm:mx-0 sm:mb-0 sm:flex-row bg-white">
        <LayoutTextFlip
          text="How HYVE "
          words={[
            "Works",
            "Connects",
            "Builds Teams",
            "Delivers",
            "Collaborates",
            "Gets You Paid",
            "The Jungle",
          ]}
        />
      </motion.div>
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-10 px-4 lg:gap-20 lg:px-8">
        {/* Left side - Steps */}
        <div className="relative flex h-full w-full flex-col justify-center lg:max-w-2xl">
          <div className="space-y-4">
            {content.map((item, index) => (
              <div key={index} className="flex gap-6">
                {/* Step number */}
                <div className="flex-shrink-0">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-full text-xl font-bold transition-all duration-500 ${
                      activeStep === index
                        ? "bg-gradient-to-br from-cyan-500 to-emerald-500 text-white shadow-lg shadow-cyan-500/50 scale-110"
                        : activeStep > index
                        ? "bg-emerald-600 text-white"
                        : "bg-slate-700 text-slate-400"
                    }`}
                  >
                    {index + 1}
                  </div>
                </div>

                {/* Step content */}
                <div className="flex-1">
                  <h3
                    className={`text-3xl font-bold transition-colors duration-300 md:text-4xl ${
                      activeStep === index ? "text-slate-100" : "text-slate-400"
                    }`}
                  >
                    {item.title}
                  </h3>

                  {/* Description - collapses when not active */}
                  <div
                    ref={(el) => {
                      descriptionRefs.current[index] = el;
                    }}
                    className="overflow-hidden"
                    style={{ height: 0, opacity: 0, marginTop: 0 }}
                  >
                    <p className="max-w-lg text-base leading-relaxed text-slate-300 md:text-lg">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right side - Image */}
        <div className="relative hidden h-[70vh] w-full max-w-[500px] lg:block">
          <div
            className="h-full w-full overflow-hidden rounded-2xl shadow-2xl transition-all duration-500"
            style={{
              background: linearGradients[activeStep % linearGradients.length],
            }}
          >
            <div className="relative h-full w-full">
              {content.map((item, index) => (
                <img
                  key={index}
                  src={item.image}
                  alt={item.title}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
                    activeStep === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
