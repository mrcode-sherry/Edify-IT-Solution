"use client";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Web Development",
    description:
      "We offer complete frontend and backend web development services, creating responsive, visually stunning, and user-friendly websites. Whether it’s custom web applications, CMS platforms, or e-commerce solutions, we build robust and scalable websites designed to elevate your online presence.",
    image: "services/service-1.jpg",
  },
  {
    title: "Software Development",
    description:
      "Our software development solutions are tailored to solve complex business challenges. From conceptualization to deployment, we create innovative software that streamlines processes, improves efficiency, and drives success.",
    image: "services/service-2.jpg",
  },
  {
    title: "App Development",
    description:
      "We specialize in creating dynamic and intuitive Android and Flutter applications. Our apps are user-focused and technically advanced, delivering seamless experiences across devices. Whether it’s a startup or enterprise-level app, we turn your ideas into reality.",
    image: "services/service-3.jpg",
  },
  {
    title: "Lead Generation",
    description:
      "Accelerate your sales funnel with our effective lead generation services. We employ strategic marketing techniques to attract, engage, and convert prospects into loyal customers, driving measurable results for your business.",
    image: "services/service-4.jpg",
  },
  {
    title: "Graphic Designing",
    description:
      "Our expert team provides professional graphic design services, creating eye-catching visuals that resonate with your audience. From logos and branding to marketing materials, we bring your vision to life.",
    image: "services/service-5.jpg",
  },
  {
    title: "UI/UX Designing",
    description:
      "We design intuitive and engaging UI/UX solutions that enhance the user experience. By focusing on user behavior and trends, we craft interfaces that boost customer satisfaction and loyalty.",
    image: "services/service-6.jpg",
  },
  {
    title: "Oracle Software & Oracle APEX",
    description:
      "We deliver reliable solutions with Oracle Software and Oracle APEX, offering secure, efficient, and scalable platforms to streamline your operations and improve business productivity.",
    image: "services/service-5.jpg",
  },
  {
    title: "CRM and ERP Solutions",
    description:
      "Our CRM and ERP solutions empower businesses to manage resources and customer relationships effectively. From implementation to customization, we help you optimize processes and drive growth.",
    image: "services/service-6.jpg",
  },
  {
    title: "Meta (Facebook) Marketing",
    description:
      "Reach your target audience with precision using our Meta (Facebook) marketing strategies. From ad creation to campaign optimization, we enhance your social media presence and ROI.",
    image: "services/service-5.jpg",
  },
  {
    title: "Email Marketing",
    description:
      "Stay connected with your audience through our email marketing services. We craft engaging campaigns that promote your brand and build strong customer relationships.",
    image: "services/service-6.jpg",
  },
  {
    title: "Google Ads",
    description:
      "Boost your visibility with our Google Ads expertise. We design and manage highly targeted ad campaigns to ensure maximum conversions and ROI.",
    image: "services/service-5.jpg",
  },
  {
    title: "TikTok Marketing",
    description:
      "Leverage the power of trends with our TikTok marketing strategies. We create engaging content and manage ad campaigns to connect with the growing TikTok audience effectively.",
    image: "services/service-6.jpg",
  },
  {
    title: "Python Development and Advanced Tools",
    description:
      "Our Python development services cater to data-driven applications and automation. From web apps to machine learning tools, we harness Python’s power to develop cutting-edge solutions.",
    image: "services/service-5.jpg",
  },
  {
    title: "Data Science",
    description:
      "Transform your data into actionable insights with our *data science* services. We offer predictive analytics, data visualization, and advanced data modeling to help you make smarter decisions.",
    image: "services/service-6.jpg",
  },
];

export default function Services() {
  return (
    <div className="flex justify-center flex-col items-center h-full overflow-hidden px-6 md:px-20">
      {/* Section one */}
      <motion.div
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.3, delay: 0.3 }}
        className="flex flex-col items-center text-center gap-8 md:gap-6 max-w-5xl"
      >
        {/* First Div with Background & Padding */}
        <div className="bg-[#0D0D0D] border border-white border-opacity-30 px-4 py-2 rounded-lg md:px-4">
          <p className="text-[#D9D8DF] md:text-[16.5px] font-semibold text-sm">
            Our Services
          </p>
        </div>

        {/* Main Heading */}
        <h1 className="text-white text-[28.3px] md:text-[53px]">
          What we can offer today
        </h1>

        {/* Description */}
        <div className="flex max-w-xl font-bold">
          <p className="text-[#CCCCCC] md:text-[19px] text-sm -mt-5 ">
            Tailored solutions to streamline, innovate, and grow.
          </p>
        </div>
      </motion.div>

      {/* Section two */}
      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-7 mt-16 w-full">
        {/* First Row - Three Images */}
        {services.map((service, index) => (
          <div
            key={index}
            className="group bg-[#0F0F0F] rounded-[35px] overflow-hidden p-5 lg:p-7 flex flex-col"
          >
            <div className="flex-1">
              <div className="">
                <div className="relative w-full rounded-[25px] overflow-hidden aspect-video">
                  <img
                    src={service.image}
                    fill
                    alt={service.title}
                    className="object-cover min-h-full rounded-[25px] group-hover:scale-105 duration-500"
                  />
                </div>
              </div>
              <div className="flex items-center justify-between pt-5 gap-3 pb-5">
                <span className="text-[20px] lg:text-[24px] font-bold w-full">
                  {service.title}
                </span>
                <span className="-rotate-45 cursor-pointer group-hover:rotate-0 duration-300 text-base sm:text-lg md:text-xl xl:text-2xl bg-logoBlue text-white rounded-full p-2 xl:p-2 bg-[#512FEB]">
                  <ArrowRight />
                </span>
              </div>
              <div className="text-[#B2B2B2] prose font-semibold text-sm md:text-base line-clamp-3">
                {service.description}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-10">
        <motion.button
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.5 }}
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
  );
}
