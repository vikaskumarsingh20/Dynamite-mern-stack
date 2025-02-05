// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 md:py-8 lg:py-4">
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

