import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbarContainer">
      <h1 className="title">Brand.</h1>

      <ul className="navbarElement">
        <li className="element">About Us</li>
        <li className="element">vote</li>
        <li className="element">Proposal</li>
        <li className="element">Debate</li>
        <li className="element">Blog</li>
      </ul>
      <div className="navbarButton">
        <button className="Signup">Sign up</button>
        <button className="Login">Log in</button>
      </div>
    </div>
  );
};

export default Navbar;
