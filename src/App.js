import React from "react";
import "./App.css";
import Header from "./header/header";
import ContainerContent from "./main_content/container_content";
import { BrowserRouter } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <ContainerContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
