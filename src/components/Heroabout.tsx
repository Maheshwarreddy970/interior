"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "./ui/Button";
import BlurFade from "./ui/blur-fade";
import data from "@/../data/home.json";

export default function Heroabout() {
  return (
    <motion.section className=" grid grid-cols-1 gap-5 lg:grid-cols-2 mt-5 p-4 sm:p-10 ">
      <BlurFade y={50} className=" grid grid-cols-2 gap-3">
        <div className=" w-full h-full ">
          <Image
            src={"/home/one.jpg"}
            alt="sofa image"
            className="object-cover shadow-md h-full w-full order-2 rounded-3xl border"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className=" w-full h-full ">
          <Image
            src={"/home/four.jpg"}
            alt="sofa image"
            className="object-cover shadow-md h-full w-full order-2 rounded-3xl border"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className=" w-full h-full ">
          <Image
            src={"/home/three.jpg"}
            alt="sofa image"
            className="object-cover shadow-md h-[85%] w-full order-2 rounded-3xl border"
            width={500}
            height={500}
          ></Image>
        </div>
        <div className=" w-full h-full ">
          <Image
            src={"/home/two.jpg"}
            alt="sofa image"
            className="object-cover shadow-md h-[85%] w-full order-2 rounded-3xl border"
            width={500}
            height={500}
          ></Image>
        </div>
      </BlurFade>
      <BlurFade y={50} className=" lg:p-4 sm:p-10 flex flex-col order-1 gap-5 ">
        <div className="text-lg">Timeless</div>
        <div className=" text-3xl lg:text-6xl font-semibold ">
          Modern Style Timeless Charm
        </div>
        <div>{data.about[0]}</div>
        <div>{data.about[1]}</div>
        <a href="/about">
          <Button text="About Us"></Button>
        </a>
      </BlurFade>
    </motion.section>
  );
}
