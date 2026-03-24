import React from "react";

export const BestSells = () => {
  return (
    <div className="flex flex-col gap-[40px] w-[400px] items-center">
      <div className="flex justify-center items-center flex-col">
          <div className="border-t border-1 border-[#FFB568] border-solid w-[75px]"></div>
          <h2 className="roboto font-medium text-[16px] leading-[auto] tracking-[5%] text-[#2E2E2E] mt-[10px]">
            BEST SELLS
          </h2>
        </div>
      <div className="h-[371px] w-[312px] group relative py-[30px] flex flex-col items-center gap-[10px] border-solid border-1 border-[#F0F0F0] transition-all duration-300 hover:h-[445px] hover:bg-[#FFB568] drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
        <div className="w-[61px] h-[31px] bg-[#FFB568] flex justify-center items-center group-hover:bg-[#000] absolute top-[10px] right-[10px]">
          <p className="roboto font-medium text-[13px] leading-[auto] tracking-[0%] text-[white] ">
            NEW
          </p>
        </div>

        <img
          className="max-w-[130px] h-[219.38px]"
          src="public/new1.png"
          alt=""
        />
        <h3 className="roboto font-bold text-[16px] leading-[auto] tracking-[4%] text-[#2E2E2E]">
          JAZZMASTER
        </h3>
        <p className="roboto font-bold text-[16px] leading-auto tracking-[4%] text-[#FFB568] group-hover:text-[#2E2E2E]">
          $1150
        </p>
        <button className="w-[152px] h-[56px] bg-[#000] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out cursor-pointer drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
          <span className="text-white roboto font-medium text-[14px]">
            ADD TO CART
          </span>
        </button>
      </div>

      <div className="h-[371px] w-[312px] group relative py-[30px] flex flex-col items-center gap-[10px] border-solid border-1 border-[#F0F0F0] transition-all duration-300 hover:h-[445px] hover:bg-[#FFB568] drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
        <div className="w-[61px] h-[31px] bg-[#FFB568] flex justify-center items-center group-hover:bg-[#000] absolute top-[10px] right-[10px]">
          <p className="roboto font-medium text-[13px] leading-[auto] tracking-[0%] text-[white] ">
            NEW
          </p>
        </div>

        <img
          className="max-w-[130px] h-[219.38px]"
          src="public/new2.png"
          alt=""
        />
        <h3 className="roboto font-bold text-[16px] leading-[auto] tracking-[4%] text-[#2E2E2E]">
          DREYFUSS GOLD
        </h3>
        <p className="roboto font-bold text-[16px] leading-auto tracking-[4%] text-[#FFB568] group-hover:text-[#2E2E2E]">
          $750
        </p>
        <button className="w-[152px] h-[56px] bg-[#000] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out cursor-pointer drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
          <span className="text-white roboto font-medium text-[14px]">
            ADD TO CART
          </span>
        </button>
      </div>

      <div className="h-[371px] w-[312px] group relative py-[30px] flex flex-col items-center gap-[10px] border-solid border-1 border-[#F0F0F0] transition-all duration-300 hover:h-[445px] hover:bg-[#FFB568] drop-shadow-[0_4px_6px_rgba(0,0,0,0.2)]">
        <div className="w-[61px] h-[31px] bg-[#FFB568] flex justify-center items-center group-hover:bg-[#000] absolute top-[10px] right-[10px]">
          <p className="roboto font-medium text-[13px] leading-[auto] tracking-[0%] text-[white] ">
            NEW
          </p>
        </div>

        <img
          className="max-w-[130px] h-[219.38px]"
          src="public/new3.png"
          alt=""
        />
        <h3 className="roboto font-bold text-[16px] leading-[auto] tracking-[4%] text-[#2E2E2E]">
          PORTUGUESE ROSE
        </h3>
        <p className="roboto font-bold text-[16px] leading-auto tracking-[4%] text-[#FFB568] group-hover:text-[#2E2E2E]">
          $1590
        </p>
        <button className="w-[152px] h-[56px] bg-[#000] opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 ease-out cursor-pointer drop-shadow-[0_4px_6px_rgba(0,0,0,0.5)]">
          <span className="text-white roboto font-medium text-[14px]">
            ADD TO CART
          </span>
        </button>
      </div>
    </div>
  );
};
