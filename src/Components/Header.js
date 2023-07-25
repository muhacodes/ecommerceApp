import React, { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faHeart,
  faShoppingCart,
  faCog,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import { Router } from "react-router-dom";
import { Link } from "react-router-dom";

import { CartContext } from "../Components/context/CartContext";

const Header = () => {
  // const [cartNo, setCartNo] = useState(2);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const { cartItems } = useContext(CartContext);

  const cartNo = cartItems.length;

  const handleSettingsClick = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  const handleCloseClick = () => {
    setIsSidebarOpen(false);
  };

  return (
    <header className="flex items-center justify-between py-6 px-8">
      <div className="md:text-2xl text-lg font-bold"> Muhacodes Shop </div>
      <nav>
        <ul className="hidden lg:flex space-x-10">
          <Link
            to="/"
            className="text-gray-700 hover:text-gray-900 hover:underline"
          >
            <a className="text-gray-700 hover:text-gray-900 hover:underline">
              Home
            </a>
          </Link>
          <Link
            to="/shop"
            className="text-gray-700 hover:text-gray-900 hover:underline"
          >
            <a className="text-gray-700 hover:text-gray-900 hover:underline">
              Shop
            </a>
          </Link>

          <Link
            to="/blog"
            className="text-gray-700 hover:text-gray-900 hover:underline"
          >
            <a className="text-gray-700 hover:text-gray-900 hover:underline">
              Blog
            </a>
          </Link>

          <Link
            to="/contact"
            className="text-gray-700 hover:text-gray-900 hover:underline"
          >
            <a className="text-gray-700 hover:text-gray-900 hover:underline">
              Contact
            </a>
          </Link>
        </ul>
      </nav>

      {/*  displays cart icon on small devices  */}
      <div className="lg:hidden relative flex ml-auto mr-5">
        <Link
          to="/cart"
          className="text-gray-700 hover:text-gray-900 hover:underline"
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-gray-700 hover:text-gray-900"
          />
        </Link>

        <span className="absolute left-5 bottom-2 bg-red-700 text-xs rounded p-1 text-white">
          {cartNo}
        </span>
      </div>

      <div className="lg:hidden">
        <FontAwesomeIcon
          icon={faBars}
          className="text-gray-700 hover:text-gray-900 cursor-pointer"
          onClick={handleSettingsClick}
        />
      </div>

      <div className="hidden lg:flex space-x-10">
        <FontAwesomeIcon
          icon={faHeart}
          className="text-gray-700 hover:text-gray-900"
        />
        <div className="relative">
          <Link
            to="/cart"
            className="text-gray-700 hover:text-gray-900 hover:underline"
          >
            <FontAwesomeIcon
              icon={faShoppingCart}
              className="text-gray-700 hover:text-gray-900"
            />
          </Link>

          <span className="absolute left-5 bottom-2 bg-red-700 text-xs rounded p-1 text-white">
            {cartNo}
          </span>
        </div>

        <FontAwesomeIcon
          icon={faUser}
          className="text-gray-700 hover:text-gray-900"
        />
      </div>
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-50"
          onClick={handleSettingsClick}
        />
      )}
      {isSidebarOpen && (
        <div className="fixed top-0 right-0 h-full w-64 bg-white z-50">
          <div className="flex items-center justify-start py-4 px-4">
            <FontAwesomeIcon
              icon={faTimes}
              className="text-gray-700 hover:text-gray-900 cursor-pointer"
              onClick={handleCloseClick}
            />
          </div>
          <nav>
            <ul className="flex flex-col space-y-4 py-8 px-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-gray-900 hover:underline"
              >
                <a className="text-gray-700 hover:text-gray-900 hover:underline">
                  Home
                </a>
              </Link>
              <Link
                to="/blog"
                className="text-gray-700 hover:text-gray-900 hover:underline"
              >
                <a className="text-gray-700 hover:text-gray-900 hover:underline">
                  Blog
                </a>
              </Link>

              <Link
                to="/contact"
                className="text-gray-700 hover:text-gray-900 hover:underline"
              >
                <a className="text-gray-700 hover:text-gray-900 hover:underline">
                  Contact
                </a>
              </Link>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
