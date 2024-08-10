import Card from "../components/Card";
import { Pagination } from "../components/Pagination";
import Search from "../components/Search/Search";
import { MovieItem } from "../types/app";
import { fetchDataFromApi, getGeners } from "../utils/api";
import { Metadata } from "next";

interface SearchPageProps {
  searchParams: {
    query: string;
    type: string;
    page: string;
  };
}

export const metadata: Metadata = {
  title: "Movix | Search",
  description: "Movix is a movie database website where you can find all the information about your favorite movies and tv shows.",
};

async function SearchPage({ searchParams }: SearchPageProps) {
  const AllGeners = await getGeners();
  const pageQuery = searchParams.page || "1";
  const query = searchParams.query || "";
  const type = searchParams.type || "movie";

  let data;

  if (type == "tv" && query.length > 0) {
    data = await fetchDataFromApi(`search/tv?query=${query}&page=${pageQuery}`);
  } else if (type == "movie" && query.length > 0) {
    data = await fetchDataFromApi(
      `search/movie?query=${query}&page=${pageQuery}`
    );
  }

  return (
    <div className="container py-28 min-h-[calc(100vh-65.8px)]">
      <Search type={type} />
      {data?.results?.length > 0 ? (
        <>
          <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-3">
            {data?.results.map((movie: MovieItem) => {
              return (
                <Card movie={movie} AllGeners={AllGeners} key={movie.id} />
              );
            })}
          </div>
          <Pagination pageCount={data?.total_pages} activePage={pageQuery} />
        </>
      ) : (
        ""
      )}
      {data?.results?.length === 0 && query.length > 0 ? (
        <div className="mt-14">
          <h4 className="text-center text-xl text-gray-500">
            Sorry there are no results
          </h4>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default SearchPage;
