import React from "react";
import ProductType from "@/data/products";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { FaArrowLeftLong } from "react-icons/fa6";

interface SearchCardTYpe {
  Item: ProductType;
}

const SearchCard: React.FC<SearchCardTYpe> = ({ Item }) => {
  return (
    <div className="w-[100%] py-3 px-5 group gap-2 lg:gap-5 hover:border-[1px] hover:border-[var(--g)] hover:bg-[var(--lg)] rounded-2xl grid grid-cols-4">
      <div className="  mx-auto  bg-white border-[1px]  py-1 border-[#ddd] rounded-xl col-span-1">
        <Image
          className=" mx-auto rounded-xl"
          alt={Item.name}
          width={100}
          height={100}
          src={Item.image}
        />
      </div>

      {/*  data  */}
      <div className="col-span-3  p-3  w-[100%] flex  gap-2 flex-col items-center mx-auto">
        <div className=" w-[100%] flex justify-between ">
          <div className=" text-[var(--o)] flex gap-2 items-center justify-center">
            {[...Array(Math.ceil(Item.rating))].map((_, id) => {
              return (
                <div key={id}>
                  <FaStar />
                </div>
              );
            })}
          </div>
          <div>
            <h4 className=" group-hover:text-[var(--g)]">{Item.shortName}</h4>
          </div>
        </div>

        <div className=" flex  items-center  gap-3  ">
          <h3 className="  line-clamp-1 text-[14x] text-[var(--h)]">
            {Item.name}
          </h3>

          <div className=" group-hover:translate-x-[-7px] duration-100 ease-in-out transform text-[var(--g)]">
            <FaArrowLeftLong />
          </div>
        </div>

        <div className=" flex w-[100%] justify-between">
          <h4 className=" text-[14px] py-1 bg-[var(--g)] text-white rounded-4xl px-4">
            {Item.category}
          </h4>
          <h4 className=" text-lg text-[var(--g)]">{Item.price}</h4>
        </div>
      </div>
    </div>
  );
};

export default SearchCard;
