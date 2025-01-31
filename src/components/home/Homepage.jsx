// eslint-disable-next-line no-unused-vars
import React from "react";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-6xl font-bold">Welcome to my homepage</h1>
      <p className="text-2xl">This is a basic UI for this page</p>
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        <span className="flex space-x-2">
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>
          <span className="text-white">or</span>
          <Link to="/signup" className="text-white hover:underline">
            Signup
          </Link>
        </span>
      </button>
    </div>
  );
};

export default Homepage;
