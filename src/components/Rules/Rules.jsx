import React, { useState } from 'react';
import { IoIosNotificationsOff } from "react-icons/io";
import {initialAmounts} from '../../data/data'
const TabContent = ({ activeTab }) => {
    switch (activeTab) {
      case 1:
        return <div>Content for Tab 1</div>;
      case 2:
        return <div>Content for Tab 2</div>;
      case 3:
        return <div>Content for Tab 3</div>;
      case 4:
        return <div>Content for Tab 4</div>;
      case 5:
        return <div>Content for Tab 5</div>;
      case 6:
        return <div>Content for Tab 6</div>;
      case 7:
        return <div>Content for Tab 7</div>;
      case 8:
        return <div>Content for Tab 8</div>;
      case 9:
        return <div>Content for Tab 9</div>;
      case 10:
        return <div>Content for Tab 10</div>;
      default:
        return <div>Select a tab</div>;
    }
  };

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
      <div className='bg-white py-7 px-2 flex justify-center items-center min-h-screen'>
      <div className="w-full  ">
      <div className="flex border-b border-gray-200">
        {[...Array(10)].map((_, index) => (
          <button
            key={index}
            className={`py-2 px-4 -mb-px font-medium text-sm border-b-2 ${
              activeTab === index + 1
                ? 'border-blue-500 text-blue-500'
                : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab(index + 1)}
          >
            Tab {index + 1}
          </button>
        ))}
      </div>
      <div className="p-4 bg-white border border-gray-200 rounded-lg mt-4">
        <TabContent activeTab={activeTab} />
      </div>
    </div>
      
    </div>
    </div>
  );
}

export default Rules;
