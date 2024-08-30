import React from "react";
import Events from "../../components/Evants/Events";

function page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="block ">
        <Events />
      </div>
    </div>
  );
}
export default page;
