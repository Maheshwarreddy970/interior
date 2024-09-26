"use client"

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import resdience from '@/../public/residential/17.jpg'
import resdience1 from '@/../public/residential/8.jpg'
import outdoor from '@/../public/outdoor/8.jpg'
import sofa from '@/../public/outdoor/9.jpg'
import office from '@/../public/office/1.jpg'
import office1 from '@/../public/office/10.jpg'
import Button from '@/components/ui/Button'
import { MoveUpRight } from 'lucide-react'
import Link from 'next/link'

export default function page() {
  return (
    <section className='p-4 sm:p-10 mt-14 text-stone-900 '>
      <div className=' grid grid-cols-1 lg:grid-cols-7 gap-10 '>
        <div className=' lg:col-span-4 h-full space-y-8 '>
          <p className='text-4xl sm:text-6xl lg:text-8xl font-bold '>Casa mobilia Collection</p>
          <p className=' max-w-lg text-start font-medium p-1'>Explore Casa mobilia&apos;s extensive collection of innovative and elegant designs tailored for every room in your home. From sleek and functional wardrobes that optimize space to sophisticated dining tables and chairs</p>
          <div className=' flex gap-6 flex-col md:flex-row'>
            <div className=' bg-black/5 p-3 border-white/60 h-56 w-full lg:max-w-sm  rounded-xl backdrop-blur-2xl border shadow-sm'>
              <VideoPlayer url='https://www.youtube.com/watch?v=opEVjrYNXWI'></VideoPlayer>
            </div>
            <div className=' bg-[#f0e9e3] p-4 gap-3 h-56 w-full lg:max-w-sm rounded-xl backdrop-blur-2xl flex flex-col justify-between border border-white/60 shadow-sm'>
              <p className=' text-wrap '>
                Crafting spaces that harmonize modern aesthetics with timeless elegance, our contemporary interior designs breathe life into every room, redefining the essence of chic living.              </p>
              <div >
                <Button text='View More '></Button>
              </div>
            </div>
          </div>
        </div>
        <div className=' lg:col-span-3 h-[30rem] lg:h-screen'>
          <Image src={sofa} alt='soft' className='object-cover h-full lg:h-[85%] flex rounded-2xl sm:rounded-3xl'></Image>
        </div>
      </div>

      <div className=' mt-10'>
        <Link href='/portfolio/livingspace' className=' relative grid grid-cols-1 lg:grid-cols-8 gap-8 h-[80%] group/card2'>
          <p className='  lg:col-span-3 -order-1 lg:order-none font-semibold lg:p-4'>Casa mobilia&apos;s 2024 home furnishings: modern, cozy, and crafted for comfort and style in every room.</p>
          <h1 className='text-3xl lg:col-span-5 -order-2 lg:order-none lg:text-right lg:text-7xl font-semibold'>Your Living Spaces</h1>
          <div className=' lg:col-span-3 '>
            <Image src={resdience1} alt='resdience' className='rounded-2xl h-full object-cover '></Image>
          </div>
          <div className=' absolute left-[33%] -bottom-10 rounded-full p-3 bg-white group-hover/card2:translate-x-1 transition-all duration-300 ease-in-out  group-hover/card2:-translate-y-1'>
            <MoveUpRight className=' group-hover/card2:scale-110 text-white bg-black rounded-full p-4 size-20 '></MoveUpRight>
          </div>
          <div className=' lg:col-span-5 '>
            <Image src={resdience} alt='resdience' className='rounded-2xl h-full object-cover '></Image>
          </div>
        </Link>
        <div className=' bg-[#f0e9e3] group/card2 relative rounded-3xl mt-20 p-5 lg:p-10 h-[80%]'>
          <Link href={'/portfolio/outdoor'}>
            <div>
              <h1 className='text-3xl lg:col-span-5 lg:text-7xl font-semibold'> Outdoor Bliss</h1>
            </div>
            <div className=' relative w-full mt-16 lg:mt-9'>
              <Image src={outdoor} alt='sofa' className='rounded-3xl w-full h-[43rem] object-cover '></Image>
              <div className=' absolute top-0 right-0  w-[60%] lg:w-[40%]'>
                <div className='  font-semibold text-sm lg:text-base w-full rounded-es-2xl p-3 lg:text-end flex items-start bg-[#f0e9e3]   pt-1 pr-2 lg:pt-3 lg:pr-6'>
                  Casa mobilia&apos;s 2024 home furnishings: modern, cozy, and crafted for comfort and style in every room.
                </div>
              </div>
              <div className=' absolute -top-28 right-0 rounded-full p-3 bg-[#f0e9e3]  group-hover/card2:translate-x-1 transition-all duration-300 ease-in-out  group-hover/card2:-translate-y-1'>
                <MoveUpRight className='  text-white group-hover/card2:scale-110 bg-black rounded-full p-4 size-20 '></MoveUpRight>
              </div>
            </div>
          </Link>
        </div>
        <Link href={'/portfolio/office'} className=' relative grid lg:grid-cols-8 gap-8 group/card2 h-[80%] mt-10 '>
          <h1 className='text-3xl lg:col-span-5 lg:text-7xl font-semibold'>Efficient and Stylish Workspaces</h1>
          <p className=' lg:col-span-3 font-semibold lg:text-right lg:p-4 '> Casa mobilia’s 2024 office solutions: sleek, functional designs to enhance productivity and inspire innovation.</p>
          <div className=' lg:col-span-5 '>
            <Image src={office} alt='office' className='rounded-2xl h-full object-cover '></Image>
          </div>
          <div className=' absolute right-[33%] -bottom-10 rounded-full p-3 bg-white group-hover/card2:translate-x-1 transition-all duration-300 ease-in-out  group-hover/card2:-translate-y-1'>
            <MoveUpRight className='group-hover/card2:scale-110  text-white bg-black rounded-full p-4 size-20 '></MoveUpRight>
          </div>
          <div className=' lg:col-span-3 '>
            <Image src={office1} alt='office' className='rounded-2xl h-full object-cover '></Image>
          </div>
        </Link>
      </div>
    </section >
  )
}


const VideoPlayer = ({ url }: { url: string }) => {
  const [isSSR, setIsSSR] = useState(true);

  useEffect(() => {
    setIsSSR(false);
  }, []);

  if (isSSR) {
    return null; // Or return a loading spinner during SSR
  }

  // Extract the video ID from the URL
  const videoId = url.split("v=")[1].split("&")[0]; // Get the video ID

  return (
    <iframe
      src={`https://www.youtube.com/embed/${videoId}`} // Use the embed URL
      className=" rounded-lg h-full w-full  transition-transform duration-300 group-hover:scale-110"
      allow="accelerometer; autoplay; clipboard-write;  encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    ></iframe>
  );
};
