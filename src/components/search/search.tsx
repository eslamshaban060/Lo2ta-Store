import React from "react";
import { Products } from "@/data/products";
import SearchCard from "./searchCard";

interface searchbalueType {
  SearchValue: string;
}
const Search: React.FC<searchbalueType> = ({ SearchValue }) => {
  const filteredProducts = Products.filter((item) =>
    item.name.includes(SearchValue)
  );

  return (
    <div className=" w-[100%]   bg-white flex flex-col gap-4">
      <div className="p-5 px-4 bg-white">
        {filteredProducts.length === 0 ? (
          <div className=" text-2xl text-center">
            لا يوجد منتجات بهذا الاسم{" "}
          </div>
        ) : (
          filteredProducts.map((item, id) => {
            return (
              <div key={id}>
                <SearchCard Item={item} />
              </div>
            );
          })
        )}
      </div>

      <div className=" bg-gradient-to-t   border-t-[1px]   border-[#0000000d] from-[var(--lg)] p-5 text-center text-xl  ">
        عدد المنتجات ({filteredProducts.length})
      </div>
    </div>
  );
};

export default Search;
