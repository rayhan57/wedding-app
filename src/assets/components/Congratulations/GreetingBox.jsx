import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import { FreeMode, Scrollbar } from "swiper/modules";

const GreetingBox = ({ greetings }) => {
  const slidesPerView = () => {
    if (window.innerWidth <= 640) {
      return 1;
    } else if (window.innerWidth <= 768) {
      return 2;
    } else if (window.innerWidth <= 1536) {
      return 3;
    } else {
      return 4;
    }
  };

  return (
    <Swiper
      slidesPerView={slidesPerView()}
      scrollbar={{ hide: true }}
      spaceBetween={10}
      freeMode={true}
      grabCursor={true}
      modules={[FreeMode, Scrollbar]}
      className="mySwiper"
    >
      {greetings?.map((greeting, index) => (
        <SwiperSlide key={index}>
          <div className="border rounded-md p-2" data-aos="fade-up">
            <h4 className="text-slate-100 lg:text-lg font-semibold">
              {greeting.Name}
            </h4>
            <p className="text-sm lg:text-base text-white">
              {greeting.Message}
            </p>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default GreetingBox;
