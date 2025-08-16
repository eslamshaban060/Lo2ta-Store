import React from "react";
import Link from "next/link";
import { NavLinks, InfoPages } from "@/data/links";
import { TiPhoneOutline } from "react-icons/ti";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { LuFacebook } from "react-icons/lu";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className=" w-[100vw] bg-[var(--h)] ">
      <div className="w-[100vw] p-1 border-b-[1px] border-[#ffffff1b] ">
        <div className=" w-[100%] text-white continer mx-auto py-5">
          <div className="py-5 grid grid-cols-1 gap-5 lg:gap-[60px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <h3 className="py-4 text-xl font-bold">عن لقطة ستور</h3>
              <p className=" text-[#ffffffb5]">
                لقطة ستور هي منصة تجارة إلكترونية مبتكرة وغير ربحية تجمع الشركات
                الصغيرة والمتوسطة في المنيا تحت سقف رقمي واحد. كل منتج - سواء
                كان طعامًا لذيذًا أو إكسسوارات أنيقة أو ديكورات منزلية فريدة -
                سعره 100 جنيه مصري فقط.
              </p>
            </div>
            <div>
              <h3 className="py-4 text-xl font-bold">روابط سريعة</h3>
              <p className=" flex flex-col gap-1 text-[#ffffffb5]">
                {NavLinks.map((item, id) => {
                  return (
                    <Link
                      className=" w-fit hover:text-[var(--g)] "
                      href={item.link}
                      key={id}
                    >
                      {id === 1 || id === 2
                        ? "صفحة" + " " + item.name
                        : item.name}
                    </Link>
                  );
                })}
              </p>
            </div>
            <div>
              <h3 className="py-4 text-xl font-bold">المساعدة والمعلومات </h3>
              <p className=" flex flex-col gap-1 text-[#ffffffb5]">
                {InfoPages.map((item, id) => {
                  return (
                    <Link
                      className=" w-fit hover:text-[var(--g)] "
                      href={item.link}
                      key={id}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </p>
            </div>
            <div>
              <h3 className="py-4 text-xl font-bold">اتصل بنا</h3>
              <p className=" flex  gap-2  text-[#ffffffb5]">
                <span>
                  <MdOutlineMail />
                </span>
                <span>info@lo2tastore.com</span>
              </p>
              <p className=" flex  gap-2  text-[#ffffffb5]">
                <span>
                  <TiPhoneOutline />
                </span>
                <span>01006407387</span>
              </p>
              <p className=" flex  gap-2  text-[#ffffffb5]">
                <span>
                  <CiLocationOn />
                </span>
                <span>المنيا، مصر</span>
              </p>
              <h3 className="py-4 text-xl font-bold"> تابعنا</h3>
              <p className=" flex  gap-2  text-2xl text-[#ffffffb5]">
                <Link
                  className=" text-white  hover:bg-[var(--g)] bg-[#ffffff18] rounded-full p-3"
                  href="facebook.com"
                >
                  <LuFacebook />
                </Link>
                <Link
                  className=" hover:bg-[var(--g)] text-white bg-[#ffffff18]  rounded-full p-3"
                  href=""
                >
                  <FaInstagram />
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="p-5 w-[100%]">
        <div className=" continer text-[#ffffffb5] flex justify-between mx-auto">
          <div>
            <p>© 2025 لقطة ستور. جميع الحقوق محفوظة.</p>
          </div>
          <div className=" flex gap-3">
            <Link className=" hover:text-[var(--g)]" href="/privacy-policy">
              سياسة الخصوصية
            </Link>
            <span>|</span>
            <Link className=" hover:text-[var(--g)]" href="/terms-of-service">
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
