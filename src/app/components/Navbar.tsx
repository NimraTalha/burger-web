import React from 'react';
import { FaHamburger, FaSearch } from "react-icons/fa";
import { LiaOpencart } from "react-icons/lia";

const Navbar = () => {
  return (
    <div>
      <div className="grid xl:grid-cols-1 grid-cols-1">
        <div className="p-5">
          <div className="py-3 px-3 rounded-xl border w-full bg-gradient-to-r from-black to-gray-500">
            <div className="flex justify-between items-center">
              {/* Left Section */}
              <div className="flex items-center gap-2">
                {/* Burger Icon */}
                <FaHamburger className="w-6 h-6 text-yellow-400 hover:text-lime-400" />
                {/* Search Bar */}
                <div style={{ position: 'relative' }}>
                  <input
                    className="rounded-3xl py-3 outline-none text-xs w-[350px] pr-10 hidden lg:block md:block"
                    placeholder="Search Burger From Menu"
                  />
                  <FaSearch className="w-5 h-5 text-lime-400 absolute right-3 top-1/2 transform -translate-y-1/2 hidden lg:block md:block" />
                </div>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-2">
                {/* Cart Icon */}
                <LiaOpencart className="w-8 h-8 text-yellow-400    hover:text-lime-400 hidden lg:block md:block font-bold" />
                <p className="text-lg font-bold text-white">
                  Order now and get it within{" "}
                  <span className="text-lime-400 font-bold">25 minutes</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
