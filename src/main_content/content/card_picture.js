import React from "react";
import s from "./card_picture.module.css"
let CardPicture = (props) => {
  return (
    <div className={s.picture}>      
      <img src={props.relative_url_picture} alt="icon-card" />
    </div>
  );
};
export default CardPicture;