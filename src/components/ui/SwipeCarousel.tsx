"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import BlurFade from "./blur-fade";
import Button from "./Button";
import data from '@/../data/portfolio.json';


export function AppleCardsCarouselDemo() {
    const productlist = data.portfolio.productlist;
    const cards = Object.entries(productlist).map(([key, product], idx) => (
        <Card subheading={product.subheading} key={key} title={product.heading} href={key} src={product.thumbnail1} index={idx} />
    ));

    return (
        <div id="explor" className="w-full h-full overflow-hidden my-10 ">
            <div className='flex lg:flex-row sm:px-14 px-4 flex-col gap-3 justify-between'>
                <BlurFade y={0} x={-30} className='text-3xl lg:text-6xl  font-semibold max-w-2xl'>Explore Our Proudly Collection</BlurFade>
                <div className=' max-w-xl space-y-3'>
                    <BlurFade y={0} x={30} className=' text-left lg:text-right'>Whether you have distinct taste, or a unique space that needs a custom designed piece, our certified Custom Made furniture, will help you get anything made. Browse for ideas including: custom upholstery, custom tables, custom chairs, custom bedroom sets, custom shelves, custom built-ins, and more.</BlurFade>
                    <BlurFade y={0} x={30} className=' flex lg:justify-end'>
                        <a href="/portfolio">
                            <Button text='View More'></Button>
                        </a>
                    </BlurFade>
                </div>
            </div>
            <Carousel items={cards} />
        </div>
    );
}

