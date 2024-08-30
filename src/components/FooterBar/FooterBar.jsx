import React from 'react'
import { IoMdVideocam } from "react-icons/io";
import { MdSportsTennis } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GiSolidLeaf } from "react-icons/gi";
import { GiShipWheel } from "react-icons/gi";

function FooterBar() {
  return (
    <div className="bottom-0 bg-custom-yellow-background fixed h-14 w-full rounded-t-2xl">
      <div className="grid grid-cols-5 gap-1 h-full text-center">
        
        <div className="flex flex-col  items-center justify-center">
        <Link to="/inplay " className="flex flex-col  items-center justify-center">
          <IoMdVideocam className="text-[20px] text-zinc-800" />
          <h1 className="uppercase  text-[10px] text-zinc-800 font-[700] font-ubuntu">inplay</h1>
          </Link> 
        </div>
        
        <div className="flex flex-col  items-center justify-center">
        <Link to="/cricket" className="flex flex-col  items-center justify-center">
          <MdSportsTennis className="text-[20px] text-zinc-800" />
          <h1 className="uppercase  text-[10px] text-zinc-800 font-[700] font-ubuntu">Sport</h1>
          </Link> 
        </div>
        <div className="flex flex-col  items-center justify-center">
        <Link to="/dashboard" className="flex flex-col  items-center justify-center">
          <IoHome className="text-[20px] text-zinc-800" />
          <h1 className="uppercase  text-[10px] text-zinc-800 font-[700] font-ubuntu">Home</h1>
          </Link> 
        </div>
        <div className="flex flex-col  items-center justify-center">
        <Link to="/inplay" className="flex flex-col  items-center justify-center">
          <GiSolidLeaf className="text-[20px] text-zinc-800" />
          <h1 className="uppercase  text-[10px] text-zinc-800 font-[700] font-ubuntu">Teepati</h1>
          </Link> 
        </div>
        <div className="flex flex-col items-center  justify-center">
        <Link to="/i-casino" className="flex flex-col  items-center justify-center">
          <GiShipWheel className="text-[20px] text-zinc-800" />
          <h1 className="uppercase  text-[10px] text-zinc-800 font-[700] font-ubuntu">i casino</h1>
          </Link> 
        </div>
      </div>
    </div>
  )
}

export default FooterBar;
