import React from "react";
import TextCardContainer from "./text_card";
import CardPicture from "./card_picture";
import s from "./card.module.css";
import { showSearchCard } from "../../data/state";

let Card = (props) => {
  // debugger;
  let renderArrCard =
    props.dispatch(showSearchCard()).length === 0 ? (
      <div className={s.nothingFound}>"Nothing found"</div>
    ) : (
      props.dispatch(showSearchCard()).map((card) => {
        return (
          <a href="/#" className={s.card} key={card.head}>
            <CardPicture relative_url_picture={card.relative_url_picture} />
            <TextCardContainer
              head={card.head}
              description={card.description}
              dispatch={props.dispatch}
            />
          </a>
        );
      })
    );

  // return <div className={s.container}>{renderArrCard}</div>;
  return <div className={s.container}>{renderArrCard}</div>;
};

export default Card;
