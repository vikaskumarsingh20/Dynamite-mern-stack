import React, { useContext } from "react";
import Navbar from "../../home/NavBar";
import Footer from "../../home/Footer";
import { BlogAuthContext } from "../../../contexts/BlogAuth";
import Spinner from "../../loading/Spinner";

function Blogs() {
  const { loading, posts } = useContext(BlogAuthContext);
  console.log("this is posts",posts);
  return (
    <>
      <Navbar />
      <div>
        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <div className="flex justify-center items-center h-screen">
            <p className="text-2xl font-semibold">No posts found.</p>
          </div>
        ) : (
          posts.map((post) => (
            <div key={post.id}>
              <p>{post.title}</p>
              <p>
                By <span className="italic">{post.author}</span> on{" "}
                <span className="font-semibold underline cursor-pointer">
                  {post.category}
                </span>
              </p>
              <p>posted on {post.date}</p>
              <p>{post.content}</p>
              <div>
                {post.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="text-xs font-semibold underline text-blue-700 cursor-pointer"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}

export default Blogs;
