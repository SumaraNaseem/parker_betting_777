import React, { useState } from "react";
import logo from "../../assest/logo.png";
import Modal from "../../components/Model/Models";
import { FaLink } from "react-icons/fa";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { sideBarLinks, coinsItems, dropdownItems } from "../../data/data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { GiTwoCoins } from "react-icons/gi";
import { RiLogoutCircleRLine } from "react-icons/ri";



const Navbar = ({ setBurgerState, burgerState }) => {
  const [showModal, setShowModal] = useState(false);
  const [formType, setFormType] = useState("login");
  const [isOpen, setIsOpen] = useState(false);
  const [coin, setCoin] = useState(false);
  
  // const toggleDropdown = () => {
  //   setIsOpen(!isOpen);
  // };
  const [openDropdown, setOpenDropdown] = useState(null);
  const [openSubDropdown, setOpenSubDropdown] = useState(null);

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
    setOpenSubDropdown(null); 
    setIsOpen(!isOpen);
  };
  const coinDropdown=()=>{
    setCoin(!coin)

  }

  const toggleSubDropdown = (index) => {
    setOpenSubDropdown(openSubDropdown === index ? null : index);
  }

  const [openDrawer, setOpenDrawer] = useState({
    top: false,
    right: false,
    bottom: false,
    left: false,
  });

  const handleOpenModal = (type) => {
    setFormType(type);
    setShowModal(true);
  };

  const toggleDrawer = (position) => {
    setOpenDrawer((prevState) => ({
      ...prevState,
      [position]: !prevState[position],
    }));
  };
 

  const handleCloseModal = () => setShowModal(false);

  const renderDrawer = (position) => (
    <div
      className={`fixed z-50 sm:block md:hidden  mt-20 h-full ${
        openDrawer[position]
          ? `${
              position === "top"
                ? "top-0 left-0 right-0"
                : position === "right"
                ? "top-0 right-0"
                : position === "bottom"
                ? "bottom-0 left-0 right-0"
                : "top-0 left-0"
            }`
          : `${
              position === "top"
                ? "-top-full"
                : position === "right"
                ? "-right-full"
                : position === "bottom"
                ? "-bottom-full"
                : "-left-full"
            }`
      }`}
      style={{
        height: position === "top" || position === "bottom" ? "200px" : "100vh",
        width: position === "left" || position === "right" ? "230px" : "100%",
      }}
    >
       <div
    className={`h-[100%]  ${
      burgerState ? "w-[230px]" : "w-[50px]"
    } sticky top-0 bg-sidebar-bg-color text-white`}
  >
      <ul className="space-y-0.2">
        {sideBarLinks.map((item, index) => (
          <li key={index} className="relative bg-sidebar-bg-color">
            <button
              onClick={() => toggleDropdown(index)}
              className="w-full py-2 px-4 text-left border-b border-b-slate-800 flex justify-between items-center bg-sidebar-bg-color hover:bg-gray-700"
            >
              <span className="flex items-center">
                <span className={`mr-2 ${burgerState ?"":"py-2"}`}>{item.icon}</span>
                {burgerState && item.name}
              </span>
              {openDropdown === index ? (
                <MdArrowForwardIos />
              ) : (
                <MdArrowBackIos />
              )}
            </button>
            {openDropdown === index && (
              <ul className="bg-gray-700">
                {Array.from({ length: 3 }, (_, subIndex) => (
                  <li key={subIndex} className="relative">
                    <button
                      className="w-full py-2 px-4 text-left flex justify-between items-center hover:bg-gray-600"
                      onClick={() => toggleSubDropdown(subIndex)}
                    >
                      <span className="flex items-center">
                        <FaLink className="mr-2" /> Dropdown {subIndex + 1}
                      </span>
                      {openDropdown === index ? (
                <MdArrowForwardIos />
              ) : (
                <MdArrowBackIos />
              )}
                    </button>
                    {openSubDropdown === subIndex && (
                      <ul className="bg-gray-600">
                        {Array.from({ length: 3 }, (_, subSubIndex) => (
                          <li
                            key={subSubIndex}
                            className="py-2 px-4 text-left flex items-center hover:bg-gray-500"
                          >
                            <FaLink className="mr-2" /> Sub-dropdown{" "}
                            {subSubIndex + 1}
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
      {/* <div className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-semibold text-gray-800">Tailwind Drawer</h5>
        <button
          className="text-gray-800 hover:text-red-500"
          onClick={() => toggleDrawer(position)}
        >
          ✕
        </button>
      </div>
      <p className="text-gray-600 mb-4">
        This is a custom drawer using Tailwind CSS.
      </p>
      <div className="flex gap-2">
        <button className="px-4 py-2 text-sm font-medium text-white bg-blue-500 rounded">
          Documentation
        </button>
        <button className="px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded">
          Get Started
        </button>
      </div> */}
    </div>
  );

  return (
    <>
      <div className="w-full fixed z-20 flex text-center h-20">
        <div className="bg-custom-blue-background sm:px-14 px-0 flex justify-between items-center w-full">
          <div className="flex items-center">
            <Link to="/">
              <img src={logo} width={120} height={120} alt="logo" />
            </Link>
            <button
              className="text-white hidden md:block text-[25px]"
              onClick={() => setBurgerState(!burgerState)}
            >
              <GiHamburgerMenu />
            </button>
          </div>
          {localStorage.getItem("UserEmail")? <div className="space-x-2 flex items-center">
            <div className="relative inline-block text-left">
      <div>
        <button
          onClick={coinDropdown}
          className="inline-flex justify-between w-full rounded-md border font-poppins border-yellow-600 font-[600] shadow-sm px-2 py-2 text-[15px] bg-custom-yellow-background text-sm text-gray-700 focus:outline-none"
        >
          <GiTwoCoins icon={faUser} className="mr-2 text-[20px] text-yellow-300" />
          0
          <FontAwesomeIcon icon={faChevronDown} className="ml-2" />
        </button>
      </div>

      {/* Dropdown menu */}
      {coin && (
        <div className="origin-top-right absolute -right-4 mt-2 w-44 rounded-md text-white shadow-lg bg-custom-blue-background border border-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="bg-white m-3">
          {coinsItems.map((item, index) => (
            <div key={index} className="border-b bottom-1">
               <p
                
              
                className={`block px-2 py-1  ${index === coinsItems.length - 1 ? 'text-green-700' : ''} text-[16px] font-[600] font-poppins text-black  hover:bg-gray-100`}
              >
                {item.label}
              </p>
              <p
              className="block px-4  text-[12px] font-[400] italic font-poppins text-black  hover:bg-gray-100"
            >
              {item.count}
            </p>
            </div>
              
            ))}





          </div>
        </div>
      )}
    </div>
<div className="relative inline-block text-left">
      <div>
        <button
          onClick={toggleDropdown}
          className="inline-flex justify-between w-full items-center rounded-md border font-poppins border-yellow-600 font-[600] shadow-sm px-2 py-2 text-[15px] bg-custom-yellow-background text-sm text-black focus:outline-none"
        >
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Parkerexch
          <FontAwesomeIcon icon={faChevronDown} className="ml-2 " />
        </button>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="origin-top-right absolute -right-4 mt-2 w-44 rounded-md text-white shadow-lg bg-custom-blue-background border border-white ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="">
          {dropdownItems.map((item, index) => (
            
               <Link 
                key={index}
                to={item.link}

                // onClick={(event) => handleClick(event, item.link)}
                className={`block px-4 py-2 text-[13px] ${index === dropdownItems.length - 1 ? 'border border-white' : ''} font-[400]   font-poppins text-white hover:text-black hover:bg-gray-100`}
              > 
               <div  onClick={toggleDropdown} className="flex items-center">
                 {index === dropdownItems.length - 1 && (
               
                <RiLogoutCircleRLine className="mr-2 text-[18px] hover:text-black"
                />
              )}
                {item.label}

              
               </div>
             
                
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
<button
  className="text-white sm:hidden block text-[25px]"
  onClick={() => toggleDrawer("right")}
>
  <GiHamburgerMenu />
</button>
</div> : <div className="space-x-2 flex items-center">

<button
  onClick={() => handleOpenModal("login")}
  className="bg-custom-yellow-background hover:opacity-40 font-[400] text-[14px] px-4 py-1.5 rounded-[3px] ml-auto"
>
  Sign In
</button>
<button
  onClick={() => handleOpenModal("register")}
  className="bg-custom-yellow-background hover:opacity-40 font-[400] text-[14px] px-4 py-1.5 rounded-[3px] ml-auto"
>
  Sign Up
</button>
{/* <button
  className="text-white sm:hidden block text-[25px]"
  onClick={() => toggleDrawer("right")}
>
  <GiHamburgerMenu />
</button> */}
</div>}
         
        </div>
      </div>
      <Modal
        showModal={showModal}
        handleClose={handleCloseModal}
        formType={formType}
      />

      {/* Drawer Buttons */}
     

      {/* Drawers */}
      {renderDrawer("top")}
      {renderDrawer("right")}
      {renderDrawer("bottom")}
      {renderDrawer("left")}
    </>
  );
};

export default Navbar;
