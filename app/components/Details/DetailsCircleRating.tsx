"use client";
import { MovieDetails, MovieItem } from "@/app/types/app";
import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";


export default function DetailsCircleRating({ movie }: { movie: MovieDetails }) {
  return (
    <CircularProgressbarWithChildren
      value={+movie.vote_average?.toFixed(1)}
      maxValue={10}
      styles={buildStyles({
        pathColor: movie.vote_average >= 7 ? "green" : "orange",
        trailColor: "transparent",
        strokeLinecap: "butt",
      })}
    >
      <span className="text-xl font-bold">
        {movie.vote_average?.toFixed(1)}
      </span>
    </CircularProgressbarWithChildren>
  );
}