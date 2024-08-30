import React from "react";
import Politics from "../../components/Politics/Politics";

function page() {
  return (
    <div className="flex flex-col min-h-screen overflow-x-hidden">
      <div className="block ">
        <Politics />
      </div>
    </div>
  );
}

export default page;
