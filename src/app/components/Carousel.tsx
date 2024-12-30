import React from 'react';

const Carousel = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-black to-gray-600">
        <div className="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 h-full">
            {/* First Image */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-600 h-auto md:h-full flex flex-col">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="./images/burger-1.jpg"
                  alt="Classic Bite Burger"
                  className="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Classic Bite{" "}
                </h3>
              </a>
            </div>

            {/* Second Image */}
            <div className="col-span-2 sm:col-span-1 md:col-span-2 bg-gradient-to-r from-black to-gray-600">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="./images/chicken cheese.jpg"
                  alt="Chicken Cheese"
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <h2 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-0xl">
                  Chicken Cheese{" "}
                </h2>
              </a>
            </div>

            {/* Third Image */}
            <div className="bg-gradient-to-r from-black to-gray-600">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
              >
                <img
                  src="./images/beefcheese.jpg"
                  alt="Beef Burger"
                  className="h-80 w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <h2 className="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4">
                  Beef Burger{" "}
                </h2>
              </a>
            </div>

            {/* Fourth Image: Veggie Delight */}
            <div className="bg-gradient-to-r from-black to-gray-600 relative overflow-hidden rounded-lg shadow-lg">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden"
              >
                <img
                  src="./images/veggie.webp"
                  alt="Veggie Delight"
                  className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h2 className="z-10 text-xl font-medium text-white absolute bottom-4 left-4">
                  Veggie Delight{" "}
                </h2>
              </a>
            </div>

            {/* Fifth Image: Fish Feast */}
            <div className="bg-gradient-to-r from-black to-gray-600 relative overflow-hidden rounded-lg shadow-lg">
              <a
                href=""
                className="group relative flex flex-col overflow-hidden"
              >
                <img
                  src="./images/bbq.jpg"
                  alt="Fish Feast"
                  className="h-64 w-full object-cover group-hover:scale-110 transition-transform duration-500 ease-in-out rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <h2 className="z-10 text-xl font-medium text-white absolute bottom-4 left-4">
                  Fish Feast{" "}
                </h2>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Carousel;
