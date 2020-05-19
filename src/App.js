import React from "react";
import "./App.css";
import Header from "./MainHeader/Header";
import ContainerContent from "./Content/Project/ContainerContent";
import ValidationPage from "./Content/ValidationPage";
import { Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function App(props) {
  let loginCheck = useSelector((state) => state.validation.loginCheck);
  return (
    <div>
      {loginCheck && (
        <div>
          <Redirect to={"/"} />
          <Route
            path="/"
            render={() => (
              <div>
                <Header />
                <ContainerContent />
              </div>
            )}
          />
        </div>
      )}
      {!loginCheck && (
        <div>
          <Redirect to={"/login"} />
          <Route exact path="/login" render={() => <ValidationPage />} />
        </div>
      )}
    </div>
  );
}

export default App;
