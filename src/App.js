import React from "react";
import "./App.css";
import ValidationPage from "./Content/ValidationPage";
import { Switch, Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import MainPage from "./MainPage";
import ProtectedRoute from "./Content/ProtectedRoute";
import PageNotFound from "./Content/PageNotFound";

function App(props) {
  let loginCheck = useSelector((state) => state.validation.loginCheck);
  return (
    <div>
      <Link to={"/login"}></Link>
      <Switch>
        <ProtectedRoute exact path={"/"} loginCheck={loginCheck}>
          <MainPage />
        </ProtectedRoute>
        <Route exact path={"/login"}>
          <ValidationPage />
        </Route>
        <Route>
          <PageNotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
