import React, { useState } from 'react';
import { IoMdVideocam } from "react-icons/io";
import { MdSportsTennis } from "react-icons/md";
import { IoHome } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { GiSolidLeaf } from "react-icons/gi";
import { GiShipWheel } from "react-icons/gi";

function FooterBar() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const links = [
    { to: "/inplay", icon: <IoMdVideocam />, label: "Inplay" },
    { to: "/cricket", icon: <MdSportsTennis />, label: "Sport" },
    { to: "/dashboard", icon: <IoHome />, label: "Home" },
    { to: "/teepati", icon: <GiSolidLeaf />, label: "Teepati" },
    { to: "/i-casino", icon: <GiShipWheel />, label: "i Casino" },
  ];

  return (
    <div className="bottom-0 bg-custom-yellow-background fixed h-14 w-full rounded-t-2xl">
      <div className="grid grid-cols-5 gap-1 h-full text-center">
        {links.map((link, index) => (
          <div
            key={index}
            className={`flex flex-col items-center justify-center cursor-pointer ${
              activeIndex === index ? "bg-[#001F3F]" : ""
            }`}
            onClick={() => handleClick(index)}
          >
            <Link
              to={link.to}
              className="flex flex-col items-center justify-center w-full h-full"
            >
              <div
                className={`text-[20px] ${
                  activeIndex === index ? "text-white" : "text-zinc-800"
                }`}
              >
                {link.icon}
              </div>
              <h1
                className={`uppercase text-[10px] font-[700] font-ubuntu ${
                  activeIndex === index ? "text-white" : "text-zinc-800"
                }`}
              >
                {link.label}
              </h1>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FooterBar;
