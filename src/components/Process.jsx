"use client"
import React from 'react'
import { motion } from 'framer-motion'

const works = [
  {
    title: "Operation Atlas",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "works/works-1.jpg",
  },
  {
    title: "Quantum Quest",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "works/works-2.jpg",
  },
  {
    title: "Blue Horizon Initiative",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "works/works-1.jpg",
  },
  {
    title: "Project Alpha",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: "works/works-2.jpg",
  },
];

export default function Process() {
  return (
    <div className="flex justify-center flex-col items-center h-full px-6 md:px-20 overflow-hidden">

       {/* Section one */} 
        <motion.div initial={{y:40, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.3 , delay:0.3}} className="flex flex-col items-center text-center gap-8 md:gap-6 max-w-5xl">
            {/* First Div with Background & Padding */}
    <div className="bg-[#0D0D0D] border border-white border-opacity-30 px-4 py-2 rounded-lg md:px-4">
      <p className="text-[#D9D8DF] md:text-[16.5px] font-semibold text-sm">
      Our Works
      </p>
    </div>

    {/* Main Heading */}
    <h1 className="text-white text-[28.3px] md:text-[53px]">
    Excellence from concept to completion
    </h1>

    {/* Description */}
    <div className="flex max-w-xl font-bold">
    <p className="text-[#CCCCCC] md:text-[19px] text-sm -mt-5 ">
    A simple, effective approach to deliver excellence.
    </p>
    </div>
        </motion.div>

       {/* Section two */}
       <div className='grid grid-cols-1 md:grid-cols-2 gap-7 mt-16 w-full'>
       {works.map((work, index) => (
          <div
            key={index}
            className="group bg-[#0F0F0F] dark:bg-dimBlack rounded-[30px] sm:rounded-[40px] lg:rounded-[50px] overflow-hidden p-3 sm:p-5"
          >
            <div>
              <div className="relative w-full rounded-[20px] sm:rounded-[25px] lg:rounded-[35px] overflow-hidden aspect-video">
                <img
                  src={work.image}
                  fill
                  alt={work.title}
                  className="object-cover rounded-[20px] sm:rounded-[25px] lg:rounded-[35px] group-hover:scale-105 duration-500"
                />
              </div>
            </div>
            <div className="px-5 pt-5 sm:pt-7 pb-3 sm:pb-5">
              <div className="text-[20px] lg:text-[24px] font-bold dark:text-white">
                {work.title}
              </div>
              <div className="text-[#9C9FA6] mt-2 sm:mt-3 font-semibold text-sm md:text-base">
                {work.description}
              </div>
            </div>
          </div>
        ))}
       </div>

    </div>
  )
}

