import React from 'react';
import Burger from './Burger';

const ProductList: React.FC = () => {
  const firstThreeBurgers = [
    {
      id: 1,
      title: "Mexican Burger",
      category: "Fixing",
      price: "200.00",
      src: "./images/png-burger1.png",
      bgcolor: "bg-yellow-400",
    },
    {
      id: 2,
      title: "Zinger Burger",
      category: "Delights",
      price: "250.00",
      src: "./images/burger-2.png",
      bgcolor: "bg-cyan-400",
    },
    {
      id: 3,
      title: "Veggie Burger",
      category: "Fixing",
      price: "180.00",
      src: "./images/burger-2.png",
      bgcolor: "bg-green-400",
    },
  ];

  return (
    <div>
      {/* Passing burgers as a prop to the Burger component */}
      <Burger burgers={firstThreeBurgers} />
    </div>
  );
};

export default ProductList;
