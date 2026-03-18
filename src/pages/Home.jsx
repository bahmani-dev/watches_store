import React from "react";
import { HeroSection } from "../sections/HeroSection";
import Feacherd from "../sections/Feacherd";
import { Link } from "react-router-dom";
export const Home = () => {

  return (
    <>
      <div>
        <HeroSection/>
        <Feacherd/>
      </div>
    </>
  );
};
