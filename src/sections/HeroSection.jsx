import React from "react";

export const HeroSection = () => {
  return <>
    <div className="overflow-y-hidden">
      <div className="px-10 py-5 fixed w-full flex justify-between">
        <div className="flex gap-1">
          <img src="clocklogo.svg" alt="logo" />
          <h1 className="text-sm font-bold">ROLEX</h1>
        </div>
        <div className="flex gap-5 ">
          <img src="lightmode.svg" alt="" />
          <img src="cart.svg" alt="" />
          <img src="menu.svg" alt="" />
        </div>
      </div>
      
      <div className="flex justify-between ml-10 ">
        <div className="flex flex-col gap-y-10 mt-10 justify-center w-6 ">
          <span className="-rotate-90 text-sm">Instagram</span>
          <span className="-rotate-90 text-sm">Twitter</span>
          <span className="-rotate-90 text-sm">Facbook</span>
        </div>
        <div className="bg-yellow-600 h-[450px] w-[260px] flex items-center">
          <img src="lorgclock.png" alt="" className="w-full h-auto" />
        </div>
      </div>

      <div className="my-20 mx-12">
        <h1 className="text-3xl font-bold">NEW WATCH <br /> COLLECTION B720</h1>
        <p className="text-sm my-5">Latest arrival of the new imported watches of <br /> the B720 series, with a modern and resistant <br /> design.</p>
        <span className="text-yellow-600 text-xl font-bold">$1245</span>
        <div className="my-8">
          <button className="border w-[120px] h-[40px] text-md bg-gray-300 hover:scale-110">Discover</button>
          <button className="border w-[120px] h-[40px] text-md bg-black text-white hover:scale-110">ADD TO CART</button>
        </div>
      </div>
    </div>
  </>
};
