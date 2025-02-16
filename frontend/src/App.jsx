// eslint-disable-next-line no-unused-vars
import React,{useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { ThemeProvider } from './contexts/Theme';
import { AuthProvider } from './contexts/AuthContext';
import  {Toaster} from 'react-hot-toast';
import {  BlogAuthProvider } from './contexts/BlogAuth';
import { Provider } from 'react-redux';
import store from './redux/store/Store';


function App() {

  return (
    <Provider store={store}>
    <ThemeProvider>
    <AuthProvider>
    <BlogAuthProvider>
      <Router>
        <AppRoutes />
      </Router>
      <Toaster />
    </BlogAuthProvider>
    </AuthProvider>
    </ThemeProvider>
    </Provider>
  );
}

export default App;

