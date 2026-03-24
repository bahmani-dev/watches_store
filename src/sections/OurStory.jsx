import React from "react";

export const OurStory = () => {
  return (
    <div className="flex justify-center">
      <div className="p-[20px] h-[737px] w-[400px] flex flex-col justify-between">
        <div className="flex justify-center items-center flex-col">
          <div className="border-t border-1 border-[#FFB568] border-solid w-[75px]"></div>
          <h2 className="roboto font-medium text-[16px] leading-[auto] tracking-[5%] text-[#2E2E2E] mt-[10px]">
            OUR STORY
          </h2>
        </div>
        <div className="flex justify-center flex-col gap-[15px]">
          <h2 className="w-[242px] roboto font-medium text-[24px] leading-[auto] tracking-[0%] text-[#2E2E2E]">
            Inspirational Watch of this year
          </h2>
          <p className="w-[312px] roboto font-normal text-[15px] leading-[auto] tracking-[0%] text-[#595959]">
            The latest and modern watches of this year, is available in various
            presentations in this store, discover them now.
          </p>
          <button className="w-[107px] h-[50px] px-[24px] py-[16px] bg-[#2B2B2B] flex items-center mt-[25px] filter cursor-pointer drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
            <span className="roboto font-medium text-[15px] leading-[auto] tracking-[0%] text-white">
              Discover
            </span>
          </button>
        </div>

        <div className="h-[298px] w-[298px] relative">
          <img
            className="absolute right-0 z-10"
            src="public/story1.png"
            alt=""
          />
          <div className="h-[250px] w-[250px] absolute bottom-0 bg-[#FFB568]"></div>
        </div>
      </div>
    </div>
  );
};
