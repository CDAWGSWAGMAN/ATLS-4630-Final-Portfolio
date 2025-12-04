// src/components/Hero.tsx
import "../App.css";
import { SplitFlap } from "./SplitFlap";
import headshot from "../assets/headshot.jpg";

export function Hero() {
  return (
    <header className="hero">
      <div className="hero-splitflap">
        <div className="hero-splitflap-inner">
          <SplitFlap
            lines={[
              "CARTER  ALBERS",
              "UX + FRONT-END DESIGNER AND DEVELOPER",
              "TURNING MESSY PROBLEMS INTO CLEAR,",
              "DELIGHTFUL INTERFACES."
            ]}
          />

          {/* Desktop-only scroll indicator */}
          <div className="hero-scroll-indicator">
            <span className="hero-scroll-label">Scroll</span>
            <span className="hero-scroll-arrow">↓</span>
          </div>
        </div>
      </div>

      <div className="hero-photo-wrapper">
        <div className="hero-photo-circle">
          <img src={headshot} alt="Carter Albers" className="hero-photo-img" />
        </div>
      </div>
    </header>
  );
}
