/**
 * @file components/login-page/login-form.jsx
 */

import { useState } from "react";
import { signIn } from "next-auth/react";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import Styles from "./login-form.module.css";

export default function LoginForm() {
  const [emailInput, setEmailInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(["", false]);

  const onEmailFormSubmit = async (ev) => {
    ev.preventDefault();

    setLoading(true);
    setMessage(["", false]);

    try {
      const response = await signIn("email", {
        redirect: false,
        email: emailInput,
      });

      if (response.ok) {
        setMessage(["Check your email to complete your login.", false]);
      } else {
        setMessage([`Login error: ${response.error}`, true]);
      }
    } catch (err) {
      console.error(err);
      setMessage(["An error occured. Try again later.", true]);
    }

    setLoading(false);
  };

  return (
    <form className={Styles.loginForm} onSubmit={onEmailFormSubmit}>
      <h1 className={Styles.loginFormHeading}>Sign In</h1>
      <div className={Styles.loginFormElement}>
        <input
          className={Styles.loginFormInput}
          type="email"
          name="emailInput"
          id="emailInput"
          value={emailInput}
          onChange={(ev) => setEmailInput(ev.target.value)}
          required
        />
        <label className={Styles.loginFormLabel} htmlFor="emailInput">
          Email Address
        </label>
      </div>
      <button
        className={Styles.loginFormSubmit}
        type="submit"
        disabled={emailInput === "" || loading === true}
      >
        {loading === false ? "Sign In with Email" : "Authenticating..."}
      </button>
      {message[0] && (
        <p
          className={`${Styles.loginFormResult} ${
            message[1] === true && Styles.loginFormError
          }`}
        >
          {message[0]}
        </p>
      )}
    </form>
  );
}
