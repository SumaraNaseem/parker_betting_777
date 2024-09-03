import React, { useState } from 'react';
import { IoIosNotificationsOff } from "react-icons/io";
import {initialAmounts ,tabContent} from '../../data/data'
const tabLabels = [
 
    { name: "Cricket"},
    { name: "Football"},
    { name: "Tennis"},
    { name: "Live Casino"},
    { name: "Cricket Casino"},
    { name: "Election"},
    { name: "Binary"},
    { name: "General"},
    { name: "100 Ball Rules Women"},

];




function Rules() {
    const [activeTab, setActiveTab] = useState(1);
  // State to manage input values
  const [amounts, setAmounts] = useState(initialAmounts);

  // Handle input change
  const handleChange = (index, newValue) => {
    const updatedAmounts = [...amounts];
    updatedAmounts[index] = newValue;
    setAmounts(updatedAmounts);
  };


  // Validation schema for Formik
 

  return (
    <div className="w-[100%] justify-between mb-[53px] px-1">
      <div className="flex space-x-1 items-center px-2 bg-custom-yellow-background py-1 w-full">
        <IoIosNotificationsOff />
        <p>Rules</p>
      </div>
      <div className='bg-white  px-2 overflow-scroll items-center '>
      <div className="flex border-b lg:justify-center sm:justify-start   border-gray-200">
      
        {tabLabels.map((label, index) => (
            <button
              key={index}
              className={`my-2 px-2 text-[14px] whitespace-nowrap font-[400] font-poppins border-[#F1F1F1] border-r-[1px] -mb-px text-sm ${
                activeTab === index + 1
                  ? 'bg-custom-yellow-background text-black hover:border border-gray-400'
                  : 'border-transparent text-gray-500'
              }`}
              onClick={() => setActiveTab(index + 1)}
            >
              {label.name}
            </button>
          ))}
    
        
      </div>
      <div className="px-2 bg-white my-2">
      
      {tabContent[activeTab - 1].map((item, index) => (
  <div key={index} className=''>
    <p className='text-[18.8px] font-[500] text-gray-700 font-ubuntu'>{item.category}</p>
    {item.rules.map((rule, ruleIndex) => (
      <p key={ruleIndex} className='text-[14px] font-[400] py-[2px]  px-1 font-poppins text-gray-700'>
        {`${ruleIndex + 1}. ${rule}`}
      </p>
    ))}
  </div>
))}
        
       
      </div>
    
    </div>
   
      
    </div>
  );
}

export default Rules;
