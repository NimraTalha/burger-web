"use client";
import { Product } from "@/pages/types";
import React from "react";

interface ProductCardProps extends Product {
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  title,
  price,
  image,
  onAddToCart,
}) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out">
      <img
        src={image}
        alt={title}
        className="w-full h-56 object-cover rounded-md mb-4 transform transition-all duration-300 ease-in-out hover:scale-110"
      />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-lg text-slate-600 mb-4">${price}</p> {/* Price with $ */}
      <button
        onClick={() => onAddToCart({ id, title, price, image })}
        className="bg-yellow-400 text-white px-4 rounded-lg text-lg shadow-md hover:bg-lime-400 transition duration-300 ease-in-out"
      >
        Add To Cart
      </button>
    </div>
  );
};

export default ProductCard;
