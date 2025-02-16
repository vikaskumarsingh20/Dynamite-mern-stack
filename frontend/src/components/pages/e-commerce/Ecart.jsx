// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../../home/NavBar'
import Footer from '../../home/Footer'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import EcartItem from './EcartItem';
import Enavbar from './Enavbar';
import { ThemeContext } from '../../../contexts/Theme';

function Ecart() {
  const{darkMode} = useContext(ThemeContext)
  
  const cartState = useSelector((state) => state.cart); 
console.log("Printing full cart state:", cartState);
const { items: cart } = cartState || { items: [] }; 
console.log("Extracted cart items:", cart);

  const[totalAmount , setTotalAmount] = useState(0);


  useEffect(() => {
    setTotalAmount(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  
  return (
    <>

    <Navbar />
     <Enavbar />
    <div className={`flex flex-col items-center justify-center min-h-screen ${darkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      { cart.length > 0 ? (
        <div className={`w-full max-w-md p-4 ${darkMode ? 'bg-gray-800' : 'bg-white'} rounded-lg shadow-md`}>
          {cart.map((item,index) => (
            <EcartItem key={item.id} item={item} indexItem={index}/>
          ))}

          <div className='flex justify-between items-center mt-4'>
            <span className='text-lg font-semibold'>Your Cart</span>
            <span className='text-lg font-semibold'>Summary</span>
          </div>

          <div className='flex justify-between items-center mt-4'>
            <p className='text-lg'>
              <span className='font-semibold'>Total Items:</span> {cart.length}
            </p>
          </div>

          <div className='flex justify-between items-center mt-4'>
            <p className='text-lg'>
              <span className='font-semibold'>Total Amount:</span> ${totalAmount}
            </p>
            <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${darkMode ? 'bg-blue-700' : 'bg-blue-500'}`}>
              Checkout Now
            </button>
          </div>
        </div>
      ):(<div className='flex flex-col items-center justify-center min-h-screen'>
      
       <h2 className={`text-3xl font-semibold ${darkMode ? 'text-white' : 'text-gray-700'}`}>Cart is empty</h2>
       <div className='mt-4'>
       <Link to="/services/e-home"><button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${darkMode ? 'bg-blue-700' : 'bg-blue-500'}`}>Shop Now</button></Link>
       </div>
       </div>)}
   
    </div>
    <Footer />
    </>
  )
}

export default Ecart