import React from "react";

const HeroImage = () => {
  const handleScroll = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <div className="min-h-screen bg-hero-image bg-no-repeat bg-cover bg-center flex justify-center items-center flex-col text-center">
      <div
        className="text-5xl md:text-4xl lg:text-6xl text-white space-y-3 md:space-y-1.5 lg:space-y-3 font-custom"
        data-aos="fade-down"
      >
        <h1>BECKHAM</h1>
        <h1>&</h1>
        <h1>DIANA</h1>
      </div>

      <p
        className="text-sm lg:text-base text-slate-300 tracking-[.4rem] md:tracking-[.7rem] lg:tracking-[1rem] mt-10 md:mt-5 lg:mt-10"
        data-aos="fade-down"
      >
        WE ARE GETTING MARRIED
      </p>

      <a
        href="/rsvp"
        className="border hover:bg-pink-400 text-xl text-white font-semibold px-5 lg:px-10 lg:py-0.5 rounded-full transition mt-14 md:mt-5 lg:mt-14 font-custom"
        data-aos="fade-up"
      >
        RSVP
      </a>

      <i
        className="fa-solid fa-angles-down text-white text-2xl cursor-pointer animate-pulse mt-10 md:mt-5 lg:mt-10"
        onClick={handleScroll}
        data-aos="fade-up"
      ></i>
    </div>
  );
};

export default HeroImage;
