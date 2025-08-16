"use client";
import React, { useState } from "react";
import { IoSearch } from "react-icons/io5";
import Search from "../search/search";

const SearchBar = () => {
  const [searchValue, setsearchValue] = useState("");
  return (
    <div className=" w-[100%]">
      <div className="w-[100%]  mx-auto max-w-[550px] h-[42px] relative">
        <input
          className="  w-[100%] block  h-[100%] px-5 pt-1 bg-[var(--w2)] rounded-4xl focus:border-2 border-[var(--g)]  focus:outline-3  outline-[var(--lg)] pr-[50px]"
          type="text"
          placeholder="ابحث عن منتج ...."
          value={searchValue}
          onChange={(e) => {
            setsearchValue(e.target.value);
          }}
        />
        <button
          className={` top-[5px] right-[10px] absolute w-[33px] h-[33px] bg-[var(--g)] rounded-full  text-[var(--w)] flex justify-center  text-[14px] items-center hover:w-[38px]  hover:bg-[var(--o)] hover:right-[7px] hover:h-[35px] hover:top-[4.5px]`}
        >
          <IoSearch className="text-xl" />
        </button>

        {/* search result  */}
        <div
          className={`  ${
            searchValue.length < 1 ? "hidden" : "block"
          } z-50 border-[1px] border-[var(--w2)] max-h-[70vh] overflow-y-scroll shadow-lg  bg-white absolute w-[100%] mx-auto rounded-2xl top-[50px]`}
        >
          <Search SearchValue={searchValue} />
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
