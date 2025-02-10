// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../../contexts/Theme';
const Footer = () => {
   const { darkMode} = useContext(ThemeContext);
  return (
    <footer className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} py-4 md:py- lg:py-3 shadow-md border-t-2 border-gray-600`}>
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start">
          <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Dynamite Technologies. All rights reserved.
          </p>
          <div className="flex space-x-4 md:space-x-8 lg:space-x-12">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/contact" className="hover:underline">Contact</Link>
            <Link to="/forlearning" className="hover:underline">Practice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

