import React, { useEffect, useState } from 'react';
import axios from 'axios';

function PersonListHooks() {
  const [persons, setPersons] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController(); // Axios supports AbortController
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axios.get('http://localhost:5000/persons', {
          signal: controller.signal,
          
        });
        setPersons(res.data);
      } catch (err) {
        // Distinguish between cancellation, network errors, and HTTP errors
        if (axios.isCancel?.(err) || err.name === 'CanceledError') return;
        if (err.response) {
          // Server responded with a non-2xx status
          setError(`Server error: ${err.response.status} ${err.response.statusText}`);
        } else if (err.request) {
          // No response received
          setError('Network error: no response from server');
        } else {
          // Something else happened while setting up the request
          setError(`Request error: ${err.message}`);
        }
        //Axios errors are handled by checking cancellation first, then server errors (response), network errors (request), and finally request setup errors (message).
      } finally {
        setLoading(false);
      }
    };

    fetchData();
    return () => controller.abort(); // Cleanup: cancel in-flight request on unmount
  }, []); // Empty dependency array: run once on mount

  if (loading) return <p>Loading users…</p>;
  if (error) return <p role="alert">{error}</p>;

  return (
    <ul>
      {persons.map((person) => (
        <li key={person.id}>{person.name}</li>
      ))}
    </ul>
  );
}

export default PersonListHooks;