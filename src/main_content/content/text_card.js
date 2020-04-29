import React from "react";
import s from "./text_card.module.css"
let TextCardContainer = (props) => {
  return (
    <div className={s.content}>
      <div className={s.head}>{props.head}</div>
      <p>{props.description}</p>
    </div>
  );
};
export default TextCardContainer;