/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { blogUrl } from "../components/pages/blog/blogUrl";

export const BlogAuthContext = createContext();

export const BlogAuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]); // renamed for clarity
    const [page, setPage] = useState(1);
    const [totalPage, setTotalPage] = useState(null);

    const fetchBlogs = async () => {
        setLoading(true);
        try {
            const response = await fetch(`${blogUrl}?page=${page}`);
            console.log("Response:", response);
            const data = await response.json();
            setPage(data.page);
            setPosts(data.blogs);
            setTotalPage(data.totalPage);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setPosts([]);
            setTotalPage(null);
            setPage(1);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (page) => {
        setPage(page);
        fetchBlogs();
    };

    useEffect(() => {
        fetchBlogs();
    }, [page]);

    return (
        <BlogAuthContext.Provider
            value={{
                loading,
                posts,
                setPosts,
                page,
                setPage,
                totalPage,
                setTotalPage,
                handlePageChange,
            }}
        >
            {children}
        </BlogAuthContext.Provider>
    );
};
