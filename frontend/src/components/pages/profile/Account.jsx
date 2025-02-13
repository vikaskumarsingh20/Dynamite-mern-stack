// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ThemeContext } from '../../../contexts/Theme'
import axios from 'axios'
import Navbar from '../../home/NavBar'
import Footer from '../../home/Footer'

function Account() {
  const { darkMode } = useContext(ThemeContext)
  const [image, setImage] = useState('')

  useEffect(() => {
    axios.get('https://randomuser.me/api/').then(response => {
      setImage(response.data.results[0].picture.large)
    })
  }, [])

  return (
    <>
        <Navbar />
        
    <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-200'} flex flex-col items-center justify-center h-screen`}>
      <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} rounded-lg shadow-lg p-8 md:p-16`}>
        <h1 className="text-4xl font-bold">Your Profile</h1>
        <div className="flex items-center justify-center mt-8">
          <img src={image} className="rounded-full w-40 h-40" alt="profile" />
          <div className="ml-8">
            <h2 className="text-2xl font-bold">{image && image.split('/')[4]}</h2>
            <p className="text-lg">{image && image.split('/')[5]}</p>
            <p className="text-lg">{image && image.split('/')[4] + '@example.com'}</p>
            <Link to="/account/edit-profile">
              <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                Edit Profile
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  )
}

export default Account
