import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";

const drStrange2bg = "/images/marvel/drStrange2bg.jpg";
const kenobibg = "/images/marvel/kenobibg.jpg";
const msMarvelbg = "/images/marvel/msmarvelbg.jpg";
const moonknightbg = "/images/marvel/moonknightbg.jpg";
const whatifbg = "/images/marvel/whatifbg.jpg";
const wandavisionbg = "/images/marvel/wandavisionbg.jpg";
const drStrangebg = "/images/marvel/drStrangebg.jpg";

const drStrange2 = "/images/marvel/drStrange2.png";
const kenobi = "/images/marvel/kenobiBg.png";
const moonknighttitle = "/images/marvel/moontitle.png";
const msmarveltitle = "/images/marvel/msmarveltitle.png";
const whatif = "/images/marvel/whatif.png";
const wandavision = "/images/marvel/wandavision.png";
const drStrange = "/images/marvel/drStrange.png";

const Slider = () => {
  return (
    <section className="relative mt-7 shadow-2xl max-w-full mx-auto ">
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={true}
        showThumbs={false}
        interval={4000}
        swipeable={true}
        stopOnHover={true}
        animationHandler={"slide"}
      >
        <div>
          <img loading="lazy" src={drStrange2bg} />
          <div className="justify-start top-0 absolute">
            <img loading="lazy" src={drStrange2} />
          </div>
        </div>
        <div>
          <img loading="lazy" src={kenobibg} />
          <div className="justify-start top-0 absolute">
            <img loading="lazy" src={kenobi} />
          </div>
        </div>
        <div>
          <img loading="lazy" src={msMarvelbg} />
          <div className="justify-start top-0 absolute">
            <img loading="lazy" src={msmarveltitle} />
          </div>
        </div>
        <div>
          <img loading="lazy" src={moonknightbg} />
          <div className="justify-start top-0 absolute">
            <img loading="lazy" src={moonknighttitle} />
          </div>
        </div>
        <div>
          <img loading="lazy" src={whatifbg} />
          <div className="justify-start top-0 absolute">
            <img loading="lazy" src={whatif} />
          </div>
        </div>
        <div>
          <img loading="lazy" src={wandavisionbg} />
          <div className="justify-start top-0 absolute">
            <img loading="lazy" src={wandavision} />
          </div>
        </div>
        <div>
          <img loading="lazy" src={drStrangebg} />
          <div className="justify-start top-0 absolute">
            <img loading="lazy" src={drStrange} />
          </div>
        </div>
      </Carousel>
    </section>
  );
};

export default Slider;
