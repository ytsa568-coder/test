import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Welcome to</h2>
            <h1>
              TRIAD
              <br />
              <span>EDITING</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>Creative</h3>
            <h2 className="landing-info-h2">
              <div className="landing-h2-1">Video</div>
              <div className="landing-h2-2">Editing</div>
            </h2>
            <h2>
              <div className="landing-h2-info">Editing</div>
              <div className="landing-h2-info-1">Video</div>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
