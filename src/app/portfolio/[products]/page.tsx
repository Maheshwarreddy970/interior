"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import data from '@/../data/portfolio.json';
import { X } from 'lucide-react';

// Define the type for productlist
type ProductList = typeof data.portfolio.productlist;

export default function Page() {

    const [open, setopen] = useState(-1)

    const params = useParams<{ products: string }>();
    const listname = params.products as keyof ProductList;

    const productData = data.portfolio.productlist[listname];

    const projectslist = productData.projects;
    console.log(projectslist)
    return (
        <main className='mt-11 grid lg:grid-cols-2 gap-10 w-full p-4 lg:p-10'>
            {
                projectslist.map((data, index) => (
                    <>
                        <button onClick={() => (setopen(data.id))} key={index} className=' relative border shadow-md'>
                            <h1 className=' absolute bottom-5 left-5 text-4xl font-semibold text-white'>{data.title}</h1>
                            <img src={data.thumbnail} className=' h-full w-full' alt='thumbnail'></img>
                        </button>
                        {
                            open == data.id && data.images.length>0 &&
                            <div className='fixed h-screen w-full mt-16 bg-white z-30 overflow-scroll top-0 left-0'>
                            <button
                              onClick={() => setopen(-1)}
                              className='z-40 bg-white shadow-xl text-red-500 rounded-full p-3 border fixed bottom-10 left-1/2 -translate-x-1/2'
                            >
                              <X />
                            </button>
                            <div className='grid w-full grid-cols-1 lg:grid-cols-2'>
                              {
                                data.images.map((image, i) => (
                                  <div key={i}>
                                    <img src={image} alt='image' className='h-full w-full' />
                                  </div>
                                ))
                              }
                            </div>
                          </div>
                        }
                    </>
                ))
            }
        </main>
    );
}
