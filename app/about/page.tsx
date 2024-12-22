/* eslint-disable react/no-unescaped-entities */
'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { ActivityIcon, AwardIcon, CalendarIcon, DownloadIcon, MonitorIcon, RocketIcon, SaveIcon, TypeIcon, ViewIcon } from 'lucide-react'
import CTA from '@/components/component/cta'
import HeaderSection from '@/components/ui/HeaderSection'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function AboutUs() {
  return (
    <main className="flex flex-col">
      <HeaderSection text={'about us'}/>

      <section className="w-full  md:px-20 py-20 md:py-32">
        <div className=" max-w-[1300px] mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className="md:w-1/2" variants={fadeIn}>
              <h2 className='text-blue-600 text-xl font-bold mb-4'>About Us</h2>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 mb-6">
                <span className='text-yellow-500 uppercase'>Coastline </span>
                ENERGY GROUP
              </h1>
              <p className="text-lg text-gray-700 leading-relaxed">
              Industry experts founded Coastline Energy Group, LLC. to assist in educating clients about the wide range of energy products and services available in the marketplace for homes and business owners.
              <br />
              <br />
Additionally, we can guide you through all of the local, state, and federal incentives that go along with renewable energy power plants. These incentives and programs are subject to budget restrictions and expiration dates that vary from state to state and frequently from town to town in today’s quickly changing and growing political environment. To keep ahead of all changes, we collaborate often with federal, state, and commercial organizations.
<br />
              <br />
We are aware that every project is special to each client. Our specialty is finding the finest solutions and incentives for every single client based on their unique goals and energy requirements.
You have our loyalty, and we value your approval beyond anything else.              </p>
            </motion.div>
            <motion.div className="md:w-1/2" variants={fadeIn}>
              <Image
                alt="About Team"
                className="rounded-xl object-cover w-full h-auto shadow-lg"
                height={550}
                width={650}
                src="/about-1.avif"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-full md:px-10 py-20 md:py-32 bg-gray-50">
        <div className="max-w-[1300px] mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 text-gray-900"
              variants={fadeIn}
            >
              Our Process
            </motion.h2>
            <motion.p 
              className="max-w-3xl mx-auto text-lg text-gray-700"
              variants={fadeIn}
            >
              At <span className='font-semibold text-yellow-500 uppercase'>Coastline </span>ENERGY GROUP, we've streamlined the process of going solar. From initial consultation to installation and beyond, we're with you every step of the way.
            </motion.p>
          </motion.div>
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { icon: ViewIcon, title: "Consultation", description: "Our experts will assess your energy needs and provide a customized solution." },
              { icon: TypeIcon, title: "Design", description: "We'll create a detailed plan to maximize the efficiency of your solar system." },
              { icon: DownloadIcon, title: "Installation", description: "Our experienced team will handle the entire installation process with care." },
              { icon: ActivityIcon, title: "Maintenance", description: "We provide ongoing support and maintenance to ensure your system operates at peak efficiency." },
              { icon: MonitorIcon, title: "Monitoring", description: "Our advanced monitoring system ensures your system is performing at its best." },
              { icon: SaveIcon, title: "Savings", description: "Our solar solutions can help you save on your energy bills and reduce your carbon footprint." },
            ].map((item, index) => (
              <motion.div key={index} className="bg-white p-6 rounded-lg shadow-md" variants={fadeIn}>
                <div className="flex items-center mb-4">
                  <div className="rounded-full bg-blue-600 p-3 mr-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                </div>
                <p className="text-gray-700">{item.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="w-full md:px-10 py-20 md:py-32">
        <div className=" max-w-[1300px]  mx-auto px-4">
          <motion.div 
            className="flex flex-col md:flex-row items-center justify-between gap-12"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className="md:w-1/2" variants={fadeIn}>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Our History</h2>
              <p className="text-lg text-gray-700 mb-8">
                Coastline Energy Group has been at the forefront of the solar energy revolution since 2023. Learn more about our journey.
              </p>
            </motion.div>
            <motion.div className="md:w-1/2" variants={fadeIn}>
              {[
                { icon: CalendarIcon, title: "Established in 2023", description: "Coastline Energy Group was founded with the mission to make renewable energy accessible to all." },
                { icon: RocketIcon, title: "Rapid Growth", description: "Over the years, we've expanded our reach and installed solar systems for thousands of homes and businesses." },
                { icon: AwardIcon, title: "Industry Recognition", description: "Our commitment to excellence has earned us numerous awards and accolades from industry organizations." },
              ].map((item, index) => (
                <div key={index} className="flex items-start mb-8">
                  <div className="rounded-full bg-blue-600 p-2 mr-4">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-700">{item.description}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      <CTA />
    </main>
  )
}

