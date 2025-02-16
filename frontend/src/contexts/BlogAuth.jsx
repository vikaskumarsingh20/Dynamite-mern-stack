/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useState, useEffect } from "react";
import { blogUrl } from "../components/pages/blog/blogUrl";

export const BlogAuthContext = createContext();

export const BlogAuthProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(null);

    const fetchBlogs = async (page = 1) => {
        setLoading(true);
        try {
            const response = await fetch(`${blogUrl}?page=${page}`);
            const data = await response.json();
            setPage(data.page);
            setPosts(data.posts);
            setTotalPages(data.totalPages);
        } catch (error) {
            console.error("Error fetching blogs:", error);
            setPosts([]);
            setTotalPages(null);
            setPage(1);
        } finally {
            setLoading(false);
        }
    };

    const handlePageChange = (newPage) => {
        setPage(newPage);
    };

    useEffect(() => {
        fetchBlogs(page);
    },[page]);

    return (
        <BlogAuthContext.Provider
            value={{
                loading,
                posts,
                setPosts,
                page,
                setPage,
                totalPages,
                setTotalPages,
                handlePageChange,
                
            }}
        >
            {children}
        </BlogAuthContext.Provider>
    );
};
