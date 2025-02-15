// eslint-disable-next-line no-unused-vars
import React,{useContext, useState} from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import Navbar from "../home/NavBar";
import Footer from "../home/Footer";
import { ThemeContext } from "../../contexts/Theme";

const Aboutus = () => {

  const[loading, setLoading] = useState(true);
  const{darkMode} = useContext(ThemeContext)
  return (
    <>
      <Navbar />

      <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} mt-12 py-4 md:py-8 lg:py-4`}>
        <div className="container mx-auto p-4">
          <h1 className="text-6xl font-bold text-center">About Us</h1>
          <p className="text-2xl text-center">
            We are a team of developers who are passionate about creating
            high-quality and user-friendly applications.
          </p>
          <div className="flex flex-col items-center justify-center mt-12">
            <div className="w-48 h-48 flex items-center justify-center">
              <img
                src="https://picsum.photos/200/300"
                alt="Our Team"
                className="rounded-full w-48 h-48 object-cover"
                onLoad={() => setLoading(false)}
                onError={() => setLoading(false)}
                style={{ display: loading ? 'none' : 'block' }}
              />
              {loading && (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
              )}
            </div>
            <h2 className="text-4xl font-bold mt-4">John Doe</h2>
            <p className="text-xl">
              John is a full-stack developer with over 10 years of experience.
              He is passionate about creating scalable and maintainable
              applications.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-12">
            <div className="w-48 h-48 flex items-center justify-center">
              <img
                src="https://picsum.photos/201/301"
                alt="Our Team"
                className="rounded-full w-48 h-48 object-cover"
                onLoad={() => setLoading(false)}
                onError={() => setLoading(false)}
                style={{ display: loading ? 'none' : 'block' }}
              />
              {loading && (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
              )}
            </div>
            <h2 className="text-4xl font-bold mt-4">Jane Doe</h2>
            <p className="text-xl">
              Jane is a UX/UI designer with over 5 years of experience. She is
              passionate about creating user-friendly and visually appealing
              interfaces.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center mt-12">
            <div className="w-48 h-48 flex items-center justify-center">
              <img
                src="https://picsum.photos/202/302"
                alt="Our Team"
                className="rounded-full w-48 h-48 object-cover"
                onLoad={() => setLoading(false)}
                onError={() => setLoading(false)}
                style={{ display: loading ? 'none' : 'block' }}
              />
              {loading && (
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-gray-900"></div>
              )}
            </div>
            <h2 className="text-4xl font-bold mt-4">Bob Smith</h2>
            <p className="text-xl">
              Bob is a DevOps engineer with over 5 years of experience. He is
              passionate about creating scalable and secure infrastructure.
            </p>
          </div>
          <div className="flex items-center justify-center mt-12">
            <Link
              to="/contact"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex items-center justify-center mt-12">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="p-2 hover:text-blue-600"
            >
              <FaFacebook size={30} />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="p-2 hover:text-pink-500"
            >
              <FaInstagram size={30} />
            </a>
            <a
              href="https://twitter.com/"
              target="_blank"
              className="p-2 hover:text-blue-300"
            >
              <FaTwitter size={30} />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="p-2 hover:text-blue-800"
            >
              <FaLinkedin size={30} />
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Aboutus;
