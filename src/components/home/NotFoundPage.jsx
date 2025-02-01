// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './NavBar';
import Footer from './Footer';
const NotFoundPage = () => {
  return (
    <>
      <Navbar />

    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">404 - Page Not Found</h1>
      <p className="text-2xl">Sorry, the page you are looking for does not exist.</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
        <Link to="/">Go back to homepage</Link>
      </button>
    </div>
    <Footer />
    </>
  );
};

export default NotFoundPage;
