"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Slider() {
  return (
    <div className="h-full px-6 md:px-20 items-center overflow-hidden">
      <div className="items-center opacity-65 flex justify-center mt-9 mx-auto text-center gap-8 md:gap-6 max-w-[470px] ">
      <Swiper
        slidesPerView={3} // Number of visible slides
        spaceBetween={100} // Space between slides
        loop={true} // Infinite loop
        autoplay={{ delay: 0, disableOnInteraction: false }} // Auto move
        speed={5000} // Smooth transition speed
        modules={[Autoplay]}
        dir="rtl" // Move from right to left
      >
        <SwiperSlide>
          <img src="partners/logo-1.svg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="partners/logo-2.svg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="partners/logo-3.svg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="partners/logo-4.svg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
          <img src="partners/logo-5.svg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="partners/logo-6.svg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="partners/logo-7.svg" alt=""/>
        </SwiperSlide>
        <SwiperSlide>
        <img src="partners/logo-8.svg" alt=""/>
        </SwiperSlide>
      </Swiper>
      </div>
    </div>
  );
}
