import React from 'react';
import './aboutus.css'
const AboutUs = () => {
  return (
   <div className='bg-slate-50  px-8 mb-12'>
     <div className="container m-auto w-full  ">
     <div className="contentRight">
        <div className="content">
          <h4 className='text-blue-600 text-lg font-bold'>Welcome To</h4>
          <h2 className='font-bold'><span className='text-yellow-500'>COASTLINE
            </span> ENERGY GROUP</h2>
          <p><span className='font-bold'>Coastline Energy Group
            </span> an authorized dealer of SunPower, stands as a forefront provider of solar energy solutions, driven by a commitment to environmental stewardship. Our mission revolves around empowering both homeowners and business proprietors to embrace renewable energy, leading to substantial savings. Through tailor-made solar solutions, we address the distinctive requirements of each client, prioritizing sustainability and fostering innovation at every step.</p>
          <a  className='bg-blue-500' href="#">Read More</a>
        </div>
      </div>
      <div className="contentLeft">
        <div className="row">
          <div className="imgWrapper">
            <img src="https://images.unsplash.com/photo-1583345237708-add35a664d77?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="solar" />
          </div>
          <div className="imgWrapper">
            <img src="https://images.unsplash.com/flagged/photo-1566838616793-29a4102a5b0e?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="solar" />
          </div>
          <div className="imgWrapper">
            <img src="https://images.unsplash.com/photo-1605980413988-9ff24c537935?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="solar" />
          </div>
          <div className="imgWrapper">
            <img src="https://images.unsplash.com/photo-1548705102-56b00f2bb299?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="solar" />
          </div>
        </div>
      </div>
      
    </div>
   </div>
  );
}

export default AboutUs;
