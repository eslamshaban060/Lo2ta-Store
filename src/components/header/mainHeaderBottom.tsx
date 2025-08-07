"use client";
import React from "react";
import Link from "next/link";
import { NavLinks } from "@/data/links";
import { usePathname } from "next/navigation";
import { MdPhoneEnabled } from "react-icons/md";
import Categores from "./categores";

const MainHeaderBottom = () => {
  const router = usePathname();

  return (
    <div className=" border-b-[1px]   border-[#ddddddb2]  w-[100vw]">
      <div className="flex continer mx-auto justify-between">
        <div className=" flex items-center gap-[28px]">
          {/* categores  */}
          <div>
            <Categores />
          </div>

          {/* nav links */}
          <nav>
            <ul className=" flex text-lg gap-[29px]">
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
        <div>
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
    </div>
  );
};

export default MainHeaderBottom;
