import React, {useState} from 'react'
import logo from '../../assest/logo.png'
import { RxCross2 } from "react-icons/rx";
import {ModelData} from '../../data/data'
function Footer() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="bg-footer-bg-color  px-1 lg:px-20">
  <div className="grid sm:grid-cols-1 lg:grid-cols-5 pt-10 lg:pt-20 gap-4  ">
    <div className=" flex  justify-center">
    <img src={logo} className='w-[500px] h-[145px]' alt="logo" />
    </div>
    <div className="flex justify-center   text-center">
      <div className=''>
      <p className='text-[#DFB849] text-[16px]  font-[700] uppercase font-poppins '>Menu</p>
      <div className=' text-center flex justify-center items-center '>
        <div className='border-[#DFB849] border-b  w-12 mb-0'></div>
      </div>
      <p className='text-white cursor-pointer  text-[13.6px] font-[400] font-poppins'>About Us</p>
      <p  className='text-white cursor-pointer text-[13.6px] font-[400] font-poppins'>Privacy Policy</p>
      <p  className='text-white cursor-pointer  text-[13.6px] font-[400] font-poppins'>Rules</p>
      </div>
     
    </div>
    <div className="flex justify-center   text-center">
      <div className=''>
      <p className='text-[#DFB849] text-[16px] cursor-pointer font-[700] uppercase font-poppins '>Game Therapy</p>
      <div className=' text-center flex justify-center items-center '>
        <div className='border-[#DFB849] border-b  w-32'></div>
      </div>
      <div className='flex   mt-0.5'>
      
      
   
   <img    onClick={openModal} src="https://parker777.io/assets/img/webfiles/18-plus-color-footer.png" alt=" logo" className=' w-12 h-12 my-1   cursor-pointer '/> 
   <a href="https://www.gamcare.org.uk" target="_blank" rel="noopener noreferrer">
        <img
          src="https://parker777.io/assets/img/webfiles/gamecare.png"
          alt="GamCare logo"
          className="my-1 w-12 h-12 cursor-pointer"
        />
      </a>
      <a href="https://www.gamblingtherapy.org/" target="_blank" rel="noopener noreferrer">
        <img
          src="https://parker777.io/assets/img/webfiles/gt.png"
          alt="Gambling Therapy logo"
          className="my-1 w-12 h-12 cursor-pointer"
        />
      </a>
      </div>
      
      </div>
     
    </div>
    <div className="flex justify-center   text-center">
      <div className=''>
      <p className='text-[#DFB849] cursor-pointer text-[16px] font-[700] uppercase font-poppins '>Scan QR</p>
      <div className=' text-center flex justify-center items-center '>
        <div className='border-[#DFB849] border-b  w-20'></div>
      </div> 
      <div className='flex justify-center cursor-pointer items-center mt-0.5'>
      <img src="https://parker777.io/assets/img/parker777io/qr-code.png" alt=" logo" className='text-white w-[124px] lg:w-1/2 h-1/2 '/>
      </div>
     
      </div>
    </div>
    <div className=" justify-center items-center">
      <div className='flex  justify-center items-center'>
      <img src="https://parker777.io/assets/img/webfiles/ssl.png" alt="rescuse"/>
      </div>
      
      <p className='text-white text-center  text-[13.6px] font-[700] font-poppins'>100% SAFE</p>
      <p  className='text-white text-center  text-[13.6px] font-[400] font-poppins'>Protected connection and encrypted data.</p>
     
    </div>
    
  </div>
  <hr className='mt-1 border-t border-gray-900'/>
  <div>
<p className='text-center text-[15px] font-poppins capitalize font-[400] text-white py-10 items-start'>
© Copyright 2020-2021 <span className='font-[700]'>Parker777.</span>  All rights reserved
</p>
  </div>
  {isModalOpen && (
        <div className="fixed inset-0  flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-[#F2EDF3] w-[500px] h-[450px] rounded-lg px-[1px] shadow-lg">
            <div className='bg-custom-yellow-background py-3 px-5 flex mt-[1px] justify-between items-center rounded-lg'>
            <h2 className="text-[18.8px] flex text-gray-900 font-[500] font-ubuntu">18 Plus Rules</h2>
             <RxCross2 onClick={closeModal} className="  text-[25px] font-[800] rounded text-gray-900"/>
            </div>
            <div className='py-7 px-5'>
            <ul className="list-disc ml-5 font-[400] text-[13px] font-poppins">
            {ModelData.map((point, index) => (
        <li key={index} className="mb-1">
          {index === ModelData.length - 1 ? (
            <>
              {point.replace("with a link.", "")}
              <a href="https://www.cyberpatrol.com/" target="_blank" rel="noopener noreferrer" className="text-blue-500 ml-1 underline">
              cyberpatrol.com
              </a>
            </>
          ) : (
            point
          )}
        </li>
      ))}
    </ul>
            </div>
            
          </div>
        </div>
      )}

</div>
  )
}

export default Footer