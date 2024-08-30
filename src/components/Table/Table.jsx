import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Table({ selectedOption }) {
  const navigate = useNavigate();
    const [currentDateTime, setCurrentDateTime] = useState(new Date());
    const handleClick = () => {
      navigate('/events'); // Replace with your target route
    };
    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentDateTime(new Date());
        }, 1000); // Update every second
    
        return () => clearInterval(interval); // Cleanup on unmount
      }, []);
  return (
    <>
    
  <div class="w-full overflow-x-auto px-1 lg:px-0">
          <div class="w-full overflow-x-auto">
          <div className='lg:hidden sm:block'>
                <div className='flex justify-start '>
                  <p class="text-white text-[15px] font-[600]"> Compitation</p>
                </div>
              </div>
              <div className='hidden lg:block w-full'>
                <div className='flex justify-end items-center  '>
                  <p class="text-white text-[15px] font-[600] pr-[90px] text-left"> 1 </p>
                  <p class="text-white  text-[15px] font-[600] pr-[72px]  text-left"> X </p>
                  <p class="text-white text-[15px] font-[600] pr-8  text-left"> 2</p>
                </div>
              </div>
            <table className="table-auto min-w-full">
            {selectedOption === 'Competition' && (
        <thead className='flex '>
                <div className='flex justify-start  '>
                  <p class="text-white  py-1 text-[16px] font-[600]"> County Championship Division 1</p>
                </div>
              </thead>
            )}

        <tbody className="bg-white">
          {Array.from({ length: 1 }).map((_, index) => (
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
                    <p  onClick={handleClick} className="pr-1 cursor-pointer text-[13px] font-[600]  font-poppins">Pakistan v Bangladesh</p>
                  </div>
                  <div className="flex space-x-2 justify-end">
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/bm.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/tv.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/fancy-icon.svg" alt="b logo" />
                  </div>
                </div>
              </td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.59</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.57</td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.15</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.2</td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">19.5</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">20</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table-auto min-w-full">
       {selectedOption === 'Competition' && (
        <thead className='flex'>
                <div className='flex justify-start '>
                  <p class="text-white  py-1 text-[16px] font-[600]"> General Competition</p>
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
                    <p className="pr-1 text-[13px] font-[600] font-poppins">Pakistan v Bangladesh</p>
                  </div>
                  <div className="flex space-x-2 justify-end">
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/bm.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/tv.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/fancy-icon.svg" alt="b logo" />
                  </div>
                </div>
              </td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.59</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.57</td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.15</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.2</td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">19.5</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">20</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table-auto min-w-full">
       {selectedOption === 'Competition' && (
        <thead className='flex'>
                <div className='flex justify-start '>
                  <p class="text-white  py-1 text-[16px] font-[600]"> International Twenty20 Matches

</p>
                </div>
              </thead>
      )}

        <tbody className="bg-white">
          {Array.from({ length: 2 }).map((_, index) => (
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
                    <p className="pr-1 text-[13px] font-[600] font-poppins">Pakistan v Bangladesh</p>
                  </div>
                  <div className="flex space-x-2 justify-end">
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/bm.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/tv.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/fancy-icon.svg" alt="b logo" />
                  </div>
                </div>
              </td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.59</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.57</td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.15</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.2</td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">19.5</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">20</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table-auto min-w-full">
       {selectedOption === 'Competition' && (
        <thead className='flex'>
                <div className='flex justify-start '>
                  <p class="text-white  py-1 text-[16px] font-[600]"> Max60

</p>
                </div>
              </thead>)}

        <tbody className="bg-white">
          {Array.from({ length: 1 }).map((_, index) => (
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
                    <p className="pr-1 text-[13px] font-[600] font-poppins">Pakistan v Bangladesh</p>
                  </div>
                  <div className="flex space-x-2 justify-end">
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/bm.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/tv.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/fancy-icon.svg" alt="b logo" />
                  </div>
                </div>
              </td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.59</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.57</td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.15</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.2</td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">19.5</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">20</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table-auto min-w-full">
       {selectedOption === 'Competition' && (
        <thead className='flex'>
                <div className='flex justify-start '>
                  <p class="text-white  py-1 text-[16px] font-[600]">Women's Caribbean Premier League</p>
                </div>
              </thead>)}

        <tbody className="bg-white">
          {Array.from({ length: 1 }).map((_, index) => (
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
                    <p className="pr-1 text-[13px] font-[600] font-poppins">Pakistan v Bangladesh</p>
                  </div>
                  <div className="flex space-x-2 justify-end">
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/bm.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/tv.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/fancy-icon.svg" alt="b logo" />
                  </div>
                </div>
              </td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.59</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.57</td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.15</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.2</td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">19.5</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">20</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table-auto min-w-full">
       {selectedOption === 'Competition' && (
        <thead className='flex'>
                <div className='flex justify-start '>
                  <p class="text-white  py-1 text-[16px] font-[600]"> County Championship Division 1</p>
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
                    <p className="pr-1 text-[13px] font-[600] font-poppins">Pakistan v Bangladesh</p>
                  </div>
                  <div className="flex space-x-2 justify-end">
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/bm.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/tv.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/fancy-icon.svg" alt="b logo" />
                  </div>
                </div>
              </td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.59</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.57</td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.15</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.2</td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">19.5</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">20</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table className="table-auto min-w-full">
       {selectedOption === 'Competition' && (
        <thead className='flex'>
                <div className='flex justify-start '>
                  <p class="text-white  py-1 text-[16px] font-[600]"> Women's Caribbean Premier League</p>
                </div>
              </thead>)}

        <tbody className="bg-white">
          {Array.from({ length: 1 }).map((_, index) => (
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
                    <p className="pr-1 text-[13px] font-[600] font-poppins">Pakistan v Bangladesh</p>
                  </div>
                  <div className="flex space-x-2 justify-end">
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/bm.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/icons/tv.svg" alt="b logo" />
                    <img className="w-5 h-5" src="https://parker777.io/assets/img/fancy-icon.svg" alt="b logo" />
                  </div>
                </div>
              </td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.59</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">1.57</td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.15</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">3.2</td>
              <td className="border text-center p-2 bg-tablecolor-blue sm:w-fit sm:inline-block max-w-[100%] w-1/6">19.5</td>
              <td className="border text-center p-2 bg-tableColor-pink sm:w-fit sm:inline-block max-w-[100%] w-1/6">20</td>
            </tr>
          ))}
        </tbody>
      </table>
        
          </div>
        </div>
        
        </>
   
  )
}

export default Table