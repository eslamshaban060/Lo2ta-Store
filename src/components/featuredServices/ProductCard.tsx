import React from "react";
import Image from "next/image";

export interface productType {
  id: string;
  name: string;
  description: string;
  image: string;
  price: string;
  seller: string;
}
const ProductCard = ({ product }) => {
  return (
    <div className=" transform group rounded-2xl duration-300 hover:translate-y-[-5px]  ">
      <div className="w-[100%] group relative overflow-hidden   h-[300px]">
        <Image
          alt={product.name}
          className="w-[100%] group-hover:scale-100 transition-transform duration-300 ease-in-out transform scale-90 rounded-2xl h-[100%] "
          src={product.image}
          width={100}
          height={100}
        />
        <div className=" w-[100%] h-[200px] bottom-0 left-0  z-10 bg-gradient-to-t  hidden group-hover:block from-[#00000010] absolute"></div>
      </div>
      <div className="px-5 h-[50px] flex justify-end items-center overflow-hidden  ">
        <h3 className=" truncate text-[18px]">{product.name}</h3>
      </div>
      <div className=" h-[20px] px-5 flex justify-end items-center overflow-hidden  ">
        <p className=" truncate text-[14px] ">{product.description}</p>
      </div>
    </div>
  );
};

export default ProductCard;
