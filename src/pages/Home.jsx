import React from "react";
import { HeroSection } from "../sections/HeroSection";
import Feacherd from "../sections/Feacherd";
import { Link } from "react-router-dom";
import { NewArrivals } from "../sections/NewArrivals";
import Email from "../sections/Email";
export const Home = () => {
  return (
    <>
      <div>
        <HeroSection />
        <Feacherd />
        <NewArrivals />
        <Email />
      </div>
    </>
  );
};
