import React from "react";
import { HeroSection } from "../sections/HeroSection";

import { OurStory } from "../sections/OurStory";


import Feacherd from '../sections/Feacherd'
import { Link } from "react-router-dom";

export const Home = () => {

  return (
    <>

      <div className="text-black">
        <HeroSection />
         <Feacherd/>
        <OurStory/>
        <section>products</section>
        <section>testimonials</section>
        <section>new arrivals</section>
        <section>email</section>
        <section>footer</section>

     
     
       

      </div>
    </>
  );
};
