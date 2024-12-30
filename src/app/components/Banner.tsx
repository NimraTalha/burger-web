import React from 'react';

const Banner = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-black to-gray-600 font-sans px-6 py-12 mb-7">
      <div className="absolute inset-0 opacity-30">
        <img
          src="./images/background.jpg"
          alt="Delicious Burger"
          className="object-cover w-full h-full"
        />
      </div>
     <div className="relative z-10 container mx-auto flex flex-col justify-center items-center text-center text-white">
      <h2 className="text-white sm:text-5xl font-bold mb-4"> 
        Discover Our Menu
        </h2>
        <p className="text-white text-lg text-center mb-6 max-w-xl">
          Shop Now For Exclusive Burger Discount!
        </p>
        <button type="button"
         className="bg-yellow-400 text-white text-sm font-semibold rounded-full py-3 px-6 shadow-lg hover:bg-lime-400 transition duration-300">Exciting Deals at 12:am!</button>
      </div>
    </div>
  );
};

export default Banner;
