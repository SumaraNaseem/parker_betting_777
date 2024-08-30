import React from 'react'
const items = [
  {
    id: 1,
    src: "https://parker777.io/assets/img/andar-bahar.jpg",
    alt: "Andar Bahar",
  },
  {
    id: 2,
    src: "https://parker777.io/assets/img/andar-bahar.jpg",
    alt: "Andar Bahar",
  },
  {
    id: 3,
    src: "https://parker777.io/assets/img/andar-bahar.jpg",
    alt: "Andar Bahar",
  },
];
function RightSideCard() {
  return (
    <div className='space-y-1 overflow-hidden'>
   
   {items.map((item, index) => (
  <div key={item.id} className="relative w-full overflow-hidden">
    <div className="relative group">
      <div className="transition-transform duration-300 ease-in-out group-hover:scale-110">
        <img
          src={item.src}
          alt={item.alt}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
        <button className="p-1 rounded-sm border-2 text-white border-gray-100 shadow-lg transition-shadow duration-300 ease-in-out hover:shadow-2xl">
          Play
        </button>
      </div>
    </div>
  </div>
))}
    </div>
 
  
  
  )
}

export default RightSideCard