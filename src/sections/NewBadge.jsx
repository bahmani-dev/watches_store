import React from "react";

export const NewBadge = ({ text = "New", style }) => {
  return (
    <>
      <div className="container w-[63px] h-[32px] ">
        <span
          className={` flex items-center justify-center w-[65px] h-[34px] py-4 px-8 font-medium text-[15px] text-white bg-[#FFB568] ${style}`}
        >
          {text}
        </span>
      </div>
    </>
  );
};
