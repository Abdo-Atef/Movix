import React from "react";
import { MovieItem } from "../types/app";
import Link from "next/link";
import Image from "next/image";
import { image_base_url } from "../utils/api";
import CircleRating from "./CircleRating";
import GenersList from "./GenersList";
import dayjs from "dayjs";
import NoPoster from '../../public/no-poster.png'

interface cardProps {
  movie: MovieItem;
  AllGeners: any;
}

export default function Card({ movie, AllGeners }: cardProps) {
  return (
    <Link href={movie.title ? `/movies/${movie.id}`: `/tv/${movie.id}`} className="card">
      <div className="relative" style={{aspectRatio:1/1.5}}>
        <Image
          className="w-full rounded-lg"
          width={300}
          height={400}
          src={movie.poster_path ? `${image_base_url}/${movie.poster_path}` : NoPoster}
          alt={`${movie.title || movie.name} poster`}
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkAAIAAAoAAv/lxKUAAAAASUVORK5CYII="
        />
        {movie.vote_average ?
        <div className="rating w-[50px] bg-white text-black rounded-full p-[2px] absolute -bottom-4 start-2">
          <CircleRating movie={movie} />
        </div>
        : ''}
        <div className="text-white absolute bottom-[8px] end-[7px] hidden sm:flex gap-1 flex-wrap w-[70%] justify-end">
          <GenersList
            key={movie.id}
            AllGeners={AllGeners}
            genersIds={movie.genre_ids?.slice(0, 2)}
            genereClass="bg-pinkColor text-white sm:px-2 px-2 py-1 rounded-md text-[10px] font-medium"
          />
        </div>
      </div>
      <div className="card-body mt-8 px-[2px]">
        <h3 className="oneLine font-medium text-[18px]">{movie.title || movie.name}</h3>
        <p className="text-[13px] font-medium text-gray-400">{dayjs(movie.release_date).format('MMM D, YYYY')}</p>
      </div>
    </Link>
  );
}
