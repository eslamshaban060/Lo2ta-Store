import React from "react";
import Image from "next/image";
import iconsList from "@/data/cardIcons";
import ProductType from "@/data/products";

interface productTypeProps {
  product: ProductType;
}
const ProductCard: React.FC<productTypeProps> = ({ product }) => {
  const Share = iconsList[0];
  const Love = iconsList[1];
  const Cart = iconsList[2];
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
        {/* price  */}
        <div className=" bg-[var(--g)] flex justify-center items-center text-[var(--w)] py-2  group-hover:bg-[var(--o)] absolute  top-[15px] rounded-4xl left-[15px] px-4">
          100 جنيه
        </div>

        {/* shado */}
        <div className=" w-[100%] h-[200px] bottom-0 left-0  z-10 bg-gradient-to-t  hidden group-hover:block from-[#00000010] absolute"></div>

        {/* icons  */}
        <div>
          <div className=" flex flex-col absolute z-50 top-[30px]  right-[-30px] group-hover:right-[10px] duration-300 ease-in-out gap-3">
            <div>
              <div className="  bg-[var(--w)] p-2 border-[0.5px] my-2 hidden group-hover:block hover:bg-[var(--g)] hover:text-[var(--w)] border-[#ddd] shadow-2xl rounded-full ">
                <Share />
              </div>
              <div className="  bg-[var(--w)] p-2 border-[0.5px] my-2 hidden group-hover:block hover:bg-[var(--g)] hover:text-[var(--w)] border-[#ddd] shadow-2xl rounded-full ">
                <Love />
              </div>
              <div className="  bg-[var(--w)] p-2 border-[0.5px] my-2 hidden group-hover:block hover:bg-[var(--g)] hover:text-[var(--w)] border-[#ddd] shadow-2xl rounded-full ">
                <Cart />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className=" p-5  text-right ">
        <h3 className=" font-medium text-[var(--h)] group-hover:text-[var(--g)] text-[20px]">
          {product.name}
        </h3>

        <p className="  text-[var(--g2)] py-2 text-[15px] ">
          {product.description}
        </p>

        <p className=" text-[var(--o)]  items-center justify-end flex g-5 text-[16px] ">
          <span className=" w-[3px] h-[3px] mx-2 rounded-full bg-[var(--g)] block p-[5px]"></span>
          <span className=" block">{product.category}</span>
        </p>

        <button className=" w-[80%] mt-5 text-[var(--g)] hover:text-[var(--w)]  hover:bg-[var(--g)] mx-auto justify-center flex items-center py-2 text-lg border-1 rounded-4xl border-[var(--g)]">
          عرض التفاصيل
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
