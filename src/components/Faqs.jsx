"use client"
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function Faqs() {
  const faqs = [
    { question: "What services do you offer?", answer: "We offer web development, UI/UX design, and AI solutions." },
    { question: "How can I contact support?", answer: "You can contact us via email or phone listed on our website." },
    { question: "Do you offer custom solutions?", answer: "Yes, we provide tailored solutions based on your requirements." },
    { question: "What is your pricing structure?", answer: "Our pricing depends on the project scope and requirements." },
    { question: "How long does a project take?", answer: "Project duration varies depending on complexity and scope." },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex justify-center flex-col items-center h-full px-6 md:px-20 overflow-hidden">
      {/* Section one */} 
      <motion.div initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="flex flex-col items-center text-center gap-8 md:gap-6 max-w-5xl">
        {/* Header */}
        <div className="bg-[#0D0D0D] border border-white border-opacity-30 px-4 py-2 rounded-lg md:px-4">
          <p className="text-[#D9D8DF] md:text-[16.5px] font-semibold text-sm">FAQs</p>
        </div>
        <h1 className="text-white text-[28.3px] md:text-[53px]">We’re here to help</h1>
        <div className="flex max-w-xl font-bold">
          <p className="text-[#CCCCCC] md:text-[19px] text-sm -mt-5">FAQs designed to provide the information you need.</p>
        </div>
      </motion.div>
      
      {/* FAQ List */}
      <div className="w-full max-w-5xl space-y-3 mt-16">
        {faqs.map((faq, index) => (
          <motion.div key={index} initial={{ x: 50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1, transition: { duration: 0.8, delay: index * 0.2 } }}
            viewport={{ once: true }}
            className="border rounded-2xl px-5 border-opacity-30 border-white bg-[#0F0F0F] py-5">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center text-left text-white text-lg md:text-[20px] duration-100"
            >
              {faq.question}
              {openIndex === index ? (
                <ChevronUp size={22} className="text-white" />
              ) : (
                <ChevronDown size={22} className="text-white" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="overflow-hidden"
                >
                  <p className="mt-2 text-md text-[#CCCCCC] leading-normal md:text-[19px] text-sm text-left">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
