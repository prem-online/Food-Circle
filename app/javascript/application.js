// Entry point for the build script in your package.json
import React from 'react';
import { createRoot } from 'react-dom/client';
import Home from './components/Main/Home';
import {
  BrowserRouter,
  Routes, // instead of "Switch"
  Route,
} from "react-router-dom";

import Features from './components/Main/Features';
// import PricingPage from './PricingPage';
// import ContactPage from './ContactPage';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/features" element={<Features/>} />
          {/* <Route path="/pricing" component={PricingPage} /> */}
          {/* <Route path="/contact" component={ContactPage} /> */}
        </Routes>
      </BrowserRouter>
    </>
);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App/>);