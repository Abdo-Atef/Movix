import Cast from "../components/Details/Cast";
import DetailsBanner from "../components/Details/DetailsBanner";
import Recommendations from "../components/Details/Recommendations";
import Similar from "../components/Details/Similar";
import Videos from "../components/Details/Videos";
import { fetchDataFromApi, getGeners } from "../utils/api";

interface DetailsProps {
  params: {
    DetailsId: string[];
  };
}

export async function generateMetadata({ params }: DetailsProps) {
  let id = params.DetailsId[1];
  let type = params.DetailsId[0] === "movies" ? "movie" : "tv";

  let data = await fetchDataFromApi(`${type}/${id}`);

  return {
    title: `${data.title || data.name}`,
  };
}

export default async function Details({ params }: DetailsProps) {
  let id = params.DetailsId[1];
  let type = params.DetailsId[0] === "movies" ? "movie" : "tv";

  let Details = await fetchDataFromApi(`${type}/${id}`);
  let credits = await fetchDataFromApi(`${type}/${id}/credits`);
  let videos = await fetchDataFromApi(`${type}/${id}/videos`);
  let AllGeners = await getGeners();
  let similar = await fetchDataFromApi(`${type}/${id}/similar`);
  let recommendations = await fetchDataFromApi(`${type}/${id}/recommendations`);
  return (
    <div className="text-main min-h-[calc(100vh-65.8px)]">
      {Details.success != false ? (
        <>
          <DetailsBanner Details={Details} credits={credits} />
          <Cast credits={credits} />
          <Videos videos={videos.results} />
          <Similar DATA={similar.results} type={type} AllGeners={AllGeners} />
          <Recommendations
            DATA={recommendations.results}
            AllGeners={AllGeners}
          />
        </>
      ) : (
        <h3 className="pt-56 container text-center text-2xl font-semibold">
          Not Found
        </h3>
      )}
    </div>
  );
}
