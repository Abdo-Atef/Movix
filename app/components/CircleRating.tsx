"use client";
import React from "react";
import {
  buildStyles,
  CircularProgressbarWithChildren,
} from "react-circular-progressbar";
import { MovieItem } from "../types/app";

export default function CircleRating({ movie }: { movie: MovieItem }) {
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
      <span className="text-[13px] font-bold pb-[2px]">
        {movie.vote_average?.toFixed(1)}
      </span>
    </CircularProgressbarWithChildren>
  );
}
