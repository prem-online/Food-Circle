import React from 'react'
import Home from './Main/Home'

// import MuiButton from './Mui/MuiButton'
import MuiButton from './Mui/MuiButton'
import Chatgpt from './HomePageComponents/Chatgpt';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Features from './Main/Features';
import Signup from './authentication/Signup';
import Login from './authentication/Login';
import BasicDashboard from './dashboard/BasicDashboard';
const Paths = () => {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/buttons" element={<MuiButton/>} />
        <Route path="/chatgpt" element={<Chatgpt/>} />

        {/* Authentication  */}
        <Route path="/signup" element={<Signup/>} />
        <Route path="/login" element={<Login/>} />

        {/* User Dashbaords */}


        {/* <Route path="/pricing" component={PricingPage} /> */}
        {/* <Route path="/contact" component={ContactPage} /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default Paths
