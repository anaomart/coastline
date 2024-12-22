import { Phone } from "lucide-react";
import Image from "next/image";
import React from "react";

export function Hero() {
  return (
    <div className="relative">
      {/* Video Background */}
      <Image
        alt='Home'
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        fill
        src={'/home.png'} // optional poster image for browsers that don't support video
      />
       
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-1"></div>
      {/* Content */}
      <div className="relative z-10 flex flex-col items-center px-2 justify-center h-screen text-white">
        <div className="absolute top-0 bg-blue-500 w-full min-h-10  flex  items-center">
         <div className=" lg:w-[73vw] px-2 md:text-center tracking-wider">
         <span className="font-bold ">Coverage Area: </span>  Massachusetts, Connecticut, Rhode Island, New
          Hampshire, Maine, New Jersey{" "}
        </div>
         </div>
        <div className=" -mt-32">
          <div className="text-center text-lg md:text-xl uppercase font-semibold tracking-widest  lg:text-3xl bg-yellow-500 w-fit mx-auto px-1 py-1 rounded-lg">
            Welcome to
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl uppercase lg:leading-[58px]  font-bold text-center mb-4">
            Coastline{" "}
            <span className="text-yellow-500 uppercase">
              {" "}
              ENERGY GROUP, LLC{" "}
            </span>{" "}
          </h1>
          <p className="text-sm lg:text-base text-center mb-8 md:w-[85ch]  m-auto">
            <span className="font-bold"> Coastline Energy Group</span>, is a
            leading provider of solar energy solutions, dedicated to making a
            positive impact on the environment.{" "}
          </p>
        </div>
        <div className="flex gap-4">
          <button className="bg-yellow-500 hover:bg-yellow-600 text-white text-sm md:text-base font-bold py-2 sm:px-4 px-2 rounded">
            Get Started
          </button>
          <a href="tel:1-888-61-SOLAR">
            <button className="bg-blue-500 flex gap-2 items-center justify-center hover:bg-blue-600 text-white text-sm md:text-base font-bold py-2 sm:px-4 px-2 rounded">
              <Phone size={20} />
              1-888-61-SOLAR
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}
