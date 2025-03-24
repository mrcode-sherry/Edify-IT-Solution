"use client";
import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ChevronRight } from "lucide-react";

const text = "About Edify IT Solutions";
// const text = "We are Radison, we help founders like you to automate their day to day business operations with the help of AI";

const containerVariant = {
  initial: { opacity: 1 },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07, // Delay each word animation
    },
  },
};

const wordVariant = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const WhoWeAre = ({ classname = "" }) => {
  return (
    <div className="flex justify-center flex-col items-center h-full px-6 overflow-hidden md:px-20">
      <div className="flex flex-col items-center text-center gap-8 md:gap-6 max-w-5xl">
        <div className="bg-[#0D0D0D] border border-white border-opacity-30 px-4 py-2 rounded-lg md:px-4">
          <p className="text-[#D9D8DF] md:text-[16.5px] font-semibold text-sm">
            Our Company
          </p>
        </div>
        <motion.h1
          className={`text-white text-[28.3px] md:text-[53px] leading-tight tracking-wide ${classname}`}
          variants={containerVariant}
          initial="initial"
          animate="animate"
        >
          {text.split(" ").map((word, index) => (
            <motion.span
              key={index}
              variants={wordVariant}
              className="inline-block mr-1"
            >
              {word}
            </motion.span>
          ))}
        </motion.h1>
        <div className="flex max-w-5xl font-bold">
          <motion.p
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="text-[#CCCCCC] md:w-full w-80 md:text-[19px] text-sm leading-normal"
          >
            {/* Experience the future of business with intelligent, scalable
                      automation solutions tailored to your needs. */}
            Edify IT Solutions is a dynamic and forward-thinking technology firm
            that provides top-tier IT solutions. With expertise spanning social
            media management, graphic design, digital marketing, web and app
            development, SEO, Oracle software, Oracle APEX, ERP, CRM, Python
            development, and various digital tools, We empower businesses to
            achieve digital transformation and success.
          </motion.p>
        </div>
        <motion.div 
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.5 }}
        className="grid md:grid-cols-2 grid-cols-1 gap-4 md:gap-6 w-full mt-2">
          {[
            "Ease of Scalability",
            "Instant Impact",
            "Expertise and Experience",
            "Time Zone Aligned",
            "Full Flexibility",
            "Proactive Support",
          ].map((item, index) => (
            <div
              key={index}
              className="col-span-1 flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-lg bg-[#1A1A1A] hover:bg-[#252525] transition-all duration-300 shadow-md hover:shadow-lg"
            >
              <span className="text-logoBlue text-[22px] md:text-[26px]">
                <ChevronRight />
              </span>
              <span className="font-bold text-sm sm:text-base md:text-lg text-[#EAEAEA]">
                {item}
              </span>
            </div>
          ))}
        </motion.div>

        <div className="mt-4">
          <motion.button
            initial={{ y: 40, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="px-4 py-3 btn shadow-none !border-[#512FEB] text-white rounded-lg text-[17px] flex"
          >
            View All Services
            <ArrowUpRight
              size={20}
              className="ml-[3px] mt-1 items-center text-centejustify-center"
            />
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default WhoWeAre;
