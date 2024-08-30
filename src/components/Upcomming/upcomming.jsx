import React, { useState, useEffect } from 'react';


function Upcoming() {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [visibleSections, setVisibleSections] = useState([true, false]); // Set initial visibility for sections

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const toggleSection = (index) => {
    setVisibleSections((prev) =>
      prev.map((section, i) => (i === index ? !section : section))
    );
  };

  return (
    <>
      <div className="w-full overflow-x-auto px-1 lg:px-0">
        <div className="w-full overflow-x-auto">
          <div className="bg-white mt-2  p-[5px]">
            {/* Horse Racing Section */}
            <div
              className="bg-custom-yellow-background mb-3 cursor-pointer"
              onClick={() => toggleSection(0)}
            >
              <p className="uppercase text-[#343A40] px-2 text-[14px] font-[600] font-ubuntu">
                Upcoming Horse Racing
              </p>
            </div>
            {visibleSections[0] && (
              <div className="overflow-scroll min-w-[300px] max-w-full h-auto scrollbar-hide whitespace-nowrap flex space-x-1 py-2">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div key={index} className="w-28 bg-[#F1F1F1] rounded-md flex-none">
                    <div className="flex items-center m-1">
                      <img
                        className="w-10 h-6"
                        src="https://flagcdn.com/h40/za.png"
                        alt="image"
                      />
                      <div className="px-2">
                        <p className="text-[11.9px] font-[600] font-poppins">09:20 PM</p>
                        <p className="text-[12px] font-[400] font-poppins">7f Hcap</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Greyhound Racing Section */}
            <div
              className="bg-custom-yellow-background  cursor-pointer"
              onClick={() => toggleSection(1)}
            >
              <p className="uppercase text-[#343A40] px-2 text-[14px] font-[600] font-ubuntu">
                Upcoming Greyhound Racing
              </p>
            </div>
            {visibleSections[1] && (
              <div className="overflow-scroll min-w-[300px] max-w-full h-auto scrollbar-hide whitespace-nowrap flex space-x-1 py-2">
                {Array.from({ length: 10 }).map((_, index) => (
                  <div key={index} className="w-28 bg-[#F1F1F1] rounded-md flex-none">
                    <div className="flex items-center m-1">
                      <img
                        className="w-10 h-6"
                        src="https://flagcdn.com/h40/za.png"
                        alt="image"
                      />
                      <div className="px-2">
                        <p className="text-[11.9px] font-[600] font-poppins">09:20 PM</p>
                        <p className="text-[12px] font-[400] font-poppins">7f Hcap</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Upcoming;
