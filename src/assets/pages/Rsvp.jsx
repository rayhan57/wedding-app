import React, { useEffect, useState } from "react";
import flower from "../img/flower.png";
import RsvpForm from "../components/Rsvp/RsvpForm";
import RsvpFeedback from "../components/Rsvp/RsvpFeedback";

const Rsvp = () => {
  const [form, setForm] = useState({
    name: "",
    answer: "",
  });
  const [isValid, setIsValid] = useState("invisible");
  const [submitValue, setSubmitValue] = useState("Submit");
  const [showFeedback, setShowFeedback] = useState(false);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbzIwbUoG94FMzaLo8f1_t8UTe1RFb5D44MdJr4WYzwm5EbAlwT0gZtP1-AkM5V0NrhV/exec";

  const handleInputChange = (e) => {
    const { id, value, checked } = e.target;

    if (id === "name") {
      setForm({ ...form, [id]: value });
    } else {
      setForm({ ...form, answer: checked ? id : "" });
      setIsValid("invisible");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.answer) {
      setIsValid("visible");
      return;
    }

    setSubmitValue("Submitting...");
    const response = await fetch(
      `${scriptUrl}?Name=${form.name}&Answer=${form.answer}`,
      {
        method: "POST",
      }
    );
    if (response.status === 200) {
      setSubmitValue("Submit");
      setShowFeedback(true);
    }
  };

  useEffect(() => {
    document.title = "Beckham & Diana | RSVP";
  }, []);

  return (
    <>
      <div className="min-h-screen flex justify-center items-center bg-slate-100 px-1">
        <div className="flex border shadow-lg rounded-md overflow-hidden bg-white">
          <div className="basis-1/3 border-r-4 border-pink-400">
            <img
              src={flower}
              className="object-cover h-full w-80 object-left"
            />
          </div>

          <div className="flex-1 px-5 py-10">
            <h1 className="font-custom text-4xl lg:text-5xl text-center">
              R S V P
            </h1>
            <h3 className="text-xs lg:text-base text-center font-medium mt-2">
              Please kindly respond no later than <br /> Sunday, 12 December
              2023
            </h3>

            <RsvpForm
              form={form}
              handleSubmit={handleSubmit}
              handleInputChange={handleInputChange}
              isValid={isValid}
              submitValue={submitValue}
            />
          </div>
        </div>
        <RsvpFeedback showFeedback={showFeedback} />
      </div>
    </>
  );
};

export default Rsvp;
