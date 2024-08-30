import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { sideBarLinks } from "../../data/data";
import { FaDotCircle } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io"; // Assuming this is the correct import path

const Sidebar = ({ burgerState }) => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setOpenSubDropdown(null); // Close sub-dropdown when main dropdown toggles
  };

  const toggleSubDropdown = (index) => {
    setOpenSubDropdown(openSubDropdown === index ? null : index);
  };

  const location = useLocation();

  return (
    <div
      className={`h-[100%] z-50 ${
        location.pathname === "/" ? "hidden" : "block"
      }  transform transition-all duration-500 ease-in-out ${
        burgerState ? "w-[230px]" : "w-[50px]"
      } sticky top-0 bg-sidebar-bg-color text-white`}
    >
      <ul className="space-y-0.2">
        {sideBarLinks?.map((item, index) => (
          <li key={index} className="relative bg-sidebar-bg-color">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full py-2 px-4 text-left border-b border-b-slate-800 flex justify-between items-center bg-sidebar-bg-color hover:bg-gray-700"
            >
              <span className="flex items-center ">
                <span className={`mr-2 ${burgerState ? "" : "py-2"}`}>
                  {item.icon}
                </span>
                {burgerState && item.name}
              </span>
              {openDropdown === index ? (
                <IoIosArrowDown className="text-[20px]" />
              ) : (
                <MdArrowBackIos />
              )}
            </button>
            {openDropdown === index && (
              <ul
                className={`${
                  burgerState
                    ? "bg-gray-700 w-full"
                    : "bg-gray-700 absolute left-[100%] top-0 w-[250px] z-50"
                }`}
                style={{ zIndex: 9999, position: "absolute" }} 
              >
                {item.subLinks?.map((subItem, subIndex) => (
                  <li key={subIndex} className="relative">
                    <button
                      className="w-full py-2 text-[13px] font-[400] font-poppins px-4 text-left  flex cursor-pointer justify-between items-center hover:bg-gray-600"
                      onClick={() => toggleSubDropdown(subIndex)}
                    >
                      <span className="flex items-center ">
                        <FaDotCircle className="mr-2 text-[13px]" /> <span className="hover:text-yellow-600">{subItem.name}</span>
                      </span>
                      {openSubDropdown === subIndex ? (
                        <IoIosArrowDown />
                      ) : (
                        <MdArrowBackIos />
                      )}
                    </button>
                    {openSubDropdown === subIndex && (
                      <ul className="bg-gray-600">
                        {subItem.subSubLinks.map((subSubItem, subSubIndex) => (
                          <li
                            key={subSubIndex}
                            className="py-2 px-4 text-[13px] text-left flex items-center hover:bg-gray-600"
                          >
                             <Link
                              to={subSubItem.href} // Assuming each subSubItem has a link property
                              className="flex items-center"
                            >
                            <FaDotCircle className="mr-2 text-[13px]" /> {subSubItem.name}
                            </Link>
                          </li>
                        ))}
                        
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
