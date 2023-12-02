import React from "react";
import HeroImage from "../components/HeroImage";
import AboutCouple from "../components/AboutCouple/AboutCouple";
import WeddingDate from "../components/WeddingDate/WeddingDate";
import PhotoGallery from "../components/PhotoGallery/PhotoGallery";

const HomePage = () => {
  return (
    <>
      <HeroImage />
      <AboutCouple />
      <WeddingDate />
      <PhotoGallery />
    </>
  );
};

export default HomePage;
