import { InfiniteMovingCards } from "@/components/ui/infinite-moving-card";

const trustItems = [
  { text: "₹50L+ Paid to Teams", icon: "💰" },
  { text: "100+ Active Teams", icon: "👥" },
  { text: "Verified Milestone Payments", icon: "✓" },
  { text: "Built for Real Projects", icon: "🚀" },
  { text: "24/7 Team Support", icon: "🛡️" },
  { text: "Secure Escrow System", icon: "🔒" },
];

export const TrustStrip = () => {
  return (
    <section className="relative z-10 -mt-5">
      <InfiniteMovingCards items={trustItems} speed="normal" />
    </section>
  );
};
