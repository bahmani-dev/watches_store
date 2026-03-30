import React from "react";

export const BuyButton = ({ text = " ADD TO CARD", style }) => {
  return (
    <>
      <span
        className={`py-5 px-8 mt-4 font-medium text-[14px] text-white bg-[#2B2B2B] opacity-0 cursor-pointer${style}`}
      >
        {text}
      </span>
    </>
  );
};
