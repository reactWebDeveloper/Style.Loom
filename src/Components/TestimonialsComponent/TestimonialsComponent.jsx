import React from 'react'
import "./TestimonialsComponent.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import TestimonialsCard from "../../Components/TestimonialsCard/TestimonialsCard";
import { TestimonialsCardData } from '../../Data/TestimonialsCardData';

export default function TestimonialsComponent() {
  return (
    <>
      <section className="testimonialsComponent border2">
        <Swiper
          loop={true}
          modules={[Autoplay]}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false
          }}
          spaceBetween={10}
          slidesPerView={"auto"}
          grabCursor={true}
        >
          {
            TestimonialsCardData.map((e, index) => {
              return (
                <SwiperSlide key={index}>
                  <TestimonialsCard data={e} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </section>
    </>
  )
}
