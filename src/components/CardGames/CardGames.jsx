import React,{useState} from 'react'
import {images_card_game} from '../../data/data'
import Modal from "../../components/Model/Models"

function CardGames() {
    const [showModal, setShowModal] = useState(false);
    const [formType, setFormType] = useState('login'); // 'login' or 'register'
  
    const handleOpenModal = (type) => {
      setFormType(type);
      setShowModal(true);
    };
  
    const handleCloseModal = () => setShowModal(false);
  return (
    <div> <div className='flex justify-center mt-2 lg:mt-16 items-center'>
    <p className='text-[20px] sm:text-[20px] md:text-[30px] lg:text-[30px] pt-4  text-white capitalize font-ubuntu font-[500]'>Card Games</p>
</div>
<div className=' flex -mt-1 justify-center '>
<div className='border-b-2 w-24 border-yellow-400'></div>
</div>
<div className="mt-7  px-1 sm:px-2  lg:px-24">
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-6 lg:grid-cols-8 gap-1">
        {images_card_game.map((image, index) => (
            <div key={index} className="relative">
                <img
                onClick={() => handleOpenModal('login')}
                    src={image.image_game}
                    alt={`Image ${index + 1}`}
                    className="w-full h-auto object-cover"
                />
                <div className='bg-custom-yellow-background text-center py-1'>
                    <p className='text-[15px] font-[600] font-ubuntu text-customTextColor-dark capitalize'>{image.label}</p>
                </div>
            </div>
        ))}
    </div>
</div>
<Modal showModal={showModal} handleClose={handleCloseModal} formType={formType} />
</div>
  )
}

export default CardGames