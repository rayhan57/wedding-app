import React, { useState } from "react";

const RsvpForm = ({
  handleSubmit,
  handleInputChange,
  form,
  isValid,
  submitValue,
}) => {
  return (
    <form onSubmit={handleSubmit} className="mt-3 lg:mt-5">
      <div className="flex items-center gap-1 text-sm">
        <label htmlFor="name">NAME</label>
        <input
          type="text"
          id="name"
          name="Name"
          className="w-full h-8 border-b border-x-0 border-t-0 focus:ring-0 focus:border-b-2 focus:border-black"
          onChange={handleInputChange}
          required
        />
      </div>

      <div className="flex flex-col gap-2 mt-4 text-sm">
        <label>
          <input
            type="checkbox"
            id="Accept"
            className="rounded-full checked:bg-pink-400 focus:ring-0"
            checked={form.answer === "Accept"}
            onChange={handleInputChange}
          />{" "}
          ACCEPT with pleasure
        </label>
        <label>
          <input
            type="checkbox"
            id="Decline"
            className="rounded-full checked:bg-pink-400 focus:ring-0"
            checked={form.answer === "Decline"}
            onChange={handleInputChange}
          />{" "}
          DECLINE with regret
        </label>
        <p className={`text-red-500 -mt-1 ${isValid}`}>Please choose one.</p>
        <button
          className="w-1/2 mx-auto bg-pink-400 hover:bg-pink-500 disabled:bg-pink-300 disabled:cursor-not-allowed text-white font-medium px-3 py-2 rounded-md transition"
          disabled={submitValue === "Submitting..."}
        >
          {submitValue}
        </button>
      </div>
    </form>
  );
};

export default RsvpForm;
