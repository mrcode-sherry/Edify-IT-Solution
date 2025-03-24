"use client"
import { motion } from "framer-motion"
import { useState } from "react";
import { ArrowUpRight, Check, DollarSign } from "lucide-react";

export default function Plans() {
  const [selectedPlan, setSelectedPlan] = useState("monthly");

  const togglePlan = (plan) => {
    setSelectedPlan(plan);
  };

  const plans = [
    {
      name: "Basic Plan",
      monthlyPrice: "$19",
      yearlyPrice: "$199",
      description: "Essential tools and features for starting your journey with ease.",
      details: [
         "Baisc workflow automation",
         "Basic chatbot development",
         "60 content request",
         "E-mail support",
         "1 consultation a month"
        ],
    },
    {
      name: "Pro Plan",
      monthlyPrice: "$49",
      yearlyPrice: "$499",
      description: "Advanced capabilities designed to meet growing business needs.",
      details: [
        "Advance workflow automation",
        "Advance chatbot development",
        "150 content request",
        "E-mail support",
        "2 consultation a month"
      ],
    },
    {
      name: "Enterprise Plan",
      monthlyPrice: "Custom",
      yearlyPrice: "Custom",
      description: "Comprehensive solutions tailored for large-scale business success.",
      details: [
        "Custom workflow automation",
        "Custom chatbot development",
        "Unlimited content request",
        "24hr priority support",
        "Unlimited consultation a month"
      ],
    },
  ];

  return (
    <div className="flex justify-center flex-col items-center h-full overflow-hidden px-6 md:px-20">
      {/* Section One */}
      <motion.div initial={{y:40, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.3 , delay:0.3}} className="flex flex-col items-center text-center gap-8 md:gap-6 max-w-5xl">
        <div className="bg-[#0D0D0D] border border-white border-opacity-30 px-4 py-2 rounded-lg md:px-4">
          <p className="text-[#D9D8DF] md:text-[16.5px] font-semibold text-sm">Plans</p>
        </div>
        <h1 className="text-white text-[28.3px] md:text-[53px]">Flexible plans for growth</h1>
        <div className="flex max-w-xl font-bold">
          <p className="text-[#CCCCCC] md:text-[19px] text-sm -mt-5">Transparent pricing designed to fit your requirements.</p>
        </div>
      </motion.div>

      {/* Section Two */}
      <div className="mt-16 w-full">
        {/* Toggle Buttons */}
        <motion.div initial={{y:40, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.3 , delay:0.4}} className="flex justify-center px-2 py-2 rounded-xl border border-white border-opacity-30 bg-[#0F0F0F] w-fit mx-auto gap-2 mb-8">
          <button
            className={`px-3 py-2 rounded-lg text-md md:text-[18px] border-none text-white outline-none transition-all ${
              selectedPlan === "monthly" ? "btn shadow-none" : "bg-transparent"
            }`}
            onClick={() => togglePlan("monthly")}
          >
            Monthly
          </button>
          <button
            className={`px-3 py-2 rounded-lg border text-md md:text-[18px] border-none outline-none text-white transition-all ${
              selectedPlan === "yearly" ? "btn shadow-none" : "bg-transparent"
            }`}
            onClick={() => togglePlan("yearly")}
          >
            Yearly
          </button>
        </motion.div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-9">
          {plans.map((plan, index) => (
            <motion.div initial={{y:40, opacity:0}}
            whileInView={{y:0,opacity:1}}
            transition={{duration:0.3 , delay:0.5}} key={index} className="card border border-white border-opacity-30 px-7 py-8 rounded-[35px] text-white">
              <div className="flex items-center gap-3">
                <DollarSign className="text-blue-500" size={24} />
                <h2 className="text-lg font-semibold">{plan.name}</h2>
              </div>
              <p className="text-3xl md:text-[40px] mt-5">
                {selectedPlan === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}<span className="text-lg font-light">/{selectedPlan}</span>
              </p>
              <p className="text-[#B2B2B2] md:text-[18px] text-sm mt-5">{plan.description}</p>
              <button className="w-full btn shadow-none text-white py-2 rounded-lg mt-9 outline-none border-none flex text-lg md:text-[17px]">
                Go with this plan
                <ArrowUpRight size={20} className="ml-[1px] mt-1 items-center text-center flex justify-center"/>
              </button>
              <div className="mt-8">
                {plan.details.map((detail, i) => (
                  <div key={i} className="flex items-center gap-3 text-[#ECECEC] text-md md:text-[18px] space-y-3">
                    <div className="bg-[#3F3F3F] p-1 rounded-lg">
                      <Check size={18} className="text-white" />
                    </div>
                    <div className=" ">
                    <p className="">{detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}