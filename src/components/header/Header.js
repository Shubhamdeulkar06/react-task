import React, { useState } from "react";
import Button from "../button/Button";
import useWindowSize from "../../hooks/useWindowSize";
import hamburgerButton from "../../assets/images/icons/bm-burger-bars.png";
import crossIcon from "../../assets/images/icons/icons8-close-50.png";

const Header = () => {
  const windowSize = useWindowSize();
  const isWideScreen = windowSize.width >= 992;

  return (
    <div className="flex flex-row-reverse justify-between items-center m-4 p-5 md:flex-row bg-white ">
      {isWideScreen ? <WideScreenMenu /> : <MobileMenu />}
    </div>
  );
};

const WideScreenMenu = () => (
  <>
    <ul className="flex space-x-4">
      <li>
        <a href="#about">About</a>
      </li>
      <li>
        <a href="#news">News</a>
      </li>
      <li>
        <a href="#services">Services</a>
      </li>
      <li>
        <a href="#ourteam">Our Team</a>
      </li>
      <li>
        <a href="#make-enquiry">Make Enquiry</a>
      </li>
    </ul>
    <Button />
  </>
);

const MobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center justify-between w-full overflow-hidden ">
      <Button />
      <button onClick={toggleMenu} className=" w-[22px] h-[15px] z-30">
        <img
          src={isMenuOpen ? crossIcon : hamburgerButton}
          alt="Menu"
          className=""
        />
      </button>
      {isMenuOpen && <MenuList />}
    </div>
  );
};

const MenuList = () => (
  <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-white to-gray-200  z-20">
    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
      <a href="#about">About</a>
    </li>
    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
      <a href="#news">News</a>
    </li>
    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
      <a href="#services">Services</a>
    </li>
    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
      <a href="#ourteam">Our Team</a>
    </li>
    <li className="px-4 cursor-pointer capitalize py-6 text-4xl">
      <a href="#make-enquiry">Make Enquiry</a>
    </li>
  </ul>
);

export default Header;
