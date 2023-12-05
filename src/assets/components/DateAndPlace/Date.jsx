import React from "react";

const Dates = ({ date }) => {
  return (
    <div className="relative text-center">
      <i className="fa-solid fa-heart text-pink-400 text-6xl lg:text-7xl"></i>
      <span className="text-xl lg:text-2xl text-white font-semibold font-custom absolute inset-2.5 lg:inset-3">
        {date}
      </span>
    </div>
  );
};

const Time = ({ time }) => {
  return (
    <div className="relative text-center -mx-1">
      <i className="fa-solid fa-heart text-pink-400 text-4xl lg:text-5xl"></i>
      <span className="text-sm lg:text-xl text-white font-semibold font-custom absolute inset-1.5 lg:inset-2">
        {time}
      </span>
    </div>
  );
};

const Date = ({ date, time }) => {
  return (
    <>
      {date.map((date, index) => (
        <Dates key={index} date={date} />
      ))}
      {time.map((time, index) => (
        <Time key={index} time={time} />
      ))}
    </>
  );
};

export default Date;
