import React, { useState } from "react";
import "./App.css";
import Header from "./Header/Header";
import ContainerContent from "./Content/Project/ContainerContent";


function App(props) {
  let [inputSearchText, setInputSearchText] = useState("");
  const updateInputSearchText = (text) => {
    setInputSearchText(text);
  };
  const resetInputSearchText = () => {
    setInputSearchText("");
  };

  return (

      <div>
        <Header
          updateInputSearchText={updateInputSearchText}
          resetInputSearchText={resetInputSearchText}
          inputSearchText={inputSearchText}
        />
        <ContainerContent
          inputSearchText={inputSearchText}
        />
      </div>

  );
}

export default App;
