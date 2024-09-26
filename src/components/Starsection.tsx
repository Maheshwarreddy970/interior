import React from 'react'
import { AnimatedCounter } from './ui/AnimatedCounter'

export default function Starssection() {
    return (
        <section className=' mt-5 flex flex-col  gap-10 p-4 sm:p-10'>
            <div className="  grid grid-cols-2 lg:grid-cols-4 justify-center   gap-10 lg:gap-2 tabular-nums font-light tracking-tight max-w-6xl mx-auto">
                <div className=' lg:-mt-32 '>
                    <AnimatedCounter from={0} to={600} />
                    Projects Done
                </div>
                <div className=''>
                    <AnimatedCounter from={0} to={10} />
                    Years of Experience
                </div>
                <div className='lg:ml-10'>
                    <AnimatedCounter from={0} to={250} />
                    Clients
                </div>
                <div className=' lg:-mt-32 lg:ml-8'>
                    <AnimatedCounter from={0} to={50000} />
                    Design Hours
                </div>
            </div>
        </section>
    )
}