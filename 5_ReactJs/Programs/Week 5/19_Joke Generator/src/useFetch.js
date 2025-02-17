
// // Complete the following hook
// const useFetch = (url) => {
//   const getJoke = async () => {
//   };
//   //It should return data returned from fetch, loading, error and getJoke
// };
// // export the useFetch hook as a default export
import { useState } from 'react';

const useFetch = (url) => {
  // States to manage data, loading, and error
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Function to fetch data from the provided URL
  const getJoke = async () => {
    setLoading(true);
    setError(null); // Reset error on each new fetch

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
    } catch (error) {
      setError(error.message); // Set error message on failure
    } finally {
      setLoading(false); // Set loading to false once data is fetched
    }
  };

  // Fetch data when the hook is initialized
  useState(() => {
    getJoke();
  }, [url]);

  // Return the fetched data, loading status, error, and the getJoke function
  return { data, loading, error, getJoke };
};

export default useFetch;
