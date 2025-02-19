// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import Navbar from "./NavBar";
import Footer from "./Footer";
import { ThemeContext } from "../../contexts/Theme";
import logo  from "../../assets/images/Animation-PNG-HD.png"

const Homepage = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} py-4 mt-15 md:py-8 lg:py-4`}>
        <div className={`text-center ${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'}`}>
          <div className="flex items-center justify-center mx-auto">
          <img
            src={logo}
            alt="Workflow"
            className="hidden sm:block h-auto w-[17%] max-w-xs sm:max-w-sm md:max-w-md xl:max-w-xl 2xl:max-w-2xl"
          />
            <div className={`pl-4 ${darkMode ? 'text-white' : 'text-black'}`}>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-wide">
                Hello, I am Vikas Singh
              </h1>
              <h2 className={`pl-4 ${darkMode ? 'text-white' : 'text-black'}`}>
                Welcome to my personal website! I am a passionate developer.
              </h2>
              <p className={`text-justify px-4 py-6 sm:px-10 sm:py-8 lg:px-20 lg:py-10 text-base sm:text-lg md:text-xl ${darkMode ? 'text-white' : 'text-black'}`}>
                Currently, I am working with Infoneo Technologies Private
                Limited as a software developer. I specialize in creating
                innovative solutions and have a strong passion for coding. With
                a keen interest in the latest technologies, I continually strive
                to improve and expand my skills. My goal is to deliver
                high-quality software that meets the needs of users and
                businesses alike. Welcome to my personal website where I share
                my projects, experiences, and insights into the world of
                technology. Here, you  will find a showcase of my work, including
                web applications, mobile apps, and more. Lets connect and
                explore the endless possibilities of technology together!
              </p>
            </div>
          </div>

          <div className="flex justify-center space-x-4 mt-6">
            <Link to={"/login"}>
              <button
                type="button"
                className={`${darkMode ? 'bg-indigo-600 hover:bg-indigo-700' : 'bg-gray-600 hover:bg-gray-700'} inline-flex items-center cursor-pointer px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500`}
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
              className={`${darkMode ? 'bg-gray-600 hover:bg-gray-700' : 'bg-gray-700 hover:bg-gray-800'} inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500`}
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
