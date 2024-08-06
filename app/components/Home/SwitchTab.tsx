"use client";

import { useRouter } from "next/navigation";
import queryString from "query-string";
import { useState } from "react";

type SwitchTabProps = {
  handleChange?: (tab: string) => void;
  data: string[];
  TrendingTab?: string;
};

export default function SwitchTab({ handleChange, data, TrendingTab }: SwitchTabProps) {
  const [SelectedTab, setSelectedTab] = useState<string>(data[0]);
  const router = useRouter();

  const handleTabChange = (tab: string) => {
    setSelectedTab(tab);
    const url = queryString.stringifyUrl(
      { url: window.location.href, query: { TrendingTab: tab } },
      { skipNull: true }
    );

    router.push(url, {scroll: false});
    // handleChange(tab);
  };

  return (
    <div className="switchTabs bg-white text-black p-1 rounded-full shadow-md">
      {data.map((tab, index) => (
        <button
          key={index}
          onClick={() => handleTabChange(tab)}
          className={`${
            SelectedTab === tab ? "gradientBg text-white" : ""
          } w-[85px] sm:w-[100px] text-[12px] sm:text-sm py-1 rounded-full`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}
