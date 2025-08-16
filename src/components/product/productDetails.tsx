"use client";
import React from "react";
import { useSelector } from "react-redux";
import initlType from "@/app/redux/reducer";
import Image from "next/image";
import TextDetails from "./TextDetails";

const ProductDetails = () => {
  const newProduct = useSelector((state: initlType) => state.newProduct);

  return (
    <div className=" W-[10VW] py-[35px] bg-[var(--w2)]">
      <div className=" continer mx-auto grid-cols-1 border-[1px] border-[#ddd] bg-white rounded-lg grid md:grid-cols-2  ">
        <div className="p-4 sm:p-[35px]  ">
          <div className="border-[1px] rounded-lg border-[#ddd] ">
            {newProduct ? (
              <Image
                alt={newProduct ? newProduct.name : ""}
                width={100}
                height={100}
                src={newProduct ? newProduct.image : ""}
                className="w-[100%] sm:w-[60%] md:w-[100%] xl:w-[65%] mx-auto  rounded-lg"
              />
            ) : (
              ""
            )}
          </div>
        </div>

        <div className="border-r-[1px] p-4 md:p-[35px] rounded-l-xl border-[#ddd] ">
          <TextDetails />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
