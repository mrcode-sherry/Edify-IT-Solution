"use client"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  return (
    <div className="z-10 relative flex flex-col h-full px-6 md:px-20 overflow-hidden">
      <motion.div initial={{y:40, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.3 , delay:0.3}} className="flex flex-col items-center text-center gap-8 md:gap-6 ">
      <div className="bg-[#0D0D0D] border border-white border-opacity-30 px-4 py-2 rounded-lg md:px-4">
      <p className="text-[#D9D8DF] md:text-[16.5px] font-semibold text-sm">
      Contacts
      </p>
    </div>

    {/** Section Two */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-10 w-full">
      {/* First Part */}
      <motion.div initial={{x:-40, opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{duration:0.3 , delay:0.4}} className="flex flex-col gap-6 md:mt-12 mt-0">
        <h2 className="text-white text-[28.3px] md:text-[53px] text-left leading-tight">
          Ask whatever you have in your mind
        </h2>
        <div className="md:max-w-[560px]">
        <p className="text-[#CCCCCC] leading-normal md:text-[19px] text-sm -mt-3 text-left">
          Whether you have questions or are ready to discuss your business, we’re here to help. Reach out today.
        </p>
        </div>

        {/* Contact Details */}
        <div className="flex flex-col gap-4 mt-3">
          {/* Email */}
          <div className="flex items-center gap-3">
            <Mail size={24} className="text-[#CCCCCC]" />
            <span className="text-[#CCCCCC] duration-150 cursor-pointer hover:text-white text-md">contact@example.com</span>
          </div>

          {/* Phone */}
          <div className="flex items-center gap-3">
            <Phone size={24} className="text-[#CCCCCC]" />
            <span className="text-[#CCCCCC] duration-150 cursor-pointer hover:text-white text-md">+123 456 7890</span>
          </div>

          {/* Location */}
          <div className="flex items-center gap-3">
            <MapPin size={24} className="text-[#CCCCCC]" />
            <span className="text-[#CCCCCC] text-md">123 Business Street, City</span>
          </div>
        </div>
      </motion.div>

      {/* Second Part - Contact Form */}
      <motion.div initial={{x:40, opacity:0}}
              whileInView={{x:0,opacity:1}}
              transition={{duration:0.3 , delay:0.4}} className="flex flex-col md:p-6 rounded-lg shadow-lg">
        <form className="flex flex-col gap-7">
          {/* Name */}
          <div className="text-left space-y-2">
            <label className="text-white text-md">Name</label>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-1 px-3 py-2 rounded-md bg-[#101012] text-white border border-white border-opacity-30 outline-none "
            />
          </div>

          {/* Email */}
          <div className="text-left space-y-2">
            <label className="text-white text-md">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-1 px-3 py-2 rounded-md bg-[#101012] text-white border border-white border-opacity-30 outline-none"
            />
          </div>

          {/* Message */}
          <div className="text-left space-y-2">
            <label className="text-white text-md">Message</label>
            <textarea
              placeholder="Enter your message"
              className="w-full mt-1 px-3 py-2 h-24 rounded-md bg-[#101012] text-white border border-white border-opacity-30 outline-none"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="-mt-1 px-4 py-2 bg-[#512FEB] hover:bg-[#6A4FEB] text-white rounded-lg text-lg font-semibold"
          >
            Submit
          </button>
        </form>
      </motion.div>
    </div>
    </motion.div>
      </div>
  )
}

