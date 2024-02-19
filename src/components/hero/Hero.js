import React, { useState, useEffect } from "react";
import Slide1 from "../../assets/images/hero/slide-01.jpg";
import Slide2 from "../../assets/images/hero/pexels-piccinng-3075993.jpg";
import Slide3 from "../../assets/images/hero/pexels-rahmad-himawan-20187061.jpg";

// import Header from "../header/Header";
import Header from "../header/Header";

const Hero = () => {
  const slides = [Slide1, Slide2, Slide3];
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [currentBtnImageIndex, setCurrentBtnImageIndex] = useState(1); // Initial button image
  const [animationKey, setAnimationKey] = useState(0); // Key for animation restart

  useEffect(() => {
    const interval = setInterval(() => {
      // Change the current slide and button image indexes cyclically
      setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setCurrentBtnImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 7000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [slides.length]);

  const handleClick = () => {
    // Change the current slide and button image indexes when the button is clicked
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setCurrentBtnImageIndex((prevIndex) => (prevIndex + 1) % slides.length);
    // Increment the animation key to force restart of animation
    setAnimationKey((prevKey) => prevKey + 1);
  };

  return (
    <div className="w-full h-screen relative">
      <img
        src={slides[currentSlideIndex]}
        alt=""
        className="object-cover w-full h-full transition-transform duration-1000 transform scale-100"
      />
      <div className="absolute w-full top-0">
        <Header />
      </div>
      <div className="absolute top-32 md:top-52 md:left-24 lg:top-52 lg:left-28 md:w-1/2 text-[#EEF4F9] p-5 md:p-0 float-in-from-down">
        <h2 className="text-[16px] mb-3">Welcome To TenTwenty Farms</h2>
        <h1 className="text-3xl md:text-4xl lg:text-6xl leading-tight font-normal ">
          From Our Farms
        </h1>
        <h1 className="text-3xl md:text-4xl  lg:text-6xl font-normal  ">
          To Your Hands
        </h1>
      </div>
      <div className="flex">
        <div className="absolute bottom-20 md:left-24 md:bottom-20 lg:left-28 lg:bottom-10 w-32 h-32 p-5 flex justify-center items-center m-5 md:p-0 border-[#EEF4F] border-opacity-0 border-solid border">
          <button
            className="relative flex justify-center items-center z-10"
            onClick={handleClick}
          >
            <img
              src={slides[currentBtnImageIndex]}
              alt=""
              className="w-[93px] h-[93px]"
            />
            <span className="absolute text-[#EEF4F9] text-[16px]">Next</span>
          </button>
          <div
            key={animationKey} // Add key to force re-render and restart animation
            className="w-full h-full absolute top-0 left-0 border-[#EEF4F] border-opacity-0 border-solid  border-[8px]"
            style={{ animation: "fillBorder 8s infinite" }}
          ></div>
        </div>
        <div className="absolute bottom-36  left-44 md:bottom-40 md:left-80 lg:bottom-28 lg:left-96 z-20 flex gap-4 items-center text-[#EEF4F9]">
          <span>0{currentBtnImageIndex + 1}</span>
          <div className="border h-0 border-[#EEF4F] w-16 md:w-32 "></div>
          <span>0{slides.length}</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
