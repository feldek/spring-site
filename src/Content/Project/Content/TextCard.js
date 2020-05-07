import React from "react";
import s from "./TextCard.module.css";
import { highlightSearchText } from "../../../Data/State";

let TextCardContainer = (props) => {
  return (
    <div className={s.content}>
      <div
        className={s.head}
        dangerouslySetInnerHTML={props.dispatch(
          highlightSearchText(props.head)
        )}
      ></div>
      <p
        dangerouslySetInnerHTML={props.dispatch(
          highlightSearchText(props.description)
        )}
      ></p>
    </div>
  );
};
export default TextCardContainer;
