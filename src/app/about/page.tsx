"use client";

import image4 from "@/../public/krishnakunj2.jpg";
import About from "@/components/About";
import Preloader from "@/components/preloader/index";
import Starssection from "@/components/Starsection";
import BlurFade from "@/components/ui/blur-fade";
import OpenCards from "@/components/ui/expandingcard";
import about from "@/../data/about.json";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LogoProof from "@/components/LogosSection";
export default function Page() {
  // Renamed to Page
  const [isLoading, setIsLoading] = useState(true);

  // Use const instead of let
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Use const instead of let
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-5%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Handle loading effect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = "default";
      window.scrollTo(0, 0);
    }, 1000);
  }, []);

  return (
    <motion.section className="p-4 sm:p-10 mt-20  overflow-hidden">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div className="flex">
        <BlurFade className="text-4xl sm:text-6xl lg:text-8xl justify-center items-center font-extrabold flex flex-wrap max-w-4xl mx-auto gap-5 sm:gap-10 text-center">
          Casa mobilia
          <Image
            src={"/about/four.jpg"}
            width={1080}
            height={1080}
            alt="sofa image"
            className="w-28 h-16 border shadow-lg sm:w-40 sm:h-24 object-cover flex rounded-2xl sm:rounded-3xl"
          ></Image>
          is
          <Image
            src={"/about/five.jpg"}
            width={1080}
            height={1080}
            alt="sofa image"
            className="w-28 h-16 border shadow-lg sm:w-40 sm:h-24 object-cover flex rounded-2xl sm:rounded-3xl"
          ></Image>
          <span className="flex flex-wrap">Known for </span>Innovative
        </BlurFade>
      </div>

      <Starssection />
      <OpenCards />

      <div className="hidden lg:grid grid-cols-7 gap-4 md:gap-6 mt-8">
        <BlurFade x={-30} className="col-span-2">
          <Image
            src={"/about/one.jpg"}
            alt="image"
            width={1080}
            height={1080}
            className="object-cover rounded-3xl border shadow-md h-80 w-full"
          ></Image>
        </BlurFade>
        <BlurFade className="col-span-3">
          <Image
            src={"/about/two.jpg"}
            alt="image"
            width={1080}
            height={1080}
            className="object-cover rounded-3xl border shadow-md h-80 w-full"
          ></Image>
        </BlurFade>
        <BlurFade y={0} x={30} className="col-span-2">
          <Image
            src={"/about/three.jpg"}
            alt="image"
            width={1080}
            height={1080}
            className="object-cover rounded-3xl border shadow-md h-80 w-full"
          ></Image>
        </BlurFade>
      </div>
      <About></About>
      <div className="mt-28 space-y-8">
        <motion.div
          ref={ref}
          style={{ y: y, opacity }}
          className="grid grid-cols-1 md:grid-cols-3 gap-7"
        >
          <BlurFade className="w-full mx-auto relative rounded-3xl col-span-1 flex justify-center">
            <Image
              src={"/ankit.jpeg"}
              alt="profile"
              className="border shadow-md w-full md:w-80 rounded-2xl object-cover h-[26rem]"
              width={1080}
              height={1080}
            ></Image>
          </BlurFade>
          <div className="rounded-3xl col-span-2">
            <BlurFade className="rounded-2xl object-cover lg:h-[26rem] px-3 flex gap-8 justify-center flex-col">
              <p className="text-4xl font-semibold">Our History</p>
              <p>{about.history[0]}</p>
              <p>{about.history[1]}</p>
            </BlurFade>
          </div>
        </motion.div>
      </div>
      <LogoProof></LogoProof>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <div className="relative w-full lg:w-[60%]">
          {" "}
          {/* Adjusted width for responsiveness */}
          <div className="absolute top-0 w-full lg:w-[60%] left-0">
            {" "}
            {/* Adjusted width for responsiveness */}
            <BlurFade
              x={-30}
              className="text-2xl lg:text-6xl font-semibold w-full p-5 rounded-ee-2xl flex items-start  pt-1 pr-2 bg-[#FAF9F6] lg:pt-3 lg:pr-6"
            >
              Our Knowledge
            </BlurFade>
            <BlurFade
              x={-30}
              className="text-xs md:text-lg p-5 w-[90%]  rounded-ee-2xl flex items-start  pt-1 pr-2 bg-[#FAF9F6] lg:pt-3 lg:pr-6"
            >
              Casa Mobilia&apos;s strength is its expertise, combining culture
              and knowledge to form design ideas before turning them to life.
            </BlurFade>
          </div>
          <Image
            src={image4}
            alt="image"
            className="rounded-3xl h-[26rem] object-cover w-full"
          ></Image>
        </div>
        <div className="w-full lg:w-[40%]">
          {" "}
          {/* Adjusted width for responsiveness */}
          <Image
            src={"/about/team.jpg"}
            alt="image"
            width={1080}
            height={1080}
            className="w-full shadow-md border h-full object-cover rounded-3xl"
          ></Image>
        </div>
      </div>
    </motion.section>
  );
}
