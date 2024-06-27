// Home.js
import React from 'react';
import Navbar from './Navbar';
import Hero from '../HomePageComponents/Hero';
import Efficiency from '../HomePageComponents/Efficiency';
import Pos from '../HomePageComponents/Pos';
import Benefits from '../HomePageComponents/Benefits';
import Customization from '../HomePageComponents/Customization';
import Reviews from '../HomePageComponents/Reviews';
import Contact from '../HomePageComponents/Contact';
import FoodBusiness from '../HomePageComponents/FoodBusiness';
const Home = () => {
  return (
    <>
     <Hero/>
     <Efficiency/>
     <FoodBusiness/>
    </>
  );
}

export default Home;
