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

// Contents
import { contentBanners } from "@/config/dummy";
import BannerCard from "./banner-card";

const BannerSlider = () => {
  const items = contentBanners;

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
          slidesPerView: "auto",
          spaceBetween: 24,
        },
        1024: {
          slidesPerView: "auto",
          spaceBetween: 32,
        },

        1140: {
          slidesPerView: "auto",
          spaceBetween: 32,
        },
      }}
      className=""
    >
      {items.map((item) => (
        <SwiperSlide key={item.id}>
          <BannerCard
            url={item.url}
            desktop={item.media.desktop}
            mobile={item.media.mobile}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default BannerSlider;
