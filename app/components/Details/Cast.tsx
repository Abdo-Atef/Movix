"use client";
import { Credits } from "@/app/types/app";
import { image_base_url } from "@/app/utils/api";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import NoUser from "./no-user.jpg";

export default function Cast({ credits }: { credits: Credits }) {
  const Cast = credits.cast;
  if (Cast.length > 0) 
    
  return (
    <div className="container py-5 overflow-hidden mb-24">
      <h3 className="text-2xl font-semibold mb-9">Top Cast</h3>
      <Swiper
        spaceBetween={20}
        slidesPerView={2}
        breakpoints={{
          600: { slidesPerView: 3 },
          768: { slidesPerView: 4 },
          992: { slidesPerView: 5 },
          1200: { slidesPerView: 6 },
        }}
      >
        {Cast.map((person) => (
          <SwiperSlide key={person.id} className="text-center">
            <figure className="rounded-full w-36 h-36 sm:w-40 sm:h-40  overflow-hidden mx-auto">
              <Image
                className="w-full h-auto mx-auto"
                width={100}
                height={120}
                src={person.profile_path ? `${image_base_url}/${person.profile_path}` : NoUser}
                alt={person.name}
                quality={100}
              />
            </figure>
            <p className="font-semibold text-lg">{person.name}</p>
            <p className="text-gray-500 font-bold">{person.character}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
