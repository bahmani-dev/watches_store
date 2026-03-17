import React from "react";
import { HeroSection } from "../sections/HeroSection";
import { OurStory } from "../sections/OurStory";

export const Home = () => {
  return (
    <>
      <div className="text-black">
        <HeroSection />
        <section>featured</section>
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
