"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function ImageSlider() {
  const slides = [
    "images/images_2.jpg",
    "images/images_3.jpg",
    "images/images_4.jpg",
  ];
  return (
    <section className="relative h-[400px] w-full ">
      <Swiper
        modules={[Autoplay, Pagination, Navigation]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
        }}
        pagination={{ clickable: true }}
        navigation
        className="h-full"
      >
        {slides.map((src, index) => (
          <SwiperSlide key={index}>
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="object-cover w-full h-full object-center rounded-bottom-[10px]"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
