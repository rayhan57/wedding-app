import React from "react";
import groom from "../../img/groom.jpg";
import bridal from "../../img/bridal.jpg";

const Groom = ({ name, description, image }) => {
  return (
    <div
      className="border rounded-md max-w-xs lg:max-w-sm shadow-md flex justify-center items-center"
      data-aos="fade-down-right"
    >
      <div className="w-[60%] text-end px-2">
        <h2 className="text-xl lg:text-2xl font-bold -mb-2">{name}</h2>
        <span className="text-xs lg:text-sm">Groom</span>
        <p className="mt-1.5 lg:mt-3 text-sm lg:text-base text-justify">
          {description}
        </p>
      </div>
      <div className="w-1/2 h-full">
        <img
          src={image}
          alt="groom"
          className="w-full h-48 object-cover object-top"
        />
      </div>
    </div>
  );
};

const Bridal = ({ name, description, image }) => {
  return (
    <div
      className="border rounded-md max-w-xs lg:max-w-sm shadow-md flex justify-center items-center"
      data-aos="fade-down-left"
    >
      <div className="w-1/2 h-full">
        <img
          src={image}
          alt="groom"
          className="w-full h-48 object-cover object-top"
        />
      </div>
      <div className="w-[60%] text-start px-2">
        <h2 className="text-xl lg:text-2xl font-bold -mb-2">{name}</h2>
        <span className="text-xs lg:text-sm">Bridal</span>
        <p className="mt-1.5 lg:mt-3 text-sm lg:text-base text-justify">
          {description}
        </p>
      </div>
    </div>
  );
};

const BridalDetails = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-2 lg:gap-4 mt-7 lg:mt-10">
      <Groom
        name="Beckham"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fugit,
        excepturi commodi porro facere"
        image={groom}
      />
      <Bridal
        name="Diana"
        description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore fugit,
        excepturi commodi porro facere"
        image={bridal}
      />
    </div>
  );
};

export default BridalDetails;
