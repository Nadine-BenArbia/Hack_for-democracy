import React from "react";
import "./Features.css";
import { GiAlarmClock } from "react-icons/gi";
import { MdDone, MdWebAsset, MdOutlineFingerprint } from "react-icons/md";
const Features = () => {
  return (
    <div className="FeaturesWrapper">
      <div className="F_wrap">
        <h2 className="featureTitle">What Quickly can do for you</h2>
        <span>We are more than just another project management software.</span>
      </div>
      <div className="Container">
        <div>
          <GiAlarmClock className="icon" />
          <h3>Secure and Ellable</h3>
          <span>
            Your new projects are simply a click away with our intuitive
            creation flow
          </span>
        </div>
        <div>
          <MdDone className="icon" />
          <h3>Flexible and Simple to Use</h3>
          <span>
            You receive notifications whenever a team member finishes a task
          </span>
        </div>
        <div>
          <MdWebAsset className="icon" />
          <h3>Works on the web</h3>
          <span>
            Don’t download an application when you can just work in browser
          </span>
        </div>
        <div>
          <MdOutlineFingerprint className="icon" />
          <h3>Highly secure interface</h3>
          <span>
            Use biometrics, 2FA and more to ensure your security in here
          </span>
        </div>
      </div>
    </div>
  );
};

export default Features;
