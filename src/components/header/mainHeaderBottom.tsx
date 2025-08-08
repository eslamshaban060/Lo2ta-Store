"use client";
import React from "react";
import Link from "next/link";
import { NavLinks } from "@/data/links";
import { usePathname } from "next/navigation";
import { MdPhoneEnabled } from "react-icons/md";
import Categores from "./categores";
import SearchBar from "./searchBar";

const MainHeaderBottom = () => {
  const router = usePathname();

  return (
    <div className=" border-b-[1px]   border-[#ddddddb2]  w-[100vw]">
      {/* Desktop design  */}
      <div className=" hidden md:flex continer mx-auto justify-between">
        <div className=" flex items-center gap-[28px]">
          {/* categores  */}
          <div>
            <Categores />
          </div>

          {/* nav links */}
          <nav className=" hidden md:block ">
            <ul className=" flex text-[18px] gap-[18px] lg:text-lg lg:gap-[28px]">
              {NavLinks.map((item, id) => {
                return (
                  <li key={id}>
                    <Link
                      className={`h-[100%]  relative hover:text-[var(--g)] ${
                        router === item.link ? "text-[var(--g)] active" : ""
                      }`}
                      href={item.link}
                    >
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>

        {/* contact */}
        <div className=" hidden md:block">
          <div className=" items-center flex gap-3">
            <span className="w-[40px] h-[40px]  rounded-full flex justify-center items-center text-2xl text-[var(--w)] bg-[var(--g)] ">
              <MdPhoneEnabled />
            </span>
            <span className=" flex flex-col">
              <span>تواصل معنا </span>
              <span>01006407387</span>
            </span>
          </div>
        </div>
      </div>

      {/* mobile design  */}
      <div className=" continer py-3 items-center mx-auto flex gap-3 sm:gap-4 md:hidden ">
        {/* sidebar */}
        <div className=" w-[80px] h-[40px] rounded-md bg-[var(--g)] "></div>
        {/* search */}
        <div className=" w-[85%]  ">
          <SearchBar />
        </div>
      </div>
    </div>
  );
};

export default MainHeaderBottom;
