import React from "react";
import "./App.css";
import Header from "./header/header";
import ContainerContent from "./main_content/container_content";
import { BrowserRouter } from "react-router-dom";


function App(props) {
  
  return (
    <BrowserRouter>
      <div>
        <Header
          menu={props.state.menu}
          updateInputSearchText={props.updateInputSearchText}
        />
        <ContainerContent
          content={props.state.content}
          
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
