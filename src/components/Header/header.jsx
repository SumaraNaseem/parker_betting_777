import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Next Arrow Component
const NextArrow = ({ onClick }) => {
  return (
    <div
      className="absolute right-14 top-1/2 transform -translate-y-1/3  p-2 rounded-full shadow-md cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-gray-500 sm:w-6 sm:h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );
};

// Custom Prev Arrow Component
const PrevArrow = ({ onClick }) => {
  return (
    <div
      className="absolute left-14 top-1/2 transform -translate-y-1/3  p-2 rounded-full shadow-md cursor-pointer z-10"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-8 h-8 text-gray-500 sm:w-6 sm:h-6"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </div>
  );
};

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full max-w-full">
      <Slider {...settings}>
        <div>
          <img
            src="https://static-content-banners.s3.ap-south-1.amazonaws.com/parker/desktop/bnr1-min.png"
            alt="Slide 1"
            className="w-full h-auto"
          />
        </div>
        <div>
          <img
            src="https://static-content-banners.s3.ap-south-1.amazonaws.com/parker/desktop/bnr4-min.png"
            alt="Slide 2"
            className="w-full h-auto"
          />
        </div>
        <div>
          <img
            src="https://static-content-banners.s3.ap-south-1.amazonaws.com/parker/desktop/bnr1-min.png"
            alt="Slide 3"
            className="w-full h-auto"
          />
        </div>
        <div>
          <img
            src="https://static-content-banners.s3.ap-south-1.amazonaws.com/parker/desktop/bnr2-min.png"
            alt="Slide 4"
            className="w-full h-auto"
          />
        </div>
        <div>
          <img
            src="https://static-content-banners.s3.ap-south-1.amazonaws.com/parker/desktop/bnr5-min.png"
            alt="Slide 5"
            className="w-full h-auto"
          />
        </div>
        <div>
          <img
            src="https://static-content-banners.s3.ap-south-1.amazonaws.com/parker/desktop/bnr3-min.png"
            alt="Slide 6"
            className="w-full h-auto"
          />
        </div>
      </Slider>
    </div>
  );
};

export default Carousel;
