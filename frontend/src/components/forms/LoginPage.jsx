// eslint-disable-next-line no-unused-vars
import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../home/NavBar";
import Footer from "../home/Footer";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { ThemeContext } from "../../contexts/Theme";
import { AuthContext } from "../../contexts/AuthContext";
import toast from "react-hot-toast";
import logo  from "../../assets/images/Animation-PNG-HD.png"

function LoginPage() {
  const [dataFrom, setDataFrom] = useState({
    email: "",
    password: "",
    remember: "",
    loading: false,
  });

  const [showPassword, setShowPassword] = useState(false);
  const { darkMode } = useContext(ThemeContext);

  const { setIsLoggedIn,loginWithGoogle } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLoginWithGoogle = async () => {
    try {
      await loginWithGoogle();
      navigate("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
    }
  };

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    setDataFrom((prevState) => ({
      ...prevState,
      [name]: type === "checkbox" || type === "radio" ? checked : value,
    }));
  };
// handle Submit button
  const handleSubmit = async (event) => {
    event.preventDefault();
   
  try {
    console.log("Login data:", dataFrom);
    const response = await fetch("http://localhost:4000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataFrom),
    });
    const data = await response.json();
    console.log("data",data);
    if (response.ok) {
      setDataFrom({ email: "", password: "" });
      setIsLoggedIn(true);
      navigate("/");
      toast.success("Login successful!");
    } else {
      console.error("Login Error:", data.error);
      toast.error(data.error || "Invalid user credentials");
    }
  } catch (error) {
    console.error("Login Error:", error);
    toast.error("An unexpected error occurred. Please try again later.");
  }
 
  };

  const togglePasswordVisiblity = (event) => {
    event.preventDefault();
    setShowPassword(!showPassword);
  };


  return (
    <>
      <Navbar />

      <div
        className={`${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
        } 
        flex justify-center items-center min-h-screen sm:flex-col md:flex-row lg:flex-row
        xl:flex-row 2xl:flex-row`}
      >
        <div className=" flex items-center justify-center mx-auto">
          <img
            src={logo}
            alt="Workflow"
            className="hidden sm:block h-auto w-[25%] max-w-xs sm:max-w-sm md:max-w-md xl:max-w-xl 2xl:max-w-2xl"
          />
          <form
            onSubmit={handleSubmit}
            className={`${
              darkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"
            } shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-md w-full`}
          >
            <h2 className="text-2xl font-bold text-center mb-6 underline">
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
                className={`text-gray-900 border border-gray-300 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                ${
                  darkMode
                    ? "dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:text-white dark:focus:border-blue-500"
                    : ""
                }`}
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
                placeholder=" Enter Password"
                className={`text-gray-900 border border-gray-300 text-sm rounded-lg
                focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
                ${
                  darkMode
                    ? "dark:border-gray-600 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:text-white dark:focus:border-blue-500"
                    : ""
                }`}
                required
                onChange={handleChange}
                value={dataFrom.password}
              />
              <div className="flex align-center justify-right">
                <button
                  className="absolute right-2 mt-4 top-1/2 transform -translate-y-1/2"
                  onClick={togglePasswordVisiblity}
                >
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
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
              <span className="mx-auto text-gray-600 dark:text-gray-400 bg-linear-210">
                or
              </span>
            </div>
            <div className="flex items-center justify-center mt-4 mb-6">
              <button
                type="button"
                className="bg-white hover:bg-gray-100 focus:outline-none focus:ring-2
                 focus:ring-offset-2 focus:ring-gray-600 py-2 px-4 rounded flex items-center space-x-2"
                  onClick={handleLoginWithGoogle}

              >
                <FcGoogle className="text-gray-800 dark:text-gray-400" />
                <span className="text-gray-800 dark:text-gray-400 cursor-pointer">
                  Sign in with Google
                </span>
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
