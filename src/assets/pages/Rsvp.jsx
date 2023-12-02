import React, { useEffect, useState } from "react";
import flower from "../img/flower.png";

const Rsvp = () => {
  const [form, setForm] = useState({
    name: "",
    answer: "",
  });
  const [isValid, setIsValid] = useState("invisible");

  const handleInputChange = (e) => {
    const { id, value, checked } = e.target;

    if (id === "name") {
      setForm({ ...form, [id]: value });
    } else {
      setForm({ ...form, answer: checked ? id : "" });
      setIsValid("invisible");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.answer) {
      setIsValid("visible");
      return;
    }
    console.log(form);
  };

  useEffect(() => {
    document.title = "The Wedding | RSVP";
  }, []);

  return (
    <div className="min-h-screen flex justify-center items-center bg-slate-100 px-1">
      <div className="flex border shadow-lg bg-white">
        <div className="basis-1/3 border-r-4 border-pink-400">
          <img src={flower} className="object-cover h-full w-80 object-left" />
        </div>

        <div className="flex-1 px-5 py-10">
          <h1 className="font-custom text-4xl lg:text-5xl text-center">
            R S V P
          </h1>
          <h3 className="text-xs lg:text-base text-center font-medium mt-2">
            Please kindly respond no later than <br /> Sunday, 12 December 2023
          </h3>

          <form onSubmit={handleSubmit} className="mt-3 lg:mt-5">
            <div className="flex items-center gap-1 text-sm">
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
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
              <p className={`text-red-500 -mt-1 ${isValid}`}>
                Please choose one.
              </p>
              <button className="w-1/2 mx-auto bg-pink-400 hover:bg-pink-500 text-white font-medium px-3 py-2 rounded-md">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Rsvp;
