import React from "react";
import MovieThumbnail from "./MovieThumbnail";
import marvelMovies from "../public/assets/data/marvelMovies";

function MoviesCollection({ results, title }) {
  return (
    <div className="relative flex flex-col space-y-2 my-10 px-8 max-w-[1400px] mx-auto ">
      <h2 className="font-semibold">{title}</h2>
      <div className="flex space-x-6 overflow-y-hidden overflow-x-scroll  p-2 -m-2">
        {marvelMovies.map((movie) => (
          <MovieThumbnail key={movie.id} movie={movie} scrollbar={false} />
        ))}
      </div>
    </div>
  );
}

export default MoviesCollection;
