import React from "react";
import ProdctsSlider from "./slider";

const LastProducts = () => {
  return (
    <div className=" w-[100vw] h-auto  py-[10px] md:py-[30px]  ">
      <div className=" flex flex-col  g-5 justify-center items-center py-[50px]">
        <h2 className=" text-center text-[var(--h)] font-bold text-[40px]">
          احـدث المنتجـات
        </h2>
        <p className=" text-center pt-2 text-xl text-[var(--g2)]">
          كل منتج بـ 100 جنيه فقط – اختار اللى يناسبك
        </p>
      </div>
      <div>
        <ProdctsSlider Design="homePage" />
      </div>
    </div>
  );
};

export default LastProducts;
