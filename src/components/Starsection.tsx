import React from 'react'
import { AnimatedCounter } from './ui/AnimatedCounter'

export default function Starssection() {
    return (
        <section className=' mt-8 flex flex-col gap-10 p-4 sm:p-10'>
            <div className="text-lg grid grid-cols-2 lg:grid-cols-4  gap-16 tabular-nums font-light tracking-tight max-w-6xl mx-auto">
                <div className=''>
                    <AnimatedCounter from={0} to={600} />
                    Projects Done
                </div>
                <div className=''>
                    <AnimatedCounter from={0} to={100} />
                    Years of Experience
                </div>
                <div className=''>
                    <AnimatedCounter from={0} to={50000} />
                    Design Hours
                </div>
                <div className=''>
                    <AnimatedCounter from={0} to={250} />
                    Clients
                </div>
            </div>
        </section>
    )
}