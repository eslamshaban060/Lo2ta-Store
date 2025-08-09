import React from "react";
import MainText from "./mainText";
import MainSlider from "./mainSlider";

const Main = () => {
  return (
    <div className=" w-[100vw] pb-5 ">
      <div className="continer pt-[50px] mx-auto justify-between items-center  flex  flex-col-reverse lg:flex-row ">
        {/* main text */}
        <div className="lg:w-[48%] w-[100%] pt-[50px] ">
          <MainText />
        </div>

        {/* main slider */}
        <div className="lg:w-[50%] w-[100%]   lg:h-[77vh]  h-[95%]  ">
          <MainSlider />
        </div>
      </div>
    </div>
  );
};

export default Main;
