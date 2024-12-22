'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

export default function HeaderSection({text}:{text:string | React.ReactElement}) {
  return (
    <main>
      <section className="relative w-full h-[150px] lg:h-[250px] overflow-hidden">
        <Image
          src="/about-4.avif" // Make sure to add this image to your public folder
          alt="Services Background"
          layout="fill"
          objectFit="cover"
          quality={100}
          priority
        />
        <div className="absolute inset-0 bg-black opacity-70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-4">
          <motion.h1 
            className="text-3xl uppercase md:text-5xl lg:text-6xl font-bold mb-4 shadow-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {text}
          </motion.h1>
          
        </div>
      </section>
      
      {/* Rest of your services page content */}
    </main>
  )
}

