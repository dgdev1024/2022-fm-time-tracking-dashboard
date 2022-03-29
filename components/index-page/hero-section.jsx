/**
 * @file components/index-page/hero-section.jsx
 */

import HeroBackground from "./hero-background";
import HeroCaption from "./hero-caption";
import Styles from "./hero-section.module.css";

export default function HeroSection() {
  return (
    <section className={`section ${Styles.heroSection}`} id="home">
      <HeroBackground />
      <HeroCaption />
    </section>
  );
}
