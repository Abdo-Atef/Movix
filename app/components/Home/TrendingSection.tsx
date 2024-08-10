"use client";
import CardsSlider from "./CardsSlider";
import { moviesData } from "@/app/types/app";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface TrendingSectionProps {
  DATA: moviesData;
  TrendingTab: string;
  AllGeners: any;
}

export default function TrendingSection({
  DATA,
  TrendingTab,
  AllGeners,
}: TrendingSectionProps) {
  const searchParams = useSearchParams();

  const pathname = usePathname();
  const { replace } = useRouter();
  const handleTabChange = (tab: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("TrendingTab", tab);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="container text-main mt-20">
      <div className="flex justify-between items-center">
        <h2 className="my-10 text-2xl font-semibold">Trending</h2>
        <div className="switchTabs bg-white text-black p-1 rounded-full shadow-md">
          <button
            onClick={() => handleTabChange("day")}
            className={`${
              TrendingTab === "day" ? "gradientBg text-white" : ""
            } w-[85px] sm:w-[100px] text-[12px] sm:text-sm py-1 rounded-full`}
          >
            Day
          </button>
          <button
            onClick={() => handleTabChange("week")}
            className={`${
              TrendingTab === "week" ? "gradientBg text-white" : ""
            } w-[85px] sm:w-[100px] text-[12px] sm:text-sm py-1 rounded-full`}
          >
            Week
          </button>
        </div>
      </div>
      <CardsSlider DATA={DATA} AllGeners={AllGeners} />
    </div>
  );
}
