import React from 'react'
import './Hero2Component.css'
import { useEffect, useState } from 'react';
import { Navigation, Autoplay,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img from './../../assets/imgs/Hero/hero2-3.jpg'
// import img2 from './../../assets/imgs/Hero/hero2-1.jpg'
import img3 from './../../assets/imgs/Hero/hero2-2.jpg'
import img4 from './../../assets/imgs/Hero/hero2-4.jpg'

export default function Hero2Component() {
  
  return (
    <div className="promo-banner">
    <Swiper  
      modules={[Navigation, Pagination,Autoplay]}
      loop={true}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      autoplay={{
        delay: 2500,
        disableOnInteraction: false
    }}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }} >
      {/* <SwiperSlide>
        <div className="slide-content">
          <img src={img2} alt="Slide 1" />
        </div>
      </SwiperSlide> */}
      <SwiperSlide>
        <div className="slide-content">
          <img src={img3} alt="Slide 2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={img} alt="Slide 2" />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="slide-content">
          <img src={img4} alt="Slide 2" />
        </div>
      </SwiperSlide>
    </Swiper>
  </div>


  )
}
