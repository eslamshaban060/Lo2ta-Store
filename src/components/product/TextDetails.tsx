"use client";
import React from "react";
import { useSelector } from "react-redux";
import initlType from "@/app/redux/reducer";
import MakeOrder from "./makeOrder";
import { FaStar } from "react-icons/fa6";
import Buttons from "./buttons";

const TextDetails = () => {
  const newProduct = useSelector((state: initlType) => state.newProduct);

  return (
    <div className=" flex flex-col gap-3">
      <h2 className=" font-bold text-2xl md:text-3xl xl:pl-[77px]  leading-relaxed text-[var(--h)]">
        {newProduct?.name}
      </h2>

      <div className=" flex gap-3 items-center">
        <p className=" flex gap-1 text-[var(--o)]">
          {[...Array(Math.round(newProduct ? newProduct.rating : 0))].map(
            (_, id) => {
              return (
                <div key={id}>
                  <FaStar />
                </div>
              );
            }
          )}
        </p>
        <p className="text-[15px] pt-1 font-thin text-[var(--h)] ">
          <span> التقيم </span>
          <span>({newProduct?.rating})</span>
        </p>
      </div>
      <div className=" flex gap-2 items-center  ">
        <p className=" rounded-full p-1 bg-[var(--g)]"></p>
        <p className="text-[var(--g)]">متوفر في المخزون</p>
      </div>
      <div className=" flex gap-4 items-center">
        <p className=" text-[var(--h)] text-2xl  font-bold md:text-3xl ">
          {newProduct?.price} مصرى
        </p>
        <p className="text-[10px]  w-fit rounded-2xl  py-1 px-3 text-white font-thin bg-[var(--o)]">
          الشحن مجانى
        </p>
      </div>
      <p className="text-[15px]  xl:pl-[77px] font-thin text-[var(--h)] ">
        {newProduct?.description}
      </p>

      {/*  ORDER  */}
      <div>
        <MakeOrder />
      </div>

      {/* buttons */}
      <div>
        <Buttons />
      </div>
    </div>
  );
};

export default TextDetails;
