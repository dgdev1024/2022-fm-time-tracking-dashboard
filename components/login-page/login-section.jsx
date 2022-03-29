/**
 * @file components/login-page/login-section.jsx
 */

import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faSignIn } from "@fortawesome/free-solid-svg-icons";
import LoginForm from "./login-form";
import Styles from "./login-section.module.css";

export default function LoginSection() {
  return (
    <section className={`section ${Styles.loginSection}`}>
      <div className={Styles.loginSectionBackground}>
        <Fa icon={faSignIn} />
      </div>
      <div className={Styles.loginSectionContainer}>
        <LoginForm />
      </div>
    </section>
  );
}
