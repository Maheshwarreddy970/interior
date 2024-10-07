import { motion } from "framer-motion";
import data from "@/../data/home.json";
import Image from "next/image";

const logos = data.home.brands;

const LogoCarousel = () => (
  <div className="flex gap-6 p-5 justify-center items-center">
    {" "}
    {/* Added justify-center to center logos */}
    {logos.map((logo, i) => (
      <div key={i} className="">
        <Image
          width={128}
          height={160}
          src={logo.logo}
          className="object-cover"
          alt={logo.name}
        />
      </div>
    ))}
  </div>
);

const LogoProof = () => (
  <section className="w-full py-12 overflow-hidden flex flex-col items-center">
    <motion.div className="">
      <motion.h1 className="text-2xl sm:text-5xl font-bold text-center">
        Associated Brands
      </motion.h1>
    </motion.div>
    <div className="flex flex-col lg:flex-row justify-center items-center gap-10"></div>
    {/* {logos.map((logo) => {})} */}
    <motion.div className="mx-auto w-full overflow-hidden px-4 md:px-8 max-w-4xl">
      <LogoCarousel />
    </motion.div>
  </section>
);

export default LogoProof;
