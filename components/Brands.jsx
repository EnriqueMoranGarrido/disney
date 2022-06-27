import Image from "next/image";
import { Player } from "video-react";

function Brands() {
  return (
    <section className="grid grid-cols-2 md:flex md:flex-row justify-center items-center mt-10 gap-4 px-4 max-w-[1400px] mx-auto">
      <div className="brand group w-[95%] col-span-2">
        <Image src="/images/disney.png" layout="fill" objectFit="contain" />
        <video
          autoPlay
          loop
          muted
          className="hidden group-hover:inline rounded-lg object-cover w-full"
        >
          <source src="/videos/disney.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group w-[90%]">
        <Image src="/images/pixar.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover w-full"
        >
          <source src="/videos/pixar.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group w-[90%]">
        <Image src="/images/marvel.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover w-full"
        >
          <source src="/videos/marvel.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group w-[90%]">
        <Image src="/images/starwars.png" layout="fill" objectFit="cover" />
        <video
          autoPlay
          loop
          muted
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover w-full"
        >
          <source src="/videos/star-wars.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="brand group w-[90%]">
        <Image
          src="/images/national-geographic.png"
          layout="fill"
          objectFit="cover"
        />
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hidden group-hover:inline rounded-lg object-cover w-full"
        >
          <source src="/videos/national-geographic.mp4" type="video/mp4" />
        </video>
      </div>
    </section>
  );
}

export default Brands;
