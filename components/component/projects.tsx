import React from 'react'
import SliderCard from './sliderCard/SliderCard'
import { Slider } from './slider'

export default function Projects() {
  return (
    <section className="py-14 ">
      <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
        <div className="max-w-xl space-y-3">
          <h3 className="text-blue-700 text-lg font-semibold">Projects</h3>
          <p className="text-gray-800  text-3xl font-semibold sm:text-4xl">
            Power Your Future with{" "}
            <span className="text-yellow-500 uppercase">coastline </span> Solar Energy Group,LLC
          </p>
          <p>
          Expect A Great Experience
          </p>
        </div>
              </div>
        <Slider/>
    </section>
  )
}
