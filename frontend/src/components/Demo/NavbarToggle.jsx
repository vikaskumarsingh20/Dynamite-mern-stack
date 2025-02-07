// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LogicComponent = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
    toast.success("Logged in successfully");
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    toast.error("Logged out");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="mt-4 mb-4 flex justify-center space-x-4">
        {!isLoggedIn ? (
          <>
            <Link to={""}>
              <button
                onClick={handleLogin}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg"
              >
                Sign In
              </button>
            </Link>
            <Link to={""}>
              <button className="bg-red-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg">
                Signup
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to={""}>
              <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-lg">
                Profile
              </button>
            </Link>
            <Link to={""}>
              <button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded shadow-lg"
              >
                Logout
              </button>
            </Link>
          </>
        )}
      </div>

      <ToastContainer />
    </div>
  );
};

export default LogicComponent;
