import React from "react";
import s from "./TextCard.module.css";

let TextCard = (props) => {
  return (
    <div className={s.content}>
      <div
        className={s.head}
        dangerouslySetInnerHTML={props.highlightSearchText(
          props.inputSearchText,
          props.head
        )}
      ></div>
      <p
        dangerouslySetInnerHTML={props.highlightSearchText(
          props.inputSearchText,
          props.description
        )}
      ></p>
    </div>
  );
};
export default TextCard;
