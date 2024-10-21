"use client";

import React, { useRef, useState } from 'react';
import data from '@/../data/home.json';
import BlurFade from './ui/blur-fade';
import { cn } from '@/lib/utils';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Cursor } from './ui/cursor';

function Overview() {
  const [active, setActive] = useState(null);


  return (
    <>
      <div className=' flex flex-col  mt-10 gap-5 items-center'>
        {data.texthovereffect.map((data, i) => (
          <div key={i} className=''>
            <Cursor
              attachToParent
              variants={{
                initial: { height: 0, opacity: 0, scale: 0.3 },
                animate: { height: 'auto', opacity: 1, scale: 1 },
                exit: { height: 0, opacity: 0, scale: 0.3 },
              }}
              transition={{
                type: 'spring',
                duration: 0.3,
                bounce: 0.1,
              }}
              className='overflow-hidden'
              springConfig={{
                bounce: 0.01,
              }}
            >
              <img
                src={data.image}
                alt='Christian Church, Eastern Europe'
                className='h-80 w-48 rounded-lg -z-20 shadow-lg object-cover  '
              />
            </Cursor>
            <p className=' text-3xl md:text-7xl italic bg-black text-white mix-blend-difference z-50'>{data.title}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col py-20 items-center gap-6 p-5">
        <BlurFade
          y={50}
          className="text-3xl text-left lg:text-5xl font-semibold mb-10 tracking-wide"
        >
          {data.overview.title}
        </BlurFade>

        <div
          onMouseLeave={() => setActive(null)}
          className="relative grid lg:grid-cols-3 gap-7 max-w-7xl mx-auto z-10 w-full"
        >
          {data.overview.info.map((info, i) => (
            <View
              key={i}
              active={active}
              setActive={setActive}
              text={info.text}
              heading={info.heading}
              imgSrc={info.image}
            />
          ))}
        </div>
      </div>
    </>
  );
}

const View = ({ heading, imgSrc, text, active, setActive }) => {
  const ref = useRef(null);

  // Motion values for smooth image follow behavior.
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring-based animation.
  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 30 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 30 });

  // Map motion values to CSS percentages.
  const top = useTransform(mouseYSpring, (value) => `${value * 100}%`);
  const left = useTransform(mouseXSpring, (value) => `${value * 100}%`);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setActive(imgSrc)}
      onMouseLeave={() => setActive(null)}
      className="relative "
    >
      <div className={cn("relative text-xl font-semibold max-w-sm lg:text-xl")}>
        {heading}
      </div>

      <div className="relative mt-3 font-semibold max-w-sm ">
        {text}
      </div>


      <motion.img
        style={{
          top,
          left,
          translateX: "0%",
          translateY: "-30%",
        }}
        variants={{
          initial: { scale: 0 },
          whileHover: { scale: 1, x: [0, 1, 0] },

        }}
        transition={{ ease: 'easeInOut', duration: 0.3, type: 'spring', stiffness: 100 }}
        src={imgSrc}
        className={cn("absolute  h-40 w-60 rounded-lg object-cover hidden", active == imgSrc && "block")}
        alt={`Image representing a link for ${heading}`}
      />
    </motion.div>
  );
};

export default Overview;
