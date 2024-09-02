import React from 'react'
import { IoMdPerson } from "react-icons/io";
import profile  from '../../image/profile.png'

function Profile() {
  return (
 
    <div className="w-[100%]  justify-between mb-[53px] px-1">
    <div className="flex space-x-1 items-center px-2 bg-custom-yellow-background py-1 w-full">
        <IoMdPerson />
        <p>Profile</p>
    </div>
    <div className='bg-white'>
    <div class="grid grid-cols-12 gap-4">
  <div class="col-span-12 md:col-span-3 justify-center items-center  p-4">
    <div className='flex justify-center items-center'>
    <img src={profile} alt="Image" class="w-32 h-32 rounded-full object-cover"/>
    </div>
    <h1 className='text-center  mt-2 text-[16px] font-[500] font-poppins'>parkar</h1>

  
  </div>
  
  <div class="col-span-12 md:col-span-9 py-2 px-2">
  <div class="border-b grid grid-cols-12 gap-2 py-1">
    <div class="col-span-5 lg:col-span-2">
      <p class="font-[600] text-[14px] font-poppins">User Name:</p>
    </div>
    <div class="col-span-7 lg:col-span-10">
      <p>Parkerexch</p>
    </div>
  </div>
  
  <div class="border-b grid grid-cols-12 gap-2 py-1">
    <div class="col-span-5 lg:col-span-2">
      <p class="font-[600] text-[14px] font-poppins">Balance:</p>
    </div>
    <div class="col-span-7 lg:col-span-10">
      <p class=" font-[400] text-[14px] font-poppins"> ₹ 0</p>
    </div>
  </div>
  
  <div class="border-b grid grid-cols-12 gap-2 py-1">
    <div class="col-span-5 lg:col-span-2">
      <p class="font-[600] text-[14px] font-poppins">Exposure:</p>
    </div>
    <div class="col-span-7 lg:col-span-10">
      <p class=" font-[400] text-[14px] font-poppins">₹ 0.00</p>
    </div>
  </div>
  
  <div class="border-b grid grid-cols-12 gap-2 py-1">
    <div class="col-span-5 lg:col-span-2">
      <p class="font-[600] text-[14px] font-poppins">My Wallet:</p>
    </div>
    <div class="col-span-7 lg:col-span-10">
      <p class=" font-[400] text-[14px] font-poppins"> ₹ 210</p>
    </div>
  </div>
  
  <div class="border-b grid grid-cols-12 gap-2 py-1">
    <div class="col-span-5 lg:col-span-2">
      <p class="font-[600] text-[14px] font-poppins">Profit:</p>
    </div>
    <div class="col-span-7 lg:col-span-10">
      <p class="text-red-700 font-[400] text-[14px] font-poppins"> ₹ -210</p>
    </div>
  </div>
</div>


</div>
    </div>
</div>

  )
}

export default Profile