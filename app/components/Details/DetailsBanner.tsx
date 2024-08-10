import { Credits, crew, MovieDetails } from "@/app/types/app";
import { image_base_url } from "@/app/utils/api";
import styles from "./styles.module.css";
import dayjs from "dayjs";
import DetailsCircleRating from "./DetailsCircleRating";
import NoPoster from "../../../public/no-poster.png";
import Image from "next/image";

interface DetailsBannerProps {
  Details: MovieDetails;
  credits: Credits;
}

export default function DetailsBanner({
  Details,
  credits,
}: DetailsBannerProps) {
  let Directors = credits.crew
    .filter((crew: crew) => crew.job === "Director")
    .slice(0, 4);
  let Writers = credits.crew
    .filter((crew: crew) => crew.job === "Writer")
    .slice(0, 4);

  const toHoursAndMinutes = (totalMinutes: number) => {
    const hours = Math.floor(+totalMinutes / 60);
    const minutes = +totalMinutes % 60;
    return `${hours > 0 ? ` ${hours}h` : ""} ${minutes > 0 ? ` ${minutes}m` : ""}`;
  };

  return (
    <div
      className={`${styles.banner} mb-16 w-full bg-no-repeat bg-cover bg-center relative`}
      style={{
        backgroundImage: `url(${image_base_url}/${Details.backdrop_path})`,
      }}
    >
      <div className="container relative z-10 pt-28 flex gap-14 max-md:flex-col">
        <figure className={`mb-0 mt-3 rounded-lg`}>
          <Image
            className={`rounded-lg ${styles.posterImage} max-w-none lg:w-[320px] md:w-[280px] w-full`}
            width={320}
            height={480}
            src={
              Details.poster_path
                ? `${image_base_url}/${Details.poster_path}`
                : NoPoster
            }
            alt={`${Details.title || Details.name} poster`}
          />
        </figure>
        <div>
          <h2 className="text-[32px] font-medium">
            {Details.title || Details.name}
            {Details.release_date ? (
              <span className="ms-2">
                {dayjs(Details.release_date).format("(YYYY)")}
              </span>
            ) : (
              ""
            )}
          </h2>
          {Details.tagline ? (
            <h3 className="text-gray-500 text-[17px] italic font-medium">
              {Details.tagline}
            </h3>
          ) : (
            ""
          )}
          <ul className="m-0 p-0 flex gap-2 mt-4">
            {Details.genres?.map((genere) => (
              <li
                key={genere.id}
                className="inline-block bg-pinkColor text-white px-3 py-1 rounded-xl text-[11px] font-medium"
              >
                {genere.name}
              </li>
            ))}
          </ul>
          {+Details.vote_average > 0 ? (
            <div className="max-w-[80px] my-6">
              <DetailsCircleRating movie={Details} />
            </div>
          ) : (
            ""
          )}
          <div className="overView mt-6">
            <h3 className="text-[20px] font-medium mb-2">Overview</h3>
            <p className="font-medium max-w-[700px]">{Details.overview}</p>
          </div>
          <div className="flex gap-5 mt-9 pb-4 border-b-gray-700 border-b-[1px] text-gray-500 *:font-semibold">
            {Details.status ? (
              <div className="flex flex-wrap">
                <span className="text-main font-bold me-2">Status:</span>
                <span>{Details.status}</span>
              </div>
            ) : (
              ""
            )}
            {Details.release_date ? (
              <div className="flex flex-wrap">
                <span className="text-main font-bold me-2">Release Date:</span>
                <span>{dayjs(Details.release_date).format("MMM D, YYYY")}</span>
              </div>
            ) : (
              ""
            )}
            {Details.runtime ? (
              <div className="flex flex-wrap">
                <span className="text-main font-bold me-2">Runtime:</span>
                <span>{toHoursAndMinutes(Details.runtime)}</span>
              </div>
            ) : (
              ""
            )}
          </div>
          {Directors.length > 0 ? (
            <div className="py-4 border-b-gray-700 border-b-[1px] text-gray-500 *:font-semibold flex">
              <p className="text-main me-2 font-bold inline-block">Director:</p>
              <div>
                {Directors.map((director: crew) => (
                  <span className=" inline-block me-2" key={director.id}>
                    {director.name}
                    {director !== Directors[Directors.length - 1] ? "," : ""}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
          {Writers.length > 0 ? (
            <div className="py-4 border-b-gray-700 border-b-[1px] text-gray-500 *:font-semibold flex">
              <p className="text-main me-2 font-bold inline-block">Writer:</p>
              <div>
                {Writers.map((Writer: crew) => (
                  <span className=" inline-block me-2" key={Writer.id}>
                    {Writer.name}
                    {Writer !== Writers[Writers.length - 1] ? "," : ""}
                  </span>
                ))}
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="bannerShadow absolute w-full h-full z-5 start-0 top-0"></div>
    </div>
  );
}
