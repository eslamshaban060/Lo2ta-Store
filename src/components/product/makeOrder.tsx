"use client";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";

const MakeOrder = () => {
  const [count, setcount] = useState(1);

  const add = () => {
    setcount(count + 1);
  };
  const minus = () => {
    if (count > 1) {
      setcount(count - 1);
    } else {
      setcount(1);
    }
  };
  return (
    <div className=" flex mt-2  select-none items-center gap-4">
      <p className=" text-lg">الكمية</p>
      <div className=" flex gap-3 border-[1px]  rounded-[5px]  border-[#ddd] ">
        <p
          onClick={() => {
            add();
          }}
          className=" py-1 px-3 text-center flex items-center justify-center hover:text-white hover:bg-[var(--g)] text-[12px]"
        >
          <FaPlus />
        </p>
        <p className="py-1 font-bold px-1">{count}</p>
        <p
          onClick={() => {
            minus();
          }}
          className="  px-4 text-center flex items-center justify-center hover:text-white hover:bg-[var(--g)] text-[12px]"
        >
          <FaMinus />
        </p>
      </div>
    </div>
  );
};

export default MakeOrder;
