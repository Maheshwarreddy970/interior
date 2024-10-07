"use client";

import logo from "@/../public/logoold.png";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import BlurFade from "./ui/blur-fade";

const navigation = {
  connect: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/casamobilia.official/",
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/p/Casa-Mobilia-Furniture-100067007434648/",
    },
    {
      name: "Youtube",
      href: "https://www.youtube.com/@casamobilia1113",
    },
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/casa-mobilia",
    },
  ],
  company: [
    { name: "Home", href: "/home" },
    { name: "About", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer({ className }: { className?: string }) {
  return (
    <motion.section
      className={cn(" bg-black text-white  p-4 sm:p-10", className)}
    >
      <div className=" flex mt-16 justify-between items-center lg:flex-row flex-col">
        <div className=" max-w-xl flex-col flex gap-9 ">
          <BlurFade className="text-4xl lg:text-6xl  font-semibold max-w-2xl">
            Explore Our Proudly Collection
          </BlurFade>
          <BlurFade className=" text-left ">
            Whether you have distinct taste, or a unique space that needs a
            custom designed piece, our certified Custom Made furniture, will
            help you get anything made. Browse for ideas including: custom
            upholstery, custom tables, custom chairs, custom bedroom sets,
            custom shelves, custom built-ins, and more.
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
              <h3 className="text-lg font-semibold leading-6 ">Company</h3>
              <div className="mt-6 space-y-4">
                {navigation.company.map((item) => (
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
