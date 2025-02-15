// eslint-disable-next-line no-unused-vars
import React, { useContext } from 'react';
import { ThemeContext } from '../../contexts/Theme';

const Spinner = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className={`animate-spin rounded-full h-5 w-5 border-b-2 ${darkMode ? 'border-white' : 'border-gray-900'}`}></div>
    </div>
  );
};

export default Spinner;

