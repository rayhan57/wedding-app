import React from "react";

const Photo = () => {
  const photoData = [
    { image: "https://source.unsplash.com/300x300?marriage" },
    { image: "https://source.unsplash.com/300x300?marriage" },
    { image: "https://source.unsplash.com/300x300?marriage" },
    { image: "https://source.unsplash.com/300x300?marriage" },
    { image: "https://source.unsplash.com/300x300?marriage" },
    { image: "https://source.unsplash.com/300x300?marriage" },
  ];

  return (
    <>
      {photoData.map((item, index) => (
        <img
          key={index}
          src={item.image}
          className="border shadow-md rounded-md"
          data-aos="zoom-in"
        />
      ))}
    </>
  );
};

export default Photo;
