import React from "react";
import TextCardContainer from "./text_card";
import CardPicture from "./card_picture";
import s from "./card.module.css";



let Card = (props) => {
  let renderArrCard = props.content.arr_card.map((card) => {
    return (
      <a href="/#" className={s.card} key={card + Math.random()}>
      <CardPicture relative_url_picture={card.relative_url_picture} />
      <TextCardContainer head={card.head} description={card.description} />
    </a>
    );
    
  });

  return <div className={s.container}>{renderArrCard}</div>;
};



export default Card;
