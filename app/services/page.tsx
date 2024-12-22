/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import React from "react";
import roof from "../assets/roof.jpg";
import home from "../assets/home_service.jpg";
import Commercial from "../assets/commercial.jpg";

import CTA from "@/components/component/cta";

export default function page() {
  return (
    <>
      <main className="flex flex-col">
        <section className="w-full py-20  md:py-32 bg-gradient-to-r from-[#1E3A8A] to-[#3B82F6]">
          <div className=" px-1  flex flex-col items-center text-center  text-white">
            <h1 className="text-3xl uppercase md:text-5xl lg:text-6xl lg:leading-[58px]  font-bold text-center mb-4">
              Services
            </h1>
          </div>
        </section>
        <section className="w-ful  pt-12 md:pt-24 lg:py-20  ">
          <div className=" m-auto px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 lg:grid-cols-2 md:gap-16">
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 text-blue-500">
                  Residential
                </h1>
                <p className="  leading-loose text-sm md:text-xl max-w-[700px] text-[#666]   ">
                  Discover the brilliance of solar energy tailored to your
                  residence. Our seasoned professionals handle every aspect,
                  from personalized consultations to seamless installations.
                  With top-tier products and ongoing maintenance, we ensure your
                  transition to solar is effortless and enduring. Join us in
                  embracing a sustainable future for generations to come. Unlock
                  the power of the sun with Coastline Solar today. At Coastline
                  Solar, we're not just installing panels; we're illuminating
                  homes and empowering lives. Experience the difference with our
                  expertise and commitment to quality{" "}
                </p>{" "}
              </div>
              <div className="flex justify-center">
                <Image
                  alt="Solar Panel"
                  className=" mx-auto  object-cover bg-cover  overflow-hidden 
                rounded-xl object-fit sm:w-full lg:order-last "
                  height={550}
                  src={home}
                  width={650}
                />
              </div>
            </div>
          </div>
        </section>
        <section className="w-ful  pt-12 md:pt-24 lg:py-20  ">
          <div className="container m-auto px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 lg:grid-cols-2 md:gap-16">
              <div className="flex order-2 md:order-1 justify-center">
                <Image
                  alt="Solar Panel"
                  className="mx-auto  object-cover bg-cover  overflow-hidden 
                rounded-xl object-fit sm:w-full lg:order-last "
                  height={550}
                  src={Commercial}
                  width={650}
                />
              </div>
              <div className="order-1">
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 text-blue-500">
                  Commercial
                </h1>
                <p className="  leading-loose text-sm md:text-xl max-w-[700px] text-[#666]   ">
                  Elevate your business with sustainable energy solutions
                  tailored to your commercial needs. Our expert team handles
                  every aspect, from personalized consultations to seamless
                  installations, ensuring minimal disruption to your operations.
                  With top-tier products and ongoing maintenance, we guarantee
                  optimal performance and long-term savings for your enterprise.
                  Join us in reducing your carbon footprint and embracing a
                  sustainable future. Unlock the power of the sun with Coastline
                  Solar today. At Coastline Solar, we're not just installing
                  panels; we're illuminating businesses and driving progress.
                  Experience the difference with our expertise and commitment to
                  quality. Let's shape a brighter, greener future for your
                  business together.{" "}
                </p>{" "}
              </div>
            </div>
          </div>
        </section>{" "}
        <section className="w-ful  pt-12 md:pt-24 lg:py-20  ">
          <div className="container m-auto px-4 md:px-6 space-y-10 xl:space-y-16">
            <div className="grid max-w-[1300px] mx-auto gap-4 px-4 sm:px-6 md:px-10 lg:grid-cols-2 md:gap-16">
              <div>
                <h1 className="text-xl md:text-2xl lg:text-3xl font-bold my-4 text-blue-500">
                  Roof Replacement
                </h1>
                <p className="  leading-loose text-sm md:text-xl max-w-[700px] text-[#666]   ">
                  Step into a new era of sustainability and style with Coastline
                  Solar's innovative roof replacement services. Say goodbye to
                  dull roofs and hello to a vibrant, energy-efficient future.
                  Our expert craftsmen blend premium materials with artistic
                  flair, transforming your roof into a work of art that stands
                  the test of time. But we don't stop there. At Coastline Solar,
                  we infuse each replacement with solar technology, turning your
                  roof into a powerhouse of renewable energy. Imagine harnessing
                  the sun's rays not just to protect your home, but to power it
                  too. Join us in rewriting the narrative of roofing. Let's soar
                  to new heights together, embracing a future where every
                  sunrise brings not just light, but boundless opportunity.
                  Renew your roof, renew your commitment to sustainability, and
                  let Coastline Solar guide the way.{" "}
                </p>{" "}
              </div>{" "}
              <div className="flex justify-center">
                <Image
                  alt="Solar Panel"
                  className="mx-auto  object-cover bg-cover  overflow-hidden 
                rounded-xl object-fit sm:w-full lg:order-last "
                  height={550}
                  src={roof}
                  width={650}
                />
              </div>
            </div>
          </div>
        </section>
        <CTA />
      </main>

      <main className="flex flex-col"></main>
    </>
  );
}
