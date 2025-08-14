import React from "react";
import BlogPost from "@/data/blog";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";
import { IoMdTime } from "react-icons/io";
import { FaRegUser } from "react-icons/fa";

interface BlogCardTypes {
  blogs: BlogPost;
}

const BlogCard: React.FC<BlogCardTypes> = ({ blogs }) => {
  return (
    <div className=" w-[93%] group mx-auto rounded-xl shadow-xl hover:shadow-2xl transform hover:translate-y-[-5px] ease-in-out duration-300 bg-[var(--w)]">
      <div className="  rounded-t-xl overflow-hidden ">
        <Image
          alt={blogs.title}
          width={100}
          height={100}
          src={blogs.imageUrl}
          className="w-100  scale-100  transform group-hover:scale-110 ease-in-out duration-300 object-cover"
        />
      </div>
      <div className=" flex text-right flex-col  pb-[30px] gap-4 justify-end p-5 sm:px-3 md:px-5">
        {/* blog data  */}
        <div className=" flex justify-end  text-[var(--g)] gap-4 items-center ">
          <div className=" flex justify-center  items-center  gap-2 ">
            <span className=" block">{blogs.date}</span>
            <IoMdTime className=" block mt-[-5px] text-xl" />
          </div>

          <div className=" flex justify-center  items-center  gap-2 ">
            <span className=" block">{blogs.authorName}</span>
            <FaRegUser className=" block mt-[-5px] text-xl" />
          </div>
        </div>

        {/* blog title */}
        <h3 className=" text-2xl group-hover:text-[var(--g)] font-bold text-[var(--h)]">
          {blogs.title}
        </h3>
        <div className=" text-[var(--g2)]">{blogs.description}</div>

        <button className=" mt-3 flex flex-row-reverse text-[var(--g)] bg-[var(--w)] hover:bg-[var(--g)] hover:text-[var(--w)] border-[1px] border-[var(--g)] gap-3 justify-center rounded-4xl items-center py-2 px-3 w-[100%]">
          <span>اقرأ المزيد </span>
          <span>
            <FaArrowLeftLong />
          </span>
        </button>
        {/* price  */}
        <div className=" bg-[var(--g)] flex justify-center items-center text-[var(--w)] py-2  group-hover:bg-[var(--o)] absolute  top-[15px] rounded-4xl left-[15px] px-4">
          {blogs.category}
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
