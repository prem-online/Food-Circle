// Entry point for the build script in your package.json
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import Footer from './components/Main/Footer';
import Paths from './components/Paths';
// import PricingPage from './PricingPage';
// import ContactPage from './ContactPage';
function App() {
  return (
    <>
      <Paths/>
      <Footer/>
    </>
);
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(
    <App/>
);