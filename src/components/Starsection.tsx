import React from 'react'
import { AnimatedCounter } from './ui/AnimatedCounter'
import BlurFade from './ui/blur-fade'
import data from "@/../data/about.json"

export default function Starssection() {
    const conter=data.about.counter
    return (
        <section className=' mt-5 flex flex-col items-center justify-center  gap-10 p-4 sm:p-10'>
            <div className="  grid grid-cols-2 lg:grid-cols-4 justify-center   gap-10 lg:gap-2 tabular-nums font-light tracking-tight max-w-6xl mx-auto">
                <BlurFade className=' lg:-mt-32 '>
                    <AnimatedCounter from={0} to={conter[0].number} />
                    {conter[0].name}
                </BlurFade>
                <BlurFade className=''>
                    <AnimatedCounter from={0} to={conter[1].number} />
                    {conter[1].name}
                </BlurFade>
                <BlurFade className='lg:ml-10'>
                    <AnimatedCounter from={0} to={conter[2].number} />
                    {conter[2].name}
                </BlurFade>
                <BlurFade className=' lg:-mt-32 lg:ml-8'>
                    <AnimatedCounter from={0} to={conter[3].number} />
                    {conter[3].name}
                </BlurFade>
            </div>
        </section>
    )
}