import React from 'react'
import ServiceCard from './service-card'
import Image from 'next/image'
import service_1 from '../../public/about-2.avif'
import service_2 from '../../public/commercial.jpeg'

export default function Service() {
  return (
    <div className=' min-h-screen'>
     <section className="">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-xl space-y-3">
          <h3 className="text-blue-700 text-2xl md:text-3xl lg:text-5xl font-semibold">What we Do</h3>
          <p className='capitalize mx-2'> we provide home and business owners an option to   low the monthly rate so that they can save a bunch on electricity. </p>
        </div>
        <div>
          <div className='flex flex-col md:flex-row gap-8 my-10 '>
          
      <div className='relative flex-1 cursor-pointer  rounded-xl '>
        <div>
          <Image  className='w-full rounded-xl  object-cover bg-contain h-[250px]  md:h-[480px]    ' 
          src={service_1}
          alt='Residential'
 />            </div>
          <div className="absolute top-0 rounded-xl left-0 w-full h-full bg-black opacity-20 z-1"></div>
        <h3 className='absolute bottom-0 text-3xl text-white z-10 p-5 font-semibold'>Residential</h3>
      </div>  
      <div className='relative flex-1 cursor-pointer rounded-xl '>
        <div>
        <Image  className='w-full rounded-xl  object-cover bg-contain h-[250px]  md:h-[480px]    ' 
          src={service_2}
          alt='Commercial'
 />     
        </div>
          <div className="absolute top-0 rounded-xl left-0 w-full h-full bg-black opacity-20 z-1"></div>
        <h3 className='absolute bottom-0 text-3xl text-white z-10 p-5 font-semibold'>Commercial</h3>
      </div>

          
          </div>




        </div>
      </div>
    </section>
    </div>
  )
}
