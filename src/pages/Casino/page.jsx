import React from "react";
import Casino from "../../components/Casino/Casino";

function page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="block ">
        <Casino />
      </div>
    </div>
  );
}

export default page;
