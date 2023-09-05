"use client";
import Image from "next/image";
import React, { useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  FreeMode,
  Thumbs,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/pagination";
import "../../style.css";
const Carrousel = ({ images }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      {/* <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={3}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log("slide change")}
        className=""
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index} className="">
              <img src={image} />
            </SwiperSlide>
          );
        })}
      </Swiper> */}
      <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        spaceBetween={10}
        navigation={true}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Navigation, Pagination, Thumbs, Scrollbar]}
        className="mySwiper2 rounded-3xl md:h-[70vh]"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide className=" rounded-3xl" key={index}>
              <img src={image} className=" min-h-[250px]" />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/*  <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <img src={image} />
            </SwiperSlide>
          );
        })}
      </Swiper> */}
    </>
  );
};

export default Carrousel;
