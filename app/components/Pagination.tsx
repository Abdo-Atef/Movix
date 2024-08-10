"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import ReactPaginate from "react-paginate";

interface PaginationProps {
  pageCount: number;
  activePage: string;
}

export const Pagination = ({ pageCount, activePage }: PaginationProps) => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handlePageClick = ({ selected }: { selected: number }) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", (selected + 1).toString());
    replace(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="mt-20">
      <ReactPaginate
        initialPage={Number(activePage) - 1}
        breakLabel={<span className="w-7 h-10 flex items-center justify-center">...</span>}
        nextLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md text-black">
            <BsChevronRight />
          </span>
        }
        onPageChange={handlePageClick}
        pageRangeDisplayed={3}
        pageCount={Number(pageCount) > 500 ? 500 : Number(pageCount)}
        previousLabel={
          <span className="w-10 h-10 flex items-center justify-center bg-gray-300 rounded-md text-black">
            <BsChevronLeft />
          </span>
        }
        containerClassName="flex flex-wrap justify-center items-center gap-3"
        pageClassName="w-fit h-10 px-2 flex items-center justify-center bg-gray-300 rounded-md text-black"
        pageLinkClassName="w-fit h-10 px-2 flex items-center justify-center"
        activeClassName="bg-pinkColor text-white"
      />
    </div>
  );
};
