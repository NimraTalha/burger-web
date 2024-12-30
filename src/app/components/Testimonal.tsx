"use client";

import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    feedback:
      "The best burgers in town! The flavors are incredible, and the ingredients are always fresh. Highly recommended!",
    image: "https://randomuser.me/api/portraits/men/1.jpg",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    feedback:
      "Absolutely loved the Zinger Burger! The spices and the crispy texture were perfect. I'll definitely come back!",
    image: "https://randomuser.me/api/portraits/women/2.jpg",
    rating: 4,
  },
  {
    id: 3,
    name: "Emily Johnson",
    feedback:
      "Great ambiance and amazing food. The Veggie Burger was delightful, and the service was top-notch.",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    rating: 5,
  },
];

const Testimonial = () => {
  return (
    <section className="py-12 bg-gray-100" id="testimonial">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          What Our Customers Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white shadow-md rounded-lg p-6 text-center"
            >
              <img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-20 h-20 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {testimonial.name}
              </h3>
              <p className="text-gray-600 italic mb-4">"{testimonial.feedback}"</p>
              <div className="flex justify-center">
                {Array.from({ length: testimonial.rating }, (_, index) => (
                  <span key={index} className="text-yellow-500">
                    ★
                  </span>
                ))}
                {Array.from({ length: 5 - testimonial.rating }, (_, index) => (
                  <span key={index} className="text-gray-300">
                    ★
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
