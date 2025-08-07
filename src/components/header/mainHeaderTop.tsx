import React from "react";
import Link from "next/link";
import SearchBar from "./searchBar";
import { FaRegUser } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";

const MainHeaderTop = () => {
  return (
    <div className=" w-[100vw] h-auto  ">
      <div className=" continer py-4  items-center mx-auto flex  justify-between">
        {/* logo */}
        <div className="  font-bold text-4xl">
          <span className=" text-[var(--g)]">لقطه </span>
          <span className=" text-[var(--o)]">ستور</span>
        </div>

        {/* search */}
        <div className=" w-[55%] hidden md:block">
          <SearchBar />
        </div>

        {/* links */}
        <div className="  flex gap-4.5">
          <Link href="/account">
            <div className=" group hover:text-[var(--g)] flex items-center gap-2">
              <span className="transform hover:translate-y-[-1px]  transition duration-75 w-[40px] bg-[var(--w2)] h-[40px] rounded-full flex  group-hover:bg-[var(--lg)] justify-center  items-center ">
                <FaRegUser />
              </span>
              <span>حسابى</span>
            </div>
          </Link>
          <Link href="/account">
            <div className="group hover:text-[var(--g)] flex items-center gap-2">
              <span className=" transform hover:translate-y-[-1px]  transition duration-75 w-[40px] bg-[var(--w2)] h-[40px] rounded-full flex justify-center  relative items-center  group-hover:bg-[var(--lg)] ">
                <IoCartOutline className=" text-xl" />
                <span className=" top-[-5px]   right-[-5px] absolute w-[20px] h-[20px] bg-[var(--o)] rounded-full text-[var(--w)] flex justify-center items-center text-[14px] pt-1 ">
                  0
                </span>
              </span>
              <span>سلة التسوق</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainHeaderTop;
