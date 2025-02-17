/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext, useState } from "react";
import { ThemeContext } from "../../../contexts/Theme";
import { useDispatch, useSelector } from "react-redux";
import toast from 'react-hot-toast';
import { add, remove } from "../../../redux/slices/CartSliceE";

function Eproducts({ post }) {

  const { darkMode } = useContext(ThemeContext);

  // const cart = useSelector((state) => state.cart || []);
  const { cart } = useSelector((state) => state);

  console.log("this is product cart", cart)

  const dispatch = useDispatch();

  const addToCart = () => {
    console.log("Adding to cart:", post);
    dispatch(add(post));
    console.log("after adding post", post)
    toast.success("Item added to cart");
  };


  const removeFromCart = () => {
    console.log("Removing from cart:", post);
    dispatch(remove(post.id));
    toast.error("Item removed from cart");
  }
  return (
    <div
      className={`group hover:scale-105 transition duration-300 ease-in flex flex-col items-center 
      justify-between shadow-md hover:shadow-lg 
      gap-3 p-4 mt-10 ml-5 rounded-xl ${darkMode ? 'bg-gray-800' : 'bg-white'}`}
    >
      <div>
        <p className={`text-lg font-semibold text-left truncate w-40 mt-1 ${darkMode ? 'text-white' : 'text-gray-700'}`}>
          {post.title}
        </p>
      </div>
      <div>
        <p className={`w-40 font-normal text-[10px] text-left ${darkMode ? 'text-gray-300' : 'text-gray-400'}`}>
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className={`h-[180px] ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`}>
        <img src={post.image} className={`h-full w-full ${darkMode ? 'bg-gray-700' : 'bg-gray-100'}`} />
      </div>

      <div className="flex justify-between gap-12 items-center w-full mt-5">
        <div>
          <p className="text-green-600 font-semibold">${post.price}</p>
        </div>

        {cart.some((p) => p.id == post.id) ? (
          <button
            className={`text-[12px] border-2 rounded-full font-semibold p-1 px-3 uppercase transition duration-300 ease-in text-nowrap cursor-pointer
            ${darkMode ? 'text-white border-white hover:bg-white hover:text-black' : 'text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white'}`}
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button
            className={`text-[12px] border-2 rounded-full font-semibold p-1 px-3 uppercase transition duration-300 ease-in text-nowrap cursor-pointer
            ${darkMode ? 'text-white border-white hover:bg-white hover:text-black' : 'text-gray-700 border-gray-700 hover:bg-gray-700 hover:text-white'}`}
            onClick={addToCart}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Eproducts;
