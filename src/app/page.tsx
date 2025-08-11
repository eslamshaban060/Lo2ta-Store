import React from "react";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import FeaturedServices from "@/components/featuredServices/featuredServices";
import LastProducts from "@/components/lastProducts/lastProducts";
import Discover from "@/components/discover/discover";
import Testimonials from "@/components/testimonials/testimonials";
import Blog from "@/components/blog/blog";

const HomePage = () => {
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

      {/* Testimonials component */}
      <Testimonials />

      {/* Blog component */}
      <Blog />
    </div>
  );
};

export default HomePage;
