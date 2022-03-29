/**
 * @file components/index-page/testimonial-card.jsx
 */

import { useState } from "react";
import Image from "next/image";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faStar as faStarSolid } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarRegular } from "@fortawesome/free-regular-svg-icons";
import Styles from "./testimonial-card.module.css";

export default function TestimonialCard({ name, image, rating, children }) {
  const [stars, _] = useState(rating > 5 ? 5 : rating < 1 ? 1 : rating);

  return (
    <div className={Styles.testimonialCard}>
      <div className={Styles.testimonialCardImage}>
        <Image src={image} layout="fill" objectFit="cover" />
      </div>
      <h2 className={Styles.testimonialCardHeading}>{name}</h2>
      <div className={Styles.testimonialCardRating}>
        {[...Array(stars)].map((_, index) => (
          <Fa key={index} icon={faStarSolid} />
        ))}
        {[...Array(5 - stars)].map((_, index) => (
          <Fa key={index} icon={faStarRegular} />
        ))}
      </div>
      <p className={Styles.testimonialCardText}>"{children}"</p>
    </div>
  );
}
