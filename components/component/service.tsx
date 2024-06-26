import React from 'react'
import ServiceCard from './service-card'

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
          <img className='w-full rounded-xl  object-cover bg-contain h-[250px]  md:h-[480px]    ' 
          src='https://images.unsplash.com/flagged/photo-1566838616793-29a4102a5b0e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='home'/>
        </div>
          <div className="absolute top-0 rounded-xl left-0 w-full h-full bg-black opacity-20 z-1"></div>
        <h3 className='absolute bottom-0 text-3xl text-white z-10 p-5 font-semibold'>Residential</h3>
      </div>  
      <div className='relative flex-1 cursor-pointer rounded-xl '>
        <div>
          <img className='w-full rounded-xl  object-cover bg-contain  h-[250px]  md:h-[480px]' 
          src='https://images.pexels.com/photos/256206/pexels-photo-256206.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='home'/>
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
