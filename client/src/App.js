import React, { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Herosection from "./components/HeroSection/Herosection";
import Features from "./components/Features/Features";
import Metrics from "./components/Metrics/Metrics";
import Hero from "./components/Hero/Hero";

const App = () => {
  return (
    <div>
      <Navbar />
      <Herosection />
      <Features />
      <Metrics />
      <Hero />
    </div>
  );
};

export default App;
