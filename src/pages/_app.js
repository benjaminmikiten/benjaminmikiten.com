import React from "react";

import { Theme } from "../styles/Theme";
// import { Routes } from "../Routes";

export const AppContext = React.createContext();
function App({ Component, pageProps }) {
  const context = {};
  return (
    <Theme className="the-whole-enchilada">
      <AppContext.Provider value={context}>
        <Component {...pageProps} />
      </AppContext.Provider>
    </Theme>
  );
}

export default App;
