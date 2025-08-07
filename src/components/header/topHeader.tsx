import React from "react";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";

const TopHeader = () => {
  return (
    <div>
      <div className=" w-[100vw] h-[40px] border-1 border-[#ddd] bg-[var(--w2)]  ">
        <div className="flex py-2 continer mx-auto justify-between text-[#878787] ">
          <div className=" flex gap-2">
            <p>
              <CiLocationOn />
            </p>
            <p>المنيا - مصر</p>
          </div>
          <div>
            <Link className="  hover:text-[var(--g)] " href="/login">
              تسجيل الدخول
            </Link>
            <span className="mx-2">|</span>
            <Link className="  hover:text-[var(--g)] " href="/register">
              انضم الينا
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopHeader;
