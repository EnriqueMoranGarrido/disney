import React from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/images/logo.svg";
import {
  HomeIcon,
  SearchIcon,
  PlusIcon,
  StarIcon,
} from "@heroicons/react/solid";

import { signIn, signOut, useSession, getSession } from "next-auth/react";

const Navbar = () => {
  const { data: session } = useSession();

  return (
    <header className="sticky bg-[#040714] top-0 z-[1000] flex items-center px-10 md:px-12 h-[72px]">
      <Link href="/">
        {" "}
        <Image
          src={logo}
          alt=""
          width={80}
          height={80}
          className="cursor-pointer"
        />
      </Link>

      {session && (
        <div className="hidden ml-10 md:flex items-center space-x-6">
          <Link className="header-link group" href="/">
            <HomeIcon className="h-4" />
            <span className="span">Home</span>
          </Link>
          <a className="header-link group">
            <SearchIcon className="h-4" />
            <span className="span">Search</span>
          </a>
          <a className="header-link group">
            <PlusIcon className="h-4" />
            <span className="span">Watchlist</span>
          </a>
          <a className="header-link group">
            <StarIcon className="h-4" />
            <span className="span">Originals</span>
          </a>
          <a className="header-link group">
            <img src="/images/movie-icon.svg" alt="" className="h-5" />
            <span className="span">Movies</span>
          </a>
          <a className="header-link group">
            <img src="/images/series-icon.svg" alt="" className="h-5" />
            <span className="span">Series</span>
          </a>
        </div>
      )}

      {!session ? (
        <button
          className="ml-auto uppercase border px-4 py-1.5 rounded font-medium tracking-wide hover:bg-white hover:text-black transition duration-200"
          onClick={signIn}
        >
          Login
        </button>
      ) : (
        <div className=" absolute right-1 ">
          <Image
            src={session.user.image}
            className=" rounded-full object-cover cursor-pointer  "
            onClick={signOut}
            width={60}
            height={60}
          />
        </div>
      )}
    </header>
  );
};
//hola
export default Navbar;
