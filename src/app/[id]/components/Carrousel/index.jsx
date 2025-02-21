"use client";
import React, { useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
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
              <img src={image} className=" min-h-[250px]" alt='image' />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
};

export default Carrousel;
