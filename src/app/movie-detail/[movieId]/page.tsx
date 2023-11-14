"use client";

import React from "react";
import NavBar from "@/components/navbar";
import { BackgroundImg } from "@/components/ImageType";
import { getImageUrl } from "@/app/utils/movieFunctions";
import { PlayButton } from "@/components/Play";
import { useSearchParams } from "next/navigation";
type Props = {};

function MovieId({}: Props) {
  const searchParams = useSearchParams();
  const backdrop_path = searchParams.get("path");
  const overview = searchParams.get("overview");

  return (
    <div className="flex flex-col items-center justify-center">
      {backdrop_path ? (
        <BackgroundImg imageUrl={getImageUrl(backdrop_path)} />
      ) : null}
      <PlayButton />

      <h3 className="pl-[0.25rem] text-white mt-[2rem] pl-[2rem] text-preview font-bold w-[375px]">
        Previews
      </h3>
      <div className="text-custom-white text-explain mt-[1.5rem] px-[2rem] leading-[0.88rem] w-[375px]">
        {overview}
      </div>
      <NavBar />
    </div>
  );
}

export default MovieId;
