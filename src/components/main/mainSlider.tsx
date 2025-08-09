"use client";
import React from "react";
import Image from "next/image";
import { sliderData } from "@/data/links";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSlider = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <Slider
      {...settings}
      className="w-[100%] h-[90%] p-2 pb-0 sm:p-5 bg-[var(--lg)] flex justify-center   items-center  gap-2 rounded-2xl "
    >
      {sliderData.map((item) => {
        return (
          <div
            key={item.id}
            className="relative w-full h-[45vh] md:h-[64vh]   rounded-xl overflow-hidden"
          >
            <Image
              src={item.image}
              className="  transform  hover:scale-110 transition duration-75 rounded-xl"
              alt={`Slide ${item.id}`}
              fill
            />
            <div className=" rounded-3xl absolute flex justify-center items-center  right-[10px] top-[10px] bg-[var(--g)] h-[40px] w-[140px] text-[var(--w)]  sliderBadge ">
              {item.badge}
            </div>
            <div className=" rounded-xl absolute flex justify-center items-center  flex-col left-[10px] bottom-[10px] bg-[var(--w)] p-5 text-[var(--g)]  ">
              <p className=" font-medum text-black text-xl">{item.title}</p>
              <p>{item.subtitle}</p>
            </div>
          </div>
        );
      })}
    </Slider>
  );
};

export default MainSlider;
