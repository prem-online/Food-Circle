import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const navigate = useNavigate();
  const [counter, setCounter] = useState(5); // Initial countdown time in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter(prevCounter => prevCounter - 1);
    }, 1000);

    // Cleanup function to clear interval when component unmounts or counter reaches 0
    return () => {
      clearInterval(timer);
    };
  }, []);

  useEffect(() => {
    // Redirect to login page when counter reaches 0
    if (counter === 0) {
      localStorage.removeItem('token');
      navigate('/login');
    }
  }, [counter, navigate]);

  return (
    <div>
      Logged out successfully.
      Redirecting to the login page in {counter} seconds.
    </div>
  );
};

export default Logout;
