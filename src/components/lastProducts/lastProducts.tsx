"use client";
import React from "react";
import { Products } from "@/data/products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "../featuredServices/ProductCard";
import { productType } from "../featuredServices/ProductCard";

const LastProducts = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    autoplay: true,
    autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 1206,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 980,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 580,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className=" w-[100vw] h-auto  py-[10px] md:py-[30px]  ">
      <div className=" flex flex-col  g-5 justify-center items-center py-[50px]">
        <h2 className=" text-center text-[var(--h)] font-bold text-[40px]">
          احـدث المنتجـات
        </h2>
        {/* <div className=" mb-5 mt-2 bg-[var(--g)] w-[90px] h-[4px] rounded-2xl "></div> */}
        <p className=" text-center pt-2 text-xl text-[var(--g2)]">
          كل منتج بـ 100 جنيه فقط – اختار اللى يناسبك
        </p>
      </div>
      <div className=" continer w-[100vw]  py-5 mx-auto">
        <Slider className=" w-[100%] " {...settings}>
          {Products.map((item: productType) => {
            return (
              <div className=" px-3" key={item.id}>
                <div className=" relative group border-[1px] hover:border-[var(--g)] bg-white border-[#ddd]  rounded-lg hover:shadow-lg hover:shadow-[rgba(0,0,0,0.19)]">
                  <ProductCard product={item} />
                  <div className=" bottom-0 left-0  duration-300   group-hover:w-[100%] h-[5px] w-[0%] absolute  z-50 bg-[var(--g)]  "></div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default LastProducts;
