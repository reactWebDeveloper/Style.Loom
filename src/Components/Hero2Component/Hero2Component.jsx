import React from 'react'
import './Hero2Component.css'
import { Navigation, Autoplay,Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import img from './../../assets/imgs/Hero/hero2-3.jpg'
import img3 from './../../assets/imgs/Hero/hero2-2.jpg'
import img4 from './../../assets/imgs/Hero/hero2-4.jpg'

export default function Hero2Component() {
  const slides = [
    { imgSrc: img3, altText: "Slide 1" },
    { imgSrc: img, altText: "Slide 2" },
    { imgSrc: img4, altText: "Slide 3" }
  ];

  return (
    <div className="AA-hero2">
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
      {slides.map((slide, index) => (
          <SwiperSlide>
          <div className="slide-content">
            <img src={slide.imgSrc} alt={slide.altText} />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
  )
}
