import React from "react";
import Header from "@/components/header/header";
import Main from "@/components/main/main";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      {/* header component  */}
      <Header />

      {/* hero or main component */}
      <Main />
    </div>
  );
};

export default page;
