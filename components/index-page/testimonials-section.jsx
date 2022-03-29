/**
 * @file components/index-page/testimonials-section.jsx
 */

import TestimonialCard from "./testimonial-card";
import Styles from "./testimonials-section.module.css";

export default function TestimonialsSection() {
  return (
    <section
      className={`section ${Styles.testimonialsSection}`}
      id="testimonials"
    >
      <div
        className={`sectionContainer ${Styles.testimonialsSectionContainer}`}
      >
        <h2 className={Styles.testimonialsSectionHeading}>Testimonials</h2>
        <div className={Styles.testimonialsCardContainer}>
          <TestimonialCard
            name="Jeremy Robson"
            image="/images/image-jeremy.png"
            rating={5}
          >
            For as long as I can remember, I have had issues keeping a healthy
            balance between work and leisure. Ever since I discovered and
            started using the Time Tracking Dashboard, I have had a far easier
            time focusing my time on all of the things that matter most dearly
            to me, and I've become a more happier and healthier person for it.
          </TestimonialCard>
        </div>
      </div>
    </section>
  );
}
