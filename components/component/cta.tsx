/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Button } from '../ui/button'

export default function CTA() {
  return (
    <div className=' relative  w-full h-[400px] flex justify-center items-center flex-col gap-6'>
              <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>

        <img className='h-full -z-10 absolute w-full object-cover' src='https://s3-alpha-sig.figma.com/img/91e8/ef76/da1ed946b1fe840b374d3f83c28ac1b7?Expires=1716163200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=BRr9OmH2r0y8gCJIyvZoG9-cGKW5etFaVLsdCP4ooh0ptZPww6WhZJ7O14PZMTG89ejG-4HuI1ZwqTCUW8IHkL2ksxw50Mit-W-EW-9mohZOTZvMHCuY74mCJJcbBlNWFpbrm5SNCG0ENVvXGYhc4IHj-MtoI900saCed3SBVMG7AbS2IStuJBXsi-i2IvlwHAByIaJotTQjkMlrTS9djEcS78YmB2xza1utSmrGzSOu35ZdYUAXBgnbYdTtXQa~H2LGbDXp7bydgBnIdeNzqdrcfWMHDeAlGAABR4J58j5cPH1hxueKOdHfsw6f-yWN6fsJbmIjGU25GDv4H4TR6Q__' alt='cta' />
    
        <div className='text-white capitalize z-20 text-2xl lg:text-5xl lg:w-[80%] px-2 text-center lg:leading-[56px] font-semibold'>
        Let's welcome a brighter, greener, and healthier future with solar panels
        </div>
        <button className="bg-blue-500 z-20 hover:bg-blue-600 text-white text-sm md:text-base font-bold py-2 sm:px-4 px-2 rounded">
        Request a Quote Today																								

        </button>
    </div>
  )
}
