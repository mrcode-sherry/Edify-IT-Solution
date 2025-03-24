"use client"
import { motion } from "framer-motion"

export default function Testimonials() {
  return (
    <div className="z-10 relative flex justify-center flex-col items-center h-full px-6 md:px-20 overflow-hidden">

       {/* Section one */} 
        <motion.div initial={{y:40, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.3 , delay:0.3}} className="flex flex-col items-center text-center gap-8 md:gap-6 max-w-5xl">
            {/* First Div with Background & Padding */}
    <div className="bg-[#0D0D0D] border border-white border-opacity-30 px-4 py-2 rounded-lg md:px-4">
      <p className="text-[#D9D8DF] md:text-[16.5px] font-semibold text-sm">
      Testimonials
      </p>
    </div>

    {/* Main Heading */}
    <h1 className="text-white text-[28.3px] md:text-[53px]">
    Trusted by satisfied clients
    </h1>

    {/* Description */}
    <div className="flex max-w-xl font-bold">
    <p className="text-[#CCCCCC] md:text-[19px] text-sm -mt-5 ">
    Discover how we’ve driven growth and innovation.
    </p>
    </div>
        </motion.div>

       {/* Section two */}
       <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mt-16 w-full ">
  {/* Card 1 */}
<motion.div initial={{y:40, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.3 , delay:0.4}} className="flex flex-col card border border-white border-opacity-30 py-6 px-7 rounded-[35px]">
  <p className="text-[#B2B2B2] text-sm md:text-[18px] leading-normal">
  "Radison transformed our workflow with incredible AI solutions. Their expertise truly exceeded all expectations!"
  </p>
  <div className="flex items-center mt-6">
    <img src="/image.png" alt="Client 1" className="w-12 h-12 rounded-lg" />
    <div className="ml-3 space-y-[4px]">
      <p className="text-white text-sm md:text-[20px] font-semibold">Dean Watson</p>
      <p className="text-[#B2B2B2] text-xs md:text-[18px]">Managing director : Farmland</p>
    </div>
  </div>
</motion.div>

{/* Card 2 */}
<motion.div initial={{y:40, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.3 , delay:0.5}} className="flex flex-col bg-[#0F0F0F] border border-white border-opacity-30 py-6 px-7 rounded-[35px]">
  <p className="text-[#B2B2B2] text-sm md:text-[18px] leading-normal">
  "Radison provided game-changing insights that helped us optimize processes and scale operations fast."
  </p>
  <div className="flex items-center mt-6">
    <img src="/image.png" alt="Client 1" className="w-12 h-12 rounded-lg" />
    <div className="ml-3 space-y-[4px]">
      <p className="text-white text-sm md:text-[20px] font-semibold">Emily Zhang</p>
      <p className="text-[#B2B2B2] text-xs md:text-[18px]">CEO : Futuresync</p>
    </div>
  </div>
</motion.div>

{/* Card 3 */}
<motion.div initial={{y:40, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.3 , delay:0.6}} className="flex flex-col bg-[#0F0F0F] border border-white border-opacity-30 py-6 px-7 rounded-[35px]">
  <p className="text-[#B2B2B2] text-sm md:text-[18px]  leading-normal">
  "Radison’s AI tools revolutionized how we work, saving time and driving our productivity forward."
  </p>
  <div initial={{y:40, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.3 , delay:0.7}} className="flex items-center mt-6">
    <img src="/image.png" alt="Client 1" className="w-12 h-12 rounded-lg" />
    <div className="ml-3 space-y-[4px]">
      <p className="text-white text-sm md:text-[20px] font-semibold">James Carter</p>
      <p className="text-[#B2B2B2] text-xs md:text-[18px]">Marketing director : Innolystic</p>
    </div>
  </div>
</motion.div>

{/* Card 4 */}
<motion.div initial={{y:40, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.3 , delay:0.8}} className="flex flex-col bg-[#0F0F0F] border border-white border-opacity-30 py-6 px-7 rounded-[35px]">
  <p className="text-[#B2B2B2] text-sm md:text-[18px]  leading-normal">
  "Working with Radison has been seamless. Their solutions are both innovative and highly effective."
  </p>
  <div className="flex items-center mt-6">
    <img src="/image.png" alt="Client 1" className="w-12 h-12 rounded-lg" />
    <div className="ml-3 space-y-[4px]">
      <p className="text-white text-sm md:text-[20px] font-semibold">Liam Walker</p>
      <p className="text-[#B2B2B2] text-xs md:text-[18px]">Product manager : Brightpath</p>
    </div>
  </div>
</motion.div>

{/* Card 5 */}
<motion.div initial={{y:40, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.3 , delay:0.9}} className="flex flex-col bg-[#0F0F0F] border border-white border-opacity-30 py-6 px-7 rounded-[35px]">
  <p className="text-[#B2B2B2] text-sm md:text-[18px]  leading-normal">
  "Thanks to Radison, we’ve achieved incredible growth by automating tasks and improving accuracy."
  </p>
  <div className="flex items-center mt-6">
    <img src="/image.png" alt="Client 1" className="w-12 h-12 rounded-lg" />
    <div className="ml-3 space-y-[4px]">
      <p className="text-white text-sm md:text-[20px] font-semibold">Miguel Torres</p>
      <p className="text-[#B2B2B2] text-xs md:text-[18px]">IT consultant : Alphaedge</p>
    </div>
  </div>
</motion.div>

{/* Card 6 */}
<motion.div initial={{y:40, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.3 , delay:1}}className="flex flex-col bg-[#0F0F0F] border border-white border-opacity-30 py-6 px-7 rounded-[35px]">
  <p className="text-[#B2B2B2] text-sm md:text-[18px]  leading-normal">
  "The team at Radison delivered outstanding results, improving our efficiency beyond what we imagined!"
  </p>
  <div className="flex items-center mt-6">
    <img src="/image.png" alt="Client 1" className="w-12 h-12 rounded-lg" />
    <div className="ml-3 space-y-[4px]">
      <p className="text-white text-sm md:text-[20px] font-semibold">Priya Sharma</p>
      <p className="text-[#B2B2B2] text-xs md:text-[18px]">Founder : NexGen</p>
    </div>
  </div>
</motion.div>

</div>


    </div>
  )
}
