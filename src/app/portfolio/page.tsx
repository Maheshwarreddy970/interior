"use client";

import ProductsList from "@/components/ProductsList";
import BlurFade from "@/components/ui/blur-fade";
import BorderButton from "@/components/ui/BorderButton";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function Page() {
  // Changed 'page' to 'Page'
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);

  return (
    <section className="p-4 sm:p-10 mt-14 text-stone-900 overflow-hidden">
      <motion.div
        ref={ref}
        style={{ y: y, opacity: opacity, scale }}
        className=" w-full h-1/2 lg:h-[30rem]"
      >
        <Image
          src={"/about/portfolio.jpg"}
          height={1080}
          width={1080}
          alt="sofa"
          className="border shadow-lg object-cover w-full flex h-1/2 lg:h-[30rem] rounded-2xl sm:rounded-3xl"
        />
      </motion.div>
      <div className="grid-cols-1 lg:grid-cols-2 grid py-16 gap-10">
        <div>
          <BlurFade
            x={-50}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold"
          >
            Casa Mobilia Collection
          </BlurFade>
        </div>
        <BlurFade className="flex flex-col gap-10">
          <p className="text-wrap">
            Crafting spaces that harmonize modern aesthetics with timeless
            elegance, our contemporary interior designs breathe life into every
            room, redefining the essence of chic living.
          </p>
          <div>
            <BorderButton
              text="Explore More"
              className=" bg-black text-white border-black shadow-md"
            />
          </div>
        </BlurFade>
      </div>
      <ProductsList />
    </section>
  );
}
