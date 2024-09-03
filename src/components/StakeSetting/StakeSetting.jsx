import React, { useState } from 'react';
import { IoMdPerson } from "react-icons/io";
import {initialAmounts} from '../../data/data'


function StakeSetting() {
    
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
        <IoMdPerson />
        <p>Stake Setting</p>
      </div>
      <div className='bg-white py-7 px-2 flex justify-center items-center min-h-screen'>
      {/* Centered Div with Border */}
      <div className='border border-gray-300 p-2 w-full max-w-lg'>
        <div className='grid grid-cols-2 my-1 bg-sidebar-bg-color'>
          {[...Array(1)].map((_, index) => (
            <React.Fragment key={index}>
              <div className='px-2 py-3 text-center text-[14px] uppercase  font-[900] font-ubuntu bg-sidebar-bg-color text-white '>
              Price Label
              </div>
              <div className='px-2 py-3  text-center text-[14px] uppercase font-[900] font-ubuntu  bg-sidebar-bg-color text-white '>
              Price Value
              </div>
            </React.Fragment>
          ))}
        </div>
        
        <div className='grid grid-cols-2 gap-1'>
          {amounts.map((amount, index) => (
            <React.Fragment key={index}>
              <input
                type="number"
                name={`number-${index * 2}`}
                value={amount}
                onChange={(e) => handleChange(index, parseFloat(e.target.value) || 0)}
                placeholder=''
                className='px-2 py-4 border text-center text-[14px] uppercase font-[900] font-ubuntu rounded-lg bg-sidebar-bg-color text-white border-gray-200'
              />
              <input
                type="number"
                name={`number-${index * 2 + 1}`}
                value={amount}
                onChange={(e) => handleChange(index, parseFloat(e.target.value) || 0)}
                placeholder=''
                className='px-2 py-4 border text-center text-[14px] uppercase font-[900] font-ubuntu rounded-lg bg-sidebar-bg-color text-white border-gray-200'
              />
            </React.Fragment>
          ))}
        </div>
        <div className='px-2 py-3 mt-1 text-center text-[16px] uppercase font-[700] font-ubuntu  bg-[#3E4B5B] text-white '>
              Submit
              </div>
      </div>
    </div>
    </div>
  );
}

export default StakeSetting;
