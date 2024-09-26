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
                    className=" rounded-3xl border"
                >
                    <source src="/logoreveal.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <div className=' absolute bottom-0  w-[60%] lg:w-[40%] left-0'>
                    <div className=' w-[60%] rounded-se-2xl flex items-start bg-white  pt-3 pr-2 lg:pt-3 lg:pr-6'>
                        <BorderButton text='Georgeus Interior' className=' text-xs'></BorderButton>
                    </div>
                    <div className=' text-2xl lg:text-6xl font-semibold w-[80%] rounded-se-2xl flex items-start bg-white  pt-1 pr-2 lg:pt-3 lg:pr-6'>
                        Modern
                    </div>
                    <div className=' text-2xl lg:text-6xl font-semibold w-full rounded-se-2xl flex items-start bg-white  pt-1 pr-2 lg:pt-3 lg:pr-6'>
                        Minimalist
                    </div>
                </div>
            </BlurFade>
            <div className=' md:col-span-4 flex flex-col gap-5 group/cardthree'>
                <BlurFade y={0} x={20} className=' bg-[#f0e9e3] flex flex-col justify-between relative rounded-3xl gap-3 p-8'>
                    <p>Aesthetic furniture where every piece tells a story of style</p>
                    <p className=' font-bold text-4xl'>Into a gallery of elegance</p>
                    <div>
                        <BorderButton text='Aesthetic' group='cardthree'></BorderButton>
                    </div>
                </BlurFade>
                <BlurFade y={0} x={20} className=' h-[50%]'>
                    <a href='/portfolio/outdoor' className=' relative rounded-3xl '>
                        <div className='  absolute top-5 left-5'>
                            <BorderButton text=' Best Furniture' className=' border-white text-white'></BorderButton>
                        </div>
                        <Image src={OutDoorSofa} alt='out door sofa' className=' object-cover rounded-3xl h-full'>
                        </Image>
                        <div className=' absolute -bottom-3 -right-3  rounded-full p-3 transition-all duration-200 ease-in-out group-hover/cardthree:-translate-x-2 group-hover/cardthree:-translate-y-2 bg-white z-10 size-16'><MoveUpRight className=' group-hover/cardthree:-rotate-90 bg-black p-2 transition-all duration-200 ease-in-out  text-white size-full rounded-full' /></div>
                    </a>
                </BlurFade>
            </div>
        </section>
    )
}
