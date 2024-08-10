import { Metadata } from "next";
import HomeSlider from "./components/Home/HomeSlider";
import PopularSection from "./components/Home/PopularSection";
import TopRatedSection from "./components/Home/TopRatedSection";
import TrendingSection from "./components/Home/TrendingSection";
import { moviesData } from "./types/app";
import { fetchDataFromApi, getGeners } from "./utils/api";

interface searchParamsProbs{
  searchParams: {
    TrendingTab?: string;
    PopularTab?: string;
    TopRatedTab?: string;
  }
}

export const metadata: Metadata = {
  title: "Movix | Home",
  description: "Movix is a movie database website where you can find all the information about your favorite movies and tv shows.",
};

export default async function Home({searchParams}: searchParamsProbs) {
  let { TrendingTab, PopularTab, TopRatedTab } = searchParams;
  

  let AllGeners:any = await getGeners();

  let { results } = await fetchDataFromApi("movie/popular", {next:{revalidate:3600}});
  const homeBannerData:moviesData = results;
  
  // 
  let trendingQuery = TrendingTab || "day";
  const trendingResponse = await fetchDataFromApi(`trending/movie/${trendingQuery}`, {next:{revalidate:3600}});
  const TrendingData:moviesData = trendingResponse.results;

  // 
  let PopularQuery = PopularTab || "movie";
  const PopularResponse = await fetchDataFromApi(`${PopularQuery}/popular`, {next:{revalidate:3600}});
  const PopularData:moviesData = PopularResponse.results;
  
  // 
  let TopRatedTabQuery = TopRatedTab || "movie";
  const TopRatedTabResponse = await fetchDataFromApi(`${TopRatedTabQuery}/top_rated`, {next:{revalidate:3600}});
  const TopRatedTabData:moviesData = TopRatedTabResponse.results;
  
  
  return (
    <>
      <section className="py-[45px]">
        <HomeSlider DATA={homeBannerData} AllGeners={AllGeners} />
        <TrendingSection DATA = {TrendingData} TrendingTab={trendingQuery} AllGeners={AllGeners}/>
        <PopularSection DATA = {PopularData} PopularTab={PopularQuery} AllGeners={AllGeners}/>
        <TopRatedSection DATA = {TopRatedTabData} TopRatedTab={TopRatedTabQuery} AllGeners={AllGeners}/>
      </section>
    </>
  );
}
