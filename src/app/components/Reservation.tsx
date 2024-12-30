"use client";
import React, { useState } from 'react';

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    guests: 1,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Reservation made for ${formData.name}!`);
    // Logic to handle form submission, e.g., send data to the server
  };

  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Make a Reservation</h2>
        <p className="mb-8 text-gray-300">
          Book a table at our burger restaurant for a fantastic dining experience.
        </p>
        <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-sm mb-2">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm mb-2">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="date" className="block text-sm mb-2">
                Reservation Date
              </label>
              <input
                type="date"
                id="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="time" className="block text-sm mb-2">
                Reservation Time
              </label>
              <input
                type="time"
                id="time"
                name="time"
                value={formData.time}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
              />
            </div>
            <div>
              <label htmlFor="guests" className="block text-sm mb-2">
                Number of Guests
              </label>
              <select
                id="guests"
                name="guests"
                value={formData.guests}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:ring-2 focus:ring-yellow-500"
              >
                {[...Array(10).keys()].map((num) => (
                  <option key={num + 1} value={num + 1}>
                    {num + 1} {num === 0 ? 'Guest' : 'Guests'}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <button
            type="submit"
            className="mt-6 w-full bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-bold py-2 px-4 rounded-lg transition"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Reservation;
