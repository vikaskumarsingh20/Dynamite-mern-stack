// eslint-disable-next-line no-unused-vars
import React,{useEffect} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './routes/AppRoutes';
import { api } from './services/api';

function App() {
  const fetchData = async () => {
    try {
      const response = await api.get('/api/data');
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Router>
      <AppRoutes />
    </Router>
  );
}

export default App;
