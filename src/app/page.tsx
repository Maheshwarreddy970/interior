"use client";

import Bento from "@/components/Bento";
import Heroabout from "@/components/Heroabout";
import Herosection from "@/components/Herosection";
import { AppleCardsCarouselDemo } from "@/components/ui/SwipeCarousel";
import Testimonial from "@/components/ui/Testimonial";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Preloader from "../components/preloader";
import BlurFade from "@/components/ui/blur-fade";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        setIsLoading(false);
        document.body.style.cursor = "default";
        window.scrollTo(0, 0);
      }, 2000);
    })();
  }, []);
  return (
    <main className=" bg-[#FAF9F6]  overflow-hidden ">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Herosection></Herosection>
      {/* <LogoProof></LogoProof> */}
      <div className=" flex flex-col py-20 items-center gap-6 mb-16">
        <BlurFade
          y={50}
          className="text-3xl text-center lg:text-6xl font-semibold mb-5 tracking-wide"
        >
          OUR MISSION & VALUES
        </BlurFade>
        <BlurFade y={50} className="text-xl text-center lg:text-3xl ">
          MISSION
        </BlurFade>
        <BlurFade y={50} className=" text-center lg:text-lg max-w-4xl">
          To produce and distribute the highest quality of luxury furniture
          products that stand for Design. Quality, Innovation and Value.
        </BlurFade>
        <BlurFade y={50} className="text-xl text-center lg:text-3xl ">
          VISION
        </BlurFade>
        <BlurFade y={50} className=" text-center lg:text-lg max-w-4xl">
          To become the leading manufacturing house for bespoke furniture in the
          world, catering to build luxurious masterpieces that are desired and
          appreciated by not only the most elite, but also the most learned and
          demanding industry architects, designers and consultants.{" "}
        </BlurFade>
        <BlurFade y={50} className="text-xl text-center lg:text-3xl ">
          VALUES
        </BlurFade>
        <BlurFade y={50} className=" text-center lg:text-lg max-w-4xl">
          To produce and distribute the highest quality furniture products that
          stand for design, quality, innovation and value.
        </BlurFade>
      </div>
      <Bento></Bento>
      <Heroabout></Heroabout>
      <Testimonial></Testimonial>
      <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
    </main>
  );
}
