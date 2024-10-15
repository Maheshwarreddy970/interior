"use client"

import React, { useEffect, useState } from 'react'
import data from '@/../data/home.json';
import Scene from './ui/Sene';
import Lenis from 'lenis'
import { cn } from '@/lib/utils';
import BlurFade from './ui/blur-fade';

export default function Overviewsection() {
    const [activeMenu, setActiveMenu] = useState(null)
    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])
    return (
        <>
            <Overview setActiveMenu={setActiveMenu} />
            <Scene activeMenu={activeMenu} />
        </>
    )
}

function Overview({ setActiveMenu }) {
    return (
        <div className=" flex flex-col py-20 items-center gap-6 mb-16 p-5">
            <BlurFade
                y={50}
                className="text-3xl text-center lg:text-5xl font-semibold mb-5 tracking-wide"
            >
                {data.overview.title}
            </BlurFade>
            <div onMouseLeave={() => { setActiveMenu(null) }} className='relative grid lg:grid-cols-3 gap-7 max-w-7xl mx-auto mix-blend-difference z-10 text-white w-full'>

                {
                    data.overview.info.map((info, i) => {
                        return (
                            <div key={i} onMouseOver={() => { setActiveMenu(i) }} className='' >
                                <div className={cn("text-xl text-left lg:text-center max-w-sm lg:text-xl ", i == 1 && "lg:mt-20 ")}>
                                    {info.heading}
                                </div>
                                <div className=" text-left mt-3 font-normal  lg:text-center max-w-sm">
                                    {info.text}
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}