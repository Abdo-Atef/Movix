"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { MovieItem, moviesData } from "../../types/app";
import { image_base_url } from "../../utils/api";
import styles from "./styles.module.css";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import GenersList from "../GenersList";
import Link from "next/link";

interface HomeSliderProps {
  DATA: moviesData;
  AllGeners: any;
}

export default function HomeSlider({ DATA, AllGeners }: HomeSliderProps) {
  return (
    <Swiper className=" h-[600px] w-full max-sm:h-[600px] text-main" loop={true}>
      {AllGeners && DATA?.length > 0 ? (
        <>
          {DATA?.map((movie: MovieItem) => (
            <SwiperSlide key={movie.id}>
              <div
                className={`${styles.slideCo} w-full h-full bg-cover bg-top relative`}
                style={{
                  backgroundImage: `url(${image_base_url}/${movie.backdrop_path})`,
                }}
              >
                <div className="container h-full flex items-center relative z-20">
                  <div className={`${styles.textContent} `}>
                    <h2 className="font-extrabold md:text-6xl sm:text-4xl text-3xl">
                      {movie.title}
                    </h2>
                    <div className="my-5 flex items-center sm:gap-10 gap-9">
                      <div className="w-[50px] h-[50px] rounded-full">
                        <CircularProgressbarWithChildren
                          value={+movie.vote_average?.toFixed(1)}
                          maxValue={10}
                          styles={buildStyles({
                            pathColor: "#da2f68",
                            trailColor: "transparent",
                            strokeLinecap: "butt",
                          })}
                        >
                          <span className="text-[13px] font-bold">
                            {movie.vote_average?.toFixed(1)}
                          </span>
                        </CircularProgressbarWithChildren>
                      </div>
                      <div className="flex gap-2">
                        <GenersList
                          genersIds={movie.genre_ids?.slice(0, 3)}
                          AllGeners={AllGeners}
                          genereClass="bg-pinkColor text-white sm:px-4 px-3 py-1 rounded-xl text-[12px]"
                        />
                      </div>
                    </div>
                    <p className="my-9">{movie.overview}</p>
                    <Link
                      href={
                        movie.title ? `/movies/${movie.id}` : `/tv/${movie.id}`
                      }
                      className="gradientBg py-3 px-8 rounded-xl inline-block sm:text-lg text-md text-white"
                    >
                      Watch Now
                    </Link>
                  </div>
                </div>
                <div className="backdropShadow absolute w-full h-full z-5 start-0 top-0"></div>
              </div>
            </SwiperSlide>
          ))}
        </>
      ) : (
        ""
      )}
    </Swiper>
  );
}
