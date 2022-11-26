import React from "react";
import "./Help.css";
import step1 from "./step1.png";
import step2 from "./step2.png";
import step3 from "./step3.png";
const Help = () => {
  return (
    <div className="helpContainer">
      <h1>How Quickly helps you get more done</h1>
      <div className="helpWrapper">
        <div className="help">
          <img src={step1} alt="step" />
          <h2>share your experience with us</h2>
          <p>
            Your new projects are simply a click away with our intuitive
            creation flow
          </p>
        </div>
        <div className="help">
          <img src={step2} alt="step" />
          <h2>share your experience with us</h2>
          <p>
            Your new projects are simply a click away with our intuitive
            creation flow
          </p>
        </div>
        <div className="help">
          <img src={step3} alt="step" />
          <h2>share your experience with us</h2>
          <p>
            Your new projects are simply a click away with our intuitive
            creation flow
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
