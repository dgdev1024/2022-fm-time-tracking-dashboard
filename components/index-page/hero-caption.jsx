/**
 * @file components/index-page/hero-caption.jsx
 */

import Link from "next/link";
import { useSession } from "next-auth/react";
import Styles from "./hero-caption.module.css";

export default function HeroCaption() {
  const { status } = useSession();

  return (
    <div className={Styles.heroCaptionContainer}>
      <div className={Styles.heroCaption}>
        <h1 className={Styles.heroCaptionHeading}>Keep Track</h1>
        <p className={Styles.heroCaptionText}>
          Maintain your daily balance with interactive timers with the Time
          Tracking Dashboard!
        </p>
        {status !== "loading" &&
          (status === "authenticated" ? (
            <Link href="/dashboard">
              <a className={`button ${Styles.heroCaptionButton}`}>
                Manage Your Time
              </a>
            </Link>
          ) : (
            <Link href="/login">
              <a className={`button ${Styles.heroCaptionButton}`}>
                Sign In or Register
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
}
