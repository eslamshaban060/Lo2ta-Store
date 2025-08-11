"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "@/data/testimonials";
import Testimonial from "@/data/testimonials";
import "./testimonials.css";

import TestimonialsCard from "./TestimonialsCard";
const Testimonials = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" bg-[var(--w2)] py-5 w-[100vw] pb-[60px]  ">
      <div className=" flex flex-col w-full g-5 justify-center items-center py-[50px]">
        <h2 className=" text-center text-[var(--h)] font-bold text-[40px]">
          ماذا يقول عملاؤنا؟
        </h2>
        <p className=" text-center px-5 pt-4 text-xl text-[var(--g2)]">
          تعرف على تجارب عملائنا مع لقطة ستور واكتشف كيف ساعدناهم في تسوقهم
          اليومي
        </p>
      </div>

      {/*  testmoials slide  */}
      <Slider
        className="w-[90%] md:w-[95%] lg:w-[78%] gap-5  items-center md:flex-row flex flex-col justify-between mb-5 mx-auto pt-1 py-5"
        {...settings}
      >
        {testimonials.map((item: Testimonial, id: number) => {
          return (
            <div
              className="transform hover:translate-y-[-6px] duration-300 ease-in-out"
              key={id}
            >
              <TestimonialsCard testmonialItem={item} />
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default Testimonials;
