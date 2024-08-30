import React, { useState } from 'react'
import { GrAnnounce } from "react-icons/gr";
import { Link } from 'react-router-dom';
import { navbarLinks } from "../../data/data"


function Navbarsec() {
  const [activeIndex, setActiveIndex] = useState(null);
  return (
    <div>
      <div className='bg-custom-yellow-background  pt-[86px] py-1 flex justify-center '>
        <ul className='flex  max-w-full  items-center overflow-y-auto scrollbar-hidden  w-[1013px] lg:justify-center lg:w-full '>
          {navbarLinks.map((link, index) => (
            <Link to={link.href}

              className={`text-[12.72px] whitespace-nowrap uppercase font-[500] font-poppins 
              p-1`}
            >
              <div
                key={index}
                className={`flex justify-center    p-1 items-center hover:bg-opacity-20 hover:bg-black hove:p-1  rounded-md ${activeIndex === index ? 'bg-opacity-20  bg-black rounded-md' : ' '
                  }`}
                onClick={() => setActiveIndex(index)}
              >
                <li className='space-x-0 p-1 text-[16px] font-[400]'>
                  {link.icon}
                </li>
                <li>
                  {link.name}
                </li>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      <div className='flex justify-between items-center mx-1  my-1 overflow-hidden'>
        <div className='text-white p-1.5  rounded-sm z-10  bg-custom-yellow-background'>
          <GrAnnounce />
        </div>

        <p className="text-white w-[60%] z-6 scroll-left text-[13px] font-[400] capitalize">
          Take A Chance, Embrace The Thrill. Unleash The Excitement With Our Casino Gaming….
        </p>
      </div>
    </div>
  )
}

export default Navbarsec