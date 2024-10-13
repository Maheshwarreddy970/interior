"use client";

import Bento from "@/components/Bento";
import Heroabout from "@/components/Heroabout";
import Herosection from "@/components/Herosection";
import { AppleCardsCarouselDemo } from "@/components/ui/SwipeCarousel";
import Testimonial from "@/components/ui/Testimonial";
import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from "react";
import Preloader from "../components/preloader";
import Textparelex from "@/components/ui/Textparelex";
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
      <div  className=" flex flex-col py-20 items-center gap-6 mb-16">
        <BlurFade
          y={50}
          className="text-3xl text-center lg:text-5xl font-semibold mb-5 tracking-wide"
        >
          OUR MISSION & VALUES
        </BlurFade>
        <motion.div  className=" w-full grid mt-20 lg:grid-cols-3 max-w-7xl mx-auto">
          <Textparelex>
            <div  className="text-xl text-left lg:text-center max-w-sm lg:text-xl ">
              MISSION
            </div>
            <div  className=" text-left lg:text-center lg:text-lg max-w-sm">
              To produce and distribute the highest quality of luxury furniture
              products that stand for Design. Quality, Innovation and Value.
            </div>
          </Textparelex>
          <Textparelex>
            <div  className="text-xl text-right lg:text-center mt-7 lg:mt-36  max-w-sm lg:text-xl ">
              VISION
            </div>
            <div  className=" text-right lg:text-center lg:text-lg max-w-sm">
              To become the leading manufacturing house for bespoke furniture in the
              world, catering to build luxurious masterpieces that are desired and
              appreciated by not only the most elite, but also the most learned and
              demanding industry architects, designers and consultants.{" "}
            </div>
          </Textparelex>
          <Textparelex>
            <div  className="text-xl text-left lg:text-center max-w-sm lg:text-xl ">
              VALUES
            </div>
            <div  className=" text-left lg:text-center lg:text-lg max-w-sm">
              To produce and distribute the highest quality furniture products that
              stand for design, quality, innovation and value.
            </div>
          </Textparelex>
        </motion.div>
      </div>
      <Bento></Bento>
      <Heroabout></Heroabout>
      <Testimonial></Testimonial>
      <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
    </main>
  );
}
