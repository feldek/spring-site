import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function RedirectAuthorized({ component: Component }) {
  let loginCheck = useSelector((state) => state.validation.loginCheck);
  return (
    <Route
      render={() => (loginCheck ? <Redirect to={"/"} /> : <Component />)}
    />
  );
}
export default RedirectAuthorized;
