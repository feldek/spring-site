import React from "react";
import "./App.css";
import ValidationPage from "./Content/ValidationPage";
import { Switch, Route } from "react-router-dom";

import MainPage from "./MainPage";
import ProtectedRoute from "./Content/ProtectedRoute";
import PageNotFound from "./Content/PageNotFound";
import RedirectAuthorized from "./Content/RedirectAuthorized";

function App(props) {
  return (
    <div>
      <Switch>
        <ProtectedRoute exact path={"/"} component={MainPage} />
        <RedirectAuthorized exact path={"/login"} component={ValidationPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
}

export default App;
