import React from "react";
import Head from "next/head";
import { Theme } from "../styles/Theme";

export const AppContext = React.createContext();
function App({ Component, pageProps }) {
  const context = {};
  return (
    <Theme className="the-whole-enchilada">
      <AppContext.Provider value={context}>
        <Head>
          <title>Benjamin Mikiten</title>
        </Head>
        <Component {...pageProps} />
      </AppContext.Provider>
    </Theme>
  );
}

export default App;
