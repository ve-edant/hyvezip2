import { motion } from "framer-motion";

interface Tab {
  id: string;
  label: string;
}

interface SegmentedTabsProps {
  tabs: Tab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const SegmentedTabs = ({ tabs, activeTab, onTabChange }: SegmentedTabsProps) => {
  return (
    <div className="inline-flex p-1.5 bg-muted rounded-xl">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => onTabChange(tab.id)}
          className={`
            relative px-6 py-2.5 rounded-lg font-medium text-sm
            transition-colors duration-200
            ${activeTab === tab.id ? "text-foreground" : "text-muted-foreground hover:text-foreground"}
          `}
        >
          {activeTab === tab.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-background rounded-lg shadow-sm"
              transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
            />
          )}
          <span className="relative z-10">{tab.label}</span>
        </button>
      ))}
    </div>
  );
};
