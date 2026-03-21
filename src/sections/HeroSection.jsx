import React, { useState } from "react";
import { Link } from "react-router-dom";
export const HeroSection = () => {

  let [open, setopen] = useState(false)
  return <>
  <div className="md:flex md:h-10">
    <div className={`${open ? "block" : "hidden"} md:block`}>
      <div className="fixed top-0  w-full z-50 bg-slate-50 h-full md:block md:h-0 hideen md:flex">
        <div className=" flex flex-col mx-auto items-center w-[400px] h-[500px] text-center relative" >
          <div className="absolute right-5 top-5 cursor-pointer">
            <span onClick={() => setopen(false)} className="md:hidden">❌</span>
          </div>
          <ul className="mt-20 flex flex-col gap-4 md:flex-row md:mt-14 md:gap-3 lg:gap-10 md:mr-40 lg:mr-32">
            <Link to='/'><li className="active:text-orange-400 cursor-pointer text:sm md:text-sm" onClick={() => setopen(false)}>HOME</li></Link>
            <Link to='/feacherd'> <li className="active:text-orange-400 cursor-pointer text:sm md:text-sm" onClick={() => setopen(false)}>FEATURED</li></Link>
            <li className="active:text-orange-400 cursor-pointer text:sm md:text-sm">PRODUCTS</li>
            <li className="active:text-orange-400 cursor-pointer text:sm md:text-sm">NEW</li>
          </ul>
        </div>
      </div>
    </div>
    </div>

    <div className="px-10 py-5 fixed w-full flex justify-between z-10 md:px-20">
      <div className="flex gap-1 md:ml-5">
        <img src="clocklogo.svg" alt="logo" />
        <h1 className="text-sm font-bold">ROLEX</h1>
      </div>
      <div className="flex gap-5 ">
        <img src="lightmode.svg" alt="" />
        <Link to="/cart"><img src="cart.svg" alt="" className="cursore-pointer" /></Link>
        <img src="menu.svg" id="menu" alt="" onClick={() => setopen(true)} className="cursor-pointer md:hidden" />
      </div>
    </div>

    <div className="md:flex md:px-16 text-ms ms:text-md md:text-lg lg:text-xl xl:text-2xl">
      <div className="bg-yellow-600 h-[450px] w-[260px] flex items-center absolute right-0 md:right-16 md:w-[300px] md:h-[500]  ">
        <img src="lorgclock.png" alt="" className="w-full h-auto" />
      </div>

      <div className="flex ml-10 pt-44 md:pt-10 ">
        <div className="flex flex-col gap-y-10 mt-10 justify-center w-6 ">
          <span className="-rotate-90 text-sm">Instagram</span>
          <span className="-rotate-90 text-sm">Twitter</span>
          <span className="-rotate-90 text-sm">Facbook</span>
        </div>
      </div>

      <div className="my-20 mx-12 mt-32 ">
        <h1 className="text-3xl font-bold text-sm md:text-lg lg:text-xl ">NEW WATCH <br /> COLLECTION B720</h1>
        <p className="text-sm my-5" text-sm md:text-lg lg:text-xl>Latest arrival of the new imported watches of <br /> the B720 series, with a modern and resistant <br /> design.</p>
        <span className="text-yellow-600 text-xl font-bold">$1245</span>
        <div className="my-8">
          <button className="border w-[100px] h-[40px] text-sm bg-gray-300 hover:scale-110 md:w-[120px]">Discover</button>
          <button className="border w-[100px] h-[40px] text-sm bg-black text-white hover:scale-110 md:w-[120px]">ADD TO CART</button>
        </div>
      </div>
    </div>
  </>
};
