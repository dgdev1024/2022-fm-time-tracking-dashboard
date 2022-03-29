/**
 * @file components/auth-guard.jsx
 */

import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import { FontAwesomeIcon as Fa } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import Styles from "./auth-guard.module.css";

export default function AuthGuard({
  requireAuth,
  requireNoAuth,
  redirect = "/",
  children,
} = {}) {
  const { replace } = useRouter();
  const { status } = useSession();

  if (!!requireAuth === !!requireNoAuth) {
    throw new Error(
      "[AuthGuard] Props 'requireAuth' and 'requireNoAuth' cannot be set to the same value."
    );
  }

  if (status === "loading") {
    return (
      <div className={Styles.authGuardLoading}>
        <Fa icon={faSpinner} />
      </div>
    );
  }

  if (requireAuth === true) {
    if (status !== "authenticated") {
      replace(redirect);
      return null;
    }
    return <>{children}</>;
  } else {
    if (status !== "unauthenticated") {
      replace(redirect);
      return null;
    }
    return <>{children}</>;
  }
}
