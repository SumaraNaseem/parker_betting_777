import React from 'react'

function Cards() {
  return (
    <div className="grid grid-cols-2 mt-2 px-1 lg:px-0 sm:grid-cols-2 md:Grid-col-2 lg:grid-cols-6 gap-1">
    {Array.from({ length: 42 }).map((_, index) => (
      <div key={index} className="">
        <img
          src="https://parker777.io/assets/img/casino1/aura-gaming-lobby.webp"
          alt={`Image ${index + 1}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div> 
  )
}

export default Cards