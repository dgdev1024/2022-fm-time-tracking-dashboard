/**
 * @file pages/_app.jsx
 */

import "../global.css";

export default ({ Component, pageProps }) => {
  return (
    <main className={`main`}>
      <Component {...pageProps} />
    </main>
  );
};
