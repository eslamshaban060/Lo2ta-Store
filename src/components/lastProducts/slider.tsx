"use client";
import React from "react";
import { Products } from "@/data/products";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import ProductType from "@/data/products";

interface DesignType {
  Design: string;
}

const ProdctsSlider: React.FC<DesignType> = ({ Design }) => {
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
    <div>
      <div
        className={` continer rounded-lg w-[100vw] ${
          Design === "productPag" ? "bg-white p-4 py-[30px]" : ""
        } py-5 mx-auto`}
      >
        <Slider className=" w-[100%] " {...settings}>
          {Products.map((item: ProductType) => {
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

export default ProdctsSlider;
