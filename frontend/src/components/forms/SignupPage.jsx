import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../home/NavBar";
import Footer from "../home/Footer";

function FormTailwind() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(null);

  const handleChange = (event) => {
    setDataFrom({
      ...dataFrom,
      [event.target.id]: event.target.value,
    });
  };

  const getSignup = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch(
        `${import.meta.env.VITE_REACT_APP_API_BASE_URL}/signup`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
            confirmPassword,
          }),
        }
      );
      const data = await response.json();
      console.log("data from server:", data);
      if (data.error) {
        setError(data.error);
      } else {
        setError(null);
        setEmail("");
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      console.log("error in getSignup:", error);
    }
  };

  // useEffect(() => {
  //   getSignup();
  // }, []);



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
          <form onClick={getSignup} className="bg-white shadow-md rounded-lg px-8 pt-6 pb-8 mb-4 max-w-md w-full">
            <h2 className="text-2xl font-bold text-gray-400 text-center mb-6 underline">
              Register new account
            </h2>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="text-gray-900 border border-gray-300 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500
               dark:focus:border-blue-500"
                placeholder=" Enter your email"
                required
                onClick={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Your password
              </label>
              <input
                type="password"
                id="password"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500
               dark:focus:border-blue-500"
                placeholder=" Enter your password"
                required
                onClick={handleChange}
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="repeat-password"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2"
              >
                Repeat password
              </label>
              <input
                type="password"
                id="repeat-password"
                className="border border-gray-300 text-gray-900 text-sm rounded-lg
             focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 
              dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500
               dark:focus:border-blue-500"
                placeholder="Enter Repeat password"
                required
                onClick={handleChange}
              />
            </div>
            <div className="flex items-start mb-5">
              <div className="flex items-center h-5">
                <input
                  id="remember"
                  type="checkbox"
                  className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                />
              </div>
              <span htmlFor="terms" className="ms-2 text-sm font-medium ">
                I agree with the{" "}
                <Link
                  to="#"
                  className="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </Link>
              </span>
            </div>
            <button
              type="submit"
              className="w-full cursor-pointer text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none
           focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
            dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Register new account
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default FormTailwind;
