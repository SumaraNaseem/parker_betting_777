import React, { useState } from 'react';
import { FaTv } from "react-icons/fa6";
import ReactPlayer from 'react-player';

function Matches() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [activeTab, setActiveTab] = useState(0);
    const toggleVisibility = () => {
        setIsVisible(!isVisible); // Toggles the visibility state
    };
    const toggleDropdown = () => {
        console.log("dropdown")
        setIsOpen(!isOpen);
    };
    const tabs = [
        { name: 'Matched', content: 'Content 1' },
        { name: 'UnMatched ', content: 'Content 2' },
        { name: 'Fancy', content: 'Content 3' },
    ];
    return (
        <div className="space-y-1">
            <div className="overflow-hidden cursor-pointer">
                {/* Live TV Toggle */}
                <div onClick={toggleVisibility} className="bg-slate-100 px-2 py-2 items-center flex">
                    <p className="mr-3 text-[14px] font-[600] font-poppins">Live TV</p>
                    <FaTv />
                </div>

                {/* Video Player */}
                <div
                    className={`transition-all duration-300 ease-in-out rounded-lg transform ${
                        isVisible ? 'opacity-100' : 'opacity-0'
                    }`}
                >
                    <div className="flex justify-center items-center">
                        <ReactPlayer
                            url="https://youtu.be/A3zth7D1xyM" // Replace with your video URL
                            controls
                            width="600px"
                            height="200px"
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
                <div
                    className={`bg-custom-yellow-background relative cursor-pointer border border-y-yellow-50 px-2 py-2 
                         ${!isVisible ? '-mt-[200px]' : '' }
                    `}
                >
                    <p  onClick={toggleDropdown}  className="mr-3 text-[14px] font-[600] font-poppins">Dropdown</p>

                   
                </div>
                {isOpen && (
                        <div className=" shadow-lg left-0 w-[370px] bg-custom-yellow-background ring-1 ring-black ring-opacity-5 z-10">
                            <div className="" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                                <a href="#" className="block px-4 border-b border-zinc-50 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 1</a>
                                <a href="#" className="block px-4 border-b border-zinc-50 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 2</a>
                                <a href="#" className="block px-4 border-b border-zinc-50 py-2 text-sm text-white hover:bg-gray-100 hover:text-gray-900" role="menuitem">Option 3</a>
                            </div>
                        </div>
                    )}
            </div>
            <div className="">
            <div className="flex justify-around ">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveTab(index)}
                        className={`py-1 border text-[13px] font-[600] border-yellow-600 text-white  w-full text-sm  uppercase font-poppins ${
                            activeTab === index
                                ? 'bg-custom-yellow-background '
                                : 'text-white'
                        }`}
                    >
                        {tab.name}
                    </button>
                ))}
            </div>
            <div className=" flex border text-[11px] font-poppins font-[600] hover:bg-custom-yellow-background text-white  ">
                <p className=" w-full border text-center border-slate-50">{tabs[activeTab].content}</p>
                <p className=" w-full border text-center border-slate-50">{tabs[activeTab].content}</p>
                <p className=" w-full border text-center border-slate-50">{tabs[activeTab].content}</p>
                <p className=" w-full border text-center border-slate-50">{tabs[activeTab].content}</p>
            </div>
        </div></div>
       
    );
}

export default Matches;
