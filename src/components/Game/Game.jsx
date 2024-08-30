import React from 'react';
import { images } from "../../data/data";

function Game() {
    return (
        <>
            <div className='flex justify-center sm:mt-2 lg:mt-6  items-center'>
                <p className= 'text-[20px] sm:text-[20px] md:text-[30px] lg:text-[30px]  pt-4  text-white uppercase font-ubuntu font-[600]'>Games</p>
            </div>
            <div className=' flex -mt-1 justify-center '>
                <div className='border-b w-14 sm:w-14 md:w-16 lg:w-24 border-yellow-400'></div>
            </div>
            <div className="mt-7 px-1 sm:px-2  lg:px-24">
                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1">
                    {images.map((image, index) => (
                        <div key={index} className="relative">
                            <img
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
        </>
    );
}

export default Game;
