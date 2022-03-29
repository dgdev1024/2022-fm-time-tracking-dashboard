/**
 * @file pages/_app.jsx
 */

import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout";
import "../global.css";

export default ({ Component, pageProps: { session, ...pageProps } }) => {
  return (
    <SessionProvider session={session}>
      <Layout>
        <main className={`main`}>
          <Component {...pageProps} />
        </main>
      </Layout>
    </SessionProvider>
  );
};
