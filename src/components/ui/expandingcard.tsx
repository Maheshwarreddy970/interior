"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

const OpenCards = () => {
  const [expandedIndex, setExpandedIndex] = useState(1);

  const handleCardClick = (index: number) => {
    setExpandedIndex(index === expandedIndex ? -1 : index);
  };

  const cardVariants = {
    expanded: {
      width: "400px",
    },
    collapsed: {
      width: "200px",
    },
  };

  const cardDescriptions = [
    {
      image: "/about/one.jpg",
      title: "sofa",
    },
    {
      image: "/about/two.jpg",
      title: "sofa",
    },
    {
      image: "/about/three.jpg",
      title: "sofa",
    },
  ];
  return (
    <div className="mt-12 lg:hidden flex flex-row justify-center items-center gap-5">
      {cardDescriptions.map((data, index) => (
        <motion.div
          key={index}
          className={`card relative cursor-pointer h-[500px] bg-cover bg-center rounded-[20px] ${
            index === expandedIndex ? "expanded" : ""
          }`}
          variants={cardVariants}
          initial="collapsed"
          animate={index === expandedIndex ? "expanded" : "collapsed"}
          transition={{ duration: 0.5 }}
          onClick={() => handleCardClick(index)}
        >
          <Image
            alt={data.title}
            className="border shadow-md absolute object-cover rounded-3xl h-full w-full "
            src={data.image}
            width={1080}
            height={1080}
          ></Image>
        </motion.div>
      ))}
    </div>
  );
};

export default OpenCards;
