// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import Footer from '../home/Footer';
import Navbar from '../home/NavBar';

const ForgetPassword = () => {
  return (
    <>
    <Navbar />
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-lg shadow-lg p-8">
        <h2 className="text-3xl font-bold">Forgot Password</h2>
        <p className="text-xl">Enter your email address and we will send you a link to reset your password.</p>
        <form className="mt-8">
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Enter your email address"
              required
            />
          </div>
          <button>
          <Link to="/newpassword" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded flex items-center justify-center">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            Send reset link
          </Link>
          </button>
        </form>
        <p className="mt-4">
          <Link to="/login" className="text-blue-500 hover:underline">
            Back to login
          </Link>
        </p>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default ForgetPassword;
