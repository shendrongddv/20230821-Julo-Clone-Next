"use client";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Swiper CSS
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
// Swiper Modules
import { Pagination, Navigation, Autoplay, EffectFade } from "swiper/modules";

// Components
import PromoCard from "./promo-card";

// Contents
import { contentPromotions } from "@/content/content";

const PromoSlider = () => {
  const items = contentPromotions;

  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay, EffectFade]}
      loop
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}
      // centeredSlides={true}
      // effect={"fade"}
      // navigation
      pagination={{ clickable: true }}
      breakpoints={{
        360: {
          slidesPerView: "auto",
          spaceBetween: 16,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 24,
        },

        1140: {
          slidesPerView: 2,
          spaceBetween: 24,
        },
      }}
      className=""
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <PromoCard url={item.url} desktop={item.media.desktop} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PromoSlider;
