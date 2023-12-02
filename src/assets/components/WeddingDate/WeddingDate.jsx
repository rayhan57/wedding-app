import React from "react";
import partition from "../../img/partition.png";
import Date from "./Date";
import married from "../../img/married.png";

const WeddingDate = () => {
  return (
    <div className="mx-auto mt-10 lg:mt-16 relative">
      <img
        src={married}
        className="-z-10 w-48 md:w-72 lg:w-[24rem] absolute bottom-0 lg:top-0 -right-12 lg:-right-20 grayscale"
      />

      <h2 className="font-custom font-bold text-xl lg:text-2xl text-center">
        Wedding Date
      </h2>
      <p className="max-w-md text-sm lg:text-base text-center mx-auto mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        repellat mollitia fuga aspernatur minus consectetur.
      </p>
      <img src={partition} className="mx-auto mt-3 lg:mt-5 w-60 lg:w-72" />
      <div className="mt-5 lg:mt-7 flex justify-center gap-2 lg:gap-4">
        <Date />
      </div>
    </div>
  );
};

export default WeddingDate;
