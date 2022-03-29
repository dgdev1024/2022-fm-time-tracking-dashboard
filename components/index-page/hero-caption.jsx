/**
 * @file components/index-page/hero-caption.jsx
 */

import Styles from "./hero-caption.module.css";

export default function HeroCaption() {
  return (
    <div className={Styles.heroCaptionContainer}>
      <div className={Styles.heroCaption}>
        <h1 className={Styles.heroCaptionHeading}>Keep Track</h1>
        <p className={Styles.heroCaptionText}>
          Maintain your daily balance with interactive timers with the Time
          Tracking Dashboard!
        </p>
        <button className={`button ${Styles.heroCaptionButton}`}>
          Sign In or Register
        </button>
      </div>
    </div>
  );
}
