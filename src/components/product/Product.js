import React from "react";

const Product = () => {
  return (
    <div className="product-container float-in-from-down">
      <div className="flex flex-col justify-center items-center md:w-[29%] mx-10 md:mx-auto mt-16 md:mt-36 mb-8">
        <h1 className="text-3xl md:text-6xl leading-10 my-10">
          Quality Products
        </h1>
        <p className="text-center text-[#7A7777]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
};

export default Product;
