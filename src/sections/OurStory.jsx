import React from "react";

export const OurStory = () => {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="p-[20px] lg:px-[50px] 2xl:px-0 h-[737px] w-[400px] grid grid-cols-1 grid-rows-2 gap-[60px] md:grid-cols-2 md:grid-rows-1 md:w-[768px] lg:w-[1024px] md:h-[400px] 2xl:h-[600px] md:gap-[40px] 2xl:gap-[70px] 2xl:w-[1224px] md:gap-y-0 ">
        <div className="flex flex-col gap-[50px] md:col-start-2 md:gap-[25px] md:justify-center">
          <div className="flex justify-center items-center flex-col md:items-start">
            <div className="border-t border-1 border-[#FFB568] border-solid w-[75px]"></div>
            <h2 className="roboto font-medium text-[16px] md:text-[17px] 2xl:text-[20px] leading-[auto] tracking-[5%] text-[#2E2E2E] mt-[10px]">
              OUR STORY
            </h2>
          </div>
          <div className="flex justify-center flex-col gap-[15px]">
            <h2 className="w-[242px] 2xl:w-[362px] roboto font-medium text-[24px] md:text-[26px] lg:text-[28px] 2xl:text-[36px] leading-[auto] tracking-[0%] text-[#2E2E2E]">
              Inspirational Watch of this year
            </h2>
            <p className="w-[312px] roboto font-normal text-[15px] lg:text-[16px] leading-[auto] tracking-[0%] text-[#595959]">
              The latest and modern watches of this year, is available in
              various presentations in this store, discover them now.
            </p>
            <button className="w-[107px] h-[50px] px-[24px] py-[16px] bg-[#2B2B2B] flex items-center mt-[25px] md:mt-[20px] filter cursor-pointer drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
              <span className="roboto font-medium text-[15px] lg:text-[16px] leading-[auto] tracking-[0%] text-white">
                Discover
              </span>
            </button>
          </div>
        </div>

        <div className="h-[298px] w-[298px] relative md:col-start-1 md:row-start-1 lg:w-[350px] lg:h-[350px] 2xl:w-[530px] 2xl:h-[530px]">
          <img
            className="absolute right-0 z-10 lg:w-[300px] lg:h-[300px] 2xl:w-[450px] 2xl:h-[450px]"
            src="public/story1.png"
            alt=""
          />
          <div className="h-[250px] w-[250px] absolute bottom-0 bg-[#FFB568] lg:w-[300px] lg:h-[300px] 2xl:w-[450px] 2xl:h-[450px]"></div>
        </div>
      </div>
    </div>
  );
};
