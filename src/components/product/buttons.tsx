"use client";
import React from "react";
import { useSelector } from "react-redux";
import initlType from "@/app/redux/reducer";
import { CiHeart } from "react-icons/ci";

const Buttons = () => {
  const newProduct = useSelector((state: initlType) => state.newProduct);

  return (
    <div className=" grid grid-cols-7  pt-2 items-center  text-center  text-white justify-center gap-3">
      <div className="bg-[var(--g)] hover:bg-[var(--o)] rounded-[5px] py-2 px-5 col-span-6 ">
        اضف للسله
      </div>
      <div className=" text-center flex justify-center text-black border-[1px] border-[#ddd] py-2 text-2xl hover:text-white bg-[var(--w2)] hover:bg-[var(--g)] rounded-[5px] col-span-1 px-2">
        <CiHeart />
      </div>
    </div>
  );
};

export default Buttons;
