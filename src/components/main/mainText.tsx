import React from "react";
import Link from "next/link";
import { Categories } from "@/data/links";

const MainText = () => {
  return (
    <div>
      {/* main text */}
      <div className="pb-5">
        {/* title */}
        <div className="  ">
          <h1 className=" font-black leading-[36px] sm:leading-[60px] text-[26px] sm:text-4xl">
            <span className=" text-[var(--h)]">لقطة ستور</span>
            <span className="  w-fit relative text-[var(--g)] block ">
              منتجاتك كلها علي قد الجيب!
              <div className="mt-2 sm:pt-1 w-[100%] h-[3px]  rounded-md bg-gradient-to-l to-[var(--g)] from-[var(--o)] absolute"></div>
            </span>
          </h1>
          <p className=" text-lg py-5 text-[#5d6764]">
            منصة تجارة إلكترونية غير ربحية تجمع كل المحلات الصغيرة والمتوسطة في
            المنيا تحت سقف واحد. كل منتج معروض سعره 100 جنيه مصري فقط!
          </p>

          {/* buttons */}
          <div className=" pt-3 pb-5 flex text-lg gap-3">
            <Link
              href="/products"
              className="  flex justify-center items-center transform hover:translate-y-[-2px] transition duration-75 h-[45px] ease-in-out text-white rounded-[8px] bg-[var(--g)] w-[130px]"
            >
              تسوق الان
            </Link>
            <Link
              href="/about"
              className="transform hover:translate-y-[-2px] transition duration-75 h-[45px] ease-in-out  border-[1px] hover:border-[var(--g)]  flex justify-center items-center border-[var(--g2)] hover:bg-[var(--lg)] hover:text-[var(--g)]
               hover:border-2 rounded-[8px] w-[130px]"
            >
              تعرف علينا
            </Link>
          </div>

          {/* categores button  */}
          <div>
            <div className=" pt-3 pb-1">
              <p className=" relative w-fit ">
                تصفح حسب الفئة:
                <span className="  bottom-[-1px]  right-0 w-[70%]  rounded-2xl h-[2px] bg-[var(--g2)] absolute"></span>
              </p>
            </div>
            <div className=" pt-5 pr-0 flex flex-wrap gap-4">
              {Categories.map((item, id) => {
                return (
                  <div key={id}>
                    {id <= 4 && (
                      <Link
                        href={item.link}
                        className=" w-fit  border-[1px] hover:text-[var(--w)]  hover:bg-[var(--g)]  text-[15px] transform hover:translate-y-[-3px] transition duration-250 ease-in-out border-[#ddd] flex justify-center items-center h-[40px] px-3 rounded-3xl  "
                        key={item.id}
                      >
                        {item.title}
                      </Link>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainText;
