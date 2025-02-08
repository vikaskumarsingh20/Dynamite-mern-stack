// useFetch.js - Custom Hook
import { useState, useEffect } from 'react';

const useFetch = (url) => {
  // State management for data, loading, and error status
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Main fetch function
  const fetchData = async () => {
    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error('Request failed');
      const jsonData = await response.json();
      setData(jsonData);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // Automatically fetch data when component mounts or URL changes
  useEffect(() => {
    fetchData();
  }, [url]);

  // Return state and refresh capability
  return { data, loading, error, refetch: fetchData };
};

export default useFetch;