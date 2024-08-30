import React, { useState, useEffect } from "react";
import { MainGamesImage } from "../../data/data";
import RightSideCard from "../../components/RightSideCard/RightSideCard";
import Table from "../../components/Table/Table";
import { GiCricketBat } from "react-icons/gi";
import Cards from "../Cards/Cards";
import Upcoming from "../Upcomming/upcomming";
function MainGame() {
  const [selectedOption, setSelectedOption] = useState("Competition");
  const [currentDateTime, setCurrentDateTime] = useState(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (
    <>
      <div class="grid grid-cols-12 gap-1 -z-50">
        <div className="col-span-12 lg:col-span-9 ">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 gap-1 px-1 lg:px-0">
            {MainGamesImage?.map((image, index) => (
              <div key={index} className="flex items-center">
                <div className="relative w-full">
                  <img
                    src={image.image_game}
                    alt={`Image ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 w-full bg-custom-yellow-background text-center py-1">
                    <p className="text-[11px] font-[900] lg:text-[15px] lg:font-[800] font-ubuntu text-white capitalize">
                      {image.label}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-2 p-2 bg-custom-yellow-background mx-1  lg:mx-0">
            <div className="flex justify-between">
              <div className="flex space-x-1 items-center">
                <p className="text-[12px] lg:text-[14px] font-[600] font-poppins uppercase text-black">
                  Cricket
                </p>
                <GiCricketBat className="font-[600] text-[20px]" />
              </div>
              <div className="flex justify-center items-center space-x-2">
                <p className="text-[12px] font-poppins text-[#343A40] font-[600]">
                  View by:
                </p>
                <div className="flex flex-col space-y-2">
                  <select
                    id="dropdown"
                    className="border bg-custom-blue-background text-white uppercase text-[13px] font-[500] outline-none rounded-sm shadow-sm"
                    onChange={handleSelectChange}
                    value={selectedOption}
                  >
                    <option
                      className="uppercase text-[13px] font-[500]"
                      value="Competition"
                    >
                      Competition
                    </option>
                    <option
                      className="uppercase text-[13px] font-[500]"
                      value="Time"
                    >
                      Time
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <Table selectedOption={selectedOption} />
          <Upcoming />
        </div>
        <div class="hidden lg:block lg:col-span-3 px-1 lg:px-0 ">
          <RightSideCard />
        </div>
      </div>
      <Cards />
    </>
  );
}

export default MainGame;
