import React from "react";
import "./Overview.css";
import step1 from "./step1.png";
import step2 from "./step2.png";
import step3 from "./step3.png";
import step0 from "./step0.png";
const Overview = () => {
  return (
    <div className="overview">
      <div className="overviewWrapperImg">
        <img className="img0" src={step0} />
        <img className="img1" src={step1} />
        <img className="img2" src={step2} />
        <img className="img3" src={step3} />
      </div>
      <div className="overviewWrapper">
        <h4>The new way to collaborate online</h4>
        <h1>Be part of the the decision making</h1>
        <h5>with Gov digital garage your experience matter </h5>

        <div className="overview_signin">
          <input className="input" type="text" placeholder="Enter your email" />
          <button className="overviewButton">Sign In</button>
        </div>
      </div>
    </div>
  );
};

export default Overview;
