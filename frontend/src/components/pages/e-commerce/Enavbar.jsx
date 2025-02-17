// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { FaCartShopping } from "react-icons/fa6";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../../contexts/Theme";
import { useSelector } from "react-redux";

function Enavbar() {
  const {darkMode} = useContext(ThemeContext)

  const {cart} = useSelector((state) => state);
  return (
    <nav className={`${darkMode ? 'bg-gray-900' : 'bg-black'}`}>
      <div className="flex justify-between items-center px-4 py-2 mt-[68px] mx-auto max-w-5xl">
        <NavLink to="/services/e-home">
          <img
            src="https://codehelp-shopping-cart.netlify.app/logo.png"
            className="h-8 w-auto rounded-xl"
            alt="logo"
          />
        </NavLink>
        <div className="flex items-center space-x-2">
          <NavLink to="/services/e-home">
            <button className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'} px-3 py-1 rounded-md cursor-pointer`}>
              Home
            </button>
          </NavLink>
          <NavLink to="/services/e-cart">
            <div className={`${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-full p-2 cursor-pointer relative`}>
              <FaCartShopping className={`${darkMode ? 'text-white' : 'text-green-900'}`} />

              {
                    cart.length > 0 &&
                    <span
                    className="absolute -top-1 -right-2 bg-green-600 text-xs w-5 h-5 flex 
                    justify-center items-center animate-bounce rounded-full text-white" 
                    >{cart.length}</span>
                  }
            </div>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Enavbar;
