'use client'

import Bento from "@/components/Bento";
import Heroabout from "@/components/Heroabout";
import Herosection from "@/components/Herosection";
import LogoProof from "@/components/LogosSection";
import { AppleCardsCarouselDemo } from "@/components/ui/SwipeCarousel";
import Testimonial from "@/components/ui/Testimonial";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import Preloader from '../components/preloader';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    (
      async () => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 2000)
      }
    )()
  }, [])
  return (
    <main className=" bg-[#FAF9F6]  overflow-hidden ">
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>
      <Herosection></Herosection>
      <LogoProof></LogoProof>
      <Bento></Bento>
      <Heroabout></Heroabout>
      <Testimonial></Testimonial>
      <AppleCardsCarouselDemo></AppleCardsCarouselDemo>
    </main>
  );
}
