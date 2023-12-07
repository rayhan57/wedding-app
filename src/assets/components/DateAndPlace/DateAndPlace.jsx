import React from "react";
import partition from "../../img/partition.png";
import Date from "./Date";
import married from "../../img/married.png";

const DateAndPlace = () => {
  const contractDate = ["05", "11", "2023"];
  const contractTime = ["09", "00"];
  const receptionDate = ["05", "11", "2023"];
  const receptionTime = ["11", "00"];

  return (
    <div className="container mx-auto mt-10 lg:mt-16 relative">
      <img
        src={married}
        className="-z-10 w-48 md:w-72 lg:w-[24rem] absolute bottom-10 -right-12  md:top-0 md:-right-36 lg:-right-32 grayscale"
      />

      <h2
        className="font-custom font-bold text-xl lg:text-2xl text-center"
        data-aos="zoom-in-up"
      >
        Date & Place
      </h2>
      <p
        className="max-w-md text-sm lg:text-base text-center mx-auto mt-3"
        data-aos="zoom-in-up"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        repellat mollitia fuga aspernatur minus{" "}
        <a
          href="https://maps.app.goo.gl/wMfL4sQ1gaYmYVQt8"
          target="_blank"
          className="text-pink-400"
        >
          consectetur.
        </a>
      </p>
      <img
        src={partition}
        className="mx-auto mt-3 lg:mt-5 w-60 lg:w-72"
        data-aos="zoom-out-down"
      />

      <div className="mt-5 lg:mt-5" data-aos="fade-right">
        <h4 className="font-medium text-center text-sm lg:text-lg">
          Marriage Contract
        </h4>
        <div className="flex justify-center items-end gap-2 lg:gap-3">
          <Date date={contractDate} time={contractTime} />
        </div>
      </div>

      <div className="mt-5 lg:mt-5" data-aos="fade-left">
        <h4 className="font-medium text-center text-sm lg:text-lg">
          Wedding Reception
        </h4>
        <div className="flex justify-center items-end gap-2 lg:gap-3">
          <Date date={receptionDate} time={receptionTime} />
        </div>
      </div>
    </div>
  );
};

export default DateAndPlace;
