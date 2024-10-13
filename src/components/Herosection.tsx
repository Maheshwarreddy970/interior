"use client";

import data from "@/../data/home.json";
import { motion, useScroll, useTransform } from "framer-motion";
import ImageCarousel from "./ImageCarouosal";
import Button from "./ui/Button";
import GradualSpacing from "./ui/gradual-spacing";
import Textslide from "./ui/textslide";

export default function HeroSection() {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

  return (
    <section className="relative overflow-hidden rounded-3xl h-screen w-full mt-16 sm:mt-7">
      <motion.div
        style={{ y, opacity, scale }} // Use directly without wrapping in curly braces
        className="h-full w-full absolute rounded-3xl p-4 sm:p-10 overflow-hidden"
      >
        <ImageCarousel images={data.backgroundimage} />
      </motion.div>
      <div className="h-full w-full overflow-hidden flex flex-col p-4 sm:p-10">
        <div className="h-[70%] w-full flex justify-center items-center">
          <GradualSpacing
            text="Casa Mobilia"
            className="opacity-90 backdrop-blur-sm text-opacity-80 z-10 text-5xl lg:text-9xl font-bold"
          />
        </div>
        <div className="mb-6 ml-2 sm:mb-0">
          <div className="px-3 flex gap-6 flex-col md:flex-row">
            <Textslide
              x={-50}
              className="bg-black/5 p-4 md:w-[28rem] gap-3 rounded-xl backdrop-blur-2xl flex flex-col justify-between border border-white/60 shadow-sm"
            >
              <p className="text-wrap text-white">
                Blending modern aesthetics with timeless elegance, our bespoke
                furniture designs transform spaces, redefining the art of
                sophisticated living.
              </p>
              <a href="/portfolio">
                <Button text="View More" />
              </a>
            </Textslide>
          </div>
        </div>
      </div>
    </section>
  );
}

