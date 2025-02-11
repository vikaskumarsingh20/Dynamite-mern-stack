/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
// import { toast } from "react-toastify";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoSunny, IoSunnyOutline } from "react-icons/io5";
import { ThemeContext } from "../../contexts/Theme";
import { BsUnity } from "react-icons/bs";
import { AuthContext } from "../../contexts/AuthContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(AuthContext);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div className={`${darkMode ? "bg-gray-900" : "bg-blue-500"}`}>
      <nav
        className={`relative px-4 py-4 flex justify-between items-center shadow ${
          darkMode ? "bg-gray-800 text-white" : "bg-white text-black"
        }`}
      >
        <Link to={"/"} className="text-3xl font-bold leading-none" href="#">
          <BsUnity />
        </Link>
        <div className="lg:hidden ml-auto">
          <button
            className="navbar-burger flex items-center  p-3"
            onClick={toggleMenu}
          >
            <RxHamburgerMenu className="hover:scale-130 duration-300 cursor-pointer" />
          </button>
        </div>
        <ul
          className={`
          ${isMenuOpen ? "block" : "hidden"} 
          absolute top-full left-0 right-0 shadow-lg py-3 px-4 
          ${darkMode ? "bg-gray-800 text-white" : "bg-white text-black"}
          lg:static lg:flex lg:items-center lg:w-auto lg:space-x-5 lg:shadow-none lg:py-0 lg:px-80 z-50
          `}
        >
          <li>
            <NavLink to={"/"} className="text-md hover:text-blue-600">
              Home
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink to={"/about-us"} className="text-md hover:text-blue-600">
              About Us
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink to={"/services"} className="text-sm   hover:text-gray-500">
              <div className="relative group">
                <button className="text-md hover:text-blue-600 flex items-center">
                  Services
                  <svg
                    className="ml-1 w-4 h-4 transition duration-150 ease-in-out transform group-hover:rotate-180"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <ul className="absolute hidden  pt-1 group-hover:block">
                  <li>
                    <NavLink
                      to={"/service1"}
                      className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    >
                      Application
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/service2"}
                      className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    >
                      Developer
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to={"/service3"}
                      className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                    >
                      Marketing
                    </NavLink>
                  </li>
                </ul>
              </div>
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink to={"/blogs"} className="text-md hover:text-blue-600">
              Blogs
            </NavLink>
          </li>
          <li className="text-gray-300">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
          </li>
          <li>
            <NavLink to={"/contact"} className="text-md hover:text-blue-600">
              Contact
            </NavLink>
          </li>
          <li
            onClick={toggleDarkMode}
            className="cursor-pointer flex align-center gap-3 justify-between"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              stroke="currentColor"
              className="w-4 h-4 current-fill  text-gray-300"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 5v0m0 7v0m0 7v0m0-13a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
              />
            </svg>
            <div>
              {darkMode ? (
                <IoSunny className="w-5 h-5" />
              ) : (
                <IoSunnyOutline className="w-5 h-5" />
              )}
            </div>
          </li>
        </ul>
        {/* toggle button */}
        <div>
          {!isLoggedIn ? (
            <>
              <Link
                to={"/login"}
                className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-sm transition duration-200"
              >
                <button>Sign In</button>
              </Link>
              <Link
                to={"/signup"}
                className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-sm transition duration-200"
              >
                <button>Sign Up</button>
              </Link>
            </>
          ) : (
            <>
              <Link
                to={"/profile"}
                className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-sm transition duration-200"
                onClick={(e) => {
                  e.preventDefault();
                  window.open("/profile", "_blank");
                }}
              >
                <button>Account</button>
              </Link>
              <Link
                to={"/"}
                className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-sm transition duration-200"
              >
                <button onClick={handleLogout}>Logout</button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
