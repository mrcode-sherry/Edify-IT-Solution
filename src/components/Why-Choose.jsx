"use client"
import { motion } from "framer-motion"
import { HandCoins, Lightbulb, ShieldCheck } from "lucide-react";

export default function Benefits() {
  return (
    <div className="z-10 relative flex justify-center flex-col items-center h-full px-6 md:px-20 overflow-hidden">

       {/* Section one */} 
        <motion.div initial={{y:40, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.3 , delay:0.3}} className="flex flex-col items-center text-center gap-8 md:gap-6 max-w-5xl">
            {/* First Div with Background & Padding */}
    <div className="bg-[#0D0D0D] border border-white border-opacity-30 px-4 py-2 rounded-lg md:px-4">
      <p className="text-[#D9D8DF] md:text-[16.5px] font-semibold text-sm">
      Why Choose Us
      </p>
    </div>

    {/* Main Heading */}
    <h1 className="text-white text-[28.3px] md:text-[53px]">
    Why choose us ?
    </h1>

    {/* Description */}
    <div className="flex max-w-xl font-bold">
    <p className="text-[#CCCCCC] md:text-[19px] text-sm -mt-5">
    Discover the key benefits of partnering with us.
    </p>
    </div>
        </motion.div>

       {/* Section two */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-16 w-full ">
  {/* Card 1 */}
<motion.div initial={{x:-40, opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{duration:0.3 , delay:0.5}} className="flex flex-col card border border-white border-opacity-30 py-8 px-11 rounded-[35px]">
  <div className="bg-[#3F3F3F] p-3 rounded-lg mb-8 w-fit">
  <Lightbulb size={30}/>
  </div>
  <h2 className="text-white text-2xl">Innovation</h2>
  <p className="text-[#B2B2B2] text-sm md:text-[18px] mt-5 leading-normal">
  Pioneering modern solutions to meet evolving business challenges with creativity and cutting-edge technology.
  </p>
</motion.div>

{/* Card 2 */}
<motion.div initial={{y:40, opacity:0}}
              whileInView={{y:0,opacity:1}}
              transition={{duration:0.3 , delay:0.3}}  className="flex flex-col bg-[#0F0F0F] border border-white border-opacity-30 py-8 px-11 rounded-[35px]">
  <div className="bg-[#3F3F3F] p-3 rounded-lg mb-8 w-fit">
  <ShieldCheck size={30}/>
  </div>
  <h2 className="text-white text-2xl">Quality-Focused</h2>
  <p className="text-[#B2B2B2] text-sm md:text-[18px] mt-5 leading-normal">
  Committed to delivering excellence through attention to detail and superior standards.
  </p>
</motion.div>

{/* Card 3 */}
<motion.div initial={{x:40, opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{duration:0.3 , delay:0.5}} className="flex flex-col bg-[#0F0F0F] border border-white border-opacity-30 py-8 px-11 rounded-[35px]">
  <div className="bg-[#3F3F3F] p-3 rounded-lg mb-8 w-fit">
  <HandCoins size={30}/>
  </div>
  <h2 className="text-white text-2xl">Value For Money</h2>
  <p className="text-[#B2B2B2] text-sm md:text-[18px] mt-5 leading-normal">
  Offering exceptional services that maximize your return on investment without compromising quality.
  </p>
</motion.div>

</div>

    </div>
  )
}