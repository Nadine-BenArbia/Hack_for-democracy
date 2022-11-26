import React from "react";
import Avatar from "./Avatar.png";
import image1 from "./image1.png";
import image2 from "./image2.png";
import "./HeroSection.css";
const Herosection = () => {
  return (
    <div className="heroSection">
      <div className="heroSectionWrapper">
        <h4 className="Title">The new xay to practice democracy</h4>
        <h1 className="subTitle">Get the important work done faster</h1>
        <span>
          {" "}
          with Quickly, you can fet more productive work done in far less time
          than ever before.
        </span>

        <div>
          <button>Sign up</button>
          <button> Learn more</button>
        </div>
      </div>
      <div className="heroSectionImg">
        <img className="avatar" src={Avatar} alt="Logo" />;
        <img className="image1" src={image1} alt="Logo" />;
        <img className="image2" src={image2} alt="Logo" />;
      </div>
    </div>
  );
};

export default Herosection;
