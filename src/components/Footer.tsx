"use client";

import logo from "@/../public/logoold.png";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import BlurFade from "./ui/blur-fade";
import data from "@/../data/footer.json"

const navigation = {
  connect:data.connect,
  Page: data.Page
};

export default function Footer({ className }: { className?: string }) {
  return (
    <motion.section
      className={cn(" bg-black text-white  p-4 sm:p-10", className)}
    >
      <div className=" flex mt-16 justify-between items-center lg:flex-row flex-col">
        <div className=" max-w-xl flex-col flex gap-9 ">
          <BlurFade className="text-4xl lg:text-6xl  font-semibold max-w-2xl">
            {data.heading}
          </BlurFade>
          <BlurFade className=" text-left ">
            {data.subheading}
          </BlurFade>
        </div>
        <div className="justify-center md:justify-start flex gap-40">
          <div className="md:mt-0">
            <p className="text-lg font-semibold leading-6">Connect</p>
            <div className="mt-6 space-y-4">
              {navigation.connect.map((item) => (
                <BlurFade key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm leading-6 opacity-70 hover:opacity-100"
                  >
                    {item.name}
                  </a>
                </BlurFade>
              ))}
            </div>
          </div>
          <div>
            <div>
              <h3 className="text-lg font-semibold leading-6 ">Page</h3>
              <div className="mt-6 space-y-4">
                {navigation.Page.map((item) => (
                  <BlurFade key={item.name}>
                    <a
                      href={item.href}
                      className="text-sm leading-6 opacity-70 hover:opacity-100"
                    >
                      {item.name}
                    </a>
                  </BlurFade>
                ))}
              </div>
            </div>
          </div>
        </div>
        <BlurFade className=" hidden md:block mt-10 lg:mt-0">
          <Image
          height={128}
          width={192}
            src={logo}
            alt="logo"
            className=" h-24 w-40 lg:h-32 lg:w-48"
          ></Image>
        </BlurFade>
      </div>
      <div className=" pb-9 flex flex-col md:flex-row md:justify-between">
        {/* <div className="  flex justify-end lg:items-end  mt-10 md:mt-0 ">
          <Image
            src={logo}
            alt="logo"
            className=" h-24 w-40 lg:h-32 lg:w-48"
          ></Image>
        </div> */}
      </div>
    </motion.section>
  );
}
