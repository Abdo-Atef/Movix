"use client";
import { moviesData } from "@/app/types/app";
import { Swiper, SwiperSlide } from "swiper/react";
import Card from "../Card";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

interface SimilarProps {
  DATA: moviesData;
  type: string;
  AllGeners: any;
}

export default function Similar({ DATA, type, AllGeners }: SimilarProps) {

  const skItem = () => {
    return (
      <SwiperSlide>
        <Skeleton
          count={1}
          borderRadius={5}
          className="mb-2 "
          height={300}
          enableAnimation={true}
          duration={2}
          highlightColor="#b2b2b273"
        />
        <Skeleton
          count={1}
          borderRadius={5}
          height={15}
          width={"50%"}
          enableAnimation={true}
          duration={2}
          highlightColor="#b2b2b273"
        />
        <Skeleton
          count={1}
          borderRadius={5}
          height={15}
          width={"70%"}
          enableAnimation={true}
          duration={2}
          highlightColor="#b2b2b273"
        />
      </SwiperSlide>
    );
  };

  if (DATA.length > 0)
  return (
    <>
      <div className="container mb-24">
      <h3 className="text-2xl font-semibold mb-9">Similar {type == "movie" ? "Movies" : "Tv Shows"}</h3>
        {DATA?.length > 0 ? (
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              600: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
          >
            {DATA.map((movie) => (
              <SwiperSlide key={movie.id}>
                <Card movie={movie} AllGeners={AllGeners} />
              </SwiperSlide>
            ))}
          </Swiper>
        ) : (
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            breakpoints={{
              600: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              992: { slidesPerView: 4 },
              1200: { slidesPerView: 5 },
            }}
          >
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
            {skItem()}
          </Swiper>
        )}
      </div>
    </>
  );
}
