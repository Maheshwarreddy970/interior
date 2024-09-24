import React from 'react'
import Button from './ui/Button'
import Image from 'next/image'
import Sofa2 from '@/../public/sofa2.jpg'
import office2 from '@/../public/2.jpg'
import { MoveUpRight } from 'lucide-react'


export default function Portfolio() {
    return (
        <section className='mt-10  p-4 sm:p-10'>
            <div className='flex lg:flex-row flex-col gap-3 justify-between'>
                <div className='text-3xl lg:text-6xl  font-semibold max-w-2xl'>Explore Our Proudly Collection</div>
                <div className=' max-w-xl space-y-3'>
                    <p className=' text-left lg:text-right'>Whether you have distinct taste, or a unique space that needs a custom designed piece, our certified Custom Made furniture, will help you get anything made. Browse for ideas including: custom upholstery, custom tables, custom chairs, custom bedroom sets, custom shelves, custom built-ins, and more.</p>
                    <div className=' flex lg:justify-end'><Button text='View More'></Button></div>
                </div>
            </div>
            <div className=' grid grid-cols-1 lg:grid-cols-3 h-screen w-full gap-3 mt-12'>
                <div className=' flex flex-col gap-5'>
                    <div className=' relative  group/card1 '>
                        <Image src={office2} alt='office' className=' rounded-3xl'></Image>
                        <div className=' absolute bottom-0 left-0 flex p-5 justify-between w-full'>
                            <p className=' text-4xl font-semibold tracking-widest text-white'>
                                Office
                            </p>
                            <MoveUpRight className=' bg-white rounded-full p-2 size-11 group-hover/card1:translate-x-1 transition-all duration-300 ease-in-out  group-hover/card1:-translate-y-1'></MoveUpRight>
                        </div>
                    </div>
                    <div className=' relative  group/card2'>
                        <Image src={office2} alt='office' className=' rounded-3xl'></Image>
                        <div className=' absolute bottom-0 left-0 flex p-5 justify-between w-full'>
                            <p className=' text-4xl font-semibold tracking-widest text-white'>
                                Office
                            </p>
                            <MoveUpRight className=' bg-white rounded-full p-2 size-11 group-hover/card2:translate-x-1 transition-all duration-300 ease-in-out  group-hover/card2:-translate-y-1'></MoveUpRight>
                        </div>
                    </div>
                </div>
                <div>
                    <div className=' relative  group/card3'>
                        <Image src={Sofa2} alt='office' className=' rounded-3xl'></Image>
                        <div className=' absolute bottom-0 left-0 flex p-5 justify-between w-full'>
                            <p className=' text-4xl font-semibold tracking-widest text-white'>
                                Office
                            </p>
                            <MoveUpRight className=' bg-white rounded-full p-2 size-11 group-hover/card3:translate-x-1 transition-all duration-300 ease-in-out  group-hover/card3:-translate-y-1'></MoveUpRight>
                        </div>
                    </div>
                </div>
                <div className=' flex flex-col gap-5'>
                    <div className=' relative  group/card1'>
                        <Image src={office2} alt='office' className=' rounded-3xl'></Image>
                        <div className=' absolute bottom-0 left-0 flex p-5 justify-between w-full'>
                            <p className=' text-4xl font-semibold tracking-widest text-white'>
                                Office
                            </p>
                            <MoveUpRight className=' bg-white rounded-full p-2 size-11 group-hover/card1:translate-x-1 transition-all duration-300 ease-in-out  group-hover/card1:-translate-y-1'></MoveUpRight>
                        </div>
                    </div>
                    <div className=' relative  group/card2'>
                        <Image src={office2} alt='office' className=' rounded-3xl'></Image>
                        <div className=' absolute bottom-0 left-0 flex p-5 justify-between w-full'>
                            <p className=' text-4xl font-semibold tracking-widest text-white'>
                                Office
                            </p>
                            <MoveUpRight className=' bg-white rounded-full p-2 size-11 group-hover/card2:translate-x-1 transition-all duration-300 ease-in-out  group-hover/card2:-translate-y-1'></MoveUpRight>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
