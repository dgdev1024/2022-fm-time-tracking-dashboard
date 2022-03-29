/**
 * @file components/layout.jsx
 */

import Styles from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <>
      {children}
      <footer className={Styles.footer}>
        <p className={Styles.footerText}>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
            Frontend Mentor
          </a>
          . Enhanced by{" "}
          <a href="https://dgdev1024.com" target="_blank">
            Dennis Griffin
          </a>
          .
        </p>
      </footer>
    </>
  );
}
