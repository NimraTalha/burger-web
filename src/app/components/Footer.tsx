"use client";

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Section */}
        <div>
          <h3 className="text-xl font-bold mb-4">About Us</h3>
          <p className="text-gray-300">
            Welcome to our burger haven! We serve the juiciest, most delicious
            burgers crafted with fresh ingredients and love. Come visit us and
            satisfy your cravings!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-bold mb-4">Quick Links</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <a
                href="#menu"
                className="hover:text-yellow-500 transition-colors"
              >
                Menu
              </a>
            </li>
            <li>
              <a
                href="#offers"
                className="hover:text-yellow-500 transition-colors"
              >
                Special Offers
              </a>
            </li>
            <li>
              <a
                href="#reservation"
                className="hover:text-yellow-500 transition-colors"
              >
                Make a Reservation
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-yellow-500 transition-colors">
                Contact Us
              </a>
            </li>
          </ul>
        </div>

        {/* Contact & Social Media */}
        <div>
          <h3 className="text-xl font-bold mb-4">Contact Us</h3>
          <ul className="text-gray-300 space-y-2">
            <li>
              <span className="font-semibold">Address:</span> 123 Burger Street,
              Food City
            </li>
            <li>
              <span className="font-semibold">Phone:</span>{" "}
              <a href="tel:+1234567890" className="hover:text-yellow-500">
                +123 456 7890
              </a>
            </li>
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:info@burgerplace.com"
                className="hover:text-yellow-500"
              >
                info@burgerplace.com
              </a>
            </li>
          </ul>
          <div className="flex mt-4 space-x-4">
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 transition-colors"
              aria-label="Facebook"
            >
              <i className="fab fa-facebook fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 transition-colors"
              aria-label="Twitter"
            >
              <i className="fab fa-twitter fa-lg"></i>
            </a>
            <a
              href="#"
              className="text-gray-300 hover:text-yellow-500 transition-colors"
              aria-label="Instagram"
            >
              <i className="fab fa-instagram fa-lg"></i>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Burger Place. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
