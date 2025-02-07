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
            src="src/assets/images/Animation-PNG-HD.png"
            alt="Workflow"
            className="hidden sm:block h-auto w-[17%] max-w-xs sm:max-w-sm md:max-w-md xl:max-w-xl 2xl:max-w-2xl"
          />
            <div className="pl-4">
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide text-black">
                Hello, I am Vikas Singh
              </h1>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mt-2">
                Welcome to my personal website! I am a passionate developer.
              </h2>
              <p className="text-justify px-4 py-6 sm:px-10 sm:py-8 lg:px-20 lg:py-10 text-base sm:text-lg md:text-xl text-black">
                Currently, I am working with Infoneo Technologies Private
                Limited as a software developer. I specialize in creating
                innovative solutions and have a strong passion for coding. With
                a keen interest in the latest technologies, I continually strive
                to improve and expand my skills. My goal is to deliver
                high-quality software that meets the needs of users and
                businesses alike. Welcome to my personal website where I share
                my projects, experiences, and insights into the world of
                technology. Here, you'll find a showcase of my work, including
                web applications, mobile apps, and more. Let's connect and
                explore the endless possibilities of technology together!
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

            <Link
              to="https://github.com/vikaskumarsingh20"
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
