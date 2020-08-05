import React from "react";

import { Theme } from "./styles/Theme";
import { GlobalStyle, BodyStyle } from "./styles/GlobalStyle";
import { Routes } from "./Routes";

export const AppContext = React.createContext();
export function App() {
  const context = {};
  return (
    <Theme className="the-whole-enchilada">
      <AppContext.Provider value={context}>
        <GlobalStyle />
        <BodyStyle />
        <Routes />
      </AppContext.Provider>
    </Theme>
  );
}
