import React from "react";

interface TabsProps {
  tabs: string[];
  selectedTab: string;
  onSelectTab: (tab: string) => void;
}

const Tabs: React.FC<TabsProps> = ({ tabs, selectedTab, onSelectTab }) => (
  <div className="flex justify-center gap-2 flex-wrap">
    {tabs.map((tab) => (
      <button
        key={tab}
        onClick={() => onSelectTab(tab)}
        className={`px-4 py-2 border-2 font-oswald uppercase transition-all ${
          selectedTab === tab
            ? "bg-[#014321] text-white border-[#014321]"
            : "bg-white text-[#014321] border-[#014321] hover:bg-[#014321] hover:text-white"
        }`}
      >
        {tab}
      </button>
    ))}
  </div>
);

export default Tabs;
