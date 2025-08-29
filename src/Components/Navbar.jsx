import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const Navbar = () => {

     const items = useSelector((state) => state.cart.items);
  return (
    <nav className="bg-white shadow-md px-6 py-3 flex justify-between items-center sticky top-0 z-50">
      {/* Left Section (Logo) */}
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-bold text-indigo-600 cursor-pointer">
          ShopNow
        </span>
        <Link className="navLink" to="/">
          Home
        </Link>
        <Link className="navLink" to="/cart">
               Yourcart
        </Link>
        

      </div>

      {/* Right Section (Cart) */}
      <div className="flex items-center space-x-6">

          <Link className="navLink" to='/Login'>
                    
          Login


          </Link>
        <Link
          to="/CheckCard"
          className="relative inline-flex items-center text-gray-700 font-medium hover:text-indigo-600 transition"
        >
          🛒 TOTALITEMS-
          <span className="absolute -top-2 -right-3 bg-indigo-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
              {items.length}
          </span>
        </Link>
      </div>
    </nav>
  );
};
