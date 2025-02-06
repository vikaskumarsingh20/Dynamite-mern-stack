// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { data, Link } from "react-router-dom";
import Navbar from "../home/NavBar";
import Footer from "../home/Footer";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";


function LoginPage() {
  const [dataFrom, setDataFrom] = useState({ email: "", password: "",remember:"" ,loading: false });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setDataFrom((prevState) => ({
        ...prevState,
        [name]: type === "checkbox" || type === "radio" ? checked : value
    }));
};

const handleSubmit = (event) => {
    event.preventDefault();
    setDataFrom((prevState) => ({ ...prevState, loading: true }));
    console.log(dataFrom);
    setTimeout(() => {
        setDataFrom((prevState) => ({ ...prevState, loading: false }));
    }, 2000);
};

  const togglePasswordVisiblity = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      <Navbar />

      <div className="flex justify-center items-center min-h-screen bg-gray-100 light:bg-gray-900 bg-gradient-to-r from-purple-500 to-pink-500">
        <div className=" flex items-center justify-center mx-auto">
          <img
            src="src\assets\images\Animation-PNG-HD.png"
            alt="Workflow"
            className="h-auto w-full md:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5 "
          />
          <form onSubmit={handleSubmit}  className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-400 text-center mb-6 underline">
              Login Page
            </h2>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="text-gray-900 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500
               dark:focus:border-blue-500"
                placeholder="Enter your email"
                required
                onChange={handleChange}
                value={dataFrom.email}
              />
            </div>
            <div className="mb-4 relative">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="text-gray-900 border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10 
              dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500
               dark:focus:border-blue-500"
                placeholder="Enter your password"
                required
                onChange={handleChange}
                value={dataFrom.password}
              />
              <div className="flex align-center justify-right">
              <button className="absolute right-2 mt-4 top-1/2 transform -translate-y-1/2" onClick={togglePasswordVisiblity}>
                {showPassword ? <FaEye /> : <FaEyeSlash /> }
              </button>
              </div>
            </div>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center">
                <input
                  id="remember"
                  type="checkbox"
                  name="remember"
                  className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                  onChange={handleChange}
                  value={dataFrom.remember}
                />
                <label
                  htmlFor="remember"
                  className="ml-2 block text-sm text-gray-900 dark:text-gray-400"
                >
                  Remember Me
                </label>
              </div>
              <Link
                to="/forgetpassword"
                className="inline-block align-baseline text-sm text-blue-600 hover:text-blue-800 dark:text-blue-400"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 
                px-4 rounded focus:outline-none focus:shadow-outline"
                disabled={dataFrom.loading}
              >
                {dataFrom.loading ? "Loading..." : " Sign In"}
              </button>
            </div>
            <p className="text-center text-sm text-gray-600 dark:text-gray-400 mt-4">
              Do not have an account?{" "}
              <Link
                to="/signup"
                className="inline-block text-blue-600 hover:text-blue-800 dark:text-blue-400"
              >
                Sign up
              </Link>
            </p>
            <div className="flex items-center justify-center mt-4">
              <span className="mx-auto text-gray-600 dark:text-gray-400 bg-linear-210">or</span>
            </div>
            <div className="flex items-center justify-center mt-4 mb-6">
              <button
                type="button"
                className="bg-white hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 py-2 px-4 rounded flex items-center space-x-2"
              >
                <FcGoogle className="text-gray-800 dark:text-gray-400" />
                <span className="text-gray-800 dark:text-gray-400 cursor-pointer">Sign in with Google</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default LoginPage;
