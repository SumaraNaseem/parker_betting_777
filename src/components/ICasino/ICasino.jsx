import React, { useState } from 'react';
import { RiDashboardHorizontalLine } from 'react-icons/ri';
import { PiCirclesThreePlus } from 'react-icons/pi';
import { initialAmounts } from '../../data/data';
import './style.css'

const tabLabels = [
  { name: "All" },
  { name: "Evolution Gaming" },
  { name: "Ezugi" },
  { name: "Ae Sexy" },
  { name: "Royal Gaming" },
  { name: "Spribe" },
  { name: "Bombay live" },
  { name: "Onetoush" },
  { name: "Gamzix" },
  { name: "Betgames.tv" },
  { name: "Kingmarker" },
  { name: "Jili gaming" },
];

const tabCasinoLabels = [
  { name: "All", tab: <RiDashboardHorizontalLine /> },
  { name: "Casino", tab: <PiCirclesThreePlus /> },
];

const images = [
  { src: 'https://cdn.dreamcasino.live/baccarat-nocommision-bg.jpg', label: 'Label 1' },
  { src: 'https://cdn.dreamcasino.live/evo_supersicbo.jpg', label: 'Label 2' },
  { src: 'https://cdn.dreamcasino.live/evo_dragontiger.jpg', label: 'Label 3' },
  { src: 'https://cdn.dreamcasino.live/evo_livespeedbaccarata.jpg', label: 'Label 4' },
  { src: 'https://cdn.dreamcasino.live/evo_supersicbo.jpg', label: 'Label 5' },
  { src: 'https://cdn.dreamcasino.live/evo_livespeedbaccaratc.jpg', label: 'Label 6' },
  { src: 'https://cdn.dreamcasino.live/baccarat-nocommision-bg.jpg', label: 'Label 1' },
  { src: 'https://cdn.dreamcasino.live/evo_supersicbo.jpg', label: 'Label 2' },
  { src: 'https://cdn.dreamcasino.live/evo_dragontiger.jpg', label: 'Label 3' },
  { src: 'https://cdn.dreamcasino.live/evo_livespeedbaccarata.jpg', label: 'Label 4' },
  { src: 'https://cdn.dreamcasino.live/evo_supersicbo.jpg', label: 'Label 5' },
  { src: 'https://cdn.dreamcasino.live/evo_livespeedbaccaratc.jpg', label: 'Label 6' },
  { src: 'https://cdn.dreamcasino.live/baccarat-nocommision-bg.jpg', label: 'Label 1' },
  { src: 'https://cdn.dreamcasino.live/evo_supersicbo.jpg', label: 'Label 2' },
  { src: 'https://cdn.dreamcasino.live/evo_dragontiger.jpg', label: 'Label 3' },
  { src: 'https://cdn.dreamcasino.live/evo_livespeedbaccarata.jpg', label: 'Label 4' },
  { src: 'https://cdn.dreamcasino.live/evo_supersicbo.jpg', label: 'Label 5' },
  { src: 'https://cdn.dreamcasino.live/evo_livespeedbaccaratc.jpg', label: 'Label 6' },
  { src: 'https://cdn.dreamcasino.live/baccarat-nocommision-bg.jpg', label: 'Label 1' },
  { src: 'https://cdn.dreamcasino.live/evo_supersicbo.jpg', label: 'Label 2' },
  { src: 'https://cdn.dreamcasino.live/evo_dragontiger.jpg', label: 'Label 3' },
  { src: 'https://cdn.dreamcasino.live/evo_livespeedbaccarata.jpg', label: 'Label 4' },
  { src: 'https://cdn.dreamcasino.live/evo_supersicbo.jpg', label: 'Label 5' },
  { src: 'https://cdn.dreamcasino.live/evo_livespeedbaccaratc.jpg', label: 'Label 6' },
];

function ICosino() {
  const [activeTab, setActiveTab] = useState(1);
  const [activeTabCasino, setActiveTabCasino] = useState(1);
  const [amounts, setAmounts] = useState(initialAmounts);

  const handleChange = (index, newValue) => {
    const updatedAmounts = [...amounts];
    updatedAmounts[index] = newValue;
    setAmounts(updatedAmounts);
  };

  return (
    <div className="w-full mb-[53px] mt-32 px-1">
      <div className="flex justify-center items-center px-2 bg-custom-yellow-background py-1 w-full">
        <p className="text-[16px] uppercase font-[700] font-ubuntu">I Casino</p>
      </div>

      <div className="text-white pt-3">
        {/* Tabs */}
        <div className="flex border-t border-b justify-start w-full lg:w-[1100px] overflow-x-auto scrollbar-hidden border-gray-200">
  {tabLabels.map((label, index) => (
    <button
      key={index}
      className={`relative uppercase px-2 py-2 lg:px-4 lg:py-4 text-[13px] lg:text-[14px] whitespace-nowrap font-[400] font-poppins border-r border-gray-300 text-sm ${activeTab === index + 1
        ? 'bg-custom-yellow-background text-black'
        : 'hover:text-black hover:bg-white'
        }`}
      onClick={() => setActiveTab(index + 1)}
    >
      {label.name}
    </button>
  ))}
</div>


        {/* Casino Tabs */}
        <div className="flex border-t border-b justify-start w-[310px] lg:w-[1100px] overflow-y-auto scrollbar-hidden border-gray-200">
          {tabCasinoLabels.map((label, index) => (
            <div key={index} className="flex justify-center items-center">
              <button
                className={`relative px-3 lg:px-5 py-2 lg:py-5 sm:text-[12px] text-[14px]  text-center whitespace-nowrap font-[400] font-poppins border-r border-gray-300 text-sm ${activeTabCasino === index + 1
                  ? 'bg-custom-yellow-background'
                  : 'hover:text-black hover:bg-white'
                  }`}
                onClick={() => setActiveTabCasino(index + 1)}
              >
                <span className="text-[30px] font-[600] text-center">
                  {label.tab}
                </span>
                {label.name}
              </button>
            </div>
          ))}
        </div>

        {/* Main Content */}
       
        <div className="grid grid-cols-2 lg:grid-cols-6 mt-1 py-2 bg-white">
          {images.map((image, index) => (
            <div key={index} className=" text-black">
              <div className="h-[150px] w-full text-black overflow-hidden">
                <img
                  src={image.src}
                  alt={image.label}
                  className="h-full w-[720px] px-2 py-2 object-cover"
                />
                 
              </div>

              <div className="play-now bg-custom-yellow-background mx-2 -mt-2">
                <p className="text-[10px] text-white py-[5px] lg:px-[44px] px-[12px] font-bold whitespace-nowrap lg:text-[12px]">
                  PLAY NOW
                </p>
              </div> 
            </div>
          ))}
        </div>

      </div>

    
    </div>
  );
}

export default ICosino;
