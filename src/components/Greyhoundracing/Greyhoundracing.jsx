import React from "react";
import Cards from "../Cards/Cards";
import { FaDog } from "react-icons/fa";
import Tabs from "../Tabs/Tabs";

function Greyhoundracing() {
  return (
    <>
      <div className="">
        <div className=" flex  min-w-fit py-1 gap-1">
          <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
            <div className=" p-2 bg-custom-yellow-background mx-1 lg:mx-0">
              <div className="flex justify-between">
                <div className="flex space-x-1 items-center">
                  <p className="text-[11px] whitespace-nowrap lg:text-[14px] font-[600] font-poppins uppercase text-black">
                    GreyhoundRacing
                  </p>
                  <FaDog className="font-[600] text-[20px]" />
                </div>
                <div className="flex justify-center items-center space-x-2">
                  <p className="text-[11px] whitespace-nowrap font-poppins text-[#343A40] font-[600]">
                    View by:
                  </p>
                  <div className="flex flex-col space-y-2">
                    <select
                      id="dropdown"
                      className="border bg-custom-blue-background text-white uppercase text-[13px] font-[500] outline-none rounded-sm shadow-sm"
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
            <Tabs />
            <Cards />
          </div>
        </div>
      </div>
    </>
  );
}

export default Greyhoundracing;
