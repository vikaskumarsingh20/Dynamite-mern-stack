// eslint-disable-next-line no-unused-vars
import React, { createContext, useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';
import { auth, googleProvider, signInWithPopup } from "../services/firebaseConfig";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(() => {
    return localStorage.getItem("isLoggedIn") === "true";
  });
  const [user, setUser] = useState(null);

  // const navigate = useNavigate();
  useEffect(() => {
    localStorage.setItem("isLoggedIn", isLoggedIn);
  }, [isLoggedIn]);


const login = (email, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      toast.success("Login successful! 🎉");
    } else {
      toast.error("Invalid email or password. Try again!");
    }
  };

  const signup = (email, password, repeatPassword) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
  
    // Check if passwords match
    if (password !== repeatPassword) {
      toast.error("Passwords do not match. Please try again.");
      return false;
    }
  
    // Check if email is already registered
    const userExists = users.some((user) => user.email === email);
    if (userExists) {
      toast.error("User already exists. Try logging in!");
      return false;
    }
  
    // Save new user to localStorage
    users.push({ email, password });
    localStorage.setItem("users", JSON.stringify(users));
    toast.success("Signup successful! Please log in.");
    return true;
  };
  
  

const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const userData = {
        email: result.user.email,
        name: result.user.displayName,
        photo: result.user.photoURL,
      };

      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(userData));
      setIsLoggedIn(true);
      setUser(userData);

      toast.success(`Welcome, ${userData.name}!`);
      // navigate("/");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      toast.error("Google Sign-In failed. Try again.");
    }
  };
  
  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
    toast.success("You have been logged out");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout, signup,loginWithGoogle }}>
         <Toaster />
      {children}
    </AuthContext.Provider>
  );
};

