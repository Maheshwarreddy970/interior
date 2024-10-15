"use client"

import { useScroll, useTransform, motion } from 'framer-motion';
import {  useRef } from "react";


export default function Textparelex({children}:{children:React.ReactNode}) {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    return (
        <motion.div style={{y:y}} ref={ref} className=' max-w-sm mx-auto space-y-4'>
           {children}
        </motion.div>
    )
}
