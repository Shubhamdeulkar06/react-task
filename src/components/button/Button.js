import React from "react";
import RightArrow from "../../assets/images/icons/right-arrow.svg";

const Button = () => {
  return (
    <button
      type="button"
      className="contact-btn flex items-center justify-center bg-white border border-black text-black px-4 py-2 rounded-md"
    >
      Contact us <img src={RightArrow} alt="Contact us" className="ml-3" />
    </button>
  );
};

export default Button;
