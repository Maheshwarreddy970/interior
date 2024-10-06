'use client';

import { cn } from '@/lib/utils';
import React, { FC } from 'react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        name: 'Rohit Sharma',
        description: "Casa Mobilia truly exceeded my expectations! The quality of their bespoke furniture is unmatched, and the customization options are endless. My living room has never looked better!",
        stars: 5,
    },
    {
        name: 'Neha Kapoor',
        description: "From the initial consultation to the final delivery, the entire process was seamless. Casa Mobilia’s designs are a perfect blend of modern aesthetics and traditional craftsmanship. Highly recommended!",
        stars: 5,
    },
    {
        name: 'Amitabh Desai',
        description: "I wanted something unique for my home office, and Casa Mobilia delivered beyond my imagination. Their attention to detail is fantastic, and the furniture is both stylish and functional.",
        stars: 5,
    },
    {
        name: 'Priya Malhotra',
        description: "The team at Casa Mobilia helped me design my dream bedroom. Every piece is customized to perfection, and the quality is impeccable. Worth every penny!",
        stars: 5,
    },
    {
        name: 'Karthik Iyer',
        description: "Casa Mobilia’s furniture collection is simply stunning. We customized our entire dining room set, and the craftsmanship is top-notch. It feels luxurious and timeless!",
        stars: 5,
    },
    {
        name: 'Deepika Sinha',
        description: "The creativity and expertise at Casa Mobilia are unmatched. Their team helped transform my space into something that feels both modern and classic at the same time. Couldn’t be happier!",
        stars: 5,
    },
    {
        name: 'Anil Patel',
        description: "I’ve bought furniture from many places, but Casa Mobilia stands out for its bespoke designs and excellent customer service. Every piece feels like a work of art!",
        stars: 5,
    },
    {
        name: 'Shreya Nair',
        description: "Casa Mobilia's ability to customize furniture to your exact needs is incredible. They brought my vision to life with elegance and precision. I love my new home interiors!",
        stars: 5,
    },
    {
        name: 'Sanjay Gupta',
        description: "The craftsmanship and quality of Casa Mobilia’s furniture are second to none. The entire experience was professional, and the furniture was delivered on time. Highly recommend for luxury interiors!",
        stars: 5,
    },
    {
        name: 'Ritu Mehra',
        description: "Casa Mobilia offers a unique blend of contemporary and traditional designs. We revamped our entire living space with their bespoke furniture, and it’s nothing short of spectacular!",
        stars: 5,
    }
];


const FADE_DOWN_ANIMATION_VARIANTS = {
    hidden: { opacity: 0, y: -10 },
    show: { opacity: 1, y: 0, transition: { duration: 1, type: "spring" } },
};

const Testimonial: FC = () => {
    return (
        <section className="w-full pb-5">
            <motion.div
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                variants={{
                    hidden: {},
                    show: { transition: { staggerChildren: 0.3 } },
                }}
                className='flex flex-col items-center mb-5'
            >
                <motion.p
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className=''
                >
                    Words from Others
                </motion.p>
                <motion.h1
                    variants={FADE_DOWN_ANIMATION_VARIANTS}
                    className="text-3xl text-center lg:text-6xl font-semibold"
                >
                    What our happy clients say
                </motion.h1>
            </motion.div>
            <div className="mx-auto w-full px-4 md:px-8">
                <div
                    className="group relative mt-6 flex gap-6 overflow-hidden p-5"
                    style={{
                        maskImage: 'linear-gradient(to left, transparent 0%, black 20%, black 80%, transparent 95%)',
                    }}
                >
                    {Array(6).fill(null).map((_, index) => (
                        <motion.div
                            key={index}
                            initial={{ translateX: 0 }}
                            animate={{ translateX: 'calc(-100% - 3rem)' }}
                            transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
                            className="flex shrink-0 flex-row justify-around gap-6"
                        >
                            {testimonials.map((testimonial, i) => (
                                <div key={i} className="flex flex-row justify-center">
                                    <TestimonialCard key={testimonial.name} {...testimonial} />
                                </div>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

interface TestimonialCardProps {
    name: string;
    description: string;
    stars: number;
}

const TestimonialCard: FC<TestimonialCardProps> = ({
    name,
    description,
    stars
}) => {
    return (
        <div
            className={`card-shadow shadow-md p-5 bg-white/60 backdrop-blur-xl border-black/10  relative flex h-auto max-w-[16rem] select-none flex-col items-baseline py-5 justify-center overflow-hidden rounded-2xl border transition-all duration-300 ease-in-out hover:-translate-y-5`}
        >
            <p className="mt-3 text-left text-sm font-light md:text-base :text-gray-400">
                {description}
            </p>
            <div className='w-full mt-4 flex justify-between'>
                <h3 className="m-0 text-sm font-semibold ">
                    {name}
                </h3>
                <div className='flex -translate-x-1 mb-0 justify-between items-center'>
                    {Array(5).fill(0).map((_, index) => (
                        <svg key={index} className={cn("w-3 h-3 ms-1", index + 1 <= stars ? "text-yellow-300" : "text-gray-300 :text-gray-500")} aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                        </svg>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonial;