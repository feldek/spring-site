import React from "react";
import s from "./CardPicture.module.css";

let CardPicture = (props) => {
  return (
    <div className={s.picture}>
      <img src={props.relativeUrlPicture} alt="icon-card" />
    </div>
  );
};
export default CardPicture;
