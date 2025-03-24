"use client"
import { motion } from "framer-motion"
import { ArrowUpRight } from "lucide-react";

export default function Radison() {
  return (
    <div className="flex flex-col h-full px-6 md:px-20 items-center overflow-hidden">
        <motion.div initial={{y:40, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.3 , delay:0.3}} className="flex flex-col items-center text-center gap-8 md:gap-6 max-w-[450px] ">
      <div className="bg-[#0D0D0D] border border-white border-opacity-30 px-4 py-2 rounded-lg md:px-4 flex flex-row gap-1">
        <img src="EdifySymbols.png" alt="" width={20} height={20}/>
      <p className="text-[#D9D8DF] md:text-[16.5px] font-semibold text-sm">
      Edify
      </p>
    </div>
    {/* Main Heading */}
    <h1 className="text-white text-[28.3px] md:text-[53px] leading-tight mt-3">
    Let’s talk about your next big move
          </h1>

          {/* Description */}
          <div className="flex max-w-xl font-bold">
            <div className="md:max-w-80">
            <p className="text-[#CCCCCC] leading-normal md:text-[19px] text-sm -mt-3">
            Hop on a call with us to see how our services can accelerate your growth.
            </p>
            </div>
          </div>

          <div className="flex flex-col gap-5">
          <button className="px-4 py-2 btn shadow-none !border-[#512FEB] !border-2 text-white rounded-lg text-[17px] flex">
          Schedule a quick call
              <ArrowUpRight size={20} className="ml-[3px]  items-center text-center flex justify-center"/>
            </button>
            <div className="-mt-2 md:text-[19px] text-sm">
            <p className="text-[#CCCCCC]">Its <span className="text-white"> Free</span></p>
            </div>
          </div>

    </motion.div>
    </div>
  )
}

