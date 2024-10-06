"use client"

import React from 'react'
import data from '@/../data/portfolio.json';


export default function ProductsList() {
    const productlist = data.portfolio.productlist;

    return (
        <div className='grid gap-11 w-full grid-cols-1 lg:grid-cols-2'>
            {Object.entries(productlist).map(([key, product], idx) => (
                <div key={idx} className='h-[30rem] border shadow-md  relative rounded-3xl '>
                    <a href={`portfolio/${key}`} className='  h-full w-full '>
                        <div className=' absolute bottom-0 z-30 p-10'>
                            <h1 className=' font-bold text-5xl'>{product.heading}</h1>
                            <p className=' text-lg '>{product.subheading}</p>
                        </div>
                    </a>
                    {product.thumbnail2.length > 0 && (
                        <img
                            style={{
                                maskImage: `linear-gradient(to top, transparent, black 80%)`,
                            }}
                            src={product.thumbnail2}
                            alt={product.heading}
                            className='h-full object-cover rounded-3xl left-0 top-0 w-full'
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
