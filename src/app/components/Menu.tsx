"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import ProductCard from "@/app/components/ProductCard";
import { Product } from "@/pages/types";

const Home = () => {
  const [products, setProducts] = useState<Product[]>([]); // Initial value is array
  const [cart, setCart] = useState<Product[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [isCheckout, setIsCheckout] = useState(false);
  const router = useRouter();

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("/api/products"); // API call to get products
        const data = await response.json();
        setProducts(data.products); // Assuming the API returns an object with 'products' array
      } catch (error) {
        console.error("Failed to fetch products:", error);
        setProducts([]);
      }
    }

    fetchProducts();
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const updatedCart = [...prevCart, product];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const toggleCart = () => {
    setShowCart((prev) => !prev);
  };

  const goToCheckout = () => {
    setIsCheckout(true);
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cart");
  };

  const handleCheckout = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Order placed successfully!");
    setCart([]);
    localStorage.removeItem("cart");
    setIsCheckout(false);
  };

  const closeCheckout = () => {
    setIsCheckout(false);
  };

  return (
    <div className="relative min-h-screen py-6">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-10 animate-background"
        style={{
          backgroundImage:
            "url('https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/1:1/w_1600,c_limit/Smashburger-recipe-120219.jpg')",
        }}
      ></div>
      <div className="relative z-10">
        <div className="max-w-6xl mx-auto text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            Delicious Burger In our Menu
          </h1>
          <p className="text-xl text-white">
            Explore our selection of mouth-watering burgers to order now!
          </p>
        </div>

        {/* Product Section */}
        <div className="max-w-6xl mx-auto p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {Array.isArray(products) &&
            products.map((product) => (
              <ProductCard
                key={product.id}
                {...product}
                onAddToCart={addToCart} // Pass full product here
              />
            ))}
        </div>

        {/* Cart Section */}
        {!isCheckout && (
          <div className="max-w-6xl mx-auto mt-8">
            <button
              onClick={toggleCart}
              className="bg-yellow-400 text-white py-3 px-6 rounded-lg shadow-md hover:bg-lime-400 transition duration-300 ease-in-out"
            >
              {showCart ? "Hide Cart" : "View Cart"} ({cart.length} items)
            </button>
            {showCart && (
              <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-4xl font-semibold text-lime-400">
                  Your Cart Items Includes:
                </h2>
                {cart.length > 0 ? (
                  <div>
                    <ul>
                      {cart.map((product, index) => (
                        <li
                          key={index}
                          className="flex items-center justify-center mb-6 transform transition-all duration-300 ease-in-out"
                        >
                          <img
                            src={product.image}
                            alt={product.title}
                            className="w-20 h-40 sm:w-24 inline-block  transition-transform duration-300 ease-in-out"
                          />
                          <span className="ml-4 text-lg font-medium text-slate-600">
                            {product.title} - ${product.price}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="flex justify-between items-center mt-6 text-black">
                      <span className="font-semibold text-xl">
                        Total: $$ 
                        {cart.reduce(
                          (total, product) => total + product.price,
                          0
                        )}
                      </span>
                    </div>
                    <div>
                      <button
                        onClick={goToCheckout}
                        className="bg-lime-400 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-yellow-400 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Proceed To Checkout
                      </button>
                      <button
                        onClick={clearCart}
                        className="bg-red-700 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-yellow-400 transition duration-300 ease-in-out text-white transform hover:scale-110"
                      >
                        Clear Cart
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-lg text-slate-600">Your cart is empty!</p>
                )}
              </div>
            )}
          </div>
        )}

        {/* Checkout Section */}
        {isCheckout && (
          <div className="max-w-3xl mx-auto mt-8 bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-4xl font-semibold text-lime-400 mb-6">
              Checkout
            </h2>
            <form onSubmit={handleCheckout}>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">
                  Name
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                />
              </div>
              <div className="mb-4">
                <label className="block text-lg font-medium text-gray-700">
                  Address
                </label>
                <textarea
                  required
                  className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-lime-400 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-yellow-400 transition duration-300 ease-in-out text-white transform hover:scale-110"
              >
                Place Order
              </button>
            </form>
            <button
              onClick={closeCheckout}
              className="bg-red-700 py-3 px-8 rounded-lg text-lg shadow-md hover:bg-yellow-400 transition duration-300 ease-in-out text-white transform hover:scale-110 mt-4"
            >
              Close Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
