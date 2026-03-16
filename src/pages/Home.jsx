import React from "react";
import { HeroSection } from "../sections/HeroSection";

export const Home = () => {
  return (
    <>
      <div className="text-black">
        <HeroSection />
        <section>featured</section>
        <section>our story</section>
        <section>products</section>
        <section>testimonials</section>
        <section>new arrivals</section>
        <section>email</section>
        <section>footer</section>
      </div>
    </>
  );
};
