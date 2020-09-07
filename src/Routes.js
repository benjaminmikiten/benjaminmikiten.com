import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import { IndexPage } from "./pages/IndexPage/IndexPage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Route path={"/"}>
        <IndexPage />
      </Route>
    </BrowserRouter>
  );
};
