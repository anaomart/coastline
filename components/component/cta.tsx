/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import cta from '../../public/cta.avif'

export default function CTA() {
  return (
    <div className=' relative  w-full h-[400px] flex justify-center items-center flex-col gap-6'>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>

        <Image  className='h-full -z-10 absolute w-full object-cover' 
        src={cta} alt='cta' />
    
        <div className='text-white capitalize z-20 text-2xl lg:text-5xl lg:w-[80%] px-2 text-center lg:leading-[56px] font-semibold'>
        Let's welcome a brighter, greener, and healthier future with solar panels
        </div>
        <button className="bg-blue-500 z-20 hover:bg-blue-600 text-white text-sm md:text-base font-bold py-2 sm:px-4 px-2 rounded">
        Request a Quote Today																								

        </button>
    </div>
  )
}
