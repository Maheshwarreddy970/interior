"use client"
import Image from 'next/image'
import React from 'react'
import Sideimage3 from '@/../public/ppsteel2.jpg'
import Sideimage2 from '@/../public/dark.jpg'
import Sideimage1 from '@/../public/light.jpg'
import Sideimage4 from '@/../public/10.jpg'
import Button from './ui/Button'
import BlurFade from './ui/blur-fade'
import { motion } from 'framer-motion';

export default function Heroabout() {


    return (
        <motion.section className=' grid grid-cols-1 gap-5 lg:grid-cols-2 mt-5 p-4 sm:p-10 '>
            <BlurFade y={50} className=' grid grid-cols-2 gap-3'>
                <div className=' w-full h-full '>
                    <Image src={Sideimage1} alt='sofa image' className='object-cover shadow-md h-full w-full order-2 rounded-3xl border' ></Image>
                </div>
                <div className=' w-full h-full '>
                    <Image src={Sideimage2} alt='sofa image' className='object-cover shadow-md h-full w-full order-2 rounded-3xl border' ></Image>
                </div>
                <div className=' w-full h-full '>
                    <Image src={Sideimage4} alt='sofa image' className='object-cover shadow-md h-[85%] w-full order-2 rounded-3xl border' ></Image>
                </div>
                <div className=' w-full h-full '>
                    <Image src={Sideimage3} alt='sofa image' className='object-cover shadow-md h-[85%] w-full order-2 rounded-3xl border' ></Image>
                </div>
            </BlurFade>
            <BlurFade y={50} className=' lg:p-4 sm:p-10 flex flex-col order-1 gap-5 '>
                <div className='text-lg'>Timeless</div>
                <div className=' text-3xl lg:text-6xl font-semibold '>Modern Style Timeless Charm</div>
                <div>
                    Casa Mobilia creates luxury bespoke furniture and timeless interiors, combining global refinement with indigenous design. Founded in 2012, we offer unique, customizable pieces that reflect exceptional craftsmanship. Our designs transform spaces, blending contemporary and classic styles for a truly personalized living experience.
                </div>
                <a href='/about'>
                    <Button text='About Us'></Button>
                </a>
            </BlurFade>
        </motion.section>
    )
}
