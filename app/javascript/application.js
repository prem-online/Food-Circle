// Entry point for the build script in your package.json
import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './components/Main/Home';
import Navbar from './components/Main/Navbar';
import Footer from './components/Main/Footer';
import MuiButton from './components/Mui/MuiButton'
import Chatgpt from './components/HomePageComponents/Chatgpt';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Features from './components/Main/Features';
import Signup from './components/authentication/Signup';
import Login from './components/authentication/Login';
// import PricingPage from './PricingPage';
// import ContactPage from './ContactPage';
function App() {
  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/features" element={<Features/>} />
          <Route path="/buttons" element={<MuiButton/>} />
          <Route path="/chatgpt" element={<Chatgpt/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Login/>} />



          {/* <Route path="/pricing" component={PricingPage} /> */}
          {/* <Route path="/contact" component={ContactPage} /> */}
        </Routes>
      </BrowserRouter>
      <Footer/>
    </>
);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);