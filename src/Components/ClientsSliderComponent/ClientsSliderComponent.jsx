import React from 'react'
import "./ClientsSliderComponent.css"
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
import ClientsSliderCard from "../ClientsSliderCard/ClientsSliderCard";
import { ClientsSliderData } from '../../Data/ClientsSliderData';

export default function ClientsSliderComponent() {
  return (
    <>
      <section className="ClientsSliderComponent border2">
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
            ClientsSliderData.map((e, index) => {
              return (
                <SwiperSlide key={index}>
                  <ClientsSliderCard data={e} />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
      </section>
    </>
  )
}
