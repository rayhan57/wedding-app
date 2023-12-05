import React from "react";
import partition from "../../img/partition.png";
import Photo from "./Photo";

const PhotoGallery = () => {
  return (
    <div className="container mx-auto mt-10 lg:mt-16">
      <h2
        className="font-custom font-bold text-xl lg:text-2xl text-center"
        data-aos="fade-up"
      >
        Happy Couple Photo
      </h2>
      <p
        className="max-w-md text-sm lg:text-base text-center mx-auto mt-3"
        data-aos="fade-up"
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente,
        repellat mollitia fuga aspernatur minus consectetur.
      </p>
      <img
        src={partition}
        className="mx-auto mt-3 lg:mt-5 w-60 lg:w-72"
        data-aos="fade-down"
      />
      <div className="max-w-lg lg:max-w-2xl mx-auto mt-5 lg:mt-7 grid grid-cols-2 md:grid-cols-3 place-items-center gap-2 lg:gap-4">
        <Photo />
      </div>
    </div>
  );
};

export default PhotoGallery;
