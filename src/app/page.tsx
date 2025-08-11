import React from "react";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import FeaturedServices from "@/components/featuredServices/featuredServices";
import LastProducts from "@/components/lastProducts/lastProducts";
import Discover from "@/components/discover/discover";

const page = () => {
  return (
    <div className="overflow-x-hidden">
      {/* header component  */}
      <Header />

      {/* hero or main component */}
      <Main />

      {/* Featured Servicescomponent */}
      <FeaturedServices />

      {/* Last Products component */}
      <LastProducts />

      {/* Discover component */}
      <Discover />
    </div>
  );
};

export default page;
