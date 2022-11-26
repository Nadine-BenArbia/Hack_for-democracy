import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/HeroSection/Herosection";
import Features from "./components/Features/Features";
import Metrics from "./components/Metrics/Metrics";
import Hero from "./components/Hero/Hero";
import Help from "./components/Help/Help";
import Overview from "./components/Overview/Overview";
import Footer from "./components/Footer/Footer";

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Features />
      <Metrics />
      <Help />
      <Hero />
      <Overview />
      <Footer />
    </div>
  );
};

export default App;
