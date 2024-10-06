import React from 'react'
import BorderButton from './ui/BorderButton'
import Image from 'next/image'
import OutDoorSofa from '@/../public/6.jpg'
import { MoveUpRight } from 'lucide-react'
import BlurFade from './ui/blur-fade'

export default function Bento() {
    return (
        <section className=' grid grid-cols-1 lg:grid-cols-12 mt-5 w-full p-4 sm:p-10 gap-5 '>
            <BlurFade className=' relative w-full lg:col-span-8'>
                <video
                    width="100%"
                    height="100%"
                    autoPlay
                    loop
                    muted
                    preload="none"
                    style={{ display: 'block' }}
                    className=" rounded-3xl  h-full w-full object-cover border"
                >
                    <source src="/logoreveal.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className=' absolute bottom-0  w-[60%] lg:w-[40%] left-0'>
                    <div className=' w-[60%] rounded-se-2xl bg-[#FFFAF1]  flex items-start p-2  pt-3 pr-2 lg:pt-3 lg:pr-6'>
                        <BorderButton text='Georgeus Interior' className=' text-xs'></BorderButton>
                    </div>
                    <div className=' text-2xl lg:text-6xl font-semibold w-[80%] rounded-se-2xl p-2 bg-[#FFFAF1]  flex items-start   pt-1 pr-2 lg:pt-3 lg:pr-6'>
                        Modern
                    </div>
                    <div className=' text-2xl lg:text-6xl font-semibold w-full rounded-se-2xl p-2 bg-[#FFFAF1]  flex items-start   pt-1 pr-2 lg:pt-3 lg:pr-6'>
                        Minimalist
                    </div>
                </div>
            </BlurFade>
            <div className=' md:col-span-4 flex flex-col gap-5 group/cardthree'>
                <BlurFade y={0} x={20} className='border shadow  border-black/10 bg-[#f0ecec] flex flex-col justify-between relative rounded-3xl gap-3 p-8'>
                    <p>Aesthetic furniture where every piece tells a story of style</p>
                    <p className=' font-bold text-4xl'>Into a gallery of elegance</p>
                    <div>
                        <BorderButton text='Aesthetic' group='cardthree'></BorderButton>
                    </div>
                </BlurFade>
                <BlurFade y={0} x={20} className=''>
                    <a href='/portfolio/outdoor' className='group/card   relative rounded-3xl '>
                        <div className='  absolute top-5 left-5 w-full'>
                            <BorderButton text=' Best Furniture' className=' border-white text-white'></BorderButton>
                        </div>
                    </a>
                    <Image src={OutDoorSofa} alt='out door sofa' className=' object-cover w-full rounded-3xl h-full'>
                    </Image>
                    <div className=' absolute -top-1 -right-1 bg-[#FFFAF1]   rounded-full  p-3 transition-all duration-200 ease-in-out group-hover/cardthree:translate-x-2 group-hover/cardthree:-translate-y-2  z-10 size-16'>
                    <MoveUpRight className=' group-hover/cardthree:rotate-180 shadow-lg bg-black p-2 transition-all duration-200 ease-in-out  text-white size-full rounded-full' /></div>
                    <div className=' absolute left-0 bottom-0 p-5 rounded-b-3xl transition-all duration-200 ease-in-out  group-hover/cardthree:backdrop-blur-lg text-white text-lg backdrop-blur-sm '>
                        <p className=' rounded-3xl '>Experience luxurious comfort and durability with our elegantly crafted outdoor sofa, designed to elevate your outdoor living space</p>
                    </div>
                </BlurFade>
            </div>
        </section>
    )
}
