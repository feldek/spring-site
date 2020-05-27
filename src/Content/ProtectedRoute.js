import React from "react";
import { Route, Redirect } from "react-router-dom";

function ProtectedRoute({ children, loginCheck }) {
  return (
    <Route
      render={() => (loginCheck ? children : <Redirect to={"/login"} />)}
    />
  );
}
export default ProtectedRoute;
