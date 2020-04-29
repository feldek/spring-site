import './index.css';
import * as serviceWorker from './serviceWorker';

import state, { subscribe } from './data/state';
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { updateInputSearchText} from "./data/state"

export let reRenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state}  updateInputSearchText={updateInputSearchText}/>
    </React.StrictMode>,
    document.getElementById("root")
  );
};
reRenderEntireTree(state);
subscribe(reRenderEntireTree);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
