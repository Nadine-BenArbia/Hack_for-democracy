import React from "react";
import Quotes from "./Quotes.png";
import "./Hero.css";
const Hero = () => {
  return (
    <div className="heroContainer">
      <img className="heroHeader" src={Quotes} alt="Quotes" />
      <div className="heroWrapper">
        <h3>stop wasting time,start saving it</h3>
        <h1>Sign up for your free trial, with the world’s best product tool</h1>
        <button className="heroButtonn"> Start your trial</button>
      </div>
    </div>
  );
};

export default Hero;
