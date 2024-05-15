import React from 'react';

export function  Hero () {
  return (
    <div className="relative">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
        poster="https://www.solarenergyworld.com/wp-content/uploads/2023/05/MD-House-Edit-v2.png" // optional poster image for browsers that don't support video
      >
        <source src="your-video.mp4" type="video/mp4" />
        {/* Add additional source elements for other video formats if needed */}
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-2 justify-center h-screen text-white">
        <div className=' -mt-32'>
        <h1 className="text-3xl md:text-4xl lg:text-5xl lg:leading-[58px]  font-bold text-center mb-4">Reduce Your Energy Bills and Embrace Clean Energy with <span className='text-yellow-500 uppercase'>coastline </span>ENERGY GROUP, LLC </h1>
        <p className="text-sm lg:text-base text-center mb-8 md:w-[60vw] m-auto">Coastline Energy Group, SunPower’s Authorized Dealer is a leading provider of solar energy solutions, dedicated to making a positive impact on the environment.</p>
       
        </div>
        <div className='flex gap-4'>
       <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm md:text-base font-bold py-2 sm:px-4 px-2 rounded">
          Get Started
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white text-sm md:text-base font-bold py-2 sm:px-4 px-2 rounded">
        Request a Quote Today																								

        </button>
       </div>
      </div>
    </div>
  );
};

