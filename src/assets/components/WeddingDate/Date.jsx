import React from "react";

const HeartIcon = ({ date }) => {
  return (
    <div className="relative text-center">
      <i className="fa-solid fa-heart text-pink-400 text-6xl lg:text-7xl relative"></i>
      <span className="text-xl lg:text-2xl text-white font-semibold font-custom absolute inset-2.5 lg:inset-3">
        {date}
      </span>
    </div>
  );
};

const Date = () => {
  const dates = ["05", "11", "2023"];

  return (
    <>
      {dates.map((date, index) => (
        <HeartIcon key={index} date={date} />
      ))}
    </>
  );
};

export default Date;
