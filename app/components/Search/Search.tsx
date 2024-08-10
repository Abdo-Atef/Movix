"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useRef } from "react";

export default function Search({ type }: { type: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams);
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
      params.delete("page");
    }
    replace(`${pathname}?${params.toString()}`);
  };

  const handleTypeChange = (selectedType: string) => {
    const params = new URLSearchParams(searchParams);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
    params.delete("query");
    params.delete("page");
    params.set("type", selectedType);
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="">
      <div>
        <div className="flex justify-center items-center">
          <button
            onClick={() => handleTypeChange("movie")}
            className={`${
              type == "movie"
                ? `gradientBg text-white`
                : "border border-solid border-gray-500"
            } w-40 py-[8px] rounded-md font-medium me-3`}
          >
            Movies
          </button>
          <button
            onClick={() => handleTypeChange("tv")}
            className={`${
              type == "tv"
                ? `gradientBg text-white`
                : "border border-solid border-gray-500"
            } w-40 py-[8px] rounded-md font-medium`}
          >
            Tv Shows
          </button>
        </div>
      </div>
      <div className="my-7">
        <input
          className="text-main outline-none bg-transparent border border-gray-600 w-full rounded p-3 px-4"
          onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
            handleSearch(e.currentTarget.value);
          }}
          defaultValue={searchParams.get("query")?.toString()}
          ref={inputRef}
          placeholder="Search by the name..."
        />
      </div>
    </div>
  );
}
