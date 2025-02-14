// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import Navbar from "../../home/NavBar";
import Footer from "../../home/Footer";
import { BlogAuthContext } from "../../../contexts/BlogAuth";
import Spinner from "../../loading/Spinner";
import { ThemeContext } from "../../../contexts/Theme";

function Blogs() {
  const { darkMode } = useContext(ThemeContext);
  const { loading, posts, page, totalPages, handlePageChange, } = useContext(BlogAuthContext);
  return (
    <div className={`${darkMode ? "bg-gray-700" : "bg-gray-200"}`} >
      <Navbar />
      <div
        className={`flex flex-col items-center justify-center text-left p-6  mx-auto mt-15 w-full max-w-2xl
         ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-black"
          }`}
      >
        <div className="space-y-6">
          <div className="border-b-2 border-b-gray-300 drop-shadow-md bg-white-200">
            <header
              className={`${darkMode ? "bg-gray-800 text-white" : "bg-white-200"
                } py-4 border-b-2 border-b-gray-300 drop-shadow-md`}
            >
              <h1 className="flex flex-col items-center text-3xl font-bold uppercase text-center">
                Blogs{" "}
                <small className="text-sm font-normal">
                  (Page using Context API)
                </small>
              </h1>
            </header>
          </div>
        </div>
        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <div
            className={`flex justify-center items-center h-screen
           ${darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"}`}
          >
            <p className="text-2xl font-semibold">NO POST FOUND.</p>
          </div>
        ) : (
          posts.map((posts) => (
            <div key={posts.id}>
              <p>{posts.title}</p>
              <p>
                By <span className="italic">{posts.author}</span> on{" "}
                <span className="font-semibold underline cursor-pointer">
                  {posts.category}
                </span>
              </p>
              <p>postsed on {posts.date}</p>
              <p>{posts.content}</p>
              <div>
                {posts.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-semibold underline text-blue-700 cursor-pointer mx-1"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
      <div
        className={`inset-x-0 ${darkMode ? "bg-gray-800" : "bg-white-200"
          } py-2 border-t-2 border-t-gray-300`}
      >
        <div className="flex items-center gap-x-3 w-11/12 max-w-2xl mx-auto">
          {page > 1 && (
            <button
              className={`border-2 border-gray-300 py-1 px-4 rounded-md cursor-pointer ${darkMode ? "text-white" : "text-black"
                }`}
              onClick={() => handlePageChange(page - 1)}
            >
              Previous
            </button>
          )}
          {page < totalPages && (
            <button
              className={`border-2 border-gray-300 py-1 px-4 rounded-md cursor-pointer ${darkMode ? "text-white" : "text-black"
                }`}
              onClick={() => handlePageChange(page + 1)}
            >
              Next
            </button>
          )}
          <p
            className={`text-sm font-semibold ml-auto ${darkMode ? "text-white" : "text-black"
              }`}
          >
            Page {page} of {totalPages}
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Blogs;
