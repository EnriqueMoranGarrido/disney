import React from "react";

import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import marvelMovies from "../../public/assets/data/marvelMovies";

function Movie({ movie }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  const [showPlayer, setShowPlayer] = useState(false);
  const { data: session } = useSession();

  console.log(movie.name);
  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);
  return (
    <div className="relative">
      <Head>
        <title>{movie.name}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{"hola"}</p>
    </div>
  );
}

export default Movie;

export async function getServerSideProps(context) {
  const findMyMovie = (element) => element.urlName == movieUrlName;

  const session = await getSession(context);

  const movieUrlName = context.query.urlName;
  const movieId = marvelMovies.findIndex(findMyMovie);
  const movie = marvelMovies[movieId];
  console.log(movie);
  // const { id } = context.query;
  // const movie = marvelMovies[context.query.id];
  // console.log(movie);

  // const request = await fetch(
  //   `https://api.themoviedb.org/3/movie/${id}?api_key=${process.env.API_KEY}&language=en-US&append_to_response=videos`
  // ).then((response) => response.json());

  return {
    props: {
      session,
      movie,
      // result: request,
    },
  };
}
