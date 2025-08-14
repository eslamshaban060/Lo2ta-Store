"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { blogPosts } from "@/data/blog";
import BlogPost from "@/data/blog";
import BlogCard from "./BlogCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

const Blog = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
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
    <div className=" pb-[50px] w-[100vw]">
      <div className=" mx-auto ">
        <div className=" flex flex-col  g-5 justify-center pt-[70px] items-center py-[50px]">
          <h2 className=" text-center text-[var(--h)] font-bold text-[40px]">
            مدونة لقطة ستور
          </h2>
          <p className=" text-center max-w-[350px] md:max-w-[450px] lg:max-w-[600px] pt-2 text-xl text-[var(--g2)]">
            أحدث المقالات والأخبار حول التسوق المحلي في المنيا وكيفية الاستفادة
            القصوى من تجربة لقطة ستور
          </p>
        </div>

        {/* blog slider  */}
        <div className=" continer w-[100vw]  pb-5 mx-auto">
          <Slider
            className=" w-[100%] continer mx-auto  flex gap-5"
            {...settings}
          >
            {blogPosts.map((item: BlogPost) => {
              return (
                <div key={item.id}>
                  <div>
                    <BlogCard blogs={item} />
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>

        {/*  go to blogs page  */}
        <Link
          className=" mt-4 mb-2 py-3 px-5 bg-[#ddd] justify-center flex hover:gap-5 gap-3 items-center hover:bg-[var(--g)] duration-300 w-fit mx-auto hover:text-[var(--w)] rounded-4xl "
          href="/blog"
        >
          <span>عرض جميع المقالات</span>
          <span>
            <FaArrowRight />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Blog;
