import "../App.css";
import { SplitFlap } from "./SplitFlap";
import headshot from "../assets/headshot.jpeg";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-splitflap">
        <SplitFlap
          lines={[
            "CARTER  ALBERS",
            "DESIGNER + DEVELOPER",
            "TURNING MESSY PROBLEMS INTO CLEAR,",
            "DELIGHTFUL INTERFACES."
          ]}
        />
      </div>

      <div className="hero-photo-wrapper">
        <div className="hero-photo-circle">
          <img
            src={headshot}
            alt="Carter Albers"
            className="hero-photo-img"
          />
        </div>
      </div>
    </header>
  );
}

