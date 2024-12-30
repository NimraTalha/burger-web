import React from 'react';

const Progressor = () => {
  return (
    <div className="max-w-screen-lg w-full mx-auto mt-10">
      <div className="flex items-center">
        {/* Step 1 */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">1</span>
            </div>
            <div className="flex-grow h-1 bg-lime-400 rounded-lg"></div>
          </div>
          <div className="text-center mt-2">
            <h6 className="text-base font-bold text-yellow-400">Step 1: Choose Your Dish</h6>
            <p className="text-sm text-white">Explore our menu and select your favorite dish</p>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">2</span>
            </div>
            <div className="flex-grow h-1 bg-lime-400 rounded-lg"></div>
          </div>
          <div className="text-center mt-2">
            <h6 className="text-base font-bold text-yellow-400">Step 2: Customize Your Order</h6>
            <p className="text-sm text-white">Add extra toppings and customize as you like</p>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col items-center w-full">
          <div className="flex items-center w-full">
            <div className="w-8 h-8 bg-yellow-400 flex items-center justify-center rounded-full">
              <span className="text-base text-black font-bold">3</span>
            </div>
            <div className="flex-grow h-1 bg-lime-400 rounded-lg"></div>
          </div>
          <div className="text-center mt-2">
            <h6 className="text-base font-bold text-yellow-400">Step 3: Enjoy Your Meal</h6>
            <p className="text-sm text-white">Relax and savor your delicious meal</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Progressor;
