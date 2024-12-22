'use client'

import { CheckCircle2 } from 'lucide-react'
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import HeaderSection from '@/components/ui/HeaderSection'

export default function SolarConsultantPosition() {
  return (
   <>
         <HeaderSection text={"Carers"}/>

   <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">
        <span className="text-black">Coastline </span>
        <span className="text-yellow-500">Energy</span>
        <span className="text-black"> Group, LLC.</span>
      </h1>

      <div className="text-gray-700 mb-12">
        Coastline Energy Group, is a leading provider of solar energy solutions, dedicated to making a positive impact on the environment and helping homeowners and businesses owners save money through renewable energy. We offer customized solar solutions to meet the unique needs of our clients, with a strong commitment to sustainability and innovation. We are seeking a highly motivated and dynamic Solar Consultants to join our team. As a Solar Consultant, you will be responsible for educating potential customers on the benefits of solar energy and guiding them through the process of transitioning to solar power. Your role will involve engaging with clients, assessing their energy needs, and presenting solar solutions tailored to their requirements.
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">
          <span className="text-black">Key </span>
          <span className="text-yellow-500">Responsibilities</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Educate potential clients on the advantages of solar energy and its environmental benefits. Conduct on-site or virtual consultations to evaluate the energy needs of potential customers.",
            "Create customized solar energy proposals and presentations.",
            "Guide clients through the process of selecting the right solar system for their homes or businesses.",
            "Provide accurate and detailed information regarding available incentives, rebates, and financing options.",
            "Maintain up-to-date knowledge of solar technology, industry trends, and government regulations.",
            "Collaborate with the sales team to ensure a seamless transition from consultation to the sales process.",
            "Establish and maintain strong customer relationships and follow up on leads.",
            "Meet or exceed monthly and quarterly sales targets."
          ].map((responsibility, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 mt-1 text-yellow-500 flex-shrink-0" />
              <p className="text-gray-700">{responsibility}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mb-12">
        <h2 className="text-3xl font-bold mb-6">Qualifications</h2>
        <div className="space-y-4">
          {[
            "A passion for renewable energy and a strong desire to promote sustainable living. Excellent communication and interpersonal skills.",
            "Strong presentation and negotiation abilities.",
            "Prior experience in solar sales or a related field is a plus, but not required."
          ].map((qualification, index) => (
            <div key={index} className="flex items-start gap-2">
              <CheckCircle2 className="w-5 h-5 mt-1 text-yellow-500 flex-shrink-0" />
              <p className="text-gray-700">{qualification}</p>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold mb-6">
          <span className="text-black">Apply </span>
          <span className="text-yellow-500">Now</span>
        </h2>
        <form className="grid md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="fullName">Full Name</Label>
            <Input id="fullName" className='!bg-white'  required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input id="email" className='!bg-white'  type="email" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input id="phone" className='!bg-white'  type="tel" required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Input id="subject"  className='!bg-white'  required />
          </div>
          <div className="space-y-2 md:col-span-2">
            <Label htmlFor="message">Message</Label>
            <Textarea 
              id="message" 
              className="min-h-[150px] !bg-white" 
              required 
            />
          </div>
          <Button 
            type="submit" 
            className="md:col-span-2 !text-white !bg-yellow-500 !hover:bg-yellow-600"
          >
            Submit Application
          </Button>
        </form>
      </div>
    </div>
   </> 
  )
}

