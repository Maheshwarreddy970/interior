"use client";

import Preloader from '@/components/preloader/index';
import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import textimage1 from '@/../public/luxuryresidences/7.jpg'
import textimage2 from '@/../public/aboutimage2.png'
import Starssection from '@/components/Starsection'
import image1 from '@/../public/luxuryresidences/4.jpg'
import image2 from '@/../public/ppsteel1.jpg'
import image3 from '@/../public/commercialspaces/2.jpg'
import image4 from '@/../public/krishnakunj2.jpg'
import profile from '@/../public/ankit.jpeg'
import BlurFade from '@/components/ui/blur-fade'
import OpenCards from '@/components/ui/expandingcard'
import { AnimatePresence, useScroll, useTransform, motion } from 'framer-motion';

export default function Page() {  // Renamed to Page
  const [isLoading, setIsLoading] = useState(true);

  // Use const instead of let
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  // Use const instead of let
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  // Handle loading effect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      document.body.style.cursor = 'default';
      window.scrollTo(0, 0);
    }, 1000);
  }, []);

  return (
    <motion.section className='p-4 sm:p-10 mt-20  overflow-hidden'>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div className='flex'>
        <BlurFade className='text-4xl sm:text-6xl lg:text-8xl justify-center items-center font-extrabold flex flex-wrap max-w-4xl mx-auto gap-5 sm:gap-10 text-center'>
          Casa mobilia
          <Image src={textimage1} alt='sofa image' className='w-28 h-16 border shadow-lg sm:w-40 sm:h-24 object-cover flex rounded-2xl sm:rounded-3xl'></Image>
          is
          <Image src={textimage2} alt='sofa image' className='w-28 h-16 border shadow-lg sm:w-40 sm:h-24 object-cover flex rounded-2xl sm:rounded-3xl'></Image>
          <span className='flex flex-wrap'>Known for </span>Innovative
        </BlurFade>
      </div>

      <Starssection />
      <OpenCards />

      <div className='hidden lg:grid grid-cols-7 gap-4 md:gap-6 mt-8'>
        <BlurFade x={-30} className='col-span-2'>
          <Image src={image1} alt='image' className='object-cover rounded-3xl border shadow-md h-80 w-full'></Image>
        </BlurFade>
        <BlurFade className='col-span-3'>
          <Image src={image3} alt='image' className='object-cover rounded-3xl border shadow-md h-80 w-full'></Image>
        </BlurFade>
        <BlurFade y={0} x={30} className='col-span-2'>
          <Image src={image2} alt='image' className='object-cover rounded-3xl border shadow-md h-80 w-full'></Image>
        </BlurFade>
      </div>

      <div className='mt-28 space-y-8'>
        <div className=' flex flex-col items-center gap-6 mb-16'>
          <BlurFade y={50} className='text-3xl text-center lg:text-6xl font-semibold mb-5 tracking-wide'>OUR MISSION & VALUES</BlurFade>
          <BlurFade y={50} className='text-xl text-center lg:text-3xl '>MISSION</BlurFade>
          <BlurFade y={50} className=' text-center lg:text-lg max-w-4xl'>To produce and distribute the highest quality of luxury furniture products that stand for Design. Quality, Innovation and Value.</BlurFade>
          <BlurFade y={50} className='text-xl text-center lg:text-3xl '>VISION</BlurFade>
          <BlurFade y={50} className=' text-center lg:text-lg max-w-4xl'>To become the leading manufacturing house for bespoke furniture in the world, catering to build luxurious masterpieces that are desired and appreciated by not only the most elite, but also the most learned and demanding industry architects, designers and consultants.       </BlurFade>
          <BlurFade y={50} className='text-xl text-center lg:text-3xl '>VALUES</BlurFade>
          <BlurFade y={50} className=' text-center lg:text-lg max-w-4xl'>To produce and distribute the highest quality furniture products that stand for design, quality, innovation and value.</BlurFade>
        </div>
        <motion.div ref={ref} style={{ y: y, opacity }} className='grid grid-cols-1 md:grid-cols-3 gap-7'>
          <BlurFade className='w-full mx-auto relative rounded-3xl col-span-1 flex justify-center'>
            <Image src={profile} alt='profile' className='border shadow-md w-full md:w-80 rounded-2xl object-cover h-[26rem]'></Image>
          </BlurFade>
          <div className='rounded-3xl col-span-2'>
            <BlurFade className='rounded-2xl object-cover lg:h-[26rem] px-3 flex gap-8 justify-center flex-col'>
              <p className='text-4xl font-semibold'>Our History</p>
              <p>
                Casa Mobilia specializes in crafting luxury bespoke furniture and timeless interiors, blending global refinement with indigenous design. Established in 2012 by Ankit Agarwal and Sadhna Goyal, the brand showcases a curated collection of unique, customizable pieces. Each creation reflects exceptional craftsmanship and design innovation, embodying both contemporary and classic styles. We work closely with clients to transform their spaces into personalized works of art. With a commitment to quality, sustainability, and artistic excellence, Casa Mobilia sets the benchmark for luxurious living.
              </p>
            </BlurFade>
          </div>
        </motion.div>
      </div>

      <div className='mt-10 relative'>
        <div className='absolute top-0 w-[60%] lg:w-[40%] left-0'>
          <BlurFade x={-30} className='text-2xl lg:text-6xl font-semibold w-full p-5 rounded-ee-2xl flex items-start  pt-1 pr-2 bg-[#FFFAF1] lg:pt-3 lg:pr-6'>
            Our Knowledge
          </BlurFade>
          <BlurFade x={-30} className='text-xs md:text-lg p-5 w-[80%] rounded-ee-2xl flex items-start  pt-1 pr-2 bg-[#FFFAF1] lg:pt-3 lg:pr-6'>
            Casa Mobilia&apos;s strength is its expertise, combining culture and knowledge to form design ideas before turning them to life.
          </BlurFade>
        </div>
        <Image src={image4} alt='image' className='rounded-3xl h-[26rem] object-cover w-full'></Image>
      </div>
    </motion.section>
  );
}
