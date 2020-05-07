import React from "react";
import "./App.css";
import Header from "./Header/Header";
import ContainerContent from "./Content/Project/ContainerContent";
import { BrowserRouter } from "react-router-dom";

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Header menu={props.state.menu} dispatch={props.dispatch} />
        <ContainerContent
          content={props.state.content}
          dispatch={props.dispatch}
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
