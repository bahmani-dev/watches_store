import React, { useState } from "react";
import { Link } from "react-router-dom";
export const HeroSection = () => {

  let [open, setopen] = useState(false)
  return <>
    <div className={open ? "block" : "hidden"}>
      <div className="fixed top-0  w-full z-50 bg-slate-50 h-full ">
      <div className=" flex flex-col mx-auto items-center w-[400px] h-[500px] text-center relative" >
        <div className="absolute right-5 top-5 cursor-pointer">
          <span onClick={() => setopen(false)}>❌</span>
        </div>
        <ul className="mt-20 flex flex-col gap-4 ">
          <Link to='/'><li className="active:text-orange-400 cursor-pointer" onClick={()=> setopen(false)}>HOME</li></Link>
         <Link to='/feacherd'> <li className="active:text-orange-400 cursor-pointer" onClick={()=> setopen(false)}>FEATURED</li></Link>
          <li className="active:text-orange-400 cursor-pointer">PRODUCTS</li>
          <li className="active:text-orange-400 cursor-pointer">NEW</li>
        </ul>
      </div>
      </div>
    </div>

    <div className="">
      <div className="px-10 py-5 fixed w-full flex justify-between">
        <div className="flex gap-1">
          <img src="clocklogo.svg" alt="logo" />
          <h1 className="text-sm font-bold">ROLEX</h1>
        </div>
        <div className="flex gap-5 ">
          <img src="lightmode.svg" alt="" />
          <Link to="/cart"><img src="cart.svg" alt="" className="cursore-pointer" /></Link>
          <img src="menu.svg" id="menu" alt="" onClick={() => setopen(true)} className="cursor-pointer" />
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
