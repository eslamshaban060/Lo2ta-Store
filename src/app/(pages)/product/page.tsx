import React from "react";
import ProductNave from "@/components/product/product";
import Header from "@/components/header/header";
import ProductDetails from "@/components/product/productDetails";
import Footer from "@/components/footer/footer";
import ProductSlider from "@/components/product/ProductSlider";
import LongDescription from "@/components/product/longDescription";

const ProductPage = () => {
  return (
    <div className=" overflow-hidden overflow-y-scroll">
      <header>
        <Header />
      </header>

      <section>
        <ProductNave />
      </section>

      <section className=" bg-[var(--w2)]">
        <ProductDetails />
      </section>

      <section className=" bg-[var(--w2)] pb-[35px]">
        <LongDescription />
      </section>

      <section className=" bg-[var(--w2)] pb-[35px]">
        <ProductSlider />
      </section>

      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default ProductPage;
