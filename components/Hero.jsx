import React from "react";
import Head from "next/head";
import Image from "next/image";

import { signIn, signOut, useSession } from "next-auth/react";

const Hero = () => {
  const { data: session } = useSession();

  return (
    <>
      {!session && (
        <div>
          <div className="relative min-h-[calc(100vh-72px)]">
            <Image
              src="/images/hero-large.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex justify-left items-center">
            <div className="absolute flex flex-col space-y-3 top-1/4 w-full justify-center items-center max-w-screen-sm mx-auto p-8 -mt-16">
              <p className="text-3xl font-bold">
                Your favorite stories, all in one place.
              </p>
              <Image
                src="/images/cta-logo-one.svg"
                width="600"
                height="150"
                objectFit="contain"
              />
              <button className="bg-blue-600 uppercase text-xl tracking-wide font-extrabold py-4 px-6 w-full rounded hover:bg-[#0485ee]">
                Get all there
              </button>

              <Image
                src="/images/cta-logo-two.png"
                width="600"
                height="70"
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Hero;
