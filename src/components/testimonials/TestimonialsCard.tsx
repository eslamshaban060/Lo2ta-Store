import React from "react";
import Testimonial from "@/data/testimonials";
import Image from "next/image";
import Rating from "./rating";

interface TestmonialsTypes {
  testmonialItem: Testimonial;
}

const TestimonialsCard: React.FC<TestmonialsTypes> = ({ testmonialItem }) => {
  return (
    <div className="w-[92%]  overflow-hidden relative mx-auto bg-[var(--w)] rounded-2xl p-5 lg:px-[40px]">
      <div className=" flex items-center justify-left gap-4">
        {testmonialItem.avatar ? (
          <Image
            alt={testmonialItem.name}
            src={testmonialItem.avatar}
            width={60}
            height={60}
            className=" w-[60px] object-cover h-[60px] rounded-full"
          />
        ) : (
          <div className="bg-[var(--g)] text-white text-2xl flex justify-center  w-[60px]  h-[60px] rounded-full items-center  ">
            {testmonialItem.name.slice(0, 2)}
          </div>
        )}
        <div className=" flex gap-2 flex-col">
          <div className=" text-xl">{testmonialItem.name}</div>
          <div>
            <Rating />
          </div>
        </div>
      </div>
      <div className=" pt-5 text-right text-[var(--g2)] text-lg">
        {testmonialItem.comment}
      </div>
      <div className=" w-[100px] absolute rounded-full h-[100px] bg-[var(--lg)] "></div>
      <div className=" w-[100px] top-[-40px] right-[-40px] absolute rounded-full h-[100px] bg-[var(--lg)] "></div>

      <div className=" absolute w-[50px] text-[var(--lg)] left-[22px] top-[10px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          width="30"
          height="30"
        >
          <path
            fillRule="evenodd"
            d="M4.804 21.644A6.707 6.707 0 006 21.75a6.721 6.721 0 003.583-1.029c.774.182 1.584.279 2.417.279 5.322 0 9.75-3.97 9.75-9 0-5.03-4.428-9-9.75-9s-9.75 3.97-9.75 9c0 2.409 1.025 4.587 2.674 6.192.232.226.277.428.254.543a3.73 3.73 0 01-.814 1.686.75.75 0 00.44 1.223zM8.25 10.875a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25zM10.875 12a1.125 1.125 0 112.25 0 1.125 1.125 0 01-2.25 0zm4.875-1.125a1.125 1.125 0 100 2.25 1.125 1.125 0 000-2.25z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </div>
  );
};

export default TestimonialsCard;
