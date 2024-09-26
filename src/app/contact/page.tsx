import Contact from '@/components/ui/Constactform'
import Image from 'next/image'
import React from 'react'
import Placeimage from '@/../public/bulding.jpg'


export default function page() {
  return (
    <section className='p-4 sm:p-10 mt-14 text-stone-900'>
      <div className=' grid grid-cols-1 gap-5 lg:grid-cols-2'>
        <div className=''>
          <h1 className='text-4xl sm:text-6xl lg:text-8xl font-bold'>Constact
            <br className=' hidden lg:block'></br> Us</h1>
          <p className=' max-w-md mt-10'>
            At Casa Mobilia, we&rsquo;re here to bring your design visions to life. Whether you&rsquo;re looking for bespoke furniture or interior design solutions, our team is ready to assist you with personalized consultations and expert guidance. Reach out to us today to discuss your project or any inquiries you may have. We look forward to helping you create the perfect space!
          </p>
        </div>
        <div className=' bg-[#f0e9e3] rounded-3xl  '>
          <Image src={Placeimage} alt='place' className='  rounded-3xl '></Image>
        </div>
      </div>

      <div className=' grid grid-cols-1 gap-4 lg:grid-cols-2 mt-16'>
        <div className=' rounded-2xl border text-white bg-black p-10 max-w-2xl   space-y-5 '>
          <p className=' text-2xl font-semibold'>Visit our studio at</p>
          <p className=' text-lg'>Aakarshan Furniture Systems, Plot no- D2/9 Tikona Park, New Industrial Township 2- NIT, Faridabad - 121001, Near Canara Bank
          </p>
          <div className=' flex lg:flex-row flex-col gap-3 lg:justify-between text-lg'>
            <span className=' font-semibold'>Contact:</span>
            <div className='flex gap-4 flex-wrap'>
              <a href="tel:+919911375600">+91-9911375600</a>
              <a href="tel:+911294055600">0129-4055600</a>
            </div>
          </div>
          <div className=' flex lg:flex-row flex-col gap-3 lg:justify-between text-lg'>
            <span className=' font-semibold'>Sales:</span>
            <div className=' flex gap-4 flex-wrap '>
              <a href="mailto:sales@Casa mobilia.in">sales@Casa mobilia.in</a>
              <a href="mailto:ankit@Casa mobilia.in">ankit@Casa mobilia.in</a>
            </div>
          </div>
          <div className=' flex lg:flex-row flex-col gap-3 lg:justify-between text-lg'>
            <span className=' font-semibold'>Vendor:</span>
            <div className=' flex gap-4 flex-wrap '>
              <a href="mailto:ankit@afsfurniture.in">ankit@afsfurniture.in</a>
              <a href="mailto:info@Casa mobilia.in">info@Casa mobilia.in</a>
            </div>
          </div>
          <div className=' flex lg:flex-row flex-col gap-3 lg:justify-between text-lg'>
            <span className=' font-semibold'>Career:</span>
            <div className=' flex gap-4 flex-wrap '>
              <a href="mailto:megha@Casa mobilia.in">megha@Casa mobilia.in</a>
            </div>
          </div>
        </div>
        <div className=''>
          <Contact></Contact>
        </div>
      </div>
      <div className=' w-full mt-14 relative block'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3510.1997543421367!2d77.29341977549161!3d28.383034075801962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cddecc299103d%3A0x7c6502b3565f4f5e!2sCasa%20Mobilia%20-%20Finest%20Bespoke%20Interiors%20%26%20Furniture*21!5e0!3m2!1sen!2sin!4v1727268274347!5m2!1sen!2sin" width="600" height="450" loading="lazy" className=' w-full rounded-3xl relative' referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </section>
  )
}
