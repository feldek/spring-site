import React, { useState } from "react";
import "./App.css";
import Header from "./MainHeader/Header";
import ContainerContent from "./Content/Project/ContainerContent";

function App(props) {
  // debugger;
  // let [inputSearchText, setInputSearchText] = useState("");
  // const updateInputSearchText = (text) => {
  //   setInputSearchText(text);
  // };
  // const resetInputSearchText = () => {
  //   setInputSearchText("");
  // };
  return (
    <div>
      <Header
        // updateInputSearchText={updateInputSearchText}
       state={props.state}
        dispatch={props.dispatch}
        // resetInputSearchText={resetInputSearchText}
        // inputSearchText={inputSearchText}
      />
      {/* <ContainerContent inputSearchText={inputSearchText} /> */}
      <ContainerContent state={props.state} />
    </div>
  );
}

export default App;
