/**
 * @file pages/index.jsx
 */

import { signIn, signOut, useSession } from "next-auth/react";

export default () => {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <>
        <h1>Signed In</h1>
        <p>Signed in as {session.user.email}.</p>
        <button onClick={() => signOut()}>Sign Out</button>
      </>
    );
  } else {
    return (
      <>
        <h1>Click Below To Log In</h1>
        <button onClick={() => signIn()}>Sign In</button>
      </>
    );
  }
};
