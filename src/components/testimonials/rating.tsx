import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = () => {
  return (
    <div className=" flex gap-1 text-[var(--o)]">
      {[...Array(5)].map((_, i) => {
        return (
          <div key={i}>
            <FaStar />
          </div>
        );
      })}
    </div>
  );
};

export default Rating;
