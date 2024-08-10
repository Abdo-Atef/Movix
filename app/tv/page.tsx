import Card from "../components/Card";
import { Pagination } from "../components/Pagination";
import { MovieItem } from "../types/app";
import { fetchDataFromApi, getGeners } from "../utils/api";
import { Metadata } from "next";

interface TvProps {
  searchParams: { page: string };
}

export const metadata: Metadata = {
  title: "Movix | Tv Shows",
  description: "Movix is a movie database website where you can find all the information about your favorite movies and tv shows.",
};

async function Tv({ searchParams }: TvProps) {
  const pageQuery = searchParams.page || "1";
  const AllGeners = await getGeners();
  const data = await fetchDataFromApi(`discover/tv?page=${pageQuery}`, {
    cache: "no-cache",
  });

  return (
    <div className="container py-28 min-h-[calc(100vh-65.8px)]">
      {data.results ? (
        <>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
            {data.results.map((movie: MovieItem) => {
              return (
                <Card movie={movie} AllGeners={AllGeners} key={movie.id} />
              );
            })}
          </div>
          <Pagination pageCount={data.total_pages} activePage={pageQuery} />
        </>
      ) : (
        <h3 className="text-xl font-semibold text-center mt-52">No Tv Shows found</h3>
      )}
    </div>
  );
}

export default Tv;
