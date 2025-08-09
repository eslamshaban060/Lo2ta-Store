import React from "react";
import { Features } from "@/data/links";

const FeaturedServices = () => {
  return (
    <div className=" w-[100vw] py-[40px]  mb-5 relative h-auto bg-[var(--w2)]">
      <div className=" py-[50px]">
        <h2 className=" text-center font-bold text-4xl">خدماتنا المميزة</h2>
      </div>
      <div className=" continer grid gap-[30px] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-5   mx-auto ">
        {Features.map((item, id) => {
          return (
            <div
              className="  p-5 py-[40px]  hover:border-[1px] border-[var(--g)] flex rounded-xl flex-col gap-3 justify-center items-center bg-[var(--w)] transform hover:translate-y-[-6px]  duration-150 ease-in-out "
              key={id}
            >
              <div className=" bg-[var(--lg)] justify-center items-center flex w-[70px] text-2xl text-[var(--g)] h-[70px] rounded-full">
                {item.icon}
              </div>
              <div className=" text-xl font-medium ">{item.title}</div>
              <div className=" text-center text-lg text-[var(--g2)]">
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
      <div className=" w-[17%] h-[8px] bottom-0 rounded-2xl right-0 absolute bg-[var(--g)]"></div>
    </div>
  );
};

export default FeaturedServices;
