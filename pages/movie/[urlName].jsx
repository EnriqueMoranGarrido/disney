import React from "react";

import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import marvelMovies from "../../public/assets/data/marvelMovies";

import Hero from "../../components/Hero";
import Navbar from "../../components/Navbar";

import { PlusIcon, XIcon } from "@heroicons/react/solid";
import { Player } from "video-react";

function Movie({ movie }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  const [showPlayer, setShowPlayer] = useState(false);
  const { data: session } = useSession();

  console.log(movie.background);
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
      <Navbar />
      {!session ? (
        <Hero />
      ) : (
        <section className="relative z-50">
          <div className="relative min-h-[calc(100vh-72px)] ">
            <img
              src={movie.background}
              layout="fill"
              objectFit="cover"
              className="opacity-80 w-full"
            />
          </div>
          <div className="absolute inset-y-28 md:inset-y-auto md:bottom-10 inset-x-4 md:inset-x-12 space-y-6 z-50">
            {/* <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
              {movie.name}
            </h1> */}
            <div className="relative top-5 w-[40%]  justify-center items-center ">
              <Image
                src={movie.title}
                layout="responsive"
                width={"500"}
                height={"400"}
              />
            </div>

            <div className="flex items-center space-x-3 md:space-x-5">
              <button className="text-xs md:text-base bg-[#f9f9f9] text-black flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]">
                <img
                  src="/images/play-icon-black.svg"
                  alt=""
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Play
                </span>
              </button>

              <button
                className="text-xs md:text-base bg-black/30 text-[#f9f9f9] border border-[#f9f9f9] flex items-center justify-center py-2.5 px-6 rounded hover:bg-[#c6c6c6]"
                onClick={() => setShowPlayer(true)}
              >
                <img
                  src="/images/play-icon-white.svg"
                  alt=""
                  className="h-6 md:h-8"
                />
                <span className="uppercase font-medium tracking-wide">
                  Trailer
                </span>
              </button>

              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <PlusIcon className="h-6" />
              </div>

              <div className="rounded-full border-2 border-white flex items-center justify-center w-11 h-11 cursor-pointer bg-black/60">
                <img src="/images/group-icon.svg" alt="" />
              </div>
            </div>

            {/* <p className="text-xs md:text-sm">hola</p> */}
            <h4 className="text-sm md:text-lg max-w-4xl">
              {movie.description}
            </h4>
          </div>

          {showPlayer && (
            <div className="absolute inset-0 bg-black opacity-50 h-full w-full z-50"></div>
          )}

          <div
            className={`absolute top-3 inset-x-[7%] md:inset-x-[13%] rounded overflow-hidden transition duration-1000 ${
              showPlayer ? "opacity-100 z-50" : "opacity-0"
            }`}
          >
            <div className="flex items-center justify-between bg-black text-[#f9f9f9] p-3.5">
              <span className="font-semibold">Play Trailer</span>
              <div
                className="cursor-pointer w-8 h-8 flex justify-center items-center rounded-lg opacity-50 hover:opacity-75 hover:bg-[#0F0F0F]"
                onClick={() => setShowPlayer(false)}
              >
                <XIcon className="h-5" />
              </div>
            </div>
            {showPlayer ? (
              <div className="relative  z-20 top-0">
                <video
                  autoPlay
                  loop
                  controls
                  className="inline rounded-lg object-cover w-full"
                >
                  <source src="/videos/memeVideo.mp4" type="video/mp4" />
                </video>
              </div>
            ) : null}
          </div>
        </section>
      )}
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
