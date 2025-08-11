import React from "react";
import Link from "next/link";

const Discover = () => {
  return (
    <div className="w-[100vw]  mt-5 bg-gradient-to-l from-[var(--lg)] py-5">
      <div className=" w-[90%] md:w-[95%] lg:w-[78%] gap-5  items-center md:flex-row flex flex-col justify-between mx-auto py-5  ">
        <div className=" text-center md:text-right py-3">
          <h3 className=" py-5 pb-4 text-4xl font-black text-[var(--h)] ">
            ابدأ اكتشاف كل المنتجات
          </h3>
          <p className=" text-[var(--g2)] pt-2 text-lg">
            انضم إلى آلاف المتسوقين في المنيا للعثور على منتجات رائعة بسعر 100
            جنيه.
          </p>
        </div>

        {/* links */}
        <div className=" text-center text-xl md:pt-4 flex flex-col justify-center items-center  gap-5">
          <Link
            href="/products"
            className="  py-3 text-white rounded-xl px-5 bg-[var(--g)] "
          >
            تصفح جميع المنتجات
          </Link>
          <Link
            href="/about"
            className="underline text-[var(--h)] hover:text-[var(--g)]"
          >
            تعرف علينا وعلى موقعنا اكثر
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Discover;
