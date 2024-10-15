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
import data from "@/../data/home.json"
import { cn } from "@/lib/utils";

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
          className="text-3xl text-center lg:text-5xl font-semibold mb-5 tracking-wide"
        >
          {data.overview.title}
        </BlurFade>
        <motion.div className=" w-full grid -mt-10 lg:grid-cols-3 max-w-7xl mx-auto">
          {
            data.overview.info.map((info, i) => (
              <Textparelex key={i}>
                <div className={cn("text-xl text-left lg:text-center max-w-sm lg:text-xl ",i==1 && "mt-20")}>
                  {info.heading}
                </div>
                <div className=" text-left lg:text-center lg:text-lg max-w-sm">
                  {info.text}
                </div>
              </Textparelex>
            ))
          }
        </motion.div>
      </div>
      <Bento></Bento>
      <Heroabout></Heroabout>
      <Testimonial></Testimonial>
      <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
    </main>
  );
}
