import React from 'react'
import { IoIosNotificationsOff } from "react-icons/io";


function ProfitLoss() {
    return (
        <div className="w-[100%] justify-between mb-[53px] px-1">
            <div className="flex space-x-1 items-center justify-between px-2 bg-custom-yellow-background py-1 w-full">
                <div className='flex items-center '>
                    <IoIosNotificationsOff />
                    <p>Rules</p>
                </div>
                <div>
                    <p className='text-[13.6px] font-extrabold font-poppins'>Total P/L : IR <span className='text-green-700'>0</span> </p>
                </div>

            </div>
            <div className='bg-white pt-3 pb-1 px-2'>
                <div className='max-w-[940px]  w-full'>
                    <div className='grid md:grid-cols-4  grid-cols-2 sm:gap-3 gap-1'>
                        <div className='w-full '>
                            <div className="relative">
                                <label htmlFor="date-input" className="block  text-[11.9px] font-[400] font-poppins text-gray-700">
                                    From Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full py-1 px-2 border rounded-md"
                                />
                                <span className="absolute top-5 inset-y-0 right-3 flex items-center pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8v8h12V8H4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div className="relative">
                                <label htmlFor="date-input" className="block text-[11.9px] font-[400] font-poppins text-gray-700">
                                    To Date
                                </label>
                                <input
                                    type="date"
                                    className="w-full px-2 py-1 border rounded-md"
                                />
                                <span className="absolute top-5 inset-y-0 right-3 flex items-center pointer-events-none">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-5 w-5 text-gray-400"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zM4 8v8h12V8H4z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </span>
                            </div>
                        </div>
                        <div className='w-full'>
                            <div>
                                <label htmlFor="date-input" className="block text-[11.9px] font-[400] font-poppins text-gray-700">
                                    Sport
                                </label>
                                <select className="w-full px-2  py-1 border rounded-md">

                                    <option value="option1">Option 1</option>
                                    <option value="option2">Option 2</option>
                                    <option value="option3">Option 3</option>
                                </select>
                            </div>
                        </div>
                        <div className='w-full'>
                            <button className="bg-[#00162D] uppercase text-white text-[13px] font-[400] font-poppins rounded-md mt-4 px-5 py-2 w-full">
                                get profit loss
                            </button>
                        </div>
                    </div>
                </div>

                <div className="overflow-x-auto">
     
    </div>


                {/* <div className="grid grid-cols-12 border border-gray-400 mt-3 px-2 text-white">
                    <div className="col-span-1 font-ubuntu text-[13px] font-[500] border-r border-gray-400 text-black ">No</div>
                    <div className="col-span-1 font-ubuntu text-[13px] font-[500] border-r border-gray-400 text-black px-2 ">Date</div>
                    <div className="col-span-2 font-ubuntu text-[13px] font-[500] border-r border-gray-400 text-black px-2">Event</div>
                    <div className="col-span-3 font-ubuntu text-[13px] font-[500] border-r border-gray-400 text-black px-2 ">Comm In</div>
                    <div className="col-span-2 font-ubuntu text-[13px] font-[500] border-r border-gray-400 text-black px-2 ">Comm out</div>
                    <div className="col-span-2 font-ubuntu text-[13px] font-[500] border-r border-gray-400 text-black px-2 ">Amount</div>
                    <div className="col-span-1 font-ubuntu text-[13px] font-[500] text-black  px-2">Info</div>
                </div> */}


                {/* <div className="grid grid-cols-12 bg-[#F2F2F2]   px-2 text-white">
  <div className="col-span-12 font-ubuntu text-[13px]  font-[500] border-r  text-black ">No Data Found</div>
 
</div> */}

            </div>
            {/* <div className='flex  max-w-full bg-white  items-center overflow-y-auto scrollbar-hidden  w-[300px] lg:justify-center lg:w-full '>
     <div className=" font-ubuntu text-[13px] font-[500] border-r border-gray-400 text-black ">No</div>
    <div className=" font-ubuntu text-[13px] font-[500] border-r border-gray-400 text-black ">No</div>
                    <div className=" font-ubuntu text-[13px] font-[500] border-r border-gray-400 text-black px-2 ">Date</div>
                    <div className=" font-ubuntu text-[13px] font-[500] border-r border-gray-400 text-black px-2">Event</div>
                    <div className=" font-ubuntu text-[13px] font-[500] border-r border-gray-400 text-black px-2 ">Comm In</div>
                    <div className=" font-ubuntu text-[13px] font-[500] border-r border-gray-400 text-black px-2 ">Comm out</div>
                    <div className="font-ubuntu text-[13px] font-[500] border-r border-gray-400 text-black px-2 ">Amount</div>
                    <div className=" font-ubuntu text-[13px] font-[500] text-black  px-2">Info</div>
</div> */}
 <table className="border-b justify-start sm:w-[300px] lg:w-full   overflow-y-auto scrollbar-hidden border-gray-200">
      
      <thead className="bg-gray-50">
       <tr>
         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
           Header 1
         </th>
         <th className="font-ubuntu text-[13px] font-[500] border-r border-gray-300 text-black px-2">
           Header 1
         </th>
         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
           Header 1
         </th>
         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
           Header 1
         </th>
         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
           Header 2
         </th>
         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
           Header 3
         </th>
         <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ">
           Header 4
         </th>
       </tr>
     </thead> 
     <tbody className="bg-white divide-y divide-gray-200">
       <tr>
         <td className="px-6 py-4 whitespace-nowrap">Data 1</td>
         <td className="px-6 py-4 whitespace-nowrap">Data 2</td>
         <td className="px-6 py-4 whitespace-nowrap">Data 3</td>
         <td className="px-6 py-4 whitespace-nowrap">Data 1</td>
         <td className="px-6 py-4 whitespace-nowrap">Data 2</td>
         <td className="px-6 py-4 whitespace-nowrap">Data 3</td>
         <td className="px-6 py-4 whitespace-nowrap">Data 4</td>
       </tr>
     </tbody>
   </table> 
        </div>
    )
}

export default ProfitLoss