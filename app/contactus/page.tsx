/* eslint-disable react/no-unescaped-entities */
'use client'

import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Mail } from 'lucide-react'
import HeaderSection from "@/components/ui/HeaderSection"

export default function ContactPage() {
    const servicesItems = ["Home Energy Solutions", "Commercial Energy Solutions", "Roof Replacement"]

  return (
   <>
   <HeaderSection text={'Contact Us'}/>
    <div className="container mx-auto p-4 grid lg:grid-cols-2 gap-8 my-8">
      {/* Contact Form Section */}
      <div className="bg-blue-600 p-8 rounded-lg text-white">
        <h2 className="text-2xl md:text-3xl font-bold mb-6">Get In Touch With Us!</h2>
        <p className="mb-6 text-sm opacity-90">Your Information Will Not Be Published.</p>
        
        <form className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Full Name"
              className="!bg-white text-black"
              required
            />
            <Input
              placeholder="Phone"
              className="!bg-white text-black"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Input
              placeholder="Email"
              type="email"
              className="!bg-white text-black"
              required
            />
            <Input
              placeholder="Subject"
              className="!bg-white text-black"
              required
            />
          </div>
          <Textarea
            placeholder="Your Query"
            className="!bg-white text-black min-h-[200px]"
            required
          />
          
          <div>
                            <label className="font-medium">
                                Services
                            </label>
                            <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3">
                                {
                                    servicesItems.map((item, idx) => (
                                        <li key={idx} className="flex gap-x-3 text-sm">
                                            <div>
                                                <input id={`service-${idx}`} type="checkbox" className="checkbox-item peer hidden" />
                                                <label
                                                    htmlFor={`service-${idx}`}
                                                    className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                                >
                                                </label>
                                            </div>
                                            <label htmlFor={`service-${idx}`} className="cursor-pointer">{item}</label>
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>

          <Button 
            type="submit" 
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
          >
            SUBMIT YOUR QUERY
          </Button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="space-y-8">
        <h2 className="text-3xl font-bold">
          Find <span className="text-yellow-500">Us</span>
        </h2>

        <div className="space-y-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-gray-600">Coastline Energy Group, LLC.</p>
                <p className="text-gray-600">9 Centennial Dr 2nd Floor, Suite 229, Peabody, MA 01960</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Address</h3>
                <p className="text-gray-600">2389 Main St., STE 100, Glastonbury, CT, 06033, United States</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Phone</h3>
                <p className="text-gray-600">1-888-61-SOLAR</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Mail className="w-6 h-6 text-yellow-500 flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-bold mb-2">Email</h3>
                <p className="text-gray-600">Info@coastline.contractors</p>
              </div>
            </div>
          </div>

          <div className="space-y-4 text-gray-600">
            <p>
              You can get in touch with us for a no-cost meeting with our consultants to 
              go over how good solar would be on your home!
            </p>
            <p>
              We will build a proposal based on your house's roof, sunlight, and several 
              other factors. All at no cost, just a simple 15-30 minute meeting with 
              someone on our team!
            </p>
          </div>
        </div>
      </div>
    </div>
    <div className=" h-[250px] md:h-[420px] order-2 hidden lg:block">
            <iframe loading="lazy" className="w-full h-full" src="https://maps.google.com/maps?q=Coastline%20Energy%20Group%2C%20LLC.%209%20Centennial%20Dr%202nd%20Floor%2C%20Suite%20229%2C%20Peabody%2C%20MA%2001960&amp;t=m&amp;z=10&amp;output=embed&amp;iwloc=near" title="Coastline Energy Group, LLC. 9 Centennial Dr 2nd Floor, Suite 229, Peabody, MA 01960" aria-label="Coastline Energy Group, LLC. 9 Centennial Dr 2nd Floor, Suite 229, Peabody, MA 01960"></iframe>
            </div>
   </>
  )
}

