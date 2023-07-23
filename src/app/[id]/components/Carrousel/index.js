"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import slide_image_1 from "/src/assets/images/catedral.jpg";
import slide_image_2 from "/src/assets/images/paisaje.jpg";
import "swiper/css";
import Image from "next/image";
const Carrousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={2}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>
        <Image src={slide_image_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide_image_2} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide_image_1} alt="" />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={slide_image_2} alt="" />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Carrousel;
