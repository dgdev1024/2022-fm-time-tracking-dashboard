/**
 * @file components/top-bar.jsx
 */

import Link from "next/link";
import { useSession, signOut } from "next-auth/react";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import {
  faStopwatch,
  faDashboard,
  faSignOut,
  faSignIn,
} from "@fortawesome/free-solid-svg-icons";
import Styles from "./top-bar.module.css";

export default function TopBar() {
  const { data: session, status } = useSession();

  return (
    <header className={Styles.topbar}>
      <div className={Styles.topbarContainer}>
        <Link href="/">
          <a
            className={`button ${Styles.topbarButton} ${Styles.topbarBrand}`}
            aria-label="Time Tracker Dashboard"
            title="Time Tracker Dashboard"
          >
            <Fa icon={faStopwatch} /> <span>Time Tracker Dashboard</span>
          </a>
        </Link>
        {status !== "loading" &&
          (status === "authenticated" ? (
            <nav className={Styles.topbarNav}>
              <Link href="/dashboard">
                <a
                  className={`button ${Styles.topbarButton}`}
                  aria-label="View Dashboard"
                  title="View Dashboard"
                >
                  <Fa icon={faDashboard} /> <span>Dashboard</span>
                </a>
              </Link>
              <button
                className={`button ${Styles.topbarButton}`}
                onClick={() => signOut({ redirect: "/" })}
                aria-label="Sign Out"
                title="Sign Out"
              >
                <Fa icon={faSignOut} /> <span>Sign Out</span>
              </button>
            </nav>
          ) : (
            <nav className={Styles.topbarNav}>
              <Link href="/login">
                <a
                  className={`button ${Styles.topbarButton}`}
                  aria-label="Sign In"
                  title="Sign In"
                >
                  <Fa icon={faSignIn} /> <span>Sign In</span>
                </a>
              </Link>
            </nav>
          ))}
      </div>
    </header>
  );
}
