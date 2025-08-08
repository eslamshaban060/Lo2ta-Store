import React from "react";
import Header from "@/components/header/header";
import Main from "@/components/main/main";

const page = () => {
  return (
    <div>
      {/* header component  */}
      <Header />

      {/* hero or main component */}
      <Main />
    </div>
  );
};

export default page;
