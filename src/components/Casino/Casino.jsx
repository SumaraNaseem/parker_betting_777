import React from "react";
import Cards from "../Cards/Cards";

function Casino() {
  return (
    <div className="">
      <div className=" flex  min-w-fit py-1 gap-1">
        <div className="w-full grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:grid-cols-1">
          <div className=" p-2 bg-custom-yellow-background mx-1  lg:mx-0">
            <p className="text-[14px] text-center  lg:text-[16px] font-[700] font-ubuntu uppercase text-black">
              Live Casino
            </p>
          </div>
          <Cards />
        </div>
      </div>
    </div>
  );
}

export default Casino;
