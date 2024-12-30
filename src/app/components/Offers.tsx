"use client";

import React from "react";

type Offer = {
  title: string;
  description: string;
};

const Offers: React.FC = () => {
  const offerList: Offer[] = [
    {
      title: "Happy Hour",
      description: "5pm to 7pm tak tamam drinks per 50% off",
    },
    {
      title: "Family Deal",
      description: "Two main courses order karen aur family deal hasil karen. Coupon code paen!",
    },
    {
      title: "Bachat Deal",
      description: "5 burgers ke sath 2 burgers free",
    },
  ];

  const handleOfferClick = (description: string) => {
    alert(description);
  };

  return (
    <section className="py-10 bg-gradient-to-r from-black- to-gray-700">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-4 text-white">Special Offers</h2>
        <div className="flex flex-col gap-4">
          {offerList.map((offer, index) => (
            <button
              key={index}
              onClick={() => handleOfferClick(offer.description)}
              className="bg-yellow-300 text-gray-500 shadow-lg rounded-lg hover:bg-lime-400 transition duration-500 transform hover:scale-105 p-6"
            >
              <h3 className="text-3xl font-bold mb-2">{offer.title}</h3>
              <p className="mt-1 text-red-700 font-semibold">{offer.description}</p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;
