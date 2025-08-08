import React from "react";
import { PiListBold } from "react-icons/pi";
import { Categories } from "@/data/links";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa6";

const Categores = () => {
  return (
    <div className="group1 relative">
      <div className="w-[130px] h-[40px] rounded-tl-xl rounded-tr-xl  text-[var(--w)] flex justify-center text-xl  items-center gap-2 bg-[var(--g)]">
        <p>
          <PiListBold />
        </p>
        <p className="pt-1">التصنيـفـات</p>
      </div>

      {/* list of catgores */}
      <div className=" hidden  group-hover1 top-[45px] bg-[var(--w)]  border-1 border-[#ddd] shadow-lg shadow-[#ddd] right-0  text-lg w-[230px] absolute rounded-md">
        <ul className=" ">
          {Categories.map((item, id1) => {
            return (
              <li
                className="py-2 group  hover:text-[var(--g)] hover:bg-[var(--lg)] relative px-4 border-b-[2px] border-[var(--w2)]"
                key={id1}
              >
                <Link className=" flex justify-between" href={item.link}>
                  <span>{item.title}</span>
                  <span className=" text-[10px] pt-2 pl-1">
                    <FaChevronDown />
                  </span>
                </Link>

                {/* sub category */}
                <div
                  className={`hidden top-[10px] bg-[var(--w)] right-[230px]  border-1 border-[#ddd] shadow-lg shadow-[#ddd]   text-xl w-[230px] absolute rounded-md group-hover:block
                  `}
                >
                  <ul>
                    {item.subcategories.map((category, id) => {
                      return (
                        <li
                          className="py-2 text-black  hover:text-[var(--g)] hover:bg-[var(--lg)] relative text-lg px-4 border-b-[2px] border-[var(--w2)]"
                          key={id}
                        >
                          <Link href={category.link}>{category.name}</Link>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Categores;
