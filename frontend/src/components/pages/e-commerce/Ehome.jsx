// eslint-disable-next-line no-unused-vars
import React, { useContext, useEffect, useState } from 'react'
import Enavbar from './Enavbar'
import Navbar from '../../home/NavBar'
import Footer from '../../home/Footer'
import { fakeUrl } from './data'
import Spinner from '../../loading/Spinner'
import Eproducts from './Eproducts'
import { ThemeContext } from '../../../contexts/Theme'

function Ehome() {
  const{darkMode} = useContext(ThemeContext)

  // const [data, setData] = useState([])
  const[posts,setPosts] = useState([])
  const [loading, setLoading] = useState(false)

  async function fetchData() {
    setLoading(true);
    try {
      const response = await fetch(fakeUrl)
      const data = await response.json()
      setPosts(data)

    } catch (error) {
      console.error("Error come from fake api",error)
      setPosts([])
    } finally {
      setLoading(false)
    }
  }
useEffect(() => {
  fetchData()
}, [])

  return (
    <>
      <Navbar />

      <div className={`${darkMode ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
        <Enavbar />

        <div>
          {loading ? <Spinner /> : posts.length > 0 ? (
            <div className={`min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 
            max-w-6xl mx-auto p-2 ${darkMode ? 'bg-gray-700' : 'bg-white'}`}>
              {posts.map((post) => (
                <Eproducts key={post.id} post={post} />
              ))}
            </div>
          ) : (<div>data not found</div>)}
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Ehome