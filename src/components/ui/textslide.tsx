"use client";

import { motion } from "framer-motion";

interface TextslideProps {
  children: React.ReactNode;
  className?: string;
  x?:number;
  y?:number;
 
}

export default function Textslide({
  children,
  className,
  x=0,
  y=0
}: TextslideProps) {
  return (
    <motion.div
    initial={{ opacity: 0,x:x,y:y  }}
      animate={{  opacity: 1,x:0,y:0}}
      viewport={{ once: true, amount: 0.6 }}
      transition={{
        duration: 0.7,
        ease: 'easeIn',
        stiffness: 150,
        type: 'spring'
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}