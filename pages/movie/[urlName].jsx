import { getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import React from "react";

function Movie({ movie }) {
  const BASE_URL = "https://image.tmdb.org/t/p/original/";
  const router = useRouter();
  const [showPlayer, setShowPlayer] = useState(false);
  const { data: session } = useSession();

  console.log(movie);
  useEffect(() => {
    if (!session) {
      router.push("/");
    }
  }, []);
  return (
    <div className="relative">
      <Head>
        <title>{movie}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      [urlName]
    </div>
  );
}

export default Movie;
