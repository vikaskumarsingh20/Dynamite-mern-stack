import React from "react";
import Navbar from "../../home/NavBar";
import Footer from "../../home/Footer";

function Blogs() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-4">
        <div className="space-y-4">
          <div className="border-b-2 border-b-gray-300 drop-shadow-md bg-white">
            <header className="py-4 border-b-2 border-b-gray-300 drop-shadow-md  bg-white">
              <h1 className="flex flex-col items-center text-3xl font-bold uppercase text-center">
                Blogs <small className="text-sm font-normal">(Page using Context API)</small>
              </h1>
            </header>
          </div>
          {[1, 2, 3].map((item) => (
            <div key={item} className="w-11/12 max-w-2xl mx-auto">
              <p className="text-sm my-1">
                {" "}
                By <span className="italic">vikas</span>
                {" on"}{" "}
                <span className="font-semibold underline cursor-pointer">
                  Web Development
                </span>
              </p>
              <p> Posted on 01-01-2023</p>
              <p>
                Responsive design is an essential aspect of modern web
                development, ensuring websites are accessible and usable on any
                device. This post explores why responsive design is important,
                including the benefits for user experience, accessibility, and
                mobile-first design.
              </p>
              <div className="flex flex-wrap gap-x-2 items-center">
                <span className="text-xs font-semibold underline text-blue-700 cursor-pointer">
                  #Web Development
                </span>
                <span className="text-xs font-semibold underline text-blue-700 cursor-pointer">
                  #Responsive Design
                </span>
                <span className="text-xs font-semibold underline text-blue-700 cursor-pointer">
                  #Mobile-first
                </span>
                <span className="text-xs font-semibold underline text-blue-700 cursor-pointer">
                  #User Experience
                </span>
                <span className="text-xs font-semibold underline text-blue-700 cursor-pointer">
                  #Accessibility
                </span>
              </div>
            </div>
          ))}
          {/* pagination */}
          <div className="  inset-x-0 bg-white py-2 border-t-2 border-t-gray-300">
            <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
              <button className="border-2 border-gray-300 py-1 px-4 rounded-md cursor-pointer">
                Previous
              </button>
              <button className="border-2 border-gray-300 py-1 px-4 rounded-md cursor-pointer">
                Next
              </button>
              <p className="text-sm font-semibold ml-auto">Page 4 of 6</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
