import React from 'react'
import Home from './Main/Home'

import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Features from './Main/Features';
import Signup from './authentication/Signup';
import Login from './authentication/Login';
import BasicDashboard from './dashboard/BasicDashboard';
import Logout from './authentication/Logout';
import OrderList from './Orders/OrderList';
const Paths = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/features" element={<Features/>} />

          {/* Authentication  */}
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/logout" element={<Logout/>} />

          {/* User Dashbaords */}
          <Route path="/dashboard" element={<BasicDashboard/>} />

          <Route path="/order/list" element={<OrderList/>} />
          {/* <Route path="/contact" component={ContactPage} /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default Paths

