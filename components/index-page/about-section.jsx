/**
 * @file components/index-page/about-section.jsx
 */

import { useMediaQuery } from "../../hooks/use-media-query";
import ScrollingImage from "../scrolling-image";
import Styles from "./about-section.module.css";

export default function AboutSection() {
  const isDesktop = useMediaQuery("(min-width: 800px)");

  return (
    <section className={`section ${Styles.aboutSection}`} id="about">
      <div className={`sectionContainer ${Styles.aboutSectionContainer}`}>
        <div className={Styles.aboutSectionImage}>
          <ScrollingImage
            source={
              isDesktop
                ? "/images/desktop-design.jpg"
                : "/images/mobile-design.jpg"
            }
            vertical={isDesktop === false}
          />
        </div>
        <div className={Styles.aboutSectionCaption}>
          <h2 className={Styles.aboutSectionHeading}>Manage Your Time</h2>
          <p className={Styles.aboutSectionText}>
            Ever wonder what you could do if there were a 25th hour in the day?
            Make room for that extra hour and realize your vision of a
            perfectly-balanced day with interactive timers which you can toggle
            whenever you're about to do something, whether it's work or play!
          </p>
        </div>
      </div>
    </section>
  );
}
