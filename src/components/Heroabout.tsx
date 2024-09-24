import Image from 'next/image'
import React from 'react'
import Sideimage from '@/../public/ppsteel2.jpg'
import Button from './ui/Button'

export default function Heroabout() {
    return (
        <section className=' grid grid-cols-1 gap-5 lg:grid-cols-2 mt-5 p-4 sm:p-10 '>
            <div className=' w-full'>
                <Image src={Sideimage} alt='sofa image' className=' rounded-3xl border h-full w-full' ></Image>
            </div>
            <div className=' lg:p-4 sm:p-10 flex flex-col gap-5 '>
                <p className='text-lg'>Timeless</p>
                <h1 className=' text-3xl lg:text-6xl font-semibold '>Modern Style Timeless Charm</h1>
                <p>
                    Casa Mobilia creates luxury bespoke furniture and timeless interiors, combining global refinement with indigenous design. Founded in 2012, we offer unique, customizable pieces that reflect exceptional craftsmanship. Our designs transform spaces, blending contemporary and classic styles for a truly personalized living experience.
                </p>
                <div>
                <Button text='About Us'></Button>
                </div>
            </div>
        </section>
    )
}
