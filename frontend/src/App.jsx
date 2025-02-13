// eslint-disable-next-line no-unused-vars
import React,{useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from './contexts/Theme';
import { AuthProvider } from './contexts/AuthContext';
import  {Toaster} from 'react-hot-toast';


function App() {

  return (
    <ThemeProvider>
    <AuthProvider>
    <Toaster />
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
    </ThemeProvider>
  );
}

export default App;

