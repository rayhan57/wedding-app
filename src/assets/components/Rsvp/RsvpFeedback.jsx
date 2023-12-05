import React from "react";

const RsvpFeedback = ({ showFeedback }) => {
  return (
    <div
      className={`${
        showFeedback ? "block" : "hidden"
      } bg-black bg-opacity-60 flex justify-center items-center absolute w-full h-full`}
    >
      <div className="flex justify-center items-center flex-col gap-3 bg-white border shadow-md rounded-md p-4">
        <i className="fa-regular fa-circle-check text-pink-400 text-5xl "></i>

        <h1 className="font-medium text-xl lg:text-2xl">
          Thank you for participating
        </h1>

        <a
          href="/"
          className="w-1/2 bg-pink-400 hover:bg-pink-500 py-1 lg:py-2 text-white font-medium rounded-md text-center"
        >
          OK
        </a>
      </div>
    </div>
  );
};

export default RsvpFeedback;
