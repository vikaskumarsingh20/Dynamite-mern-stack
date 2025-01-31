// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from '../components/forms/LoginPage';
import SignupPage from '../components/forms/SignupPage';
import Homepage from '../components/home/Homepage';
import NotFoundPage from '../components/home/NotFoundPage';


const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignupPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};

export default AppRoutes;
