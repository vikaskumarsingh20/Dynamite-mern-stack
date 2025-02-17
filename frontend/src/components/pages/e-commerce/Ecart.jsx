// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../home/NavBar'
import Footer from '../../home/Footer'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import EcartItem from './EcartItem';
import Enavbar from './Enavbar';
// import { ThemeContext } from '../../../contexts/Theme';

function Ecart() {
  // const{darkMode} = useContext(ThemeContext)

  const { cart } = useSelector((state) => state);
  console.log("Printing Cart",cart);
  const[totalAmount , setTotalAmount] = useState(0);


  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  
  return (
    <>

    <Navbar />
     <Enavbar />
    <div className="max-w-[1200px] mx-auto flex flex-col justify-center items-center">

      {cart.length > 0 ? (
         <div className="flex items-center p-2 md:p-5 justify-between mt-2 mb-2 md:mx-5 ">
          
          <div className="flex flex-col  p-0 md:p-3 gap-5">
            {cart.map((item, index) => {
              return <EcartItem key={item.id} item={item} itemIndex={index} />;
            })}
          </div>

          <div className="flex flex-col">
            <div className="flex flex-col gap-5 justify-start">
              <div className="font-semibold text-xl text-green-800 ">
                Your Cart
              </div>
              <div className="font-semibold text-5xl text-green-700  -mt-5">
                Summary
              </div>
              <p>
                <span className="text-2xl fond-bold">
                  Total Items: {cart.length}
                </span>
              </p>
            </div>

            <div className="flex flex-col justify-end">
              <p className="text-xl font-bold">Total Amount: ${totalAmount}</p>
              <button className="bg-green-700 hover:bg-purple-50 rounded-lg 
              text-white transition duration-300 ease-linear mt-5 border-2
               border-green-600 font-bold hover:text-green-700 p-3 text-xl">
                CheckOut Now
              </button>
            </div>
          </div>
        </div>
      ) :
        (
        <div className="min-h-[85vh] flex flex-col items-center justify-center ">
          <h1 className="text-gray-700 font-semibold text-xl mb-2">
            Your Cart is Empty
          </h1>
          <Link to={"/services/e-home"}>
            <button className="bg-green-600 hover:bg-purple-50 rounded-lg
             text-white transition duration-300 ease-linear mt-5 border-2
              border-green-600 font-semibold hover:text-green-700 p-3 px-10 tracking-wider">
              Shop Now
            </button>
          </Link>
        </div>
      )}

    </div>
    <Footer />
    </>
  )
}

export default Ecart