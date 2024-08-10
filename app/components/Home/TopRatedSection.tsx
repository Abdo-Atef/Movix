"use client";
import CardsSlider from "./CardsSlider";
import { moviesData } from "@/app/types/app";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface TopRatedSectionProps {
  DATA: moviesData;
  TopRatedTab: string;
  AllGeners:any
}

export default function TopRatedSection({
  DATA,
  TopRatedTab,
  AllGeners
}: TopRatedSectionProps) {
  const searchParams = useSearchParams();
  // console.log('TopRated');

  const pathname = usePathname();
  const { replace } = useRouter();
  const handleTabChange = (tab: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("TopRatedTab", tab);
    replace(`${pathname}?${params.toString()}`, { scroll: false });
  };
  return (
    <div className="container text-main mt-20">
      <div className="flex justify-between items-center">
        <h2 className="my-10 text-2xl font-semibold">Popular</h2>
        <div className="switchTabs bg-white text-black p-1 rounded-full shadow-md">
          <button
            onClick={() => handleTabChange("movie")}
            className={`${
              TopRatedTab === "movie" ? "gradientBg text-white" : ""
            } w-[85px] sm:w-[100px] text-[12px] sm:text-sm py-1 rounded-full`}
          >
            Movies
          </button>
          <button
            onClick={() => handleTabChange("tv")}
            className={`${
              TopRatedTab === "tv" ? "gradientBg text-white" : ""
            } w-[85px] sm:w-[100px] text-[12px] sm:text-sm py-1 rounded-full`}
          >
            Tv Shows
          </button>
        </div>
      </div>
      <CardsSlider DATA={DATA} AllGeners={AllGeners} />
    </div>
  );
}
