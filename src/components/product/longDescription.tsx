"use client";
import React from "react";
import { useSelector } from "react-redux";
import initlType from "@/app/redux/reducer";

const LongDescription = () => {
  const newProduct = useSelector((state: initlType) => state.newProduct);

  return (
    <div className=" py-1 mb-[35px] w-[100vw]">
      <div className="w-[100%] mx-auto continer rounded-lg border-[1px] border-[#ddd] bg-white  p-5 ">
        <h2 className=" text-2xl font-bold  text-[var(--h)] lg:text-3xl">
          وصف المنتج
        </h2>
        <p className="pt-3 text-[var(--g2)] lg:pl-5 ">
          {newProduct?.longDescription}
        </p>
      </div>
    </div>
  );
};

export default LongDescription;
