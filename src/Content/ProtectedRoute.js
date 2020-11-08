import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

function ProtectedRoute({ component: Component }) {
  let loginCheck = useSelector((state) => state.validation.loginCheck);
  return (
    <Route
      render={() => (loginCheck ? Component() : <Redirect to={"/login"} />)}
    />
  );
}
export default ProtectedRoute;
