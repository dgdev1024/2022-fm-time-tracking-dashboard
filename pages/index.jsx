/**
 * @file pages/index.jsx
 */

import HeroSection from "../components/index-page/hero-section";
import AboutSection from "../components/index-page/about-section";
import TestimonialsSection from "../components/index-page/testimonials-section";

export default () => {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <TestimonialsSection />
    </>
  );
};
