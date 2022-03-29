/**
 * @file components/index-page/hero-background.jsx
 */

import { useState, useEffect } from "react";
import Image from "next/image";
import Styles from "./hero-background.module.css";

const BackgroundCards = [
  { className: "heroBackgroundCardWork", image: "/images/icon-work.svg" },
  { className: "heroBackgroundCardPlay", image: "/images/icon-play.svg" },
  { className: "heroBackgroundCardStudy", image: "/images/icon-study.svg" },
  {
    className: "heroBackgroundCardExercise",
    image: "/images/icon-exercise.svg",
  },
  { className: "heroBackgroundCardSocial", image: "/images/icon-social.svg" },
  { className: "heroBackgroundCardSelf", image: "/images/icon-self-care.svg" },
];

export default function HeroBackground() {
  const [currentCard, setCurrentCard] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCard((card) => (card + 1) % BackgroundCards.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [currentCard]);

  return (
    <div className={Styles.heroBackground}>
      {BackgroundCards.map((card, index) => (
        <div
          key={index}
          className={`${Styles.heroBackgroundCard} ${Styles[card.className]} ${
            currentCard === index && Styles.heroBackgroundCardActive
          }`}
        >
          <img
            className={Styles.heroBackgroundCardImage}
            src={card.image}
            alt={`Hero Background Image #${index + 1}`}
          />
        </div>
      ))}
    </div>
  );
}
