import Image from 'next/image'
import React from 'react'
import Sideimage from '@/../public/ppsteel2.jpg'
import Button from './ui/Button'
import BlurFade from './ui/blur-fade'

export default function Heroabout() {
    return (
        <section className=' grid grid-cols-1 gap-5 lg:grid-cols-2 mt-5 p-4 sm:p-10 '>
            <BlurFade y={0} x={-20} className=' w-full'>
                <Image src={Sideimage} alt='sofa image' className='object-cover rounded-3xl border h-full w-full' ></Image>
            </BlurFade>
            <div className=' lg:p-4 sm:p-10 flex flex-col gap-5 '>
                <BlurFade className='text-lg'>Timeless</BlurFade>
                <BlurFade className=' text-3xl lg:text-6xl font-semibold '>Modern Style Timeless Charm</BlurFade>
                <BlurFade>
                    Casa Mobilia creates luxury bespoke furniture and timeless interiors, combining global refinement with indigenous design. Founded in 2012, we offer unique, customizable pieces that reflect exceptional craftsmanship. Our designs transform spaces, blending contemporary and classic styles for a truly personalized living experience.
                </BlurFade>
                <BlurFade>
                    <Button text='About Us'></Button>
                </BlurFade>
            </div>
        </section>
    )
}
