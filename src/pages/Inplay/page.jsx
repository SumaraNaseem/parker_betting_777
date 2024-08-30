import React from "react";
import Inplay from "../../components/Inplay/Inplay";

function page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="block ">
        <Inplay />
      </div>
    </div>
  );
}

export default page;
