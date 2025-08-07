import React from "react";
import { IoSearch } from "react-icons/io5";

const SearchBar = () => {
  return (
    <div className=" w-[100%]">
      <div className="w-[100%]  mx-auto max-w-[550px] h-[42px] relative">
        <input
          className="  w-[100%] block  h-[100%] px-5 pt-1 bg-[var(--w2)] rounded-4xl focus:border-2 border-[var(--g)]  focus:outline-3  outline-[var(--lg)] pr-[50px]"
          type="text"
          placeholder="ابحث عن منتج ...."
        />
        <button className=" top-[5px] right-[10px] absolute w-[33px] h-[33px] bg-[var(--g)] rounded-full text-[var(--w)] flex justify-center  text-[14px] items-center hover:w-[38px]  hover:bg-[var(--o)] hover:right-[7px] hover:h-[35px] hover:top-[4.5px] ">
          <IoSearch className="text-xl" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
