"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import VideoPopUp from "./VideoPopUp";

type videoProps = {
  videos: {
    id: string;
    key: string;
    name: string;
    site: string;
  }[];
};

export default function Videos({ videos }: videoProps) {
  const [modalShow, setModalShow] = useState<boolean>(false);
  const [videoKey, setVideoKey] = useState<string | null>("");
  let FilterdVideos = videos.filter((video) => video.site == "YouTube");
  
  if (videos.length > 0)
    return (
      <div className="container mt-9 mb-24">
        <h3 className="text-2xl font-semibold mb-9">Official Videos</h3>
        <Swiper
          spaceBetween={20}
          slidesPerView={2.2}
          breakpoints={{
            768: { slidesPerView: 2.5 },
            992: { slidesPerView: 3.5 },
          }}
        >
          {FilterdVideos.map((video) => (
            <SwiperSlide key={video.id} className="text-center">
              <div
                className="cursor-pointer"
                onClick={() => {
                  setModalShow(true);
                  setVideoKey(video.key);
                }}
              >
                <figure>
                  <Image
                    className="rounded-lg"
                    src={`https://img.youtube.com/vi/${video.key}/mqdefault.jpg`}
                    width={350}
                    height={100}
                    alt={video.name}
                  />
                </figure>
                <p className="text-start text-[15px] mt-2">{video.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <VideoPopUp
          modalShow={modalShow}
          videoKey={videoKey}
          setModalShow={setModalShow}
          setVideoKey={setVideoKey}
        />
      </div>
    );
}
