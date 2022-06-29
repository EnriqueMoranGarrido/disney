import React from "react";

import Image from "next/image";
import { useRouter } from "next/router";
import marvelMovies from "../public/assets/data/marvelMovies";
import Link from "next/link";

function MovieThumbnail({ movie }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();

  return (
    <div
      className="flex min-w-[250px] min-h-[170px] md:min-w-[260px] md:min-h-[150px] rounded-lg overflow-hidden shadow-xl cursor-pointer border-[3px] border-[#f9f9f9] border-opacity-10  hover:border-opacity-80 hover:shadow-2xl transform hover:scale-105 transition duration-300"
      onClick={() => router.push(`/movie/${movie.urlName}`)}
    >
      <Image
        src={movie.thumbnail}
        width={260}
        height={150}
        objectFit="cover"
        className="rounded-lg"
      />
    </div>
  );
}

export default MovieThumbnail;
