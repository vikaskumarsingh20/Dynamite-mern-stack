// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./NavBar";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-6xl font-bold">Welcome to my homepage</h1>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
