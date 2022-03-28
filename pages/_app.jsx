/**
 * @file pages/_app.jsx
 */

import { SessionProvider } from "next-auth/react";
import "../global.css";

export default ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <main className={`main`}>
        <Component {...pageProps} />
      </main>
    </SessionProvider>
  );
};
