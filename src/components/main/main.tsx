import React from "react";
import MainText from "./mainText";
const Main = () => {
  return (
    <div className=" w-[100vw]  ">
      <div className="continer pt-[50px] mx-auto justify-between items-center  flex  ">
        {/* main text */}
        <div className="w-[48%] pt-[50px] ">
          <MainText />
        </div>

        {/* main slider */}
        <div className="w-[48%]">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id illo quo
          nulla est eius quos non, ratione quam ullam repudiandae doloribus?
          Deserunt corrupti omnis saepe reprehenderit dolorem nulla rerum quod!
        </div>
      </div>
    </div>
  );
};

export default Main;
