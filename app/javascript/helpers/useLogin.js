import { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { refreshToken } from "./refreshToken";
import { timeDiff } from "./common";
// Custom hook to manage login state
export function useLogin() {
  const [success, setSuccess] = useState(true);
  const [token, setToken] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!success) {
      localStorage.clear();
      navigate('/login');
    }
  }, [success, navigate]);

  useEffect(() => {
    const loginInfo = JSON.parse(localStorage.getItem('login_info'));
    if (loginInfo === undefined) {
      setSuccess(false);
      return;
    }

    const checkLoginStatus = async () => {
      const loggedInDiff = timeDiff(loginInfo.logged_in_at, new Date(), 'min');
      if (loggedInDiff > 55) {
        try {
          const response = await refreshToken(loginInfo.refresh_token);
          if (response===null) {
            setSuccess(false);
            return;
          }
          setToken(token);
          setSuccess(true);
        } catch (error) {
          setSuccess(false);
        }
      } else {
        setSuccess(true);
        setToken(loginInfo.token);
      }
    };

    checkLoginStatus();
  }, []);

  return token;
}