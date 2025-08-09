import React from "react";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import FeaturedServices from "@/components/featuredServices/featuredServices";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      {/* header component  */}
      <Header />

      {/* hero or main component */}
      <Main />
      {/* Featured Servicescomponent */}
      <FeaturedServices />
    </div>
  );
};

export default page;
