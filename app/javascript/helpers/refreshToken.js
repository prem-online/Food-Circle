import axios from "axios";
import { REFRESH_TOKEN_URL } from "../constants";
export const refreshToken = async (refresh_token) => {
  try {
    const response = await axios.post(REFRESH_TOKEN_URL, {
      refresh_token: refresh_token
    });
    const loginInfo = JSON.parse(localStorage.getItem('login_info'))
    const token = response.data.token
    const refreshToken = response.data.refresh
    loginInfo.token = token
    loginInfo.refresh_token = refreshToken
    loginInfo.logged_in_at = new Date;
    localStorage.removeItem('login_info');
    localStorage.setItem('login_info', JSON.stringify(loginInfo))

    setTimeout(function() {
      location.reload();
    }, 1000);
    
    return token;
  } catch (err) {
    return null;
  }
};

