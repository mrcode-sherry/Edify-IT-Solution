"use client";
import SnowParticles from "../particles/SnowParticles";
import { ArrowUpRight } from "lucide-react";
import Slider from "./Slider";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Snow Particles only inside this section */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <SnowParticles />
      </div>

      {/* Content inside Particles */}
      <div className="relative z-10 flex justify-center items-center h-full px-6">
        <div className="flex flex-col items-center mt-14 md:mt-16 text-center gap-8 md:gap-6 max-w-2xl md:max-w-5xl">
          {/* First Div with Background & Padding */}
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, x: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            className="bg-[#100F17] border border-white border-opacity-30 px-4 py-2 rounded-lg md:px-4 flex flex-row gap-3 md:w-fit w-[400px]"
          >
            <img src="edify4.png" alt="" width={18} height={18} />
            <p className="text-[#D9D8DF] md:text-[16.5px] font-semibold text-sm">
              {/* Radison - AI Automation Partner */}
              Edify IT Solutions - About Our Company
            </p>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="text-white md:w-full w-80  text-[28.3px] md:text-6xl font-bold leading-[2rem]"
          >
            {/* Transforming workflows with AI powered automation */}
            Simplifying Complexity Through Smart Software
          </motion.h1>

          {/* Description */}
          <div className="flex max-w-2xl font-bold">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="text-[#CCCCCC] md:w-full w-80 md:text-[19px] text-sm leading-normal"
            >
              {/* Experience the future of business with intelligent, scalable
              automation solutions tailored to your needs. */}
              We transform complexity into simplicity with intelligent software solutions designed to streamline processes and enhance efficiency. Our smart systems empower businesses to work smarter, not harder.
            </motion.p>
          </div>

          <div className="flex flex-row gap-5">
            <motion.button
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              className="px-4 py-2 btn shadow-none !border-[#512FEB] !border-2 text-white rounded-lg text-[17px] flex"
            >
              Free Consultation
              <ArrowUpRight
                size={20}
                className="ml-[3px] mt-1 items-center text-center flex justify-center"
              />
            </motion.button>
            {/** 
            <motion.button
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="px-4 py-2 bg-none border border-white text-[17px] border-opacity-30 text-white rounded-lg"
            >
              See Plans
            </motion.button>
            */}
          </div>
          <motion.div
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.7 }}
          >
            <Slider />
          </motion.div>
        </div>
      </div>
    </div>
  );
}
