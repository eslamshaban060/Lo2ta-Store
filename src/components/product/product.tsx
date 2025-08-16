"use client";
import React from "react";
import { useSelector } from "react-redux";
import initlType from "@/app/redux/reducer";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Link from "next/link";

const ProductNave = () => {
  const newProduct = useSelector((state: initlType) => state.newProduct);

  return (
    <div className=" w-[100vw] border-b-[1px] border-[#ddd] py-3">
      <div className="  continer mx-auto bg-[var(--w)] w-[100%]">
        <div className=" flex gap-4 text-[14px]  items-center font-thin text-[var(--h)] ">
          <Link href="/">الرئسية</Link>
          <p>
            <MdKeyboardArrowLeft />
          </p>
          <p>{newProduct?.category}</p>
          <p>
            <MdKeyboardArrowLeft />
          </p>
          <p>{newProduct?.subcategories[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductNave;
