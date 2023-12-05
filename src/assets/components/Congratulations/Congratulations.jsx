import React, { useEffect, useRef, useState } from "react";
import GreetingBox from "./GreetingBox";
import GreetingForm from "./GreetingForm";

const Congratulations = () => {
  const [greetings, setGreetings] = useState([]);
  const [formGreeting, setFormGreeting] = useState({ name: "", message: "" });
  const formRef = useRef();
  const [isSending, setIsSending] = useState(false);

  const scriptUrl =
    "https://script.google.com/macros/s/AKfycbzM6jIWg9r-T99CntOl12dDIx5w9xXZ3r5RGB5H1iKEhRR1CAhmKXmR5Ihp5993mtAu/exec";

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormGreeting({ ...formGreeting, [id]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    const response = await fetch(
      `${scriptUrl}?Name=${formGreeting.name}&Message=${formGreeting.message}`,
      {
        method: "POST",
      }
    );
    if (response.status === 200) {
      setIsSending(false);
      formRef.current.reset();
    }
  };

  const getGreetings = async () => {
    const response = await fetch(scriptUrl);
    const result = await response.json();
    setGreetings(result.data);
  };

  useEffect(() => {
    getGreetings();
  }, [greetings]);

  return (
    <div className="bg-pink-400 mt-5 lg:mt-10 py-3 lg:py-5 px-5 lg:px-20">
      <h1
        className="font-custom text-white text-xl lg:text-2xl font-semibold text-center"
        data-aos="fade-down"
      >
        Say Congratulations
      </h1>
      <h2
        className="text-white lg:text-xl mt-3 lg:mt-5 mb-3"
        data-aos="fade-right"
      >
        {greetings ? greetings.length : "0"} Greetings
      </h2>
      <GreetingBox greetings={greetings} />
      <GreetingForm
        handleSubmit={handleSubmit}
        handleInputChange={handleInputChange}
        formRef={formRef}
        isSending={isSending}
      />
    </div>
  );
};

export default Congratulations;
