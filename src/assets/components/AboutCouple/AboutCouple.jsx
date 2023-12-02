import React from "react";
import marriage from "../../img/marriage.png";
import partition from "../../img/partition.png";
import BridalDetails from "./BridalDetails";

const AboutCouple = () => {
  return (
    <div className="container mx-auto mt-5">
      <div className="relative">
        <img src={marriage} className="mx-auto w-14 lg:w-20 opacity-50" />
        <h2 className="font-custom font-bold text-xl lg:text-2xl text-center absolute inset-7 lg:inset-12">
          About Couple
        </h2>
      </div>

      <p className="max-w-md text-sm lg:text-base text-center mx-auto mt-3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem eos
        quibusdam omnis reprehenderit,
      </p>

      <img src={partition} className="mx-auto mt-3 lg:mt-5 w-60 lg:w-72" />
      <BridalDetails />
    </div>
  );
};

export default AboutCouple;
