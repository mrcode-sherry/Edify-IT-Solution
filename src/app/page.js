import Benefits from "@/components/Why-Choose";
import Contact from "@/components/Contact";
import Faqs from "@/components/Faqs";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Process from "@/components/Process";
import Radison from "@/components/Radison";
import Services from "@/components/Services";
import Slider from "@/components/Slider";
import Testimonials from "@/components/Testimonials";
import WhoWeAre from "@/components/OurCompany";

export default function Home() {
  return (
    <div className="bg-black flex flex-col gap-y-44 overflow-hidden">
      {/* Snow effect only in this section */}
      <section className=" z-0 ">
        <Hero />
      </section>

      {/* Other sections without SnowParticles */}
      <section className=" z-10 bg-black -mt-32">
        <WhoWeAre />
      </section>
      <section className=" z-10 bg-black">
        <Services />
      </section>
      <section className=" z-10 bg-black">
        <Process />
      </section>
      <section className=" z-10 bg-black">
        <Benefits />
      </section>
      {/* 
      <section className=" z-10 bg-black">
        <Plans />
      </section>
      */}
      <section className=" z-10 bg-black">
        <Testimonials />
      </section>
      <section className=" z-10 bg-black">
        <Contact />
      </section>
      <section className=" z-10 bg-black">
        <Faqs />
      </section>
      <section className=" z-10 bg-black">
        <Radison />
      </section>
    </div>
  );
}
