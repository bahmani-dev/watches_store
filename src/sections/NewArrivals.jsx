import React from "react";
import { NewBadge } from "./NewBadge";
import { BuyButton } from "./BuyButton";

export const NewArrivals = () => {
  return (
    <>
      <section className="container w-full flex flex-col px-4 my-10 bg-[#FCFCFC]">
        <div className=" text-center mb-[40px] ">
          <div className="line w-[64px] h-[1.2px] mx-auto mb-3  bg-[#FFB568]"></div>
          <h2 className="font-medium text-xl font-sans tracking-[0.04em] text-[#2E2E2E]">
            NEW ARRIVALS
          </h2>
        </div>
        <div className="products grid grid-cols-1 gap-6 px-4 sm:grid-cols-2 sm:px-9 md:grid-cols-3 md:px-14 lg:grid-cols-4 lg:px-20 justify-items-center ">
          <div className="first-product group relative w-full max-w-[312px] h-[446px] flex flex-col justify-center items-center border border-solid border-[#F0F0F0] shadow-lg transition-transform duration-300 hover:bg-[#FFB568] hover:scale-105  ">
            <NewBadge style=" absolute right-7 top-5 group-hover:bg-black " />
            <img
              src="/src/pages/images/First-Watch.svg"
              alt="First-Watch"
              className=" mx-auto w-full max-w-[130px] "
            />
            <h2 className="font-bold text-base tracking-[0.04em] text-[#2E2E2E] py-4 font-sans ">
              LONGINES ROSE
            </h2>
            <span className=" font-bold text-base tracking-[0.04em] text-[#FFB568] group-hover:text-black ">
              $980
            </span>
            <BuyButton style=" group-hover:opacity-100 transition " />
          </div>
          <div className="Second-product group relative w-full max-w-[312px] h-[446px] flex flex-col justify-center items-center border border-solid border-[#F0F0F0] shadow-lg transition-transform duration-300 hover:scale-105  hover:bg-[#FFB568]  ">
            <NewBadge style=" absolute right-7 top-5 group-hover:bg-black " />
            <img
              src="/src/pages/images/Second-Watch.svg"
              alt="Second-Watch"
              className=" w-full max-w-[130px] mx-auto "
            />
            <h2 className="font-bold  text-base tracking-[0.04em] text-[#2E2E2E] py-4 font-sans ">
              JAZZMASTER
            </h2>
            <span className=" font-bold  text-base tracking-[0.04em] text-[#FFB568] group-hover:text-black">
              $1150
            </span>
            <BuyButton style=" group-hover:opacity-100 transition " />
          </div>
          <div className="Third-product group relative w-full max-w-[312px] h-[446px] flex flex-col justify-center items-center border border-solid border-[#F0F0F0] shadow-lg transition-transform duration-300 hover:scale-105  hover:bg-[#FFB568]   ">
            <NewBadge style=" absolute right-7 top-5 group-hover:bg-black " />
            <img
              src="/src/pages/images/Third-Watch.svg"
              alt="Third-Watch"
              className=" w-full max-w-[130px] mx-auto "
            />
            <h2 className="font-bold  text-base tracking-[0.04em] text-[#2E2E2E] py-4 font-sans ">
              DREYFUSS GOLD
            </h2>
            <span className=" font-bold  text-base tracking-[0.04em] text-[#FFB568] group-hover:text-black">
              $750
            </span>
            <BuyButton style=" group-hover:opacity-100 transition " />
          </div>
          <div className="Fourth-product group relative w-full max-w-[312px] h-[446px] flex flex-col justify-center items-center border border-solid border-[#F0F0F0] shadow-lg transition-transform duration-300 hover:scale-105  hover:bg-[#FFB568] ">
            <NewBadge style=" absolute right-7 top-5 group-hover:bg-black " />
            <img
              src="/src/pages/images/Fourth-Watch.svg"
              alt="Fourth-Watch"
              className="  w-full max-w-[130px] mx-auto "
            />
            <h2 className="font-bold  text-base tracking-[0.04em] text-[#2E2E2E] py-4 font-sans ">
              PORTUGUESE ROSE
            </h2>
            <span className=" font-bold  text-base tracking-[0.04em] text-[#FFB568] group-hover:text-black">
              $1590
            </span>
            <BuyButton style=" group-hover:opacity-100 transition " />
          </div>
        </div>
      </section>
    </>
  );
};
