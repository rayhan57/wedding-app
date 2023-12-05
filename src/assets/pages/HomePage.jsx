import React from "react";
import HeroImage from "../components/HeroImage";
import AboutCouple from "../components/AboutCouple/AboutCouple";
import DateAndPlace from "../components/DateAndPlace/DateAndPlace";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";
import Congratulations from "../components/Congratulations/Congratulations";

const HomePage = () => {
  return (
    <>
      <HeroImage />
      <AboutCouple />
      <DateAndPlace />
      <PhotoGallery />
      <Congratulations />
    </>
  );
};

export default HomePage;
