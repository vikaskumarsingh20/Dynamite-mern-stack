// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faLock } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../home/NavBar'
import Footer from '../home/Footer'

const NewPassword =()=> {
  const navigate = useNavigate()

  const [otp, setOtp] = useState('')

  const handleChange = (e) => {
    setOtp(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (otp.length === 6) {
      navigate('/newpassword')
    } else {
      alert('Please enter 6 digit OTP')
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex justify-center items-center min-h-screen bg-gray-100 light:bg-gray-900 bg-gradient-to-r from-purple-500 to-pink-500">
      <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
        <h2 className="text-3xl font-bold">Enter OTP</h2>
        <p className="text-xl">We have sent you an OTP on your registered mobile number. Please enter the OTP below.</p>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="otp" className="block text-sm font-medium text-gray-700">
              OTP
            </label>
            <input
              type="text"
              id="otp"
              className="appearance-none border border-gray-300 rounded w-full py-2 px-3 text-gray-700
               leading-tight focus:outline-none focus:shadow-outline"
              value={otp}
              onChange={handleChange}
              maxLength={6}
              required
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            Verify OTP
          </button>
          <p className="mt-4">
            <Link to="/login" className="text-blue-500 hover:underline">
              Go back to login
            </Link>
          </p>
        </form>
      </div>
    </div>
    <Footer />
    </>
  )
}
export default NewPassword;
