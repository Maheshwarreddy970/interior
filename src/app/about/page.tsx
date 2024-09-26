import Image from 'next/image'
import React from 'react'
import textimage1 from '@/../public/residential/7.jpg'
import textimage2 from '@/../public/aboutimage2.png'
import Starssection from '@/components/Starsection'
import image1 from '@/../public/sofa4.jpg'
import image2 from '@/../public/ppsteel1.jpg'
import image3 from '@/../public/office/2.jpg'
import image4 from '@/../public/krishnakunj2.jpg'
import image5 from '@/../public/krishnakunj1.jpg'
import image6 from '@/../public/sofa5.jpg'
import profile from '@/../public/ankit.jpeg'

export default function page() {
  return (
    <section className='p-4 sm:p-10 mt-14 text-stone-800 '>
      <div className=' flex'>
        <div className=' text-4xl sm:text-6xl lg:text-8xl justify-center items-center font-extrabold  flex flex-wrap max-w-4xl mx-auto gap-5 sm:gap-10 text-center'>Casa mobilia
          <Image src={textimage1} alt='sofa imaage' className='w-24 h-12 sm:w-36 sm:h-20 object-cover flex rounded-2xl sm:rounded-3xl'></Image>
          is <Image src={textimage2} alt='sofa imaage' className='w-24 h-12 sm:w-36 sm:h-20 object-cover flex rounded-2xl sm:rounded-3xl'></Image>
          <span className=' flex  flex-wrap'>Known for </span>Innovative
        </div>
      </div>
      <Starssection></Starssection>
      <div className=' grid grid-cols-7 gap-6 mt-8'>
        <div className=' col-span-2'>
          <Image src={image1} alt='image' className=' object-cover rounded-3xl h-80 w-full '></Image>
        </div>
        <div className=' col-span-3'>
          <Image src={image3} alt='image' className=' object-cover rounded-3xl h-80 w-full '></Image>
        </div>
        <div className=' col-span-2'>
          <Image src={image2} alt='image' className=' object-cover rounded-3xl h-80 w-full '></Image>
        </div>
      </div>
      <div className=' mt-28 space-y-8'>
        <p className='text-3xl text-center lg:text-6xl font-semibold'>Crafting Timeless Spaces</p>
        <p className=' text-center max-w-2xl mx-auto'>Pušform&apos;s talent is as know-how, a copacity that merges culture and knowledge and which, prior to becoming a gesture, is a design idea</p>
        <div className=' grid grid-cols-1 md:grid-cols-3 gap-7'>
          <div className=' relative rounded-3xl col-span-1 flex justify-center '>
            <Image src={profile} alt='profile' className=' w-80 rounded-2xl object-cover h-[26rem]'></Image>

          </div>
          <div className=' rounded-3xl col-span-2 '>
            <div className=' rounded-2xl bg-black text-white object-cover h-[26rem] p-10 lg:p-24 flex gap-8 justify-center flex-col'>
              <p className=' text-4xl'>Our History</p>
              <p>
              Casa Mobilia specializes in crafting luxury bespoke furniture and timeless interiors, blending global refinement with indigenous design. Established in 2012 by Ankit Agarwal and Sadhna Goyal, the brand showcases a curated collection of unique, customizable pieces. Each creation reflects exceptional craftsmanship and design innovation, embodying both contemporary and classic styles. We work closely with clients to transform their spaces into personalized works of art. With a commitment to quality, sustainability, and artistic excellence, Casa Mobilia sets the benchmark for luxurious living.                </p>
            </div>
          </div>
        </div>
      </div>
      <div className=' mt-10 relative'>
        <div className=' absolute top-0  w-[60%] lg:w-[40%] left-0 '>
          <div className=' text-2xl lg:text-6xl font-semibold w-full p-5 rounded-ee-2xl flex items-start bg-white  pt-1 pr-2 lg:pt-3 lg:pr-6'>
            Our Knowledge
          </div>
          <div className=' text-xs md:text-lg p-5  w-[80%] rounded-ee-2xl flex items-start bg-white  pt-1 pr-2 lg:pt-3 lg:pr-6'>
            Casa mobilia&apos;s strength is its expertise, combining culture and inowledge to form design ideas before tiringing them to life
          </div>
        </div>
        <Image src={image4} alt='image' className=' rounded-3xl h-[26rem] object-cover w-full '></Image>
      </div>
      <div className=' grid grid-cols-2 gap-7 mt-10'>
        <div className=' rounded-3xl '>
          <Image src={image5} alt='image' className=' rounded-2xl object-cover h-[26rem]'></Image>

        </div>
        <div className=' rounded-3xl '>
          <Image src={image6} alt='image' className=' rounded-2xl object-cover h-[26rem]'></Image>
        </div>
      </div>
    </section>
  )
}
