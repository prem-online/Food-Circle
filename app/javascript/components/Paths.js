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
import NewOrder from './Orders/NewOrder';
import MenuList from './Menu/MenuList';
import ShowOrder from './Orders/ShowOrder';
import EditOrder from './Orders/EditOrder';
import NewMenu from './Menu/NewMenu';
import EditMenu from './Menu/EditMenu';
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
          <Route path="/orders/new" element={<NewOrder/>} />
          <Route path="/orders/:id" element={<ShowOrder/>} />
          <Route path="/orders/:id/edit" element={<EditOrder/>} />

          <Route path="/menu/list" element={<MenuList/>} />
          <Route path="menus/new" element={<NewMenu/>} />
          <Route path="/menus/:id/edit" element={<EditMenu/>} />

        </Routes>
    </BrowserRouter>
  )
}

export default Paths

