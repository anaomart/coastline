/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image'
import React from 'react'
import about from '../assets/about.jpeg'
import { ActivityIcon, AwardIcon, BoltIcon, CalendarIcon, DownloadIcon, GaugeIcon, MonitorIcon, RecycleIcon, RocketIcon, SaveIcon, SunIcon, TypeIcon, ViewIcon, WrenchIcon } from 'lucide-react'

export default function page() {
  return (
<>
<main className="flex flex-col">
      <section className="w-full py-20 md:py-32 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">
        <div className="  flex flex-col items-center text-center  text-white">
        <h1 className="text-3xl md:text-5xl lg:text-6xl lg:leading-[58px]  font-bold text-center mb-4"><span className='text-yellow-500 uppercase'>coastline </span>ENERGY GROUP </h1>

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight"> Powering a Sustainable Future</h1>
          <p className="mt-4 max-w-3xl text-lg md:text-xl">
            At Solar Solutions, we're dedicated to harnessing the power of the sun to create a cleaner, greener world.
            Our mission is to make renewable energy accessible to everyone, one rooftop at a time.
          </p>
        </div>
      </section>
      <section className="w-full pt-12 md:pt-24 lg:pt-32 bg-[#f5f5f5] ">
        <div className="container m-auto px-4 md:px-6 space-y-10 xl:space-y-16">
          <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 md:grid-cols-2 md:gap-16">
            <div>
              <h1 className="lg:leading-tighter text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xl:text-[3.4rem] 2xl:text-[3.75rem] text-[#333]  ">
                Harnessing the Power of the Sun
              </h1>
              <p className="mx-auto max-w-[700px] text-[#666] md:text-xl   ">
                At Solar Solutions, we're dedicated to providing clean, renewable energy to power a sustainable future.
                Our innovative technology and expert team are revolutionizing the way you think about solar power.
              </p>
            </div>
            <div className="flex justify-center">
              <Image
                alt="Solar Panel"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-bottom sm:w-full lg:order-last lg:aspect-square"
                height={550}
                src={about}
                width={550}
              />
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-12 md:py-24 lg:py-32 bg-white ">
        <div className="container m-auto space-y-12 px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-[#333]  ">
                Our Process
              </h2>
              <p className="max-w-[900px] text-[#666] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed   ">
                At Solar Solutions, we've streamlined the process of going solar. From initial consultation to
                installation and beyond, we're with you every step of the way.
              </p>
            </div>
          </div>
          <div className="mx-auto grid items-start gap-8 sm:max-w-4xl sm:grid-cols-2 md:gap-12 lg:max-w-5xl lg:grid-cols-3">
            <div className="grid gap-1">
              <div className="flex items-center space-x-4">
                <div className="rounded-full   bg-blue-400 p-3 text-[#333]">
                  <ViewIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#333]  ">Consultation</h3>
              </div>
              <p className="text-sm text-[#666]   ">
                Our experts will assess your energy needs and provide a customized solution.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center space-x-4">
                <div className="rounded-full   bg-blue-400 p-3 text-[#333]">
                  <TypeIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#333]  ">Design</h3>
              </div>
              <p className="text-sm text-[#666]   ">
                We'll create a detailed plan to maximize the efficiency of your solar system.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center space-x-4">
                <div className="rounded-full   bg-blue-400 p-3 text-[#333]">
                  <DownloadIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#333]  ">Installation</h3>
              </div>
              <p className="text-sm text-[#666]   ">
                Our experienced team will handle the entire installation process with care.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center space-x-4">
                <div className="rounded-full   bg-blue-400 p-3 text-[#333]">
                  <ActivityIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#333]  ">Maintenance</h3>
              </div>
              <p className="text-sm text-[#666]   ">
                We provide ongoing support and maintenance to ensure your system operates at peak efficiency.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center space-x-4">
                <div className="rounded-full   bg-blue-400 p-3 text-[#333]">
                  <MonitorIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#333]  ">Monitoring</h3>
              </div>
              <p className="text-sm text-[#666]   ">
                Our advanced monitoring system ensures your system is performing at its best.
              </p>
            </div>
            <div className="grid gap-1">
              <div className="flex items-center space-x-4">
                <div className="rounded-full   bg-blue-400 p-3 text-[#333]">
                  <SaveIcon className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold text-[#333]  ">Savings</h3>
              </div>
              <p className="text-sm text-[#666]   ">
                Our solar solutions can help you save on your energy bills and reduce your carbon footprint.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-20 md:py-32 bg-gray-100 ">
        <div className="container m-auto grid items-center justify-center gap-8 px-4 md:grid-cols-2 md:gap-12 lg:gap-20">
          <div className="space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our History</h2>
            <p className="max-w-[600px] text-gray-500 md:text-xl ">
              Bright Solar Solutions has been at the forefront of the solar energy revolution since 2010. Learn more
              about our journey.
            </p>
          </div>
          <div className="grid gap-6">
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 rounded-full   bg-blue-400 p-2">
                <CalendarIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Established in 2010</h3>
                <p className="text-gray-500 ">
                  Bright Solar Solutions was founded with the mission to make renewable energy accessible to all.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 rounded-full   bg-blue-400 p-2">
                <RocketIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Rapid Growth</h3>
                <p className="text-gray-500 ">
                  Over the years, we've expanded our reach and installed solar systems for thousands of homes and
                  businesses.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0 rounded-full   bg-blue-400 p-2">
                <AwardIcon className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-semibold">Industry Recognition</h3>
                <p className="text-gray-500 ">
                  Our commitment to excellence has earned us numerous awards and accolades from industry organizations.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>







<main className="flex flex-col">
      
    </main>
</>
  )
}
