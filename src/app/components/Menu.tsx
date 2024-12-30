import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai'; // Import the shopping cart icon

const ProductCardGrid = () => {
  const productImages = [
    "/images/bbq.jpg",
    "/images/beef.jpg",
    "/images/beefcheese.jpg",
    "/images/cheese.jpg",
    "/images/chickencheese.jpg",
    "/images/classicbeef.webp",
    "/images/gourmet.webp",
    "/images/hamburger.jpg",
    "/images/zingerburger.jpg"
  ];

  // Array of burger names corresponding to the images
  const burgerNames = [
    "BBQ Burger",
    "Beef Burger",
    "Beef Cheese Burger",
    "Cheese Burger",
    "Chicken Cheese Burger",
    "Classic Beef Burger",
    "Gourmet Burger",
    "Hamburger",
    "Zinger Burger"
  ];

  // Array of prices corresponding to the burgers
  const burgerPrices = [
    { old: "$6.99", new: "$5.99" },
    { old: "$7.99", new: "$6.99" },
    { old: "$8.99", new: "$7.99" },
    { old: "$6.99", new: "$5.49" },
    { old: "$7.49", new: "$6.49" },
    { old: "$10.99", new: "$8.99" },
    { old: "$11.99", new: "$9.99" },
    { old: "$5.99", new: "$4.99" },
    { old: "$7.49", new: "$6.49" }
  ];

  return (
    <div className="relative text-center p-10">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("/images/your-background-image.jpg")`, // Replace with your background image path
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          zIndex: -1, // Ensure background is behind the content
        }}
      ></div>

      {/* Headings */}
      <h1 className="font-bold text-4xl mb-4 text-white z-10 relative pt-20">
        Most Requested Items
      </h1>
      <h1 className="text-3xl text-white z-10 relative pb-10">
        Order Now...!
      </h1>

      <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center gap-y-10 gap-x-14 mt-10 mb-5" id="Projects">
        {productImages.map((image, index) => (
          <div key={index} className="w-64 bg-gray-300 shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl z-10 relative">
            <a href="#">
              <img
                src={image}
                alt={`Product ${index + 1}`}
                className="h-60 w-full object-cover rounded-t-xl"
                style={{
                  opacity: 1, // Ensure no opacity is applied to the image itself
                  backgroundColor: 'transparent' // Ensure no background is applied
                }}
              />
              <div className="px-4 py-3 bg-gradient-to-b from-black to-gray-700">
                <span className="text-slate-500 mr-3 uppercase text-xs">Category</span>
                <p className="text-lg font-bold text-red-700 truncate block capitalize">
                  {burgerNames[index]} {/* Display the burger name dynamically */}
                </p>
                <p className="text-xl font-semibold text-white mt-2">
                  <span className="line-through text-gray-400 mr-2">
                    {burgerPrices[index].old} {/* Display the old price with a strikethrough */}
                  </span>
                  {burgerPrices[index].new} {/* Display the new price */}
                </p>
                {/* Add Shopping Cart Icon as a simple black icon */}
                <div className="mt-4">
                  <AiOutlineShoppingCart className="text-yellow-400 text-2xl cursor-pointer" /> {/* Shopping Cart Icon */}
                </div>
              </div>
            </a>
          </div>
        ))}
      </section>
    </div>
  );
};

export default ProductCardGrid;
