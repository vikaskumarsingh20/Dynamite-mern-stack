// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { ThemeContext } from "../../contexts/Theme";
const NotFoundPage = () => {
  const{darkMode} = useContext(ThemeContext)
  return (
    <>
      <Navbar />

      {/* <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500"> */}
      <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} flex flex-col items-center justify-center h-screen mt-12`}>
        <div className=" flex items-center justify-center mx-auto">
          <img
            src="src\assets\images\404pageremovedbg.png"
            alt="Workflow"
            className="h-auto w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 "
          />
        </div>
        <h1 className="text-6xl font-bold">404 - Page Not Found</h1>
        <p className="text-2xl">
          Sorry, the page you are looking for does not exist.
        </p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-5">
          <Link to="/">Go back to homepage</Link>
        </button>
      </div>
      <Footer />
    </>
  );
};

export default NotFoundPage;
