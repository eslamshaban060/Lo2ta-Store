"use client";
import React from "react";
import ProductType from "@/data/products";
import { useDispatch } from "react-redux";
import { OPEN_PRODUCT } from "./actionTypes";
import { useRouter } from "next/navigation";

// type
interface ProductTypes {
  Product: ProductType;
}
const ProductButton: React.FC<ProductTypes> = ({ Product }) => {
  const router = useRouter();
  const dispatch = useDispatch();

  const OpenProduct = () => {
    dispatch({
      type: OPEN_PRODUCT,
      newProduct: Product,
    });
    router.push("/product");
  };

  return (
    <div>
      <button
        onClick={() => {
          OpenProduct();
        }}
        className=" w-[80%] mt-5 text-[var(--g)] hover:text-[var(--w)]  hover:bg-[var(--g)] mx-auto justify-center flex items-center py-2 text-lg border-1 rounded-4xl border-[var(--g)]"
      >
        عرض التفاصيل
      </button>
    </div>
  );
};

export default ProductButton;
