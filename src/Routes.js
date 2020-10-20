import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import { IndexPage } from "./pages/IndexPage/IndexPage";
import { ProjectsPage } from "./pages/ProjectsPage/ProjectsPage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact>
          <IndexPage />
        </Route>
        <Route path={"/projects"} exact>
          <ProjectsPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
