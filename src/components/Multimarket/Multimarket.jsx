import React, { useState, useEffect } from 'react';
import { FaTelegramPlane } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";
import { MdForwardToInbox } from "react-icons/md";


import Matches from '../Matches/Matches'
function Multimarket() {
  const [activeTab, setActiveTab] = useState(0);
  const [currentDateTime, setCurrentDateTime] = useState(new Date());
  const [selectedOption, setSelectedOption] = useState('Competition');
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);
  // const handleSelectChange = (e) => {
  //   setSelectedOption(e.target.value);
  // };
  const handleTabChange = (index) => {
    setActiveTab(index);
  };
  
  const tabs = [
    { name: 'Matched', content: 'A Juyal Boundaries' },
    { name: 'UnMatched ', content: 'SS Yadav Boundaries' },
    { name: 'Fancy', content: '4th Wicket Boundaries GL' },
    { name: 'Matched', content: '4th Wicket Caught Out GL' },
];
const tableData = [
  {
    date: currentDateTime.toLocaleDateString(),
    time: currentDateTime.toLocaleTimeString(),
    text: tabs[activeTab].content,
    values: [1.59, 1.57, 3.15, 3.12, 19.5, 20.1],
  },
  {
    date: currentDateTime.toLocaleDateString(),
    time: currentDateTime.toLocaleTimeString(),
    text: tabs[activeTab].content,
    values: [1.61, 1.58, 3.18, 3.10, 19.7, 20.3],
  },
  // Add more rows as needed
];

  return (
    <>
   <div class="grid grid-cols-12 gap-1 ">
  <div className="col-span-12 lg:col-span-8 xl:col-span-9">
    <div className=" p-2 bg-custom-yellow-background mx-1  lg:mx-0">
    <div className="flex justify-between">
      <div className="flex space-x-1 items-center">
        <p className="text-[12px] lg:text-[14px] font-[600] font-poppins uppercase text-black">
        Al-Fateh (KSA) v Al Ahli
        </p>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <p className="text-[12px] lg:text-[14px] font-[600] font-poppins uppercase text-black">
        {currentDateTime.toLocaleDateString()} {currentDateTime.toLocaleTimeString()}
        </p>
      </div>
    </div>
  </div>
  <div className=" w-[100%] p-2  mx-1 mr-1 lg:mx-0">
    <div className="flex justify-between">
      <div className="flex space-x-1 items-center">
        <p className="text-[12px] lg:text-[14px] font-[600] font-poppins uppercase text-white">
        <FaTelegramPlane />
        </p>
        <p className="text-[12px] lg:text-[13px]  font-[700] font-poppins uppercase text-white">
        Match Odds
        </p>
        <p className="text-[16px] lg:text-[16px] text-yellow-500 font-[600] font-poppins uppercase  rounded-full ">
        <FaInfoCircle/>
        </p>
      </div>
      <div className="flex justify-center items-center space-x-2">
        <p className="text-[12px] lg:text-[11px] font-[600] font-poppins uppercase text-white">
        Min: 100 | Max: 25 k
        </p>
      </div>
    </div>
  </div>
  <div className='bg-neutral-900 mb-2'> 
        <div className='h-[120px]'>
<h1 className='text-white'>
  pandling text
</h1>
        </div>

       </div> 
       <table className="table-auto w-full overflow-x-auto bg-white">
  {selectedOption === 'Competition' && (
    <thead className="grid grid-cols-12 items-center bg-white">
      <div className="col-span-9  flex">
        {/* <p className="text-white py-1 text-[16px] font-[600]">Matched: 4161.36</p> */}
      </div>
      <div className="col-span-3 flex  justify-start items-center">
        <p style={{ width: '50px', height: '40px' }} className="text-white px-1 ml-[25px] text-center py-2 border border-zinc-50 w-12 bg-[#98D4FF] text-[13px] uppercase font-[600]">
          No
        </p>
        <p style={{ width: '50px', height: '40px' }} className="text-white px-3 py-2 text-center border border-zinc-50 w-12 bg-[#FFC3D0] text-[13px] uppercase font-[600]">
          Yes
        </p>
      </div>
    </thead>
  )}

  <tbody className="bg-white">
    {tableData.map((row, index) => (
      <tr key={index} className="bg-white flex flex-wrap sm:flex-nowrap md:flex-nowrap">
        <td className="border min-w-[320px] max-w-full flex-grow p-[5px] flex flex-col">
          <div className="flex items-center justify-between h-full w-full">
            <div>
              <div className="flex items-center">
                <p className="pr-1 text-[11px] font-[400] font-poppins">{row.date}</p>
                <p className="pr-1 text-[11px] font-[400] font-poppins">{row.time}</p>
                <div className="bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400">
                  <p className="h-2 w-2"></p>
                </div>
              </div>
              <p className="pr-1 text-[13px] font-[600] font-poppins">{row.text}</p>
            </div>
          </div>
        </td>
        {row.values.map((value, i) => (
          <td
            key={i}
            className={`border text-center flex justify-center items-center ${i % 2 === 0 ? 'bg-tablecolor-blue' : 'bg-tableColor-pink'}`}
            style={{ width: '50px', height: '50px' }} // Set your desired width and height here
          >
            {value}
          </td>
        ))}
      </tr>
    ))}
  </tbody>
  <div className='flex justify-start space-x-1 items-center lg:px-2'>
  <MdForwardToInbox className='text-[11px] font-[400] text-red-700' />
  <h1 className='text-[11px] font-[400] text-red-700'> Essex v Worcestershire Match Bets Started In Our Exchange......</h1>
  </div>
  
</table>

 
<div className=" w-[100%] p-2 bg-custom-yellow-background mt-[2px] mx-1 mr-1 lg:mx-0">
    <div className="flex justify-between">
      <div className="flex space-x-1 items-center">
        <p className="text-[12px] lg:text-[14px] font-[600] font-poppins uppercase text-black">
        Fancy
        </p>
      </div>
     
    </div>
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
           
        </div>
        <div>

      <table className="table-auto min-w-full">
       {selectedOption === 'Competition' && (
       <thead className='grid grid-cols-12 items-center bg-white'>
       <div className='col-span-8 flex'>
       </div>
       
     
       <div className='col-span-3 flex  justify-center items-center '>
         <p className="text-white px-1 ml-[25px]  text-center py-2 border border-zinc-50 w-12 bg-[#98D4FF]  text-[13px] uppercase font-[600]">No</p>
         <p className="text-white  px-3  py-2 text-center border border-zinc-50 w-12 bg-[#FFC3D0] text-[13px] uppercase font-[600]">Yes</p>
       </div>
     </thead>
      )}

        <tbody className="bg-white">
          {Array.from({ length: 3 }).map((_, index) => (
            <tr key={index} className="bg-white flex flex-wrap sm:flex-nowrap md:flex-nowrap">
              <td className="border min-w-[320px] max-w-full flex-grow p-[5px] flex flex-col">
                <div className="flex items-center justify-between h-full w-full">
                  <div>
                    <div className="flex items-center">
                      <p className="pr-1 text-[11px] font-[400] font-poppins">{currentDateTime.toLocaleDateString()}</p>
                      <p className="pr-1 text-[11px] font-[400] font-poppins">{currentDateTime.toLocaleTimeString()}</p>
                      <div className="bg-green-400 rounded-full flex justify-center items-center ml-1 text-green-400">
                        <p className="h-2 w-2"></p>
                      </div>
                    </div>
                    <p className="pr-1 text-[13px] font-[600] font-poppins">{tabs[activeTab].content}</p>
                  </div>
                </div>
              </td>
              <td className="border text-center p-2 px-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.59</td>
              <td className="border text-center p-2 px-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.57</td>
              <td className="border text-center p-2 px-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.15</td>
              <td className="border text-center p-2 px-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.12</td>
              <td className="border text-center p-2 px-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">19.5</td>
              <td className="border text-center p-2 px-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">20.1</td>
            </tr>
          ))}
        </tbody>
      </table>
     
     
    </div>


  </div>
  <div class="col-span-12 lg:block lg:col-span-4 xl:col-span-3 px-1 lg:px-0 ">
   <Matches/>
  </div>
</div>


        
   
    </>
  );
}

export default Multimarket;