"use client"

import Preloader from '@/components/preloader/index';
import React, { useEffect, useState } from 'react'
import Contact from '@/components/ui/Constactform'
import BlurFade from '@/components/ui/blur-fade'
import { AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';

export default function Page() {  // Changed to uppercase 'P'
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    (
      async () => {
        setTimeout(() => {
          setIsLoading(false);
          document.body.style.cursor = 'default'
          window.scrollTo(0, 0);
        }, 1000)
      }
    )()
  }, [])

  return (
    <section className='p-4 sm:p-10 mt-14 '>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader />}
      </AnimatePresence>

      <div className='grid grid-cols-1 justify-items-center place-items-center gap-8 xl:grid-cols-2 p-4 mt-16'>
        <div className=' justify-center flex items-center flex-col w-full'>
          <div className='mb-6'>
            <BlurFade className='text-4xl xl:text-6xl font-bold'>Contact Us</BlurFade>  {/* Corrected typo */}
            <BlurFade className='mt-5'>
              At Casa Mobilia, we&rsquo;re here to bring your design visions to life. Whether you&rsquo;re looking for bespoke furniture or interior design solutions, our team is ready to assist you with personalized consultations and expert guidance. Reach out to us today to discuss your project or any inquiries you may have. We look forward to helping you create the perfect space!
            </BlurFade>
          </div>
          <Contact />
        </div>
        <div className='rounded-2xl xl:justify-center xl:flex items-center xl:flex-col w-full max-w-2xl space-y-5'>
          <BlurFade className='flex border py-6 px-11 w-full rounded-3xl bg-white/70 border-black/20 shadow-lg  gap-8'>
            <div className='flex justify-center items-center'>
              <MapPin />
            </div>
            <div>
              <p className='font-semibold'>Address</p>
              <p className='text-lg'>Aakarshan Furniture Systems, Plot no- D2/9 Tikona Park, New Industrial Township 2- NIT, Faridabad - 121001, Near Canara Bank</p>
            </div>
          </BlurFade>
          <div className='flex border py-6 px-11 w-full rounded-3xl bg-white/70 border-black/20 shadow-lg  gap-8'>
            <BlurFade className='flex justify-center items-center'>
              <Phone />
            </BlurFade>
            <BlurFade>
              <span className='font-semibold'>Contact:</span>
              <div className='flex gap-4 flex-wrap'>
                <a href="tel:+919911375600">+91-9911375600</a>
              </div>
              <a href="tel:+911294055600">0129-4055600</a>
            </BlurFade>
          </div>
          <div className=' grid gap-4 grid-cols-1 xl:grid-cols-2 w-full'>
          <BlurFade className='flex border py-6 px-11 w-full rounded-3xl bg-white/70 border-black/20 shadow-lg  gap-8'>
            <div className='flex justify-center items-center'>
              <Mail />
            </div>
            <div>
              <span className='font-semibold'>Sales:</span>
              <div className='flex gap-4 flex-wrap'>
                <a href="mailto:sales@Casa mobilia.in">sales@Casa mobilia.in</a>
              </div>
              <a href="mailto:ankit@Casa mobilia.in">ankit@Casa mobilia.in</a>
            </div>
          </BlurFade>
          <BlurFade className='flex border py-6 px-11 w-full rounded-3xl bg-white/70 border-black/20 shadow-lg  gap-8'>
            <div className='flex justify-center items-center'>
              <Mail />
            </div>
            <div>
              <span className='font-semibold'>Vendor:</span>
              <div className='flex gap-4 flex-wrap'>
                <a href="mailto:ankit@afsfurniture.in">ankit@afsfurniture.in</a>
              </div>
              <a href="mailto:info@Casa mobilia.in">info@Casa mobilia.in</a>
            </div>
          </BlurFade>
          </div>
          <BlurFade className='flex border py-6 px-11 w-full rounded-3xl bg-white/70 border-black/20 shadow-lg  gap-8'>
            <div className='flex justify-center items-center'>
              <Mail />
            </div>
            <div>
              <span className='font-semibold'>Career:</span>
              <div className='flex gap-4 flex-wrap'>
                <a href="mailto:megha@Casa mobilia.in">megha@Casa mobilia.in</a>
              </div>
            </div>
          </BlurFade>
        </div>
      </div>
      <BlurFade className='w-full mt-14 relative border shadow-md rounded-3xl block'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.1997543421367!2d77.29341977549161!3d28.383034075801962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cddecc299103d%3A0x7c6502b3565f4f5e!2sCasa%20Mobilia%20-%20Finest%20Bespoke%20Interiors%20%26%20Furniture*21!5e0!3m2!1sen!2sin!4v1727268274347!5m2!1sen!2sin" width="600" height="450" loading="lazy" className='w-full rounded-3xl relative' referrerPolicy="no-referrer-when-downgrade"></iframe>
      </BlurFade>
    </section>
  )
}
