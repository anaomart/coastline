import AboutUs from "@/components/component/aboutus/aboutus";
import ContactUs from "@/components/component/contactus";
import CTA from "@/components/component/cta";
import Features from "@/components/component/features";
import { Hero } from "@/components/component/hero";
import  Projects  from "@/components/component/projects";
import  Service  from "@/components/component/service";
import Testimonials from "@/components/component/testimonials";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <AboutUs/>
      <Service/>
      <CTA/>
      <Projects/>
      <Testimonials/>
      <ContactUs/>
    </div>
  );
}
