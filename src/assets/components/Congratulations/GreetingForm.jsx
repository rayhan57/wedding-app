import React from "react";

const GreetingForm = ({
  handleSubmit,
  handleInputChange,
  formRef,
  isSending,
}) => {
  return (
    <div
      className="max-w-lg mx-auto text-sm lg:text-base mt-10"
      data-aos="zoom-out-down"
    >
      <h2 className="font-medium text-white text-lg lg:text-xl mb-1">
        Greeting
      </h2>
      <form onSubmit={handleSubmit} ref={formRef}>
        <label htmlFor="name" className="text-white">
          Name
        </label>
        <input
          id="name"
          type="text"
          className="block h-9 border-0 rounded-md focus:ring-0 mb-2"
          onChange={handleInputChange}
          required
        />

        <label htmlFor="message" className="text-white">
          Message
        </label>
        <textarea
          id="message"
          type="text"
          className="block w-full border-0 rounded-md focus:ring-0"
          onChange={handleInputChange}
          required
        />

        <button
          className="text-white font-medium hover:bg-white hover:text-pink-400 disabled:bg-gray-200 disabled:text-pink-400 disabled:cursor-not-allowed px-3 py-1.5 rounded-md border mt-3 transition"
          disabled={isSending}
        >
          {isSending ? "Sending" : "Send"}
        </button>
      </form>
    </div>
  );
};

export default GreetingForm;
