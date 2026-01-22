"use client";
// GSAP Sticky Scroll Component
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
    title: "Collaborative Editing",
    description:
      "Work together in real time with your team, clients, and stakeholders. Collaborate on documents, share ideas, and make decisions quickly. With our platform, you can streamline your workflow and increase productivity.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?q=80&w=611&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Collaborative Editing"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: "Real time changes",
    description:
      "See changes as they happen. With our platform, you can track every modification in real time. No more confusion about the latest version of your project. Say goodbye to the chaos of version control and embrace the simplicity of real-time updates.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Real time changes"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: "Version control",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1574631818614-c9f9d15ded52?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Version control"
        className="h-full w-full object-cover"
      />
    ),
  },
  {
    title: "Running out of content",
    description:
      "Experience real-time updates and never stress about version control again. Our platform ensures that you're always working on the most recent version of your project, eliminating the need for constant manual updates. Stay in the loop, keep your team aligned, and maintain the flow of your work without any interruptions.",
    content: (
      <img
        src="https://images.unsplash.com/photo-1708478564978-91a6d5818e30?q=80&w=580&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Running out of content"
        className="h-full w-full object-cover"
      />
    ),
  },
];

export const StickyScroll = ({
  contentClassName,
}: {
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyContentRef = useRef<HTMLDivElement>(null);
  const cardsContainerRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  const backgroundColors = [
    "#0f172a", // slate-900
    "#1e293b", // slate-800
    "#334155", // slate-700
    "#475569", // slate-600
  ];

  const linearGradients = [
    "linear-gradient(to bottom right, #06b6d4, #10b981)", // cyan-500 to emerald-500
    "linear-gradient(to bottom right, #ec4899, #6366f1)", // pink-500 to indigo-500
    "linear-gradient(to bottom right, #f97316, #eab308)", // orange-500 to yellow-500
    "linear-gradient(to bottom right, #8b5cf6, #d946ef)", // violet-500 to fuchsia-500
  ];

  useEffect(() => {
    if (!containerRef.current || !cardsContainerRef.current) return;
    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length === 0) return;

    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    const ctx = gsap.context(() => {
      // Set initial positions
      cards.forEach((card, index) => {
        const textElements = card.querySelectorAll("h2, p");

        if (index === 0) {
          // First card: centered, white, visible
          gsap.set(card, { y: 0 });
          gsap.set(textElements, { opacity: 1, color: "#f1f5f9" });
        } else {
          // Other cards: 50vh below container, muted, invisible
          gsap.set(card, { y: window.innerHeight * 0.5 }); // 50vh instead of 100vh
          gsap.set(textElements, { opacity: 0, color: "#64748b" });
        }
      });

      // Create timeline for each card transition
      cards.forEach((card, index) => {
        const textElements = card.querySelectorAll("h2, p");
        const isLastCard = index === cards.length - 1;

        if (!isLastCard) {
          // Cards that need to exit (all except last)
          const timeline = gsap.timeline({
            scrollTrigger: {
              trigger: containerRef.current,
              start: `top+=${index * 100}% top`,
              end: `top+=${(index + 1) * 100}% top`,
              scrub: true,
              
            },
          });

          // Current card exits upward
          timeline.to(
            card,
            {
              y: -window.innerHeight * 0.5, // Move up by 50vh
              ease: "none",
            },
            0
          );

          // Current card fades out: white -> transparent
          timeline.to(
            textElements,
            {
              opacity: 0,
              ease: "none",
            },
            0
          );

          // Next card enters from bottom
          if (index < cards.length - 1) {
            const nextCard = cards[index + 1];
            const nextTextElements = nextCard.querySelectorAll("h2, p");

            // Move next card from 50vh below to center
            timeline.fromTo(
              nextCard,
              { y: window.innerHeight * 0.5 }, // Start 50vh below
              {
                y: 0, // End at center
                ease: "none",
                onUpdate: function () {
                  // Check if this animation has reached 25% of its progress
                  const progress = this.progress();
                  if (progress >= 0.25 && activeCard !== index + 1) {
                    setActiveCard(index + 1); // Change to NEXT card's image
                  } else {
                    setActiveCard(index);
                  }
                },
              },
              0
            );

            // Next card: fade in from invisible, stay gray until 25%, white 25%-65%, gray after 65%
            timeline.fromTo(
              nextTextElements,
              {
                opacity: 0,
                color: "#64748b",
              },
              {
                opacity: 1,
                color: "#ffffff", // Stay gray while moving up
                ease: "none",
              },
              0
            );

            // At 25%, change to white
            timeline.to(
              nextTextElements,
              {
                color: "#ffffff", // Change to white
                duration: 0.01, // Instant change
                ease: "none",
              },
              0.25 // At 25% of timeline
            );

            // At 65%, change back to gray
            /* timeline.to(
              nextTextElements,
              {
                color: "#64748b", // Change back to gray
                duration: 0.01, // Instant change
                ease: "none",
              },
              0.65 // At 65% of timeline
            ); */
          }
        } else {
          // Last card: just stays in place
          ScrollTrigger.create({
            trigger: containerRef.current,
            start: `top+=${index * 100}% top`,
            end: `top+=${(index + 1) * 100}% top`,
            scrub: true,
            onEnter: () => setActiveCard(index),
            onEnterBack: () => setActiveCard(index),
          });
        }
      });

      // Main pinning ScrollTrigger
      ScrollTrigger.create({
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 100}%`,
        pin: true,
        scrub: true,
      });
    }, containerRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  // Background transitions synced with active card
  useEffect(() => {
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        backgroundColor: backgroundColors[activeCard % backgroundColors.length],
        duration: 0.6,
        ease: "power2.inOut",
      });
    }

    if (stickyContentRef.current) {
      gsap.to(stickyContentRef.current, {
        background: linearGradients[activeCard % linearGradients.length],
        duration: 0.6,
        ease: "power2.inOut",
      });
    }
  }, [activeCard]);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
      style={{
        backgroundColor: backgroundColors[0],
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
        {/* Left side - cards container */}
        <div
          ref={cardsContainerRef}
          className="relative flex h-full w-full flex-col justify-center lg:max-w-2xl"
        >
          {content.map((item, index) => (
            <div
              key={item.title + index}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className="absolute pointer-events-none"
              style={{ zIndex: content.length - index }}
            >
              <h2 className="text-3xl font-bold md:text-4xl transition-colors duration-300">
                {item.title}
              </h2>
              <p className="mt-6 max-w-lg text-base leading-relaxed md:text-lg transition-colors duration-300">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right side - sticky content */}
        <div className="relative hidden h-[70vh] w-full max-w-[500px] lg:block">
          <div
            ref={stickyContentRef}
            style={{ background: linearGradients[0] }}
            className={`h-full w-full overflow-hidden rounded-2xl shadow-2xl ${
              contentClassName || ""
            }`}
          >
            {content[activeCard].content ?? null}
          </div>
        </div>
      </div>
    </div>
  );
};
