import React from 'react';
import './aboutus.css'
import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Image from 'next/image';
import about_1 from '../../../public/about-1.avif';
import about_2 from '../../../public/about-2.avif';
import about_3 from '../../../public/about-3.avif';
import about_4 from '../../../public/about-4.avif';
const AboutUs = () => {
  return (
   <div className='bg-slate-50  px-8 mb-12'>
     <div className="container m-auto w-full  ">
     <div className="contentRight">
        <div className="content">
          <h4 className='text-blue-600 text-lg font-bold'>Welcome To</h4>
          <h2 className='font-bold'><span className='text-yellow-500'>COASTLINE
            </span> ENERGY GROUP</h2>
          <p><span className='font-bold'>Coastline Energy Group,
            </span>  is a leading provider of solar energy solutions, dedicated to making a positive impact on the environment and helping homeowners and business owners save money through renewable energy. We offer customized solar solutions to meet the unique needs of our clients, with a strong commitment to sustainability and innovation</p>
            
        
        <a href="tel:1-888-61-SOLAR" className="bg-blue-500 flex gap-2 items-center justify-center w-fit hover:bg-blue-600 text-white text-sm md:text-base font-bold py-2 sm:px-4 px-2 rounded">
        <Phone size={20} className='inline' />
        <span className='inline'>        1-888-61-SOLAR
        </span>
         </a>
      
              </div>
      </div>
      <div className="contentLeft">
        <div className="row">
          <div className="imgWrapper">
            <Image src={about_1} alt="solar" />
          </div>
          <div className="imgWrapper">
          <Image src={about_2} alt="solar" />
          </div>
          <div className="imgWrapper">
          <Image src={about_3} alt="solar" />
          </div>
          <div className="imgWrapper">
          <Image src={about_4} alt="solar" />
          </div>
        </div>
      </div>
      
    </div>
   </div>
  );
}

export default AboutUs;
