// eslint-disable-next-line no-unused-vars
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="flex  items-center justify-center h-screen bg-gradient-to-r from-purple-500 to-pink-500">
        <div className="text-center">
        <div className="flex items-center justify-center mx-auto">
          <img
            src="src\assets\images\Animation-PNG-HD.png"
            alt="Workflow"
            className="h-auto w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 mx-auto animate-[slide-down_2s_ease-in-out]"
          />
          <div className="pl-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-black">
              Welcome to my homepage
            </h1>
            <p className="text-justify lg:px-20 lg:py-10 sm:text-lg md:text-xl text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. 
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>

          <div className="flex justify-center space-x-4 mt-6">
            <Link to={"/login"}>
              <button
                type="button"
                className="inline-flex items-center cursor-pointer px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Get Started
                <FontAwesomeIcon icon={faArrowRight} className="ml-1" />
              </button>
            </Link>

            <Link to="https://github.com/vikaskumarsingh20"
              href="https://github.com/brixtol"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
            >
              <FontAwesomeIcon icon={faGithub} className="mr-2" />
              Github
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
