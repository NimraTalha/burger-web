
import React from 'react';

const Card = () => {
  const deals = [
    {
      title: "Double Delight Burger Deal",
      description: "Order 2 burgers and get one free . Perfect for sharing!",
      image: "/images/burgerdeal.jpg", // Replace with actual image path
    },
    {
      title: "Family Feast Combo",
      description: "Get 4 burgers, 2 large fries, nuggets,friend chiken and trend!",
      image: "/images/family.jpg", // Replace with actual image path
    },
  ];

  return (
    <section className="py-10 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8 text-white">Burger Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white text-gray-700 shadow-lg rounded-lg p-6 transform transition duration-500 hover:scale-105"
            >
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-2xl font-semibold mb-2">{deal.title}</h3>
                <p className="text-red-700">{deal.description}</p>
                <button
                  className="mt-4 bg-yellow-400  hover:bg-lime-400 text-white py-2 px-4 rounded"
                >
                  Order Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Card;
