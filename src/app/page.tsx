import React from "react";
import Header from "@/components/header/header";
import Main from "@/components/main/main";
import FeaturedServices from "@/components/featuredServices/featuredServices";
import LastProducts from "@/components/lastProducts/lastProducts";
import Discover from "@/components/discover/discover";
import Testimonials from "@/components/testimonials/testimonials";
import Blog from "@/components/blog/blog";
import Footer from "@/components/footer/footer";

const HomePage = () => {
  return (
    <div className="overflow-x-hidden">
      {/* header component  */}
      <section>
        <Header />
      </section>

      {/* hero or main component */}
      <section>
        <Main />
      </section>

      {/* Featured Servicescomponent */}
      <section>
        <FeaturedServices />
      </section>

      {/* Last Products component */}
      <section>
        <LastProducts />
      </section>

      {/* Discover component */}
      <section>
        <Discover />
      </section>

      {/* Testimonials component */}
      <section>
        <Testimonials />
      </section>

      {/* Blog component */}
      <section>
        <Blog />
      </section>

      {/* Blog component */}
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
